// app/solutions/ai-voice-agents/page.tsx
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
import { aiVoiceAgents } from '@/content/Solutions/ai-voice-agents';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: aiVoiceAgents.titleTag,
  description: aiVoiceAgents.metaDescription,
  alternates: {
    canonical: aiVoiceAgents.url,
  },
  openGraph: {
    title: aiVoiceAgents.titleTag,
    description: aiVoiceAgents.metaDescription,
    url: aiVoiceAgents.url,
    type: 'website',
  },
  keywords: aiVoiceAgents.primaryKeyword,
};

export default function AIVoiceAgentsPage() {
  const content = aiVoiceAgents;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Voice Agents',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'AI Voice Agent Development',
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
          href: '#why-ai-voice-agents',
        }}
        visual={
          <AutomationHeroMockup
            industry="Voice"
            triggerLabel="Incoming Call"
            actionLabels={['Understand Intent', 'Answer Questions', 'Book & Route']}
            metricValue="4,800"
            metricLabel="inbound calls handled automatically this week"
            submetric="85% faster response time"
            platform="AI Voice Agent + Business Systems"
            accent="#F97316"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Voice Agents', href: content.url },
        ]}
      />

      <WhySection
        title="Why Businesses Need AI Voice Agents"
        content={content.sections['Why Businesses Need AI Voice Agents']}
      />

      <ProblemsSection
        title="The Problems This Solves"
        content={content.sections['The Problems This Solves']}
      />

      {/* <AutomationSection
        title="What We Automate"
        content={content.sections['What We Automate']}
      /> */}

      <StartSection
        title="Where to Start: Your First Automation"
        content={content.sections['Where to Start: Your First Automation']}
      />

      <ExampleSection
        title="A Worked Example"
        content={content.sections['A Worked Example']}
      />

      <BoundariesSection
        title="What This Is and Isn't"
        content={content.sections["What This Is and Isn't"]}
      />

      <RealitiesSection
        title="Built for Real Business Operations"
        content={content.sections['Built for Real Business Operations']}
      />

      <ReturnSection
        title="What the Return Looks Like"
        content={content.sections['What the Return Looks Like']}
        stats={content.stats}
      />

      <WhyUsSection
        title="Why Clickmasters"
        content={content.sections['Why Clickmasters']}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about AI voice agents"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit — 30 minutes, no obligation, and an honest read on where AI voice agents pay off for your business."
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