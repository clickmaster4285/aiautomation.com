'use client';

import { motion, Variants } from 'framer-motion';
import {
  Cpu,
  Megaphone,
  Briefcase,
  Home,
  ShoppingCart,
  Users,
} from 'lucide-react';
import type { Section } from '@/content/type';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

/* ── Icon resolver — order matches your items array ── */
const industryIcons = [Cpu, Megaphone, Briefcase, Home, ShoppingCart, Users];

/* ── Right-side animated pattern (same as TextSec) ─────────────────────── */
function RightPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 w-[55%] overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 95% 15%, color-mix(in srgb, var(--brand) 9%, transparent), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 88% 85%, color-mix(in srgb, var(--brand) 7%, transparent), transparent 65%)',
        }}
      />

      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ind-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="var(--brand)" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ind-dots)" />
      </svg>

      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`ring-a-${i}`}
          className="absolute rounded-full border"
          style={{
            borderColor: 'var(--brand)',
            opacity: 0.13 - i * 0.025,
            width: 160 + i * 70,
            height: 160 + i * 70,
            top: -50 + i * -28,
            right: -50 + i * -28,
          }}
          animate={{
            scale: [1, 1.07, 1],
            opacity: [0.13 - i * 0.025, 0.22 - i * 0.025, 0.13 - i * 0.025],
          }}
          transition={{ duration: 5 + i * 1.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
        />
      ))}

      {[0, 1, 2].map((i) => (
        <motion.div
          key={`ring-b-${i}`}
          className="absolute rounded-full border"
          style={{
            borderColor: 'var(--brand)',
            opacity: 0.1 - i * 0.02,
            width: 110 + i * 55,
            height: 110 + i * 55,
            bottom: -30 + i * -18,
            right: 80 + i * -12,
          }}
          animate={{
            scale: [1, 1.09, 1],
            opacity: [0.1 - i * 0.02, 0.18 - i * 0.02, 0.1 - i * 0.02],
          }}
          transition={{ duration: 6 + i * 1.1, repeat: Infinity, ease: 'easeInOut', delay: 1.2 + i * 0.9 }}
        />
      ))}

      {[
        { size: 26, top: '15%', right: '20%', rot: 20, dur: 8 },
        { size: 15, top: '38%', right: '9%', rot: -14, dur: 11 },
        { size: 20, top: '62%', right: '28%', rot: 32, dur: 9 },
        { size: 11, top: '78%', right: '12%', rot: -22, dur: 7 },
        { size: 17, top: '28%', right: '42%', rot: 8, dur: 10 },
        { size: 13, top: '52%', right: '50%', rot: -18, dur: 13 },
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
            background: 'color-mix(in srgb, var(--brand) 7%, transparent)',
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [s.rot, s.rot + 9, s.rot],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.65 }}
        />
      ))}

      {[15, 30, 47, 63, 79].map((pct, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute top-0 bottom-0"
          style={{
            left: `${pct}%`,
            width: 1,
            background: `linear-gradient(to bottom,
              transparent,
              color-mix(in srgb, var(--brand) 20%, transparent) 35%,
              color-mix(in srgb, var(--brand) 20%, transparent) 65%,
              transparent)`,
          }}
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.45 }}
        />
      ))}

      <motion.div
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          background: 'var(--brand)',
          top: '12%',
          right: '16%',
          boxShadow: '0 0 12px 4px color-mix(in srgb, var(--brand) 55%, transparent)',
        }}
        animate={{
          x: [0, 36, 0, -36, 0],
          y: [0, 28, 56, 28, 0],
          opacity: [0.7, 1, 0.7, 1, 0.7],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: 4,
          height: 4,
          background: 'var(--brand)',
          bottom: '22%',
          right: '35%',
          boxShadow: '0 0 8px 3px color-mix(in srgb, var(--brand) 45%, transparent)',
        }}
        animate={{
          x: [0, -24, 0, 24, 0],
          y: [0, 18, 36, 18, 0],
          opacity: [0.5, 0.9, 0.5, 0.9, 0.5],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div
        className="absolute inset-y-0 left-0 w-40"
        style={{ background: 'linear-gradient(to right, #f8f9fa, transparent)' }}
      />
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function IndustriesSec({ section }: { section: Section }) {
  const items = section.items || [];

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #eef1f4 100%)',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      {/* Cross-hatch texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <RightPattern />

      <div className="relative mx-auto max-w-[84vw] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start"
        >
          {/* ── LEFT COLUMN ── */}
          <motion.div variants={fadeUp} className="lg:sticky lg:top-32">
            <div
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
                style={{ color: 'rgba(0,0,0,0.4)', maxWidth: '300px' }}
              >
                {section.subheading}
              </p>
            )}
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item: any, idx: number) => {
              const Icon = industryIcons[idx % industryIcons.length];
              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  className="group relative p-5 rounded-xl transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: '0 8px 30px rgba(249,115,22,0.12)' }}
                  />
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-brand/40 transition-colors duration-300" />

                  <div className="relative z-10 flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'rgba(249,115,22,0.06)',
                        color: 'var(--brand)',
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-sm font-sans"
                        style={{ color: '#111' }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-xs leading-relaxed mt-0.5 text-justify font-sans"
                        style={{ color: 'rgba(0,0,0,0.5)' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}