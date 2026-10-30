// app/solutions/bussiness-process-automation/page.tsx
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
import { businessProcessAutomation } from '@/content/Solutions/bussiness-process-automation';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';

export const metadata: Metadata = {
  title: businessProcessAutomation.titleTag,
  description: businessProcessAutomation.metaDescription,
  alternates: {
    canonical: businessProcessAutomation.url,
  },
  openGraph: {
    title: businessProcessAutomation.titleTag,
    description: businessProcessAutomation.metaDescription,
    url: businessProcessAutomation.url,
    type: 'website',
  },
  keywords: businessProcessAutomation.primaryKeyword,
};

export default function BusinessProcessAutomationPage() {
  const content = businessProcessAutomation;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Process Automation',
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
          href: '#why-business-process-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Process"
            triggerLabel="New Business Event"
            actionLabels={['Trigger Workflow', 'Sync Systems', 'Notify Team']}
            metricValue="2,400"
            metricLabel="process steps executed automatically this month"
            submetric="70% reduction in manual handoffs"
            platform="Business Process Automation + Connected Systems"
            accent="#3B82F6"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Business Process Automation', href: content.url },
        ]}
      />

      <WhySection
        title="Why Businesses Need Business Process Automation"
        content={content.sections['Why Businesses Need Business Process Automation']}
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
        subtitle="Common questions about business process automation"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit — 30 minutes, no obligation, and an honest read on where business process automation pays off for your business."
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