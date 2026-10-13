'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, SectionItem } from '@/content/type';
import { Marker, splitHeading } from '../landingPage/Shared';

export default function StepSec({ section }: { section: Section }) {
  const items = section.items || [];
  const { head, tail } = splitHeading(section.heading || '', 1);

  return (
    <section id="process" className="bg-ink text-white py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
       

        <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
          {/* Left column */}
          <div className="text-center md:text-left">
            {section.heading && (
              <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                {head}
                {tail && (
                  <>
                    <br />
                    <span className="display-italic text-brand">{tail}</span>
                  </>
                )}
              </h2>
            )}

            {section.subheading && (
              <p className="text-white/60 text-xs sm:text-sm mt-3 md:mt-4 max-w-md mx-auto md:mx-0">
                {section.subheading}
              </p>
            )}

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mt-6 md:mt-8"
            >
              <Image
                src="/images/process.png"
                alt="Process illustration"
                width={640}
                height={640}
                className="w-40 sm:w-56 md:w-72 lg:w-[28rem] h-auto mx-auto md:mx-0"
              />
            </motion.div>
          </div>

          {/* Right column: steps */}
          <div className="divide-y divide-white/10 border-t border-white/10">
            {items.map((item: SectionItem, i: number) => (
              <motion.div
                key={item.title || i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-wrap items-center justify-between gap-3 py-6 md:py-8 group"
              >
                <span className="eyebrow text-white/40 tabular-nums text-sm md:text-base">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex-1 text-center md:text-left px-3">
                  {item.title && (
                    <span className="display text-xl sm:text-2xl md:text-3xl group-hover:text-brand group-hover:translate-x-0 md:group-hover:translate-x-2 transition-all block">
                      {item.title}
                    </span>
                  )}
                  {item.description && (
                    <span className="text-white/50 text-xs md:text-sm leading-relaxed mt-1 block max-w-xl">
                      {item.description}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}