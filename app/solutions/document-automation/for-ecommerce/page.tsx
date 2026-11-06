// app/solutions/document-automation/for-ecommerce/page.tsx
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
import { documentAutomationForEcommerce } from '@/content/Solutions/document-automation-for-ecommerce';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: documentAutomationForEcommerce.titleTag,
  description: documentAutomationForEcommerce.metaDescription,
  alternates: {
    canonical: canonicalUrl(documentAutomationForEcommerce.url),
  },
  openGraph: {
    title: documentAutomationForEcommerce.titleTag,
    description: documentAutomationForEcommerce.metaDescription,
    url: canonicalUrl(documentAutomationForEcommerce.url),
    type: 'website',
  },
  keywords: documentAutomationForEcommerce.primaryKeyword,
};

export default function ForEcommercePage() {
  const content = documentAutomationForEcommerce;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Document & Data Automation for E-commerce',
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
          href: '#why-ecommerce-need-document-data-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="E-commerce"
            triggerLabel="New Document Request"
            actionLabels={['Generate Invoices', 'Create Reports', 'Manage Orders']}
            metricValue="4000"
            metricLabel="documents processed automatically each month"
            submetric="80% reduction in processing time"
            platform="Document & Data Automation + E-commerce Platform"
            accent="#8B5CF6"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Document & Data Automation', href: '/solutions/document-automation' },
          { label: 'E-commerce', href: content.url },
        ]}
      />

      <WhySection
        title="Why E-commerce Needs Document & Data Automation"
        content={[content.sections['Why E-commerce Needs Document & Data Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for E-commerce"
        content={[content.sections['The Problems This Solves for E-commerce']]}
      />

      <AutomationSection
        title="What We Automate for E-commerce"
        content={[content.sections['What We Automate for E-commerce']]}
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
        title="Built for E-commerce's Realities"
        content={[content.sections['Built for E-commerce\'s Realities']]}
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
        subtitle="Common questions about document automation for e-commerce"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where document automation pays off for e-commerce."
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