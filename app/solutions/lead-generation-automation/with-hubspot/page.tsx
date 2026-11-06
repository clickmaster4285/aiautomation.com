// app/solutions/lead-generation-automation/with-hubspot/page.tsx
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
import { BackButton } from '@/components/ui/backButton';
import { ChatbotHeroMockup } from '@/components/solutions/sections/ChatbotHeroMockup';
import { leadGenerationAutomationWithHubspot } from '@/content/Solutions';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: leadGenerationAutomationWithHubspot.titleTag,
  description: leadGenerationAutomationWithHubspot.metaDescription,
  alternates: {
    canonical: canonicalUrl(leadGenerationAutomationWithHubspot.url),
  },
  openGraph: {
    title: leadGenerationAutomationWithHubspot.titleTag,
    description: leadGenerationAutomationWithHubspot.metaDescription,
    url: canonicalUrl(leadGenerationAutomationWithHubspot.url),
    type: 'website',
  },
  keywords: leadGenerationAutomationWithHubspot.primaryKeyword,
};

export default function HubspotLeadGenPage() {
  const content = leadGenerationAutomationWithHubspot;

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
            name: 'Lead Generation Automation with HubSpot',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'Lead Generation Automation',
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
          href: '#why-hubspot',
        }}
        visual={<ChatbotHeroMockup platform="hubspot" />}
        stats={content.stats.slice(0, 3)}
         breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Lead generation automation', href: '/solutions/lead-generation-automation' },
          { label: 'With hubspot', href: '/solutions/lead-generation-automation/with-hubspot' },
        ]}
      />


      <ContentSection
        id="why-hubspot"
        title="Why HubSpot for Lead Generation Automation"
    
        content={[content.sections['Why HubSpot for Lead Generation Automation']]}
        stats={[
          { label: 'Native CRM', value: '✓' },
          { label: 'AI Integration', value: '✓' },
          { label: 'Scalable', value: '✓' },
        ]}
        cta={{
          text: 'See Our Process',
          href: '#how-we-work',
        }}
        background="muted"
      />

      <FeatureGrid
        title="What We Build"
        subtitle="Comprehensive lead generation solutions on HubSpot"
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
        title="Typical Workflows on HubSpot"
   
        content={[content.sections['Typical Workflows on HubSpot']]}
      />

      <ProcessSteps
        title="How We Work"
        subtitle="Our proven methodology for building lead generation on HubSpot"
        steps={content.processSteps}
        background="muted"
      />

      <PlatformComparison
        title="Is HubSpot Right for You?"
        subtitle="We'll tell you honestly if HubSpot is the right platform for your lead generation needs."
        bestFor={content.bestFor}
        considerAlternatives={content.considerAlternatives}
      />

      <StatsSection
        title="Why Choose Clickmasters for HubSpot Lead Generation"
        stats={content.stats}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about lead generation on HubSpot"
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
        subtitle="Book a free automation audit. We'll scope the build and confirm the platform fit honestly."
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