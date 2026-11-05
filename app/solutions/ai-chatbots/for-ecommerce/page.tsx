// app/solutions/ai-chatbots/for-ecommerce/page.tsx
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
import { aiChatbotsForEcommerce } from '@/content/Solutions';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiChatbotsForEcommerce.titleTag,
  description: aiChatbotsForEcommerce.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiChatbotsForEcommerce.url),
  },
  openGraph: {
    title: aiChatbotsForEcommerce.titleTag,
    description: aiChatbotsForEcommerce.metaDescription,
    url: canonicalUrl(aiChatbotsForEcommerce.url),
    type: 'website',
  },
  keywords: aiChatbotsForEcommerce.primaryKeyword,
};

export default function ForEcommercePage() {
  const content = aiChatbotsForEcommerce;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Chatbots for E-commerce',
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
          href: '#why-ecommerce-need-ai-chatbots',
        }}
       visual={
                       <AutomationHeroMockup
                         industry="E-commerce"
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
          { label: 'E-commerce', href: content.url },
        ]}
      />

      <WhySection
        title="Why E-commerce Need AI Chatbots"
        content={[content.sections['Why E-commerce Need AI Chatbots']]}
      />

      <ProblemsSection
        title="The Problems This Solves for E-commerce"
        content={[content.sections['The Problems This Solves for E-commerce']]}
      />

      <AutomationSection
        title="What We Automate for E-commerce"
        content={[content.sections['What We Automate for E-commerce']]}
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
        title="Built for E-commerce's Realities"
        content={[content.sections['Built for E-commerce\'s Realities']]}
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
        subtitle="Common questions about AI chatbots for e-commerce"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where chatbot pays off for e-commerce."
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