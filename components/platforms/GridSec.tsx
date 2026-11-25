'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import { motion, Variants } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { Section } from '@/content/type';
import { RichText } from '@/components/solutions/sections/variants/RichText';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

function LucideIcon({ name, className, ...rest }: { name: string; className?: string } & React.SVGProps<SVGSVGElement>) {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon className={className} {...rest} /> : null;
}

export default function GridSec({ section }: { section: Section }) {
  const items = section.items || [];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#060606]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] pointer-events-none mix-blend-screen select-none opacity-80"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.11) 0%, transparent 65%)',
        }}
      />

      <div className="mx-auto max-w-[84vw] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-14 lg:gap-16 items-start"
        >
          <motion.div variants={fadeUp} className="lg:sticky lg:top-36 z-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-500 font-sans">
                {section.subheading || 'Expertise'}
              </span>
            </div>
            <h2 className="display font-semibold tracking-tight text-white text-3xl sm:text-4xl leading-[1.15]">
              {section.heading}
            </h2>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed max-w-[260px] text-justify font-sans">
              Real‑world resilience, not just happy‑path scripting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[260px]">
            {items.map((item, idx) => (
              <GridCard 
                key={idx} 
                item={item} 
                idx={idx} 
                spanClass="col-span-1"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GridCard({ item, idx, spanClass }: { item: any; idx: number; spanClass: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      custom={idx}
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl overflow-hidden p-8 transition-all duration-500 bg-[#0d0d0d] hover:bg-[#111111] hover:scale-[1.015] hover:shadow-2xl hover:shadow-black/60 ${spanClass}`}
      style={{ border: '1px solid rgba(255, 255, 255, 0.04)' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(249,115,22,0.05), transparent 80%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, rgba(249,115,22,0.25), transparent 80%)`,
          maskImage: 'linear-gradient(white, white)',
          WebkitMaskImage: 'linear-gradient(white, white)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'destination-out',
          padding: '1px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-start justify-between w-full mb-5">
            <div className="p-3 rounded-xl bg-white/[0.01] border border-white/[0.04] group-hover:border-brand/20 group-hover:bg-brand/[0.02] transition-all duration-500">
              {item.icon && (
                <LucideIcon
                  name={item.icon}
                  className="h-5 w-5 text-neutral-400 group-hover:text-brand transition-colors duration-500 group-hover:scale-105 transform"
                />
              )}
            </div>
            <span className="text-3xl font-black select-none font-mono tracking-tighter text-neutral-900 group-hover:text-brand/[0.08] transition-colors duration-500">
              {String(idx + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className="font-medium tracking-tight text-neutral-200 group-hover:text-white transition-colors duration-300 text-lg font-sans">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500 font-light text-justify font-sans">
            <RichText text={item.description} />
          </p>
        </div>
        <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-brand/0 group-hover:text-brand/100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 font-sans">
          <span>Explore Architecture</span>
          <Icons.ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
}