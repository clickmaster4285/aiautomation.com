// app/solutions/customer-support-automation/for-logistics/page.tsx
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
import { customerSupportAutomationForLogistics } from '@/content/Solutions/customer-support-automation-for-logistics';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: customerSupportAutomationForLogistics.titleTag,
  description: customerSupportAutomationForLogistics.metaDescription,
  alternates: {
    canonical: canonicalUrl(customerSupportAutomationForLogistics.url),
  },
  openGraph: {
    title: customerSupportAutomationForLogistics.titleTag,
    description: customerSupportAutomationForLogistics.metaDescription,
    url: canonicalUrl(customerSupportAutomationForLogistics.url),
    type: 'website',
  },
  keywords: customerSupportAutomationForLogistics.primaryKeyword,
};

export default function ForLogisticsPage() {
  const content = customerSupportAutomationForLogistics;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Customer Support Automation for Logistics & Transportation',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'Customer Support Automation Development',
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
          href: '#why-logistics-transportation-need-customer-support-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Logistics & Transportation"
            triggerLabel="New Shipment Inquiry"
            actionLabels={['Track Shipment', 'Provide Delivery Information', 'Resolve Issues']}
            metricValue="800"
            metricLabel="new shipment inquiries handled automatically each month"
            submetric="75% reduction in handling time"
            platform="Customer Support + Logistics Management System"
            accent="#F59E0B"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Customer Support Automation', href: '/solutions/customer-support-automation' },
          { label: 'Logistics', href: content.url },
        ]}
      />

      <WhySection
        title="Why Logistics & Transportation Need Customer Support Automation"
        content={[content.sections['Why Logistics & Transportation Need Customer Support Automation']]}
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
        subtitle="Common questions about customer support automation for logistics & transportation"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where support automation pays off for logistics & transportation."
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