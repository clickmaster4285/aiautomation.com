// components/seo/RelatedCards.tsx
// The one "related pages" card grid used site-wide: products, solutions ("Explore other solutions"),
// industries, services and CMS/blog pages. Design comes from the product pages.
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionLabel, splitHeading } from '@/components/landingPage/Shared';

export type RelatedCardItem = { title: string; description?: string; href: string };

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.05 },
});

export function RelatedCards({
  eyebrow = 'Explore more',
  heading,
  intro,
  items,
  tone = 'paper',
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: RelatedCardItem[];
  tone?: 'paper' | 'secondary';
}) {
  const unique = items.filter((it, i) => it.href && items.findIndex((x) => x.href === it.href) === i);
  if (unique.length === 0) return null;
  const { head, tail } = splitHeading(heading, 2);
  // Empty cells keep the bordered grid closed when the last row isn't full (2 columns on sm, 3 on lg).
  const padSm = (2 - (unique.length % 2)) % 2;
  const padLg = (3 - (unique.length % 3)) % 3;

  return (
    <section className={`${tone === 'secondary' ? 'bg-secondary' : 'bg-paper'} py-16 md:py-24`}>
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label={eyebrow} />
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {head}{head && ' '}
            <br className="hidden md:block" />
            <span className="display-italic text-brand">{tail}</span>
          </h2>
          {intro && <p className="text-sm md:text-base text-muted-foreground md:text-right md:self-end">{intro}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {unique.map((r, i) => (
            <motion.div key={r.href} {...fadeUp(i)}>
              <Link
                href={r.href}
                className="related-link block h-full bg-paper p-6 md:p-8 group hover:bg-ink hover:text-white transition-colors duration-500"
              >
                <h3 className="display text-xl md:text-2xl mb-2">{r.title}</h3>
                {r.description && (
                  <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed">{r.description}</p>
                )}
                <span className="mt-4 inline-block eyebrow text-xs text-muted-foreground group-hover:text-brand">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
          {Array.from({ length: padSm }, (_, i) => (
            <div key={`sm${i}`} aria-hidden="true" className="hidden sm:block lg:hidden bg-paper" />
          ))}
          {Array.from({ length: padLg }, (_, i) => (
            <div key={`lg${i}`} aria-hidden="true" className="hidden lg:block bg-paper" />
          ))}
        </div>
      </div>
    </section>
  );
}
