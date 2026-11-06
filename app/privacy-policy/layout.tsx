import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Privacy Policy for Clickmasters AI Automation | Clickmasters',
  description: 'How Clickmasters collects, uses, and protects personal information when you use this website and our automation services. People keep the exceptions.',
  alternates: {
    canonical: canonicalUrl('/privacy-policy'),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
