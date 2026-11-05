import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'AI Automation Blog | Clickmasters',
  description:
    'Guides and insights on AI workflow automations, AI agents, chatbots, CRM and document automation from the Clickmasters team.',
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
