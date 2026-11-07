// lib/erp-edits-shared.ts
// Pure helpers for ERP "edited pages", shared by the server (lib/erp-edits.ts)
// and the browser (components/cms/ErpPageEdits.tsx). No server-only imports.
//
// An edited page is a list of DOM instructions the ERP visual editor recorded
// against the server-rendered HTML of an existing page on this site. They are
// untrusted data: only known section types, allowlisted style properties and
// plain values survive parsing.

export type ErpStyle = [property: string, value: string];

export type ErpEdit =
  | { type: 'elementEdit'; selector: string; text?: string; styles: ErpStyle[] }
  | { type: 'sectionMove'; selector: string; target: string; position: 'before' | 'after' }
  | { type: 'sectionRemove'; selector: string }
  | { type: 'sectionDuplicate'; selector: string; id: string };

/**
 * Selectors that point at (or inside) a copy made by a sectionDuplicate edit.
 * Copies don't exist in the original page, so these resolve only after the
 * duplicate step has run.
 */
export const isCopySelector = (selector: unknown): boolean =>
  typeof selector === 'string' && selector.startsWith('[data-erp-clone="');

// Copy ids end up in a data-erp-clone attribute and in selectors.
const COPY_ID_REGEX = /^[A-Za-z0-9-]{1,64}$/;

const ALLOWED_STYLE_PROPERTIES = new Set([
  'color',
  'font-size',
  'font-weight',
  'font-style',
  'font-family',
  'text-align',
  'text-transform',
  'text-decoration',
  'line-height',
  'letter-spacing',
  'background-color',
  'padding',
  'margin',
  'border',
  'border-width',
  'border-style',
  'border-color',
  'border-radius',
  'width',
  'max-width',
  'opacity',
]);

const STYLE_VALUE_REGEX = /^[\w\s#(),.%'"+\-/]*$/;
const BLOCKED_STYLE_VALUE = /url\(|expression|javascript|@import/i;
const MAX_SELECTOR_LENGTH = 2000;
const MAX_TEXT_LENGTH = 20000;

/** Same path key on server and client: decoded, lowercase, no trailing slash, home is "/". */
export function normalizeEditPath(input: string): string {
  let path = (input || '').split(/[?#]/)[0];
  try {
    path = decodeURIComponent(path);
  } catch {
    // Malformed escape sequence: compare the raw path instead.
  }
  path = path.trim().toLowerCase().replace(/\/{2,}/g, '/').replace(/\/+$/, '');
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

export function isSafeStyle(property: string, value: string): boolean {
  return (
    ALLOWED_STYLE_PROPERTIES.has(property) &&
    value.trim() !== '' &&
    STYLE_VALUE_REGEX.test(value) &&
    !BLOCKED_STYLE_VALUE.test(value)
  );
}

const str = (v: unknown) => (typeof v === 'string' ? v : '');
const obj = (v: unknown): Record<string, unknown> =>
  v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : {};

function selector(v: unknown): string {
  const s = str(v).trim();
  return s.length > 0 && s.length <= MAX_SELECTOR_LENGTH ? s : '';
}

function parseStyles(raw: unknown): ErpStyle[] {
  const styles: ErpStyle[] = [];
  for (const [key, value] of Object.entries(obj(raw))) {
    const property = key.trim().toLowerCase();
    if (typeof value !== 'string') continue;
    if (isSafeStyle(property, value)) styles.push([property, value.trim()]);
  }
  return styles;
}

/**
 * ERP sections → safe edit list, sorted by `order`.
 * Hidden sections, unknown types and sections without a selector are dropped.
 */
export function parseErpSections(raw: unknown): ErpEdit[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map(obj)
    .map((s, i) => ({ s, order: typeof s.order === 'number' ? s.order : i, i }))
    .filter(({ s }) => s.hidden !== true)
    .sort((a, b) => a.order - b.order || a.i - b.i)
    .map(({ s }): ErpEdit | null => {
      const content = obj(s.content);
      const sel = selector(content.selector);
      if (!sel) return null;
      switch (s.type) {
        case 'elementEdit': {
          const styles = parseStyles(s.styles);
          const text =
            typeof content.text === 'string' && content.text.length <= MAX_TEXT_LENGTH
              ? content.text
              : undefined;
          if (text === undefined && styles.length === 0) return null;
          return { type: 'elementEdit', selector: sel, styles, ...(text !== undefined ? { text } : {}) };
        }
        case 'sectionMove': {
          const target = selector(content.target);
          const position = content.position === 'after' ? 'after' : content.position === 'before' ? 'before' : null;
          if (!target || !position) return null;
          return { type: 'sectionMove', selector: sel, target, position };
        }
        case 'sectionRemove':
          return { type: 'sectionRemove', selector: sel };
        case 'sectionDuplicate': {
          const id = str(content.id);
          if (!COPY_ID_REGEX.test(id)) return null;
          return { type: 'sectionDuplicate', selector: sel, id };
        }
        default:
          return null;
      }
    })
    .filter((e): e is ErpEdit => e !== null);
}
