// app/case-studies/page.tsx
import type { Metadata } from 'next';
import type { ElementType } from 'react';
import Link from 'next/link';
import {
  PhoneCall,
  MessageSquare,
  BarChart3,
  Bot,
  Brain,
  Workflow,
  ArrowRight,
  FileText,
} from 'lucide-react';
import { HeroSection } from '@/components/solutions/sections/Hero';
import Image from 'next/image';
import { SectionLabel } from '@/components/landingPage/Shared';
import CtaBand from '@/components/landingPage/CtaBand';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';

export const metadata: Metadata = withSocialDefaults({
  title: 'Clickmasters AI Automation Case Studies | Clickmasters',
  description: 'Clickmasters case studies document the brief, the gaps closed, the rules a system cannot break, and the limits designed around the work. Book a free audit.',
  alternates: {
    canonical: canonicalUrl('/case-studies'),
  },
});

// ── Icon per case study ──
const caseStudyIconMap: Record<string, ElementType> = {
  'ai-receptionist-lead-response-automation': PhoneCall,
  // add more as you publish — key = slug
};

// What every write-up covers (matches the hero copy).
const DOC_PARTS: [string, string][] = [
  ['The brief', 'What the business needed and the problem the build had to solve.'],
  ['The gaps', 'Where the existing process lost time, leads or data.'],
  ['The rules', 'How the system decides, and what it must never do on its own.'],
  ['Test results', 'What we tested before launch and how the system performed.'],
  ['The limits', 'What the build does not do, and where a person stays in charge.'],
];

// ── The list ──
const caseStudies = [
  {
    slug: 'ai-receptionist-lead-response-automation',
    title: 'AI Receptionist for Small Business',
    description:
      'Every call, text and email answered in seconds. How we built an AI receptionist that answers, qualifies and books jobs for trades — with the system prompt, schema and test results.',
    tag: 'Voice · SMS · Email',
    parts: 12,
    image: '/case-study/ai-reception.jpeg',
    imageAlt:
      'AI Receptionist That Turns Missed Calls Into Booked Jobs: a dashboard of handled calls, qualified leads and booked appointments',
  },
  // {
  //   slug: 'next-case-study',
  //   title: '…',
  //   description: '…',
  //   tag: '…',
  //   parts: 8,
  // },
];

const heroData = {
  badge: 'Case studies',
  heading: 'AI Automation Case Studies, Fully Documented',
  subheading:
    'Every build we ship is written up the same way: the brief, the gaps we found, the rules we set, the test results and the limits. No marketing gloss, just how the system actually works.',
  primaryCta: {
    text: 'Book a Free Audit',
    href: '/free-automation-audit',
  },
  leadName: 'AI automation like our case studies',
  textSize: 'xlarge' as const,
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Case studies', href: '/case-studies' },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection {...heroData} />

      {/* ── 01 PUBLISHED CASE STUDIES (homepage "See how we build" layout) ── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label="Our work" marker="01" />
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:grid md:grid-cols-2 md:gap-8">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              The work, <span className="display-italic text-brand">written down</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:self-end md:text-right md:text-lg">
              Each case study opens the full backing document: the challenge, the solution, the tech stack, the
              results and the sources.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-border bg-border">
            {caseStudies.map((cs) => {
              const Icon = caseStudyIconMap[cs.slug] || FileText;
              return (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group grid bg-paper transition-colors duration-300 hover:bg-ink hover:text-white md:grid-cols-[1.1fr_1fr]"
                >
                  <div className="flex flex-col p-6 md:p-10">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center border border-brand/30 bg-brand/10 transition-colors duration-300 group-hover:border-brand group-hover:bg-brand">
                        <Icon className="h-5 w-5 text-brand transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
                      </span>
                      <span className="eyebrow border border-brand px-3 py-1 text-xs text-brand">Case study</span>
                    </div>
                    <h3 className="display mb-4 text-3xl md:text-4xl">{cs.title}</h3>
                    <p className="mb-8 text-base leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/70">
                      {cs.description}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 transition-colors duration-300 group-hover:border-white/10">
                      <span className="eyebrow text-xs text-muted-foreground group-hover:text-white/60">
                        {cs.tag} · {cs.parts} parts
                      </span>
                      <span className="eyebrow inline-flex items-center gap-2 text-xs text-ink transition-colors duration-300 group-hover:text-brand md:text-sm">
                        Read the case study
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="relative min-h-[240px] overflow-hidden border-t border-border md:border-l md:border-t-0">
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      fill
                      sizes="(min-width: 768px) 40vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {caseStudies.length === 0 && (
            <p className="mt-12 text-center text-sm text-muted-foreground">Nothing published yet. Check back soon.</p>
          )}
        </div>
      </section>

      {/* ── 02 HOW EVERY BUILD IS DOCUMENTED (homepage dark grid) ── */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label="How we document" marker="02" dark />
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:grid md:grid-cols-2 md:gap-8">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              Every build, <span className="display-italic text-brand">same five parts</span>
            </h2>
            <p className="text-base leading-relaxed text-white/70 md:self-end md:text-right md:text-lg">
              No marketing gloss. Each write-up follows the same structure, so you can see exactly how the system
              works and where it stops.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {DOC_PARTS.map(([title, desc], i) => (
              <div key={title} className="flex h-full flex-col bg-ink p-6 md:p-8">
                <span className="eyebrow mb-6 text-xs text-brand">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="display mb-3 text-2xl">{title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        data={{
          heading: 'Want your own build documented like this?',
          subheading:
            'Book a free automation audit: a working session on your operation. You leave with a clear answer on what to automate first, either way.',
          cta: { text: 'Book Your Free Automation Audit', link: '/free-automation-audit' },
        }}
        ctaPosition="page-end"
      />
    </>
  );
}