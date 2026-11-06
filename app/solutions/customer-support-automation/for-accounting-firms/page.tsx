// app/solutions/customer-support-automation/for-accounting-firms/page.tsx
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
import { customerSupportAutomationForAccountingFirms } from '@/content/Solutions/customer-support-automation-for-accounting-firms';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: customerSupportAutomationForAccountingFirms.titleTag,
  description: customerSupportAutomationForAccountingFirms.metaDescription,
  alternates: {
    canonical: canonicalUrl(customerSupportAutomationForAccountingFirms.url),
  },
  openGraph: {
    title: customerSupportAutomationForAccountingFirms.titleTag,
    description: customerSupportAutomationForAccountingFirms.metaDescription,
    url: canonicalUrl(customerSupportAutomationForAccountingFirms.url),
    type: 'website',
  },
  keywords: customerSupportAutomationForAccountingFirms.primaryKeyword,
};

export default function ForAccountingFirmsPage() {
  const content = customerSupportAutomationForAccountingFirms;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Customer Support Automation for Accounting Firms',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
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
          href: '#why-accounting-firms-need-customer-support-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Accounting"
            triggerLabel="New Client Inquiry"
            actionLabels={['Respond to Inquiry', 'Schedule Meeting', 'Provide Quote']}
            metricValue="500"
            metricLabel="new client inquiries handled automatically each month"
            submetric="85% reduction in response time"
            platform="Customer Support + Accounting Software"
            accent="#8B5CF6"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Customer Support Automation', href: '/solutions/customer-support-automation' },
          { label: 'Accounting Firms', href: content.url },
        ]}
      />

      <WhySection
        title="Why Accounting Firms Need Customer Support Automation"
        content={[content.sections['Why Accounting Firms Need Customer Support Automation']]}
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
        title="What This Is and Isn't"
        content={[content.sections['What This Is and Isn\'t']]}
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
        subtitle="Common questions about customer support automation for accounting firms"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where support automation pays off for accounting firms."
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