'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import type { Section } from '@/content/type';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

interface Props {
  section: Section;
  variant?: 'dark' | 'light';
}

/* ─── Animated right-side decorative background ─────────────────────────── */
function RightPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 w-[50%] overflow-hidden"
    >
      {/* Soft radial wash anchored top-right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 90% 20%, color-mix(in oklch, var(--brand) 10%, transparent), transparent 70%)',
        }}
      />

      {/* Dot grid SVG pattern tile */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="faq-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="var(--brand)" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faq-dots)" />
      </svg>

      {/* Pulsing concentric rings large, top-right */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`ring-a-${i}`}
          className="absolute rounded-full border"
          style={{
            borderColor: 'var(--brand)',
            opacity: 0.12 - i * 0.02,
            width:  180 + i * 80,
            height: 180 + i * 80,
            top:   -60 + i * -30,
            right: -60 + i * -30,
          }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.12 - i * 0.02, 0.2 - i * 0.02, 0.12 - i * 0.02] }}
          transition={{ duration: 5 + i * 1.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        />
      ))}

      {/* Pulsing concentric rings smaller, bottom-right */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`ring-b-${i}`}
          className="absolute rounded-full border"
          style={{
            borderColor: 'var(--brand)',
            opacity: 0.1 - i * 0.025,
            width:  120 + i * 60,
            height: 120 + i * 60,
            bottom: -40 + i * -20,
            right:  100 + i * -10,
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.1 - i * 0.025, 0.18 - i * 0.025, 0.1 - i * 0.025] }}
          transition={{ duration: 6 + i * 1.2, repeat: Infinity, ease: 'easeInOut', delay: 1 + i * 0.8 }}
        />
      ))}

      {/* Floating brand-tinted squares scattered */}
      {[
        { size: 28, top: '18%', right: '22%', rot: 18, dur: 8 },
        { size: 16, top: '42%', right: '10%', rot: -12, dur: 11 },
        { size: 22, top: '65%', right: '30%', rot: 30, dur: 9 },
        { size: 12, top: '80%', right: '14%', rot: -25, dur: 7 },
        { size: 18, top: '30%', right: '44%', rot: 10, dur: 10 },
      ].map((s, i) => (
        <motion.div
          key={`sq-${i}`}
          className="absolute rounded-sm border"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            right: s.right,
            rotate: s.rot,
            borderColor: 'var(--brand)',
            background: 'color-mix(in oklch, var(--brand) 8%, transparent)',
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [s.rot, s.rot + 8, s.rot],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
        />
      ))}

      {/* Vertical brand lines thin, spaced */}
      {[18, 34, 52, 68, 84].map((pct, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute top-0 bottom-0"
          style={{
            left: `${pct}%`,
            width: 1,
            background: `linear-gradient(to bottom, transparent, color-mix(in oklch, var(--brand) 22%, transparent) 40%, color-mix(in oklch, var(--brand) 22%, transparent) 60%, transparent)`,
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4 + i * 0.9, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        />
      ))}

      {/* Orbiting dot around the top-right ring cluster */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 7,
          height: 7,
          background: 'var(--brand)',
          top: '8%',
          right: '18%',
          boxShadow: '0 0 10px 3px color-mix(in oklch, var(--brand) 50%, transparent)',
        }}
        animate={{
          x: [0, 40, 0, -40, 0],
          y: [0, 30, 60, 30, 0],
          opacity: [0.7, 1, 0.7, 1, 0.7],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Edge fade blends pattern into the left/content side */}
      <div
        className="absolute inset-y-0 left-0 w-32"
        style={{
          background: 'linear-gradient(to right, var(--background), transparent)',
        }}
      />
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function FaqSec({ section, variant = 'light' }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = section.items || [];

  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-border overflow-hidden">

      {/* Animated right-side patterns */}
      <RightPattern />

      {/* Content */}
      <div className="relative mx-auto max-w-[84vw] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="eyebrow text-brand flex items-center gap-2 mb-4"
          >
            <span className="w-7 h-0.5 rounded-full bg-brand inline-block" />
            FAQ
          </motion.p>

          {/* Title. Last word stays italic so each industry can use its own heading. */}
          <motion.h2
            variants={fadeUp}
            className="display text-foreground mb-3"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.25rem)' }}
          >
            {(() => {
              const words = (section.heading || 'Frequently asked questions').trim().split(/\s+/);
              const tail = words.length > 1 ? words.pop() : '';
              const head = words.join(' ');
              return (
                <>
                  {head}
                  {tail && (
                    <>
                      <br />
                      <em className="display-italic text-brand">{tail}</em>
                    </>
                  )}
                </>
              );
            })()}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground font-sans mb-12"
            style={{ fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '480px' }}
          >
            Everything you need to know before getting started. Can't find what
            you're looking for? We're here to help.
          </motion.p>

          {/* Divider */}
          <motion.div variants={fadeUp} className="border-t border-border" />

          {/* Accordion */}
          <motion.div variants={stagger}>
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="border-b border-border"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-semibold font-sans transition-colors duration-200 leading-snug text-[0.9375rem] ${
                        isOpen ? 'text-brand' : 'text-foreground'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className="flex-shrink-0 mt-0.5 w-[22px] h-[22px] flex items-center justify-center rounded-full border transition-all duration-[280ms]"
                      style={{
                        borderColor: isOpen ? 'var(--brand)' : 'var(--border)',
                        background: isOpen ? 'color-mix(in oklch, var(--brand) 12%, transparent)' : 'transparent',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        color: isOpen ? 'var(--brand)' : 'var(--muted-foreground)',
                      }}
                    >
                      {isOpen ? <X className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          className="pb-5 font-sans text-muted-foreground"
                          style={{ fontSize: '0.9375rem', lineHeight: 1.75 }}
                        >
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex items-center justify-between gap-4 rounded-[var(--radius)] px-6 py-5"
            style={{
              background: 'color-mix(in oklch, var(--brand) 6%, transparent)',
              border: '1px solid color-mix(in oklch, var(--brand) 20%, transparent)',
            }}
          >
            <p className="text-sm text-muted-foreground font-sans">
              <strong className="text-foreground font-semibold">Still have questions?</strong>{' '}
              Our support team usually replies within a few hours.
            </p>
            <button
              className="text-[0.8125rem] font-semibold text-brand border rounded-full px-4 py-1.5 whitespace-nowrap transition-colors hover:bg-[color-mix(in_oklch,var(--brand)_10%,transparent)]"
              style={{ borderColor: 'color-mix(in oklch, var(--brand) 35%, transparent)' }}
            >
              Get in touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}