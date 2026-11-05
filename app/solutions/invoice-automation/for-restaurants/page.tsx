// app/solutions/invoice-automation/for-restaurants/page.tsx
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
import { invoiceAutomationForRestaurants } from '@/content/Solutions/invoice-automation-for-restaurants';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: invoiceAutomationForRestaurants.titleTag,
  description: invoiceAutomationForRestaurants.metaDescription,
  alternates: {
    canonical: canonicalUrl(invoiceAutomationForRestaurants.url),
  },
  openGraph: {
    title: invoiceAutomationForRestaurants.titleTag,
    description: invoiceAutomationForRestaurants.metaDescription,
    url: canonicalUrl(invoiceAutomationForRestaurants.url),
    type: 'website',
  },
  keywords: invoiceAutomationForRestaurants.primaryKeyword,
};

export default function ForRestaurantsPage() {
  const content = invoiceAutomationForRestaurants;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Invoice & Finance Automation for Restaurants & Hospitality',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
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
          href: '#why-restaurants-hospitality-need-invoice-finance-automation',
        }}
        visual={
          <AutomationHeroMockup
            industry="Restaurants & Hospitality"
            triggerLabel="New Document Request"
            actionLabels={['Generate Reports', 'Create Invoices', 'Manage Client Data']}
            metricValue="1800"
            metricLabel="invoices processed automatically each month"
            submetric="75% reduction in processing time"
            platform="Invoice & Finance Automation + Restaurant Management System"
            accent="#8B5CF6"
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Invoice & Finance Automation', href: '/solutions/invoice-automation' },
          { label: 'Restaurants & Hospitality', href: content.url },
        ]}
      />

      <WhySection
        title="Why Restaurants & Hospitality Need Invoice & Finance Automation"
        content={[content.sections['Why Restaurants & Hospitality Need Invoice & Finance Automation']]}
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
        subtitle="Common questions about invoice & finance automation for restaurants & hospitality"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where finance automation pays off for restaurants & hospitality."
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