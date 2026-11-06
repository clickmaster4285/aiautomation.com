"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { canonicalUrl } from "@/lib/canonical";
import {
  SEGMENT_INDUSTRY_PAGE,
  SOLUTION_SERVICE_PAGE,
} from "@/lib/internal-links";
import type { SolutionLink } from "@/lib/solution-link-index";

const CATEGORY_LABEL: Record<string, string> = {
  "ai-chatbots": "AI Chatbots",
  "ai-agents": "AI Agents",
  "ai-voice-agents": "AI Voice Agents",
  "ai-workflow-automation": "AI Workflow Automation",
  "business-process-automation": "Business Process Automation",
  "crm-automation": "CRM Automation",
  "customer-support-automation": "Customer Support Automation",
  "document-automation": "Document Automation",
  "invoice-automation": "Invoice Automation",
  "appointment-booking-automation": "Appointment Booking",
  "marketing-automation": "Marketing Automation",
  "sales-automation": "Sales Automation",
  "lead-generation-automation": "Lead Generation",
  "reporting-automation": "Reporting Automation",
};

function segmentOf(path: string) {
  const parts = path.split("/").filter(Boolean);
  return parts.length >= 3 ? parts[2] : "";
}

function neighbors<T extends { path: string }>(items: T[], currentPath: string, count: number) {
  const sorted = items.slice().sort((a, b) => a.path.localeCompare(b.path));
  const index = sorted.findIndex((item) => item.path === currentPath);
  if (index < 0) return sorted.slice(0, count);
  const picked: T[] = [];
  for (let step = 1; picked.length < count && step < sorted.length; step++) {
    picked.push(sorted[(index + step) % sorted.length]);
  }
  return picked;
}

export function SolutionContextLinks({ index }: { index: SolutionLink[] }) {
  const pathname = usePathname() || "/";
  const current = index.find((item) => item.path === pathname);
  if (!current) return null;

  const parts = current.path.split("/").filter(Boolean);
  const isHub = parts.length === 2;
  const segment = segmentOf(current.path);
  const parentPath = `/solutions/${current.category}`;
  const parent = index.find((item) => item.path === parentPath);
  const categoryLabel = CATEGORY_LABEL[current.category] || current.title;

  const sameCategory = index
    .filter((item) => item.category === current.category && item.path !== current.path)
    .sort((a, b) => a.path.localeCompare(b.path));

  const links: { href: string; label: string }[] = [];
  if (!isHub && parent) links.push({ href: parent.path, label: parent.title });

  const industry = SEGMENT_INDUSTRY_PAGE[segment.replace(/^for-/, "")];
  if (industry) links.push(industry);

  const service = SOLUTION_SERVICE_PAGE[current.category];
  if (service) links.push(service);

  const categoryAll = index
    .filter((item) => item.category === current.category)
    .sort((a, b) => a.path.localeCompare(b.path));
  const related = isHub ? sameCategory : neighbors(categoryAll, current.path, 4);
  for (const item of related) links.push({ href: item.path, label: item.title });

  if (!isHub) {
    const audienceAll = index.filter((item) => segment && segmentOf(item.path) === segment);
    for (const item of neighbors(audienceAll, current.path, 4)) {
      links.push({ href: item.path, label: item.title });
    }
  }

  const seen = new Set<string>();
  const unique = links.filter((link) => {
    if (!link.href || link.href === current.path || seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
  ];
  if (!isHub && parent) crumbs.push({ name: categoryLabel, path: parent.path });
  crumbs.push({ name: current.title, path: current.path });

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  };

  return (
    <section className="bg-paper border-t border-border py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="mx-auto max-w-[84vw] px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <span key={crumb.path}>
                {index > 0 && <span className="mx-2">/</span>}
                {last ? (
                  <span className="text-ink">{crumb.name}</span>
                ) : (
                  <Link href={crumb.path} className="hover:text-brand">
                    {crumb.name}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
        <h2 className="text-2xl font-semibold text-ink mb-6">
          {isHub ? `${categoryLabel} by industry and platform` : "Related solutions and industries"}
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {unique.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-ink hover:text-brand">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
