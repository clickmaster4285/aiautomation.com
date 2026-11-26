// components/solutions/home/sections.tsx
// Solution page sections in the homepage design. Each keeps the props the content files already pass
// (page.blocks in content/Solutions/**), plus `tone` / `marker` injected by SolutionPage.
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Marquee from '@/components/landingPage/Marquee';
import FAQ from '@/components/landingPage/FAQ';
import CTA from '@/components/landingPage/CTA';
import { Dot, splitHeading } from '@/components/landingPage/Shared';
import ProductLeadForm from '@/components/products/ProductLeadForm';
import { RichText, stripMarkup } from '@/components/solutions/sections/variants/RichText';
import { toLines, splitTitled, splitBoldItem, splitBoundaries } from '@/components/solutions/sections/variants/parseCopy';
import { Shell, Heading, HeaderRow, Prose, TitledList, NumberedGrid, TwoBoxes, StatsRow, DashList, Mascot, ProcessLayout, type ToneProps } from './kit';

/** Items have titles only (no descriptions): render as the homepage dash list. */
const titlesOnly = (items: { title: string; description: string }[]) => items.length > 0 && items.every((i) => !i.description);

type Copy = { title: string; content?: string[] } & ToneProps;
type Stat = { label: string; value: string };
type Cta = { text: string; href: string };

const AUDIT = '/free-automation-audit';
const isItem = (l: string) => l.startsWith('**');

/** A plain line reads as a list point (not a paragraph): short, and at most one sentence. */
const isPoint = (l: string) => l.length <= 120 && !/[.!?]\s+\S/.test(l.replace(/\[[^\]]*\]\([^)]*\)/g, ''));

/**
 * Paragraphs and items, in order: intro (before the first item), items, outro (after).
 * Items are "**Title** description" lines; when a section has none, a run of 3+ short one-sentence
 * lines ("Handle multi-step tasks…") is treated as the list instead.
 */
function splitCopy(content?: string[]) {
  const lines = toLines(content);
  if (!lines.some(isItem)) {
    const first = lines.findIndex(isPoint);
    const points = first < 0 ? [] : lines.slice(first).filter(isPoint);
    if (points.length >= 3) {
      return {
        intro: lines.slice(0, first),
        items: points.map((p) => `**${p.replace(/[.]$/, '')}**`),
        outro: lines.slice(first).filter((l) => !isPoint(l)),
      };
    }
  }
  const first = lines.findIndex(isItem);
  return {
    intro: lines.filter((l, i) => !isItem(l) && (first < 0 || i < first)),
    items: lines.filter(isItem),
    outro: lines.filter((l, i) => !isItem(l) && first >= 0 && i > first),
  };
}

// ─── Hero ──────────────────────────────────────────────

