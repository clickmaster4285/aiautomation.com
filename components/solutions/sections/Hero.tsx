// components/solutions/sections/Hero.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import { splitHeading } from '@/components/landingPage/Shared';

interface HeroSectionProps {
  badge?: string;
  heading: string;
  subheading: string;
  features?: string[];
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  image?: string;
  /** Descriptive alt text for the hero image. Falls back to the heading. */
  imageAlt?: string;
  visual?: ReactNode;
  breadcrumb?: Array<{ label: string; href: string }>;
  stats?: Array<{ label: string; value: string }>;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  textSize?: 'normal' | 'large' | 'xlarge' | 'xxlarge';
  tickerItems?: string[];
}

export function HeroSection({
  badge,
  heading,
  subheading,
  features,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  visual,
  breadcrumb,
  stats,
  className = '',
  imageWidth = 700,
  imageHeight = 580,
  textSize = 'xlarge',
  tickerItems = [
    'AI-Powered Automation',
    'Workflow Optimization',
    'Intelligent Chatbots',
    'CRM Integration',
    'Document Processing',
    'Lead Generation',
    'Marketing Automation',
    'Sales Enablement',
  ],
}: HeroSectionProps) {
  const router = useRouter();

  // Determine text sizes based on textSize prop
  const headingSize = {
    normal: 'text-3xl md:text-4xl lg:text-5xl',
    large: 'text-4xl md:text-5xl lg:text-6xl',
    xlarge: 'text-4xl md:text-6xl lg:text-7xl',
    xxlarge: 'text-5xl md:text-7xl lg:text-8xl',
  }[textSize];

  const subheadingSize = {
    normal: 'text-base md:text-lg',
    large: 'text-lg md:text-xl',
    xlarge: 'text-xl md:text-2xl',
    xxlarge: 'text-2xl md:text-3xl',
  }[textSize];

  const { head, tail } = splitHeading(heading, 2);

  // Duplicate items for seamless scrolling
  const doubledTickerItems = [
    ...tickerItems,
    ...tickerItems,
    ...tickerItems,
  ];

  // Default breadcrumb if not provided
  const defaultBreadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
  ];

  const breadcrumbItems = breadcrumb || defaultBreadcrumb;

  // Handle primary CTA click - navigate to contact page for "Book a Free Audit"
  const handlePrimaryCtaClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    router.push('/contact');
  };

  return (
    <>
      <section
        className={`relative isolate overflow-hidden bg-paper pt-6 pb-12 md:py-10 ${className}`}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />

        <div className="mx-auto max-w-[84vw] px-6 relative z-20">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 md:mb-6"
          >
            <nav
              className="eyebrow flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
              aria-label="Breadcrumb"
            >
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                const isHome = item.label === 'Home';

                return (
                  <div key={index} className="flex items-center">
                    {isLast ? (
                      <span className="text-ink">
                        {item.label}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-1 transition-colors hover:text-brand ${
                            isHome ? 'hover:no-underline' : ''
                          }`}
                        >
                          {isHome && (
                            <Home className="h-3.5 w-3.5 md:h-4 md:w-4" />
                          )}
                          <span>{item.label}</span>
                        </Link>

                        <span className="text-border">
                          /
                        </span>
                      </>
                    )}
                  </div>
                );
              })}
            </nav>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center min-h-[400px] md:min-h-[480px]">
            {/* Left Content */}
            <motion.div
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 text-left w-full"
            >
              {badge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex justify-start"
                >
                  <span className="eyebrow mb-5 inline-block border border-brand px-3 py-1 text-xs text-brand md:mb-7 md:text-sm">{badge}</span>
                </motion.div>
              )}

              <motion.h1
                className={`display ${headingSize} mb-5 text-left leading-[1.05] md:mb-7`}
                initial={{ y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {head}{head && ' '}
                <span className="display-italic font-normal text-brand">{tail}</span>
              </motion.h1>

              <motion.p
                className={`${subheadingSize} text-muted-foreground leading-relaxed mb-4 max-w-xl text-left`}
                initial={{ y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {subheading}
              </motion.p>

              {/* Optional Features */}
              {features && features.length > 0 && (
                <motion.ul
                  className="space-y-2 mb-6 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                >
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground text-base md:text-lg"
                    >
                      <span className="text-brand mt-1 flex-shrink-0">
                        ✦
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </motion.ul>
              )}

              <motion.div
                className="flex flex-wrap gap-3 mb-6 justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link
                  href={primaryCta.href}
                  onClick={handlePrimaryCtaClick}
                  className="group inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm text-white transition-colors hover:bg-brand md:px-7 md:py-4 md:text-base"
                >
                  {primaryCta.text}

                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-white md:px-7 md:py-4 md:text-base"
                  >
                    {secondaryCta.text}
                  </Link>
                )}
              </motion.div>

              {stats && (
                <motion.div
                  className="flex gap-6 justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="border-l border-border pl-4 first:border-l-0 first:pl-0"
                    >
                      <div className="display text-xl md:text-2xl text-ink font-bold">
                        {stat.value}
                      </div>

                      <div className="text-xs md:text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Right Content - INCREASED IMAGE SIZE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 flex justify-center lg:justify-end"
            >
              {visual ? (
                visual
              ) : image ? (
                <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl">
                  <div className="relative overflow-hidden border border-border bg-paper p-2">
                    <Image
                      src={image}
                      alt={imageAlt || heading}
                      width={imageWidth}
                      height={imageHeight}
                      sizes="(min-width: 1024px) 540px, (min-width: 768px) 480px, 92vw"
                      quality={60}
                      className="w-full h-auto object-contain"
                      preload
                    />
                  </div>

                  <div aria-hidden="true" className="absolute -inset-8 -z-10 bg-brand/10 blur-3xl" />
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gap between hero and ticker */}
      <div className="h-4 md:h-6" />

      {/* Ticker / Marquee Section */}
      <div className="relative overflow-hidden border-y border-white/10 bg-ink py-3 md:py-4">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-brand/5 opacity-20" />

        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-ink to-transparent z-10" />

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-ink to-transparent z-10" />

        <div className="overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, '-50%'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {doubledTickerItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 md:gap-6 px-4 md:px-6 flex-shrink-0"
              >
                <span className="text-sm md:text-base font-medium text-white tracking-wide uppercase">
                  {item}
                </span>

                <span className="text-brand text-lg md:text-xl">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}