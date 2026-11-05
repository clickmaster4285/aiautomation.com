"use client";

import { canonicalUrl, SITE_ORIGIN } from "@/lib/canonical";
import type { HubSeo } from "@/lib/hub-seo";

type Faq = { question: string; answer: string };

export function HubJsonLd({
  hub,
  faqs,
}: {
  hub: HubSeo;
  faqs?: Faq[];
}) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: hub.crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: canonicalUrl(crumb.path),
      })),
    },
    {
      "@type": "Service",
      name: hub.name,
      description: hub.description,
      url: canonicalUrl(hub.path),
      provider: {
        "@type": "Organization",
        name: "Clickmasters",
        url: SITE_ORIGIN,
      },
    },
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
