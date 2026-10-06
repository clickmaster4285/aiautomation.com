'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Phone,
  ShieldCheck,
  Zap,
  Bot,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { getCaseStudy } from '@/content/case-studies';
import type { CaseStudy } from '@/content/case-studies/clickmasters-ai-lead-response-case-study-kit';
import { Marker, splitHeading } from './Shared';
import { PartsTabs } from './parts-tabs';

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next 15: unwrap the promise. Next 13/14: replace with `const { slug } = params;`
  const { slug } = use(params);
  const cs = getCaseStudy(slug);
  if (!cs) notFound();
  return <CaseStudyView cs={cs} />;
}

function CaseStudyView({ cs }: { cs: CaseStudy }) {
  const seo       = cs.seo       as any;
  const hero      = cs.hero      as any;
  const challenge = cs.challenge as any;
  const gaps      = cs.gaps      as any;
  const solution  = cs.solution  as any;
  const testLab   = cs.testLab   as any;
  const timeline  = cs.timeline  as any;
  const stack     = cs.stack     as any;
  const results   = cs.results   as any;
  const faq       = cs.faq       as any;
  const cta       = cs.cta       as any;

  const heroH      = splitHeading(hero.h1, 5);
  const challengeH = splitHeading(challenge.h2, 3);
  const gapsH      = splitHeading(gaps.h2, 5);
  const solutionH  = splitHeading(solution.h2, 3);
  const stackH     = splitHeading(stack.h2, 2);
  const resultsH   = splitHeading(results.h2, 3);
  const faqH       = splitHeading(faq.h2, 1);
  const ctaH       = splitHeading(cta.h2, 3);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: hero.h1,
    description: seo.description,
    image: seo.og?.image ? [seo.og.image] : undefined,
    datePublished: cs.meta.publishedAt,
    dateModified: cs.meta.updatedAt,
    author: { '@type': 'Organization', name: 'Clickmasters' },
    publisher: { '@type': 'Organization', name: 'Clickmasters', url: 'https://clickmasters.io' },
    mainEntityOfPage: seo.url,
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://clickmasters.io/' },
      { '@type': 'ListItem', position: 2, name: 'Case studies', item: 'https://clickmasters.io/case-studies' },
      { '@type': 'ListItem', position: 3, name: seo.h1, item: seo.url },
    ],
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((it: any) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  return (
    <main className="bg-paper text-ink overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

     

{/* ═════════════════ HERO ═════════════════ */}
<section className="bg-ink text-white py-16 md:py-24 relative overflow-hidden">
  <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
    {/* Marker row */}
    <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
      <Marker n="01" />
      <div className="flex-1 h-px bg-white/10" />
      <span className="eyebrow text-white/60 whitespace-nowrap text-xs md:text-sm">
        {hero.eyebrow}
      </span>
    </div>

    {/* Breadcrumb */}
    <nav aria-label="Breadcrumb" className="text-xs text-white/40 mb-6">
      <ol className="flex items-center gap-2">
        <li><Link href="/" className="hover:text-brand transition-colors">Home</Link></li>
        <li><ChevronRight className="h-3 w-3" /></li>
        <li><Link href="/case-studies" className="hover:text-brand transition-colors">Case studies</Link></li>
        <li><ChevronRight className="h-3 w-3" /></li>
        <li className="truncate text-white/60">{seo.h1}</li>
      </ol>
    </nav>

    {/* Two-column: copy left, form right */}
    <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
      {/* ── Left: headline + copy ── */}
      <div className="md:col-span-7">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
        >
          {heroH.head}
          <br />
          <span className="display-italic text-brand">{heroH.tail}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-white/70 mt-6 md:mt-8 max-w-xl text-sm md:text-base leading-relaxed"
        >
          {hero.intro}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-white/40 italic text-xs md:text-sm mt-4 max-w-xl"
        >
          {hero.disclaimer}
        </motion.p>
      </div>

      {/* ── Right: contact form ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="md:col-span-5"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 md:p-8"
        >
          <div className="mb-6">
            <h3 className="display text-xl md:text-2xl mb-1">Get the full breakdown</h3>
            <p className="text-white/50 text-xs md:text-sm">
              No pitch. Just the playbook we used.
            </p>
          </div>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="hero-name" className="eyebrow text-white/50 block mb-2 text-[11px]">
                Name
              </label>
              <input
                id="hero-name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="hero-email" className="eyebrow text-white/50 block mb-2 text-[11px]">
                Work email
              </label>
              <input
                id="hero-email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand focus:outline-none transition-colors"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="hero-company" className="eyebrow text-white/50 block mb-2 text-[11px]">
                Company
              </label>
              <input
                id="hero-company"
                name="company"
                type="text"
                placeholder="Acme Inc."
                className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="hero-message" className="eyebrow text-white/50 block mb-2 text-[11px]">
                What are you trying to fix?
              </label>
              <textarea
                id="hero-message"
                name="message"
                rows={3}
                placeholder="Missed calls, slow follow-up, no-shows..."
                className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand text-white text-sm px-6 py-3.5 rounded-lg hover:bg-brand/90 transition-colors"
          >
            Send me the playbook
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="mt-4 text-[11px] text-white/35 text-center leading-relaxed">
            We reply in under 24 hours. No spam, no newsletters.
          </p>
        </form>
      </motion.div>
    </div>

    {/* Feature strip — full width */}
    <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-8 md:pt-10">
      {[
        { icon: Zap,        label: 'Seconds, not hours',            n: '01' },
        { icon: Bot,        label: 'AI answers, books, follows up', n: '02' },
        { icon: Clock,      label: '24/7 coverage',                 n: '03' },
        { icon: TrendingUp, label: 'Tracked to revenue',            n: '04' },
      ].map(({ icon: Icon, label, n }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 + i * 0.08 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="eyebrow text-white/40 tabular-nums">{n}</span>
            <Icon className="h-4 w-4 text-brand shrink-0" />
          </div>
          <span className="display text-xl md:text-2xl leading-snug">{label}</span>
        </motion.div>
      ))}
    </div>

    {/* Robot — right edge */}
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute -right-8 top-[35%] w-32 md:w-40 pointer-events-none hidden lg:block opacity-70"
    >
      <Image
        src="/images/robo-side.png"
        alt=""
        width={512}
        height={512}
        className="w-full h-auto scale-x-[-1]"
      />
    </motion.div>
  </div>
</section>



      {/* ═════════════════ AT A GLANCE ═════════════════ */}
     <section className="bg-paper py-16 md:py-24">
  <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
    <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
      <Marker n="02" />
      <div className="flex-1 h-px bg-black/10" />
      <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
        At a glance
      </span>
    </div>

    <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-16">
      <h2 className="display text-4xl sm:text-5xl md:text-6xl">
        At a glance
        <br />
        <span className="display-italic text-brand">the full brief.</span>
      </h2>
      <p className="text-muted-foreground max-w-md md:self-end">
        Every fact that makes this project real: what it is, who it&apos;s
        for, and what&apos;s inside.
      </p>
    </div>

 <div>
  {hero.atAGlance.map((row: any, i: number) => (
    <motion.div
      key={row.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 px-4 md:px-6 -mx-4 md:-mx-6 border-b border-border group hover:bg-ink/[0.02] transition-colors first:border-t"
    >
      <span className="md:col-span-3 eyebrow text-brand">{row.label}</span>
      <span className="md:col-span-9 text-ink/80 leading-relaxed">{row.value}</span>
    </motion.div>
  ))}
</div>
  </div>
</section>




      {/* ═════════════════ CHALLENGE ═════════════════ */}
      <section className="bg-ink text-white py-16 md:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
          <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
            <Marker n="03" />
            <div className="flex-1 h-px bg-white/10" />
            <span className="eyebrow text-white/60 whitespace-nowrap text-xs md:text-sm">
              The Challenge
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-16">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              {challengeH.head}
              <br />
              <span className="display-italic text-brand">{challengeH.tail}</span>
            </h2>
            <p className="text-white/70 max-w-md md:self-end">{challenge.lead}{challenge.research}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-brand pl-6 max-w-3xl mb-14 md:mb-20"
          >
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              
            </p>
          </motion.div>

          <h3 className="display text-2xl md:text-3xl mb-8 md:mb-10">
            {challenge.h3WhyHard.h3}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {challenge.h3WhyHard.bullets.map((b: any, i: number) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-ink p-6 md:p-8 group hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg border border-brand/30 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5 text-brand" />
                </div>
                <p className="display text-lg md:text-xl mb-2">{b.title}</p>
                <p className="text-white/60 text-sm leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-sm italic text-white/40 max-w-3xl">
            {challenge.h3WhyHard.closing}
          </p>
        </div>
      </section>



      {/* ═════════════════ GAPS ═════════════════ */}
     <section className="bg-paper py-16 md:py-24">
  <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
    <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
      <Marker n="04" />
      <div className="flex-1 h-px bg-black/10" />
      <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
        Gaps We Closed
      </span>
    </div>

    <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-16">
      <h2 className="display text-4xl sm:text-5xl md:text-6xl">
        {gapsH.head}
        <br />
        <span className="display-italic text-brand">{gapsH.tail}</span>
      </h2>
      <p className="text-muted-foreground max-w-md md:self-end">{gaps.intro}</p>
    </div>

    <div>
      {gaps.rows.map((r: any, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 px-4 md:px-6 -mx-4 md:-mx-6 border-b border-border first:border-t group hover:bg-ink hover:text-white transition-colors duration-500"
        >
          <span className="md:col-span-4 display text-lg md:text-xl">{r.gap}</span>
          <span className="md:col-span-3 text-sm text-muted-foreground group-hover:text-white/60 transition-colors">
            {r.why}
          </span>
          <span className="md:col-span-5 text-sm text-ink/80 group-hover:text-white/80 transition-colors">
            {r.added}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      {/* ═════════════════ SOLUTION ═════════════════ */}
   <section className="bg-ink text-white py-16 md:py-24 relative overflow-hidden">
  <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
    <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
      <Marker n="05" />
      <div className="flex-1 h-px bg-white/10" />
      <span className="eyebrow text-white/60 whitespace-nowrap text-xs md:text-sm">
        The Solution
      </span>
    </div>

    {/* ── Same layout as Process: 1fr / 2fr ── */}
    <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
      {/* Left column — heading + subtitle + robot */}
      <div className="text-center md:text-left">
        <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {solutionH.head}
          <br />
          <span className="display-italic text-brand">{solutionH.tail}</span>
        </h2>

        <p className="text-white/60 text-xs sm:text-sm mt-3 md:mt-4 max-w-md mx-auto md:mx-0">
          Seven steps, one system. Every channel lands in the same place.
        </p>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mt-6 md:mt-8"
        >
          <Image
            src="/images/process.png"
            alt="Solution illustration"
            width={640}
            height={640}
            className="w-40 sm:w-56 md:w-72 lg:w-[28rem] h-auto mx-auto md:mx-0"
          />
        </motion.div>
      </div>

      {/* Right column — steps */}
      <div className="divide-y divide-white/10 border-t border-white/10">
        {solution.steps.map((s: any, i: number) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex flex-wrap items-center justify-between gap-3 py-6 md:py-8 group"
          >
            <span className="eyebrow text-white/40 tabular-nums text-sm md:text-base">
              {String(s.n).padStart(2, '0')}
            </span>

            <div className="flex-1 text-center md:text-left px-3">
              <span className="display text-xl sm:text-2xl md:text-3xl group-hover:text-brand group-hover:translate-x-0 md:group-hover:translate-x-2 transition-all block">
                {s.title}
              </span>
              <span className="text-white/50 text-xs md:text-sm leading-relaxed mt-1 block max-w-xl">
                {s.body}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ── Rules block ── */}
   
  </div>
</section>

{/* ═════════════════ RULES / PRINCIPLES ═════════════════ */}
<section className="bg-paper py-16 md:py-24">
  <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
    {/* Marker row */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12"
    >
      <Marker n="06" />
      <div className="flex-1 h-px bg-black/10" />
      <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
        Our Rules
      </span>
    </motion.div>

    {/* Heading grid */}
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="display text-4xl sm:text-5xl md:text-6xl"
      >
        {solution.rules.h3}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-muted-foreground max-w-md md:self-end"
      >
        {solution.rules.intro}
      </motion.p>
    </div>

    {/* Rules — vertical list with animated left bar */}
    <div className="border-t border-border">
      {solution.rules.bullets.map((b: string, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.5,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative grid md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 px-4 md:px-6 -mx-4 md:-mx-6 border-b border-border hover:bg-ink/[0.02] transition-colors"
        >
          {/* Animated left bar */}
          <span
            className="pointer-events-none absolute left-0 top-4 bottom-4 w-[2px] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
            style={{ backgroundColor: 'var(--brand)' }}
          />

          {/* Number */}
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 + 0.1 }}
            className="md:col-span-1 font-mono text-xs tabular-nums pt-1 text-muted-foreground group-hover:text-brand transition-colors"
          >
            {String(i + 1).padStart(2, '0')}
          </motion.span>

          {/* Rule text */}
          <span className="md:col-span-11 text-ink/80 text-sm md:text-base leading-relaxed group-hover:text-ink transition-colors">
            {b}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ═════════════════ TEST LAB + TIMELINE ═════════════════ */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
          <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
            <Marker n="06" />
            <div className="flex-1 h-px bg-black/10" />
            <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
              Test Lab
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="display text-2xl md:text-3xl mb-4"
              >
                {testLab.h3}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground"
              >
                {testLab.intro}
              </motion.p>

              <div className="flex gap-10 mt-10">
                <div className="border-l-2 border-brand pl-4">
                  <div className="display text-4xl">40</div>
                  <div className="eyebrow text-muted-foreground mt-1">Scripted Scenarios</div>
                </div>
                <div className="border-l-2 border-brand pl-4">
                  <div className="display text-4xl">9</div>
                  <div className="eyebrow text-muted-foreground mt-1">Pass Thresholds</div>
                </div>
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="display text-2xl md:text-3xl mb-2"
              >
                {timeline.h3}
              </motion.h3>
              <p className="text-sm italic text-muted-foreground mb-6">{timeline.note}</p>

              <div className="relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-brand/40" />
                <ul className="space-y-4">
                  {timeline.rows.map((r: any, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="relative pl-10"
                    >
                      <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand bg-paper text-[10px] font-bold text-brand">
                        {i + 1}
                      </span>
                      <div className="rounded-lg border border-border bg-white p-4 hover:border-brand/40 transition-colors">
                        <div className="flex items-center gap-3 text-xs">
                          <span className="font-mono text-muted-foreground">{r.time}</span>
                          <span className="rounded bg-brand/10 px-2 py-0.5 font-semibold text-brand">
                            {r.channel}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-ink/75">{r.what}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ STACK ═════════════════ */}
      <section className="bg-paper py-16 md:py-24  border-border">
        <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
          <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
            <Marker n="07" />
            <div className="flex-1 h-px bg-black/10" />
            <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
              Tech Stack
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-16">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              {stackH.head}
              <br />
              <span className="display-italic text-brand">{stackH.tail}</span>
            </h2>
            <p className="text-muted-foreground max-w-md md:self-end">{stack.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {stack.rows.map((r: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-paper p-6 md:p-8 group hover:bg-ink hover:text-white transition-colors duration-500"
              >
                <div className="eyebrow text-brand mb-3">{r.layer}</div>
                <div className="display text-xl md:text-2xl mb-2">{r.what}</div>
                <div className="text-sm text-muted-foreground group-hover:text-white/60 transition-colors leading-relaxed">
                  {r.why}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ RESULTS ═════════════════ */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
          <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
            <Marker n="08" />
            <div className="flex-1 h-px bg-white/10" />
            <span className="eyebrow text-white/60 whitespace-nowrap text-xs md:text-sm">
              Results
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-16">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              {resultsH.head}
              <br />
              <span className="display-italic text-brand">{resultsH.tail}</span>
            </h2>
            <div className="md:self-end">
              <p className="text-white/70 mb-2">{results.intro}</p>
              <p className="text-white/40 italic text-sm">{results.note}</p>
            </div>
          </div>

          <div className="border-t border-white/10">
            {results.rows.map((r: any, i: number) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid md:grid-cols-12 gap-4 md:gap-6 py-5 border-b border-white/10 items-baseline group hover:bg-white/[0.02] transition-colors"
              >
                <span className="md:col-span-1 eyebrow text-white/40 tabular-nums">
                  {String(r.n).padStart(2, '0')}
                </span>
                <span className="md:col-span-5 display text-lg md:text-xl group-hover:text-brand transition-colors">
                  {r.measure}
                </span>
                <span className="md:col-span-4 text-white/50 text-sm">{r.how}</span>
                <span className="md:col-span-2 text-right">
                  <span className="inline-block bg-brand/10 border border-brand/30 px-3 py-1 text-xs font-semibold text-brand">
                    {r.target}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ═════════════════ BACKING DOC TABS ═════════════════ */}
      <PartsTabs parts={cs.parts} />



    {/* ═════════════════ FAQ ═════════════════ */}
<section className="bg-paper py-16 md:py-24">
  <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
    <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
      <Marker n="09" />
      <div className="flex-1 h-px bg-black/10" />
      <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
        FAQ
      </span>
    </div>

    {/* Heading — centered */}
    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
      <h2 className="display text-4xl sm:text-5xl md:text-6xl">
        {faqH.head}
        <br />
        <span className="display-italic text-brand">{faqH.tail}</span>
      </h2>
      <p className="text-muted-foreground mt-4 md:mt-6">
        Straight answers, no marketing fluff.
      </p>
    </div>

    {/* Questions — centered column, left-aligned text */}
    <div className="divide-y divide-border border-t border-border max-w-3xl mx-auto">
      {faq.items.map((it: any, i: number) => (
        <motion.details
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03 }}
          className="group py-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <span className="display text-lg md:text-xl group-open:text-brand transition-colors">
              {it.q}
            </span>
            <span className="shrink-0 text-brand text-2xl group-open:rotate-90 transition-transform">
              <ChevronRight className="h-5 w-5" />
            </span>
          </summary>
          <p className="mt-4 text-ink/70 text-sm md:text-base leading-relaxed">
            {it.a}
          </p>
        </motion.details>
      ))}
    </div>
  </div>
</section>


      {/* ═════════════════ CTA ═════════════════ */}
      <section className="bg-paper py-16 md:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6 text-center relative">
          {/* Left robot */}
          <motion.div
            className="absolute left-4 top-0 w-20 md:w-44 pointer-events-none hidden md:block"
            animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Image
              src="/images/robot-mascot2.png"
              alt=""
              width={640}
              height={640}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right robot */}
          <motion.div
            className="absolute right-4 top-12 w-20 md:w-44 pointer-events-none hidden md:block"
            animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Image
              src="/images/robot-mascot2.png"
              alt=""
              width={640}
              height={640}
              className="w-full h-auto"
            />
          </motion.div>

          <h2 className="display text-4xl sm:text-5xl md:text-7xl">
            {ctaH.head}
          </h2>
          <h2 className="display-italic text-brand text-4xl sm:text-5xl md:text-7xl mt-2">
            {ctaH.tail}
          </h2>

          <p className="text-muted-foreground mt-10 max-w-md mx-auto">{cta.body}</p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link
              href={cta.primary.href}
              className="inline-flex items-center gap-2 bg-ink text-white text-sm px-8 py-4 hover:bg-brand transition-colors"
            >
              {cta.primary.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={cta.secondary.href}
              className="inline-flex items-center gap-2 border border-border text-ink text-sm px-8 py-4 hover:border-brand hover:text-brand transition-colors"
            >
              {cta.secondary.label}
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">{cta.related}</p>

          <div className="mt-16 overflow-hidden">
            <div className="display text-[8vw] text-ink/5 whitespace-nowrap flex">
              <div className="flex animate-marquee">
                <span>CLICKMASTERS · CLICKMASTERS · CLICKMASTERS · CLICKMASTERS · </span>
                <span>CLICKMASTERS · CLICKMASTERS · CLICKMASTERS · CLICKMASTERS · </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}