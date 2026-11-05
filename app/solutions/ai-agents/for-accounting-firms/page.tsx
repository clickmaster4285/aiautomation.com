// app/solutions/ai-agents/for-accounting-firms/page.tsx
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
import { aiAgentsForAccountingFirms } from '@/content/Solutions';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: aiAgentsForAccountingFirms.titleTag,
  description: aiAgentsForAccountingFirms.metaDescription,
  alternates: {
    canonical: canonicalUrl(aiAgentsForAccountingFirms.url),
  },
  openGraph: {
    title: aiAgentsForAccountingFirms.titleTag,
    description: aiAgentsForAccountingFirms.metaDescription,
    url: canonicalUrl(aiAgentsForAccountingFirms.url),
    type: 'website',
  },
  keywords: aiAgentsForAccountingFirms.primaryKeyword,
};

export default function ForAccountingFirmsPage() {
  const content = aiAgentsForAccountingFirms;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Agent Development for Accounting Firms',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'AI Agent Development',
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
          href: '#why-accounting-firms-need-ai-agent-development',
        }}
        visual={
                              <AutomationHeroMockup
                                industry="Accounting"
                                triggerLabel="New Client Inquiry"
                                actionLabels={['Send Intake Form', 'Schedule Call', 'Add to CRM']}
                                metricValue="1,247"
                                metricLabel="inquiries handled automatically this week"
                                submetric="94% resolved without staff involvement"
                                platform="QuickBooks + HubSpot"
                                accent="#F97316"
                              />
                            }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Agents', href: '/solutions/ai-agents' },
          { label: 'Accounting Firms', href: content.url },
        ]}
      />

      {/* Why Section */}
      <WhySection
        title="Why Accounting Firms Need AI Agent Development"
        content={[content.sections['Why Accounting Firms Need AI Agent Development']]}
       
      />

      {/* Problems Section */}
      <ProblemsSection
        title="The Problems This Solves for Accounting Firms"
        content={[content.sections['The Problems This Solves for Accounting Firms']]}
        
      />

      {/* Automation Section */}
      <AutomationSection
        title="What We Automate for Accounting Firms"
        content={[content.sections['What We Automate for Accounting Firms']]}
       
      />

      {/* Start Section */}
      <StartSection
        title="Where to Start: Your First Automation"
        content={[content.sections['Where to Start: Your First Automation']]}
       
      />

      {/* Example Section */}
      <ExampleSection
        title="A Worked Example"
        content={[content.sections['A Worked Example']]}
        />

      {/* Boundaries Section */}
      <BoundariesSection
        title="What This Isand Isn't"
        content={[content.sections['What This Isand Isn\'t']]}
        />

      {/* Realities Section */}
      <RealitiesSection
        title="Built for Accounting Firms' Realities"
        content={[content.sections['Built for Accounting Firms\' Realities']]}
        
      />

      {/* Return Section */}
      <ReturnSection
        title="What the Return Looks Like"
        content={[content.sections['What the Return Looks Like']]}
        stats={content.stats}
       
      />

      {/* Why Us Section */}
      <WhyUsSection
        title="Why Clickmasters"
        content={[content.sections['Why Clickmasters']]}
        
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about AI agents for accounting firms"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit30 minutes, no obligation, and an honest read on where AI agent pays off for accounting firms."
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