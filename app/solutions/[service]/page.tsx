// app/solutions/[service]/page.tsx
// Every solution type page, e.g. /solutions/ai-agents.
// Content and layout come from content/Solutions/<service>.ts; the template is components/solutions/SolutionPage.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SolutionPage, solutionMetadata } from '@/components/solutions/SolutionPage';
import { SOLUTION_HUBS, getSolutionHub } from '@/content/Solutions/pages';

type Props = { params: Promise<{ service: string }> };

// Only registered services exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SOLUTION_HUBS).map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const content = getSolutionHub(service);
  return content ? solutionMetadata(content) : {};
}

export default async function SolutionHubPage({ params }: Props) {
  const { service } = await params;
  const content = getSolutionHub(service);
  if (!content) notFound();
  return <SolutionPage content={content} />;
}
