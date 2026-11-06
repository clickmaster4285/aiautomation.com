// app/solutions/appointment-booking-automation/for-law-firms/page.tsx
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
import { appointmentBookingAutomationForLawFirms } from '@/content/Solutions/appointment-booking-automation-for-law-firms';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: appointmentBookingAutomationForLawFirms.titleTag,
  description: appointmentBookingAutomationForLawFirms.metaDescription,
  alternates: {
    canonical: canonicalUrl(appointmentBookingAutomationForLawFirms.url),
  },
  openGraph: {
    title: appointmentBookingAutomationForLawFirms.titleTag,
    description: appointmentBookingAutomationForLawFirms.metaDescription,
    url: canonicalUrl(appointmentBookingAutomationForLawFirms.url),
    type: 'website',
  },
  keywords: appointmentBookingAutomationForLawFirms.primaryKeyword,
};

export default function ForLawFirmsPage() {
  const content = appointmentBookingAutomationForLawFirms;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Appointment & Booking Automation for Law Firms',
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: 'Appointment & Booking Automation Development',
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
          href: '#why-law-firms-need-appointment-booking-automation',
        }}
        visual={
                                           <AutomationHeroMockup
                                             industry="Law Firms"
                                             triggerLabel="New Client Inquiry"
                                             actionLabels={['Schedule Consultation', 'Provide Legal Advice', 'Submit Case Details']}
                                             metricValue="2,000"
                                             metricLabel="client inquiries handled automatically this month"
                                             submetric="95% improved client satisfaction"
                                             platform="CRM + Legal Practice Management"
                                             accent="#3B82F6"
                                           />
                                         }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Appointment & Booking Automation', href: '/solutions/appointment-booking-automation' },
          { label: 'Law Firms', href: content.url },
        ]}
      />

      <WhySection
        title="Why Law Firms Need Appointment & Booking Automation"
        content={[content.sections['Why Law Firms Need Appointment & Booking Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Law Firms"
        content={[content.sections['The Problems This Solves for Law Firms']]}
      />

      <AutomationSection
        title="What We Automate for Law Firms"
        content={[content.sections['What We Automate for Law Firms']]}
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
        title="Built for Law Firms' Realities"
        content={[content.sections['Built for Law Firms\' Realities']]}
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
        subtitle="Common questions about appointment & booking automation for law firms"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where booking automation pays off for law firms."
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