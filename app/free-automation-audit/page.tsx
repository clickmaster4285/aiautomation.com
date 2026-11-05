import type { Metadata } from 'next';
import ContactPage from '@/components/contact/pageContact';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: 'Free Automation Audit | Clickmasters',
  description:
    'Book a free automation audit with Clickmasters. We map one workflow, tell you where the hours go, and say honestly if we are the right fit.',
  alternates: {
    canonical: canonicalUrl('https://clickmastersaiautomation.com/free-automation-audit'),
  },
};

export default function FreeAutomationAuditPage() {
  return <ContactPage />;
}
