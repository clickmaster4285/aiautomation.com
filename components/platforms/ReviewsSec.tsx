'use client';

// Platform reviews: label row, heading with italic tail, then a bordered grid of quote cards
// (sharp corners, gap-px borders).
import { motion } from 'framer-motion';
import type { Section } from '@/content/type';
import { SectionLabel, splitHeading } from '@/components/landingPage/Shared';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ReviewsSec({ section, bg = 'bg-ink' }: { section: Section; bg?: string }) {
  const items = (section.items || []).filter((i) => i.quote);
  if (!items.length) return null;
  const dark = bg === 'bg-ink';
  const cell = dark ? 'bg-ink' : bg === 'bg-secondary' ? 'bg-secondary' : 'bg-paper';
  const { head, tail } = splitHeading(section.heading || 'What clients say', 2);

  return (
    <section className={`${bg} py-16 md:py-24 ${dark ? 'text-white' : 'text-ink'}`}>
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label="Client feedback" dark={dark} />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="display mb-8 text-4xl sm:text-5xl md:mb-12 md:text-6xl"
        >
          {head}
          {head && ' '}
          <span className="display-italic text-brand">{tail}</span>
        </motion.h2>

        <div
          className={`grid grid-cols-1 gap-px border md:grid-cols-2 lg:grid-cols-3 ${
            dark ? 'border-white/10 bg-white/10' : 'border-border bg-border'
          }`}
        >
          {items.map((item, i) => (
            <motion.figure
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className={`${cell} flex h-full flex-col p-6 md:p-8`}
            >
              <span aria-hidden="true" className="display-italic mb-2 text-5xl leading-none text-brand">
                &ldquo;
              </span>
              <blockquote className={`mb-8 text-lg leading-relaxed md:text-xl ${dark ? 'text-white/85' : 'text-ink/85'}`}>
                {item.quote}
              </blockquote>
              {item.author && (
                <figcaption
                  className={`eyebrow mt-auto border-t pt-4 text-xs ${
                    dark ? 'border-white/10 text-white/60' : 'border-border text-muted-foreground'
                  }`}
                >
                  {item.author}
                </figcaption>
              )}
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
