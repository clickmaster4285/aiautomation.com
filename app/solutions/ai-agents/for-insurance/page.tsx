// app/solutions/ai-agents/for-insurance/page.tsx
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
import { aiAgentsForInsurance } from '@/content/Solutions';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';
export const metadata: Metadata = {
  title: aiAgentsForInsurance.titleTag,
  description: aiAgentsForInsurance.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiAgentsForInsurance.url),
  },
  openGraph: {
    title: aiAgentsForInsurance.titleTag,
    description: aiAgentsForInsurance.metaDescription,
    url: canonicalUrl(aiAgentsForInsurance.url),
    type: 'website',
  },
  keywords: aiAgentsForInsurance.primaryKeyword,
};

export default function ForInsurancePage() {
  const content = aiAgentsForInsurance;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Agent Development for Insurance Agencies',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
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
          href: '#why-insurance-agencies-need-ai-agent-development',
        }}
        visual={
                              <AutomationHeroMockup
                                industry="Insurance"
                                triggerLabel="New Lead Inquiry"
                                actionLabels={['Send Welcome Email', 'Schedule Consultation', 'Provide Quote']}
                                metricValue="2,500"
                                metricLabel="inquiries handled automatically this week"
                                submetric="85% resolved without staff involvement"
                                platform="CRM + Marketing Automation"
                                accent="#F97316"
                              />
                            }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Agents', href: '/solutions/ai-agents' },
          { label: 'Insurance', href: content.url },
        ]}
      />

      <WhySection
        title="Why Insurance Agencies Need AI Agent Development"
        content={[content.sections['Why Insurance Agencies Need AI Agent Development']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Insurance Agencies"
        content={[content.sections['The Problems This Solves for Insurance Agencies']]}
      />

      <AutomationSection
        title="What We Automate for Insurance Agencies"
        content={[content.sections['What We Automate for Insurance Agencies']]}
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
        title="What This Isand Isn't"
        content={[content.sections['What This Isand Isn\'t']]}
      />

      <RealitiesSection
        title="Built for Insurance Agencies' Realities"
        content={[content.sections['Built for Insurance Agencies\' Realities']]}
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
        subtitle="Common questions about AI agents for insurance"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where AI agent pays off for insurance agencies."
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