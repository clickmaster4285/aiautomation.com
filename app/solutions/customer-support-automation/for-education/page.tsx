// app/solutions/customer-support-automation/for-education/page.tsx
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
import { customerSupportAutomationForEducation } from '@/content/Solutions/customer-support-automation-for-education';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: customerSupportAutomationForEducation.titleTag,
  description: customerSupportAutomationForEducation.metaDescription,
  alternates: {
    canonical: canonicalUrl(customerSupportAutomationForEducation.url),
  },
  openGraph: {
    title: customerSupportAutomationForEducation.titleTag,
    description: customerSupportAutomationForEducation.metaDescription,
    url: canonicalUrl(customerSupportAutomationForEducation.url),
    type: 'website',
  },
  keywords: customerSupportAutomationForEducation.primaryKeyword,
};

export default function ForEducationPage() {
  const content = customerSupportAutomationForEducation;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Customer Support Automation for Education',
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
          href: '#why-education-need-customer-support-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Education"
            triggerLabel="New Student Inquiry"
            actionLabels={['Respond to Inquiry', 'Schedule Consultation', 'Provide Information']}
            metricValue="800"
            metricLabel="new student inquiries handled automatically each month"
            submetric="75% reduction in response time"
            platform="Customer Support + Learning Management System"
            accent="#3B82F6"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Customer Support Automation', href: '/solutions/customer-support-automation' },
          { label: 'Education', href: content.url },
        ]}
      />

      <WhySection
        title="Why Education Needs Customer Support Automation"
        content={[content.sections['Why Education Needs Customer Support Automation']]}
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
        subtitle="Common questions about customer support automation for education"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where support automation pays off for education."
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