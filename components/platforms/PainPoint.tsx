'use client';

import { motion, Variants, useInView } from 'framer-motion';
import { CONTENT_ICONS } from '@/components/shared/content-icons';
import type { Section } from '@/content/type';
import { useRef } from 'react';
import { RichText } from '@/components/solutions/sections/variants/RichText';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const barVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function LucideIcon({ name }: { name: string }) {
  const Icon = CONTENT_ICONS[name];
  return Icon ? <Icon className="h-[18px] w-[18px]" style={{ color: 'var(--brand)' }} /> : null;
}

function gridCols(count: number) {
  if (count <= 2) return 'grid-cols-1 md:grid-cols-2';
  if (count === 3) return 'grid-cols-1 md:grid-cols-3';
  if (count === 4) return 'grid-cols-1 md:grid-cols-2';
  return 'grid-cols-1 md:grid-cols-3';
}

export default function PainPoint({ section }: { section: Section }) {
  const items = section.items || [];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const lastSpans = items.length === 5;

  return (
    <section className="relative py-24 md:py-32 border-t border-white/5 bg-black">
      <div className="mx-auto max-w-[84vw] px-6" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={headingVariants} className="mb-10">
            <motion.div
              variants={barVariants}
              className="w-9 h-[3px] rounded-full mb-4"
              style={{ background: 'var(--brand)' }}
            />
            {section.heading && (
              <h2 className="display text-white text-3xl md:text-4xl mb-2">
                {section.heading}
              </h2>
            )}
            {section.subheading && (
              <p className="text-white/40 text-[0.9375rem] leading-relaxed max-w-lg text-justify font-sans">
                {section.subheading}
              </p>
            )}
          </motion.div>

          <div className={`grid ${gridCols(items.length)} gap-4`}>
            {items.map((item, idx) => {
              const isLast = idx === items.length - 1;
              const spanClass = lastSpans && isLast ? 'md:col-start-2' : '';

              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`group relative rounded-2xl p-6 overflow-hidden cursor-default ${spanClass}`}
                  style={{
                    background: '#111',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to right, transparent, ${'var(--brand)'}, transparent)`,
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(249,115,22,0.25)' }}
                  />
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(249,115,22,0.09)',
                      border: '1px solid rgba(249,115,22,0.22)',
                    }}
                  >
                    {item.icon && <LucideIcon name={item.icon} />}
                  </div>
                  <h3 className="font-bold text-white text-[0.9375rem] mb-2 font-sans">{item.title}</h3>
                  <p className="text-white/38 text-sm leading-relaxed text-justify font-sans"><RichText text={item.description} /></p>
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 origin-left"
                    style={{ background: `linear-gradient(to right, ${'var(--brand)'}, transparent)` }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 0% 100%, rgba(249,115,22,0.1) 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}