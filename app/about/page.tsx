import type { Metadata } from 'next';
import AboutPage from '@/components/about/pageAbout';
import { canonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: 'About Clickmasters | AI Automation Agency',
  description: 'Clickmasters is a US AI automation agency that builds production AI agents and workflow automation businesses actually own. Meet the team and our approach.',
  alternates: {
    canonical: canonicalUrl('/about'),
  },
};

export default function About() {
  return <AboutPage />;
}