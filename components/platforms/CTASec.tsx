'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit } from 'lucide-react';
import type { Section } from '@/content/type';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

interface CTASecProps {
  section: Section;
  compact?: boolean; // removes disclaimer and reduces inner padding
}

export default function CTASec({ section, compact = false }: CTASecProps) {
  const cta = section.cta;

  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 lg:py-32"
      style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="mx-auto max-w-[84vw] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className={`relative rounded-3xl overflow-hidden text-center transition-all duration-500 hover:shadow-2xl hover:shadow-brand/10 ${
            compact ? 'p-6 sm:p-8 md:p-12' : 'p-8 sm:p-10 md:p-12 lg:p-20'
          }`}
          style={{
            background: 'linear-gradient(135deg, #111 0%, #0e0e0e 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Background glows – responsive size */}
          <div
            className="absolute top-0 left-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 0% 0%, rgba(249,115,22,0.2) 0%, transparent 65%)',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 100% 100%, rgba(249,115,22,0.12) 0%, transparent 65%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative z-10">
            {/* Decorative brand line */}
            <motion.div
              variants={fadeUp}
              className="w-10 sm:w-12 h-0.5 bg-brand mx-auto mb-4 sm:mb-6 rounded-full"
            />

            {section.heading && (
              <motion.h2
                variants={fadeUp}
                className="display font-bold mb-3 sm:mb-4 text-white"
                style={{
                  fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                {section.heading}
              </motion.h2>
            )}

            {section.subheading && (
              <motion.p
                variants={fadeUp}
                className={`mx-auto text-justify font-sans ${
                  compact ? 'mb-4 sm:mb-6' : 'mb-6 sm:mb-8 md:mb-10'
                }`}
                style={{
                  maxWidth: '520px',
                  fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7,
                }}
              >
                {section.subheading}
              </motion.p>
            )}

            {cta && (
              <motion.div
                variants={fadeUp}
                className="block sm:inline-block" // 🔥 full width on mobile, inline on tablet+
              >
                <div className="relative group">
                  {/* Animated glow */}
                  <div
                    className="absolute inset-0 rounded-full blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:scale-110"
                    style={{
                      background: 'rgba(249,115,22,0.4)',
                      opacity: 0.6,
                    }}
                  />
                  <Button
                    size="lg"
                    className="relative rounded-full font-semibold text-white bg-brand hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/30 hover:shadow-brand/50 font-sans w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg"
                    style={{
                      boxShadow: '0 0 0 1px rgba(249,115,22,0.6), 0 4px 24px rgba(249,115,22,0.3)',
                      fontSize: 'clamp(0.9rem, 1.5vw, 1.0625rem)',
                      height: 'auto',
                      minHeight: '54px',
                      paddingInline: 'clamp(1.5rem, 4vw, 2.8rem)',
                    }}
                  >
                    {cta.text}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}