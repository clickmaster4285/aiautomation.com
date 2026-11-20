// components/products/ProductPage.tsx
'use client';

// Shared product-page layout, styled with the homepage ("/") design system.
// Each product page passes its own content object (see content/products/*.ts).
// Inline [anchor](/path) markers in the copy are rendered as internal links.

import { Fragment } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Marquee from '@/components/landingPage/Marquee';
import CtaBand from '@/components/landingPage/CtaBand';
import Process from '@/components/landingPage/Process';
import Benefits from '@/components/landingPage/Benefits';
import WhyChooseUs from '@/components/landingPage/WhyChooseUs';
import FAQ from '@/components/landingPage/FAQ';
import CTA from '@/components/landingPage/CTA';
import { Dot, SectionLabel, splitHeading } from '@/components/landingPage/Shared';
import { HubJsonLd } from '@/components/seo/HubJsonLd';
import ProductLeadForm from '@/components/products/ProductLeadForm';
import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';
import type { RelatedProducts } from '@/content/products';


// ─── Helpers ───────────────────────────────────────────

/** Renders copy with [anchor](/path) markers as internal next/link links. */
function RichText({ text, dark = false }: { text: string; dark?: boolean }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        return (
          <Link
            key={i}
            href={m[2]}
            className={`ctx-link font-medium underline decoration-brand underline-offset-4 hover:text-brand transition-colors ${
              dark ? 'text-white' : 'text-ink'
            }`}
          >
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

/** Homepage heading pattern: display text + italic brand-coloured tail. */
function Heading({ text, tailWords = 2, className = '' }: { text: string; tailWords?: number; className?: string }) {
  const { head, tail } = splitHeading(text, tailWords);
  return (
    <h2 className={`display ${className}`}>
      {head}{' '}
      <br className="hidden md:block" />
      <span className="display-italic text-brand">{tail}</span>
    </h2>
  );
}

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.05 },
});

// ─── Page ──────────────────────────────────────────────

