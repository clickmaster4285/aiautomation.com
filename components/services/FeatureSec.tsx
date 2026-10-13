'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Section, SectionItem } from '@/content/type';
import { getIcon } from '../services/Shared/icons';
import { Marker, splitHeading } from '../landingPage/Shared';

export default function FeaturesSec({ section }: { section: Section }) {
  const featuresItems = section.items || [];
  const { head, tail } = splitHeading(section.heading || '');

  const eyebrowLabel = section.heading?.includes('Capabilities')
    ? 'Capabilities'
    : 'Features';

  return (
    <section id="features" className="bg-white text-black py-12 md:py-24">
      <div className="mx-auto max-w-[84vw] px-6">
      

        {/* Heading + subheading */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {section.heading && (
            <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
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
            <p className="text-sm md:text-base text-black/60 md:text-right md:self-end">
              {section.subheading}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuresItems.map((item: SectionItem, i: number) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.title || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-black/10 p-6 md:p-8 hover:border-brand transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="eyebrow text-brand tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {Icon && (
                    <Icon className="h-5 w-5 text-black/40 group-hover:text-brand transition-colors" />
                  )}
                </div>

                {item.title && (
                  <h3 className="display text-xl md:text-2xl mb-3 text-black">
                    {item.title}
                  </h3>
                )}

                {item.description && (
                  <p className="text-sm text-black/60 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.link && (
                  <Link
                    href={item.link}
                    className="mt-4 inline-flex items-center text-brand text-sm hover:underline font-medium group/link"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}