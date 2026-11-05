// app/solutions/ai-workflow-automation/with-n8n/page.tsx
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
import { aiWorkflowAutomationWithN8n } from '@/content/Solutions';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiWorkflowAutomationWithN8n.titleTag,
  description: aiWorkflowAutomationWithN8n.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiWorkflowAutomationWithN8n.url),
  },
  openGraph: {
    title: aiWorkflowAutomationWithN8n.titleTag,
    description: aiWorkflowAutomationWithN8n.metaDescription,
    url: canonicalUrl(aiWorkflowAutomationWithN8n.url),
    type: 'website',
  },
  keywords: aiWorkflowAutomationWithN8n.primaryKeyword,
};

export default function N8nWorkflowPage() {
  const content = aiWorkflowAutomationWithN8n;

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
            name: 'AI Workflow Automation with n8n',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'AI Workflow Automation',
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
          href: '#why-n8n',
        }}
       visual={<ChatbotHeroMockup platform="n8n" />}
        stats={content.stats.slice(0, 3)}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'AI workflow automation', href: '/solutions/ai-workflow-automation' },
          { label: 'With n8n', href: '/solutions/ai-workflow-automation/with-n8n' },
        ]}
      />

    

      <ContentSection
        id="why-n8n"
        title="Why n8n for AI Workflow Automation"
      
        content={[content.sections['Why n8n for AI Workflow Automation']]}
        stats={[
          { label: 'Self-Hosted', value: '✓' },
          { label: 'No Per-Task Fees', value: '✓' },
          { label: 'Deep AI/LLM Support', value: '✓' },
        ]}
        cta={{
          text: 'See Our Process',
          href: '#how-we-work',
        }}
        background="muted"
      />

      <FeatureGrid
        title="What We Build"
        subtitle="Comprehensive workflow automation solutions on n8n"
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
        title="Typical Workflows on n8n"
     
        content={[content.sections['Typical Workflows on n8n']]}
      />

      <ProcessSteps
        title="How We Work"
        subtitle="Our proven methodology for building workflows on n8n"
        steps={content.processSteps}
        background="muted"
      />

      <PlatformComparison
        title="Is n8n Right for You?"
        subtitle="We'll tell you honestly if n8n is the right platform for your workflow automation needs."
        bestFor={content.bestFor}
        considerAlternatives={content.considerAlternatives}
      />

      <StatsSection
        title="Why Choose Clickmasters for n8n Workflow Automation"
        stats={content.stats}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about workflow automation on n8n"
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