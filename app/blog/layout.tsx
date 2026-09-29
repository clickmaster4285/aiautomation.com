import type { Metadata } from 'next';

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'AI Automation Blog | Clickmasters',
  description:
    'Guides and insights on AI workflow automations, AI agents, chatbots, CRM and document automation from the Clickmasters team.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
