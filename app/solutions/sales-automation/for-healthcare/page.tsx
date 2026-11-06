// app/solutions/sales-automation/for-healthcare/page.tsx
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
import { salesAutomationForHealthcare } from '@/content/Solutions/sales-automation-for-healthcare';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: salesAutomationForHealthcare.titleTag,
  description: salesAutomationForHealthcare.metaDescription,
  alternates: {
    canonical: canonicalUrl(salesAutomationForHealthcare.url),
  },
  openGraph: {
    title: salesAutomationForHealthcare.titleTag,
    description: salesAutomationForHealthcare.metaDescription,
    url: canonicalUrl(salesAutomationForHealthcare.url),
    type: 'website',
  },
  keywords: salesAutomationForHealthcare.primaryKeyword,
};

export default function ForHealthcarePage() {
  const content = salesAutomationForHealthcare;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Sales Automation for Healthcare',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'Sales Automation Development',
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
          href: '#why-healthcare-need-sales-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Healthcare"
            triggerLabel="New Document Request"
            actionLabels={['Generate Reports', 'Create Invoices', 'Manage Client Data']}
            metricValue="600"
            metricLabel="leads generated automatically each month"
            submetric="40% increase in patient engagement"
            platform="Sales Automation + Healthcare Platform"
            accent="#EF4444"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Sales Automation', href: '/solutions/sales-automation' },
          { label: 'Healthcare', href: content.url },
        ]}
      />

      <WhySection
        title="Why Healthcare Needs AI Sales Automation"
        content={[content.sections['Why Healthcare Needs AI Sales Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Healthcare"
        content={[content.sections['The Problems This Solves for Healthcare']]}
      />

      <AutomationSection
        title="What We Automate for Healthcare"
        content={[content.sections['What We Automate for Healthcare']]}
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
        title="Built for Healthcare's Realities"
        content={[content.sections['Built for Healthcare\'s Realities']]}
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
        subtitle="Common questions about sales automation for healthcare"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where sales automation pays off for healthcare."
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