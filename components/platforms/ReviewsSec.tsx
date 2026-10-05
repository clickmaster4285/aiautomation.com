'use client';

import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Section } from '@/content/type';
import { Quote, Star, BadgeCheck } from 'lucide-react';

/* ─── Variants ──────────────────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
      delay: i * 0.1,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ─── Right-side ambient pattern (matches TextSec / IndustriesSec) ─────── */

function AmbientPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 15% 10%, color-mix(in srgb, var(--brand) 7%, transparent), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 90% 90%, color-mix(in srgb, var(--brand) 6%, transparent), transparent 65%)',
        }}
      />

      {/* Dot grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="rv-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.2" cy="1.2" r="1.2" fill="var(--brand)" opacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rv-dots)" />
      </svg>

      {/* Slow-floating rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`rv-ring-${i}`}
          className="absolute rounded-full border"
          style={{
            borderColor: 'var(--brand)',
            opacity: 0.08 - i * 0.02,
            width: 220 + i * 110,
            height: 220 + i * 110,
            top: -80 + i * -40,
            left: -60 + i * -40,
          }}
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.08 - i * 0.02, 0.16 - i * 0.02, 0.08 - i * 0.02],
          }}
          transition={{
            duration: 7 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.9,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function ReviewsSec({ section }: { section: Section }) {
  const items = section.items || [];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #eef1f4 100%)',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      {/* Cross-hatch texture — same as TextSec / IndustriesSec */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <AmbientPattern />

      <div className="relative mx-auto max-w-[84vw] px-6" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Heading block — left aligned like other sections */}
          {section.heading && (
            <motion.div variants={headingVariants} className="mb-12 max-w-2xl">
              <motion.div
                variants={barVariants}
                className="w-10 h-1 rounded-full mb-5"
                style={{ background: 'var(--brand)' }}
              />
              <h2
                className="display"
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  color: '#111',
                  letterSpacing: '-0.02em',
                }}
              >
                {section.heading}
              </h2>
              {section.subheading && (
                <p
                  className="mt-3 text-sm font-medium text-justify font-sans"
                  style={{ color: 'rgba(0,0,0,0.4)' }}
                >
                  {section.subheading}
                </p>
              )}
            </motion.div>
          )}

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item: any, idx: number) => {
              const initials = (item.author || '?')
                .split(' ')
                .map((n: string) => n[0])
                .join('')
                .slice(0, 2)
                .toUpperCase();

              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-default flex flex-col overflow-hidden"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  }}
                >
                  {/* Hover: soft orange glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: '0 10px 40px rgba(249,115,22,0.14)' }}
                  />
                  {/* Hover: brand border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand/30 transition-colors duration-300 pointer-events-none" />

                  {/* Giant background quote watermark */}
                  <span
                    className="absolute -top-6 right-4 select-none pointer-events-none font-serif leading-none transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      fontSize: '7rem',
                      color: 'rgba(249,115,22,0.06)',
                    }}
                  >
                    &rdquo;
                  </span>

                  <div className="relative flex flex-col h-full z-10">
                    {/* Top row: quote chip + stars */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(249,115,22,0.08)',
                          color: 'var(--brand)',
                        }}
                      >
                        <Quote className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5"
                            fill="var(--brand)"
                            stroke="var(--brand)"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quote text */}
                    <p
                      className="leading-relaxed text-[0.9375rem] flex-1 mb-5 text-left font-sans"
                      style={{ color: 'rgba(0,0,0,0.72)' }}
                    >
                      {item.quote}
                    </p>

                    {/* Footer: avatar + name + verified */}
                    {item.author && (
                      <div
                        className="flex items-center gap-3 pt-4 mt-auto"
                        style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
                      >
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 font-sans"
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))',
                            color: 'var(--brand)',
                            border: '1px solid rgba(249,115,22,0.2)',
                          }}
                        >
                          {initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className="text-sm font-semibold font-sans truncate flex items-center gap-1.5"
                            style={{ color: '#111' }}
                          >
                            {item.author}
                            <BadgeCheck
                              className="h-3.5 w-3.5 flex-shrink-0"
                              style={{ color: 'var(--brand)' }}
                            />
                          </div>
                          <div
                            className="text-[11px] font-sans"
                            style={{ color: 'rgba(0,0,0,0.4)' }}
                          >
                            Verified Client
                          </div>
                        </div>
                      </div>
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
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}