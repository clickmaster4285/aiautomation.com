"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel, splitHeading } from "./Shared";

type IndustryItem = {
  title: string;
  description: string;
  link?: string;
};

type IndustriesData = {
  label: string;
  heading: string;
  subheading: string;
  items: IndustryItem[];
};

// Industries (handover 4.11)
export default function Industries({ data, marker }: { data: IndustriesData; marker?: string }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section id="industries" className="bg-ink text-white py-24">
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label={data.label} marker={marker} dark />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {head}{" "}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>
          <p className="text-sm md:text-base text-white/60 md:text-right md:self-end max-w-sm md:ml-auto">
            {data.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-px bg-white/10 border border-white/10">
          {data.items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`bg-ink p-8 hover:bg-white/5 transition-colors ${
                i < 4 ? "md:col-span-3" : "md:col-span-4"
              }`}
            >
              <div className="eyebrow text-white/40 py-6" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="display text-2xl md:text-3xl mb-2 pb-6 border-white/10 border-b">
                {it.title}
              </h3>

              <p className="text-md text-white/60 leading-relaxed pt-4">{it.description}</p>

              {it.link && (
                <Link
                  href={it.link}
                  className="mt-6 inline-block eyebrow text-brand text-xs md:text-sm hover:underline"
                >
                  Explore <span className="sr-only">{it.title}</span>{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
