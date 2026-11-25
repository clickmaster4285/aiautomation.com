// app/services/page.tsx
import type { Metadata } from 'next';
import type { ElementType } from 'react';
import Link from 'next/link';
import { serviceCategories } from '@/content/services/index';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { SectionLabel } from '@/components/landingPage/Shared';
import CtaBand from '@/components/landingPage/CtaBand';
import {
  Workflow,
  RefreshCw,
  Bot,
  BarChart3,
  Brain,
  MessageSquare,
  PhoneCall,
  BookOpen,
  Target,
  Lightbulb,
  Briefcase,
  ArrowRight,
  BrainCircuit,
} from 'lucide-react';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';
import { HubJsonLd } from '@/components/seo/HubJsonLd';
import { hubSeo } from '@/lib/hub-seo';

export const metadata: Metadata = withSocialDefaults({
  title: 'AI Automation Services for Operating Teams | Clickmasters',
  description:
    'Clickmasters AI automation services cover workflows, process automation, agents, chatbots, voice, reporting, and custom development. Book a free audit.',
  alternates: {
    canonical: canonicalUrl('/services'),
  },
});

const allServices = serviceCategories.flatMap((category) => category.services);

const PLATFORM_LINKS: [string, string][] = [
  ['Zapier', '/platforms/zapier-automation-services'],
  ['Make', '/platforms/make-automation-services'],
  ['n8n', '/platforms/n8n-automation-services'],
  ['HubSpot', '/platforms/hubspot-automation-services'],
  ['Airtable', '/platforms/airtable-automation-services'],
  ['GoHighLevel', '/platforms/gohighlevel-automation-services'],
];

// ── Icon per service subpage ──
const serviceIconMap: Record<string, ElementType> = {
  'ai-workflow-automation': Workflow,
  'business-process-automation': RefreshCw,
  'robotic-process-automation': Bot,
  'ai-reporting-automation': BarChart3,
  'ai-agent-development': Brain,
  'ai-chatbots': MessageSquare,
  'ai-voice-agents': PhoneCall,
  'ai-knowledge-assistants': BookOpen,
  'ai-lead-generation': Target,
  'ai-strategy-advisory': Lightbulb,
  'custom-ai-development': Briefcase,
};

const heroData = {
  badge: 'Services',
  heading: 'AI Automation Services Built for Production',
  subheading:
    'Eleven focused services, from workflow automation and AI agents to chatbots, voice agents, reporting and strategy. Each one is built inside the tools you already use, documented, and handed over for your team to own.',
  primaryCta: {
    text: 'Book a Free Audit',
    href: '/free-automation-audit',
  },
  leadName: 'AI automation services',
  textSize: 'xlarge' as const,
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <HubJsonLd hub={hubSeo.services} />
      <HeroSection {...heroData} />

      {/* ── 01 ALL SERVICES (homepage "What we build" layout) ── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label="All services" marker="01" />
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:grid md:grid-cols-2 md:gap-8">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              Explore our <span className="display-italic text-brand">services</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:self-end md:text-right md:text-lg">
              Each service has its own page. Pick the one that matches the problem you are solving, or book a
              free audit and we will point you to the right one.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service, i) => {
              const Icon = serviceIconMap[service.slug] || BrainCircuit;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col bg-paper p-6 transition-colors duration-300 hover:bg-ink hover:text-white md:p-8"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center border border-brand/30 bg-brand/10 transition-colors duration-300 group-hover:border-brand group-hover:bg-brand">
                      <Icon className="h-5 w-5 text-brand transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
                    </span>
                    <span className="eyebrow text-xs text-muted-foreground transition-colors duration-300 group-hover:text-white/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="display mb-3 text-2xl md:text-3xl">{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/70 md:text-base">
                    {service.description}
                  </p>
                  <span className="eyebrow mt-auto inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-brand md:text-sm">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
            {allServices.length % 3 !== 0 && (
              <Link
                href="/free-automation-audit"
                data-cta-position="services-grid"
                className={`group flex h-full flex-col justify-between bg-ink p-6 text-white transition-colors duration-300 hover:bg-brand md:p-8 ${
                  allServices.length % 3 === 1 ? 'lg:col-span-2' : ''
                }`}
              >
                <h3 className="display text-2xl md:text-3xl">
                  Not sure where <span className="display-italic">to start?</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 group-hover:text-white/90 md:text-base">
                  Book a free automation audit. We review your processes and tell you which service fits first.
                </p>
                <span className="eyebrow mt-6 inline-flex items-center gap-2 text-xs md:text-sm">
                  Book a free audit
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── 02 PLATFORMS (homepage integrations layout) ── */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label="Platforms" marker="02" />
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:grid md:grid-cols-2 md:gap-8">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              Built on the platforms <span className="display-italic text-brand">you already use</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:self-end md:text-right md:text-lg">
              We deliver these services on the automation and CRM platforms your team already runs, so there is
              nothing new to migrate to.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {PLATFORM_LINKS.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex h-full items-center justify-between gap-3 bg-paper p-5 transition-colors duration-300 hover:bg-ink hover:text-white md:p-6"
                >
                  <span className="display text-lg md:text-xl">{label}</span>
                  <ArrowRight className="h-4 w-4 text-brand transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/platforms"
            className="eyebrow mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-brand md:text-sm"
          >
            See all platforms <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBand
        data={{
          heading: 'Not sure which service you need?',
          subheading:
            'Book a free automation audit: a working session on your operation. You leave with a clear answer on what to automate first, either way.',
          cta: { text: 'Book Your Free Automation Audit', link: '/free-automation-audit' },
        }}
        ctaPosition="page-end"
      />
    </>
  );
}