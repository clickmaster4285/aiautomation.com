// app/solutions/ai-workflow-automation/for-restaurants/page.tsx
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
import { aiWorkflowAutomationForRestaurants } from '@/content/Solutions/ai-workflow-automation-for-restaurants';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiWorkflowAutomationForRestaurants.titleTag,
  description: aiWorkflowAutomationForRestaurants.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiWorkflowAutomationForRestaurants.url),
  },
  openGraph: {
    title: aiWorkflowAutomationForRestaurants.titleTag,
    description: aiWorkflowAutomationForRestaurants.metaDescription,
    url: canonicalUrl(aiWorkflowAutomationForRestaurants.url),
    type: 'website',
  },
  keywords: aiWorkflowAutomationForRestaurants.primaryKeyword,
};

export default function ForRestaurantsPage() {
  const content = aiWorkflowAutomationForRestaurants;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Workflow Automation for Restaurants & Hospitality',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
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
          href: '#why-restaurants-hospitality-need-ai-workflow-automation',
        }}
        visual={
                                            <AutomationHeroMockup
                                              industry="Restaurants & Hospitality"
                                              triggerLabel="New Customer Order"
                                              actionLabels={['Gather Requirements', 'Schedule Meeting', 'Submit Proposal']}
                                              metricValue="10,000"
                                              metricLabel="customer orders processed automatically this week"
                                              submetric="75% improved fulfillment time"
                                              platform="CRM + Restaurant Platform"
                                              accent="#F59E0B"
                                            />
                                          }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Workflow Automation', href: '/solutions/ai-workflow-automation' },
          { label: 'Restaurants', href: content.url },
        ]}
      />

      <WhySection
        title="Why Restaurants & Hospitality Need AI Workflow Automation"
        content={[content.sections['Why Restaurants & Hospitality Need AI Workflow Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Restaurants & Hospitality"
        content={[content.sections['The Problems This Solves for Restaurants & Hospitality']]}
      />

      <AutomationSection
        title="What We Automate for Restaurants & Hospitality"
        content={[content.sections['What We Automate for Restaurants & Hospitality']]}
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
        title="Built for Restaurants & Hospitality's Realities"
        content={[content.sections['Built for Restaurants & Hospitality\'s Realities']]}
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
        subtitle="Common questions about AI workflow automation for restaurants & hospitality"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where workflow automation pays off for restaurants & hospitality."
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