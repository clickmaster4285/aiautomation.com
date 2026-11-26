import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = withSocialDefaults({
  title: 'Privacy Policy for Clickmasters AI Automation | Clickmasters',
  description: 'How Clickmasters collects, uses, stores and protects the personal information you share through this website and when using our AI automation services.',
  alternates: {
    canonical: canonicalUrl('/privacy-policy'),
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
