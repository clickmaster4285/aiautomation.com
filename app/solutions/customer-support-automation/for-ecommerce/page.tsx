// app/solutions/customer-support-automation/for-ecommerce/page.tsx
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
import { customerSupportAutomationForEcommerce } from '@/content/Solutions/customer-support-automation-for-ecommerce';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: customerSupportAutomationForEcommerce.titleTag,
  description: customerSupportAutomationForEcommerce.metaDescription,
  alternates: {
    canonical: canonicalUrl(customerSupportAutomationForEcommerce.url),
  },
  openGraph: {
    title: customerSupportAutomationForEcommerce.titleTag,
    description: customerSupportAutomationForEcommerce.metaDescription,
    url: canonicalUrl(customerSupportAutomationForEcommerce.url),
    type: 'website',
  },
  keywords: customerSupportAutomationForEcommerce.primaryKeyword,
};

export default function ForEcommercePage() {
  const content = customerSupportAutomationForEcommerce;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Customer Support Automation for E-commerce',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'Customer Support Automation Development',
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
          href: '#why-ecommerce-need-customer-support-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="E-commerce"
            triggerLabel="New Customer Inquiry"
            actionLabels={['Respond to Inquiry', 'Provide Product Information', 'Process Return']}
            metricValue="1000"
            metricLabel="new customer inquiries handled automatically each month"
            submetric="80% reduction in resolution time"
            platform="Customer Support + E-commerce Platform"
            accent="#10B981"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Customer Support Automation', href: '/solutions/customer-support-automation' },
          { label: 'E-commerce', href: content.url },
        ]}
      />

      <WhySection
        title="Why E-commerce Needs Customer Support Automation"
        content={[content.sections['Why E-commerce Needs Customer Support Automation']]}
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
        title="What This Is and Isn't"
        content={[content.sections['What This Is and Isn\'t']]}
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
        subtitle="Common questions about customer support automation for e-commerce"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where support automation pays off for e-commerce."
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