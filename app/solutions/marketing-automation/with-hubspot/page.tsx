// app/solutions/marketing-automation/with-hubspot/page.tsx
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
import { marketingAutomationWithHubspot } from '@/content/Solutions';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: marketingAutomationWithHubspot.titleTag,
  description: marketingAutomationWithHubspot.metaDescription,
  alternates: {
    canonical: canonicalUrl(marketingAutomationWithHubspot.url),
  },
  openGraph: {
    title: marketingAutomationWithHubspot.titleTag,
    description: marketingAutomationWithHubspot.metaDescription,
    url: canonicalUrl(marketingAutomationWithHubspot.url),
    type: 'website',
  },
  keywords: marketingAutomationWithHubspot.primaryKeyword,
};

export default function HubspotMarketingPage() {
  const content = marketingAutomationWithHubspot;

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
            name: 'AI Marketing Automation with HubSpot',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'Marketing Automation',
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
          { label: 'Marketing Automation', href: '/solutions/marketing-automation' },
          { label: 'With hubspot', href: '/solutions/marketing-automation/with-hubspot' },
        ]}
      />

    
      <ContentSection
        id="why-hubspot"
        title="Why HubSpot for AI Marketing Automation"
     
        content={[content.sections['Why HubSpot for AI Marketing Automation']]}
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
        subtitle="Comprehensive marketing automation solutions on HubSpot"
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
        subtitle="Our proven methodology for building marketing automation on HubSpot"
        steps={content.processSteps}
        background="muted"
      />

      <PlatformComparison
        title="Is HubSpot Right for You?"
        subtitle="We'll tell you honestly if HubSpot is the right platform for your marketing automation needs."
        bestFor={content.bestFor}
        considerAlternatives={content.considerAlternatives}
      />

      <StatsSection
        title="Why Choose Clickmasters for HubSpot Marketing Automation"
        stats={content.stats}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about marketing automation on HubSpot"
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