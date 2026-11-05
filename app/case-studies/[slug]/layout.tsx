import type { ReactNode } from "react";
import type { Metadata } from "next";
import { getCaseStudy } from "@/content/case-studies";
import { canonicalUrl } from "@/lib/canonical";

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
