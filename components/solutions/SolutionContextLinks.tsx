"use client";

// Rendered once for every /solutions/* page from app/solutions/layout.tsx.
// Outputs BreadcrumbList JSON-LD only (the visible breadcrumb lives in the hero).
// Internal links live inside the page copy instead (lib/inline-links.ts).

import { usePathname } from "next/navigation";
import { canonicalUrl } from "@/lib/canonical";
import { solutionBreadcrumbs } from "@/lib/link-graph";
import type { SolutionLink } from "@/lib/solution-link-index";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SolutionContextLinks({ index }: { index: SolutionLink[] }) {
  const pathname = (usePathname() || "/").replace(/\/$/, "");
  const crumbs = solutionBreadcrumbs(pathname);
  if (crumbs.length < 3) return null; // the /solutions hub itself

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.name,
            item: canonicalUrl(crumb.path),
          })),
        }),
      }}
    />
  );
}
