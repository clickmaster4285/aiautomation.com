import type { Metadata } from 'next';
import ContactPage from '@/components/contact/pageContact';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';

export const metadata: Metadata = withSocialDefaults({
  title: 'Contact Clickmasters for an Automation Audit | Clickmasters',
  description: 'Contact Clickmasters by form, email or phone in the US, UK or Pakistan to book a free automation audit or ask a question. We reply with an honest read.',
  alternates: {
    canonical: canonicalUrl('/contact'),
  },
});

export default function Contact() {
  return <ContactPage />;
}