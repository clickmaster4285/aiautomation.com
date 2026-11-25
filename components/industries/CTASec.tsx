'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from './Shared/animation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { playfair } from '@/lib/fonts';
import type { Section } from '@/content/type';

export default function CTASec({ section, bg = 'bg-black' }: { section: Section; bg?: string }) {
  const isBlack = bg === 'bg-black';

  return (
    <>
      <section className={`relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden ${bg} text-center`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(249,115,22,0.08),transparent)]" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-brand/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="mx-auto max-w-[84vw] px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="brand-badge inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-brand backdrop-blur-sm mb-4 sm:mb-6">
              <span>Get Started</span>
            </motion.div>

            {section.heading && (
              <motion.h2
                variants={scaleUp}
                className={`tracking-tight leading-tight mb-4 sm:mb-6 ${isBlack ? 'text-white' : 'text-gray-900'}`}
                style={{
                  fontFamily: `${playfair.style.fontFamily}, Georgia, serif`,
                  fontWeight: 900,
                  fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                }}
              >
                {section.heading}
              </motion.h2>
            )}

            {section.subheading && (
              <motion.p
                variants={fadeInUp}
                className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed font-sans ${isBlack ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {section.subheading}
              </motion.p>
            )}

            {section.cta && (
              <motion.div variants={scaleUp}>
                <motion.div
                  whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(249,115,22,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block relative group"
                >
                  <div className="absolute inset-0 bg-brand/30 blur-xl rounded-full group-hover:blur-2xl transition-all" />
                  <Button
                    size="lg"
                    className="relative bg-brand hover:bg-brand-dark text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg rounded-full font-semibold shadow-lg shadow-brand/25 font-sans"
                  >
                    {section.cta.text}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}