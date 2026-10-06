'use client';

import { motion, Variants, useInView } from 'framer-motion';
import type { Section } from '@/content/type';
import { useRef } from 'react';
import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

/* ─── Variants ──────────────────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const barVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const numVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.12 + 0.15,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12 + 0.25,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ─── Field row (Challenge / Solution / Result) ─────────────────────────── */

const fieldMeta = {
  challenge: {
    label: 'Challenge',
    Icon: AlertCircle,
    color: 'rgba(249,115,22,0.85)',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.22)',
  },
  solution: {
    label: 'Solution',
    Icon: Lightbulb,
    color: 'rgba(96,165,250,0.85)',
    bg: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.22)',
  },
  result: {
    label: 'Result',
    Icon: TrendingUp,
    color: 'rgba(34,197,94,0.85)',
    bg: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.22)',
  },
} as const;

function FieldRow({
  kind,
  text,
  index,
}: {
  kind: 'challenge' | 'solution' | 'result';
  text: string;
  index: number;
}) {
  const meta = fieldMeta[kind];
  const { Icon } = meta;
  return (
    <motion.div
      custom={index}
      variants={fieldVariants}
      className="flex items-start gap-3"
    >
      <div
        className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5"
        style={{
          background: meta.bg,
          border: `1px solid ${meta.border}`,
          color: meta.color,
        }}
      >
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div className="min-w-0">
        <div
          className="text-[10px] font-black tracking-[0.12em] uppercase mb-1 font-sans"
          style={{ color: meta.color }}
        >
          {meta.label}
        </div>
        <p className="text-white/55 text-[0.8125rem] leading-relaxed text-justify font-sans">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function CaseStudiesSec({ section }: { section: Section }) {
  const items = section.items || [];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section className="relative py-24 md:py-32 border-t border-white/5 bg-[#070707] overflow-hidden">
      {/* Ambient radial glow behind the grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 0%, rgba(249,115,22,0.06), transparent 70%)',
        }}
      />
      {/* Subtle dot grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cs-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.2" cy="1.2" r="1.2" fill="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cs-dots)" />
      </svg>

      <div className="relative mx-auto max-w-[84vw] px-6" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Heading block */}
          {section.heading && (
            <motion.div variants={headingVariants} className="mb-12">
              <motion.div
                variants={barVariants}
                className="w-9 h-[3px] rounded-full mb-4"
                style={{ background: 'var(--brand)' }}
              />
              <h2 className="display text-white text-3xl md:text-4xl">
                {section.heading}
              </h2>
              {section.subheading && (
                <p className="mt-2 text-white/40 text-[0.9375rem] leading-relaxed max-w-lg text-justify font-sans">
                  {section.subheading}
                </p>
              )}
            </motion.div>
          )}

          {/* Card grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {items.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-default flex flex-col"
                style={{
                  background: '#0e0e0e',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Huge faded number watermark */}
                <motion.span
                  custom={idx}
                  variants={numVariants}
                  className="absolute top-3 right-4 font-black select-none tabular-nums leading-none pointer-events-none font-mono transition-colors duration-300 group-hover:text-brand/20"
                  style={{
                    fontSize: '5rem',
                    color: 'rgba(249,115,22,0.06)',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </motion.span>

                {/* Small numbered badge */}
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center mb-5 text-[11px] font-black transition-transform duration-300 group-hover:scale-110 font-sans relative z-10"
                  style={{
                    background: 'rgba(249,115,22,0.1)',
                    border: '1px solid rgba(249,115,22,0.25)',
                    color: 'var(--brand)',
                  }}
                >
                  {idx + 1}
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-base mb-5 font-sans relative z-10">
                  {item.title}
                </h3>

                {/* Challenge / Solution / Result */}
                <div className="space-y-4 flex-1 relative z-10">
                  {item.challenge && (
                    <FieldRow kind="challenge" text={item.challenge} index={0} />
                  )}
                  {item.solution && (
                    <FieldRow kind="solution" text={item.solution} index={1} />
                  )}
                  {item.result && (
                    <FieldRow kind="result" text={item.result} index={2} />
                  )}
                </div>

                {/* Hover: bottom sweep bar */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background:
                      'linear-gradient(to right, var(--brand), transparent)',
                  }}
                />
                {/* Hover: bottom warm glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.07) 0%, transparent 70%)',
                  }}
                />
                {/* Hover: top highlight line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(to right, transparent, var(--brand), transparent)',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}