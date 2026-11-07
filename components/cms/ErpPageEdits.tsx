'use client';
// components/cms/ErpPageEdits.tsx
// Applies published ERP "edited page" instructions (text, styles, section
// moves/removals) to the current route's DOM in the browser. Mounted once in
// the root layout so it covers code-owned and CMS pages, on first load and on
// every client-side navigation. Renders nothing.
//
// React safety: every change is recorded and reverted in the layout-effect
// cleanup. React runs that cleanup during the commit's mutation phase, and this
// component sits before <main> in <body>, so the DOM is back to the shape React
// expects before React patches or removes the old route's nodes. Removals only
// hide (display: none), and moved nodes go back to their original parent and
// sibling, so React's tree is never left inconsistent.
import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { isSafeStyle, normalizeEditPath, type ErpEdit } from '@/lib/erp-edits-shared';

const CACHE_TTL_MS = 60_000;
const MAX_HIDE_MS = 1500;
const MAX_WAIT_FOR_DOM_MS = 1500;
const API = '/api/erp-edits';

const warn = (...args: unknown[]) => {
  if (process.env.NODE_ENV !== 'production') console.warn('[erp-edits]', ...args);
};

/* ------------------------------ data cache ------------------------------ */

type Cached<T> = { at: number; promise: Promise<T>; value?: T };

let pathsCache: Cached<Set<string>> | null = null;
const editsCache = new Map<string, Cached<ErpEdit[]>>();

const fresh = <T,>(c: Cached<T> | null | undefined): c is Cached<T> =>
  !!c && Date.now() - c.at < CACHE_TTL_MS;

async function getJson(url: string): Promise<Record<string, unknown>> {
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`${url} responded ${res.status}`);
  return (await res.json()) ?? {};
}

function editedPaths(): Cached<Set<string>> {
  if (fresh(pathsCache)) return pathsCache;
  const entry: Cached<Set<string>> = {
    at: Date.now(),
    promise: getJson(API)
      .then((json) => new Set((Array.isArray(json.paths) ? json.paths : []).filter((p): p is string => typeof p === 'string')))
      .catch((error) => {
        warn('could not load edited pages list', error);
        return new Set<string>();
      }),
  };
  entry.promise.then((value) => (entry.value = value));
  pathsCache = entry;
  return entry;
}

function pageEdits(path: string): Promise<ErpEdit[]> {
  const cached = editsCache.get(path);
  if (fresh(cached)) return cached.promise;
  const promise = getJson(`${API}?path=${encodeURIComponent(path)}`).then((json) =>
    Array.isArray(json.edits) ? (json.edits as ErpEdit[]) : [],
  );
  // Don't keep a failed request: the next navigation retries.
  promise.catch(() => editsCache.delete(path));
  editsCache.set(path, { at: Date.now(), promise });
  return promise;
}

// Start loading the list as soon as the client bundle runs.
if (typeof window !== 'undefined') editedPaths();

/* ---------------------------- DOM resolution ---------------------------- */

type Styled = HTMLElement | SVGElement;
type Resolved = { edit: ErpEdit; el: Styled; target?: Styled };

function query(selector: string): Styled | null {
  try {
    const el = document.querySelector(selector);
    return el && 'style' in el ? (el as Styled) : null;
  } catch {
    return null; // invalid selector
  }
}

/** Resolves every selector against the current (original) DOM, before any change. */
function resolveAll(edits: ErpEdit[]): { resolved: Resolved[]; missing: number } {
  const resolved: Resolved[] = [];
  let missing = 0;
  for (const edit of edits) {
    const el = query(edit.selector);
    const target = edit.type === 'sectionMove' ? query(edit.target) : undefined;
    if (!el || target === null) {
      missing++;
      continue;
    }
    resolved.push({ edit, el, target: target ?? undefined });
  }
  return { resolved, missing };
}

/**
 * Waits (briefly) until the route's content is in the DOM: resolves as soon as
 * every selector matches, or with whatever matched at the deadline.
 */
function waitForTargets(edits: ErpEdit[], isCancelled: () => boolean): Promise<Resolved[]> {
  return new Promise((resolve) => {
    let result = resolveAll(edits);
    if (result.missing === 0) return resolve(result.resolved);

    let frame = 0;
    const finish = () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      resolve(isCancelled() ? [] : result.resolved);
    };
    const observer = new MutationObserver(() => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        result = resolveAll(edits);
        if (result.missing === 0 || isCancelled()) finish();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const timer = setTimeout(() => {
      if (result.missing) warn(`${result.missing} edit target(s) not found on this page`);
      finish();
    }, MAX_WAIT_FOR_DOM_MS);
  });
}

