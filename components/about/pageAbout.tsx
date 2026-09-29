'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/components/services/Shared/animation';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Code,
  Shield,
  BookOpen,
  BarChart,
  TrendingUp,
  Star,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ====== SCHEMA MARKUP ====== */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Clickmasters',
            url: 'https://clickmasters.io',
            logo: 'https://clickmasters.io/logo.png',
            description:
              'Clickmasters is a US AI automation agency that builds production AI agents and workflow automation businesses actually own.',
            address: { '@type': 'PostalAddress', addressCountry: 'US' },
            contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', email: 'hello@clickmasters.io' },
          }),
        }}
      />
      <Script
        id="aboutpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Clickmasters | AI Automation Agency',
            description: 'Clickmasters is a US AI automation agency that builds production AI agents and workflow automation businesses actually own.',
            url: 'https://clickmasters.io/about',
            mainEntity: { '@type': 'Organization', name: 'Clickmasters' },
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
            worksFor: { '@type': 'Organization', name: 'Clickmasters' },
          }),
        }}
      />

      {/* ====== HERO – Light with Image ====== */}
      <section className="relative min-h-[40vh] flex items-center py-8 sm:py-12 md:py-16 bg-gradient-to-br from-brand/5 via-white to-white">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="mx-auto max-w-[84vw] px-6 pt-4 pb-4 sm:pt-6 sm:pb-6 md:pt-8 md:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-brand backdrop-blur-sm mb-4 md:mb-6"
              >
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                <span>About Us</span>
                <span className="h-1 w-1 rounded-full bg-brand" />
                <span className="text-brand/70 animate-pulse">TRUSTED PARTNER</span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4 md:mb-6 text-gray-900"
              >
                Build AI automation{' '}
                <span className="display-italic text-brand">
                  you actually own.
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl text-justify"
              >
                Clickmasters is a US-based AI automation agency focused on production systems, not demonstrations automation our clients own, understand, and rely on.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3] h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
            >
              <div className="absolute inset-0 -m-4 sm:-m-6 md:-m-8 rounded-full bg-brand/20 blur-3xl" />
              <div className="absolute inset-0 -m-2 sm:-m-3 md:-m-4 rounded-full bg-brand/10 blur-xl" />
              <Image
                src="/images/about.png"
                alt="AI Automation Agency"
                width={433}
                height={577}
                className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_60px rgba(249,115,22,0.35)]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== WHO WE ARE – Dark ====== */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black border-t border-gray-800">
        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-brand text-sm font-medium tracking-widest uppercase mb-4">Who We Are</p>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Built because most automation projects never survive the real world.
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-gray-300 space-y-4 text-base sm:text-lg leading-relaxed">
              <p className="text-justify">
                We started Clickmasters because we saw too many businesses sold AI strategy and slide decks that never became working systems, and too many automation projects that broke the moment they met the real world.
              </p>
              <p className="text-gray-400 border-l-4 border-brand pl-4 text-justify">
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
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="max-w-3xl mb-10 md:mb-14">
              <p className="text-brand text-sm font-medium tracking-widest uppercase mb-4">Our Approach</p>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">How we think and work.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                  className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-gray-50/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-3 sm:mb-4">
                    {item.icon}
                  </div>
                  <h3 className="display text-base sm:text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== FOUNDER / CEO – Dark (Horizontal Rectangle Image) ====== */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black border-t border-gray-800 overflow-hidden">
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
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)' }}>
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse flex-shrink-0" />
                <span className="text-[10px] md:text-[11px] font-black tracking-[0.16em] uppercase text-brand">
                  Founder & CEO
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="display font-black leading-tight mb-4 md:mb-5"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.6rem)',
                  letterSpacing: '-0.03em',
                  color: '#fff',
                }}
              >
                Amjad Khan
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed mb-3 md:mb-4 text-justify text-sm sm:text-base"
                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9375rem)' }}>
                Founder of <span className="text-white font-semibold">Clickmasters Digital Marketing Agency</span>, Amjad built the company on one belief: automation should be owned by the businesses it serves – not locked inside agency black boxes.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed mb-3 md:mb-4 text-justify text-sm sm:text-base"
                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9375rem)' }}>
                With deep roots in digital marketing and AI-driven growth, he leads every engagement with a production-first mindset – shipping systems that survive the real world and deliver measurable ROI.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-justify text-sm sm:text-base"
                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9375rem)' }}>
                Amjad personally oversees every project, ensuring that each automation is not just technically sound but also strategically aligned with your business goals. His hands‑on approach means you get a partner who understands both the code and the client journey – no hand‑off, no disconnect.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
                {[
                  { value: '5+',   label: 'Years Building' },
                  { value: '80+',  label: 'Clients Served' },
                  { value: '120+', label: 'Projects Live' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 sm:gap-6 md:gap-8">
                    <div>
                      <div className="font-black leading-none text-white"
                        style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.03em' }}>
                        {stat.value}
                      </div>
                      <div className="text-[9px] md:text-[10px] font-bold tracking-[0.12em] uppercase text-gray-500 mt-1">
                        {stat.label}
                      </div>
                    </div>
                    {i < 2 && <div className="w-px h-6 md:h-8 bg-gray-800" />}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                {['AI Automation', 'Digital Marketing', 'Growth Strategy', 'AI Agents'].map((tag) => (
                  <span key={tag}
                    className="text-[10px] md:text-[11px] font-bold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full"
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
                <div className="absolute -inset-3 sm:-inset-4 rounded-2xl blur-2xl opacity-70"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)' }} />
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden z-10 border-2 border-brand/20 shadow-xl shadow-brand/10"
                  style={{ background: 'linear-gradient(180deg, rgba(249,115,22,0.12), rgba(249,115,22,0.06))' }}
                >
                  <img
                    src="/images/founder.png"
                    width={1376}
                    height={768}
                    alt="Amjad Khan Founder & CEO"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full flex items-center justify-center text-5xl font-black text-brand/30';
                        fallback.textContent = 'AK';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </div>

              {/* Badge row – responsive wrapping */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-1.5 sm:gap-2"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(249,115,22,0.1)' }}>
                    <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-black text-gray-900">120+</span>
                    <span className="text-[8px] sm:text-[9px] text-gray-400 ml-0.5 sm:ml-1">Projects</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-1.5 sm:gap-2"
                >
                  <span className="text-xs sm:text-sm font-black text-gray-900">4.9</span>
                  <div className="flex gap-px">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2 w-2 sm:h-2.5 sm:w-2.5 fill-brand text-brand" />
                    ))}
                  </div>
                  <span className="text-[8px] sm:text-[9px] text-gray-400">(80+)</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-black border border-brand/20 shadow-sm flex items-center gap-1.5 sm:gap-2"
                >
                  <span className="text-[10px] sm:text-xs font-black text-white">Clickmasters</span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-brand">Digital</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-brand shadow-sm flex items-center gap-1 sm:gap-1.5"
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
      <section className="py-16 sm:py-20 md:py-24 bg-black border-t border-gray-800 text-center">
        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <p className="text-brand text-sm font-medium tracking-widest uppercase mb-4">Why It Matters</p>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Close the gaps between strategy and production
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-justify px-2 sm:px-0">
                Most failed AI initiatives die in the gap between a strategy and a system in production. We exist to close that gap to be the partner that actually builds, that tells you the truth about what's worth doing, and that hands you something you own and understand. That's the whole point of Clickmasters.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}