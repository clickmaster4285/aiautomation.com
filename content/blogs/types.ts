// content/blogs/types.ts
// Shape of one blog article. Article copy lives in content/blogs/posts/*.ts and
// is registered in content/blogs/index.ts, the same way product pages live in
// content/products. Pages under app/blogs render whatever is registered there.
//
// Inline text supports two lightweight marks (rendered by components/blog/InlineText):
//   [label](/internal-path)  or  [label](https://external.site)  → link
//   **bold text**                                                 → <strong>

export type BlogCategorySlug =
  | 'automation-strategy'
  | 'workflow-automation'
  | 'ai-agents-chatbots'
  | 'customer-support'
  | 'industry-guides'
  | 'sales-crm'
  | 'tools-platforms';

export type BlogCategory = {
  slug: BlogCategorySlug;
  name: string;
  description: string;
};

export type BlogAuthor = {
  id: string;
  name: string;
  /** Organization authors point at the site Organization node in JSON-LD. */
  type: 'Organization' | 'Person';
  role: string;
  bio: string;
};

export type BlogImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; title: string; text: string }
  | { type: 'table'; caption: string; headers: string[]; rows: string[][] };

export type BlogSection = {
  /** Anchor id used by the table of contents. Must be unique within the article. */
  id: string;
  /** Rendered as an H2. */
  heading: string;
  blocks: BlogBlock[];
};

export type BlogFaq = { q: string; a: string };

export type BlogLink = { href: string; label: string };

export type BlogPost = {
  slug: string;
  /** H1 on the article page and the card title. */
  title: string;
  /** <title> tag. Keep under ~60 characters. */
  metaTitle: string;
  /** Meta description. Keep around 140–160 characters. */
  metaDescription: string;
  /** Card teaser and article standfirst. */
  excerpt: string;
  category: BlogCategorySlug;
  tags: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** ISO dates (YYYY-MM-DD). */
  publishedAt: string;
  updatedAt: string;
  authorId: string;
  image: BlogImage;
  featured?: boolean;
  intro: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  conclusion: string[];
  cta: {
    title: string;
    text: string;
    primary: BlogLink;
    secondary?: BlogLink;
  };
  /** Clickmasters services, solutions and industry pages that fit this article. */
  relatedLinks: BlogLink[];
  /** External sources the article refers to. */
  references: { label: string; url: string }[];
};

/** Lightweight shape sent to the client-side blog hub (no article body). */
export type BlogPostSummary = Pick<
  BlogPost,
  'slug' | 'title' | 'excerpt' | 'category' | 'tags' | 'publishedAt' | 'image' | 'featured'
> & {
  categoryName: string;
  readingMinutes: number;
  authorName: string;
};
