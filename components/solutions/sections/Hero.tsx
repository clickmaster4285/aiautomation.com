// components/solutions/sections/Hero.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import { Bodoni_Moda } from 'next/font/google';
import { Eyebrow } from '@/components/solutions/layout/Section';

// High-contrast Didone serif - matches the reference "AUTOMATE THE FUTURE" style.
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

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

  // Animated floating particles
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 200 + 20,
    y: Math.random() * 400 + 50,
    size: Math.random() * 8 + 3,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.2 + 0.1,
  }));

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
        className={`relative overflow-hidden pt-4 pb-0 md:pt-6 md:pb-0 bg-paper ${className}`}
      >
        {/* Background Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-transparent to-white/80" />

          <motion.div
            className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand/20 via-brand/10 to-transparent blur-3xl"
            animate={{
              x: [-20, 30, -20],
              y: [-10, 20, -10],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute -left-16 top-1/3 w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-orange-400/15 via-brand/10 to-transparent blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-brand/20 to-orange-400/20 backdrop-blur-sm"
              style={{
                width: particle.size,
                height: particle.size,
                left: particle.x,
                top: particle.y,
              }}
              animate={{
                y: [particle.y, particle.y - 100, particle.y],
                x: [particle.x, particle.x + 50, particle.x],
                opacity: [
                  particle.opacity,
                  particle.opacity * 2,
                  particle.opacity,
                ],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          ))}

          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent to-white/90 z-10" />
        </div>

        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand/0 via-brand to-brand/0 z-20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <div className="mx-auto max-w-[84vw] px-6 relative z-20">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 md:mb-6"
          >
            <nav
              className="flex items-center flex-wrap gap-1 text-sm"
              aria-label="Breadcrumb"
            >
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                const isHome = item.label === 'Home';

                return (
                  <div key={index} className="flex items-center">
                    {isLast ? (
                      <span className="text-gray-500 font-medium text-sm md:text-base">
                        {item.label}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-1 text-gray-400 hover:text-brand transition-colors duration-200 text-sm md:text-base ${
                            isHome ? 'hover:no-underline' : ''
                          }`}
                        >
                          {isHome && (
                            <Home className="h-3.5 w-3.5 md:h-4 md:w-4" />
                          )}
                          <span>{item.label}</span>
                        </Link>

                        <span className="text-gray-300 mx-1 md:mx-1.5">
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
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
                  <Eyebrow>{badge}</Eyebrow>
                </motion.div>
              )}

              <motion.h1
                className={`${bodoni.className} ${headingSize} text-ink leading-[1.1] mb-4 font-black text-left`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {heading}
              </motion.h1>

              <motion.p
                className={`${subheadingSize} text-muted-foreground leading-relaxed mb-4 max-w-xl text-left`}
                initial={{ opacity: 0, y: 20 }}
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
                  className="inline-flex items-center gap-2 bg-ink hover:bg-ink/90 text-paper text-sm md:text-base px-6 md:px-8 py-3 md:py-3.5 transition-all duration-300 rounded-lg font-medium group"
                >
                  {primaryCta.text}

                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 border border-border hover:border-brand text-muted-foreground hover:text-brand text-sm md:text-base px-6 md:px-8 py-3 md:py-3.5 transition-all duration-300 rounded-lg font-medium"
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
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-white/50 backdrop-blur-sm p-3">
                    <Image
                      src={image}
                      alt={heading}
                      width={imageWidth}
                      height={imageHeight}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>

                  <div className="absolute -inset-8 bg-brand/10 rounded-full blur-3xl -z-10" />
                  <div className="absolute -inset-12 bg-orange-400/5 rounded-full blur-2xl -z-20" />
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gap between hero and ticker */}
      <div className="h-4 md:h-6" />

      {/* Ticker / Marquee Section */}
      <div className="relative overflow-hidden bg-black border-y border-white/10 py-3 md:py-4">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-brand/5 opacity-20" />

        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-black to-transparent z-10" />

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-black to-transparent z-10" />

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