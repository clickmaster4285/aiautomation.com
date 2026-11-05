// app/solutions/document-automation/for-accounting-firms/page.tsx
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { FAQSection } from '@/components/solutions/sections/FAQ';
import { CTASection } from '@/components/solutions/sections/CTA';
import { RelatedSolutions } from '@/components/solutions/sections/RelatedSolutions';
import { documentAutomationForAccountingFirms } from '@/content/Solutions/document-automation-for-accounting-firms';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

const WhySection = dynamic(() => import('@/components/solutions/sections/variants').then((mod) => mod.WhySection));
const ProblemsSection = dynamic(() => import('@/components/solutions/sections/variants').then((mod) => mod.ProblemsSection));
const AutomationSection = dynamic(() => import('@/components/solutions/sections/variants').then((mod) => mod.AutomationSection));
const StartSection = dynamic(() => import('@/components/solutions/sections/variants').then((mod) => mod.StartSection));
const ExampleSection = dynamic(() => import('@/components/solutions/sections/variants').then((mod) => mod.ExampleSection));
const BoundariesSection = dynamic(() => import('@/components/solutions/sections/variants').then((mod) => mod.BoundariesSection));
const RealitiesSection = dynamic(() => import('@/components/solutions/sections/variants').then((mod) => mod.RealitiesSection));
const ReturnSection = dynamic(() => import('@/components/solutions/sections/variants').then((mod) => mod.ReturnSection));
const WhyUsSection = dynamic(() => import('@/components/solutions/sections/variants').then((mod) => mod.WhyUsSection));

export const metadata: Metadata = {
  title: documentAutomationForAccountingFirms.titleTag,
  description: documentAutomationForAccountingFirms.metaDescription,
  alternates: {
    canonical: canonicalUrl(documentAutomationForAccountingFirms.url),
  },
  openGraph: {
    title: documentAutomationForAccountingFirms.titleTag,
    description: documentAutomationForAccountingFirms.metaDescription,
    url: canonicalUrl(documentAutomationForAccountingFirms.url),
    type: 'website',
  },
  keywords: documentAutomationForAccountingFirms.primaryKeyword,
};

export default function ForAccountingFirmsPage() {
  const content = documentAutomationForAccountingFirms;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Document & Data Automation for Accounting Firms',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
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
          href: '#why-accounting-firms-need-document-data-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Accounting Firms"
            triggerLabel="New Document Request"
            actionLabels={['Generate Invoices', 'Create Reports', 'Manage Client Data']}
            metricValue="5000"
            metricLabel="documents processed automatically each month"
            submetric="90% reduction in processing time"
            platform="Document & Data Automation + Accounting Software"
            accent="#3B82F6"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Document & Data Automation', href: '/solutions/document-automation' },
          { label: 'Accounting Firms', href: content.url },
        ]}
      />

      <WhySection
        title="Why Accounting Firms Need Document & Data Automation"
        content={[content.sections['Why Accounting Firms Need Document & Data Automation']]}
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
        title="What This Isand Isn't"
        content={[content.sections['What This Isand Isn\'t']]}
      />

      <RealitiesSection
        title="Built for Accounting Firms's Realities"
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
        subtitle="Common questions about document automation for accounting firms"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where document automation pays off for accounting firms."
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