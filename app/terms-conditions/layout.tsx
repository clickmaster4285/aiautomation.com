import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = withSocialDefaults({
  title: 'Terms and Conditions for Clickmasters | Clickmasters AI',
  description: 'The terms that govern use of the Clickmasters website and our AI automation services, including intellectual property, liability, termination and law.',
  alternates: {
    canonical: canonicalUrl('/terms-conditions'),
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
