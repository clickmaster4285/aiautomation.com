// app/solutions/business-process-automation/for-law-firms/page.tsx
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
import { businessProcessAutomationForLawFirms } from '@/content/Solutions/business-process-automation-for-law-firms';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: businessProcessAutomationForLawFirms.titleTag,
  description: businessProcessAutomationForLawFirms.metaDescription,
  alternates: {
    canonical: businessProcessAutomationForLawFirms.url,
  },
  openGraph: {
    title: businessProcessAutomationForLawFirms.titleTag,
    description: businessProcessAutomationForLawFirms.metaDescription,
    url: businessProcessAutomationForLawFirms.url,
    type: 'website',
  },
  keywords: businessProcessAutomationForLawFirms.primaryKeyword,
};

export default function ForLawFirmsPage() {
  const content = businessProcessAutomationForLawFirms;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Process Automation for Law Firms',
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
          href: '#why-law-firms-need-business-process-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Law Firms"
            triggerLabel="New Client Inquiry"
            actionLabels={['Send Consultation Offer', 'Schedule Meeting', 'Close Deal']}
            metricValue="1,200"
            metricLabel="client inquiries managed automatically this month"
            submetric="75% improved response time"
            platform="CRM + Legal Case Management System"
            accent="#10B981"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Business Process Automation', href: '/solutions/business-process-automation' },
          { label: 'Law Firms', href: content.url },
        ]}
      />

      <WhySection
        title="Why Law Firms Need Business Process Automation"
        content={[content.sections['Why Law Firms Need Business Process Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Law Firms"
        content={[content.sections['The Problems This Solves for Law Firms']]}
      />

      <AutomationSection
        title="What We Automate for Law Firms"
        content={[content.sections['What We Automate for Law Firms']]}
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
        title="Built for Law Firms' Realities"
        content={[content.sections['Built for Law Firms\' Realities']]}
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
        subtitle="Common questions about business process automation for law firms"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where process automation pays off for law firms."
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