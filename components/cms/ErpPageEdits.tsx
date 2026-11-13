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
//
// Text edits never delete nodes React owns: React's text nodes are emptied and
// its child elements hidden, and the new text goes in an extra span.
//
// Edits are watched while the route is shown. When React re-renders or
// re-hydrates a section, framer-motion rewrites an inline style, or a target
// only appears later (lazy or in-view content), the edits are applied again.
// Without this, an edit could be lost depending on timing, so it showed only
// on some page loads.
import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { isCopySelector, isSafeStyle, normalizeEditPath, type ErpEdit } from '@/lib/erp-edits-shared';

const MAX_HIDE_MS = 1500;
const MAX_WAIT_FOR_DOM_MS = 1500;
// Re-applies are rate limited, not capped: when something keeps undoing an
// edit (a typewriter or rotating headline rewriting the same element), the
// edit still wins, at most this many times per window, so the page never
// spends every frame fighting it.
const REAPPLY_WINDOW_MS = 1000;
const MAX_REAPPLIES_PER_WINDOW = 10;
const API = '/api/erp-edits';
// Coming back to the tab re-checks the edits, at most this often.
const REFRESH_MIN_GAP_MS = 2000;

const warn = (...args: unknown[]) => {
  if (process.env.NODE_ENV !== 'production') console.warn('[erp-edits]', ...args);
};

/* --------------------------------- data --------------------------------- */

// Edited paths as of the latest API response. Only used to hide <main> before
// paint on client navigations; the edits themselves are always fetched fresh.
let knownPaths: Set<string> | null = null;
// A request is shared only while it is loading (the first route reuses the
// one started when the bundle runs). Every navigation asks again, so ERP
// publishes show on the next page view.
const inflight = new Map<string, Promise<ErpEdit[]>>();

function pageEdits(path: string): Promise<ErpEdit[]> {
  const pending = inflight.get(path);
  if (pending) return pending;
  const promise = fetch(`${API}?path=${encodeURIComponent(path)}&_t=${Date.now()}`, {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  })
    .then(async (res) => {
      if (!res.ok) throw new Error(`${API} responded ${res.status}`);
      const json = ((await res.json()) ?? {}) as Record<string, unknown>;
      if (Array.isArray(json.paths)) {
        knownPaths = new Set(json.paths.filter((p): p is string => typeof p === 'string'));
      }
      return Array.isArray(json.edits) ? (json.edits as ErpEdit[]) : [];
    })
    .catch((error) => {
      warn('could not load edits', error);
      return [] as ErpEdit[];
    })
    .finally(() => inflight.delete(path));
  inflight.set(path, promise);
  return promise;
}

// Start loading the first page's edits as soon as the client bundle runs.
if (typeof window !== 'undefined') pageEdits(normalizeEditPath(window.location.pathname));

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
 * every selector matches, or at the deadline. Targets that show up later are
 * picked up by the watcher.
 */
function waitForTargets(edits: ErpEdit[], isCancelled: () => boolean): Promise<void> {
  return new Promise((resolve) => {
    if (resolveAll(edits).missing === 0) return resolve();
    let frame = 0;
    const finish = () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      resolve();
    };
    const observer = new MutationObserver(() => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (isCancelled() || resolveAll(edits).missing === 0) finish();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const timer = setTimeout(finish, MAX_WAIT_FOR_DOM_MS);
  });
}

/* ---------------------------- apply / revert ---------------------------- */

// Containers that manage their own layout; makeRoomForCopy leaves them alone.
const SLIDER_CLASS = /swiper|slick|carousel|owl-|splide|flickity|glide/i;
const MAX_ROOM_DEPTH = 12;
const NO_TEXT_TAGS = new Set(['IMG', 'INPUT', 'TEXTAREA', 'SELECT', 'BR', 'HR', 'VIDEO', 'IFRAME', 'svg']);

type StyleRecord = { original: string; priority: string; applied: string };

/**
 * A copy is cloned from the section as it is right now. Entrance animations
 * (framer-motion initial / whileInView) leave sections that haven't animated
 * yet at inline opacity 0 with an offset transform, and only the original is
 * ever animated, so the copy would stay invisible. Put the copy in the
 * animation's end state instead: fully visible, no offset.
 */
function showAnimatedContent(copy: Styled) {
  const nodes = [copy, ...Array.from(copy.querySelectorAll<Styled>('[style]'))];
  for (const node of nodes) {
    if (!('style' in node)) continue;
    const opacity = node.style.getPropertyValue('opacity');
    if (opacity === '' || Number.parseFloat(opacity) >= 1) continue;
    node.style.removeProperty('opacity');
    node.style.removeProperty('transform');
    if (node.style.getPropertyValue('visibility') === 'hidden') node.style.removeProperty('visibility');
  }
}

