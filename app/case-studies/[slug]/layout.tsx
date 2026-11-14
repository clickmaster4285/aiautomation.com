import type { ReactNode } from "react";
import type { Metadata } from "next";
import { getAllSlugs, getCaseStudy } from "@/content/case-studies";
import { canonicalUrl } from "@/lib/canonical";

// Case studies are static content files, so prerender them at build time
// instead of rendering on every request. Unknown slugs still render on demand.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const seo = (study?.seo ?? {}) as {
    canonical?: string;
    title?: string;
    description?: string;
    robots?: string;
  };
  const canonical = canonicalUrl(seo.canonical || `/case-studies/${slug}`);

  return {
    title: seo.title,
    description: seo.description,
    robots: seo.robots,
    alternates: { canonical },
    openGraph: seo.title
      ? { title: seo.title, description: seo.description, url: canonical, type: "article" }
      : undefined,
  };
}

export default function CaseStudyLayout({ children }: { children: ReactNode }) {
  return children;
}
