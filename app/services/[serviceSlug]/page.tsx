// app/services/[serviceSlug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { allServices, getServiceBySlug, getTemplate } from '@/content/services/index';
import CmsRoute, { cmsRouteMetadata } from '@/components/cms/CmsRoute';
import { canonicalUrl } from '@/lib/canonical';
import { withEditedPageSeo } from '@/lib/erp-edits';
import { withSocialDefaults } from '@/lib/seo';
import { RelatedLinks } from '@/components/seo/RelatedLinks';
import { SERVICE_SOLUTION_LINKS, SERVICE_PRODUCT_LINKS } from '@/lib/internal-links';
import { RelatedCards } from '@/components/seo/RelatedCards';
import { productCards } from '@/lib/product-cards';
import { HubJsonLd } from '@/components/seo/HubJsonLd';

// ── Only these services are live under /services/<slug> ──
const activeServiceSlugs = new Set(allServices.map((s) => s.slug));

export async function generateStaticParams() {
  return allServices.map((s) => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  // ERP edited-page SEO fields (if any) override only the fields they set.
  return withSocialDefaults(await withEditedPageSeo(`/services/${serviceSlug}`, await serviceMetadata(serviceSlug)));
}

async function serviceMetadata(serviceSlug: string): Promise<Metadata> {
  // Not a code-owned service → a Nexus CMS page may live here.
  if (!activeServiceSlugs.has(serviceSlug)) {
    return cmsRouteMetadata(`/services/${serviceSlug}`);
  }

  const service = getServiceBySlug(serviceSlug);
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: canonicalUrl(`/services/${serviceSlug}`),
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      type: 'website',
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;

  if (!activeServiceSlugs.has(serviceSlug)) {
    return <CmsRoute path={`/services/${serviceSlug}`} />;
  }

  const service = getServiceBySlug(serviceSlug);
  if (!service) {
    notFound();
  }

  const Template = getTemplate(serviceSlug);
  const related = SERVICE_SOLUTION_LINKS[serviceSlug] || [];
  const path = `/services/${serviceSlug}`;
  const name = allServices.find((s) => s.slug === serviceSlug)?.title ?? service.title;
  return (
    <>
      <HubJsonLd
        hub={{
          name,
          title: service.title,
          description: service.metaDescription ?? "",
          path,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name, path },
          ],
        }}
      />
      <Template data={service} />
      <RelatedLinks title="Related solutions" links={related} />
      <RelatedCards
        eyebrow="Products"
        heading="Software We Build for This"
        intro="Product pages for the AI software this service delivers."
        items={productCards(SERVICE_PRODUCT_LINKS[serviceSlug] ?? [])}
        tone="secondary"
      />
    </>
  );
}