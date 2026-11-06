// app/solutions/ai-agents/for-manufacturing/page.tsx
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
import { aiAgentsForManufacturing } from '@/content/Solutions';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiAgentsForManufacturing.titleTag,
  description: aiAgentsForManufacturing.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiAgentsForManufacturing.url),
  },
  openGraph: {
    title: aiAgentsForManufacturing.titleTag,
    description: aiAgentsForManufacturing.metaDescription,
    url: canonicalUrl(aiAgentsForManufacturing.url),
    type: 'website',
  },
  keywords: aiAgentsForManufacturing.primaryKeyword,
};

export default function ForManufacturingPage() {
  const content = aiAgentsForManufacturing;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Agent Development for Manufacturing',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'AI Agent Development',
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
          href: '#why-manufacturing-need-ai-agent-development',
        }}
        visual={
                              <AutomationHeroMockup
                                industry="Manufacturing"
                                triggerLabel="New Production Request"
                                actionLabels={['Generate Work Order', 'Allocate Resources', 'Update Schedule']}
                                metricValue="2,500"
                                metricLabel="production requests processed automatically this week"
                                submetric="75% faster order fulfillment"
                                platform="ERP + Manufacturing Execution System"
                                accent="#F97316"
                              />
                            }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Agents', href: '/solutions/ai-agents' },
          { label: 'Manufacturing', href: content.url },
        ]}
      />

      <WhySection
        title="Why Manufacturing Needs AI Agent Development"
        content={[content.sections['Why Manufacturing Needs AI Agent Development']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Manufacturing"
        content={[content.sections['The Problems This Solves for Manufacturing']]}
      />

      <AutomationSection
        title="What We Automate for Manufacturing"
        content={[content.sections['What We Automate for Manufacturing']]}
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
        title="Built for Manufacturing's Realities"
        content={[content.sections['Built for Manufacturing\'s Realities']]}
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
        subtitle="Common questions about AI agents for manufacturing"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where AI agent pays off for manufacturing."
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