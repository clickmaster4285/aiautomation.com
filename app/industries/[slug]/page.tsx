// app/industries/[slug]/page.tsx
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { industryContent, industrySlugs } from '@/content/Industries';
import CmsRoute, { cmsRouteMetadata } from '@/components/cms/CmsRoute';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';
import { RelatedLinks } from '@/components/seo/RelatedLinks';
import { INDUSTRY_SOLUTION_LINKS, INDUSTRY_PRODUCT_LINKS } from '@/lib/internal-links';
import { RelatedCards } from '@/components/seo/RelatedCards';
import { productCards } from '@/lib/product-cards';
import { HubJsonLd } from '@/components/seo/HubJsonLd';
import type { Section } from '@/content/type';

const Hero = dynamic(() => import('@/components/industries/Hero').then((mod) => mod.default));
const TextSec = dynamic(() => import('@/components/industries/TextSec').then((mod) => mod.default));
const FeatureSec = dynamic(() => import('@/components/industries/FeaturesSec').then((mod) => mod.default));
const GridSec = dynamic(() => import('@/components/industries/GridSec').then((mod) => mod.default));
const FAQSec = dynamic(() => import('@/components/industries/FAQSec').then((mod) => mod.default));
const CTASec = dynamic(() => import('@/components/industries/CTASec').then((mod) => mod.default));
const PainPoint = dynamic(() => import('@/components/industries/PainPoint').then((mod) => mod.default));
const StepSec = dynamic(() => import('@/components/industries/StepSec').then((mod) => mod.default));

const sectionMap: Record<string, ComponentType<{ section: Section; bg?: string }>> = {
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
  return withSocialDefaults({
    title: content.title,
    description: content.metaDescription,
    alternates: {
      canonical: canonicalUrl(`/industries/${slug}`),
    },
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = industryContent[slug];
  if (!content) return <CmsRoute path={`/industries/${slug}`} />;

  // ── Background alternation ──
  // Keep the industry pages on the landing page's paper / ink / secondary rhythm.
  const bgColors = [
    'bg-paper',
    'bg-ink',
    'bg-secondary',
    'bg-paper',
    'bg-ink',
    'bg-secondary',
    'bg-paper',
    'bg-ink',
  ];

  const path = `/industries/${slug}`;
  const hero = content.sections.find((s) => s.type === 'hero') as { heading?: string } | undefined;
  const name = hero?.heading ?? content.title.split('|')[0].trim();

  return (
    <div className="bg-paper text-ink">
      <HubJsonLd
        hub={{
          name,
          title: content.title,
          description: content.metaDescription ?? "",
          path,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
            { name, path },
          ],
        }}
      />
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
      <RelatedLinks
        title="Solutions for this industry"
        links={INDUSTRY_SOLUTION_LINKS[slug] || []}
      />
      <RelatedCards
        eyebrow="Products"
        heading="AI Software for This Industry"
        intro="Product pages for the software we most often build in this sector."
        items={productCards(INDUSTRY_PRODUCT_LINKS[slug] ?? [])}
        tone="secondary"
      />
    </div>
  );
}