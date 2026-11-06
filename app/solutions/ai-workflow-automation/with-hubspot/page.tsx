// app/solutions/ai-workflow-automation/with-hubspot/page.tsx
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
import { aiWorkflowAutomationWithHubspot } from '@/content/Solutions';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiWorkflowAutomationWithHubspot.titleTag,
  description: aiWorkflowAutomationWithHubspot.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiWorkflowAutomationWithHubspot.url),
  },
  openGraph: {
    title: aiWorkflowAutomationWithHubspot.titleTag,
    description: aiWorkflowAutomationWithHubspot.metaDescription,
    url: canonicalUrl(aiWorkflowAutomationWithHubspot.url),
    type: 'website',
  },
  keywords: aiWorkflowAutomationWithHubspot.primaryKeyword,
};

export default function HubspotWorkflowPage() {
  const content = aiWorkflowAutomationWithHubspot;

  // Map features with string icons - FeatureGrid handles the mapping
  const featuresWithStringIcons = content.features.map(feature => ({
    ...feature,
    icon: feature.icon,
  }));

  return (
    <PageWrapper>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Workflow Automation with HubSpot',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'AI Workflow Automation',
            areaServed: 'Global',
          }),
        }}
      />

      {/* HERO SECTION */}
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
          { label: 'AI workflow automation', href: '/solutions/ai-workflow-automation' },
          { label: 'With hubspot', href: '/solutions/ai-workflow-automation/with-hubspot' },
        ]}
      />


      {/* WHY HUBSPOT SECTION */}
      <ContentSection
        id="why-hubspot"
        title="Why HubSpot for AI Workflow Automation"
     
        content={[content.sections['Why HubSpot for AI Workflow Automation']]}
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

      {/* WHAT WE BUILD - FEATURES */}
      <FeatureGrid
        title="What We Build"
        subtitle="Comprehensive workflow automation solutions on HubSpot"
        eyebrow="Capabilities"
        features={featuresWithStringIcons}
        columns={3}
        background="dark"
      />

      {/* PRODUCTION BUILD SECTION */}
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

      {/* TYPICAL WORKFLOWS SECTION */}
      <ContentSection
        id="workflows"
        title="Typical Workflows on HubSpot"
      
        content={[content.sections['Typical Workflows on HubSpot']]}
      />

      {/* HOW WE WORK   sub- PROCESS STEPS */}
      <ProcessSteps
        title="How We Work"
        subtitle="Our proven methodology for building workflows on HubSpot"
        steps={content.processSteps}
        background="muted"
      />

      {/* PLATFORM COMPARISON */}
      <PlatformComparison
        title="Is HubSpot Right for You?"
        subtitle="We'll tell you honestly if HubSpot is the right platform for your workflow automation needs."
        bestFor={content.bestFor}
        considerAlternatives={content.considerAlternatives}
      />

      {/* STATS SECTION */}
      <StatsSection
        title="Why Choose Clickmasters for HubSpot Workflow Automation"
        stats={content.stats}
      />

      {/* FAQ SECTION */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about workflow automation on HubSpot"
        eyebrow="FAQ"
        faqs={content.faqQuestions}
      />

      {/* RELATED SOLUTIONS */}
      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      {/* CTA SECTION */}
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