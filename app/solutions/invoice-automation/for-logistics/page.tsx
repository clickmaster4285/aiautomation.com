// app/solutions/invoice-automation/for-logistics/page.tsx
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
import { invoiceAutomationForLogistics } from '@/content/Solutions/invoice-automation-for-logistics';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: invoiceAutomationForLogistics.titleTag,
  description: invoiceAutomationForLogistics.metaDescription,
  alternates: {
    canonical: canonicalUrl(invoiceAutomationForLogistics.url),
  },
  openGraph: {
    title: invoiceAutomationForLogistics.titleTag,
    description: invoiceAutomationForLogistics.metaDescription,
    url: canonicalUrl(invoiceAutomationForLogistics.url),
    type: 'website',
  },
  keywords: invoiceAutomationForLogistics.primaryKeyword,
};

export default function ForLogisticsPage() {
  const content = invoiceAutomationForLogistics;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Invoice & Finance Automation for Logistics & Transportation',
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
          href: '#why-logistics-transportation-need-invoice-finance-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Logistics & Transportation"
            triggerLabel="New Document Request"
            actionLabels={['Generate Reports', 'Create Invoices', 'Manage Client Data']}
            metricValue="2000"
            metricLabel="invoices processed automatically each month"
            submetric="70% reduction in processing time"
            platform="Invoice & Finance Automation + Logistics Management System"
            accent="#F59E0B"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Invoice & Finance Automation', href: '/solutions/invoice-automation' },
          { label: 'Logistics & Transportation', href: content.url },
        ]}
      />

      <WhySection
        title="Why Logistics & Transportation Need Invoice & Finance Automation"
        content={[content.sections['Why Logistics & Transportation Need Invoice & Finance Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Logistics & Transportation"
        content={[content.sections['The Problems This Solves for Logistics & Transportation']]}
      />

      <AutomationSection
        title="What We Automate for Logistics & Transportation"
        content={[content.sections['What We Automate for Logistics & Transportation']]}
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
        title="Built for Logistics & Transportation's Realities"
        content={[content.sections['Built for Logistics & Transportation\'s Realities']]}
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
        subtitle="Common questions about invoice & finance automation for logistics & transportation"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where finance automation pays off for logistics & transportation."
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