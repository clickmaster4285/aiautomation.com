// components/solutions/home/kit.tsx
// Homepage ("/") design primitives for solution pages: same section rhythm, labels, display headings and
// bordered grids as components/landingPage and components/products/ProductPage. Copy may contain
// **bold** and [anchor](/path) markup (contextual links), so text always goes through <RichText>.
'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionLabel, splitHeading } from '@/components/landingPage/Shared';
import { RichText } from '@/components/solutions/sections/variants/RichText';

export type Tone = 'paper' | 'secondary' | 'ink';
/** Injected by SolutionPage into every content section: background + sequential marker. */
export type ToneProps = { tone?: Tone; marker?: string };

export const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.05 },
});

const BG: Record<Tone, string> = { paper: 'bg-paper', secondary: 'bg-secondary', ink: 'bg-ink text-white' };

export function Shell({
  tone = 'paper',
  marker,
  label,
  id,
  children,
}: {
  tone?: Tone;
  marker?: string;
  label: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${BG[tone]} py-16 md:py-24 scroll-mt-24`}>
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label={label} marker={marker} dark={tone === 'ink'} />
        {children}
      </div>
    </section>
  );
}

/** Display heading with the italic brand-coloured tail (last `tail` words). */
export function Heading({ text, tail = 2, className = '' }: { text: string; tail?: number; className?: string }) {
  // Short headings ("A Worked Example", "How We Work") keep at least two plain words and stay on one line.
  const words = text.split(/\s+/).filter(Boolean).length;
  const { head, tail: end } = splitHeading(text, Math.max(1, Math.min(tail, words - 2)));
  return (
    <h2 className={`display ${text.length > 34 ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-4xl sm:text-5xl md:text-6xl'} ${className}`}>
      {head}
      {head && ' '}
      {head.length > 14 && <br className="hidden md:block" />}
      <span className="display-italic text-brand">{end}</span>
    </h2>
  );
}

/** Heading left, optional intro right (homepage section header). */
export function HeaderRow({ title, intro, dark, tail }: { title: string; intro?: string; dark?: boolean; tail?: number }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
      <Heading text={title} tail={tail} />
      {intro && (
        <p className={`text-sm md:text-base md:text-right md:self-end leading-relaxed ${dark ? 'text-white/60' : 'text-muted-foreground'}`}>
          <RichText text={intro} />
        </p>
      )}
    </div>
  );
}

export function Prose({ lines, dark, className = '' }: { lines: string[]; dark?: boolean; className?: string }) {
  return (
    <div className={`space-y-5 text-base md:text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-muted-foreground'} ${className}`}>
      {lines.map((p, i) => (
        <p key={i}>
          <RichText text={p} />
        </p>
      ))}
    </div>
  );
}

/** Divided list of display titles with short descriptions (homepage Process / product spotlight). */
export function TitledList({
  items,
  dark,
  numbered,
}: {
  items: { title: string; description?: string }[];
  dark?: boolean;
  numbered?: boolean;
}) {
  return (
    <ul className={`divide-y border-t ${dark ? 'divide-white/10 border-white/10' : 'divide-border border-border'}`}>
      {items.map((it, i) => (
        <motion.li key={`${it.title}-${i}`} {...fadeUp(i)} className="py-6 group">
          <h3 className="display text-xl md:text-2xl group-hover:text-brand md:group-hover:translate-x-2 transition-all">
            {numbered ? `${String(i + 1).padStart(2, '0')}. ` : ''}
            <RichText text={it.title} />
          </h3>
          {it.description && (
            <p className={`text-sm leading-relaxed mt-1 max-w-xl ${dark ? 'text-white/50' : 'text-muted-foreground'}`}>
              <RichText text={it.description} />
            </p>
          )}
        </motion.li>
      ))}
    </ul>
  );
}

const MASCOTS = {
  headset: { src: '/images/process.png', alt: 'Friendly assistant robot wearing a headset and waving', w: 350, h: 350 },
  floating: { src: '/images/robot-mascot.png', alt: 'Clickmasters robot mascot floating with open arms', w: 640, h: 640 },
  astronaut: { src: '/images/robot-astronaut.png', alt: 'Robot astronaut mascot waving', w: 640, h: 640 },
} as const;

/** Floating homepage robot (as in the homepage Process section) to fill an empty column on desktop. */
export function Mascot({
  variant = 'headset',
  className = '',
  size = 'md',
}: {
  variant?: keyof typeof MASCOTS;
  className?: string;
  size?: 'md' | 'lg';
}) {
  const m = MASCOTS[variant];
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className={`hidden md:block ${className}`}
    >
      <Image src={m.src} alt={m.alt} width={m.w} height={m.h} loading="lazy" className={`${size === 'lg' ? 'w-56 lg:w-88' : 'w-56 lg:w-72'} h-auto`} />
    </motion.div>
  );
}

/**
 * Homepage "How we work" layout (components/landingPage/Process): heading, intro and a floating robot on the
 * left; a divided list of "1. Title" + description on the right.
 */
