// app/solutions/crm-automation/with-airtable/page.tsx
import { Metadata } from 'next';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { FeatureGrid } from '@/components/solutions/sections/FeatureGrid';
import { ContentSection } from '@/components/solutions/sections/Content';
import { ProcessSteps } from '@/components/solutions/sections/ProcessSteps';
import { FAQSection } from '@/components/solutions/sections/FAQ';
import { CTASection } from '@/components/solutions/sections/CTA';
import { PlatformComparison } from '@/components/solutions/sections/PlatformComparison';
import { RelatedSolutions } from '@/components/solutions/sections/RelatedSolutions';
import { StatsSection } from '@/components/solutions/sections/Stats';
import { ChatbotHeroMockup } from '@/components/solutions/sections/ChatbotHeroMockup';
import { crmAutomationWithAirtable } from '@/content/Solutions';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: crmAutomationWithAirtable.titleTag,
  description: crmAutomationWithAirtable.metaDescription,
  alternates: {
    canonical: canonicalUrl(crmAutomationWithAirtable.url),
  },
  openGraph: {
    title: crmAutomationWithAirtable.titleTag,
    description: crmAutomationWithAirtable.metaDescription,
    url: canonicalUrl(crmAutomationWithAirtable.url),
    type: 'website',
  },
  keywords: crmAutomationWithAirtable.primaryKeyword,
};

export default function AirtableCRMPage() {
  const content = crmAutomationWithAirtable;

  const featuresWithStringIcons = content.features.map(feature => ({
    ...feature,
    icon: feature.icon,
  }));

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'CRM Automation with Airtable',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'CRM Automation',
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
          href: '/free-automation-audit',
        }}
        secondaryCta={{
          text: 'Learn More',
          href: '#why-airtable',
        }}
        visual={<ChatbotHeroMockup platform="airtable" />}
        stats={content.stats.slice(0, 3)}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Crm automation', href: '/solutions/crm-automation' },
          { label: 'With airtable', href: '/solutions/crm-automation/with-airtable' },
        ]}
      />

    

      <ContentSection
        id="why-airtable"
        title="Why Airtable for CRM Automation"
      
        content={[content.sections['Why Airtable for CRM Automation']]}
        stats={[
          { label: 'Flexible', value: '✓' },
          { label: 'No Custom Development', value: '✓' },
          { label: 'Ops Teams', value: '✓' },
        ]}
        cta={{
          text: 'See Our Process',
          href: '#how-we-work',
        }}
        background="muted"
      />

      <FeatureGrid
        title="What We Build"
        subtitle="Comprehensive CRM automation solutions on Airtable"
        eyebrow="Capabilities"
        features={featuresWithStringIcons}
        columns={3}
        background="dark"
      />

      <ContentSection
        id="production-build"
        title="What a Production Build Includes"
     
        content={[content.sections['What a Production Build Includes']]}
        cta={{
          text: 'See Our Process',
          href: '#how-we-work',
        }}
        background="muted"
      />

      <ContentSection
        id="workflows"
        title="Typical Workflows on Airtable"
     
        content={[content.sections['Typical Workflows on Airtable']]}
      />

      <ProcessSteps
        title="How We Work"
        subtitle="Our proven methodology for building CRM automation on Airtable"
        steps={content.processSteps}
        background="muted"
      />

      <PlatformComparison
        title="Is Airtable Right for You?"
        subtitle="We'll tell you honestly if Airtable is the right platform for your CRM automation needs."
        bestFor={content.bestFor}
        considerAlternatives={content.considerAlternatives}
      />

      <StatsSection
        title="Why Choose Clickmasters for Airtable CRM Automation"
        stats={content.stats}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about CRM automation on Airtable"
        eyebrow="FAQ"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit  we'll scope the build and confirm the platform fit honestly."
        primaryCta={{
          text: 'Book a Free Automation Audit',
          href: content.bookingLink,
        }}
        secondaryCta={{
          text: 'View All Solutions',
          href: '/solutions',
        }}
        background="gradient"
      />
    </PageWrapper>
  );
}