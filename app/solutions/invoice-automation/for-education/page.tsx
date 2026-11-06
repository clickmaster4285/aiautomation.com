// app/solutions/invoice-automation/for-education/page.tsx
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
import { invoiceAutomationForEducation } from '@/content/Solutions/invoice-automation-for-education';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: invoiceAutomationForEducation.titleTag,
  description: invoiceAutomationForEducation.metaDescription,
  alternates: {
    canonical: canonicalUrl(invoiceAutomationForEducation.url),
  },
  openGraph: {
    title: invoiceAutomationForEducation.titleTag,
    description: invoiceAutomationForEducation.metaDescription,
    url: canonicalUrl(invoiceAutomationForEducation.url),
    type: 'website',
  },
  keywords: invoiceAutomationForEducation.primaryKeyword,
};

export default function ForEducationPage() {
  const content = invoiceAutomationForEducation;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Invoice & Finance Automation for Education',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'Invoice & Finance Automation Development',
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
          href: '#why-education-need-invoice-finance-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Education"
            triggerLabel="New Document Request"
            actionLabels={['Generate Reports', 'Create Invoices', 'Manage Client Data']}
            metricValue="1200"
            metricLabel="invoices processed automatically each month"
            submetric="70% reduction in processing time"
            platform="Invoice & Finance Automation + Educational Institution Management System"
            accent="#F59E0B"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Invoice & Finance Automation', href: '/solutions/invoice-automation' },
          { label: 'Education', href: content.url },
        ]}
      />

      <WhySection
        title="Why Education Needs Invoice & Finance Automation"
        content={[content.sections['Why Education Needs Invoice & Finance Automation']]}
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
        subtitle="Common questions about invoice & finance automation for education"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where finance automation pays off for education."
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