class EditSession {
  // Per element and property: the value before the edit and the value we set.
  // Only properties we set are restored, and only while they still hold our
  // value, so inline styles written meanwhile (framer-motion's opacity and
  // transform) are never rolled back to a stale snapshot.
  private styles = new Map<Styled, Map<string, StyleRecord>>();
  // Structural changes (text, moves, copies), undone in reverse order.
  private undo: (() => void)[] = [];
  // Each returns false once React or anything else has undone that change.
  private checks: (() => boolean)[] = [];

  private setStyle(el: Styled, property: string, value: string) {
    let props = this.styles.get(el);
    if (!props) this.styles.set(el, (props = new Map()));
    const record = props.get(property);
    const original = record ? record.original : el.style.getPropertyValue(property);
    const priority = record ? record.priority : el.style.getPropertyPriority(property);
    el.style.setProperty(property, value, 'important');
    // Read back: the browser normalizes values (#f00 -> rgb(255, 0, 0)).
    props.set(property, { original, priority, applied: el.style.getPropertyValue(property) });
  }

  private restoreStyle(el: Styled, property: string) {
    const record = this.styles.get(el)?.get(property);
    if (!record) return;
    this.styles.get(el)!.delete(property);
    const current = el.style.getPropertyValue(property);
    if (current !== record.applied || el.style.getPropertyPriority(property) !== 'important') return;
    if (record.original) el.style.setProperty(property, record.original, record.priority);
    else el.style.removeProperty(property);
  }

  /** The step's element: resolved up front, or looked up now for copy selectors. */
  private live(selector: string, early: Styled | null | undefined): Styled | null {
    const el = early ?? (isCopySelector(selector) ? query(selector) : null);
    return el?.isConnected ? el : null;
  }

  private setText(el: Styled, text: string) {
    if (NO_TEXT_TAGS.has(el.tagName)) return;
    const children = Array.from(el.childNodes);
    const texts = children.filter((n): n is Text => n.nodeType === Node.TEXT_NODE);
    const elements = children.filter((n): n is Styled => n.nodeType === Node.ELEMENT_NODE && 'style' in n);

    // Plain text only: rewrite React's own text nodes in place.
    if (elements.length === 0 && texts.length > 0) {
      const saved = texts.map((t) => t.data);
      texts.forEach((t, i) => (t.data = i === 0 ? text : ''));
      this.undo.push(() => texts.forEach((t, i) => (t.data = saved[i])));
      this.checks.push(
        () => texts[0].parentNode === el && el.textContent === text,
      );
      return;
    }
    if (el instanceof SVGElement) {
      warn('text edit on an SVG element with child elements skipped');
      return;
    }

    // Mixed content (e.g. <h1>Text <span>more</span></h1>): keep React's nodes
    // in place but empty/hidden, and show the new text in our own span.
    const saved = texts.map((t) => t.data);
    texts.forEach((t) => (t.data = ''));
    elements.forEach((child) => this.setStyle(child, 'display', 'none'));
    const span = document.createElement('span');
    span.setAttribute('data-erp-text', '');
    span.textContent = text;
    el.appendChild(span);
    this.undo.push(() => {
      span.remove();
      texts.forEach((t, i) => (t.data = saved[i]));
    });
    this.checks.push(() => {
      if (span.parentNode !== el || span.textContent !== text) return false;
      for (const node of Array.from(el.childNodes)) {
        if (node === span || node.nodeType === Node.COMMENT_NODE) continue;
        if (node.nodeType === Node.TEXT_NODE) {
          if ((node as Text).data.trim() !== '') return false;
        } else if ('style' in node && (node as Styled).style.getPropertyValue('display') !== 'none') {
          return false;
        }
      }
      return true;
    });
  }

  private editElement(el: Styled, edit: Extract<ErpEdit, { type: 'elementEdit' }>) {
    if (typeof edit.text === 'string') this.setText(el, edit.text);
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
    const expected = position === 'before' ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING;
    this.checks.push(
      () =>
        el.isConnected &&
        target.isConnected &&
        el.parentNode === target.parentNode &&
        (el.compareDocumentPosition(target) & expected) !== 0,
    );
  }

