// app/[...slug]/page.tsx
// Catch-all for every URL no other app route handles. Any page published in
// Nexus CMS for this website is served at its CMS slug (e.g. /nano,
// /blog/my-post, /abc/xyz/test) without adding code; anything else is a 404.
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import type { Metadata } from 'next';
import CmsRoute, { cmsPath, cmsRouteMetadata } from '@/components/cms/CmsRoute';

const AboutPage = dynamic(() => import('@/components/about/pageAbout').then((mod) => mod.default));
const ContactPage = dynamic(() => import('@/components/contact/pageContact').then((mod) => mod.default));

// Code-owned single-segment pages (formerly app/[slug]); these win over CMS pages.
const pages: Record<string, ComponentType> = {
  about: AboutPage,
  contact: ContactPage,
};

// Keep in sync with CMS_REVALIDATE_SECONDS in lib/cms.ts (must be a literal).
export const revalidate = 60;

type Props = { params: Promise<{ slug: string[] }> };

// Only single-segment URLs can match a code-owned page. Own keys only, so
// paths like /constructor or /toString can't resolve to inherited members.
const pageKey = (slug: string[]) => (slug.length === 1 && Object.hasOwn(pages, slug[0]) ? slug[0] : '');

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (pages[pageKey(slug)]) return {};
  return cmsRouteMetadata(cmsPath(slug));
}

// ── Service pages now live at /services/<slug> (see app/services/[serviceSlug]) ──
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const Component = pages[pageKey(slug)];
  if (Component) {
    return <Component />;
  }

  return <CmsRoute path={cmsPath(slug)} />;
}
