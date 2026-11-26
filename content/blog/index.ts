// content/blog/index.ts
// Code-owned articles. Newest first. A slug not listed here falls through to Nexus CMS.
import type { BlogArticle } from './types';
import { n8nVsZapierVsMake } from './n8n-vs-zapier-vs-make';
import { aiAgentsVsWorkflowAutomation } from './ai-agents-vs-workflow-automation';

export const blogArticles: BlogArticle[] = [n8nVsZapierVsMake, aiAgentsVsWorkflowAutomation].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

export const blogArticleBySlug: Record<string, BlogArticle> = Object.fromEntries(
  blogArticles.map((a) => [a.slug, a]),
);

/** URL-safe id for an H2, used by the table of contents. */
export const headingId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
