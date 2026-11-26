'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from './Shared/animation';
import type { Section } from '@/content/type';

export default function StepSec({ section, bg = 'bg-secondary' }: { section: Section; bg?: string }) {
  const items = section.items || [];
  const isBlack = bg === 'bg-ink';

  return (
    <>
      <section className={`relative overflow-hidden py-16 md:py-24 ${bg}`}>

        {/* ── Updated container ── */}
        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-10 md:mb-14">
              <p className="eyebrow mb-4 text-brand">How We Work</p>
              {section.heading && (
                <h2
                  className={`display max-w-2xl text-4xl leading-tight sm:text-5xl md:text-6xl ${isBlack ? 'text-white' : 'text-ink'}`}
                >
                  {section.heading}
                </h2>
              )}
              {section.subheading && (
                <p className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${isBlack ? 'text-white/60' : 'text-muted-foreground'}`}>
                  {section.subheading}
                </p>
              )}
            </motion.div>

            <div className="relative">
              <div className={`divide-y border-y ${isBlack ? 'divide-white/10 border-white/10' : 'divide-border border-border'}`}>
                {items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleUp}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="group relative flex gap-6 py-6 md:gap-8 md:py-8"
                  >
                    <div className="eyebrow shrink-0 pt-1 text-brand tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className={`display mb-2 text-xl transition-colors group-hover:text-brand md:text-2xl ${isBlack ? 'text-white' : 'text-ink'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isBlack ? 'text-white/60' : 'text-muted-foreground'}`}>
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