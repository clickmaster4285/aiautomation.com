// app/solutions/ai-chatbots/with-salesforce/page.tsx
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
import { aiChatbotsWithSalesforce } from '@/content/Solutions';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiChatbotsWithSalesforce.titleTag,
  description: aiChatbotsWithSalesforce.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiChatbotsWithSalesforce.url),
  },
  openGraph: {
    title: aiChatbotsWithSalesforce.titleTag,
    description: aiChatbotsWithSalesforce.metaDescription,
    url: canonicalUrl(aiChatbotsWithSalesforce.url),
    type: 'website',
  },
  keywords: aiChatbotsWithSalesforce.primaryKeyword,
};

export default function SalesforceChatbotPage() {
  const content = aiChatbotsWithSalesforce;

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
            name: 'AI Chatbots with Salesforce',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'AI Chatbot Development',
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
          href: '#why-salesforce',
        }}
        visual={<ChatbotHeroMockup platform="salesforce" />}
        stats={content.stats.slice(0, 3)}
        // Breadcrumb for the subpage
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'AI Chatbots', href: '/solutions/ai-chatbots' },
          { label: 'With Salesforce', href: '/solutions/ai-chatbots/with-salesforce' },
        ]}
      />

      <ContentSection
        id="why-salesforce"
        title="Why Salesforce for AI Chatbots"
        // Subtitle removed as requested
        content={[content.sections['Why Salesforce for AI Chatbots']]}
        image="/images/salesforce-platform.png"
        imageAlt="Salesforce platform"
        imageRight
        stats={[
          { label: 'Enterprise Grade', value: '✓' },
          { label: 'Native CRM Integration', value: '✓' },
          { label: 'Scalable', value: '✓' },
        ]}
      />

      <FeatureGrid
        title="What We Build"
        subtitle="Comprehensive chatbot solutions on Salesforce"
        features={featuresWithStringIcons}
        columns={3}
        background="paper"
      />

      <ContentSection
        id="production-build"
        title="What a Production Build Includes"
        // Subtitle removed
        content={[content.sections['What a Production Build Includes']]}
        image="/images/production-build.png"
        imageAlt="Production build process"
        cta={{
          text: 'See Our Process',
          href: '#how-we-work',
        }}
        background="paper"
      />

      <ContentSection
        id="workflows"
        title="Typical Workflows on Salesforce"
        // Subtitle removed
        content={[content.sections['Typical Workflows on Salesforce']]}
        image="/images/salesforce-workflow.png"
        imageAlt="Salesforce workflow pattern"
        imageRight
      />

      <ProcessSteps
        title="How We Work"
        subtitle="Our proven methodology for building chatbots on Salesforce"
        steps={content.processSteps}
        background="muted"
      />

      <PlatformComparison
        title="Is Salesforce Right for You?"
        subtitle="We'll tell you honestly if Salesforce is the right platform for your chatbot needs."
        bestFor={content.bestFor}
        considerAlternatives={content.considerAlternatives}
      />

      <StatsSection
        title="Why Choose Clickmasters for Salesforce Chatbots"
        stats={content.stats}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about chatbots on Salesforce"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit we'll scope the build and confirm the platform fit honestly."
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