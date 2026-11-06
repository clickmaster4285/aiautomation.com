// app/solutions/customer-support-automation/for-saas/page.tsx
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
import { customerSupportAutomationForSaaS } from '@/content/Solutions/customer-support-automation-for-saas';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: customerSupportAutomationForSaaS.titleTag,
  description: customerSupportAutomationForSaaS.metaDescription,
  alternates: {
    canonical: canonicalUrl(customerSupportAutomationForSaaS.url),
  },
  openGraph: {
    title: customerSupportAutomationForSaaS.titleTag,
    description: customerSupportAutomationForSaaS.metaDescription,
    url: canonicalUrl(customerSupportAutomationForSaaS.url),
    type: 'website',
  },
  keywords: customerSupportAutomationForSaaS.primaryKeyword,
};

export default function ForSaaSPage() {
  const content = customerSupportAutomationForSaaS;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Customer Support Automation for SaaS Companies',
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
          href: '#why-saas-companies-need-customer-support-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="SaaS"
            triggerLabel="New Support Request"
            actionLabels={['Provide Product Information', 'Schedule Demo', 'Resolve Issues']}
            metricValue="2000"
            metricLabel="new support requests handled automatically each month"
            submetric="75% reduction in response time"
            platform="Customer Support + SaaS Platform"
            accent="#10B981"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Customer Support Automation', href: '/solutions/customer-support-automation' },
          { label: 'SaaS', href: content.url },
        ]}
      />

      <WhySection
        title="Why SaaS Companies Need Customer Support Automation"
        content={[content.sections['Why SaaS Companies Need Customer Support Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for SaaS Companies"
        content={[content.sections['The Problems This Solves for SaaS Companies']]}
      />

      <AutomationSection
        title="What We Automate for SaaS Companies"
        content={[content.sections['What We Automate for SaaS Companies']]}
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
        title="Built for SaaS Companies' Realities"
        content={[content.sections['Built for SaaS Companies\'s Realities']]}
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
        subtitle="Common questions about customer support automation for SaaS companies"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where support automation pays off for SaaS companies."
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