// content/blog/types.ts
// Code-owned blog articles, rendered by app/blog/[slug]/page.tsx.
// Text fields support the RichText syntax: **bold** and [anchor](/path).

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; caption?: string; head: string[]; rows: string[][] }
  | { type: 'callout'; title?: string; text: string };

export interface ArticleSection {
  /** H2. An id is derived from it for the table of contents. */
  heading: string;
  blocks: ArticleBlock[];
  /** Optional H3 subsections. */
  subsections?: { heading: string; blocks: ArticleBlock[] }[];
}

export interface BlogArticle {
  slug: string;
  /** <title>, max 60 characters including the brand. */
  title: string;
  /** Meta description, 140 to 155 characters. */
  metaDescription: string;
  keywords?: string;
  /** H1, max 70 characters. */
  h1: string;
  /** Card and hub summary. */
  excerpt: string;
  /** Cluster this article supports (see lib/link-graph.ts topics). */
  category: string;
  /** ISO dates. dateModified changes only when the content changes. */
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  /** Paragraphs under the H1, before the first H2. */
  intro: string[];
  /** Short answer box shown near the top (also good for featured snippets). */
  keyTakeaways?: string[];
  sections: ArticleSection[];
  faqs?: { question: string; answer: string }[];
  /** Commercial and pillar pages this article supports. */
  related: { href: string; label: string }[];
  /** Official sources the facts were checked against. */
  sources?: { label: string; url: string; checked: string }[];
}
