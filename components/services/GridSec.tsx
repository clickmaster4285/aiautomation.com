'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Section, SectionItem } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';
import { getIcon } from '../services/Shared/icons';

const INITIAL_LIMIT = 6;

export default function GridSec({ section }: { section: Section }) {
  const gridItems = section.items || [];
  const [showAll, setShowAll] = useState(false);
  // Comparison-table mode: when `columns` is defined the grid renders as a
  // proper table (Platform | Best For | Trade-Off style) instead of cards.
  const isTable = Array.isArray(section.columns) && section.columns.length > 0;

  const visibleItems = showAll ? gridItems : gridItems.slice(0, INITIAL_LIMIT);
  const hasMore = gridItems.length > INITIAL_LIMIT;

  const toggleShowAll = () => setShowAll(prev => !prev);

  const heading = section.heading || '';
  const words = heading.split(' ');

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const getHighlightIndex = () => {
    const commonKeywords = ['Services', 'Automations', 'Comparison', 'Examples', 'Automation'];
    for (let i = 0; i < words.length; i++) {
      if (commonKeywords.some(kw => words[i].toLowerCase().includes(kw.toLowerCase()))) {
        return i;
      }
    }
    return words.length - 1;
  };

  const highlightIndex = getHighlightIndex();

  return (
    <section className="py-20 sm:py-24 lg:py-32 border-t border-gray-200 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(249,115,22,0.02),rgba(0,0,0,0))]" />

      <div className="mx-auto max-w-[92vw] sm:max-w-[84vw] px-4 sm:px-6">
        {heading && (
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="display mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-left italic leading-tight"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariants}
                className={`inline-block mr-2 ${index === highlightIndex ? 'text-brand' : ''}`}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h2>
        )}

        {section.subheading && (
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="mb-8 sm:mb-12 text-left text-gray-600 max-w-2xl leading-relaxed text-justify text-sm sm:text-base"
          >
            {section.subheading}
          </motion.p>
        )}

        {isTable && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="bg-brand/10">
                  {section.columns!.map((col: string, idx: number) => (
                    <th
                      key={idx}
                      className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand"
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
                    variants={fadeInUp}
                    className="border-t border-gray-200 transition-colors hover:bg-brand/5"
                  >
                    <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-semibold text-black align-top">
                      {item.title}
                    </td>
                    {(item.columns || []).map((cell: string, cIdx: number) => (
                      <td
                        key={cIdx}
                        className="px-4 sm:px-6 py-4 text-sm text-gray-600 leading-relaxed align-top"
                      >
                        {cell}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {!isTable && (
        <motion.div
          key={showAll ? 'all' : 'limited'}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {visibleItems.map((item: SectionItem, idx: number) => {
            const Icon = getIcon(item.icon);

            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:border-brand/50 hover:bg-white hover:shadow-xl hover:shadow-brand/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  {Icon && (
                    <motion.div
                      className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand group-hover:bg-brand/20 transition-all"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                  )}
                  <h3 className="mb-2 text-lg font-semibold text-black group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors text-justify">
                    {item.description}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="mt-3 inline-flex items-center text-sm text-brand hover:underline group/link"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        )}

        {hasMore && !isTable && (
          <div className="mt-12 text-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-6 sm:px-8 py-3 rounded-full border-2 border-brand text-brand hover:bg-brand hover:text-white transition-all duration-300 font-medium"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronDown className="h-4 w-4 rotate-180 transition-transform" />
                </>
              ) : (
                <>
                  View More
                  <ChevronDown className="h-4 w-4 transition-transform" />
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}