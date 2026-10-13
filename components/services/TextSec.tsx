'use client';

import { motion } from 'framer-motion';
import { Section } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';

// Words that get the brand color in the heading.
// Matched case-insensitively against the word with punctuation stripped.
const HIGHLIGHT_KEYWORDS = [
  'Services',
  'Service',
  'Automation',
  'Automations',
  'Software',
  'Tools',
  'Platform',
  'Platforms',
  'Solutions',
  'AI',
  'Clickmasters',
  'Business',
  'Businesses',
];

export default function TextSec({ section }: { section: Section }) {
  const content = section.content;

  const isHighlighted = (word: string) => {
    const clean = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return HIGHLIGHT_KEYWORDS.some(kw => kw.toLowerCase() === clean);
  };

  const renderFormattedContent = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());

    return lines.map((line, index) => {
      const numberMatch = line.match(/^[\s]*(\d+)\.\s+(.+)/);
      const bulletMatch = line.match(/^[\s]*[•\-*]\s+(.+)/);
      const boldMatch = line.match(/^\*\*(.+)\*\*/);

      if (numberMatch) {
        const num = numberMatch[1];
        const numText = numberMatch[2];
        const parts = numText.split('**');
        const hasBold = parts.length > 1;

        return (
          <div
            key={index}
            className="flex items-start justify-center gap-3 py-1.5 text-center"
          >
            <span className="text-brand font-semibold text-sm pt-1 tabular-nums">
              {num}.
            </span>
            <span className="text-gray-700 leading-relaxed">
              {hasBold
                ? parts.map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="font-semibold text-gray-900">
                        {part}
                      </strong>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )
                : numText}
            </span>
          </div>
        );
      }

      if (bulletMatch) {
        const bulletText = bulletMatch[1];
        const parts = bulletText.split('**');
        const hasBold = parts.length > 1;

        return (
          <div
            key={index}
            className="flex items-start justify-center gap-3 py-1.5 text-center"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span className="text-gray-700 leading-relaxed">
              {hasBold
                ? parts.map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="font-semibold text-gray-900">
                        {part}
                      </strong>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )
                : bulletText}
            </span>
          </div>
        );
      }

      if (boldMatch) {
        return (
          <div key={index} className="pt-2 pb-1 text-center">
            <strong className="text-gray-900 font-semibold text-base">
              {boldMatch[1]}
            </strong>
          </div>
        );
      }

      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="text-gray-700 leading-relaxed text-center">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} className="font-semibold text-gray-900">
                  {part}
                </strong>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
        );
      }

      return (
        <p key={index} className="text-gray-700 leading-relaxed text-center">
          {line}
        </p>
      );
    });
  };

  // ---------- standalone (no heading) ----------
  const isStandalone =
    !section.heading &&
    content &&
    (typeof content === 'string' ||
      (Array.isArray(content) && content.length === 1));

  if (isStandalone) {
    const text = typeof content === 'string' ? content : content[0];
    return (
      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-[92vw] sm:max-w-[84vw] px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-serif italic text-center"
            >
              {text}
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
  }

  // ---------- default (with heading) ----------
  const contentArray = Array.isArray(content)
    ? content
    : typeof content === 'string'
    ? [content]
    : [];

  const headingWords = section.heading?.split(' ') || [];

  return (
    <section className="bg-secondary py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[92vw] sm:max-w-[84vw] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          {section.heading && (
            <motion.h2
              variants={fadeInUp}
              className="display mb-6 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] text-center italic"
            >
              {headingWords.map((word, index) => {
                const highlight = isHighlighted(word);
                return (
                  <span
                    key={index}
                    className={highlight ? 'text-brand' : ''}
                  >
                    {word}
                    {index < headingWords.length - 1 && ' '}
                  </span>
                );
              })}
            </motion.h2>
          )}

          <motion.div
            variants={fadeInUp}
            className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed"
          >
            {contentArray.map((paragraph, idx) => (
              <div key={idx} className="space-y-2">
                {renderFormattedContent(paragraph)}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}