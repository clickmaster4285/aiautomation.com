// app/blog/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Calendar, Clock, User, Tag, Sparkles, BookOpen } from 'lucide-react';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { Section } from '@/components/solutions/layout/Section';

// Dot component - declared directly in the page
const Dot = ({ className }: { className?: string }) => {
  return (
    <div className={`w-2 h-2 rounded-full bg-brand/20 ${className || ''}`} />
  );
};

// No posts are published. The hub stays noindex until real articles exist.
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  slug: string;
  tags: string[];
};
const blogPosts: BlogPost[] = [];
export default function BlogPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-word", {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.2,
      });

      gsap.from(".blog-meta", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.9,
        stagger: 0.1,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
      },
    },
  };

  // Handle click to prevent navigation
  const handlePreventClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <PageWrapper>
      {/* Hero Section - Matching the homepage style with larger main heading */}
      <section
        ref={ref}
        className="relative pt-10 pb-14 md:pt-16 md:pb-20 overflow-hidden bg-paper isolate"
      >
        <div className="mx-auto max-w-[84vw] px-6 relative z-10">
          <div className="relative grid md:grid-cols-[1fr] gap-4 md:gap-6 mt-4 md:mt-6 text-center">
            {/* TEXT - Centered with larger main heading */}
            <div className="relative z-10 py-4 md:py-6">
              <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.05]">
                <div className="overflow-hidden">
                  <div className="blog-word py-1">AUTOMATION</div>
                </div>
                <div className="overflow-hidden">
                  <div className="blog-word whitespace-nowrap py-1">
                    <span className="text-brand">INSIGHTS</span>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="blog-word display-italic font-normal py-1">
                    & News.
                  </div>
                </div>
              </h1>

              <p className="blog-meta text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
                Articles are not published yet. This page stays out of search until there are real posts to read.
              </p>

              <div className="blog-meta flex flex-wrap justify-center gap-3 mt-6">
                <Link
                  href="/contact"
                  className="bg-ink text-white text-sm md:text-base px-5 py-3 hover:bg-brand transition-colors inline-flex items-center justify-center gap-2 text-center"
                >
                  Talk to the team <span>›</span>
                </Link>
                <div
                  className="border border-ink text-ink text-sm md:text-base px-5 py-3 font-medium hover:bg-ink hover:text-white transition-colors text-center cursor-default"
                  onClick={handlePreventClick}
                >
                  Browse Categories
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DOTS - Decorative elements */}
        <Dot className="absolute top-[30%] left-[55%]" />
        <Dot className="absolute top-[45%] left-[8%]" />
        <Dot className="absolute top-[70%] left-[12%]" />
      </section>

      {/* Blog Cards Section */}
      <Section bg="paper" className="py-16 md:py-20 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              Coming later
              <span className="w-8 h-px bg-brand" />
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
              No articles <span className="bg-gradient-to-r from-brand to-orange-400 bg-clip-text text-transparent">yet</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              There are no posts on this hub. The cards that used to appear here were placeholders and have been removed.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 cursor-default"
                onClick={handlePreventClick}
              >
                <div className="block">
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                    {/* Display actual blog image */}
                    <div className="w-full h-full relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={post.imageWidth}
                        height={post.imageHeight}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          // Show fallback icon
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = 'w-full h-full bg-gradient-to-br from-brand/20 to-orange-400/20 flex items-center justify-center';
                            fallback.innerHTML = '<svg class="h-16 w-16 text-brand/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>';
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-block bg-brand/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-brand transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Make "Read More" non-clickable */}
                    <div className="inline-flex items-center gap-2 text-brand font-medium pointer-events-none">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-brand text-brand hover:bg-brand hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 group"
            >
              Contact the team
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-orange-50/90 via-white/80 to-gray-50/95 border-y border-orange-100/50">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-orange-200/20" />
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-orange-200/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-gray-200/20 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[84vw] px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-left"
            >
              <span className="eyebrow text-brand">Stay Connected</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
                Get AI Automation <br />
                <span className="bg-gradient-to-r from-brand to-orange-400 bg-clip-text text-transparent">Insights Direct</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mb-8">
                Subscribe to our newsletter and stay ahead with the latest AI automation trends, tips, and case studies.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 group shadow-lg shadow-orange-200/40 hover:shadow-orange-300/50"
                >
                  Subscribe Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <span className="text-sm text-gray-600">Weekly insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <span className="text-sm text-gray-600">No spam</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <span className="text-sm text-gray-600">Unsubscribe anytime</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-2xl shadow-orange-100/20">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200/70 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-orange-200/40 hover:border-orange-200/80 transition-colors bg-white/95 cursor-default"
                      readOnly
                      onClick={handlePreventClick}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200/70 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-orange-200/40 hover:border-orange-200/80 transition-colors bg-white/95 cursor-default"
                      readOnly
                      onClick={handlePreventClick}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group shadow-lg shadow-orange-200/40 hover:shadow-orange-300/50 cursor-default"
                    onClick={handlePreventClick}
                  >
                    Subscribe to Newsletter
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-center text-gray-400">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}