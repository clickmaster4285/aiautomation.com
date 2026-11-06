// app/solutions/ai-agents/for-saas/page.tsx
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
import { aiAgentsForSaaS } from '@/content/Solutions';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiAgentsForSaaS.titleTag,
  description: aiAgentsForSaaS.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiAgentsForSaaS.url),
  },
  openGraph: {
    title: aiAgentsForSaaS.titleTag,
    description: aiAgentsForSaaS.metaDescription,
    url: canonicalUrl(aiAgentsForSaaS.url),
    type: 'website',
  },
  keywords: aiAgentsForSaaS.primaryKeyword,
};

export default function ForSaaSPage() {
  const content = aiAgentsForSaaS;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Agent Development for SaaS Companies',
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
          href: '#why-saas-companies-need-ai-agent-development',
        }}
        visual={
                              <AutomationHeroMockup
                                industry="SaaS Companies"
                                triggerLabel="New Lead Inquiry"
                                actionLabels={['Send Product Details', 'Schedule Demo', 'Provide Case Studies']}
                                metricValue="1,200"
                                metricLabel="leads engaged automatically this week"
                                submetric="85% improved conversion rate"
                                platform="CRM + Marketing Automation"
                                accent="#F97316"
                              />
                            }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Agents', href: '/solutions/ai-agents' },
          { label: 'SaaS Companies', href: content.url },
        ]}
      />

      <WhySection
        title="Why SaaS Companies Need AI Agent Development"
        content={[content.sections['Why SaaS Companies Need AI Agent Development']]}
      />

      <ProblemsSection
        title="The Problems This Solves for SaaS Companies"
        content={[content.sections['The Problems This Solves for SaaS Companies']]}
      />

      <AutomationSection
        title="What We Automate for SaaS Companies"
        content={[content.sections['What We Automate for SaaS Companies']]}
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
        title="Built for SaaS Companies' Realities"
        content={[content.sections['Built for SaaS Companies\' Realities']]}
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
        subtitle="Common questions about AI agents for SaaS companies"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where AI agent pays off for SaaS companies."
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