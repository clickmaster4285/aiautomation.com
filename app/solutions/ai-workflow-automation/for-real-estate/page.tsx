// app/solutions/ai-workflow-automation/for-real-estate/page.tsx
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
import { aiWorkflowAutomationForRealEstate } from '@/content/Solutions/ai-workflow-automation-for-real-estate';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiWorkflowAutomationForRealEstate.titleTag,
  description: aiWorkflowAutomationForRealEstate.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiWorkflowAutomationForRealEstate.url),
  },
  openGraph: {
    title: aiWorkflowAutomationForRealEstate.titleTag,
    description: aiWorkflowAutomationForRealEstate.metaDescription,
    url: canonicalUrl(aiWorkflowAutomationForRealEstate.url),
    type: 'website',
  },
  keywords: aiWorkflowAutomationForRealEstate.primaryKeyword,
};

export default function ForRealEstatePage() {
  const content = aiWorkflowAutomationForRealEstate;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Workflow Automation for Real Estate',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'AI Workflow Automation Development',
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
          href: '#why-real-estate-need-ai-workflow-automation',
        }}
        visual={
                                            <AutomationHeroMockup
                                              industry="Real Estate"
                                              triggerLabel="New Client Inquiry"
                                              actionLabels={['Gather Requirements', 'Schedule Meeting', 'Submit Proposal']}
                                              metricValue="2,500"
                                              metricLabel="client inquiries handled automatically this week"
                                              submetric="80% improved response time"
                                              platform="CRM + Real Estate Platform"
                                              accent="#10B981"
                                            />
                                          }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Workflow Automation', href: '/solutions/ai-workflow-automation' },
          { label: 'Real Estate', href: content.url },
        ]}
      />

      <WhySection
        title="Why Real Estate Need AI Workflow Automation"
        content={[content.sections['Why Real Estate Need AI Workflow Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Real Estate"
        content={[content.sections['The Problems This Solves for Real Estate']]}
      />

      <AutomationSection
        title="What We Automate for Real Estate"
        content={[content.sections['What We Automate for Real Estate']]}
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
        title="Built for Real Estate's Realities"
        content={[content.sections['Built for Real Estate\'s Realities']]}
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
        subtitle="Common questions about AI workflow automation for real estate"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where workflow automation pays off for real estate."
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