// app/solutions/business-process-automation/for-manufacturing/page.tsx
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
import { businessProcessAutomationForManufacturing } from '@/content/Solutions/business-process-automation-for-manufacturing';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: businessProcessAutomationForManufacturing.titleTag,
  description: businessProcessAutomationForManufacturing.metaDescription,
  alternates: {
    canonical: businessProcessAutomationForManufacturing.url,
  },
  openGraph: {
    title: businessProcessAutomationForManufacturing.titleTag,
    description: businessProcessAutomationForManufacturing.metaDescription,
    url: businessProcessAutomationForManufacturing.url,
    type: 'website',
  },
  keywords: businessProcessAutomationForManufacturing.primaryKeyword,
};

export default function ForManufacturingPage() {
  const content = businessProcessAutomationForManufacturing;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Process Automation for Manufacturing',
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
          href: '#why-manufacturing-need-business-process-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Manufacturing"
            triggerLabel="New Production Request"
            actionLabels={['Generate Work Order', 'Allocate Resources', 'Monitor Progress']}
            metricValue="2,000"
            metricLabel="production requests managed automatically this month"
            submetric="85% improved efficiency"
            platform="ERP + Manufacturing Execution System"
            accent="#F59E0B"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Business Process Automation', href: '/solutions/business-process-automation' },
          { label: 'Manufacturing', href: content.url },
        ]}
      />

      <WhySection
        title="Why Manufacturing Need Business Process Automation"
        content={[content.sections['Why Manufacturing Need Business Process Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Manufacturing"
        content={[content.sections['The Problems This Solves for Manufacturing']]}
      />

      <AutomationSection
        title="What We Automate for Manufacturing"
        content={[content.sections['What We Automate for Manufacturing']]}
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
        title="Built for Manufacturing's Realities"
        content={[content.sections['Built for Manufacturing\'s Realities']]}
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
        subtitle="Common questions about business process automation for manufacturing"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where process automation pays off for manufacturing."
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