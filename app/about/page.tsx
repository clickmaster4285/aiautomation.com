import type { Metadata } from 'next';
import AboutPage from '@/components/about/pageAbout';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';

export const metadata: Metadata = withSocialDefaults({
  title: 'About Clickmasters AI Automation Agency | Clickmasters AI',
  description: 'Clickmasters builds production AI agents and workflow automation that your business owns. Meet founder Amjad Khan, the team and how we run projects.',
  alternates: {
    canonical: canonicalUrl('/about'),
  },
});

export default function About() {
  return <AboutPage />;
}