'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './Shared/animation';
import { Zap } from 'lucide-react';
import { playfair } from '@/lib/fonts';
import { CONTENT_ICONS } from '@/components/shared/content-icons';
import type { Section } from '@/content/type';

function RightSideDecor({ isBlack }: { isBlack: boolean }) {
  return (
    <div className="absolute top-0 right-0 pointer-events-none overflow-hidden" style={{ width: 600, height: '100%', minHeight: 600 }}>
      <svg width="600" height="100%" viewBox="0 0 600 800" preserveAspectRatio="xMaxYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* ── Large radial glow blobs ── */}
        <radialGradient id="blob1" cx="80%" cy="20%" r="55%">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob2" cx="90%" cy="65%" r="45%">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.13" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob3" cx="70%" cy="90%" r="40%">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="600" height="800" fill="url(#blob1)" />
        <rect x="0" y="0" width="600" height="800" fill="url(#blob2)" />
        <rect x="0" y="0" width="600" height="800" fill="url(#blob3)" />

        {/* ── Full-height vertical stripe lines ── */}
        {[520, 548, 570, 588, 600].map((x, i) => (
          <line key={x} x1={x} y1="0" x2={x} y2="800"
            stroke="var(--brand)" strokeWidth={i === 4 ? 2 : 0.8}
            opacity={[0.35, 0.22, 0.16, 0.10, 0.40][i]}
          />
        ))}

        {/* ── Horizontal tick marks on the right edge stripe ── */}
        {Array.from({ length: 28 }).map((_, i) => (
          <line key={i}
            x1={i % 4 === 0 ? 570 : 582} y1={30 + i * 27} x2={600} y2={30 + i * 27}
            stroke="var(--brand)" strokeWidth="0.8"
            opacity={i % 4 === 0 ? 0.45 : 0.22}
          />
        ))}

        {/* ── Dense dot grid full right panel ── */}
        {Array.from({ length: 22 }).map((_, row) =>
          Array.from({ length: 14 }).map((_, col) => {
            const x = 310 + col * 22;
            const y = 30 + row * 34;
            const distFromRight = (13 - col) / 13;
            const opacity = 0.12 + distFromRight * 0.42;
            return (
              <motion.circle
                key={`${row}-${col}`}
                cx={x} cy={y} r="1.8"
                fill="var(--brand)"
                opacity={opacity}
                animate={{ opacity: [opacity, opacity * 0.4, opacity] }}
                transition={{
                  duration: 3 + (row + col) % 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: (row * 0.12 + col * 0.18) % 2.5,
                }}
              />
            );
          })
        )}

        {/* ── Concentric arcs from top-right ── */}
        {[80, 150, 220, 300, 390, 480, 570].map((r, i) => (
          <circle key={r} cx="600" cy="0" r={r}
            fill="none"
            stroke="var(--brand)"
            strokeWidth={i < 2 ? 1.2 : 0.7}
            strokeDasharray={i % 2 === 0 ? '8 14' : '3 18'}
            opacity={0.32 - i * 0.033}
          />
        ))}

        {/* ── Concentric arcs from bottom-right ── */}
        {[100, 190, 280, 370].map((r, i) => (
          <circle key={`br-${r}`} cx="600" cy="800" r={r}
            fill="none"
            stroke="var(--brand)"
            strokeWidth="0.7"
            strokeDasharray="5 16"
            opacity={0.18 - i * 0.03}
          />
        ))}

        {/* ── Large rotating ring mid right ── */}
        <motion.circle cx="560" cy="400" r="120"
          fill="none" stroke="var(--brand)" strokeWidth="0.8"
          strokeDasharray="12 20"
          opacity="0.22"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '560px 400px' }}
        />
        <motion.circle cx="560" cy="400" r="90"
          fill="none" stroke="var(--brand)" strokeWidth="1"
          strokeDasharray="6 24"
          opacity="0.18"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '560px 400px' }}
        />

        {/* ── Floating geometric shapes ── */}

        {/* Top area large rotated square */}
        <motion.rect x="470" y="40" width="90" height="90" rx="10"
          fill="none" stroke="var(--brand)" strokeWidth="1.2" opacity="0.28"
          animate={{ rotate: [10, 28, 10], opacity: [0.28, 0.45, 0.28] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '515px 85px' }}
        />
        {/* Top area inner square */}
        <motion.rect x="490" y="60" width="50" height="50" rx="6"
          fill="var(--brand)" opacity="0.07"
          animate={{ rotate: [10, 28, 10], opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '515px 85px' }}
        />

        {/* Mid-top triangle */}
        <motion.polygon points="555,180 585,230 525,230"
          fill="none" stroke="var(--brand)" strokeWidth="1.2" opacity="0.30"
          animate={{ opacity: [0.30, 0.50, 0.30], rotate: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ transformOrigin: '555px 205px' }}
        />
        <motion.polygon points="555,192 575,222 535,222"
          fill="var(--brand)" opacity="0.08"
          animate={{ opacity: [0.08, 0.16, 0.08], rotate: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ transformOrigin: '555px 207px' }}
        />

        {/* Mid hexagon via polygon */}
        <motion.polygon points="530,340 558,325 586,340 586,370 558,385 530,370"
          fill="none" stroke="var(--brand)" strokeWidth="1.2" opacity="0.26"
          animate={{ rotate: [0, 30, 0], opacity: [0.26, 0.42, 0.26] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ transformOrigin: '558px 355px' }}
        />

        {/* Lower-mid diamond */}
        <motion.polygon points="548,520 580,552 548,584 516,552"
          fill="none" stroke="var(--brand)" strokeWidth="1.2" opacity="0.28"
          animate={{ rotate: [0, 45, 0], opacity: [0.28, 0.46, 0.28] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
          style={{ transformOrigin: '548px 552px' }}
        />
        <motion.polygon points="548,534 566,552 548,570 530,552"
          fill="var(--brand)" opacity="0.09"
          animate={{ rotate: [0, 45, 0], opacity: [0.09, 0.18, 0.09] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
          style={{ transformOrigin: '548px 552px' }}
        />

        {/* Bottom rotated square */}
        <motion.rect x="460" y="660" width="80" height="80" rx="8"
          fill="none" stroke="var(--brand)" strokeWidth="1.2" opacity="0.24"
          animate={{ rotate: [-8, 14, -8], opacity: [0.24, 0.40, 0.24] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ transformOrigin: '500px 700px' }}
        />

        {/* ── Pulsing circles scattered ── */}
        {([
          [540, 130, 22, 0],
          [490, 290, 16, 0.6],
          [570, 460, 28, 1.2],
          [510, 620, 18, 0.3],
          [555, 730, 24, 0.9],
        ] as [number, number, number, number][]).map(([cx, cy, r, delay], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={r}
            fill="none" stroke="var(--brand)" strokeWidth="1"
            opacity="0.25"
            animate={{ r: [r, r + 10, r], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay }}
          />
        ))}

        {/* ── Solid accent dots ── */}
        {([
          [530, 60, 5, 0.55],
          [575, 155, 4, 0.45],
          [510, 260, 6, 0.50],
          [560, 320, 3.5, 0.40],
          [535, 430, 5, 0.55],
          [580, 500, 4, 0.45],
          [515, 590, 6, 0.50],
          [550, 680, 4, 0.42],
          [520, 760, 5, 0.48],
        ] as [number, number, number, number][]).map(([cx, cy, r, op], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={r}
            fill="var(--brand)" opacity={op}
            animate={{ opacity: [op, op * 0.35, op], r: [r, r + 2, r] }}
            transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          />
        ))}

        {/* ── Cross / plus marks ── */}
        {([
          [500, 110, 8, 0.40],
          [575, 270, 7, 0.32],
          [520, 390, 9, 0.36],
          [560, 550, 7, 0.30],
          [495, 700, 8, 0.34],
        ] as [number, number, number, number][]).map(([cx, cy, s, op], i) => (
          <g key={i} opacity={op}>
            <line x1={cx - s} y1={cy} x2={cx + s} y2={cy} stroke="var(--brand)" strokeWidth="1.2" strokeLinecap="round" />
            <line x1={cx} y1={cy - s} x2={cx} y2={cy + s} stroke="var(--brand)" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        ))}

        {/* ── Diagonal slash lines decorative ── */}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i}
            x1={320 + i * 32} y1="0"
            x2={280 + i * 32} y2="80"
            stroke="var(--brand)" strokeWidth="0.6"
            opacity={0.10 + i * 0.012}
          />
        ))}

        {/* ── Corner bracket top right ── */}
        <line x1="600" y1="0" x2="600" y2="120" stroke="var(--brand)" strokeWidth="2" opacity="0.50" />
        <line x1="480" y1="0" x2="600" y2="0" stroke="var(--brand)" strokeWidth="2" opacity="0.50" />
        <line x1="600" y1="0" x2="600" y2="60" stroke="var(--brand)" strokeWidth="1" opacity="0.28" />
        <line x1="540" y1="0" x2="600" y2="0" stroke="var(--brand)" strokeWidth="1" opacity="0.28" />

        {/* ── Corner bracket bottom right ── */}
        <line x1="600" y1="680" x2="600" y2="800" stroke="var(--brand)" strokeWidth="2" opacity="0.40" />
        <line x1="480" y1="800" x2="600" y2="800" stroke="var(--brand)" strokeWidth="2" opacity="0.40" />

      </svg>
    </div>
  );
}

