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
  subheading?: string;
  description?: string;
  note?: string;
  cta?: HeroCta;
  secondaryCta?: HeroCta;
};

export type StatItem = { label: string; value: string };

// Split the headline into short lines so each line animates in like the original design
function toLines(headline: string, wordsPerLine = 3): string[] {
  const words = headline.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(" "));
  }
  return lines;
}

export default function Hero({
  data,
  stats = [],
}: {
  data: HeroData;
  stats?: StatItem[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.2,
      });

      gsap.from(".hero-meta", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.9,
        stagger: 0.1,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const lines = toLines(data.headline);
  const heroStats = stats.slice(0, 2);

  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-8 pb-12 md:pt-16 md:pb-20 overflow-hidden bg-paper isolate"
    >
      <div className="mx-auto max-w-[84vw] px-6 relative z-10">

        {/* HERO MAIN */}
        <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-4 md:gap-6 mt-6 md:mt-10">

          {/* TEXT */}
          <div className="relative z-10 py-6 md:py-10">
            {data.badge && (
              <span className="hero-meta eyebrow text-brand border border-brand inline-block px-3 py-1 mb-6 text-xs md:text-sm">
                {data.badge}
              </span>
            )}

            <h1 className="display text-[9.5vw] sm:text-6xl md:text-[4.6vw] leading-[1.08]">
              {lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <div
                    className={`hero-word py-1 ${
                      i === lines.length - 1 ? "display-italic font-normal" : ""
                    }`}
                  >
                    {line}
                  </div>
                </div>
              ))}
            </h1>

            {data.subheading && (
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                {data.subheading}
              </p>
            )}
          </div>

          {/* IMAGE */}
          <motion.div
            style={{ y }}
            className="relative md:absolute md:right-0 md:top-0 md:w-[42%] md:h-full flex items-end justify-center md:justify-end pointer-events-none z-0 mt-4 md:mt-0"
          >
            <Image
              src="/images/hero.jpg"
              alt="AI robot"
              width={800}
              height={800}
              sizes="(min-width: 768px) 400px, 80vw"
              quality={60}
              priority
              className="w-full max-w-sm md:max-w-none object-contain max-h-[50vh] md:max-h-full"
            />
          </motion.div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-8 md:mt-16 grid md:grid-cols-[1.4fr_auto_auto] items-end gap-6 md:gap-8 hero-meta relative z-10">

          {data.description && (
            <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              {data.description}
            </p>
          )}

          {data.note && (
            <p className="text-sm md:text-base text-muted-foreground/80 max-w-md leading-relaxed">
              {data.note}
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

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {data.cta && (
              <a
                href={data.cta.link}
                className="bg-ink text-white text-sm px-5 py-3 hover:bg-brand transition-colors inline-flex items-center justify-center gap-2 text-center"
              >
                {data.cta.text} <span>›</span>
              </a>
            )}

            {data.secondaryCta && (
              <a
                href={data.secondaryCta.link}
                className="border border-ink text-ink text-sm px-5 py-3 font-medium hover:bg-ink hover:text-white transition-colors text-center"
              >
                {data.secondaryCta.text}
              </a>
            )}
          </div>

        </div>
      </div>

      {/* DOTS */}
      <Dot className="absolute top-[30%] left-[55%]" />
      <Dot className="absolute top-[45%] left-[8%]" />
      <Dot className="absolute top-[70%] left-[12%]" />
    </section>
  );
}