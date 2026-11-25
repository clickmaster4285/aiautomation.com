'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import * as Icons from 'lucide-react';
import type { Section } from '@/content/type';
import { RichText } from '@/components/solutions/sections/variants/RichText';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

function LucideIcon({
  name,
  className,
  ...rest
}: { name: string; className?: string } & React.SVGProps<SVGSVGElement>) {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon className={className} {...rest} /> : null;
}

export default function FeatureSec({ section }: { section: Section }) {
  const items = section.items || [];
  const heading = section.heading || '';
  const isWhySection = heading.toLowerCase().includes('why clickmasters');

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#060606]">
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-80" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] pointer-events-none mix-blend-screen select-none opacity-90"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 65%)',
        }}
      />

      <div className="mx-auto max-w-[84vw] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-14 lg:gap-16 items-start"
        >
          {/* ========== LEFT COLUMN ========== */}
          <motion.div variants={fadeUp} className="lg:sticky lg:top-36 z-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-500 font-sans">
                {isWhySection ? 'Why Us' : 'Services'}
              </span>
            </div>
            <h2 className="display font-semibold tracking-tight text-white text-3xl sm:text-4xl leading-[1.15]">
              {section.heading}
            </h2>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed max-w-[260px] text-justify font-sans">
              {isWhySection
                ? 'Expert automation services to scale your business structure cleanly.'
                : 'Real‑world resilience, engineered step-by-step instead of happy‑path scripts.'}
            </p>

            {/* ========== IMAGE BLOCK – below description ========== */}
            {section.image && (
              <motion.div
                // Fade-up reveal
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="mt-8 relative w-full max-w-[250px] aspect-square"
              >
                {/* Background glow effect */}
                <div className="absolute -inset-4 rounded-full bg-brand/10 blur-3xl animate-pulse" />
                <div className="absolute -inset-8 rounded-full bg-brand/5 blur-2xl" />

                {/* Floating image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'easeInOut',
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={
                      typeof section.image === 'string'
                        ? section.image
                        : section.image.src
                    }
                    alt={
                      typeof section.image === 'string'
                        ? section.heading || 'Feature image'
                        : section.image.alt || section.heading || 'Feature image'
                    }
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          {/* ========== RIGHT COLUMN – cards ========== */}
          <div className={`grid grid-cols-1 md:grid-cols-2 ${isWhySection ? 'gap-6' : 'lg:grid-cols-3 gap-5'} auto-rows-min`}>
            {items.map((item, idx) => (
              <InteractiveCard
                key={idx}
                item={item}
                idx={idx}
                isWhySection={isWhySection}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── InteractiveCard (unchanged) ──────────────────────────────
function InteractiveCard({ item, idx, isWhySection }: { item: any; idx: number; isWhySection: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      custom={idx}
      variants={fadeUp}
      whileHover={{ 
        scale: 1.03, 
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
      }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl overflow-hidden p-8 transition-shadow duration-500 bg-[#0c0c0c] hover:shadow-2xl hover:shadow-black/80 flex flex-col justify-between min-h-[250px]"
      style={{ border: '1px solid rgba(255, 255, 255, 0.04)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(249,115,22,0.3) 0%, rgba(249,115,22,0.05) 40%, transparent 80%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(249,115,22,0.12) 0%, transparent 60%)`,
          transform: 'scale(1.3)',
          transformOrigin: `${coords.x}px ${coords.y}px`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        <div>
          <div className="flex items-start justify-between w-full mb-2">
            <div className="p-3 rounded-xl bg-white/[0.01] border border-white/[0.04] group-hover:border-brand/20 group-hover:bg-brand/[0.02] transition-all duration-500">
              {item.icon && (
                <LucideIcon
                  name={item.icon}
                  className="h-5.5 w-5.5 text-neutral-400 group-hover:text-brand transition-colors duration-500 group-hover:scale-105 transform"
                />
              )}
            </div>
            {!isWhySection && (
              <span className="text-3xl font-black select-none font-mono tracking-tighter text-neutral-900 group-hover:text-brand/[0.07] transition-colors duration-500">
                {String(idx + 1).padStart(2, '0')}
              </span>
            )}
          </div>
          <h3 className="font-medium tracking-tight text-neutral-200 group-hover:text-white transition-colors duration-300 text-lg font-sans mt-4">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500 font-light text-justify font-sans">
            <RichText text={item.description} />
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-brand/0 group-hover:text-brand/100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 font-sans">
          <span>{isWhySection ? 'Learn More' : 'Explore System Blueprint'}</span>
          <Icons.ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
}