/* ---------------------------- apply / revert ---------------------------- */

class EditSession {
  private styles = new Map<Styled, string | null>();
  private texts: { el: Element; nodes: Node[] }[] = [];
  private moves: { el: Element; parent: Node; next: Node | null }[] = [];

  private setStyle(el: Styled, property: string, value: string) {
    if (!this.styles.has(el)) this.styles.set(el, el.getAttribute('style'));
    el.style.setProperty(property, value, 'important');
  }

  apply(resolved: Resolved[]) {
    // 1. Element edits (text + styles).
    for (const { edit, el } of resolved) {
      if (edit.type !== 'elementEdit' || !el.isConnected) continue;
      if (typeof edit.text === 'string') {
        this.texts.push({ el, nodes: Array.from(el.childNodes) });
        el.textContent = edit.text;
      }
      for (const [property, value] of edit.styles) {
        if (!isSafeStyle(property, value)) continue;
        this.setStyle(el, property, value);
        if (property === 'color' || property === 'text-decoration') {
          el.querySelectorAll('*').forEach((child) => {
            if ('style' in child) this.setStyle(child as Styled, property, value);
          });
        }
      }
    }
    // 2. Moves and removals, in order.
    for (const { edit, el, target } of resolved) {
      if (!el.isConnected) continue;
      if (edit.type === 'sectionRemove') {
        this.setStyle(el, 'display', 'none');
      } else if (edit.type === 'sectionMove' && target?.isConnected && target !== el && !el.contains(target)) {
        const parent = el.parentNode;
        if (!parent) continue;
        this.moves.push({ el, parent, next: el.nextSibling });
        if (edit.position === 'before') target.before(el);
        else target.after(el);
      }
    }
  }

  revert() {
    for (const { el, parent, next } of this.moves.reverse()) {
      try {
        if (next && next.parentNode === parent) parent.insertBefore(el, next);
        else if (!next) parent.appendChild(el);
      } catch (error) {
        warn('could not restore moved section', error);
      }
    }
    for (const { el, nodes } of this.texts.reverse()) el.replaceChildren(...nodes);
    this.styles.forEach((original, el) => {
      if (original === null) el.removeAttribute('style');
      else el.setAttribute('style', original);
    });
    this.moves = [];
    this.texts = [];
    this.styles.clear();
  }
}

/** Hides <main> while edits load; returns an idempotent reveal function. */
function hideMain(): () => void {
  const main = document.querySelector<HTMLElement>('body > main');
  if (!main) return () => {};
  const value = main.style.getPropertyValue('opacity');
  const priority = main.style.getPropertyPriority('opacity');
  main.style.setProperty('opacity', '0', 'important');
  let revealed = false;
  const timer = setTimeout(() => reveal(), MAX_HIDE_MS);
  function reveal() {
    if (revealed) return;
    revealed = true;
    clearTimeout(timer);
    if (value) main!.style.setProperty('opacity', value, priority);
    else main!.style.removeProperty('opacity');
  }
  return reveal;
}

/* ------------------------------- component ------------------------------ */

export default function ErpPageEdits() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const path = normalizeEditPath(pathname ?? '/');
    const session = new EditSession();
    let cancelled = false;
    let reveal = () => {};

    // When the list is already known (client navigations), hide before paint
    // so the unedited page never flashes. On a first load the list is still
    // loading, and hiding late would flash more than it hides.
    const paths = editedPaths();
    if (paths.value?.has(path)) reveal = hideMain();

    (async () => {
      const edited = paths.value ?? (await paths.promise);
      if (cancelled || !edited.has(path)) return;
      const edits = await pageEdits(path);
      if (cancelled || edits.length === 0) return;
      const resolved = await waitForTargets(edits, () => cancelled);
      if (cancelled) return;
      // Reveal and apply in the same task: no paint in between, and the
      // recorded <main> style never includes the temporary opacity.
      reveal();
      session.apply(resolved);
    })()
      .catch((error) => warn('could not apply edits', error))
      .finally(() => reveal());

    return () => {
      cancelled = true;
      reveal();
      session.revert();
    };
  }, [pathname]);

  return null;
}
