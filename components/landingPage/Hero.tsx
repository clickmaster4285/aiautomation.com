"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

import { Dot } from "./Shared";

type HeroCta = { text: string; link: string; primary?: boolean };

export type HeroData = {
  badge?: string;
  headline: string;
  /** Optional accent ending of the H1, rendered as an inline span. */
  headlineAccent?: string;
  subheading?: string;
  description?: string;
  note?: string;
  cta?: HeroCta;
  secondaryCta?: HeroCta;
};

export type StatItem = { label: string; value: string };

export default function Hero({
  data,
  stats = [],
  ctaPosition,
}: {
  data: HeroData;
  stats?: StatItem[];
  /** Sent to analytics as the audit button position (e.g. "hero"). */
  ctaPosition?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.1,
      });

      gsap.from(".hero-meta", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.1,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const heroStats = stats
    .filter((stat) => {
      const value = (stat.value || "").trim();
      const match = value.match(/\d+(?:\.\d+)?/);
      if (!value || /^[+%.\s]*$/.test(value)) return false;
      if (match && Number(match[0]) <= 0) return false;
      return true;
    })
    .slice(0, 2);

  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-6 pb-12 md:pt-0 md:pb-0 flex-1 md:flex md:items-center overflow-hidden bg-paper isolate"
    >
      <div className="mx-auto max-w-[84vw] w-full px-6 relative z-10">
        <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-4 md:gap-6">
          {/* TEXT */}
          <div className="relative z-10 py-4 md:py-10">
            {data.badge && (
              <span className="hero-meta eyebrow text-brand border border-brand inline-block px-3 py-1 mb-5 md:mb-7 text-xs md:text-sm">
                {data.badge}
              </span>
            )}

            {/* One heading, inline content only */}
            <h1 className="hero-title display text-[9vw] sm:text-6xl md:text-[4.4vw] xl:text-[4.6vw] leading-[1.05]">
              {data.headline}
              {data.headlineAccent && (
                <>
                  {" "}
                  <span className="accent display-italic font-normal text-brand">
                    {data.headlineAccent}
                  </span>
                </>
              )}
            </h1>

            {data.subheading && (
              <p className="hero-meta mt-5 md:mt-7 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {data.subheading}
              </p>
            )}

            {(data.cta || data.secondaryCta) && (
              <div className="hero-meta mt-6 md:mt-9 flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                {data.cta && (
                  <a
                    href={data.cta.link}
                    data-cta-position={ctaPosition}
                    className="bg-ink text-white text-sm md:text-base px-5 py-3 md:px-7 md:py-4 hover:bg-brand transition-colors inline-flex items-center justify-center gap-2 text-center"
                  >
                    {data.cta.text} <span aria-hidden="true">›</span>
                  </a>
                )}

                {data.secondaryCta && (
                  <a
                    href={data.secondaryCta.link}
                    className="border border-ink text-ink text-sm md:text-base px-5 py-3 md:px-7 md:py-4 font-medium hover:bg-ink hover:text-white transition-colors text-center"
                  >
                    {data.secondaryCta.text}
                  </a>
                )}
              </div>
            )}

            {data.note && (
              <p className="hero-meta mt-4 text-sm text-muted-foreground max-w-xl leading-relaxed">
                {data.note}
              </p>
            )}
          </div>

          {/* IMAGE */}
          <motion.div
            style={{ y }}
            className="hidden md:flex md:absolute md:right-0 md:top-0 md:w-[40%] md:h-full items-center justify-center md:justify-end pointer-events-none z-0 mt-4 md:mt-0"
          >
            <Image
              src="/images/hero.jpg"
              alt=""
              width={800}
              height={800}
              sizes="(min-width: 768px) 400px, 80vw"
              quality={60}
              priority
              fetchPriority="high"
              className="w-full max-w-sm md:max-w-none object-contain max-h-[50vh] md:max-h-full"
            />
          </motion.div>
        </div>

        {(data.description || heroStats.length > 0) && (
          <div className="mt-8 md:mt-12 grid md:grid-cols-[1.4fr_auto] items-end gap-6 md:gap-8 hero-meta relative z-10">
            {data.description && (
              <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
                {data.description}
              </p>
            )}

            {heroStats.length > 0 && (
              <div className="flex gap-6 md:gap-10">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <div className="display text-3xl md:text-5xl">{s.value}</div>
                    <div className="eyebrow text-muted-foreground mt-1 text-xs md:text-sm">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* DOTS */}
      <Dot className="absolute top-[30%] left-[55%]" />
      <Dot className="absolute top-[45%] left-[8%]" />
      <Dot className="absolute top-[70%] left-[4%]" />
    </section>
  );
}
