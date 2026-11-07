// lib/erp-edits.ts
// Server-only client for ERP/Nexus "edited pages": published visual edits to
// existing pages on this site (code-owned or CMS). Separate from lib/cms.ts,
// which renders pages *created* in the CMS. The browser applies the edits
// (components/cms/ErpPageEdits.tsx) through the app/api/erp-edits proxy; the
// server only uses the SEO fields (withEditedPageSeo).
import type { Metadata } from 'next';
import { unstable_cache } from 'next/cache';
import { canonicalUrl } from '@/lib/canonical';
import { normalizeEditPath, parseErpSections, type ErpEdit } from '@/lib/erp-edits-shared';

// Same base URL / domain resolution as lib/cms.ts.
const CMS_API_URL = (
  process.env.CMS_API_URL ??
  (process.env.NODE_ENV === 'development' ? 'https://erp.clickmasters.pk' : undefined)
)?.replace(/\/+$/, '');

const CMS_SITE_DOMAIN = process.env.CMS_SITE_DOMAIN ?? 'clickmastersaiautomation.com';

export const EDITS_REVALIDATE_SECONDS = 60;
const EDITS_TIMEOUT_MS = 4000;
// After a failed list fetch, don't retry for this long. Keeps builds and
// requests fast while the ERP is down (failures are never cached by unstable_cache).
const FAILURE_BACKOFF_MS = 30_000;

// Slugs from the list are used to build the page URL; allow only plain paths.
const SLUG_REGEX = /^\/[a-z0-9\-._~%/]*$/;

export type EditedPageSeo = {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
};

export type EditedPage = {
  slug: string;
  version: number;
  seo: EditedPageSeo;
  edits: ErpEdit[];
};

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
const obj = (v: unknown): Record<string, unknown> =>
  v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : {};

const base = () => `${CMS_API_URL}/public/${encodeURIComponent(CMS_SITE_DOMAIN)}`;

async function getJson(url: string): Promise<unknown | null> {
  const res = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(EDITS_TIMEOUT_MS) });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`${url} responded ${res.status}`);
  return res.json();
}

async function fetchEditedPaths(): Promise<string[]> {
  const json = await getJson(`${base()}/edited-pages`);
  const pages = obj(obj(json).data).pages;
  if (!Array.isArray(pages)) return [];
  const paths = pages
    .map((p) => normalizeEditPath(str(obj(p).slug)))
    .filter((slug) => SLUG_REGEX.test(slug));
  return [...new Set(paths)];
}

async function fetchEditedPage(slug: string): Promise<EditedPage | null> {
  const url =
    slug === '/'
      ? `${base()}/edited-page?slug=${encodeURIComponent('/')}`
      : `${base()}/edited-pages${slug.split('/').map(encodeURIComponent).join('/')}`;
  const json = await getJson(url);
  if (json === null) return null;
  const page = obj(obj(obj(json).data).page);
  const seo = obj(page.seo);
  return {
    slug,
    version: typeof page.version === 'number' ? page.version : 0,
    seo: {
      title: str(seo.title),
      metaDescription: str(seo.metaDescription),
      canonicalUrl: str(seo.canonicalUrl),
      robots: str(seo.robots),
      ogTitle: str(seo.ogTitle),
      ogDescription: str(seo.ogDescription),
      ogImage: str(seo.ogImage),
    },
    edits: parseErpSections(page.sections),
  };
}

// unstable_cache (as in lib/cms.ts) so 404s are cached too; thrown errors are not.
// Bypassed in development so ERP publishes show on the next navigation.
const isDev = process.env.NODE_ENV === 'development';
const cacheOptions = { revalidate: EDITS_REVALIDATE_SECONDS, tags: ['erp-edited-pages'] };
const fetchEditedPathsCached = isDev
  ? fetchEditedPaths
  : unstable_cache(fetchEditedPaths, ['erp-edited-paths', CMS_SITE_DOMAIN], cacheOptions);
const fetchEditedPageCached = isDev
  ? fetchEditedPage
  : unstable_cache(fetchEditedPage, ['erp-edited-page', CMS_SITE_DOMAIN], cacheOptions);

let lastFailureAt = 0;

/** Normalized paths ("/a/b", home "/") that have published edits. Empty on any error. */
export async function getEditedPaths(): Promise<string[]> {
  if (!CMS_API_URL || Date.now() - lastFailureAt < FAILURE_BACKOFF_MS) return [];
  try {
    return await fetchEditedPathsCached();
  } catch (error) {
    lastFailureAt = Date.now();
    if (isDev) console.warn('[erp-edits] failed to fetch edited pages list:', error);
    return [];
  }
}

/**
 * Published edits for a URL path, or null when there are none (or the ERP is
 * unreachable). Checks the cached list first, so unedited paths never hit the
 * per-page endpoint.
 */
export async function getEditedPage(path: string): Promise<EditedPage | null> {
  const slug = normalizeEditPath(path);
  const paths = await getEditedPaths();
  if (!paths.includes(slug)) return null;
  try {
    return await fetchEditedPageCached(slug);
  } catch (error) {
    if (isDev) console.warn(`[erp-edits] failed to fetch edited page ${slug}:`, error);
    return null;
  }
}

/**
 * Overlays an edited page's SEO fields on a route's own metadata. Only fields
 * the edited page actually sets are replaced; everything else is untouched.
 */
export async function withEditedPageSeo(path: string, metadata: Metadata): Promise<Metadata> {
  const page = await getEditedPage(path);
  if (!page) return metadata;
  const { seo } = page;
  const ogImage = /^https?:\/\//i.test(seo.ogImage) ? seo.ogImage : '';
  const hasOg = Boolean(seo.ogTitle || seo.ogDescription || ogImage);

  return {
    ...metadata,
    ...(seo.title ? { title: seo.title } : {}),
    ...(seo.metaDescription ? { description: seo.metaDescription } : {}),
    ...(seo.robots ? { robots: seo.robots } : {}),
    ...(seo.canonicalUrl
      ? { alternates: { ...metadata.alternates, canonical: canonicalUrl(seo.canonicalUrl) } }
      : {}),
    ...(hasOg
      ? {
          openGraph: {
            ...metadata.openGraph,
            ...(seo.ogTitle ? { title: seo.ogTitle } : {}),
            ...(seo.ogDescription ? { description: seo.ogDescription } : {}),
            ...(ogImage ? { images: [ogImage] } : {}),
          },
        }
      : {}),
  };
}
