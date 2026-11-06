// app/solutions/invoice-automation/for-construction/page.tsx
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
import { invoiceAutomationForConstruction } from '@/content/Solutions/invoice-automation-for-construction';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: invoiceAutomationForConstruction.titleTag,
  description: invoiceAutomationForConstruction.metaDescription,
  alternates: {
    canonical: canonicalUrl(invoiceAutomationForConstruction.url),
  },
  openGraph: {
    title: invoiceAutomationForConstruction.titleTag,
    description: invoiceAutomationForConstruction.metaDescription,
    url: canonicalUrl(invoiceAutomationForConstruction.url),
    type: 'website',
  },
  keywords: invoiceAutomationForConstruction.primaryKeyword,
};

export default function ForConstructionPage() {
  const content = invoiceAutomationForConstruction;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Invoice & Finance Automation for Construction',
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
          href: '#why-construction-need-invoice-finance-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Construction"
            triggerLabel="New Document Request"
            actionLabels={['Generate Reports', 'Create Invoices', 'Manage Client Data']}
            metricValue="1500"
            metricLabel="invoices processed automatically each month"
            submetric="80% reduction in processing time"
            platform="Invoice & Finance Automation + Construction Management System"
            accent="#10B981"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Invoice & Finance Automation', href: '/solutions/invoice-automation' },
          { label: 'Construction', href: content.url },
        ]}
      />

      <WhySection
        title="Why Construction Needs Invoice & Finance Automation"
        content={[content.sections['Why Construction Needs Invoice & Finance Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Construction"
        content={[content.sections['The Problems This Solves for Construction']]}
      />

      <AutomationSection
        title="What We Automate for Construction"
        content={[content.sections['What We Automate for Construction']]}
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
        title="Built for Construction's Realities"
        content={[content.sections['Built for Construction\'s Realities']]}
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
        subtitle="Common questions about invoice & finance automation for construction"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where finance automation pays off for construction."
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