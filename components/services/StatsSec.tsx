'use client';

import { motion, Variants } from 'framer-motion';
import { Section } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

interface StatsSectionProps {
  section: Section;
}

const AnimatedCounter = ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand">
      {prefix}{count}{suffix}
    </span>
  );
};

export default function StatsSec({ section }: StatsSectionProps) {
  const statsItems = section.items || [];
  const subheading = section.subheading || '';
  const closing = section.content
    ? (Array.isArray(section.content) ? section.content : [section.content])
    : [];

  // Display heading with a brand-highlighted keyword (matches GridSec style)
  const heading = section.heading || 'Measurable Results';
  const words = heading.split(' ');
  const highlightKeywords = ['Results', 'Outcomes', 'Numbers'];
  const highlightIndex =
    words.findIndex(w => highlightKeywords.some(kw => w.toLowerCase().includes(kw.toLowerCase()))) >= 0
      ? words.findIndex(w => highlightKeywords.some(kw => w.toLowerCase().includes(kw.toLowerCase())))
      : words.length - 1;

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 border-t border-gray-200 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(249,115,22,0.03),rgba(0,0,0,0))]" />

      <div className="mx-auto max-w-[92vw] sm:max-w-[84vw] px-4 sm:px-6">
        {/* ====== HEADER – plays on mount so the copy is always visible ====== */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-12 sm:mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="display mb-0 text-3xl sm:text-4xl md:text-5xl font-bold text-black text-left italic leading-tight"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariants}
                className={`inline-block mr-2 ${index === highlightIndex ? 'text-brand' : ''}`}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h2>

          {subheading && (
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed text-left"
            >
              {subheading}
            </motion.p>
          )}
        </motion.div>

        {/* ====== STAT CARDS ====== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {statsItems.map((item: any, idx: number) => {
            const rawValue = typeof item.value === 'string' ? item.value : String(item.value ?? '');
            // Exact string results (e.g. "30–40+ hours", "Up to 45%") render as static
            // text; purely numeric values keep the animated counter.
            const isExactString = /[a-zA-Z–—]/.test(rawValue);
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 sm:p-6 text-left transition-all duration-300 hover:border-brand/50 hover:bg-white hover:shadow-xl hover:shadow-brand/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mb-2">
                    {isExactString ? (
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-brand">
                        {item.prefix || ''}{rawValue}{item.suffix || ''}
                      </span>
                    ) : (
                      <AnimatedCounter
                        value={typeof item.value === 'number' ? item.value : parseInt(rawValue) || 0}
                        suffix={item.suffix || ''}
                        prefix={item.prefix || ''}
                      />
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-black group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ====== CLOSING PARAGRAPH ====== */}
        {closing.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mt-10 sm:mt-12 max-w-3xl"
          >
            {closing.map((paragraph, idx) => (
              <motion.p
                key={idx}
                variants={fadeInUp}
                className="text-base sm:text-lg text-gray-600 leading-relaxed text-left"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}