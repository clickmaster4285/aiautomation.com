// components/blog/BlogCard.tsx
// One article teaser. Used by the /blogs hub and the related-articles block.
// The whole card is a single link so it is one tab stop for keyboard users.
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import type { BlogPostSummary } from '@/content/blogs/types';
import { formatBlogDate, postPath } from '@/content/blogs/utils';

type Props = {
  post: BlogPostSummary;
  /** Heading level for the card title, so it fits the surrounding outline. */
  headingLevel?: 'h2' | 'h3';
};

export function BlogCard({ post, headingLevel = 'h3' }: Props) {
  const Heading = headingLevel;
  return (
    <article className="group h-full">
      <Link
        href={postPath(post.slug)}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-black/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink shadow-sm">
            {post.categoryName}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingMinutes} min read
            </span>
          </div>

          <Heading className="text-xl font-bold leading-snug text-ink transition-colors group-hover:text-brand">
            {post.title}
          </Heading>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-ink">
            Read article
            <ArrowUpRight
              className="h-4 w-4 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
