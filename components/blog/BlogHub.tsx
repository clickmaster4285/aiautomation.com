// components/blog/BlogHub.tsx
// Interactive part of /blogs: search + category filter over the article list.
// Every card is rendered in the server HTML (the default view shows all posts),
// so filtering is a convenience and never hides articles from crawlers.
'use client';

import { useDeferredValue, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import type { BlogPostSummary } from '@/content/blogs/types';
import { BlogCard } from './BlogCard';

type CategoryOption = { slug: string; name: string; count: number };

type Props = {
  posts: BlogPostSummary[];
  categories: CategoryOption[];
};

const ALL = 'all';

function matches(post: BlogPostSummary, terms: string[]): boolean {
  if (terms.length === 0) return true;
  const haystack = [post.title, post.excerpt, post.categoryName, ...post.tags].join(' ').toLowerCase();
  return terms.every((term) => haystack.includes(term));
}

export function BlogHub({ posts, categories }: Props) {
  const [category, setCategory] = useState<string>(ALL);
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const terms = deferredQuery.toLowerCase().split(/\s+/).filter(Boolean);
    return posts.filter((post) => (category === ALL || post.category === category) && matches(post, terms));
  }, [posts, category, deferredQuery]);

  const isFiltering = category !== ALL || deferredQuery.trim() !== '';
  const reset = () => {
    setCategory(ALL);
    setQuery('');
  };

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
          {[{ slug: ALL, name: 'All articles', count: posts.length }, ...categories].map((option) => {
            const active = category === option.slug;
            return (
              <button
                key={option.slug}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(option.slug)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  active
                    ? 'border-ink bg-ink text-white'
                    : 'border-border bg-white text-ink hover:border-brand hover:text-brand'
                }`}
              >
                {option.name}
                <span className={`text-xs tabular-nums ${active ? 'text-white/60' : 'text-muted-foreground'}`}>
                  {option.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:max-w-xs">
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            autoComplete="off"
            className="w-full rounded-full border border-border bg-white py-3 pl-11 pr-11 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-ink"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {isFiltering
          ? `${filtered.length} ${filtered.length === 1 ? 'article' : 'articles'} found`
          : `Showing all ${posts.length} articles`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <motion.ul layout className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-8">
          <AnimatePresence initial={false} mode="popLayout">
            {filtered.map((post) => (
              <motion.li
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <BlogCard post={post} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-14 text-center">
          <p className="text-lg font-semibold text-ink">No articles match your search.</p>
          <p className="mt-2 text-sm text-muted-foreground">Try a broader term or another category.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm text-white transition-colors hover:bg-brand"
          >
            Show all articles
          </button>
        </div>
      )}
    </div>
  );
}