  private duplicate(el: Styled, id: string) {
    const copy = el.cloneNode(true) as Styled;
    copy.setAttribute('data-erp-clone', id);
    showAnimatedContent(copy);
    el.after(copy);
    // React doesn't know about copies: always take them out again on cleanup.
    this.undo.push(() => copy.remove());
    this.checks.push(() => el.isConnected && copy.isConnected);
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
        this.setStyle(node, 'height', 'auto');
        this.setStyle(node, 'max-height', 'none');
        if (node.getBoundingClientRect().height <= box.height + 1) {
          // Didn't grow: not a fixed height. Put the inline values back.
          this.restoreStyle(node, 'height');
          this.restoreStyle(node, 'max-height');
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

  /** False when something (React, an animation) has undone one of the edits. */
  intact(): boolean {
    for (const [el, props] of this.styles) {
      if (!el.isConnected) {
        // Our own span/copy removed with its owner is covered by `checks`.
        if (el.hasAttribute('data-erp-text') || el.closest('[data-erp-clone]')) continue;
        return false;
      }
      for (const [property, record] of props) {
        if (
          el.style.getPropertyValue(property) !== record.applied ||
          el.style.getPropertyPriority(property) !== 'important'
        ) {
          return false;
        }
      }
    }
    return this.checks.every((check) => check());
  }

  revert() {
    // Reverse order: a moved node's recorded sibling may be a copy, and copies
    // may have been moved, so each change is undone against the DOM it saw.
    for (const step of this.undo.reverse()) step();
    for (const [el, props] of this.styles) {
      for (const property of Array.from(props.keys())) this.restoreStyle(el, property);
    }
    this.undo = [];
    this.checks = [];
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

/**
 * Applies the edits and keeps them applied until `stop()` is called: when React
 * re-renders a section (hydration, state, framer-motion) and undoes an edit,
 * or a missing target appears, everything is reverted and applied again.
 */
function applyAndWatch(edits: ErpEdit[], session: EditSession): () => void {
  let missing = 0;
  let frame = 0;
  let structural = false;
  let windowStart = 0;
  let windowCount = 0;
  let deferred: ReturnType<typeof setTimeout> | undefined;

  const run = () => {
    session.revert();
    const result = resolveAll(edits);
    missing = result.missing;
    session.apply(result.resolved);
  };

  const check = () => {
    frame = 0;
    const lookForMissing = structural && missing > 0;
    structural = false;
    const drifted = !session.intact();
    if (!drifted && !(lookForMissing && resolveAll(edits).missing < missing)) return;
    const now = Date.now();
    if (now - windowStart > REAPPLY_WINDOW_MS) {
      windowStart = now;
      windowCount = 0;
    }
    if (++windowCount > MAX_REAPPLIES_PER_WINDOW) {
      // Too busy: try again once the window is over.
      if (!deferred) {
        deferred = setTimeout(() => {
          deferred = undefined;
          structural = true;
          check();
        }, REAPPLY_WINDOW_MS - (now - windowStart));
      }
      return;
    }
    run();
    observer.takeRecords(); // ignore our own changes
  };

  const observer = new MutationObserver((records) => {
    if (records.some((r) => r.type === 'childList')) structural = true;
    if (frame) return;
    frame = requestAnimationFrame(check);
  });

  run();
  if (missing) warn(`${missing} edit target(s) not found yet on this page`);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['style'],
  });

  return () => {
    observer.disconnect();
    cancelAnimationFrame(frame);
    clearTimeout(deferred);
  };
}

/* ------------------------------- component ------------------------------ */

export default function ErpPageEdits() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const path = normalizeEditPath(pathname ?? '/');
    const session = new EditSession();
    let cancelled = false;
    let stopWatching = () => {};
    let reveal = () => {};

    // When this path is known to have edits (client navigations), hide before
    // paint so the unedited page never flashes. On a first load the list is
    // still loading, and hiding late would flash more than it hides.
    if (knownPaths?.has(path)) reveal = hideMain();

    // JSON of the edits currently on the page, to skip re-applying unchanged ones.
    let applied = '[]';
    const show = (edits: ErpEdit[]) => {
      stopWatching();
      stopWatching = () => {};
      session.revert();
      applied = JSON.stringify(edits);
      if (edits.length) stopWatching = applyAndWatch(edits, session);
    };

    (async () => {
      const edits = await pageEdits(path);
      if (cancelled || edits.length === 0) return;
      await waitForTargets(edits, () => cancelled);
      if (cancelled) return;
      // Reveal and apply in the same task: no paint in between, and the
      // recorded <main> style never includes the temporary opacity.
      reveal();
      show(edits);
    })()
      .catch((error) => warn('could not apply edits', error))
      .finally(() => reveal());

    // A page left open in another tab while it is edited in the ERP: when the
    // visitor comes back to the tab, fetch the edits again and show the newly
    // published version without a reload.
    let lastCheck = Date.now();
    const refresh = () => {
      if (document.visibilityState !== 'visible' || Date.now() - lastCheck < REFRESH_MIN_GAP_MS) return;
      lastCheck = Date.now();
      pageEdits(path)
        .then((edits) => {
          if (!cancelled && JSON.stringify(edits) !== applied) show(edits);
        })
        .catch((error) => warn('could not refresh edits', error));
    };
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('focus', refresh);

    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', refresh);
      window.removeEventListener('focus', refresh);
      stopWatching();
      reveal();
      session.revert();
    };
  }, [pathname]);

  return null;
}
