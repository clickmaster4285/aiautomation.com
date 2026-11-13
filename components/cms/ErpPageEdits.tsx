'use client';
// components/cms/ErpPageEdits.tsx
// Applies published ERP "edited page" instructions (text, styles, section
// moves/removals/duplicates) to the current route's DOM in the browser. Mounted once in
// the root layout so it covers code-owned and CMS pages, on first load and on
// every client-side navigation. Renders nothing.
//
// React safety: every change is recorded and reverted in the layout-effect
// cleanup. React runs that cleanup during the commit's mutation phase, and this
// component sits before <main> in <body>, so the DOM is back to the shape React
// expects before React patches or removes the old route's nodes. Removals only
// hide (display: none), moved nodes go back to their original parent and
// sibling, and copies (data-erp-clone) are removed, so React's tree is never
// left inconsistent and no copy leaks into the next page.
import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { isCopySelector, isSafeStyle, normalizeEditPath, type ErpEdit } from '@/lib/erp-edits-shared';

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

// No result is kept: a request is only shared while it is still loading (the
// list starts loading when the bundle runs and the first route reuses it).
// Every navigation after that asks again, so ERP publishes show immediately.
const fresh = <T,>(c: Cached<T> | null | undefined): c is Cached<T> =>
  !!c && c.value === undefined && Date.now() - c.at < CACHE_TTL_MS;

async function getJson(url: string): Promise<Record<string, unknown>> {
  const res = await fetch(url, { cache: 'no-store', headers: { Accept: 'application/json' } });
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
  const entry: Cached<ErpEdit[]> = { at: Date.now(), promise };
  promise.then((value) => (entry.value = value)).catch(() => editsCache.delete(path));
  editsCache.set(path, entry);
  return promise;
}

// Start loading the list as soon as the client bundle runs.
if (typeof window !== 'undefined') editedPaths();

/* ---------------------------- DOM resolution ---------------------------- */

type Styled = HTMLElement | SVGElement;
// `null` = a copy selector ([data-erp-clone="…"]): looked up when the step runs,
// because copies only exist once their sectionDuplicate step has run.
type Resolved = { edit: ErpEdit; el: Styled | null; target?: Styled | null };

function query(selector: string): Styled | null {
  try {
    const el = document.querySelector(selector);
    return el && 'style' in el ? (el as Styled) : null;
  } catch {
    return null; // invalid selector
  }
}

/**
 * Resolves every selector against the current (original) DOM, before any
 * change. Copy selectors are deferred (null) and never count as missing.
 */
