// app/solutions/ai-chatbots/with-zapier/page.tsx
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
import { aiChatbotsWithZapier } from '@/content/Solutions';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiChatbotsWithZapier.titleTag,
  description: aiChatbotsWithZapier.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiChatbotsWithZapier.url),
  },
  openGraph: {
    title: aiChatbotsWithZapier.titleTag,
    description: aiChatbotsWithZapier.metaDescription,
    url: canonicalUrl(aiChatbotsWithZapier.url),
    type: 'website',
  },
  keywords: aiChatbotsWithZapier.primaryKeyword,
};

export default function ZapierChatbotPage() {
  const content = aiChatbotsWithZapier;

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
            name: 'AI Chatbots with Zapier',
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
          href: '#why-zapier',
        }}
        visual={<ChatbotHeroMockup platform="zapier" />}
        stats={content.stats.slice(0, 3)}
   breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'AI Chatbots', href: '/solutions/ai-chatbots' },
          { label: 'With Zapier', href: '/solutions/ai-chatbots/with-zapier' },
        ]}
      />

    

      <ContentSection
        id="why-zapier"
        title="Why Zapier for AI Chatbots"
     
        content={[content.sections['Why Zapier for AI Chatbots']]}
        image="/images/zapier-platform.png"
        imageAlt="Zapier platform"
        imageRight
        stats={[
          { label: 'Apps Integrated', value: '6,000+' },
          { label: 'Fastest Time to Build', value: 'Hours' },
          { label: 'Self-Service Friendly', value: '✓' },
        ]}
      />

      <FeatureGrid
        title="What We Build"
        subtitle="Comprehensive chatbot solutions on Zapier"
        features={featuresWithStringIcons}
        columns={3}
        background="paper"
      />

      <ContentSection
        id="production-build"
        title="What a Production Build Includes"
     
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
        title="Typical Workflows on Zapier"
    
        content={[content.sections['Typical Workflows on Zapier']]}
        image="/images/zapier-workflow.png"
        imageAlt="Zapier workflow pattern"
        imageRight
      />

      <ProcessSteps
        title="How We Work"
        subtitle="Our proven methodology for building chatbots on Zapier"
        steps={content.processSteps}
        background="muted"
      />

      <PlatformComparison
        title="Is Zapier Right for You?"
        subtitle="We'll tell you honestly if Zapier is the right platform for your chatbot needs."
        bestFor={content.bestFor}
        considerAlternatives={content.considerAlternatives}
      />

      <StatsSection
        title="Why Choose Clickmasters for Zapier Chatbots"
        stats={content.stats}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about chatbots on Zapier"
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