/** Grid of linked product cards (used by the content `related` block and the auto "related products" block). */
function RelatedCards({
  eyebrow,
  heading,
  intro,
  items,
  tone = 'paper',
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: { title: string; description: string; href: string }[];
  tone?: 'paper' | 'secondary';
}) {
  return (
    <section className={`${tone === 'secondary' ? 'bg-secondary' : 'bg-paper'} py-16 md:py-24`}>
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label={eyebrow} />
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <Heading text={heading} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
          {intro && <p className="text-sm md:text-base text-muted-foreground md:text-right md:self-end">{intro}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map((r, i) => (
            <motion.div key={r.href} {...fadeUp(i)}>
              <Link
                href={r.href}
                className="related-link block h-full bg-paper p-6 md:p-8 group hover:bg-ink hover:text-white transition-colors duration-500"
              >
                <h3 className="display text-xl md:text-2xl mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed">{r.description}</p>
                <span className="mt-4 inline-block eyebrow text-xs text-muted-foreground group-hover:text-brand">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage({
  content: c,
  seo,
  relatedProducts,
}: {
  content: ProductPageContent;
  seo: HubSeo;
  /** Three related product pages, shown as cards just before the final CTA. */
  relatedProducts?: RelatedProducts;
}) {
  const AUDIT = c.hero.primaryCta.href;
  // H1 = homepage pattern: display text + italic brand tail.
  const heroTitle = splitHeading(c.hero.heading, c.hero.accentWords ?? 4);
  const crumbsSeo = seo;

  return (
    // Root layout renders the single <main>; this page uses a <div> like the homepage.
    <div className="bg-paper text-ink">
      <HubJsonLd hub={seo} faqs={c.faqs} />

      {/* ── HERO + MARQUEE ───────────────────────────── */}
      <div className="flex flex-col min-h-[calc(100svh-4rem)]">
        <section className="relative pt-6 pb-12 md:py-10 flex-1 md:flex md:items-center overflow-hidden bg-paper isolate">
          <div className="mx-auto max-w-[84vw] w-full px-6 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
              <ol className="flex items-center gap-2 eyebrow text-xs text-muted-foreground">
                {crumbsSeo.crumbs.map((cr, i) => {
                  const last = i === crumbsSeo.crumbs.length - 1;
                  return (
                    <li key={cr.path} className="flex items-center gap-2">
                      {last ? (
                        <span aria-current="page" className="text-ink">{cr.name}</span>
                      ) : (
                        <>
                          <Link href={cr.path} className="hover:text-brand transition-colors">{cr.name}</Link>
                          <span aria-hidden="true">/</span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>

            <div className="relative grid md:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="eyebrow text-brand border border-brand inline-block px-3 py-1 mb-5 md:mb-7 text-xs md:text-sm"
                >
                  {c.hero.badge}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="display text-[9vw] sm:text-6xl md:text-[4.2vw] xl:text-[4.4vw] leading-[1.05]"
                >
                  {heroTitle.head}{' '}
                  <span className="display-italic font-normal text-brand">{heroTitle.tail}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-5 md:mt-7 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                >
                  {c.hero.subheading}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="mt-6 md:mt-9 flex flex-col sm:flex-row gap-3 md:gap-4"
                >
                  <Link
                    href={c.hero.primaryCta.href}
                    data-cta-position="hero"
                    className="bg-ink text-white text-sm md:text-base px-5 py-3 md:px-7 md:py-4 hover:bg-brand transition-colors inline-flex items-center justify-center gap-2"
                  >
                    {c.hero.primaryCta.text} <span aria-hidden="true">›</span>
                  </Link>
                  <a
                    href={c.hero.secondaryCta.href}
                    className="border border-ink text-ink text-sm md:text-base px-5 py-3 md:px-7 md:py-4 font-medium hover:bg-ink hover:text-white transition-colors text-center"
                  >
                    {c.hero.secondaryCta.text}
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex md:justify-end mt-4 md:mt-0"
              >
                <ProductLeadForm product={seo.name} variant="hero" id="get-started" />
              </motion.div>
            </div>
          </div>

          <Dot className="absolute top-[30%] left-[55%]" />
          <Dot className="absolute top-[45%] left-[3%]" />
          <Dot className="absolute top-[78%] left-[40%]" />
        </section>

        <Marquee
          items={c.hero.marquee}
        />
      </div>

      {/* ── 01 WHAT IT IS ────────────────────────────── */}
      <section className={`${c.layout?.introTone === 'secondary' ? 'bg-secondary' : 'bg-paper'} py-16 md:py-24`}>
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label={c.intro.eyebrow} marker="01" />
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <Heading text={c.intro.heading} className="text-4xl sm:text-5xl md:text-6xl mb-8" />
              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {c.intro.paragraphs.map((p, i) => (
                  <p key={i}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            </div>

            <div className="md:pt-4">
              <h3 className="eyebrow text-muted-foreground mb-4">Problems it solves</h3>
              <ul className="divide-y divide-border border-t border-border">
                {c.intro.problems.map((t, i) => (
                  <motion.li key={t} {...fadeUp(i)} className="flex items-start gap-5 py-5 group">
                    <span className="text-brand text-xl leading-none mt-1" aria-hidden="true">—</span>
                    <span className="display text-xl md:text-2xl group-hover:translate-x-2 transition-transform">{t}</span>
                  </motion.li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLAINER (optional) ─────────────────────── */}
      {c.explainer && (
        <section className="bg-ink text-white py-16 md:py-24">
          <div className="mx-auto max-w-[84vw] px-6">
            <SectionLabel label={c.explainer.eyebrow} dark />
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <Heading text={c.explainer.heading} className="text-4xl sm:text-5xl md:text-6xl mb-8" />
                <div className="space-y-5 text-white/70 leading-relaxed">
                  {c.explainer.paragraphs.map((p, i) => (
                    <p key={i}>
                      <RichText text={p} dark />
                    </p>
                  ))}
                </div>
              </div>
              <ul className="divide-y divide-white/10 border-t border-white/10 md:self-end">
                {c.explainer.points.map((pt, i) => (
                  <motion.li key={pt.title} {...fadeUp(i)} className="py-6 group">
                    <h3 className="display text-2xl md:text-3xl group-hover:text-brand md:group-hover:translate-x-2 transition-all">
                      {pt.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mt-1 max-w-xl">{pt.description}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── 02 CORE FEATURES ─────────────────────────── */}
      <section className={`bg-paper ${c.explainer ? "py-16 md:py-24" : "pb-16 md:pb-24"}`}>
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label={c.features.eyebrow} marker="02" />
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <Heading text={c.features.heading} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
            <p className="text-base md:text-lg text-muted-foreground md:text-right md:self-end">
              <RichText text={c.features.intro} />
            </p>
          </div>

          <div className="relative">
            <Dot className="hidden md:block absolute -top-2 -right-2 z-10" />
            <Dot className="hidden md:block absolute -bottom-2 -left-2 z-10" />
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                c.layout?.featuresColumns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
              } gap-px bg-border border border-border`}
            >
              {c.features.items.map((f, i) => (
                <motion.div
                  key={f.title}
                  {...fadeUp(i)}
                  className="bg-paper p-6 md:p-8 group hover:bg-ink hover:text-white transition-colors duration-500"
                >
                  <div className="eyebrow text-brand tabular-nums pb-4" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="display text-xl md:text-2xl mb-3">{f.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        data={{
          heading: c.cta.bandHeading,
          subheading: c.cta.description,
          cta: { text: 'Book a Free Audit', link: AUDIT },
        }}
        ctaPosition="mid-page"
      />

      {/* ── 03 HOW IT WORKS (homepage Process section) ─ */}
      <div id="how-it-works" className="scroll-mt-24">
        <Process
          marker="03"
          data={{
            label: c.howItWorks.eyebrow,
            heading: c.howItWorks.heading,
            subheading: c.howItWorks.intro,
            steps: c.howItWorks.steps.map((s, i) => ({
              number: String(i + 1).padStart(2, '0'),
              title: s.title,
              description: s.description,
            })),
          }}
        />
      </div>

      {/* ── 04 BENEFITS (homepage Benefits section) ──── */}
      <Benefits
        marker="04"
        data={{
          label: c.benefits.eyebrow,
          heading: c.benefits.heading,
          subheading: c.benefits.intro,
          items: c.benefits.items,
        }}
      />

      {/* ── 05 AI-POWERED SALES AUTOMATION ───────────── */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label={c.aiAutomation.eyebrow} marker="05" />
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-14">
            <Heading text={c.aiAutomation.heading} tailWords={4} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed md:self-end">
              {c.aiAutomation.paragraphs.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: 'What the AI handles', items: c.aiAutomation.aiDoes, dark: true },
              { title: 'What your team keeps', items: c.aiAutomation.peopleDo, dark: false },
            ].map((col, ci) => (
              <motion.div
                key={col.title}
                {...fadeUp(ci)}
                className={`p-6 md:p-10 border ${col.dark ? 'bg-ink text-white border-ink' : 'bg-paper border-border'}`}
              >
                <div className="eyebrow text-brand tabular-nums mb-4" aria-hidden="true">
                  {ci === 0 ? 'AI' : 'People'}
                </div>
                <h3 className="display text-2xl md:text-3xl mb-6">{col.title}</h3>
                <ul className={`divide-y ${col.dark ? 'divide-white/10' : 'divide-border'}`}>
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-4 py-3 text-sm md:text-base ${col.dark ? 'text-white/80' : 'text-muted-foreground'}`}
                    >
                      <span className="text-brand" aria-hidden="true">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 SPOTLIGHT (product-specific deep dive) ── */}
      <section className="bg-ink text-white py-16 md:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label={c.spotlight.eyebrow} marker="06" dark />
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <Heading text={c.spotlight.heading} tailWords={3} className="text-4xl sm:text-5xl md:text-6xl mb-8" />
              <div className="space-y-5 text-white/70 leading-relaxed">
                {c.spotlight.paragraphs.map((p, i) => (
                  <p key={i}>
                    <RichText text={p} dark />
                  </p>
                ))}
              </div>
            </div>
            <ul className="divide-y divide-white/10 border-t border-white/10 md:self-end">
              {c.spotlight.points.map((pt, i) => (
                <motion.li key={pt.title} {...fadeUp(i)} className="py-6 group">
                  <h3 className="display text-2xl md:text-3xl group-hover:text-brand md:group-hover:translate-x-2 transition-all">
                    {pt.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mt-1 max-w-xl">{pt.description}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── EXTRA DEEP DIVES (optional, alternate light / dark) ── */}
      {c.extras?.map((x, xi) => {
        const dark = xi % 2 === 1;
        return (
          <section key={x.heading} className={`py-16 md:py-24 ${dark ? 'bg-ink text-white' : 'bg-paper'}`}>
            <div className="mx-auto max-w-[84vw] px-6">
              <SectionLabel label={x.eyebrow} dark={dark} />
              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <Heading text={x.heading} tailWords={x.accentWords ?? 2} className="text-4xl sm:text-5xl md:text-6xl mb-8" />
                  <div className={`space-y-5 leading-relaxed ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {x.paragraphs.map((p, i) => (
                      <p key={i}>
                        <RichText text={p} dark={dark} />
                      </p>
                    ))}
                  </div>
                </div>
                <ul className={`divide-y border-t md:self-end ${dark ? 'divide-white/10 border-white/10' : 'divide-border border-border'}`}>
                  {x.points.map((pt, i) => (
                    <motion.li key={pt.title} {...fadeUp(i)} className="py-6 group">
                      <h3 className="display text-2xl md:text-3xl group-hover:text-brand md:group-hover:translate-x-2 transition-all">
                        {pt.title}
                      </h3>
                      <p className={`text-sm leading-relaxed mt-1 max-w-xl ${dark ? 'text-white/50' : 'text-muted-foreground'}`}>
                        {pt.description}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── 07 WHO IT'S FOR (homepage WhyChooseUs grid) ─ */}
      <WhyChooseUs
        marker="07"
        data={{
          label: c.audience.eyebrow,
          heading: c.audience.heading,
          items: c.audience.items,
        }}
      />

      {/* ── 08 INTEGRATIONS ──────────────────────────── */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label={c.integrations.eyebrow} marker="08" />
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <Heading text={c.integrations.heading} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed md:self-end">
              {c.integrations.paragraphs.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {c.integrations.groups.map((g, i) => (
              <motion.div
                key={g.label}
                {...fadeUp(i)}
                className="bg-paper border border-border p-6 md:p-8 hover:border-brand transition-colors"
              >
                <div className="eyebrow text-brand tabular-nums mb-4" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="display text-xl md:text-2xl mb-4">{g.label}</h3>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-brand flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 WHY CLICKMASTERS (homepage WhyChooseUs) ─ */}
      <WhyChooseUs
        marker="09"
        data={{
          label: c.whyUs.eyebrow,
          heading: c.whyUs.heading,
          subheading: c.whyUs.intro,
          items: c.whyUs.items,
        }}
      />

      {/* ── 10 GETTING STARTED ───────────────────────── */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label={c.gettingStarted.eyebrow} marker="10" dark />
          <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
            <div>
              <Heading text={c.gettingStarted.heading} tailWords={3} className="text-4xl sm:text-5xl md:text-6xl" />
              <p className="text-white/60 text-sm sm:text-base mt-4 max-w-md leading-relaxed">
                <RichText text={c.gettingStarted.intro} dark />
              </p>
              <p className="mt-8 border-l-2 border-brand pl-5 text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                {c.gettingStarted.note}
              </p>
            </div>

            <ol className="divide-y divide-white/10 border-t border-white/10">
              {c.gettingStarted.steps.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="py-6 md:py-8 group"
                >
                  <h3 className="display text-xl sm:text-2xl md:text-3xl group-hover:text-brand md:group-hover:translate-x-2 transition-all">
                    {String(i + 1).padStart(2, '0')}. {s.title}
                  </h3>
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed mt-1 max-w-xl">{s.description}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS (optional, topic-cluster links) ─ */}
      {c.related && (
        <RelatedCards
          eyebrow={c.related.eyebrow}
          heading={c.related.heading}
          intro={c.related.intro}
          items={c.related.items}
        />
      )}

      {/* ── FAQ (homepage FAQ: <details>, answers always in HTML) ─ */}
      <FAQ
        showMascot={false}
        ctaPosition="faq"
        data={{
          heading: c.faqHeading,
          items: c.faqs,
          sideText: c.faqSideText,
          sideLink: { text: 'Book a Free Audit', link: AUDIT },
        }}
      />

      {/* ── RELATED PRODUCTS (3 cards, internal links, right before the final CTA) ─ */}
      {relatedProducts && relatedProducts.items.length > 0 && (
        <RelatedCards
          eyebrow={relatedProducts.eyebrow}
          heading={relatedProducts.heading}
          items={relatedProducts.items}
          tone="secondary"
        />
      )}

      {/* ── FINAL CTA (homepage CTA, without the mascots) ─ */}
      <CTA
        showMascots={false}
        ctaPosition="footer"
        data={{
          heading: c.cta.heading,
          subheading: c.cta.description,
          cta: { text: c.cta.primary.text, link: c.cta.primary.href },
        }}
      />
    </div>
  );
}