export default function FeatureSec({ section, bg = 'bg-gray-50' }: { section: Section; bg?: string }) {
  const items = section.items || [];
  const isBlack = bg === 'bg-black';

  return (
    <>
      <section className={`relative py-24 md:py-32 overflow-hidden ${bg}`}>

        {/* Original ambient gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(249,115,22,0.06),transparent)]" />

        {/* Full right-side decor */}
        <RightSideDecor isBlack={isBlack} />

        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-brand" />
                <span className="text-brand text-sm font-semibold tracking-widest uppercase font-sans">What We Do</span>
              </div>
              {section.heading && (
                <h2
                  className={`tracking-tight leading-tight max-w-2xl ${isBlack ? 'text-white' : 'text-gray-900'}`}
                  style={{
                    fontFamily: `${playfair.style.fontFamily}, Georgia, serif`,
                    fontWeight: 900,
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  }}
                >
                  {section.heading}
                </h2>
              )}
              {section.subheading && (
                <p className={`mt-4 text-lg max-w-2xl leading-relaxed font-sans ${isBlack ? 'text-gray-400' : 'text-gray-500'}`}>
                  {section.subheading}
                </p>
              )}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, idx) => {
                const IconComponent = item.icon ? CONTENT_ICONS[item.icon] : Zap;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(80,80,80,0.12)' }}
                    transition={{ duration: 0.3 }}
                    className={`group relative p-8 rounded-2xl border transition-all duration-300 cursor-default ${
                      isBlack
                        ? 'bg-gray-900 border-gray-800 hover:border-[oklch(0.5_0.01_0)]/40'
                        : 'bg-white border-gray-100 hover:border-[oklch(0.5_0.01_0)]/30 shadow-sm hover:shadow-lg'
                    }`}
                  >
                    <div className="mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[oklch(0.5_0.01_0)]/10 border border-[oklch(0.5_0.01_0)]/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                        {IconComponent && (
                          <IconComponent className="h-5 w-5 text-[oklch(0.5_0.01_0)] group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                    </div>
                    <h3 className={`text-lg font-bold mb-3 font-sans ${isBlack ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed font-sans ${isBlack ? 'text-gray-400' : 'text-gray-500'}`}>
                      {item.description}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[oklch(0.5_0.01_0)] to-[oklch(0.5_0.01_0)]/60 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}