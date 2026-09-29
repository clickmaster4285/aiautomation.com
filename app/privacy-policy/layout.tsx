import type { Metadata } from 'next';

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Privacy Policy | Clickmasters AI Automation',
  description:
    'How Clickmasters collects, uses and protects your personal information when you use our website and AI automation services.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
