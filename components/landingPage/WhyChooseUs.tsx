"use client";

import { motion } from "framer-motion";

import { SectionLabel, splitHeading } from "./Shared";

type WhyItem = { title: string; description: string };

type WhyChooseUsData = {
  label: string;
  heading: string;
  subheading?: string;
  items: WhyItem[];
  closingStatement?: string;
};

// Why Clickmasters (handover 4.12)
export default function WhyChooseUs({ data, marker }: { data: WhyChooseUsData; marker?: string }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section id="why-us" className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label={data.label} marker={marker} />

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {head}{" "}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>

          {data.subheading && (
            <p className="text-sm md:text-base text-muted-foreground md:text-right md:self-end">
              {data.subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {data.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-paper p-8 md:p-10 group hover:bg-ink hover:text-white transition-colors duration-500"
            >
              <div className="size-2 rounded-full bg-brand mb-5" aria-hidden="true" />

              <h3 className="display text-xl md:text-2xl mb-2">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-muted-foreground group-hover:text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {data.closingStatement && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 border-l-2 border-brand pl-6 md:pl-8"
          >
            <p className="display text-2xl md:text-3xl lg:text-4xl">
              {data.closingStatement}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}