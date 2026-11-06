'use client';

import { motion } from 'framer-motion';
import { Section } from '@/content/type';
import { Marker, splitHeading } from '../landingPage/Shared';
import { metricDisplay } from '@/lib/visible-metric';

interface StatsSectionProps {
  section: Section;
}

export default function StatsSec({ section }: StatsSectionProps) {
  const statsItems = (section.items || []).filter((item) => {
    const rawValue = typeof item.value === 'string' ? item.value : String(item.value ?? '');
    if (!rawValue.trim()) return false;
    if (/[a-zA-Z]/.test(rawValue)) return true;
    return metricDisplay(rawValue) !== null;
  });
  if (statsItems.length === 0) return null;
  const subheading = section.subheading || '';
  const closing = section.content
    ? Array.isArray(section.content)
      ? section.content
      : [section.content]
    : [];

  const { head, tail } = splitHeading(section.heading || 'Numbers that matter.', 2);

  return (
    <section className="bg-paper py-12 md:py-24 relative">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">

      
      

        {/* Title */}
        <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center md:text-left text-foreground">
          {head}
          {tail && (
            <>
              <br />
              <span className="text-foreground">{tail}</span>
            </>
          )}
        </h2>

        {/* Optional subheading */}
        {subheading && (
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 max-w-2xl text-center md:text-left mx-auto md:mx-0">
            {subheading}
          </p>
        )}

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border-t border-border pt-6 md:pt-12 md:divide-x divide-border">
          {statsItems.map((item: any, i: number) => {
            const rawValue =
              typeof item.value === 'string'
                ? item.value
                : String(item.value ?? '');

            const shown = metricDisplay(rawValue) || rawValue;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-0 md:px-8 first:pl-0 last:pr-0 text-center md:text-left"
              >
                <div className="flex items-baseline justify-center md:justify-start text-brand">
                  <span className="display text-4xl sm:text-5xl md:text-6xl text-brand">
                    {item.prefix || ''}
                    {shown}
                    {item.suffix || ''}
                  </span>
                </div>

                {/* LABEL — foreground */}
                <div className="text-foreground capitalize text-base md:text-md font-medium mt-2 md:mt-3">
                  {item.title || item.label}
                </div>

                {/* DESCRIPTION — muted foreground */}
                {item.description && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Closing paragraphs */}
        {closing.length > 0 && (
          <div className="mt-10 md:mt-12 max-w-3xl space-y-4">
            {closing.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}