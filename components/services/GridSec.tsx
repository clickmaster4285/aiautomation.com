'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionItem } from '@/content/type';
import { Marker, Dot, splitHeading } from '../landingPage/Shared';

const INITIAL_LIMIT = 6;

// Same column-span rhythm as Services
const colSpans = [
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2',
];

export default function GridSec({ section }: { section: Section }) {
  const gridItems = section.items || [];
  const [showAll, setShowAll] = useState(false);

  const isTable =
    Array.isArray(section.columns) && section.columns.length > 0;

  const visibleItems = showAll ? gridItems : gridItems.slice(0, INITIAL_LIMIT);
  const hasMore = gridItems.length > INITIAL_LIMIT;

  const toggleShowAll = () => setShowAll(prev => !prev);

  const { head, tail } = splitHeading(section.heading || '', 1);

  return (
    <section id="grid" className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
     
        {/* Title */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          <h2 className="display text-4xl sm:text-5xl md:text-4xl lg:text-6xl text-ink">
            {head}
            {tail && (
              <>
                <br />
                <span className="display-italic text-brand">{tail}</span>
              </>
            )}
          </h2>

          {section.subheading && (
            <p className="text-base md:text-lg text-muted-foreground md:text-right md:self-end">
              {section.subheading}
            </p>
          )}
        </div>

        {/* TABLE MODE */}
        {isTable && (
          <div className="relative overflow-x-auto border border-border">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-border">
                  {section.columns!.map((col: string, idx: number) => (
                    <th
                      key={idx}
                      className="px-5 md:px-6 py-4 eyebrow text-muted-foreground text-xs md:text-sm"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {gridItems.map((item: SectionItem, idx: number) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className="border-b border-border last:border-b-0 group hover:bg-ink transition-colors duration-500"
                  >
                    <td className="px-5 md:px-6 py-5 display text-lg md:text-xl text-ink group-hover:text-white align-top">
                      {item.title}
                    </td>
                    {(item.columns || []).map((cell: string, cIdx: number) => (
                      <td
                        key={cIdx}
                        className="px-5 md:px-6 py-5 text-sm md:text-base text-muted-foreground group-hover:text-white/70 leading-relaxed align-top"
                      >
                        {cell}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* CARD GRID MODE */}
        {!isTable && (
          <div className="relative">

            {/* DOTS */}
            <Dot className="hidden md:block absolute -top-2 -right-2 z-10" />
            <Dot className="hidden md:block absolute top-[29%] left-[33%] z-10 -translate-x-1/2 -translate-y-1/2" />
            <Dot className="hidden md:block absolute -left-2 top-[55%] z-10" />
            <Dot className="hidden md:block absolute -bottom-2 -right-2 z-10" />

            {/* MOBILE */}
            <div className="block md:hidden bg-border border border-border rounded-xl overflow-hidden">
              {visibleItems.map((s: SectionItem, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-paper p-5 border-b border-border last:border-b-0 group hover:bg-ink transition-colors duration-500"
                >
                  <h3 className="display text-2xl mb-2 text-ink group-hover:text-white">
                    {s.title}
                  </h3>

                  <p className="text-sm text-muted-foreground group-hover:text-white/70">
                    {s.description}
                  </p>

                  <div className="mt-4 eyebrow text-muted-foreground group-hover:text-brand text-xs">
                    Learn more →
                  </div>
                </motion.div>
              ))}
            </div>

            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
              {visibleItems.map((s: SectionItem, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className={`bg-paper p-8 ${colSpans[i % colSpans.length] ?? 'md:col-span-1'} group hover:bg-ink transition-colors duration-500`}
                >
                  <h3 className="display text-2xl xl:text-3xl mb-3 text-ink group-hover:text-white">
                    {s.title}
                  </h3>

                  <p className="text-md text-muted-foreground group-hover:text-white/70">
                    {s.description}
                  </p>

                  <div className="mt-6 eyebrow text-muted-foreground group-hover:text-brand">
                    Learn more →
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Show More / Show Less */}
        {hasMore && !isTable && (
          <div className="mt-10 md:mt-12 text-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={toggleShowAll}
              className="eyebrow inline-flex items-center gap-2 w-full sm:w-auto justify-center px-6 sm:px-8 py-3 border border-border bg-paper hover:bg-ink hover:text-white transition-colors duration-500 text-xs md:text-sm"
            >
              {showAll ? 'Show Less' : 'View More'}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}