'use client';

// Platform detail hero: same layout as the hub and industry heroes. Breadcrumb, badge, H1 with
// italic tail, intro and CTA on the left; the audit form on the right; hero + marquee fill the
// first screen.
import { motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { Section } from '@/content/type';
import { splitHeading } from '@/components/landingPage/Shared';
import Marquee from '@/components/landingPage/Marquee';
import HeroBreadcrumb from '@/components/shared/HeroBreadcrumb';
import HeroCta from '@/components/shared/HeroCta';
import ProductLeadForm from '@/components/products/ProductLeadForm';
import { PLATFORMS } from '@/lib/link-graph';

// No opacity: 0 start, so the H1 and intro (the likely LCP element) paint before hydration.
const heroIn: Variants = {
  hidden: { y: 24 },
  visible: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ section }: { section: Section; bg?: string }) {
  const pathname = usePathname() || '/platforms';
  const slug = pathname.split('/').filter(Boolean).pop() || '';
  const heading = section.heading || '';
  const intro =
    section.subheading ||
    (Array.isArray(section.content) ? section.content[0] : section.content) ||
    '';
  const primaryCta = (section.ctas || []).find((c) => c.primary) || section.ctas?.[0];
  const { head, tail } = splitHeading(heading, 2);
  const platform = Object.values(PLATFORMS).find((p) => p.page === slug)?.name;
  const crumb = platform ? `${platform} Automation` : heading;

  return (
    <div className="flex min-h-[calc(100svh-4rem)] flex-col">
      <section className="relative isolate flex flex-1 items-center overflow-hidden bg-paper py-12 md:py-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="relative mx-auto w-full max-w-[84vw] px-6">
          <HeroBreadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Platforms', href: '/platforms' },
              { label: crumb, href: pathname },
            ]}
          />
          <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[1.15fr_1fr] lg:gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div
                variants={heroIn}
                className="eyebrow mb-5 inline-flex items-center gap-2 border border-brand px-3 py-1 text-xs text-brand md:mb-7 md:text-sm"
              >
                <span>{platform ? `${platform} Platform` : 'Platforms'}</span>
              </motion.div>
              <motion.h1
                variants={heroIn}
                className="display mb-5 max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:mb-7 md:text-6xl lg:text-7xl"
              >
                {head}
                {head && ' '}
                <span className="display-italic text-brand">{tail}</span>
              </motion.h1>
              {intro && (
                <motion.p variants={heroIn} className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {intro}
                </motion.p>
              )}
              <motion.div variants={heroIn}>
                <HeroCta href={primaryCta?.link || '/free-automation-audit'} text={primaryCta?.text || 'Book a Free Audit'} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex md:justify-end"
            >
              <ProductLeadForm product={platform ? `${platform} automation` : heading} variant="hero" id="get-started" />
            </motion.div>
          </div>
        </div>
      </section>
      <Marquee />
    </div>
  );
}
