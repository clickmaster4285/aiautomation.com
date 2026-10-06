// content/case-studies/index.ts
// Register every generated case study here. The Python script writes the
// per-slug .ts files; this file wires them into the app.

import type { CaseStudy } from "./clickmasters-ai-lead-response-case-study";
import { caseStudy as clickmasters } from "./clickmasters-ai-lead-response-case-study";

export type RegistryEntry = { slug: string; data: CaseStudy };

export const caseStudies: RegistryEntry[] = [
  { slug: clickmasters.slug, data: clickmasters },
  { slug: "ai-receptionist-lead-response-automation", data: clickmasters },
  { slug: "ai-lead-response-revenue-recovery", data: clickmasters },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)?.data;
}

export function getAllSlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}