'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './Shared/animation';
import { Star } from 'lucide-react';
import { playfair } from '@/lib/fonts';
import { CONTENT_ICONS } from '@/components/shared/content-icons';
import type { Section } from '@/content/type';

function PeekingRobot({ isBlack }: { isBlack: boolean }) {
  return (
    <div
      className="absolute z-0 pointer-events-none hidden lg:block"
      style={{ top: -210, right: 20 }}
    >
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.8 }}
      >
        <motion.div
          animate={{ rotate: [-2, 3, -2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.8 }}
        >
          <svg width="320" height="400" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Glow behind head */}
            <ellipse cx="60" cy="55" rx="48" ry="42" fill="var(--brand)" opacity="0.06" />

            {/* Antenna base */}
            <rect x="56" y="6" width="8" height="4" rx="2" fill="var(--brand)" opacity="0.5" />
            {/* Antenna rod */}
            <line x1="60" y1="2" x2="60" y2="16" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" />
            {/* Antenna tip: pulsing dot */}
            <motion.circle cx="60" cy="3" r="5.5" fill="var(--brand)"
              animate={{ r: [5.5, 7.5, 5.5], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Head */}
            <rect x="18" y="16" width="84" height="58" rx="14"
              fill={isBlack ? '#1a1a1a' : 'white'}
              stroke="var(--brand)" strokeWidth="2" />

            {/* Forehead tint strip */}
            <rect x="18" y="16" width="84" height="10" rx="14" fill="var(--brand)" opacity="0.07" />

            {/* Left eye panel */}
            <rect x="28" y="30" width="26" height="20" rx="5" fill="var(--brand)" opacity="0.10" />
            {/* Left eye pupil */}
            <motion.rect x="32" y="34" width="18" height="12" rx="3.5" fill="var(--brand)"
              animate={{ scaleY: [1, 0.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
              style={{ transformOrigin: '41px 40px' }}
            />
            {/* Left eye glint */}
            <circle cx="37" cy="37" r="2.5" fill="white" opacity="0.8" />

            {/* Right eye panel */}
            <rect x="66" y="30" width="26" height="20" rx="5" fill="var(--brand)" opacity="0.10" />
            {/* Right eye pupil */}
            <motion.rect x="70" y="34" width="18" height="12" rx="3.5" fill="var(--brand)"
              animate={{ scaleY: [1, 0.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              style={{ transformOrigin: '79px 40px' }}
            />
            {/* Right eye glint */}
            <circle cx="75" cy="37" r="2.5" fill="white" opacity="0.8" />

            {/* Left eyebrow raises when peeking */}
            <motion.line x1="29" y1="26" x2="50" y2="26"
              stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round"
              animate={{ y1: [26, 20, 26], y2: [26, 20, 26] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.8 }}
            />
            {/* Right eyebrow */}
            <motion.line x1="70" y1="26" x2="91" y2="26"
              stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round"
              animate={{ y1: [26, 20, 26], y2: [26, 20, 26] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.8 }}
            />

            {/* Nose dot */}
            <circle cx="60" cy="55" r="3" fill="var(--brand)" opacity="0.25" />

            {/* Cheek blush left */}
            <ellipse cx="24" cy="58" rx="6" ry="4" fill="var(--brand)" opacity="0.08" />
            {/* Cheek blush right */}
            <ellipse cx="96" cy="58" rx="6" ry="4" fill="var(--brand)" opacity="0.08" />

            {/* Mouth smile widens when peeking */}
            <motion.path
              fill="none"
              stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round"
              animate={{ d: ['M 38 62 Q 60 70 82 62', 'M 36 64 Q 60 74 84 64', 'M 38 62 Q 60 70 82 62'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.8 }}
            />

            {/* Neck */}
            <rect x="50" y="74" width="20" height="14" rx="4"
              fill={isBlack ? '#1a1a1a' : 'white'}
              stroke="var(--brand)" strokeWidth="1.8" />
            {/* Neck bolts */}
            <circle cx="54" cy="81" r="2" fill="var(--brand)" opacity="0.35" />
            <circle cx="66" cy="81" r="2" fill="var(--brand)" opacity="0.35" />

            {/* Shoulders / body top */}
            <rect x="8" y="86" width="104" height="20" rx="10"
              fill={isBlack ? '#1a1a1a' : 'white'}
              stroke="var(--brand)" strokeWidth="1.8" />
            {/* Body panel detail */}
            <rect x="30" y="90" width="60" height="12" rx="4" fill="var(--brand)" opacity="0.06" />

            {/* Shoulder status light left */}
            <motion.circle cx="18" cy="96" r="4" fill="var(--brand)"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Shoulder status light right */}
            <motion.circle cx="102" cy="96" r="4" fill="var(--brand)"
              animate={{ opacity: [0.9, 0.3, 0.9] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Speaker grill dots */}
            {[48, 55, 62, 69, 76].map((x) => (
              <circle key={x} cx={x} cy="96" r="1.5" fill="var(--brand)" opacity="0.25" />
            ))}
          </svg>
        </motion.div>
      </motion.div>

      {/* Soft brand glow – scaled up */}
      <div
        className="absolute -inset-6 rounded-full"
        style={{
          background: 'radial-gradient(circle, color-mix(in srgb, var(--brand) 12%, transparent) 0%, transparent 70%)',
          zIndex: -1,
        }}
      />
    </div>
  );
}

export default function GridSec({ section, bg = 'bg-white' }: { section: Section; bg?: string }) {
  const items = section.items || [];
  const isBlack = bg === 'bg-black';

  return (
    <>
      <section className={`relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden ${bg}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(249,115,22,0.05),transparent)]" />

        <div className="mx-auto max-w-[84vw] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Heading */}
            <motion.div variants={fadeInUp} className="mb-10 sm:mb-12 md:mb-16">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="h-px w-8 sm:w-12 bg-brand" />
                <span className="text-brand text-xs sm:text-sm font-semibold tracking-widest uppercase font-sans">
                  Overview
                </span>
              </div>
              {section.heading && (
                <h2
                  className={`tracking-tight leading-tight max-w-2xl ${isBlack ? 'text-white' : 'text-gray-900'}`}
                  style={{
                    fontFamily: `${playfair.style.fontFamily}, Georgia, serif`,
                    fontWeight: 900,
                    fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                  }}
                >
                  {section.heading}
                </h2>
              )}
              {section.subheading && (
                <p className={`mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl leading-relaxed font-sans ${isBlack ? 'text-gray-400' : 'text-gray-500'}`}>
                  {section.subheading}
                </p>
              )}
            </motion.div>

            {/* Card grid */}
            <div className="relative">
              <PeekingRobot isBlack={isBlack} />

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {items.map((item, idx) => {
                  const IconComponent = item.icon ? CONTENT_ICONS[item.icon] : Star;
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className={`group flex gap-4 sm:gap-5 p-5 sm:p-7 rounded-2xl border transition-all duration-300 ${
                        isBlack
                          ? 'bg-gray-900/60 border-gray-800 hover:border-[oklch(0.5_0.01_0)]/30 hover:bg-gray-900'
                          : 'bg-gray-50 border-gray-100 hover:border-[oklch(0.5_0.01_0)]/30 hover:bg-[oklch(0.5_0.01_0)]/5'
                      }`}
                    >
                      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[oklch(0.5_0.01_0)]/10 flex items-center justify-center mt-0.5 group-hover:bg-brand transition-colors duration-300">
                        {IconComponent && (
                          <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[oklch(0.5_0.01_0)] group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      <div>
                        <h3 className={`font-bold mb-1.5 sm:mb-2 font-sans text-sm sm:text-base ${isBlack ? 'text-white' : 'text-gray-900'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-xs sm:text-sm leading-relaxed font-sans ${isBlack ? 'text-gray-400' : 'text-gray-500'}`}>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}