// app/solutions/customer-support-automation/with-zapier/page.tsx
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
import { customerSupportAutomationWithZapier } from '@/content/Solutions';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: customerSupportAutomationWithZapier.titleTag,
  description: customerSupportAutomationWithZapier.metaDescription,
  alternates: {
    canonical: canonicalUrl(customerSupportAutomationWithZapier.url),
  },
  openGraph: {
    title: customerSupportAutomationWithZapier.titleTag,
    description: customerSupportAutomationWithZapier.metaDescription,
    url: canonicalUrl(customerSupportAutomationWithZapier.url),
    type: 'website',
  },
  keywords: customerSupportAutomationWithZapier.primaryKeyword,
};

export default function ZapierSupportPage() {
  const content = customerSupportAutomationWithZapier;

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
            name: 'Customer Support Automation with Zapier',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'Customer Support Automation',
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
          { label: 'Solutions', href: '/solutions' },
          { label: 'Customer Support Automation', href: '/solutions/customer-support-automation' },
          { label: 'With Zapier', href: '/solutions/customer-support-automation/with-zapier' },
        ]}
      />

     

      <ContentSection
        id="why-zapier"
        title="Why Zapier for Customer Support Automation"
      
        content={[content.sections['Why Zapier for Customer Support Automation']]}
        stats={[
          { label: '6,000+ Apps', value: '✓' },
          { label: 'Fast Deployment', value: '✓' },
          { label: 'Self-Serve Friendly', value: '✓' },
        ]}
        cta={{
          text: 'See Our Process',
          href: '#how-we-work',
        }}
        background="muted"
      />

      <FeatureGrid
        title="What We Build"
        subtitle="Comprehensive support automation solutions on Zapier"
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
        title="Typical Workflows on Zapier"
        subtitle="Patterns that drive results"
        content={[content.sections['Typical Workflows on Zapier']]}
      />

      <ProcessSteps
        title="How We Work"
        subtitle="Our proven methodology for building support automation on Zapier"
        steps={content.processSteps}
        background="muted"
      />

      <PlatformComparison
        title="Is Zapier Right for You?"
        subtitle="We'll tell you honestly if Zapier is the right platform for your support automation needs."
        bestFor={content.bestFor}
        considerAlternatives={content.considerAlternatives}
      />

      <StatsSection
        title="Why Choose Clickmasters for Zapier Support Automation"
        stats={content.stats}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about support automation on Zapier"
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