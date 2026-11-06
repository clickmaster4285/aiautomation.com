// app/solutions/crm-automation/for-accounting-firms/page.tsx
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
import { crmAutomationForAccountingFirms } from '@/content/Solutions/crm-automation-for-accounting-firms';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: crmAutomationForAccountingFirms.titleTag,
  description: crmAutomationForAccountingFirms.metaDescription,
  alternates: {
    canonical: canonicalUrl(crmAutomationForAccountingFirms.url),
  },
  openGraph: {
    title: crmAutomationForAccountingFirms.titleTag,
    description: crmAutomationForAccountingFirms.metaDescription,
    url: canonicalUrl(crmAutomationForAccountingFirms.url),
    type: 'website',
  },
  keywords: crmAutomationForAccountingFirms.primaryKeyword,
};

export default function ForAccountingFirmsPage() {
  const content = crmAutomationForAccountingFirms;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'CRM Automation for Accounting Firms',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'CRM Automation Development',
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
          href: '#why-accounting-firms-need-crm-automation',
        }}
         visual={
          <AutomationHeroMockup
            industry="Accounting Firms"
            triggerLabel="New Client Onboarding"
            actionLabels={['Process Application', 'Verify Documents', 'Schedule Meeting']}
            metricValue="1,200"
            metricLabel="clients onboarded automatically each month"
            submetric="90% reduction in onboarding time"
            platform="CRM + Document Management System"
            accent="#10B981"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'CRM Automation', href: '/solutions/crm-automation' },
          { label: 'Accounting Firms', href: content.url },
        ]}
      />

      <WhySection
        title="Why Accounting Firms Need CRM Automation"
        content={[content.sections['Why Accounting Firms Need CRM Automation']]}
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
        subtitle="Common questions about CRM automation for accounting firms"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where CRM automation pays off for accounting firms."
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