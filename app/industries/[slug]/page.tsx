// app/industries/[slug]/page.tsx
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { industryContent, industrySlugs } from '@/content/Industries';
import CmsRoute, { cmsRouteMetadata } from '@/components/cms/CmsRoute';

const Hero = dynamic(() => import('@/components/industries/Hero').then((mod) => mod.default));
const TextSec = dynamic(() => import('@/components/industries/TextSec').then((mod) => mod.default));
const FeatureSec = dynamic(() => import('@/components/industries/FeaturesSec').then((mod) => mod.default));
const GridSec = dynamic(() => import('@/components/industries/GridSec').then((mod) => mod.default));
const FAQSec = dynamic(() => import('@/components/industries/FAQSec').then((mod) => mod.default));
const CTASec = dynamic(() => import('@/components/industries/CTASec').then((mod) => mod.default));
const PainPoint = dynamic(() => import('@/components/industries/PainPoint').then((mod) => mod.default));
const StepSec = dynamic(() => import('@/components/industries/StepSec').then((mod) => mod.default));

const sectionMap: Record<string, ComponentType<{ section: any; bg?: string }>> = {
  hero: Hero,
  text: TextSec,
  features: FeatureSec,
  grid: GridSec,
  faq: FAQSec,
  cta: CTASec,
  painpoint: PainPoint,
  steps: StepSec,
};

export async function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = industryContent[slug];
  // Not a code-owned industry → a Nexus CMS page may live here.
  if (!content) return cmsRouteMetadata(`/industries/${slug}`);
  return {
    title: content.title,
    description: content.metaDescription,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = industryContent[slug];
  if (!content) return <CmsRoute path={`/industries/${slug}`} />;

  // ── Background alternation ──
  // Hero (index 0) will be 'bg-black' – all sections follow the array order.
  const bgColors = [
    'bg-black',        // hero – black
    'bg-gray-50',      // text section
    'bg-black',        // features
    'bg-white',        // grid
    'bg-orange-50',    // painpoint
    'bg-gray-100',     // next section
    'bg-black',        // ...
    'bg-white',
  ];

  return (
    <main className="text-gray-900">
      {content.sections.map((section, idx) => {
        const Component = sectionMap[section.type];
        if (!Component) {
          console.warn(`No component found for section type: ${section.type}`);
          return null;
        }
        // ✅ Use the array directly – no override
        const bg = bgColors[idx % bgColors.length];
        return <Component key={idx} section={section} bg={bg} />;
      })}
    </main>
  );
}