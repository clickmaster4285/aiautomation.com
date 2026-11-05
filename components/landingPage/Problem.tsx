"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Marker, splitHeading } from "./Shared";

type ProblemData = {
  heading: string;
  subheading: string;
  items: string[];
};

export default function Problem({ data }: { data: ProblemData }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section className="bg-ink text-white py-24 relative overflow-hidden">
      <div className="mx-auto max-w-[84vw] px-6">
        <div className="flex items-center w-full gap-4 mb-12">
          <Marker n="03" />

          <div className="flex-1 h-px bg-white/10" />

          <span className="eyebrow text-white/60 whitespace-nowrap">
            What Can You Automate
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl">
            {head}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>

          <div>
            <p className="text-white/70 max-w-md mb-8">
              {data.subheading}
            </p>

            <div className="flex gap-10">
              <div className="border-l-2 border-brand pl-4">
                <div className="display text-4xl">40+</div>
                <div className="eyebrow text-white/60 mt-1">
                  Hrs/Week Wasted
                </div>
              </div>

              <div className="border-l-2 border-brand pl-4">
                <div className="display text-4xl">$180K</div>
                <div className="eyebrow text-white/60 mt-1">
                  Avg Wasted Cost
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/robo-side.jpg"
          alt="Robot illustration beside the problem section"
          width={480}
          height={541}
          sizes="144px"
          quality={60}
          className="absolute left-0 top-[40%] w-36 h-auto opacity-90 hidden md:block"
        />

        <div className="mt-16 divide-y divide-white/10 border-t border-white/10 max-w-3xl">
          {data.items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-6 py-5 group cursor-default"
            >
              <span className="text-brand text-xl">—</span>

              <span className="display text-2xl md:text-3xl lg:text-4xl group-hover:translate-x-2 transition-transform">
                {t}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}