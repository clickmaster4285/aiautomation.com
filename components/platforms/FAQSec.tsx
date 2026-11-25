'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { Section } from '@/content/type';
import { RichText } from '@/components/solutions/sections/variants/RichText';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

interface Props { section: Section; variant?: 'dark' | 'light'; }

export default function FaqSec({ section, variant = 'light' }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = section.items || [];

  const isDark = variant === 'dark';
  const bg = isDark ? '#0a0a0a' : '#ffffff';
  const headingColor = isDark ? '#fff' : '#0a0a0a';
  const subColor = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(10,10,10,0.42)';
  const borderColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)';
  const sectionBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.1)';
  const questionColor = (open: boolean) =>
    open ? 'var(--brand)' : isDark ? 'rgba(255,255,255,0.85)' : '#111';
  const answerColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.55)';
  const chipBorderOpen = 'var(--brand)';
  const chipBgOpen = 'rgba(249,115,22,0.1)';
  const chipBorderClosed = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const chipColorClosed = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)';

  return (
    <section
      className="relative py-24 md:py-32"
      style={{ background: bg, borderTop: `1px solid ${sectionBorder}` }}
    >
      <div className="mx-auto max-w-[84vw] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-start"
        >
          <motion.div variants={fadeUp} className="lg:sticky lg:top-28">
            <div className="w-10 h-[3px] rounded-full mb-5 bg-brand" />
            <h2
              className="display font-black leading-tight mb-3"
              style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', color: headingColor }}
            >
              {section.heading || 'Frequently Asked Questions'}
            </h2>
            <p style={{ fontSize: '0.9375rem', color: subColor, lineHeight: 1.65 }} className="text-justify font-sans">
              Everything you need to know before getting started.
            </p>
          </motion.div>

          <motion.div variants={stagger}>
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  style={{ borderBottom: `1px solid ${borderColor}` }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className="font-semibold transition-colors duration-200 font-sans"
                      style={{ fontSize: '0.9375rem', color: questionColor(isOpen) }}
                    >
                      {item.title}
                    </span>
                    <span
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-200"
                      style={{
                        border: `1px solid ${isOpen ? chipBorderOpen : chipBorderClosed}`,
                        background: isOpen ? chipBgOpen : 'transparent',
                        color: isOpen ? 'var(--brand)' : chipColorClosed,
                      }}
                    >
                      {isOpen
                        ? <Minus className="h-3 w-3" />
                        : <Plus className="h-3 w-3" />
                      }
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          className="pb-5 text-justify font-sans"
                          style={{ fontSize: '0.9375rem', color: answerColor, lineHeight: 1.75 }}
                        >
                          <RichText text={item.description} />
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}