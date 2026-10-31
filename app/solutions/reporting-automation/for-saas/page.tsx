// app/solutions/reporting-automation/for-saas/page.tsx
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
import { reportingAutomationForSaaS } from '@/content/Solutions/reporting-automation-for-saas';

export const metadata: Metadata = {
  title: reportingAutomationForSaaS.titleTag,
  description: reportingAutomationForSaaS.metaDescription,
  alternates: {
    canonical: reportingAutomationForSaaS.url,
  },
  openGraph: {
    title: reportingAutomationForSaaS.titleTag,
    description: reportingAutomationForSaaS.metaDescription,
    url: reportingAutomationForSaaS.url,
    type: 'website',
  },
  keywords: reportingAutomationForSaaS.primaryKeyword,
};

export default function ForSaaSPage() {
  const content = reportingAutomationForSaaS;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Reporting Automation for SaaS Companies',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'Reporting Automation Development',
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
    href: '#why-saas-companies-need-reporting-automation',
  }}
  image="/images/reporting.png"
  imageWidth={700}
  imageHeight={580}
  textSize="xlarge"
  breadcrumb={[
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Reporting Automation', href: '/solutions/reporting-automation' },
    { label: 'SaaS Companies', href: content.url },
  ]}
/>

      <WhySection
        title="Why SaaS Companies Need Reporting Automation"
        content={[content.sections['Why SaaS Companies Need Reporting Automation']]}
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
        title="Built for SaaS Companies's Realities"
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
        subtitle="Common questions about reporting automation for saas companies"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where reporting automation pays off for saas companies."
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