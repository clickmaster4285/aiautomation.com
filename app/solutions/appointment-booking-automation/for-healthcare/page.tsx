// app/solutions/appointment-booking-automation/for-healthcare/page.tsx
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
import { appointmentBookingAutomationForHealthcare } from '@/content/Solutions/appointment-booking-automation-for-healthcare';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: appointmentBookingAutomationForHealthcare.titleTag,
  description: appointmentBookingAutomationForHealthcare.metaDescription,
  alternates: {
    canonical: canonicalUrl(appointmentBookingAutomationForHealthcare.url),
  },
  openGraph: {
    title: appointmentBookingAutomationForHealthcare.titleTag,
    description: appointmentBookingAutomationForHealthcare.metaDescription,
    url: canonicalUrl(appointmentBookingAutomationForHealthcare.url),
    type: 'website',
  },
  keywords: appointmentBookingAutomationForHealthcare.primaryKeyword,
};

export default function ForHealthcarePage() {
  const content = appointmentBookingAutomationForHealthcare;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Appointment & Booking Automation for Healthcare',
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
          href: '#why-healthcare-need-appointment-booking-automation',
        }}
        visual={
                                           <AutomationHeroMockup
                                             industry="Healthcare"
                                             triggerLabel="New Patient Inquiry"
                                             actionLabels={['Schedule Appointment', 'Provide Medical Consultation', 'Submit Health Records']}
                                             metricValue="1,500"
                                             metricLabel="patient inquiries handled automatically this month"
                                             submetric="90% improved patient satisfaction"
                                             platform="CRM + Electronic Health Records"
                                             accent="#10B981"
                                           />
                                         }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Appointment & Booking Automation', href: '/solutions/appointment-booking-automation' },
          { label: 'Healthcare', href: content.url },
        ]}
      />

      <WhySection
        title="Why Healthcare Needs Appointment & Booking Automation"
        content={[content.sections['Why Healthcare Needs Appointment & Booking Automation']]}
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
        subtitle="Common questions about appointment & booking automation for healthcare"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit. 30 minutes, no obligation, and an honest read on where booking automation pays off for healthcare."
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