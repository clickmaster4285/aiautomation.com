// content/blogs/index.ts
// Registry for the blog at /blogs. To publish an article: add a file in
// content/blogs/posts, then add it to BLOG_POSTS below. Slugs must be unique
// (checked at module load). /blogs, /blogs/[slug] and sitemap_blogs.xml all read from here.
import type {
  BlogAuthor,
  BlogCategory,
  BlogCategorySlug,
  BlogPost,
  BlogPostSummary,
} from './types';
import { aiAutomationForBusiness } from './posts/ai-automation-for-business';
import { aiWorkflowAutomationGuide } from './posts/ai-workflow-automation-guide';
import { aiAgentsVsChatbots } from './posts/ai-agents-vs-chatbots-vs-workflow-automation';
import { aiChatbotsForCustomerSupport } from './posts/ai-chatbots-for-customer-support';
import { aiCrmAndSalesAutomation } from './posts/ai-crm-and-sales-automation';
import { aiAutomationInHealthcare } from './posts/ai-automation-in-healthcare';
import { aiAutomationForRealEstate } from './posts/ai-automation-for-real-estate';
import { aiAutomationForEcommerce } from './posts/ai-automation-for-ecommerce';
import { zapierVsMakeVsN8n } from './posts/zapier-vs-make-vs-n8n-ai-automation-platforms';

export { BLOG_BASE, postPath, formatBlogDate } from './utils';

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: 'automation-strategy',
    name: 'Automation Strategy',
    description: 'Where to start, how to measure return and how to roll out AI automation safely.',
  },
  {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    description: 'Designing reliable AI-assisted workflows across your business systems.',
  },
  {
    slug: 'ai-agents-chatbots',
    name: 'AI Agents & Chatbots',
    description: 'Conversational AI, autonomous agents and how to choose between them.',
  },
  {
    slug: 'customer-support',
    name: 'Customer Support',
    description: 'Support automation that answers faster and hands off gracefully.',
  },
  {
    slug: 'sales-crm',
    name: 'Sales, Marketing & CRM',
    description: 'Lead response, CRM hygiene, follow-up and finance integration.',
  },
  {
    slug: 'industry-guides',
    name: 'Industry Guides',
    description: 'Practical AI automation playbooks for specific industries.',
  },
  {
    slug: 'tools-platforms',
    name: 'Tools & Platforms',
    description: 'Comparisons and guidance on automation platforms and custom builds.',
  },
];

// Articles are credited to the team. Add a Person author here (and set
// authorId on the article) once a named expert has reviewed it.
export const BLOG_AUTHORS: BlogAuthor[] = [
  {
    id: 'clickmasters-team',
    name: 'Clickmasters AI Automation Team',
    type: 'Organization',
    role: 'AI automation consultants and engineers',
    bio: 'The Clickmasters team designs, builds and maintains AI agents, chatbots, workflow automations and system integrations for growing businesses in the United States, the United Kingdom and Pakistan.',
  },
];

/** Display order for posts that share a publication date. */
export const BLOG_POSTS: BlogPost[] = [
  aiAutomationForBusiness,
  aiWorkflowAutomationGuide,
  aiAgentsVsChatbots,
  aiChatbotsForCustomerSupport,
  aiCrmAndSalesAutomation,
  aiAutomationInHealthcare,
  aiAutomationForRealEstate,
  aiAutomationForEcommerce,
  zapierVsMakeVsN8n,
];

// Fail the build loudly if two articles share a slug or reference a missing category/author.
(function validateRegistry() {
  const seen = new Set<string>();
  for (const post of BLOG_POSTS) {
    if (seen.has(post.slug)) throw new Error(`[blogs] duplicate slug: ${post.slug}`);
    seen.add(post.slug);
    if (!BLOG_CATEGORIES.some((c) => c.slug === post.category)) {
      throw new Error(`[blogs] unknown category "${post.category}" on ${post.slug}`);
    }
    if (!BLOG_AUTHORS.some((a) => a.id === post.authorId)) {
      throw new Error(`[blogs] unknown author "${post.authorId}" on ${post.slug}`);
    }
    const ids = new Set<string>();
    for (const section of post.sections) {
      if (ids.has(section.id)) throw new Error(`[blogs] duplicate section id "${section.id}" on ${post.slug}`);
      ids.add(section.id);
    }
  }
})();

/** Newest first; ties keep registry order. */
export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS.map((post, index) => ({ post, index }))
    .sort((a, b) => b.post.publishedAt.localeCompare(a.post.publishedAt) || a.index - b.index)
    .map(({ post }) => post);
}

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getCategory(slug: BlogCategorySlug): BlogCategory {
  return BLOG_CATEGORIES.find((c) => c.slug === slug) ?? BLOG_CATEGORIES[0];
}

export function getAuthor(id: string): BlogAuthor {
  return BLOG_AUTHORS.find((a) => a.id === id) ?? BLOG_AUTHORS[0];
}

const stripMarks = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '');

function countWords(text: string): number {
  return stripMarks(text).split(/\s+/).filter(Boolean).length;
}

export function getWordCount(post: BlogPost): number {
  const parts: string[] = [post.title, ...post.intro, ...post.conclusion];
  for (const section of post.sections) {
    parts.push(section.heading);
    for (const block of section.blocks) {
      switch (block.type) {
        case 'p':
        case 'h3':
          parts.push(block.text);
          break;
        case 'ul':
        case 'ol':
          parts.push(...block.items);
          break;
        case 'callout':
          parts.push(block.title, block.text);
          break;
        case 'table':
          parts.push(...block.headers, ...block.rows.flat());
          break;
      }
    }
  }
  for (const faq of post.faqs) parts.push(faq.q, faq.a);
  return parts.reduce((sum, part) => sum + countWords(part), 0);
}

/** Reading time at ~220 words per minute, minimum one minute. */
export function getReadingMinutes(post: BlogPost): number {
  return Math.max(1, Math.round(getWordCount(post) / 220));
}

export function toSummary(post: BlogPost): BlogPostSummary {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    publishedAt: post.publishedAt,
    image: post.image,
    featured: post.featured,
    categoryName: getCategory(post.category).name,
    readingMinutes: getReadingMinutes(post),
    authorName: getAuthor(post.authorId).name,
  };
}

/** Same category first, then shared tags, then newest. */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPost(slug);
  if (!current) return [];
  const tags = new Set(current.tags.map((t) => t.toLowerCase()));
  return getAllPosts()
    .filter((post) => post.slug !== slug)
    .map((post, order) => ({
      post,
      order,
      score:
        (post.category === current.category ? 3 : 0) +
        post.tags.filter((t) => tags.has(t.toLowerCase())).length,
    }))
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .slice(0, limit)
    .map(({ post }) => post);
}

/** Neighbours in the newest-first list: `previous` is newer, `next` is older. */
export function getAdjacentPosts(slug: string): { previous?: BlogPost; next?: BlogPost } {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return {};
  return { previous: posts[index - 1], next: posts[index + 1] };
}
