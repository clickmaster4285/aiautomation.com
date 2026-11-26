'use client';

import { motion } from 'framer-motion';
import { fadeInUp, heroFadeInUp, heroStaggerContainer, staggerContainer } from '@/components/services/Shared/animation';
import {
  BrainCircuit,
  Code,
  Shield,
  BookOpen,
  BarChart,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import ProductLeadForm from '@/components/products/ProductLeadForm';
import Script from 'next/script';
import { SERVICE_AREA, SITE_URL } from '@/lib/site-contact';
import { ORGANIZATION_ID } from '@/lib/organization';
import HeroBreadcrumb from '@/components/shared/HeroBreadcrumb';
import HeroCta from '@/components/shared/HeroCta';

export default function AboutPage() {
  return (
    <div className="bg-paper text-ink overflow-hidden">

      {/* ====== SCHEMA MARKUP ====== */}
      <Script
        id="aboutpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Clickmasters | AI Automation Agency',
            description: `Clickmasters builds production AI automation for businesses in ${SERVICE_AREA}.`,
            url: `${SITE_URL}/about`,
            mainEntity: { '@id': ORGANIZATION_ID },
          }),
        }}
      />
      <Script
        id="person-schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Amjad Khan',
            jobTitle: 'Founder & CEO',
            description: 'Founder of Clickmasters Digital Marketing Agency, specializing in AI automation and digital growth strategies.',
            worksFor: { '@id': ORGANIZATION_ID },
          }),
        }}
      />

      {/* ====== HERO – Light with audit form ====== */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-paper isolate py-12 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="relative mx-auto w-full max-w-[84vw] px-6">
          <HeroBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={heroStaggerContainer} className="max-w-3xl">
              <motion.div
                variants={fadeInUp}
                className="eyebrow mb-5 inline-flex items-center gap-2 border border-brand px-3 py-1 text-xs text-brand md:mb-7 md:text-sm"
              >
                <BrainCircuit className="h-3 w-3 md:h-4 md:w-4" aria-hidden="true" />
                <span>About Clickmasters</span>
              </motion.div>
              <motion.h1
                variants={heroFadeInUp}
                className="display mb-5 text-4xl leading-[1.05] sm:text-5xl md:mb-7 md:text-6xl lg:text-7xl"
              >
                We build AI automation{' '}
                <span className="display-italic text-brand">
                  you actually own.
                </span>
              </motion.h1>
              <motion.p
                variants={heroFadeInUp}
                className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
              >
                Clickmasters is an AI automation agency for businesses in the United States, the United Kingdom and Pakistan. We build production systems inside the tools you already use, document every workflow and hand it all over, so nothing is left as a prototype or locked to us.
              </motion.p>
              <motion.div variants={heroFadeInUp}>
                <HeroCta />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex lg:justify-end"
            >
              <ProductLeadForm product="AI automation (about page)" variant="hero" id="get-started" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== WHO WE ARE – Dark ====== */}
      <section className="relative border-t border-white/10 bg-ink py-16 text-white sm:py-20 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="eyebrow mb-4 text-brand">Who We Are</p>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Built because most automation projects never survive the real world.
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4 text-base leading-relaxed text-white/70 sm:text-lg">
              <p className="text-justify">
                We started Clickmasters because we saw too many businesses sold AI strategy and slide decks that never became working systems, and too many automation projects that broke the moment they met the real world.
              </p>
              <p className="border-l-2 border-brand pl-5 text-white/60">
                Amjad Khan founded Clickmasters after seeing too many AI projects fail in production. 
                He built the agency to deliver real, working automation that businesses can actually use and scale. 
                Today, Clickmasters helps companies automate processes across finance, sales, and operations with systems that survive the real world.
              </p>
              <p className="text-justify">
                We build the version that actually works and keeps working connected to your real tools, owned by you, and built to survive production.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== OUR APPROACH – Light ====== */}
      <section className="bg-paper py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="max-w-3xl mb-10 md:mb-14">
              <p className="eyebrow mb-4 text-brand">Our Approach</p>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl">How we think and work.</h2>
            </motion.div>
            <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <Code className="h-6 w-6 text-brand" />, title: "Build, don't just advise", desc: 'We ship working systems, not strategy decks. The value is in production, not PowerPoint.' },
                { icon: <Shield className="h-6 w-6 text-brand" />, title: 'Platform‑honest', desc: 'We recommend the right tool for your situation, even the cheaper one, even when it means less work for us.' },
                { icon: <BookOpen className="h-6 w-6 text-brand" />, title: 'You own it', desc: 'Transparent, documented systems with no black boxes and no lock‑in. Take it in‑house anytime.' },
                { icon: <BarChart className="h-6 w-6 text-brand" />, title: 'ROI‑first', desc: 'We automate what saves real hours and dollars, and we measure it.' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="group bg-paper p-6 transition-colors duration-300 hover:bg-ink hover:text-white sm:p-8"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center border border-brand/30 bg-brand/10 sm:h-12 sm:w-12">
                    {item.icon}
                  </div>
                  <h3 className="display mb-3 text-base sm:text-lg">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== FOUNDER / CEO – Dark (Horizontal Rectangle Image) ====== */}
      <section className="relative overflow-hidden border-t border-white/10 bg-ink py-16 text-white sm:py-20 md:py-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)' }} />

        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-4 items-start"
          >
            {/* ── LEFT ── */}
            <div>
              <motion.div variants={fadeInUp} className="eyebrow mb-5 inline-flex items-center gap-2 border border-brand/30 px-3 py-1 text-brand md:mb-6"
                style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)' }}>
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse flex-shrink-0" />
                <span className="text-[10px] md:text-[11px] font-black tracking-[0.16em] uppercase text-brand">
                  Founder & CEO
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="display mb-4 leading-tight md:mb-5"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.6rem)',
                  letterSpacing: '-0.03em',
                  color: 'var(--paper)',
                }}
              >
                Amjad Khan
              </motion.h2>

              <motion.p variants={fadeInUp} className="mb-3 text-sm leading-relaxed text-white/60 sm:mb-4 sm:text-base"
                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9375rem)' }}>
                Founder of <span className="text-white font-semibold">Clickmasters Digital Marketing Agency</span>, Amjad built the company on one belief: automation should be owned by the businesses it serves – not locked inside agency black boxes.
              </motion.p>
              <motion.p variants={fadeInUp} className="mb-3 text-sm leading-relaxed text-white/60 sm:mb-4 sm:text-base"
                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9375rem)' }}>
                With deep roots in digital marketing and AI-driven growth, he leads every engagement with a production-first mindset – shipping systems that survive the real world and deliver measurable ROI.
              </motion.p>
              <motion.p variants={fadeInUp} className="mb-6 text-sm leading-relaxed text-white/60 sm:mb-8 sm:text-base"
                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9375rem)' }}>
                Amjad personally oversees every project, ensuring that each automation is not just technically sound but also strategically aligned with your business goals. His hands‑on approach means you get a partner who understands both the code and the client journey – no hand‑off, no disconnect.
              </motion.p>

              <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
                <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                  Clickmasters serves businesses in the United States, the United Kingdom, and Pakistan.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}               className="flex flex-wrap gap-2">
                {['AI Automation', 'Digital Marketing', 'Growth Strategy', 'AI Agents'].map((tag) => (
                  <span key={tag}
                    className="eyebrow border px-2.5 py-1 text-[10px] md:px-3 md:py-1.5 md:text-[11px]"
                    style={{
                      background: 'color-mix(in oklch, var(--brand) 8%, transparent)',
                      border: '1px solid color-mix(in oklch, var(--brand) 20%, transparent)',
                      color: 'var(--brand)',
                    }}>
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT – Horizontal Rectangle Image ── */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 mt-6 md:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
                <div className="absolute -inset-3 blur-2xl opacity-50 sm:-inset-4"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)' }} />
                <div className="relative z-10 aspect-[4/3] w-full overflow-hidden border border-white/10"
                  style={{ background: 'linear-gradient(180deg, rgba(249,115,22,0.12), rgba(249,115,22,0.06))' }}
                >
                  <Image
                    src="/images/founder.jpg"
                    width={1200}
                    height={670}
                    alt="Amjad Khan Founder & CEO"
                    sizes="(min-width: 1024px) 600px, 100vw"
                    quality={60}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Badge row – responsive wrapping */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="flex items-center gap-1.5 border border-white/10 bg-ink px-2.5 py-1.5 sm:gap-2 sm:px-3 sm:py-2"
                >
                  <span className="text-[10px] sm:text-xs font-black text-white">Clickmasters</span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-brand">Digital</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  className="flex items-center gap-1 bg-brand px-2.5 py-1.5 sm:gap-1.5 sm:px-3 sm:py-2"
                >
                  <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
                  <span className="text-[8px] sm:text-[10px] font-black text-white tracking-wide">AI-First</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== WHY IT MATTERS – Dark ====== */}
      <section className="border-t border-white/10 bg-ink py-16 text-white sm:py-20 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <p className="eyebrow mb-4 text-brand">Why It Matters</p>
              <h2 className="display mb-4 text-3xl sm:text-4xl md:mb-6 md:text-5xl">
                Close the gaps between strategy and production
              </h2>
              <p className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-white/60 sm:px-0 sm:text-lg">
                Most failed AI initiatives die in the gap between a strategy and a system in production. We exist to close that gap to be the partner that actually builds, that tells you the truth about what is worth doing, and that hands you something you own and understand. That is the whole point of Clickmasters.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}