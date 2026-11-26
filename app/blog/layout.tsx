import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';

// Hub metadata. Articles set their own metadata in app/blog/[slug]/page.tsx.
export const metadata: Metadata = withSocialDefaults({
  title: 'AI Automation Guides and Comparisons | Clickmasters',
  description:
    'Guides on AI workflows, AI agents and automation platforms from the Clickmasters build team: n8n vs Zapier vs Make, agents vs workflows, and more.',
  alternates: {
    canonical: canonicalUrl('/blog'),
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
