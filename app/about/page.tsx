import type { Metadata } from 'next';
import AboutPage from '@/components/about/pageAbout';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: 'About Clickmasters AI Automation Agency | Clickmasters AI',
  description: 'Clickmasters builds production AI agents and workflow automation that the business owns. Meet the team and the approach. People keep the exceptions.',
  alternates: {
    canonical: canonicalUrl('/about'),
  },
};

export default function About() {
  return <AboutPage />;
}