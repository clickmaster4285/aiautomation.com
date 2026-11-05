// app/solutions/appointment-booking-automation/for-real-estate/page.tsx
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
import { appointmentBookingAutomationForRealEstate } from '@/content/Solutions/appointment-booking-automation-for-real-estate';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: appointmentBookingAutomationForRealEstate.titleTag,
  description: appointmentBookingAutomationForRealEstate.metaDescription,
  alternates: {
    canonical: canonicalUrl(appointmentBookingAutomationForRealEstate.url),
  },
  openGraph: {
    title: appointmentBookingAutomationForRealEstate.titleTag,
    description: appointmentBookingAutomationForRealEstate.metaDescription,
    url: canonicalUrl(appointmentBookingAutomationForRealEstate.url),
    type: 'website',
  },
  keywords: appointmentBookingAutomationForRealEstate.primaryKeyword,
};

export default function ForRealEstatePage() {
  const content = appointmentBookingAutomationForRealEstate;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Appointment & Booking Automation for Real Estate',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
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
          href: '#why-real-estate-need-appointment-booking-automation',
        }}
        visual={
                                           <AutomationHeroMockup
                                             industry="Real Estate"
                                             triggerLabel="New Client Inquiry"
                                             actionLabels={['Schedule Consultation', 'Provide Quote', 'Submit Property Details']}
                                             metricValue="1,200"
                                             metricLabel="client inquiries handled automatically this month"
                                             submetric="80% improved response time"
                                             platform="CRM + Real Estate Platform"
                                             accent="#F59E0B"
                                           />
                                         }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Appointment & Booking Automation', href: '/solutions/appointment-booking-automation' },
          { label: 'Real Estate', href: content.url },
        ]}
      />

      <WhySection
        title="Why Real Estate Need Appointment & Booking Automation"
        content={[content.sections['Why Real Estate Need Appointment & Booking Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Real Estate"
        content={[content.sections['The Problems This Solves for Real Estate']]}
      />

      <AutomationSection
        title="What We Automate for Real Estate"
        content={[content.sections['What We Automate for Real Estate']]}
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
        title="Built for Real Estate's Realities"
        content={[content.sections['Built for Real Estate\'s Realities']]}
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
        subtitle="Common questions about appointment & booking automation for real estate"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where booking automation pays off for real estate."
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