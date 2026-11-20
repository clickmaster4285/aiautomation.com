// lib/blog-seo.ts
// Metadata and JSON-LD for /blogs and /blogs/[slug]. Structured data points at the
// single site Organization node (lib/organization.ts) instead of repeating it.
// No FAQPage markup: see the note in lib/organization.ts.
import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';
import { ORGANIZATION_ID, WEBSITE_ID } from '@/lib/organization';
import { SITE_NAME } from '@/lib/site-contact';
import {
  BLOG_BASE,
  getAuthor,
  getCategory,
  getWordCount,
  postPath,
} from '@/content/blogs';
import type { BlogPost } from '@/content/blogs/types';

export const BLOG_HUB = {
  title: 'AI Automation Blog – Insights, Guides & Business Automation Strategies',
  description:
    'Practical guides on AI automation for business: workflow automation, AI agents, chatbots, CRM and sales automation, industry playbooks and platform comparisons.',
  heading: 'AI Automation Blog',
  ogImage: { url: '/images/industrial.webp', width: 1408, height: 768, alt: 'Clickmasters AI automation blog' },
};

export function blogHubMetadata(): Metadata {
  const url = canonicalUrl(BLOG_BASE);
  return {
    title: BLOG_HUB.title,
    description: BLOG_HUB.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: BLOG_HUB.title,
      description: BLOG_HUB.description,
      url,
      type: 'website',
      siteName: SITE_NAME,
      images: [BLOG_HUB.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: BLOG_HUB.title,
      description: BLOG_HUB.description,
      images: [BLOG_HUB.ogImage.url],
    },
  };
}

export function blogPostMetadata(post: BlogPost): Metadata {
  const url = canonicalUrl(postPath(post.slug));
  const author = getAuthor(post.authorId);
  const image = { url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    authors: [{ name: author.name }],
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: 'article',
      siteName: SITE_NAME,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [author.name],
      section: getCategory(post.category).name,
      tags: post.tags,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image.src],
    },
  };
}

function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

function authorNode(post: BlogPost) {
  const author = getAuthor(post.authorId);
  if (author.type === 'Organization') return { '@id': ORGANIZATION_ID };
  return { '@type': 'Person', name: author.name, jobTitle: author.role, worksFor: { '@id': ORGANIZATION_ID } };
}

export function blogHubJsonLd(posts: BlogPost[]) {
  const url = canonicalUrl(BLOG_BASE);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${url}#blog`,
        url,
        name: BLOG_HUB.heading,
        description: BLOG_HUB.description,
        inLanguage: 'en',
        isPartOf: { '@id': WEBSITE_ID },
        publisher: { '@id': ORGANIZATION_ID },
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          '@id': `${canonicalUrl(postPath(post.slug))}#article`,
          headline: post.title,
          url: canonicalUrl(postPath(post.slug)),
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
        })),
      },
      breadcrumbNode([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: BLOG_BASE },
      ]),
    ],
  };
}

export function blogPostJsonLd(post: BlogPost) {
  const url = canonicalUrl(postPath(post.slug));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        mainEntityOfPage: url,
        url,
        headline: post.title,
        description: post.metaDescription,
        image: {
          '@type': 'ImageObject',
          url: canonicalUrl(post.image.src),
          width: post.image.width,
          height: post.image.height,
          caption: post.image.alt,
        },
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: authorNode(post),
        publisher: { '@id': ORGANIZATION_ID },
        isPartOf: { '@id': `${canonicalUrl(BLOG_BASE)}#blog` },
        articleSection: getCategory(post.category).name,
        keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(', '),
        wordCount: getWordCount(post),
        inLanguage: 'en',
      },
      breadcrumbNode([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: BLOG_BASE },
        { name: post.title, path: postPath(post.slug) },
      ]),
    ],
  };
}

/** Serialise JSON-LD safely for a <script> tag (no "</script>" breakout). */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
