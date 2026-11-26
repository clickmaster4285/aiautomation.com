'use client';

// Platform case studies in the homepage proof layout: label row, heading with italic tail, then
// bordered cards with Challenge / Solution / Result rows.
import { motion } from 'framer-motion';
import type { Section } from '@/content/type';
import { SectionLabel, splitHeading } from '@/components/landingPage/Shared';
import { RichText } from '@/components/solutions/sections/variants/RichText';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const FIELDS = [
  ['challenge', 'Challenge'],
  ['solution', 'Solution'],
  ['result', 'Result'],
] as const;

export default function CaseStudiesSec({ section, bg = 'bg-paper' }: { section: Section; bg?: string }) {
  const items = section.items || [];
  const dark = bg === 'bg-ink';
  const cell = dark ? 'bg-ink' : bg === 'bg-secondary' ? 'bg-secondary' : 'bg-paper';
  const { head, tail } = splitHeading(section.heading || 'Case studies', 2);
  const cols = items.length % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

  return (
    <section className={`${bg} py-16 md:py-24 ${dark ? 'text-white' : 'text-ink'}`}>
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label="Example workflows" dark={dark} />
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
          className={`grid grid-cols-1 gap-px border md:grid-cols-2 ${cols} ${
            dark ? 'border-white/10 bg-white/10' : 'border-border bg-border'
          }`}
        >
          {items.map((item, i) => (
            <motion.article
              key={`${item.title}-${i}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className={`${cell} flex h-full flex-col p-6 md:p-8`}
            >
              <span className="eyebrow mb-4 text-xs text-brand tabular-nums">Case {String(i + 1).padStart(2, '0')}</span>
              {item.title && <h3 className="display mb-6 text-2xl md:text-3xl">{item.title}</h3>}
              <dl className={`mt-auto divide-y border-t ${dark ? 'divide-white/10 border-white/10' : 'divide-border border-border'}`}>
                {FIELDS.map(([key, label]) =>
                  item[key] ? (
                    <div key={key} className="py-4">
                      <dt
                        className={`eyebrow mb-1.5 text-xs ${
                          key === 'result' ? 'text-brand' : dark ? 'text-white/50' : 'text-muted-foreground'
                        }`}
                      >
                        {label}
                      </dt>
                      <dd className={`text-sm leading-relaxed md:text-base ${dark ? 'text-white/80' : 'text-ink/80'}`}>
                        <RichText text={item[key] as string} />
                      </dd>
                    </div>
                  ) : null,
                )}
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
