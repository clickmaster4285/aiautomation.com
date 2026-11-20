// components/blog/InlineText.tsx
// Renders the two inline marks allowed in blog copy (see content/blogs/types.ts):
// [label](href) links and **bold**. Internal links use next/link; external links
// open in a new tab. Anything else is plain text, so no HTML is ever injected.
import Link from 'next/link';
import type { ReactNode } from 'react';

const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

const linkClass =
  'text-brand underline decoration-brand/30 underline-offset-[3px] hover:decoration-brand transition-colors';

export function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));

    const [, label, href, bold] = match;
    if (bold) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink">
          {bold}
        </strong>,
      );
    } else if (href.startsWith('/')) {
      nodes.push(
        <Link key={key++} href={href} className={linkClass}>
          {label}
        </Link>,
      );
    } else if (/^https:\/\//.test(href)) {
      nodes.push(
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>,
      );
    } else {
      nodes.push(label);
    }
    last = index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
