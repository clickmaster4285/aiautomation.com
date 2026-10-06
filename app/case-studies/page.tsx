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
import { Section, SectionHeading } from '@/components/solutions/layout/Section';

export const metadata: Metadata = {
  title: 'Case studies | Clickmasters',
  description:
    'Every Clickmasters build, documented end to end — the brief, the gaps we closed, the rules the system cannot break, the test results and the limits we designed around.',
  alternates: {
    canonical: 'https://clickmastersaiautomation.com/case-studies',
  },
};

// ── Icon per case study ──
const caseStudyIconMap: Record<string, ElementType> = {
  'ai-receptionist-lead-response-automation': PhoneCall,
  // add more as you publish — key = slug
};

// ── The list ──
const caseStudies = [
  {
    slug: 'ai-receptionist-lead-response-automation',
    title: 'AI Receptionist for Small Business',
    description:
      'Every call, text and email answered in seconds. How we built an AI receptionist that answers, qualifies and books jobs for trades — with the system prompt, schema and test results.',
    tag: 'Voice · SMS · Email',
    parts: 12,
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
  heading: 'Case Studies',
  subheading:
    'Every build we ship gets documented the same way — the brief, the gaps, the rules, the test results and the limits. No marketing gloss, just the working.',
  primaryCta: {
    text: 'Book a Free Audit',
    href: '/free-automation-audit',
  },
  image: '/images/hero-robot.png',
  imageWidth: 700,
  imageHeight: 580,
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

      <Section bg="muted" pattern="dots" className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="The Work, Written Down"
            subtitle="Each card below opens the full backing document — the challenge, the solution, the tech stack, the results and the sources."
            eyebrow="Case studies"
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {caseStudies.map((cs) => {
              const Icon = caseStudyIconMap[cs.slug] || FileText;

              return (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-brand/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand transition-colors line-clamp-1">
                      {cs.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
                    {cs.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-gray-400">
                    <span>{cs.tag}</span>
                    <span className="font-mono tabular-nums">
                      {cs.parts} parts
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-brand font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>Read the working</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {caseStudies.length === 0 && (
            <p className="mt-12 text-center text-gray-500 text-sm">
              Nothing published yet. Check back soon.
            </p>
          )}
        </div>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want your own build documented like this?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Book a free automation audit — a working session on your operation,
            and you&apos;ll leave with real answers either way.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-medium px-8 py-4 rounded-none transition-all shadow-lg shadow-brand/25 hover:shadow-brand/40"
          >
            Talk to Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}