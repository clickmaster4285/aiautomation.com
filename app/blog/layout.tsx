import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Clickmasters AI Automation Blog and Guides | Clickmasters',
  description: 'Guides from Clickmasters on AI workflows, agents, chatbots, CRM automation, and document automation for operating teams. People keep the exceptions.',
  alternates: {
    canonical: canonicalUrl('/blog'),
  },
  // The hub lists article teasers. Those articles do not have routes yet,
  // so the hub stays out of the index until real posts are published.
  robots: {
    index: false,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
