// components/cms/CmsRoute.tsx
// Renders whatever page Nexus CMS has published at a URL path — used by the
// root catch-all (app/[...slug]) and as the fallback of existing dynamic
// routes for slugs they don't own. No per-page code: path in, page out.
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildCmsMetadata, getCmsPage } from "@/lib/cms";
import CmsSectionRenderer from "./CmsSectionRenderer";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { BLOG_RESOURCE_LINKS } from "@/lib/internal-links";

/** "/a/b" from route segments (["a", "b"]). */
export function cmsPath(segments: string[]) {
  return `/${segments.join("/")}`;
}

export async function cmsRouteMetadata(path: string): Promise<Metadata> {
  return buildCmsMetadata(await getCmsPage(path));
}

export default async function CmsRoute({ path }: { path: string }) {
  const page = await getCmsPage(path);
  if (!page) notFound();
  const showResources = page.pageType === "blog" || page.slug.startsWith("/blog/");
  return (
    <>
      <CmsSectionRenderer page={page} />
      {showResources && (
        <RelatedLinks title="Related services and solutions" links={BLOG_RESOURCE_LINKS} />
      )}
    </>
  );
}
