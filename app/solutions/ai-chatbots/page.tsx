// app/solutions/ai-chatbots/page.tsx
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
import { aiChatbots } from '@/content/Solutions/ai-chatbots';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: aiChatbots.titleTag,
  description: aiChatbots.metaDescription,
  alternates: {
    canonical: aiChatbots.url,
  },
  openGraph: {
    title: aiChatbots.titleTag,
    description: aiChatbots.metaDescription,
    url: aiChatbots.url,
    type: 'website',
  },
  keywords: aiChatbots.primaryKeyword,
};

export default function AIChatbotsPage() {
  const content = aiChatbots;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Chatbots',
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
          href: content.bookingLink,
        }}
        secondaryCta={{
          text: 'Learn More',
          href: '#why-ai-chatbots',
        }}
        visual={
          <AutomationHeroMockup
            industry="Chatbots"
            triggerLabel="New Customer Message"
            actionLabels={['Understand Intent', 'Answer Instantly', 'Route & Update CRM']}
            metricValue="1,800"
            metricLabel="customer conversations handled automatically this week"
            submetric="94% resolved without staff involvement"
            platform="AI Chatbot + CRM"
            accent="#F97316"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Chatbots', href: content.url },
        ]}
      />

      <WhySection
        title="Why Businesses Need AI Chatbots"
        content={content.sections['Why Businesses Need AI Chatbots']}
      />

      <ProblemsSection
        title="The Problems This Solves"
        content={content.sections['The Problems This Solves']}
      />

      <AutomationSection
        title="What We Automate"
        content={content.sections['What We Automate']}
      />

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
        subtitle="Common questions about AI chatbots"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit — 30 minutes, no obligation, and an honest read on where AI chatbots pay off for your business."
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