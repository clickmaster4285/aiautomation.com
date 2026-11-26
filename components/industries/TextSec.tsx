'use client';

// Industry text section in the homepage layout: label row, heading with italic tail on the left,
// the lead paragraph on the right, remaining paragraphs below in two columns.
// Renders only the page's own content (no hard-coded per-industry chips or numbers).
import { motion } from 'framer-motion';
import type { Section } from '@/content/type';
import { SectionLabel, splitHeading } from '@/components/landingPage/Shared';
import { RichText } from '@/components/solutions/sections/variants/RichText';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

function labelFor(heading: string): string {
  if (/where to start|first workflow/i.test(heading)) return 'Where to start';
  if (/return|results|value/i.test(heading)) return 'The return';
  if (/privacy|security|compliance|oversight|boundary/i.test(heading)) return 'Trust & oversight';
  if (/integration|connected tools/i.test(heading)) return 'Integrations';
  if (/load|overhead|piles up|stalls|strains/i.test(heading)) return 'The problem';
  return 'In practice';
}

export default function TextSec({ section, bg = 'bg-paper' }: { section: Section; bg?: string }) {
  const paragraphs = (Array.isArray(section.content) ? section.content : [section.content]).filter(
    (p): p is string => typeof p === 'string' && p.trim().length > 0,
  );
  const heading = section.heading || '';
  const dark = bg === 'bg-ink';
  const { head, tail } = splitHeading(heading, 2);
  // Lines starting with "•" are list items: shown as a bordered checklist, not loose paragraphs.
  const isBullet = (p: string) => /^\s*[•\-–]\s+/.test(p);
  const bullets = paragraphs.filter(isBullet).map((p) => p.replace(/^\s*[•\-–]\s+/, ''));
  const [lead, ...rest] = paragraphs.filter((p) => !isBullet(p));

  return (
    <section className={`${bg} py-16 md:py-24 ${dark ? 'text-white' : 'text-ink'}`}>
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label={labelFor(heading)} dark={dark} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid gap-8 md:grid-cols-2 md:gap-16"
        >
          <h2 className="display text-4xl sm:text-5xl md:text-6xl">
            {head}
            {head && ' '}
            <span className="display-italic text-brand">{tail}</span>
          </h2>
          {lead && (
            <p className={`text-lg leading-relaxed md:self-end md:text-xl ${dark ? 'text-white/80' : 'text-ink/80'}`}>
              <RichText text={lead} />
            </p>
          )}
        </motion.div>

        {rest.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className={`mt-10 grid gap-6 border-t pt-8 md:mt-14 md:grid-cols-2 md:gap-16 md:pt-10 ${
              dark ? 'border-white/10' : 'border-border'
            }`}
          >
            {rest.map((p, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed md:text-lg ${dark ? 'text-white/70' : 'text-muted-foreground'} ${
                  rest.length === 1 ? 'md:col-start-2' : ''
                }`}
              >
                <RichText text={p} />
              </p>
            ))}
          </motion.div>
        )}
        {bullets.length > 0 && (
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className={`mt-10 grid grid-cols-1 gap-px border sm:grid-cols-2 md:mt-14 ${
              dark ? 'border-white/10 bg-white/10' : 'border-border bg-border'
            }`}
          >
            {bullets.map((b, i) => (
              <li
                key={i}
                className={`flex items-start gap-4 p-5 text-base leading-relaxed md:p-6 md:text-lg ${
                  dark ? 'bg-ink text-white/80' : bg === 'bg-secondary' ? 'bg-secondary text-ink/80' : 'bg-paper text-ink/80'
                }`}
              >
                <span className="eyebrow shrink-0 pt-1 text-xs text-brand tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <RichText text={b} />
                </span>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
}
