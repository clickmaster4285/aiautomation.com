'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from './Shared/animation';
import type { Section } from '@/content/type';
import { playfair } from '@/lib/fonts';

export default function StepSec({ section, bg = 'bg-gray-50' }: { section: Section; bg?: string }) {
  const items = section.items || [];
  const isBlack = bg === 'bg-black';

  return (
    <>
      <section className={`relative py-24 md:py-32 overflow-hidden ${bg}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(249,115,22,0.05),transparent)]" />

        {/* ── Updated container ── */}
        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-brand" />
                <span className="text-brand text-sm font-semibold tracking-widest uppercase font-sans">How We Work</span>
              </div>
              {section.heading && (
                <h2
                  className={`tracking-tight leading-tight max-w-2xl ${isBlack ? 'text-white' : 'text-gray-900'}`}
                  style={{
                    fontFamily: `${playfair.style.fontFamily}, Georgia, serif`,
                    fontWeight: 900,
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  }}
                >
                  {section.heading}
                </h2>
              )}
              {section.subheading && (
                <p className={`mt-4 text-lg max-w-2xl leading-relaxed font-sans ${isBlack ? 'text-gray-400' : 'text-gray-500'}`}>
                  {section.subheading}
                </p>
              )}
            </motion.div>

            <div className="relative">
              <div className={`absolute left-6 top-0 bottom-0 w-px ${isBlack ? 'bg-gray-800' : 'bg-gray-200'} hidden lg:block`} />
              <div className="space-y-6">
                {items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleUp}
                    whileHover={{ x: 10, scale: 1.01, boxShadow: '0 20px 40px rgba(80,80,80,0.08)' }}
                    transition={{ duration: 0.2 }}
                    className={`relative flex gap-8 p-8 rounded-2xl border transition-all duration-300 ${
                      isBlack
                        ? 'bg-gray-900/50 border-gray-800 hover:border-[oklch(0.5_0.01_0)]/30'
                        : 'bg-white border-gray-100 hover:border-[oklch(0.5_0.01_0)]/30 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand/30 z-10 font-sans">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 font-sans ${isBlack ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed font-sans ${isBlack ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}