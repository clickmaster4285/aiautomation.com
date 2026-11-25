'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from './Shared/animation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Section } from '@/content/type';

export default function CTASec({ section, bg = 'bg-ink' }: { section: Section; bg?: string }) {
  const isBlack = bg === 'bg-ink';

  return (
    <>
      <section className={`relative overflow-hidden py-16 text-center sm:py-20 md:py-24 ${bg}`}>
        <div className="relative mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="eyebrow mb-4 inline-flex items-center gap-2 border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs text-brand sm:mb-6 sm:px-4 sm:py-2">
              <span>Get Started</span>
            </motion.div>

            {section.heading && (
              <motion.h2
                variants={scaleUp}
                className={`display mb-4 text-4xl leading-tight sm:mb-6 sm:text-5xl md:text-6xl ${isBlack ? 'text-white' : 'text-ink'}`}
              >
                {section.heading}
              </motion.h2>
            )}

            {section.subheading && (
              <motion.p
                variants={fadeInUp}
                className={`mb-6 text-sm leading-relaxed sm:mb-8 sm:text-base md:mb-10 md:text-lg ${isBlack ? 'text-white/60' : 'text-muted-foreground'}`}
              >
                {section.subheading}
              </motion.p>
            )}

            {section.cta && (
              <motion.div variants={scaleUp}>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="h-auto rounded-none bg-ink px-6 py-4 text-sm font-medium text-white shadow-none transition-colors hover:bg-brand sm:px-8 sm:py-5 sm:text-base md:px-10 md:text-lg"
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