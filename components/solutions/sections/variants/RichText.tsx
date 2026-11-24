// Inline renderer for solution copy: **bold** → <strong>, [text](/path) → <Link>.
// Anything else renders as plain text, so literal "**" never reaches the page.
import Link from 'next/link';
import { Fragment } from 'react';

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\((?:\/[^)\s]*|https?:\/\/[^)\s]+)\))/g;

export function RichText({ text, linkClassName }: { text: string; linkClassName?: string }) {
  if (!text) return null;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    const start = m.index!;
    if (start > last) nodes.push(<Fragment key={key++}>{text.slice(last, start)}</Fragment>);
    const tok = m[0];
    if (tok.startsWith('**')) {
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
          className={linkClassName ?? 'font-semibold text-brand underline underline-offset-4 decoration-2 decoration-brand/50 hover:decoration-brand hover:text-brand/80 transition-colors'}
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
  text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
