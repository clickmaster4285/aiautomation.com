import Image from "next/image";
import Link from "next/link";

import { splitHeading } from "@/components/landingPage/Shared";

export type CmsPostCard = {
  title: string;
  url: string;
  excerpt?: string;
  image?: string;
  date?: string;
};

type CmsPostsData = {
  heading?: string;
  description?: string;
  posts: CmsPostCard[];
};

// Blog Posts / Related Posts grid.
export default function CmsPostsSection({ data }: { data: CmsPostsData }) {
  const { head, tail } = splitHeading(data.heading ?? "");

  return (
    <section className="bg-paper py-12 md:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        {(data.heading || data.description) && (
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              {head}
              {head && <br />}
              <span className="display-italic text-brand">{tail}</span>
            </h2>
            {data.description && (
              <p className="text-base md:text-lg text-muted-foreground md:text-right md:self-end">
                {data.description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.posts.map((post, i) => {
            const internal = post.url.startsWith("/");
            const card = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6">
                  {post.date && <p className="eyebrow text-muted-foreground text-xs mb-3">{post.date}</p>}
                  <h3 className="display text-2xl mb-3 group-hover:text-brand transition-colors">{post.title}</h3>
                  {post.excerpt && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  )}
                  <span className="inline-block mt-4 text-sm font-medium text-ink group-hover:text-brand transition-colors">
                    Read article ›
                  </span>
                </div>
              </>
            );
            const className = "group block border border-border bg-paper hover:border-brand/40 transition-colors";
            return internal ? (
              <Link key={i} href={post.url} className={className}>{card}</Link>
            ) : (
              <a key={i} href={post.url} className={className} target="_blank" rel="noopener noreferrer">{card}</a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
