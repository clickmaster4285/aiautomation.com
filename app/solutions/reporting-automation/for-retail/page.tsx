// app/solutions/reporting-automation/for-retail/page.tsx
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
import { reportingAutomationForRetail } from '@/content/Solutions/reporting-automation-for-retail';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: reportingAutomationForRetail.titleTag,
  description: reportingAutomationForRetail.metaDescription,
  alternates: {
    canonical: canonicalUrl(reportingAutomationForRetail.url),
  },
  openGraph: {
    title: reportingAutomationForRetail.titleTag,
    description: reportingAutomationForRetail.metaDescription,
    url: canonicalUrl(reportingAutomationForRetail.url),
    type: 'website',
  },
  keywords: reportingAutomationForRetail.primaryKeyword,
};

export default function ForRetailPage() {
  const content = reportingAutomationForRetail;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Reporting Automation for Retail',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'Reporting Automation Development',
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
          href: '#why-retail-need-reporting-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Retail"
            triggerLabel="New Document Request"
            actionLabels={['Generate Reports', 'Create Invoices', 'Manage Client Data']}
            metricValue="1000"
            metricLabel="reports generated automatically each month"
            submetric="20% increase in operational efficiency"
            platform="Reporting Automation + Retail Platform"
            accent="#3B82F6"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Reporting Automation', href: '/solutions/reporting-automation' },
          { label: 'Retail', href: content.url },
        ]}
      />

      <WhySection
        title="Why Retail Needs Reporting Automation"
        content={[content.sections['Why Retail Needs Reporting Automation']]}
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
        title="What This Is and Isn't"
        content={[content.sections['What This Is and Isn\'t']]}
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
        subtitle="Common questions about reporting automation for retail"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where reporting automation pays off for retail."
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