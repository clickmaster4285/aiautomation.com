// app/platforms/[slug]/page.tsx
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { platformContent, platformSlugs } from '@/content/Platforms';
import CmsRoute, { cmsRouteMetadata } from '@/components/cms/CmsRoute';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';
import { withPlatformLinks } from '@/lib/inline-links';
import { PLATFORMS } from '@/lib/link-graph';
import { HubJsonLd } from '@/components/seo/HubJsonLd';

const Hero = dynamic(() => import('@/components/platforms/Hero').then((mod) => mod.default));
const TextSec = dynamic(() => import('@/components/platforms/TextSec').then((mod) => mod.default));
const FeatureSec = dynamic(() => import('@/components/platforms/FeatureSec').then((mod) => mod.default));
const GridSec = dynamic(() => import('@/components/platforms/GridSec').then((mod) => mod.default));
const FaqSec = dynamic(() => import('@/components/platforms/FAQSec').then((mod) => mod.default));
const CTASec = dynamic(() => import('@/components/platforms/CTASec').then((mod) => mod.default));
const StepSec = dynamic(() => import('@/components/platforms/StepSec').then((mod) => mod.default));
const PainPoint = dynamic(() => import('@/components/platforms/PainPoint').then((mod) => mod.default));
// ✅ NEW
const IndustriesSec = dynamic(() => import('@/components/platforms/IndustriesSec').then((mod) => mod.default));
const CaseStudiesSec = dynamic(() => import('@/components/platforms/CaseStudiesSec').then((mod) => mod.default));
const ReviewsSec = dynamic(() => import('@/components/platforms/ReviewsSec').then((mod) => mod.default));

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
  // ✅ NEW
  industries: IndustriesSec,
  casestudies: CaseStudiesSec,
  reviews: ReviewsSec,
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
  return withSocialDefaults({
    title: content.title,
    description: content.metaDescription,
    alternates: {
      canonical: canonicalUrl(`/platforms/${slug}`),
    },
  });
}

// Render the page – await params
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ unwrap the Promise
  const content = platformContent[slug];
  if (!content) return <CmsRoute path={`/platforms/${slug}`} />;

  const path = `/platforms/${slug}`;
  const platform = Object.values(PLATFORMS).find((p) => p.page === slug);
  const name = platform ? `${platform.name} Automation Services` : content.title.split('|')[0].trim();

  return (
    <div className="bg-black text-white">
      <HubJsonLd
        hub={{
          name,
          title: content.title,
          description: content.metaDescription ?? "",
          path,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Platforms', path: '/platforms' },
            { name, path },
          ],
        }}
      />
      {withPlatformLinks(slug, content.sections).map((section, idx) => {
        const Component = sectionMap[section.type];
        if (!Component) return null;
        return <Component key={idx} section={section} />;
      })}
    </div>
  );
}