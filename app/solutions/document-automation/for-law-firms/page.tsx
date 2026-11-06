// app/solutions/document-automation/for-law-firms/page.tsx
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
import { documentAutomationForLawFirms } from '@/content/Solutions/document-automation-for-law-firms';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: documentAutomationForLawFirms.titleTag,
  description: documentAutomationForLawFirms.metaDescription,
  alternates: {
    canonical: canonicalUrl(documentAutomationForLawFirms.url),
  },
  openGraph: {
    title: documentAutomationForLawFirms.titleTag,
    description: documentAutomationForLawFirms.metaDescription,
    url: canonicalUrl(documentAutomationForLawFirms.url),
    type: 'website',
  },
  keywords: documentAutomationForLawFirms.primaryKeyword,
};

export default function ForLawFirmsPage() {
  const content = documentAutomationForLawFirms;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Document & Data Automation for Law Firms',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'Document & Data Automation Development',
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
          href: '#why-law-firms-need-document-data-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Law Firms"
            triggerLabel="New Document Request"
            actionLabels={['Generate Reports', 'Create Legal Documents', 'Manage Case Data']}
            metricValue="1500"
            metricLabel="documents processed automatically each month"
            submetric="80% reduction in processing time"
            platform="Document & Data Automation + Legal Practice Management"
            accent="#8B5CF6"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Document & Data Automation', href: '/solutions/document-automation' },
          { label: 'Law Firms', href: content.url },
        ]}
      />

      <WhySection
        title="Why Law Firms Need Document & Data Automation"
        content={[content.sections['Why Law Firms Need Document & Data Automation']]}
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
        subtitle="Common questions about document automation for law firms"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where document automation pays off for law firms."
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