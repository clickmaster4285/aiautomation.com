// app/solutions/business-process-automation/for-retail/page.tsx
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
import { businessProcessAutomationForRetail } from '@/content/Solutions/business-process-automation-for-retail';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: businessProcessAutomationForRetail.titleTag,
  description: businessProcessAutomationForRetail.metaDescription,
  alternates: {
    canonical: businessProcessAutomationForRetail.url,
  },
  openGraph: {
    title: businessProcessAutomationForRetail.titleTag,
    description: businessProcessAutomationForRetail.metaDescription,
    url: businessProcessAutomationForRetail.url,
    type: 'website',
  },
  keywords: businessProcessAutomationForRetail.primaryKeyword,
};

export default function ForRetailPage() {
  const content = businessProcessAutomationForRetail;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Process Automation for Retail',
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
          href: '#why-retail-need-business-process-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Retail"
            triggerLabel="New Customer Inquiry"
            actionLabels={['Process Inquiry', 'Check Inventory', 'Follow Up']}
            metricValue="3,000"
            metricLabel="customer inquiries managed automatically this month"
            submetric="75% faster resolution time"
            platform="CRM + E-commerce Platform"
            accent="#8B5CF6"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Business Process Automation', href: '/solutions/business-process-automation' },
          { label: 'Retail', href: content.url },
        ]}
      />

      <WhySection
        title="Why Retail Need Business Process Automation"
        content={[content.sections['Why Retail Need Business Process Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Retail"
        content={[content.sections['The Problems This Solves for Retail']]}
      />

      <AutomationSection
        title="What We Automate for Retail"
        content={[content.sections['What We Automate for Retail']]}
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
        title="Built for Retail's Realities"
        content={[content.sections['Built for Retail\'s Realities']]}
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
        subtitle="Common questions about business process automation for retail"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where process automation pays off for retail."
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