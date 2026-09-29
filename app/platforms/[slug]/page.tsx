// app/platforms/[slug]/page.tsx
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { platformContent, platformSlugs } from '@/content/Platforms';
import CmsRoute, { cmsRouteMetadata } from '@/components/cms/CmsRoute';

const Hero = dynamic(() => import('@/components/platforms/Hero').then((mod) => mod.default));
const TextSec = dynamic(() => import('@/components/platforms/TextSec').then((mod) => mod.default));
const FeatureSec = dynamic(() => import('@/components/platforms/FeatureSec').then((mod) => mod.default));
const GridSec = dynamic(() => import('@/components/platforms/GridSec').then((mod) => mod.default));
const FaqSec = dynamic(() => import('@/components/platforms/FAQSec').then((mod) => mod.default));
const CTASec = dynamic(() => import('@/components/platforms/CTASec').then((mod) => mod.default));
const StepSec = dynamic(() => import('@/components/platforms/StepSec').then((mod) => mod.default));
const PainPoint = dynamic(() => import('@/components/platforms/PainPoint').then((mod) => mod.default));

// Map section type to component
const sectionMap: Record<string, ComponentType<{ section: any }>> = {
  hero: Hero,
  text: TextSec,
  features: FeatureSec,
  grid: GridSec,
  faq: FaqSec,
  cta: CTASec,
  steps: StepSec,
  painpoint: PainPoint,
};

// Generate static paths for all platforms
export async function generateStaticParams() {
  return platformSlugs.map((slug) => ({ slug }));
}

// Generate metadata – await params
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ unwrap the Promise
  const content = platformContent[slug];
  // Not a code-owned platform → a Nexus CMS page may live here.
  if (!content) return cmsRouteMetadata(`/platforms/${slug}`);
  return {
    title: content.title,
    description: content.metaDescription,
  };
}

// Render the page – await params
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ unwrap the Promise
  const content = platformContent[slug];
  if (!content) return <CmsRoute path={`/platforms/${slug}`} />;

  return (
    <main className="bg-black text-white">
      {content.sections.map((section, idx) => {
        const Component = sectionMap[section.type];
        if (!Component) return null;
        return <Component key={idx} section={section} />;
      })}
    </main>
  );
}