
import type { Metadata } from "next";
import { unstable_cache } from "next/cache";

// The public API only ever returns the published snapshot of a page, so
// drafts / unpublished pages come back as 404 and are never rendered here.

const CMS_API_URL = process.env.CMS_API_URL;
const CMS_SITE_DOMAIN = process.env.CMS_SITE_DOMAIN;

// CMS_SITE_DOMAIN is required because it is used by the cache key and API URL.
if (!CMS_SITE_DOMAIN) {
  throw new Error("CMS_SITE_DOMAIN is not configured");
}

// Seconds before a cached CMS response is refetched in production.
// In development the cache is bypassed so CMS edits show on the next refresh.
export const CMS_REVALIDATE_SECONDS = 60;

const CMS_TIMEOUT_MS = 5000;

// Same format the CMS stores: "/segment" or "/nested/segment", lowercase.
const SLUG_REGEX = /^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*)(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/;

export type CmsSection = {
  id: string;
  type: string;
  order: number;
  content: Record<string, unknown>;
  settings: Record<string, unknown>;
};

export type CmsSeo = {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  focusKeyword: string;
};

/** Published pages the CMS attaches for Blog Posts / Related Posts sections. */
export type CmsPostSummary = {
  title: string;
  url: string;
  excerpt: string;
  image: string;
  publishedAt: string;
};

export type CmsPage = {
  title: string;
  slug: string;
  pageType: string;
  sections: CmsSection[];
  seo: CmsSeo;
  posts: CmsPostSummary[];
};

/**
 * Fetches one published page by slug (e.g. "/blog/ai-automation").
 *
 * Returns null when the page doesn't exist / isn't published, or when the
 * CMS is unreachable — callers show the normal not-found page in both cases,
 * so a CMS outage never crashes the site (or a build).
 */
export async function getCmsPage(slug: string): Promise<CmsPage | null> {
  if (!SLUG_REGEX.test(slug)) {
    return null;
  }

  if (!CMS_API_URL) {
    console.error("[cms] CMS_API_URL is not set");
    return null;
  }

  try {
    return await fetchCmsPageCached(slug);
  } catch (error) {
    console.error(`[cms] failed to fetch page ${slug}:`, error);
    return null;
  }
}

async function fetchCmsPage(slug: string): Promise<CmsPage | null> {
  if (!CMS_API_URL) {
    throw new Error("CMS_API_URL is not configured");
  }

  // slug is validated by SLUG_REGEX, so it is safe to append as a path.
  const url = `${CMS_API_URL}/public/${encodeURIComponent(
    CMS_SITE_DOMAIN,
  )}/pages${slug}`;

  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(CMS_TIMEOUT_MS),
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`${url} responded ${res.status}`);
  }

  const json = await res.json();

  const page = parsePage(json?.data?.page);

  if (!page) {
    throw new Error(`${url} returned an invalid page payload`);
  }

  return page;
}

// unstable_cache (not fetch's own cache) so that a 404 is cached too:
// fetch only caches 200s, which would keep serving an unpublished page from
// the stale cache forever. Outages throw instead of returning, so they are
// never cached and a revalidation during an outage keeps the last good copy.

const fetchCmsPageCached =
  process.env.NODE_ENV === "development"
    ? fetchCmsPage
    : unstable_cache(fetchCmsPage, ["cms-page", CMS_SITE_DOMAIN], {
        revalidate: CMS_REVALIDATE_SECONDS,
        tags: ["cms-page"],
      });

/** Next.js metadata built from the page's CMS SEO fields. */
export function buildCmsMetadata(page: CmsPage | null): Metadata {
  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  const { seo } = page;

  const title = seo.title || page.title;
  const description = seo.metaDescription || undefined;

  const ogImage =
    /^https?:\/\//i.test(seo.ogImage) ? seo.ogImage : undefined;

  return {
    title,
    description,

    keywords: seo.focusKeyword ? [seo.focusKeyword] : undefined,

    robots: seo.robots || undefined,

    // An explicit alternates object replaces the layout canonical, so always
    // set one. Fall back to the page slug when the CMS field is empty.
    alternates: {
      canonical: seo.canonicalUrl || page.slug,
    },

    openGraph: {
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      type: page.pageType === "blog" ? "article" : "website",

      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

/* ------------------------- defensive parsing ------------------------- */

// CMS content is untrusted data: only copy known fields of the right type.

const str = (v: unknown): string => (typeof v === "string" ? v : "");

const obj = (v: unknown): Record<string, unknown> =>
  v && typeof v === "object" && !Array.isArray(v)
    ? (v as Record<string, unknown>)
    : {};

function parsePage(raw: unknown): CmsPage | null {
  const p = obj(raw);

  if (!str(p.slug) || !Array.isArray(p.sections)) {
    return null;
  }

  const seo = obj(p.seo);
  const posts = obj(p.context).posts;

  // The CMS resolves the page's template (plus website/page overrides) into
  // `design`; its per-section-type defaults apply under each section's settings.
  //
  // Brand tokens (colors, fonts) are intentionally not applied:
  // ClickMasters' own design system styles every CMS page.
  const sectionDefaults = obj(obj(p.design).sectionDefaults);

  return {
    title: str(p.title),
    slug: str(p.slug),
    pageType: str(p.pageType),

    sections: p.sections
      .map(obj)
      .filter((s) => str(s.type))
      .map((s, i) => ({
        id: str(s.id) || `section-${i}`,
        type: str(s.type),
        order: typeof s.order === "number" ? s.order : i,

        content: obj(s.content),

        settings: {
          ...obj(sectionDefaults[str(s.type)]),
          ...obj(s.settings),
        },
      }))
      .sort((a, b) => a.order - b.order),

    seo: {
      title: str(seo.title),
      metaDescription: str(seo.metaDescription),
      canonicalUrl: str(seo.canonicalUrl),
      robots: str(seo.robots),
      ogTitle: str(seo.ogTitle),
      ogDescription: str(seo.ogDescription),
      ogImage: str(seo.ogImage),
      focusKeyword: str(seo.focusKeyword),
    },

    posts: (Array.isArray(posts) ? posts : [])
      .map(obj)
      .map((post) => ({
        title: str(post.title),
        url: str(post.url),
        excerpt: str(post.excerpt),
        image: str(post.image),
        publishedAt: str(post.publishedAt),
      })),
  };
}
