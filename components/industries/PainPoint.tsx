'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp, blowOut } from './Shared/animation';
import { AlertTriangle, TrendingUp } from 'lucide-react';
import type { Section } from '@/content/type';

/* ─── Top horizontal tech pattern ─────────────────────────────────────────
   Sits above the cards: a full-width strip with circuit-trace lines,
   binary fragments, and pulsing node dots all using var(--brand).
──────────────────────────────────────────────────────────────────────────── */
function TopTechPattern({ isBlack }: { isBlack: boolean }) {
  const nodes = [
    { cx: '8%',  cy: 28, r: 4,  dur: 3.2, delay: 0    },
    { cx: '22%', cy: 14, r: 3,  dur: 4.1, delay: 0.5  },
    { cx: '35%', cy: 38, r: 5,  dur: 2.8, delay: 1.0  },
    { cx: '50%', cy: 18, r: 3,  dur: 3.7, delay: 0.3  },
    { cx: '63%', cy: 44, r: 4,  dur: 4.5, delay: 0.8  },
    { cx: '78%', cy: 12, r: 3,  dur: 3.0, delay: 1.4  },
    { cx: '91%', cy: 32, r: 5,  dur: 3.9, delay: 0.2  },
  ];

  const binarySnippets = [
    { text: '01101',  left: '4%',  top: 8,  dur: 5 },
    { text: '10110',  left: '17%', top: 36, dur: 6 },
    { text: '11001',  left: '41%', top: 6,  dur: 4.5 },
    { text: '00111',  left: '57%', top: 38, dur: 5.5 },
    { text: '10101',  left: '73%', top: 14, dur: 4.2 },
    { text: '01010',  left: '86%', top: 40, dur: 5.8 },
  ];

  return (
    <div className="relative w-full mb-10" style={{ height: 64 }}>
      {/* SVG: horizontal circuit traces + nodes */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal backbone line */}
        <line
          x1="0" y1="32" x2="1000" y2="32"
          stroke="var(--brand)" strokeWidth="0.8" strokeOpacity="0.2"
          strokeDasharray="6 4"
        />

        {/* Circuit jogs vertical stubs branching up/down from backbone */}
        {[80, 220, 350, 500, 630, 780, 910].map((x, i) => (
          <g key={i}>
            <line
              x1={x} y1="32" x2={x} y2={i % 2 === 0 ? 10 : 54}
              stroke="var(--brand)" strokeWidth="0.8" strokeOpacity="0.25"
            />
            {/* 90° corner cap */}
            <line
              x1={x} y1={i % 2 === 0 ? 10 : 54}
              x2={x + 28} y2={i % 2 === 0 ? 10 : 54}
              stroke="var(--brand)" strokeWidth="0.8" strokeOpacity="0.18"
            />
          </g>
        ))}

        {/* Secondary faint trace offset */}
        <line
          x1="0" y1="52" x2="1000" y2="52"
          stroke="var(--brand)" strokeWidth="0.5" strokeOpacity="0.08"
          strokeDasharray="3 8"
        />
        <line
          x1="0" y1="12" x2="1000" y2="12"
          stroke="var(--brand)" strokeWidth="0.5" strokeOpacity="0.08"
          strokeDasharray="3 8"
        />

        {/* Static node circles on the backbone */}
        {[80, 220, 350, 500, 630, 780, 910].map((x, i) => (
          <circle key={i} cx={x} cy="32" r="2.5"
            fill="var(--brand)" fillOpacity="0.3" />
        ))}
      </svg>

      {/* Pulsing animated node dots */}
      {nodes.map((n, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: n.cx,
            top: n.cy,
            width: n.r * 2,
            height: n.r * 2,
            marginLeft: -n.r,
            marginTop: -n.r,
            background: 'var(--brand)',
            boxShadow: '0 0 8px 2px color-mix(in srgb, var(--brand) 50%, transparent)',
          }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: n.dur, repeat: Infinity, ease: 'easeInOut', delay: n.delay }}
        />
      ))}

      {/* Binary snippets faint, monospaced */}
      {binarySnippets.map((b, i) => (
        <motion.span
          key={i}
          className="absolute font-mono select-none"
          style={{
            left: b.left,
            top: b.top,
            fontSize: 9,
            color: 'var(--brand)',
            opacity: 0.22,
            letterSpacing: '0.12em',
          }}
          animate={{ opacity: [0.15, 0.38, 0.15] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        >
          {b.text}
        </motion.span>
      ))}

      {/* Travelling signal pulse along the backbone */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: 28,
          width: 6,
          height: 6,
          background: 'var(--brand)',
          boxShadow: '0 0 10px 3px color-mix(in srgb, var(--brand) 60%, transparent)',
        }}
        animate={{ left: ['0%', '100%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
      />

      {/* Bottom fade into section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-6"
        style={{
          background: `linear-gradient(to bottom, transparent, ${isBlack ? 'black' : 'oklch(0.97 0.01 60)'})`,
        }}
      />
    </div>
  );
}

export default function PainPoint({ section, bg = 'bg-secondary' }: { section: Section; bg?: string }) {
  const content = Array.isArray(section.content) ? section.content : [section.content];
  const isBlack = bg === 'bg-ink';
  const painPoints = content.slice(0, -1);
  const solutionHint = content[content.length - 1];

  return (
    <>
      <section className={`relative overflow-hidden py-16 md:py-24 ${bg}`}>
        <motion.div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Heading block */}
            <motion.div variants={blowOut} className="mb-6">
              <p className="eyebrow mb-4 text-brand">The Problem</p>
              {section.heading && (
                <h2
                  className={`display max-w-3xl text-4xl leading-tight sm:text-5xl md:text-6xl ${isBlack ? 'text-white' : 'text-ink'}`}
                >
                  {section.heading}
                </h2>
              )}
            </motion.div>

            {/* ── Tech pattern strip above cards ── */}
            <TopTechPattern isBlack={isBlack} />

            {/* Cards grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-5">
                {painPoints.map((para, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleUp}
                    whileHover={{ x: 8, scale: 1.02, boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}
                    className={`flex gap-4 border p-5 transition-colors duration-300 md:p-6 ${
                      isBlack
                        ? 'bg-red-500/5 border-red-500/10 hover:border-red-500/20'
                        : 'bg-red-50 border-red-100 hover:border-red-200'
                    }`}
                  >
                    <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className={`text-sm leading-relaxed ${isBlack ? 'text-white/70' : 'text-ink/80'}`}>
                      {para}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={blowOut}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(80,80,80,0.15)' }}
                className={`flex flex-col justify-center border p-6 md:p-8 ${
                  isBlack
                    ? 'border-brand/30 bg-brand/10'
                    : 'border-brand/20 bg-brand/5'
                }`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-brand/30 bg-brand/10">
                  <TrendingUp className="h-6 w-6 text-brand" />
                </div>
                <h3 className={`display mb-3 text-xl ${isBlack ? 'text-white' : 'text-ink'}`}>
                  There&apos;s a better way.
                </h3>
                <p className={`text-sm leading-relaxed ${isBlack ? 'text-white/70' : 'text-ink/80'}`}>
                  {solutionHint || 'AI automation removes the manual layer while keeping humans firmly in control of the decisions that matter.'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}