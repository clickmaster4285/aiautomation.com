// app/solutions/sales-automation/for-law-firms/page.tsx
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
import { salesAutomationForLawFirms } from '@/content/Solutions/sales-automation-for-law-firms';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: salesAutomationForLawFirms.titleTag,
  description: salesAutomationForLawFirms.metaDescription,
  alternates: {
    canonical: canonicalUrl(salesAutomationForLawFirms.url),
  },
  openGraph: {
    title: salesAutomationForLawFirms.titleTag,
    description: salesAutomationForLawFirms.metaDescription,
    url: canonicalUrl(salesAutomationForLawFirms.url),
    type: 'website',
  },
  keywords: salesAutomationForLawFirms.primaryKeyword,
};

export default function ForLawFirmsPage() {
  const content = salesAutomationForLawFirms;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Sales Automation for Law Firms',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
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
          href: '#why-law-firms-need-sales-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Law Firms"
            triggerLabel="New Document Request"
            actionLabels={['Generate Reports', 'Create Invoices', 'Manage Client Data']}
            metricValue="400"
            metricLabel="leads generated automatically each month"
            submetric="30% increase in case conversions"
            platform="Sales Automation + Law Firm Platform"
            accent="#10B981"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Sales Automation', href: '/solutions/sales-automation' },
          { label: 'Law Firms', href: content.url },
        ]}
      />

      <WhySection
        title="Why Law Firms Need AI Sales Automation"
        content={[content.sections['Why Law Firms Need AI Sales Automation']]}
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
        title="What This Is and Isn't"
        content={[content.sections['What This Is and Isn\'t']]}
      />

      <RealitiesSection
        title="Built for Law Firms's Realities"
        content={[content.sections['Built for Law Firms\'s Realities']]}
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
        subtitle="Common questions about sales automation for law firms"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where sales automation pays off for law firms."
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