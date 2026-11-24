// app/solutions/[service]/page.tsx
// Every solution type page, e.g. /solutions/ai-agents.
// Content-driven hubs render through the shared SolutionPage template (content/Solutions/<service>.ts);
// hand-built hubs render their own component (components/solutions/hubs).
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SolutionPage, solutionMetadata } from '@/components/solutions/SolutionPage';
import { BESPOKE_HUBS } from '@/components/solutions/hubs';
import { SOLUTION_HUBS, getSolutionHub } from '@/content/Solutions/pages';
import { canonicalUrl } from '@/lib/canonical';

type Props = { params: Promise<{ service: string }> };

// Only registered services exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [...Object.keys(SOLUTION_HUBS), ...Object.keys(BESPOKE_HUBS)].map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const bespoke = BESPOKE_HUBS[service];
  if (bespoke) {
    return {
      title: bespoke.seo.title,
      description: bespoke.seo.description,
      alternates: { canonical: canonicalUrl(bespoke.seo.path) },
    };
  }
  const content = getSolutionHub(service);
  return content ? solutionMetadata(content) : {};
}

export default async function SolutionHubPage({ params }: Props) {
  const { service } = await params;
  const bespoke = BESPOKE_HUBS[service];
  if (bespoke) return <bespoke.Component />;
  const content = getSolutionHub(service);
  if (!content) notFound();
  return <SolutionPage content={content} />;
}
