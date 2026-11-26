'use client';

// Industry closing CTA: the homepage CTA band (ink background, heading left, brand button right).
import type { Section } from '@/content/type';
import CtaBand from '@/components/landingPage/CtaBand';

export default function CTASec({ section }: { section: Section; bg?: string }) {
  return (
    <CtaBand
      data={{
        heading: section.heading || 'Find out what you can automate',
        subheading: section.subheading || 'Book a free automation audit.',
        cta: {
          text: section.cta?.text || 'Book Your Free Automation Audit',
          link: section.cta?.link || '/free-automation-audit',
        },
      }}
      ctaPosition="page-end"
    />
  );
}
