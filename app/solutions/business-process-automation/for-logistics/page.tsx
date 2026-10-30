// app/solutions/business-process-automation/for-logistics/page.tsx
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
import { businessProcessAutomationForLogistics } from '@/content/Solutions/business-process-automation-for-logistics';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: businessProcessAutomationForLogistics.titleTag,
  description: businessProcessAutomationForLogistics.metaDescription,
  alternates: {
    canonical: businessProcessAutomationForLogistics.url,
  },
  openGraph: {
    title: businessProcessAutomationForLogistics.titleTag,
    description: businessProcessAutomationForLogistics.metaDescription,
    url: businessProcessAutomationForLogistics.url,
    type: 'website',
  },
  keywords: businessProcessAutomationForLogistics.primaryKeyword,
};

export default function ForLogisticsPage() {
  const content = businessProcessAutomationForLogistics;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Process Automation for Logistics & Transportation',
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
          href: '#why-logistics-transportation-need-business-process-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Logistics & Transportation"
            triggerLabel="New Shipment Inquiry"
            actionLabels={['Send Quote', 'Schedule Pickup', 'Track Shipment']}
            metricValue="1,500"
            metricLabel="shipments managed automatically this month"
            submetric="90% improved on-time delivery rate"
            platform="CRM + Fleet Management System"
            accent="#8B5CF6"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Business Process Automation', href: '/solutions/business-process-automation' },
          { label: 'Logistics', href: content.url },
        ]}
      />

      <WhySection
        title="Why Logistics & Transportation Need Business Process Automation"
        content={[content.sections['Why Logistics & Transportation Need Business Process Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Logistics & Transportation"
        content={[content.sections['The Problems This Solves for Logistics & Transportation']]}
      />

      <AutomationSection
        title="What We Automate for Logistics & Transportation"
        content={[content.sections['What We Automate for Logistics & Transportation']]}
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
        title="Built for Logistics & Transportation's Realities"
        content={[content.sections['Built for Logistics & Transportation\'s Realities']]}
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
        subtitle="Common questions about business process automation for logistics & transportation"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where process automation pays off for logistics & transportation."
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