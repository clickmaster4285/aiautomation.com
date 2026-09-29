// app/services/page.tsx
import type { Metadata } from 'next';
import type { ElementType } from 'react';
import Link from 'next/link';
import { serviceCategories } from '@/content/index';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { Section, SectionHeading } from '@/components/solutions/layout/Section';
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
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Services | Clickmasters',
  description:
    'Explore Clickmasters AI automation services: workflow and process automation, RPA, AI agents, chatbots, voice agents, reporting and custom AI development.',
  alternates: {
    canonical: 'https://clickmastersaiautomation.com/services',
  },
};

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
  heading: 'AI Automation Services',
  subheading:
    'Eleven focused services covering workflows, agents, reporting and strategy — each one a dedicated page, built for production not presentations.',
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
    { label: 'Services', href: '/services' },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection {...heroData} />

      <Section bg="muted" pattern="dots" className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Explore Our Services"
            subtitle="Every card below links to a dedicated service page — pick the one that matches the problem you're solving."
            eyebrow="Services"
            align="center"
          />

          {/* All services — flat grid, no category grouping */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {serviceCategories.flatMap((category) =>
              category.services.map((service) => {
                const Icon = serviceIconMap[service.slug] || Sparkles;

                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-brand/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand transition-colors line-clamp-1">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-brand font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Book a free automation audit — a working session on your operation, and
            you&apos;ll leave with real answers either way.
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