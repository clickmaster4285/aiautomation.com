// content/blogs/utils.ts
// Lightweight helpers with no article imports, so client components can use them
// without pulling every article body into the browser bundle.

export const BLOG_BASE = '/blogs';

export function postPath(slug: string): string {
  return `${BLOG_BASE}/${slug}`;
}

/** "20 November 2026". Fixed locale and UTC so server and client render the same text. */
export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
