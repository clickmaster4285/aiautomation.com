// app/services/[serviceSlug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { allServices, getServiceBySlug, getTemplate } from '@/content/index';
import CmsRoute, { cmsRouteMetadata } from '@/components/cms/CmsRoute';

// ── Only these services are live under /services/<slug> ──
const activeServiceSlugs = new Set(allServices.map((s) => s.slug));

const SITE_URL = 'https://clickmastersaiautomation.com';

export async function generateStaticParams() {
  return allServices.map((s) => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;

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
      canonical: `${SITE_URL}/services/${serviceSlug}`,
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
  return <Template data={service} />;
}