function resolveAll(edits: ErpEdit[]): { resolved: Resolved[]; missing: number } {
  const resolved: Resolved[] = [];
  let missing = 0;
  const resolve = (selector: string) => (isCopySelector(selector) ? null : query(selector));
  const found = (selector: string, el: Styled | null) => !!el || isCopySelector(selector);
  for (const edit of edits) {
    const el = resolve(edit.selector);
    const target = edit.type === 'sectionMove' ? resolve(edit.target) : undefined;
    if (!found(edit.selector, el) || (edit.type === 'sectionMove' && !found(edit.target, target!))) {
      missing++;
      continue;
    }
    resolved.push({ edit, el, target });
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

// Containers that manage their own layout; makeRoomForCopy leaves them alone.
const SLIDER_CLASS = /swiper|slick|carousel|owl-|splide|flickity|glide/i;
const MAX_ROOM_DEPTH = 12;

class EditSession {
  // Original style attribute of every element touched (restored last).
  private styles = new Map<Styled, string | null>();
  // Structural changes (text, moves, copies), undone in reverse order.
  private undo: (() => void)[] = [];

  private setStyle(el: Styled, property: string, value: string) {
    if (!this.styles.has(el)) this.styles.set(el, el.getAttribute('style'));
    el.style.setProperty(property, value, 'important');
  }

  /** The step's element: resolved up front, or looked up now for copy selectors. */
  private live(selector: string, early: Styled | null | undefined): Styled | null {
    const el = early ?? (isCopySelector(selector) ? query(selector) : null);
    return el?.isConnected ? el : null;
  }

  private editElement(el: Styled, edit: Extract<ErpEdit, { type: 'elementEdit' }>) {
    if (typeof edit.text === 'string') {
      const nodes = Array.from(el.childNodes);
      this.undo.push(() => el.replaceChildren(...nodes));
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

  private move(el: Styled, target: Styled, position: 'before' | 'after') {
    const parent = el.parentNode;
    if (!parent || target === el || el.contains(target)) return;
    const next = el.nextSibling;
    this.undo.push(() => {
      try {
        if (next && next.parentNode === parent) parent.insertBefore(el, next);
        else if (!next) parent.appendChild(el);
      } catch (error) {
        warn('could not restore moved section', error);
      }
    });
    if (position === 'before') target.before(el);
    else target.after(el);
  }

  private duplicate(el: Styled, id: string) {
    const copy = el.cloneNode(true) as Styled;
    copy.setAttribute('data-erp-clone', id);
    el.after(copy);
    // React doesn't know about copies: always take them out again on cleanup.
    this.undo.push(() => copy.remove());
    this.makeRoomForCopy(copy);
  }

  /**
   * Lifts fixed heights, no-wrap rows and horizontal clipping on the copy's
   * ancestors so the copy isn't hidden. Sliders are left alone, and a height is
   * only lifted when that actually makes the container grow.
   */
  private makeRoomForCopy(copy: Styled) {
    let node = copy.parentElement;
    for (let depth = 0; node && node !== document.body && depth < MAX_ROOM_DEPTH; depth++, node = node.parentElement) {
      if (typeof node.className === 'string' && SLIDER_CLASS.test(node.className)) break;
      const style = getComputedStyle(node);
      let box = node.getBoundingClientRect();
      let copyBox = copy.getBoundingClientRect();

      if (
        style.display.includes('flex') &&
        style.flexDirection.startsWith('row') &&
        style.flexWrap === 'nowrap' &&
        copyBox.right > box.right + 1
      ) {
        this.setStyle(node, 'flex-wrap', 'wrap');
      }

      copyBox = copy.getBoundingClientRect();
      box = node.getBoundingClientRect();
      if (copyBox.bottom > box.bottom + 1) {
        const saved = (['height', 'max-height'] as const).map(
          (p) => [p, node!.style.getPropertyValue(p), node!.style.getPropertyPriority(p)] as const,
        );
        this.setStyle(node, 'height', 'auto');
        this.setStyle(node, 'max-height', 'none');
        if (node.getBoundingClientRect().height <= box.height + 1) {
          // Didn't grow: not a fixed height. Put the inline values back.
          for (const [p, value, priority] of saved) {
            if (value) node.style.setProperty(p, value, priority);
            else node.style.removeProperty(p);
          }
        }
      }

      if (copyBox.right > box.right + 1 && (style.overflowX === 'hidden' || style.overflowX === 'clip')) {
        this.setStyle(node, 'width', 'auto');
        this.setStyle(node, 'max-width', 'none');
      }
    }
  }

  apply(resolved: Resolved[]) {
    // 1. Element edits on the original page (text + styles).
    for (const { edit, el } of resolved) {
      if (edit.type !== 'elementEdit' || isCopySelector(edit.selector)) continue;
      const live = this.live(edit.selector, el);
      if (live) this.editElement(live, edit);
    }
    // 2. Moves, removals and duplicates, in order. Copy selectors resolve now.
    for (const { edit, el, target } of resolved) {
      if (edit.type === 'elementEdit') continue;
      const live = this.live(edit.selector, el);
      if (!live) continue;
      if (edit.type === 'sectionRemove') {
        this.setStyle(live, 'display', 'none');
      } else if (edit.type === 'sectionMove') {
        const liveTarget = this.live(edit.target, target);
        if (liveTarget) this.move(live, liveTarget, edit.position);
      } else if (edit.type === 'sectionDuplicate') {
        this.duplicate(live, edit.id);
      }
    }
    // 3. Last: element edits on copies (their own text and colours).
    for (const { edit } of resolved) {
      if (edit.type !== 'elementEdit' || !isCopySelector(edit.selector)) continue;
      const live = this.live(edit.selector, null);
      if (live) this.editElement(live, edit);
    }
  }

  revert() {
    // Reverse order: a moved node's recorded sibling may be a copy, and copies
    // may have been moved, so each change is undone against the DOM it saw.
    for (const step of this.undo.reverse()) step();
    this.styles.forEach((original, el) => {
      if (original === null) el.removeAttribute('style');
      else el.setAttribute('style', original);
    });
    this.undo = [];
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
