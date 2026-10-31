// app/solutions/sales-automation/with-salesforce/page.tsx
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
import { salesAutomationWithSalesforce } from '@/content/Solutions/sales-automation-with-salesforce';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: salesAutomationWithSalesforce.titleTag,
  description: salesAutomationWithSalesforce.metaDescription,
  alternates: {
    canonical: salesAutomationWithSalesforce.url,
  },
  openGraph: {
    title: salesAutomationWithSalesforce.titleTag,
    description: salesAutomationWithSalesforce.metaDescription,
    url: salesAutomationWithSalesforce.url,
    type: 'website',
  },
  keywords: salesAutomationWithSalesforce.primaryKeyword,
};

export default function WithSalesforcePage() {
  const content = salesAutomationWithSalesforce;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Sales Automation with Salesforce',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'Sales Automation Development',
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
          href: '#why-sales-automation-with-salesforce',
        }}
        visual={
          <AutomationHeroMockup
            industry="Sales + Salesforce"
            triggerLabel="New Sales Lead"
            actionLabels={['Enrich & Qualify', 'Create Opportunity', 'Assign to Rep']}
            metricValue="1,200"
            metricLabel="sales events synced to Salesforce this month"
            submetric="60% less manual data entry"
            platform="Sales Automation + Salesforce"
            accent="#00A1E0"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Sales Automation', href: '/solutions/sales-automation' },
          { label: 'With Salesforce', href: content.url },
        ]}
      />

      <WhySection
        title="Why Sales Automation Works Better with Salesforce"
        content={content.sections['Why Sales Automation Works Better with Salesforce']}
      />

      <ProblemsSection
        title="The Problems This Solves for Salesforce Users"
        content={content.sections['The Problems This Solves for Salesforce Users']}
      />

      <AutomationSection
        title="What We Automate for Salesforce Teams"
        content={content.sections['What We Automate for Salesforce Teams']}
      />

      <StartSection
        title="Where to Start: Your First Automation"
        content={content.sections['Where to Start: Your First Automation']}
      />

      <ExampleSection
        title="A Worked Example"
        content={content.sections['A Worked Example']}
      />

      <BoundariesSection
        title="What This Is and Isn't"
        content={content.sections["What This Is and Isn't"]}
      />

      <RealitiesSection
        title="Built for Salesforce's Realities"
        content={content.sections["Built for Salesforce's Realities"]}
      />

      <ReturnSection
        title="What the Return Looks Like"
        content={content.sections['What the Return Looks Like']}
        stats={content.stats}
      />

      <WhyUsSection
        title="Why Clickmasters"
        content={content.sections['Why Clickmasters']}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about sales automation with Salesforce"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit — 30 minutes, no obligation, and an honest read on where sales automation pays off for your Salesforce team."
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