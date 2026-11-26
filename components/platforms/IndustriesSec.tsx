'use client';

// Platform "industries" section in the homepage Industries layout: label row, heading with italic
// tail + subheading, then a bordered grid of numbered industry cells.
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Section } from '@/content/type';
import { SectionLabel, splitHeading } from '@/components/landingPage/Shared';
import { RichText } from '@/components/solutions/sections/variants/RichText';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function IndustriesSec({ section, bg = 'bg-ink' }: { section: Section; bg?: string }) {
  const items = section.items || [];
  const dark = bg === 'bg-ink';
  const cell = dark ? 'bg-ink' : bg === 'bg-secondary' ? 'bg-secondary' : 'bg-paper';
  const { head, tail } = splitHeading(section.heading || 'Industries we serve', 2);

  return (
    <section className={`${bg} py-16 md:py-24 ${dark ? 'text-white' : 'text-ink'}`}>
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label="Industries" dark={dark} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-8 flex flex-col gap-6 md:mb-12 md:grid md:grid-cols-2 md:gap-8"
        >
          <h2 className="display text-4xl sm:text-5xl md:text-6xl">
            {head}
            {head && ' '}
            <span className="display-italic text-brand">{tail}</span>
          </h2>
          {section.subheading && (
            <p className={`text-base leading-relaxed md:self-end md:text-right md:text-lg ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>
              {section.subheading}
            </p>
          )}
        </motion.div>

        <div
          className={`grid grid-cols-1 gap-px border sm:grid-cols-2 lg:grid-cols-3 ${
            dark ? 'border-white/10 bg-white/10' : 'border-border bg-border'
          }`}
        >
          {items.map((item, i) => {
            const body = (
              <>
                <span className="eyebrow mb-6 block text-xs text-brand tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                {item.title && (
                  <h3 className={`display mb-3 text-2xl ${item.link ? 'transition-colors group-hover:text-brand' : ''}`}>
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className={`text-sm leading-relaxed md:text-base ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>
                    <RichText text={item.description} />
                  </p>
                )}
              </>
            );
            return (
              <motion.div
                key={`${item.title}-${i}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`${cell} h-full`}
              >
                {item.link ? (
                  <Link href={item.link} className="group block h-full p-6 md:p-8">
                    {body}
                  </Link>
                ) : (
                  <div className="h-full p-6 md:p-8">{body}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