export function ProcessLayout({
  title,
  intro,
  items,
  dark,
  mascot = 'headset',
}: {
  title: string;
  intro?: string[];
  items: { title: string; description?: string }[];
  dark?: boolean;
  mascot?: keyof typeof MASCOTS;
}) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
      <div>
        <Heading text={title} />
        {intro && intro.length > 0 && (
          <div className={`space-y-3 text-sm sm:text-base mt-4 max-w-md leading-relaxed ${dark ? 'text-white/60' : 'text-muted-foreground'}`}>
            {intro.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        )}
        <Mascot variant={mascot} className="mt-8 md:mt-10" size="lg" />
      </div>
      <div className={`divide-y border-t ${dark ? 'divide-white/10 border-white/10' : 'divide-border border-border'}`}>
        {items.map((it, i) => (
          <motion.div
            key={`${it.title}-${i}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="py-6 md:py-8 group"
          >
            <h3 className="display text-xl sm:text-2xl md:text-3xl group-hover:text-brand md:group-hover:translate-x-2 transition-all">
              {i + 1}. <RichText text={it.title} />
            </h3>
            {it.description && (
              <p className={`text-xs md:text-sm leading-relaxed mt-1 max-w-xl ${dark ? 'text-white/50' : 'text-muted-foreground'}`}>
                <RichText text={it.description} />
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Homepage "What can you automate" list: eyebrow, then display-font points with a brand dash. */
export function DashList({ items, dark, label }: { items: string[]; dark?: boolean; label?: string }) {
  return (
    <div>
      {label && <h3 className={`eyebrow mb-4 ${dark ? 'text-white/60' : 'text-muted-foreground'}`}>{label}</h3>}
      <ul className={`divide-y border-t ${dark ? 'divide-white/10 border-white/10' : 'divide-border border-border'}`}>
        {items.map((t, i) => (
          <motion.li key={`${t}-${i}`} {...fadeUp(i)} className="flex items-start gap-5 py-5 group">
            <span className="text-brand text-xl leading-none mt-1" aria-hidden="true">
              —
            </span>
            <span className="display text-xl md:text-2xl group-hover:translate-x-2 transition-transform">
              <RichText text={t} />
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/** Bordered 1px grid of numbered cards (homepage / product feature grid). Empty cells close the last row. */
export function NumberedGrid({
  items,
  dark,
  cols,
  numbered = true,
  dots = false,
}: {
  items: { title: string; description?: string }[];
  dark?: boolean;
  cols?: 2 | 3;
  numbered?: boolean;
  dots?: boolean;
}) {
  const n = items.length;
  const lg = cols ?? (n % 3 === 0 || n > 4 ? 3 : 2);
  const padSm = (2 - (n % 2)) % 2;
  const padLg = (lg - (n % lg)) % lg;
  const cell = dark ? 'bg-ink hover:bg-paper hover:text-ink' : 'bg-paper hover:bg-ink hover:text-white';
  const desc = dark ? 'text-white/60 group-hover:text-muted-foreground' : 'text-muted-foreground group-hover:text-white/70';
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${lg === 3 ? 'lg:grid-cols-3' : ''} gap-px border ${
        dark ? 'bg-white/10 border-white/10' : 'bg-border border-border'
      }`}
    >
      {items.map((it, i) => (
        <motion.div key={`${it.title}-${i}`} {...fadeUp(i)} className={`${cell} p-6 md:p-8 group transition-colors duration-500`}>
          {numbered && (
            <div className="eyebrow text-brand tabular-nums pb-4" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </div>
          )}
          {dots && <div className="size-2 rounded-full bg-brand mb-5" aria-hidden="true" />}
          <h3 className="display text-xl md:text-2xl mb-3">
            <RichText text={it.title} />
          </h3>
          {it.description && (
            <p className={`text-sm leading-relaxed ${desc}`}>
              <RichText text={it.description} />
            </p>
          )}
        </motion.div>
      ))}
      {Array.from({ length: padSm }, (_, i) => (
        <div key={`s${i}`} aria-hidden="true" className={`hidden sm:block ${lg === 3 ? 'lg:hidden' : ''} ${dark ? 'bg-ink' : 'bg-paper'}`} />
      ))}
      {lg === 3 &&
        Array.from({ length: padLg }, (_, i) => (
          <div key={`l${i}`} aria-hidden="true" className={`hidden lg:block ${dark ? 'bg-ink' : 'bg-paper'}`} />
        ))}
    </div>
  );
}

/** Dark + light pair of boxes (product "What the AI handles / What your team keeps"). */
export function TwoBoxes({
  left,
  right,
}: {
  left: { tag: string; title: string; items: string[] };
  right: { tag: string; title: string; items: string[] };
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      {[
        { ...left, dark: true },
        { ...right, dark: false },
      ].map((col, ci) =>
        col.items.length === 0 ? null : (
          <motion.div
            key={col.title}
            {...fadeUp(ci)}
            className={`p-6 md:p-10 border ${col.dark ? 'bg-ink text-white border-ink' : 'bg-paper text-ink border-border'}`}
          >
            <div className="eyebrow text-brand mb-4">{col.tag}</div>
            <h3 className="display text-2xl md:text-3xl mb-6">{col.title}</h3>
            <ul className={`divide-y ${col.dark ? 'divide-white/10' : 'divide-border'}`}>
              {col.items.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-4 py-3 text-sm md:text-base ${col.dark ? 'text-white/80' : 'text-muted-foreground'}`}
                >
                  <span className="text-brand" aria-hidden="true">
                    —
                  </span>
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ),
      )}
    </div>
  );
}

const STAT_COLS: Record<number, string> = { 1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' };

/** Big display numbers in a bordered row (homepage Numbers rhythm). */
export function StatsRow({ stats, dark }: { stats: { value: string; label: string }[]; dark?: boolean }) {
  if (!stats?.length) return null;
  return (
    <div
      className={`grid grid-cols-2 ${STAT_COLS[Math.min(stats.length, 4)]} gap-px border ${
        dark ? 'bg-white/10 border-white/10' : 'bg-border border-border'
      }`}
    >
      {stats.map((s, i) => (
        <motion.div key={`${s.label}-${i}`} {...fadeUp(i)} className={`${dark ? 'bg-ink' : 'bg-paper'} p-6 md:p-8`}>
          <div className="display text-4xl md:text-5xl text-brand tabular-nums">{s.value}</div>
          <div className={`mt-2 text-sm ${dark ? 'text-white/60' : 'text-muted-foreground'}`}>{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
