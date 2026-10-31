// app/solutions/business-process-automation/for-restaurants/page.tsx
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
import { businessProcessAutomationForRestaurants } from '@/content/Solutions/business-process-automation-for-restaurants';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: businessProcessAutomationForRestaurants.titleTag,
  description: businessProcessAutomationForRestaurants.metaDescription,
  alternates: {
    canonical: businessProcessAutomationForRestaurants.url,
  },
  openGraph: {
    title: businessProcessAutomationForRestaurants.titleTag,
    description: businessProcessAutomationForRestaurants.metaDescription,
    url: businessProcessAutomationForRestaurants.url,
    type: 'website',
  },
  keywords: businessProcessAutomationForRestaurants.primaryKeyword,
};

export default function ForRestaurantsPage() {
  const content = businessProcessAutomationForRestaurants;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Process Automation for Restaurants & Hospitality',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'Business Process Automation Development',
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
          href: '#why-restaurants-hospitality-need-business-process-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Restaurants & Hospitality"
            triggerLabel="New Customer Order"
            actionLabels={['Process Order', 'Prepare Food', 'Deliver to Table']}
            metricValue="5,000"
            metricLabel="customer orders managed automatically this month"
            submetric="90% reduced wait times"
            platform="POS + Kitchen Display System"
            accent="#EF4444"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Business Process Automation', href: '/solutions/business-process-automation' },
          { label: 'Restaurants', href: content.url },
        ]}
      />

      <WhySection
        title="Why Restaurants & Hospitality Need Business Process Automation"
        content={[content.sections['Why Restaurants & Hospitality Need Business Process Automation']]}
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
        title="What This Isand Isn't"
        content={[content.sections['What This Isand Isn\'t']]}
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
        subtitle="Common questions about business process automation for restaurants & hospitality"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where process automation pays off for restaurants & hospitality."
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