import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Terms and Conditions for Clickmasters | Clickmasters AI',
  description: 'The terms that govern use of the Clickmasters website and the AI automation services described on these pages. Book a free audit. Ask the team today.',
  alternates: {
    canonical: canonicalUrl('/terms-conditions'),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
