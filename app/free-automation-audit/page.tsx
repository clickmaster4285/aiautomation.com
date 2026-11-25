import type { Metadata } from 'next';
import ContactPage from '@/components/contact/pageContact';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';

export const metadata: Metadata = withSocialDefaults({
  title: 'Schedule Your Free Automation Audit | Clickmasters AI',
  description: 'Book a free automation audit. We map one workflow, show where the hours go, and tell you honestly whether automation, and Clickmasters, is the right fit.',
  alternates: {
    canonical: canonicalUrl('/free-automation-audit'),
  },
});

export default function FreeAutomationAuditPage() {
  return (
    <ContactPage
      heading={{ lead: 'Book your free', accent: 'automation audit.' }}
      intro="We map one workflow with you, show where the hours go, and give you a straight answer on whether automation, and Clickmasters, is the right fit."
    />
  );
}
