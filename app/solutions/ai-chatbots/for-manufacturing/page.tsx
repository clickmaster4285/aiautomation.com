// app/solutions/ai-chatbots/for-manufacturing/page.tsx
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
import { aiChatbotsForManufacturing } from '@/content/Solutions';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiChatbotsForManufacturing.titleTag,
  description: aiChatbotsForManufacturing.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiChatbotsForManufacturing.url),
  },
  openGraph: {
    title: aiChatbotsForManufacturing.titleTag,
    description: aiChatbotsForManufacturing.metaDescription,
    url: canonicalUrl(aiChatbotsForManufacturing.url),
    type: 'website',
  },
  keywords: aiChatbotsForManufacturing.primaryKeyword,
};

export default function ForManufacturingPage() {
  const content = aiChatbotsForManufacturing;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Chatbots for Manufacturing',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
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
          href: content.bookingLink,
        }}
        secondaryCta={{
          text: 'Learn More',
          href: '#why-manufacturing-need-ai-chatbots',
        }}
        visual={
                              <AutomationHeroMockup
                                industry="Manufacturing"
                                triggerLabel="New Client Inquiry"
                                actionLabels={['Send Intake Form', 'Schedule Call', 'Add to CRM']}
                                metricValue="1,247"
                                metricLabel="inquiries handled automatically this week"
                                submetric="94% resolved without staff involvement"
                                platform="QuickBooks + HubSpot"
                                accent="#F97316"
                              />
                            }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Chatbots', href: '/solutions/ai-chatbots' },
          { label: 'Manufacturing', href: content.url },
        ]}
      />

      <WhySection
        title="Why Manufacturing Needs AI Chatbots"
        content={[content.sections['Why Manufacturing Needs AI Chatbots']]}
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
        subtitle="Common questions about AI chatbots for manufacturing"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where chatbot pays off for manufacturing."
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