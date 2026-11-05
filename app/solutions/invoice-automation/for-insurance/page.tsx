// app/solutions/invoice-automation/for-insurance/page.tsx
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
import { invoiceAutomationForInsurance } from '@/content/Solutions/invoice-automation-for-insurance';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: invoiceAutomationForInsurance.titleTag,
  description: invoiceAutomationForInsurance.metaDescription,
  alternates: {
    canonical: canonicalUrl(invoiceAutomationForInsurance.url),
  },
  openGraph: {
    title: invoiceAutomationForInsurance.titleTag,
    description: invoiceAutomationForInsurance.metaDescription,
    url: canonicalUrl(invoiceAutomationForInsurance.url),
    type: 'website',
  },
  keywords: invoiceAutomationForInsurance.primaryKeyword,
};

export default function ForInsurancePage() {
  const content = invoiceAutomationForInsurance;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Invoice & Finance Automation for Insurance Agencies',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'Invoice & Finance Automation Development',
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
          href: '#why-insurance-agencies-need-invoice-finance-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Insurance"
            triggerLabel="New Document Request"
            actionLabels={['Generate Reports', 'Create Invoices', 'Manage Client Data']}
            metricValue="1500"
            metricLabel="invoices processed automatically each month"
            submetric="80% reduction in processing time"
            platform="Invoice & Finance Automation + Insurance Management System"
            accent="#10B981"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Invoice & Finance Automation', href: '/solutions/invoice-automation' },
          { label: 'Insurance Agencies', href: content.url },
        ]}
      />

      <WhySection
        title="Why Insurance Agencies Need Invoice & Finance Automation"
        content={[content.sections['Why Insurance Agencies Need Invoice & Finance Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Insurance Agencies"
        content={[content.sections['The Problems This Solves for Insurance Agencies']]}
      />

      <AutomationSection
        title="What We Automate for Insurance Agencies"
        content={[content.sections['What We Automate for Insurance Agencies']]}
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
        title="Built for Insurance Agencies' Realities"
        content={[content.sections["Built for Insurance Agencies' Realities"]]}
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
        subtitle="Common questions about invoice & finance automation for insurance agencies"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where finance automation pays off for insurance agencies."
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