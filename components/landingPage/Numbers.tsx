"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Marker } from "./Shared";
import CountUp from "./CountUp";

export type StatItem = { label: string; value: string };

// "100+" -> 100 + "+", "98%" -> 98 + "%"
function parseStat(value: string) {
  const match = value.match(/(\d+)/);
  const num = match ? Number(match[1]) : 0;
  const suffix = value.replace(match ? match[1] : "", "").trim();
  return { num, suffix };
}

export default function Numbers({ stats = [] }: { stats?: StatItem[] }) {
  return (
    <section className="bg-paper py-12 md:py-24 relative">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
          <Marker n="10" />
          <div className="flex-1 h-px bg-black/10" />
          <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
            Published figures
          </span>
        </div>

        <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-8 md:mb-16 text-center md:text-left">
          Numbers
          <br />
          <span className="display-italic text-brand">that matter.</span>
        </h2>

        <Image
          src="/images/robot-mascot2.jpg"
          alt="Clickmasters robot mascot"
          width={479}
          height={479}
          sizes="(min-width: 1024px) 272px, 192px"
          quality={60}
          className="absolute right-12 top-64 w-48 lg:w-68 h-auto float-y hidden md:block"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border-t border-border pt-6 md:pt-12 md:divide-x divide-border">
          {stats.map((stat, i) => {
            const { num, suffix } = parseStat(stat.value);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-0 md:px-8 first:pl-0 last:pr-0 text-center md:text-left"
              >
                <div className="flex items-baseline justify-center md:justify-start">
                  <CountUp to={num} />
                  <span className="display text-4xl sm:text-5xl md:text-6xl text-brand">
                    {suffix}
                  </span>
                </div>

                <div className="text-brand capitalize text-base md:text-md font-medium mt-2 md:mt-3">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}