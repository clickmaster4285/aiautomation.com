// app/solutions/business-process-automation/for-accounting-firms/page.tsx
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
import { businessProcessAutomationForAccountingFirms } from '@/content/Solutions/business-process-automation-for-accounting-firms';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: businessProcessAutomationForAccountingFirms.titleTag,
  description: businessProcessAutomationForAccountingFirms.metaDescription,
  alternates: {
    canonical: businessProcessAutomationForAccountingFirms.url,
  },
  openGraph: {
    title: businessProcessAutomationForAccountingFirms.titleTag,
    description: businessProcessAutomationForAccountingFirms.metaDescription,
    url: businessProcessAutomationForAccountingFirms.url,
    type: 'website',
  },
  keywords: businessProcessAutomationForAccountingFirms.primaryKeyword,
};

export default function ForAccountingFirmsPage() {
  const content = businessProcessAutomationForAccountingFirms;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Process Automation for Accounting Firms',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'Business Process Automation Development',
            areaServed: 'Global',
          }),
        }}
      />

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
          href: '#why-accounting-firms-need-business-process-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Accounting Firms"
            triggerLabel="New Client Inquiry"
            actionLabels={['Schedule Meeting', 'Provide Proposal', 'Submit Report']}
            metricValue="1,500"
            metricLabel="client inquiries handled automatically this month"
            submetric="75% improved efficiency"
            platform="CRM + Accounting Software"
            accent="#10B981"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Business Process Automation', href: '/solutions/business-process-automation' },
          { label: 'Accounting Firms', href: content.url },
        ]}
      />

      <WhySection
        title="Why Accounting Firms Need Business Process Automation"
        content={[content.sections['Why Accounting Firms Need Business Process Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Accounting Firms"
        content={[content.sections['The Problems This Solves for Accounting Firms']]}
      />

      <AutomationSection
        title="What We Automate for Accounting Firms"
        content={[content.sections['What We Automate for Accounting Firms']]}
      />

      <StartSection
        title="Where to Start: Your First Automation"
        content={[content.sections['Where to Start: Your First Automation']]}
      />

      <ExampleSection
        title="A Worked Example"
        content={[content.sections['A Worked Example']]}
      />

      <BoundariesSection
        title="What This Isand Isn't"
        content={[content.sections['What This Isand Isn\'t']]}
      />

      <RealitiesSection
        title="Built for Accounting Firms' Realities"
        content={[content.sections['Built for Accounting Firms\' Realities']]}
      />

      <ReturnSection
        title="What the Return Looks Like"
        content={[content.sections['What the Return Looks Like']]}
        stats={content.stats}
      />

      <WhyUsSection
        title="Why Clickmasters"
        content={[content.sections['Why Clickmasters']]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about business process automation for accounting firms"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where process automation pays off for accounting firms."
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