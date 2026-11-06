// app/solutions/ai-voice-agents/for-education/page.tsx
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
import { aiVoiceAgentsForEducation } from '@/content/Solutions';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';
export const metadata: Metadata = {
  title: aiVoiceAgentsForEducation.titleTag,
  description: aiVoiceAgentsForEducation.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiVoiceAgentsForEducation.url),
  },
  openGraph: {
    title: aiVoiceAgentsForEducation.titleTag,
    description: aiVoiceAgentsForEducation.metaDescription,
    url: canonicalUrl(aiVoiceAgentsForEducation.url),
    type: 'website',
  },
  keywords: aiVoiceAgentsForEducation.primaryKeyword,
};

export default function ForEducationPage() {
  const content = aiVoiceAgentsForEducation;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Voice Agents for Education',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
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
          href: '#why-education-need-ai-voice-agents',
        }}
        visual={
                              <AutomationHeroMockup
                                industry="Education"
                                triggerLabel="New Student Inquiry"
                                actionLabels={['Provide Program Information', 'Schedule Campus Tour', 'Send Admission Details']}
                                metricValue="1,500"
                                metricLabel="student inquiries handled automatically this week"
                                submetric="90% improved response time"
                                platform="CRM + Student Information System"
                                accent="#F97316"
                              />
                            }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Voice Agents', href: '/solutions/ai-voice-agents' },
          { label: 'Education', href: content.url },
        ]}
      />

      <WhySection
        title="Why Education Needs AI Voice Agents"
        content={[content.sections['Why Education Needs AI Voice Agents']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Education"
        content={[content.sections['The Problems This Solves for Education']]}
      />

      <AutomationSection
        title="What We Automate for Education"
        content={[content.sections['What We Automate for Education']]}
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
        title="Built for Education's Realities"
        content={[content.sections['Built for Education\'s Realities']]}
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
        subtitle="Common questions about AI voice agents for education"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where voice agent pays off for education."
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