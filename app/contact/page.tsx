import type { Metadata } from 'next';
import ContactPage from '@/components/contact/pageContact';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: 'Contact Clickmasters | AI Automation Agency',
  description: 'Get in touch with Clickmasters. Book a free automation audit or ask a question we reply fast and tell you honestly if we\'re the right fit.',
  alternates: {
    canonical: canonicalUrl('/contact'),
  },
};

export default function Contact() {
  return <ContactPage />;
}