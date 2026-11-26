// Inline renderer for solution copy: **bold** → <strong>, [text](/path) → <Link>.
// Anything else renders as plain text, so literal "**" never reaches the page.
import Link from 'next/link';
import { Fragment } from 'react';

// **bold**, ==keyword highlight== (lib/inline-links-core emphasizeKeyword) and [anchor](/path) links.
const TOKEN = /(\*\*[^*]+\*\*|==[^=]+==|\[[^\]]+\]\((?:\/[^)\s]*|https?:\/\/[^)\s]+)\))/g;

export function RichText({ text, linkClassName }: { text?: string | null; linkClassName?: string }) {
  if (!text) return null;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    const start = m.index!;
    if (start > last) nodes.push(<Fragment key={key++}>{text.slice(last, start)}</Fragment>);
    const tok = m[0];
    if (tok.startsWith('==')) {
      // The page's primary keyword: bold, same colour as the surrounding text.
      nodes.push(<strong key={key++} className="font-bold text-inherit">{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith('**')) {
      nodes.push(<strong key={key++} className="font-semibold text-inherit">{tok.slice(2, -2).trim()}</strong>);
      // Copy often has "**Title**description" with no space; add one.
      const next = text[start + tok.length];
      if (next && /[A-Za-z0-9]/.test(next)) nodes.push(' ');
    } else {
      const [, label, href] = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/)!;
      nodes.push(
        <Link
          key={key++}
          href={href}
          className={
            linkClassName ??
            'ctx-link font-semibold text-brand underline decoration-brand/40 decoration-2 underline-offset-4 hover:decoration-brand transition-colors'
          }
        >
          {label}
        </Link>
      );
    }
    last = start + tok.length;
  }
  if (last < text.length) nodes.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  return <>{nodes}</>;
}

/** Plain-text version (for places that must not contain markup, e.g. aria labels or icon matching). */
export const stripMarkup = (text: string) =>
  text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/==([^=]+)==/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
