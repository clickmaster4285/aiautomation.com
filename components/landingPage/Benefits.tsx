"use client";

import { motion } from "framer-motion";

import { SectionLabel, splitHeading } from "./Shared";

type BenefitItem = { title: string; description: string };

type BenefitsData = {
  label: string;
  heading: string;
  subheading?: string;
  items: BenefitItem[];
};

// Benefits (handover 4.6)
export default function Benefits({ data, marker }: { data: BenefitsData; marker?: string }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section id="benefits" className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <SectionLabel label={data.label} marker={marker} />

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {head}{" "}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>

          {data.subheading && (
            <p className="text-base md:text-lg text-muted-foreground md:text-right md:self-end">
              {data.subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {data.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-paper p-8 group hover:bg-ink hover:text-white transition-colors duration-500"
            >
              <div className="eyebrow text-brand tabular-nums py-4" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="display text-2xl md:text-3xl mb-3">{item.title}</h3>

              <p className="text-sm md:text-md text-muted-foreground group-hover:text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
