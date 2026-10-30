// app/solutions/reporting-automation/page.tsx
import { Metadata } from 'next';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';
import {
  WhySection,
  ProblemsSection,
  AutomationSection,
  StartSection,
  ExampleSection,
  BoundariesSection,
  RealitiesSection,
  ReturnSection,
  WhyUsSection,
} from '@/components/solutions/sections/variants';
import { FAQSection } from '@/components/solutions/sections/FAQ';
import { CTASection } from '@/components/solutions/sections/CTA';
import { RelatedSolutions } from '@/components/solutions/sections/RelatedSolutions';
import { reportingAutomation } from '@/content/Solutions/reporting-automation';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: reportingAutomation.titleTag,
  description: reportingAutomation.metaDescription,
  alternates: {
    canonical: reportingAutomation.url,
  },
  openGraph: {
    title: reportingAutomation.titleTag,
    description: reportingAutomation.metaDescription,
    url: reportingAutomation.url,
    type: 'website',
  },
  keywords: reportingAutomation.primaryKeyword,
};

export default function ReportingAutomationPage() {
  const content = reportingAutomation;

  return (
    <PageWrapper>
      {/* ── Structured data ───────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Reporting Automation',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'Reporting Automation Development',
            areaServed: 'Global',
          }),
        }}
      />

      {/* ── Hero ──────────────────────────────────────── */}
      <HeroSection
        badge={content.heroBadge}
        heading={content.heroHeading}
        subheading={content.heroSubheading}
        primaryCta={{
          text: 'Book a Free Audit',
          href: content.bookingLink,
        }}
        secondaryCta={{
          text: 'Learn More',
          href: '#why-reporting-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Reporting"
            triggerLabel="New Data Available"
            actionLabels={['Generate Reports', 'Distribute Dashboards', 'Sync Business Systems']}
            metricValue="1000"
            metricLabel="reports generated automatically each month"
            submetric="40% increase in reporting productivity"
            platform="Reporting Automation + Business Intelligence"
            accent="#F59E0B"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Reporting Automation', href: content.url },
        ]}
      />

      {/* ── Why reporting automation ──────────────────── */}
      <WhySection
        title="Why Businesses Need Reporting Automation"
        content={content.sections['Why Businesses Need Reporting Automation']}
      />

      {/* ── Problems solved ───────────────────────────── */}
      <ProblemsSection
        title="The Problems This Solves"
        content={content.sections['The Problems This Solves']}
      />

      {/* ── What we automate ──────────────────────────── */}
      {/* <AutomationSection
        title="What We Automate"
        content={content.sections['What We Automate']}
      /> */}

      {/* ── Where to start ────────────────────────────── */}
      <StartSection
        title="Where to Start: Your First Automation"
        content={content.sections['Where to Start: Your First Automation']}
      />

      {/* ── Worked example ────────────────────────────── */}
      <ExampleSection
        title="A Worked Example"
        content={content.sections['A Worked Example']}
      />

      {/* ── Boundaries ────────────────────────────────── */}
      <BoundariesSection
        title="What This Is and Isn't"
        content={content.sections["What This Is and Isn't"]}
      />

      {/* ── Realities ─────────────────────────────────── */}
      <RealitiesSection
        title="Built for Real Business Operations"
        content={content.sections['Built for Real Business Operations']}
      />

      {/* ── Return ────────────────────────────────────── */}
      <ReturnSection
        title="What the Return Looks Like"
        content={content.sections['What the Return Looks Like']}
        stats={content.stats}
      />

      {/* ── Why Clickmasters ──────────────────────────── */}
      <WhyUsSection
        title="Why Clickmasters"
        content={content.sections['Why Clickmasters']}
      />

      {/* ── FAQs ──────────────────────────────────────── */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about reporting automation"
        faqs={content.faqQuestions}
      />

      {/* ── Related solutions ─────────────────────────── */}
      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      {/* ── Final CTA ─────────────────────────────────── */}
      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit — 30 minutes, no obligation, and an honest read on where reporting automation pays off for your business."
        primaryCta={{
          text: 'Book a Free Automation Audit',
          href: content.bookingLink,
        }}
        secondaryCta={{
          text: 'View All Solutions',
          href: '/solutions',
        }}
        background="light"
        showForm={true}
      />
    </PageWrapper>
  );
}