// components/blog/ArticleToc.tsx
// Table of contents. Plain anchor links (work without JS); on the client the
// section currently being read is highlighted.
'use client';

import { useEffect, useState } from 'react';

type Item = { id: string; label: string };

export function ArticleToc({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? '');

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-96px 0px -65% 0px' },
    );
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Table of contents">
      <p className="eyebrow mb-4 text-muted-foreground">On this page</p>
      <ol className="space-y-1 border-l border-border">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors ${
                  isActive
                    ? 'border-brand font-medium text-ink'
                    : 'border-transparent text-muted-foreground hover:border-border hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
