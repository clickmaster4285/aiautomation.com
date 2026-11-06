import type { Metadata } from 'next';
import ContactPage from '@/components/contact/pageContact';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: 'Schedule Your Free Automation Audit | Clickmasters AI',
  description: 'Book a free automation audit. We map one workflow, show where the hours go, and say honestly if we are the right fit. It uses tools you already run.',
  alternates: {
    canonical: canonicalUrl('/free-automation-audit'),
  },
};

export default function FreeAutomationAuditPage() {
  return <ContactPage />;
}
