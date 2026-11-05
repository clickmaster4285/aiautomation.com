import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Terms & Conditions | Clickmasters AI Automation',
  description:
    'The terms and conditions that govern your use of the Clickmasters website and our AI automation services.',
  alternates: {
    canonical: canonicalUrl('/terms-conditions'),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
