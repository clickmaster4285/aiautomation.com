'use client';

// Industry "items" section (features and grid types) in the homepage layout: label row, heading with
// italic tail + subheading, then a bordered grid of numbered cards (sharp corners, gap-px borders).
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import type { Section } from '@/content/type';
import { SectionLabel, splitHeading } from '@/components/landingPage/Shared';
import { RichText } from '@/components/solutions/sections/variants/RichText';
import { contentIcon } from '@/components/shared/content-icons';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function labelFor(heading: string): string {
  if (/worked example|example/i.test(heading)) return 'Worked example';
  if (/why clickmasters|why us/i.test(heading)) return 'Why Clickmasters';
  if (/what we automate|we automate|what we build/i.test(heading)) return 'What we automate';
  if (/integration|connect/i.test(heading)) return 'Integrations';
  return 'In practice';
}

type Item = { title?: string; description?: string; icon?: string };

export default function FeatureSec({ section, bg = 'bg-paper' }: { section: Section; bg?: string }) {
  const items = (section.items || []) as Item[];
  const heading = section.heading || '';
  const dark = bg === 'bg-ink';
  const { head, tail } = splitHeading(heading, 2);
  const cols = items.length % 3 === 0 || items.length > 4 ? 'lg:grid-cols-3' : items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-2';

  return (
    <section className={`${bg} py-16 md:py-24 ${dark ? 'text-white' : 'text-ink'}`}>
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label={labelFor(heading)} dark={dark} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-8 flex flex-col gap-6 md:mb-10 md:grid md:grid-cols-2 md:gap-8"
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
          className={`grid grid-cols-1 gap-px border sm:grid-cols-2 ${cols} ${
            dark ? 'border-white/10 bg-white/10' : 'border-border bg-border'
          }`}
        >
          {items.map((item, i) => {
            const Icon = contentIcon(item.icon, Zap) ?? Zap;
            return (
              <motion.div
                key={`${item.title}-${i}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`flex h-full flex-col p-6 md:p-8 ${dark ? 'bg-ink' : bg === 'bg-secondary' ? 'bg-secondary' : 'bg-paper'}`}
              >
                <div className="mb-6 flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center border border-brand/30 bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <span className={`eyebrow text-xs ${dark ? 'text-white/40' : 'text-muted-foreground'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {item.title && <h3 className="display mb-3 text-2xl">{item.title}</h3>}
                {item.description && (
                  <p className={`text-sm leading-relaxed md:text-base ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>
                    <RichText text={item.description} />
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
