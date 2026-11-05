// components/sections/StatsSection.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/solutions/layout/Section';

interface StatsSectionProps {
  title?: string;
  eyebrow?: string;
  stats: Array<{ value: string; label: string }>;
  background?: 'paper' | 'ink';
}

export function StatsSection({ title, eyebrow, stats, background = 'ink' }: StatsSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Section bg={background} pattern="blob">
      {title && (
        <div className="text-center mb-12">
          {eyebrow && <span className="eyebrow text-brand">{eyebrow}</span>}
          <h2 className="display text-3xl md:text-5xl mt-2">{title}</h2>
        </div>
      )}

      <p className={`text-center text-sm mb-8 ${background === 'ink' ? 'text-white/70' : 'text-gray-500'}`}>
        Example outcomes for this type of work. These are not a live dashboard.
      </p>

      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center border-l border-current/10 first:border-l-0"
          >
            <div className="display text-4xl md:text-6xl text-brand">
              {stat.value}
            </div>
            <div className="eyebrow mt-2 opacity-70">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}