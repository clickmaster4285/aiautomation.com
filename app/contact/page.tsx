import type { Metadata } from 'next';
import ContactPage from '@/components/contact/pageContact';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: 'Contact Clickmasters for an Automation Audit | Clickmasters',
  description: 'Contact Clickmasters to book a free automation audit or ask a question. We reply with an honest read on fit. Book a free audit. Ask the team today.',
  alternates: {
    canonical: canonicalUrl('/contact'),
  },
};

export default function Contact() {
  return <ContactPage />;
}