export function HeroSection({
  badge,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  breadcrumb,
  leadName,
  tickerItems,
}: {
  badge?: string;
  heading: string;
  subheading: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  breadcrumb?: { label: string; href: string }[];
  /** Product/solution name sent with hero-form leads. */
  leadName?: string;
  tickerItems?: string[];
  [legacy: string]: unknown;
}) {
  const words = heading.split(/\s+/).length;
  const title = splitHeading(heading, words > 6 ? 3 : 2);
  const primary = primaryCta ?? { text: 'Book a Free Audit', href: AUDIT };

  return (
    <div className="flex flex-col min-h-[calc(100svh-4rem)]">
      <section className="relative pt-6 pb-12 md:py-10 flex-1 md:flex md:items-center overflow-hidden bg-paper isolate">
        <div className="mx-auto max-w-[84vw] w-full px-6 relative z-10">
          {breadcrumb && breadcrumb.length > 1 && (
            <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
              <ol className="flex flex-wrap items-center gap-2 eyebrow text-xs text-muted-foreground">
                {breadcrumb.map((cr, i) => {
                  const last = i === breadcrumb.length - 1;
                  return (
                    <li key={cr.href} className="flex items-center gap-2">
                      {last ? (
                        <span aria-current="page" className="text-ink">
                          {cr.label}
                        </span>
                      ) : (
                        <>
                          <Link href={cr.href} className="hover:text-brand transition-colors">
                            {cr.label}
                          </Link>
                          <span aria-hidden="true">/</span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          <div className="relative grid md:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
            <div className="relative z-10">
              {badge && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="eyebrow text-brand border border-brand inline-block px-3 py-1 mb-5 md:mb-7 text-xs md:text-sm"
                >
                  {badge}
                </motion.span>
              )}
              <motion.h1
                initial={{ y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="display text-[9vw] sm:text-6xl md:text-[4.2vw] xl:text-[4.4vw] leading-[1.05]"
              >
                {title.head}
                {title.head && ' '}
                <span className="display-italic font-normal text-brand">{title.tail}</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-5 md:mt-7 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                <RichText text={subheading} />
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-6 md:mt-9 flex flex-col sm:flex-row gap-3 md:gap-4"
              >
                <Link
                  href={primary.href}
                  data-cta-position="hero"
                  className="bg-ink text-white text-sm md:text-base px-5 py-3 md:px-7 md:py-4 hover:bg-brand transition-colors inline-flex items-center justify-center gap-2"
                >
                  {primary.text} <span aria-hidden="true">›</span>
                </Link>
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="border border-ink text-ink text-sm md:text-base px-5 py-3 md:px-7 md:py-4 font-medium hover:bg-ink hover:text-white transition-colors text-center"
                  >
                    {secondaryCta.text}
                  </Link>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex md:justify-end mt-4 md:mt-0"
            >
              <ProductLeadForm product={leadName || badge || heading} variant="hero" id="get-started" />
            </motion.div>
          </div>
        </div>
        <Dot className="absolute top-[30%] left-[55%]" />
        <Dot className="absolute top-[45%] left-[3%]" />
        <Dot className="absolute top-[78%] left-[40%]" />
      </section>
      <Marquee {...(tickerItems?.length ? { items: tickerItems } : {})} />
    </div>
  );
}

// ─── Copy-driven sections (content/Solutions sections) ─

export function WhySection({ title, content, tone, marker }: Copy) {
  const lines = toLines(content);
  return (
    <Shell tone={tone} marker={marker} label="Why it matters">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <Heading text={title} />
          {lines.length >= 2 && <Mascot variant="floating" className="mt-10" />}
        </div>
        <Prose lines={lines} dark={tone === 'ink'} className="md:pt-2" />
      </div>
    </Shell>
  );
}

export function ProblemsSection({ title, content, tone, marker }: Copy) {
  const { intro, items, outro } = splitCopy(content);
  const dark = tone === 'ink';
  return (
    <Shell tone={tone} marker={marker} label="The problem">
      {/* Homepage "How we work" layout: heading + intro + robot left, numbered list right. */}
      <ProcessLayout title={title} intro={[...intro, ...outro]} items={items.map(splitTitled)} dark={dark} mascot="headset" />
    </Shell>
  );
}

export function AutomationSection({ title, content, tone, marker }: Copy) {
  const { intro, items, outro } = splitCopy(content);
  const dark = tone === 'ink';
  return (
    <Shell tone={tone} marker={marker} label="What we automate">
      <HeaderRow title={title} intro={intro.join(' ')} dark={dark} />
      {titlesOnly(items.map(splitBoldItem)) ? (
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <DashList items={items.map((l) => splitBoldItem(l).title)} dark={dark} label="Common starting points" />
          <Mascot variant="floating" className="justify-self-center" />
        </div>
      ) : (
        <NumberedGrid items={items.map(splitBoldItem)} dark={dark} />
      )}
      {outro.length > 0 && <Prose lines={outro} dark={dark} className="mt-10 max-w-3xl" />}
    </Shell>
  );
}

export function StartSection({ title, content, tone, marker }: Copy) {
  const lines = toLines(content);
  const dark = tone === 'ink';
  const [lead, ...rest] = lines;
  return (
    <Shell tone={tone} marker={marker} label="Where to start">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <Heading text={title} tail={3} className="mb-8" />
          {lead && (
            <p className={`border-l-2 border-brand pl-5 text-base md:text-lg leading-relaxed ${dark ? 'text-white/80' : 'text-ink'}`}>
              <RichText text={lead} />
            </p>
          )}
        </div>
        <Prose lines={rest} dark={dark} className="md:pt-2" />
      </div>
    </Shell>
  );
}

export function ExampleSection({ title, content, tone, marker }: Copy) {
  const lines = toLines(content);
  const dark = tone === 'ink';
  const [lead, ...steps] = lines;
  return (
    <Shell tone={tone} marker={marker} label="In practice">
      <div className={`flex flex-col md:grid ${steps.length === 0 ? 'md:grid-cols-2' : 'md:grid-cols-[1fr_2fr]'} gap-8 md:gap-12`}>
        <div>
          <Heading text={title} />
          {lead && (
            <p className={`mt-4 leading-relaxed ${steps.length === 0 ? 'text-base md:text-lg max-w-xl' : 'text-sm sm:text-base max-w-md'} ${dark ? 'text-white/60' : 'text-muted-foreground'}`}>
              <RichText text={lead} />
            </p>
          )}
        </div>
        {steps.length === 0 ? (
          <Mascot variant="astronaut" className="justify-self-center self-center" />
        ) : (
        <ol className={`divide-y border-t ${dark ? 'divide-white/10 border-white/10' : 'divide-border border-border'}`}>
          {steps.map((s, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="py-6 md:py-8 flex gap-5"
            >
              <span className="eyebrow text-brand tabular-nums pt-1" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className={`text-sm md:text-base leading-relaxed ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>
                <RichText text={s} />
              </p>
            </motion.li>
          ))}
        </ol>
        )}
      </div>
    </Shell>
  );
}

export function BoundariesSection({ title, content, tone, marker }: Copy) {
  const lines = toLines(content);
  const split = splitBoundaries(lines);
  const is = split.is.length ? split.is : lines.slice(0, 1);
  return (
    <Shell tone={tone} marker={marker} label="Scope">
      <HeaderRow title={title} tail={4} dark={tone === 'ink'} />
      <TwoBoxes
        left={{ tag: 'What it is', title: 'What this covers', items: is }}
        right={{ tag: "What it isn't", title: 'What stays with your team', items: split.isNot }}
      />
    </Shell>
  );
}

export function RealitiesSection({ title, content, tone, marker }: Copy) {
  const lines = toLines(content);
  return (
    <Shell tone={tone} marker={marker} label="Built for you">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <Heading text={title} />
          {lines.length >= 2 && <Mascot variant="headset" className="mt-10" />}
        </div>
        <Prose lines={lines} dark={tone === 'ink'} className="md:pt-2" />
      </div>
    </Shell>
  );
}

export function ReturnSection({ title, content, stats, tone, marker }: Copy & { stats?: Stat[] }) {
  const lines = toLines(content);
  const dark = tone === 'ink';
  return (
    <Shell tone={tone} marker={marker} label="The return">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-10 md:mb-14">
        <Heading text={title} tail={2} />
        <Prose lines={lines} dark={dark} className="md:pt-2" />
      </div>
      {stats && stats.length > 0 && <StatsRow stats={stats} dark={dark} />}
    </Shell>
  );
}

export function WhyUsSection({ title, content, tone, marker }: Copy & { [legacy: string]: unknown }) {
  const { intro, items, outro } = splitCopy(content);
  const dark = tone === 'ink';
  return (
    <Shell tone={tone} marker={marker} label="Why Clickmasters">
      {items.length > 0 ? (
        // Homepage "How we work" layout: heading + intro + robot left, numbered reasons right.
        <ProcessLayout title={title} intro={[...intro, ...outro]} items={items.map(splitTitled)} dark={dark} mascot="astronaut" />
      ) : (
        <>
          <HeaderRow title={title} dark={dark} />
          <Prose lines={toLines(content)} dark={dark} />
        </>
      )}
    </Shell>
  );
}

// ─── Structured sections (with-<platform> pages) ───────

export function ContentSection({
  id,
  title,
  subtitle,
  eyebrow,
  content,
  image,
  imageAlt,
  stats,
  cta,
  tone,
  marker,
}: Copy & {
  id?: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  stats?: Stat[];
  cta?: Cta;
  [legacy: string]: unknown;
}) {
  const { intro, items, outro } = splitCopy(content);
  const dark = tone === 'ink';
  const ctaLink = cta && (
    <Link
      href={cta.href}
      className="mt-8 inline-flex items-center gap-2 bg-ink text-white text-sm px-5 py-3 hover:bg-brand transition-colors"
    >
      {cta.text} <span aria-hidden="true">›</span>
    </Link>
  );
  const textOnly = items.length === 0 && outro.length === 0 && !image;
  if (textOnly) {
    // Plain copy: heading left, text right (no empty half column).
    return (
      <Shell tone={tone} marker={marker} label={eyebrow || subtitle || 'Overview'} id={id}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <Heading text={title} />
          <div className="md:pt-2">
            <Prose lines={intro} dark={dark} />
            {ctaLink}
          </div>
        </div>
        {stats && stats.length > 0 && (
          <div className="mt-10 md:mt-14">
            <StatsRow stats={stats} dark={dark} />
          </div>
        )}
      </Shell>
    );
  }
  return (
    <Shell tone={tone} marker={marker} label={eyebrow || subtitle || 'Overview'} id={id}>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <Heading text={title} className="mb-8" />
          <Prose lines={intro} dark={dark} />
          {ctaLink}
        </div>
        <div className="md:pt-2">
          {items.length > 0 &&
            (titlesOnly(items.map(splitTitled)) ? (
              <DashList items={items.map((l) => splitTitled(l).title)} dark={dark} />
            ) : (
              <TitledList items={items.map(splitTitled)} dark={dark} />
            ))}
          {outro.length > 0 && <Prose lines={outro} dark={dark} className={items.length ? 'mt-8' : ''} />}
          {image && items.length === 0 && outro.length === 0 && (
            <div className="border border-border bg-paper p-4">
              <Image src={image} alt={imageAlt || title} width={900} height={640} className="w-full h-auto" />
            </div>
          )}
        </div>
      </div>
      {stats && stats.length > 0 && (
        <div className="mt-10 md:mt-14">
          <StatsRow stats={stats} dark={dark} />
        </div>
      )}
    </Shell>
  );
}

export function FeatureGrid({
  title,
  heading,
  subtitle,
  subheading,
  description,
  eyebrow,
  features,
  columns,
  tone,
  marker,
}: ToneProps & {
  title?: string;
  heading?: string;
  subtitle?: string;
  subheading?: string;
  description?: string;
  eyebrow?: string;
  features: { title: string; description: string }[];
  columns?: 2 | 3;
  [legacy: string]: unknown;
}) {
  const dark = tone === 'ink';
  return (
    <Shell tone={tone} marker={marker} label={eyebrow || 'Capabilities'}>
      <HeaderRow title={heading || title || ''} intro={subheading || subtitle || description} dark={dark} />
      <NumberedGrid items={features ?? []} dark={dark} cols={columns} />
    </Shell>
  );
}

export function ProcessSteps({
  title,
  subtitle,
  eyebrow,
  steps,
  tone,
  marker,
}: ToneProps & {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  steps: { number?: string; title: string; description: string }[];
  [legacy: string]: unknown;
}) {
  const dark = tone === 'ink';
  return (
    <Shell tone={tone} marker={marker} label={eyebrow || 'How we work'}>
      <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
        <div>
          <Heading text={title} tail={1} />
          {subtitle && (
            <p className={`text-sm sm:text-base mt-4 max-w-md ${dark ? 'text-white/60' : 'text-muted-foreground'}`}>{subtitle}</p>
          )}
        </div>
        <TitledList items={steps ?? []} dark={dark} numbered />
      </div>
    </Shell>
  );
}

export function PlatformComparison({
  title,
  subtitle,
  bestFor,
  considerAlternatives,
  tone,
  marker,
}: ToneProps & { title: string; subtitle?: string; eyebrow?: string; bestFor: string[]; considerAlternatives: string[] }) {
  return (
    <Shell tone={tone} marker={marker} label="Platform fit">
      <HeaderRow title={title} intro={subtitle} dark={tone === 'ink'} />
      <TwoBoxes
        left={{ tag: 'Best for', title: 'A strong fit when', items: bestFor ?? [] }}
        right={{ tag: 'Consider alternatives', title: 'Look elsewhere when', items: considerAlternatives ?? [] }}
      />
    </Shell>
  );
}

export function StatsSection({ title, eyebrow, stats, tone, marker }: ToneProps & { title?: string; eyebrow?: string; stats: Stat[] }) {
  const dark = tone === 'ink';
  return (
    <Shell tone={tone} marker={marker} label={eyebrow || 'By the numbers'}>
      {title && <HeaderRow title={title} dark={dark} />}
      <StatsRow stats={stats ?? []} dark={dark} />
    </Shell>
  );
}

// ─── Homepage FAQ + CTA ────────────────────────────────

export function FAQSection({ title, subtitle, faqs }: { title: string; subtitle?: string; eyebrow?: string; faqs: { question: string; answer: string }[] }) {
  return (
    <FAQ
      showMascot={false}
      ctaPosition="faq"
      data={{
        heading: title,
        items: (faqs ?? []).map((f) => ({ question: stripMarkup(f.question), answer: stripMarkup(f.answer) })),
        sideText: subtitle,
        sideLink: { text: 'Book a Free Audit', link: AUDIT },
      }}
    />
  );
}

export function CTASection({ title, subtitle, primaryCta }: { title: string; subtitle?: string; primaryCta?: Cta; [legacy: string]: unknown }) {
  return (
    <CTA
      showMascots={false}
      ctaPosition="footer"
      data={{
        heading: title,
        subheading: subtitle ?? '',
        cta: { text: primaryCta?.text ?? 'Book a Free Audit', link: primaryCta?.href ?? AUDIT },
      }}
    />
  );
}
