// app/solutions/ai-workflow-automation/for-saas/page.tsx
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
import { aiWorkflowAutomationForSaaS } from '@/content/Solutions/ai-workflow-automation-for-saas';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiWorkflowAutomationForSaaS.titleTag,
  description: aiWorkflowAutomationForSaaS.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiWorkflowAutomationForSaaS.url),
  },
  openGraph: {
    title: aiWorkflowAutomationForSaaS.titleTag,
    description: aiWorkflowAutomationForSaaS.metaDescription,
    url: canonicalUrl(aiWorkflowAutomationForSaaS.url),
    type: 'website',
  },
  keywords: aiWorkflowAutomationForSaaS.primaryKeyword,
};

export default function ForSaaSPage() {
  const content = aiWorkflowAutomationForSaaS;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Workflow Automation for SaaS Companies',
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
          href: '#why-saas-companies-need-ai-workflow-automation',
        }}
         visual={
                                            <AutomationHeroMockup
                                              industry="SaaS"
                                              triggerLabel="New Customer Inquiry"
                                              actionLabels={['Gather Requirements', 'Schedule Meeting', 'Submit Proposal']}
                                              metricValue="3,000"
                                              metricLabel="client inquiries handled automatically this week"
                                              submetric="85% improved response time"
                                              platform="CRM + Logistics Platform"
                                              accent="#F97316"
                                            />
                                          }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Workflow Automation', href: '/solutions/ai-workflow-automation' },
          { label: 'SaaS', href: content.url },
        ]}
      />

      <WhySection
        title="Why SaaS Companies Need AI Workflow Automation"
        content={[content.sections['Why SaaS Companies Need AI Workflow Automation']]}
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
        title="What This Isand Isn't"
        content={[content.sections['What This Isand Isn\'t']]}
      />

      <RealitiesSection
        title="Built for SaaS Companies' Realities"
        content={[content.sections['Built for SaaS Companies\'s Realities']]}
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
        subtitle="Common questions about AI workflow automation for SaaS companies"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where workflow automation pays off for SaaS companies."
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