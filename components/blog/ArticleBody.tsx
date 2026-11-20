// components/blog/ArticleBody.tsx
// Server-rendered article body: H2 sections built from content/blogs block data.
import { Lightbulb } from 'lucide-react';
import type { BlogBlock, BlogSection } from '@/content/blogs/types';
import { InlineText } from './InlineText';

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="text-base leading-[1.8] text-ink/80 md:text-[1.0625rem]">
          <InlineText text={block.text} />
        </p>
      );
    case 'h3':
      return <h3 className="pt-4 text-xl font-bold leading-snug text-ink md:text-2xl">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="relative pl-6 text-base leading-[1.75] text-ink/80 md:text-[1.0625rem]">
              <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="space-y-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 text-base leading-[1.75] text-ink/80 md:text-[1.0625rem]">
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/5 text-xs font-bold tabular-nums text-brand"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span>
                <InlineText text={item} />
              </span>
            </li>
          ))}
        </ol>
      );
    case 'callout':
      return (
        <aside className="rounded-2xl border border-brand/20 bg-brand/[0.04] p-6">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-brand">
            <Lightbulb className="h-4 w-4" aria-hidden="true" />
            {block.title}
          </p>
          <p className="mt-3 leading-relaxed text-ink/80">
            <InlineText text={block.text} />
          </p>
        </aside>
      );
    case 'table':
      return (
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {block.caption}
            </caption>
            <thead>
              <tr className="bg-ink text-white">
                {block.headers.map((header, i) => (
                  <th key={i} scope="col" className="px-4 py-3 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-border even:bg-muted/30">
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                        <InlineText text={cell} />
                      </th>
                    ) : (
                      <td key={c} className="px-4 py-3 align-top text-ink/75">
                        <InlineText text={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function ArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} aria-labelledby={section.id} className="space-y-5">
          <h2 id={section.id} className="scroll-mt-28 pt-6 text-2xl font-bold leading-tight text-ink md:text-3xl">
            {section.heading}
          </h2>
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </section>
      ))}
    </>
  );
}
