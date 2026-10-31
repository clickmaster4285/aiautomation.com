// app/solutions/document-automation/for-construction/page.tsx
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
import { documentAutomationForConstruction } from '@/content/Solutions/document-automation-for-construction';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: documentAutomationForConstruction.titleTag,
  description: documentAutomationForConstruction.metaDescription,
  alternates: {
    canonical: documentAutomationForConstruction.url,
  },
  openGraph: {
    title: documentAutomationForConstruction.titleTag,
    description: documentAutomationForConstruction.metaDescription,
    url: documentAutomationForConstruction.url,
    type: 'website',
  },
  keywords: documentAutomationForConstruction.primaryKeyword,
};

export default function ForConstructionPage() {
  const content = documentAutomationForConstruction;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Document & Data Automation for Construction',
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
          href: '#why-construction-need-document-data-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Construction"
            triggerLabel="New Document Request"
            actionLabels={['Generate Reports', 'Create Drawings', 'Manage Contracts']}
            metricValue="3000"
            metricLabel="documents processed automatically each month"
            submetric="85% reduction in processing time"
            platform="Document & Data Automation + Construction Management Software"
            accent="#F59E0B"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Document & Data Automation', href: '/solutions/document-automation' },
          { label: 'Construction', href: content.url },
        ]}
      />

      <WhySection
        title="Why Construction Need Document & Data Automation"
        content={[content.sections['Why Construction Need Document & Data Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Construction"
        content={[content.sections['The Problems This Solves for Construction']]}
      />

      <AutomationSection
        title="What We Automate for Construction"
        content={[content.sections['What We Automate for Construction']]}
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
        title="Built for Construction's Realities"
        content={[content.sections['Built for Construction\'s Realities']]}
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
        subtitle="Common questions about document automation for construction"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where document automation pays off for construction."
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