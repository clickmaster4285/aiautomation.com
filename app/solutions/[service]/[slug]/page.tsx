// app/solutions/[service]/[slug]/page.tsx
// Every solution detail page, e.g. /solutions/ai-agents/for-construction or /solutions/crm-automation/with-hubspot.
// Content and layout come from content/Solutions/<service>/<slug>.ts; the template is components/solutions/SolutionPage.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SolutionPage, solutionMetadata } from '@/components/solutions/SolutionPage';
import { getSolutionDetail, solutionDetailParams } from '@/content/Solutions/pages';

type Props = { params: Promise<{ service: string; slug: string }> };

// Only registered service/slug pairs exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return solutionDetailParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service, slug } = await params;
  const content = getSolutionDetail(service, slug);
  return content ? solutionMetadata(content) : {};
}

export default async function SolutionDetailPage({ params }: Props) {
  const { service, slug } = await params;
  const content = getSolutionDetail(service, slug);
  if (!content) notFound();
  return <SolutionPage content={content} />;
}
