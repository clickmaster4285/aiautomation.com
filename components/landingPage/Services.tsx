"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Dot, SectionLabel, splitHeading } from "./Shared";

type ServiceItem = {
  title: string;
  description: string;
  link: string;
};

type ServicesData = {
  label: string;
  heading: string;
  subheading: string;
  items: ServiceItem[];
};

// Column spans pattern for the 3-column desktop grid
const colSpans = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

// Services grid (handover 4.4). Rendered once; each card is a normal link.
export default function Services({ data, marker }: { data: ServicesData; marker?: string }) {
  const { head, tail } = splitHeading(data.heading, 1);

  return (
    <section id="services" className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <SectionLabel label={data.label} marker={marker} />

        {/* Title */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            {head}{" "}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground md:text-right md:self-end">
            {data.subheading}
          </p>
        </div>

        {/* GRID */}
        <div className="relative">
          <Dot className="hidden md:block absolute -top-2 -right-2 z-10" />
          <Dot className="hidden md:block absolute -left-2 top-[55%] z-10" />
          <Dot className="hidden md:block absolute -bottom-2 -right-2 z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {data.items.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className={`${colSpans[i] ?? "md:col-span-1"}`}
              >
                <Link
                  href={s.link}
                  className="block h-full bg-paper p-5 md:p-8 group hover:bg-ink hover:text-white transition-colors duration-500"
                >
                  <h3 className="display text-2xl md:text-4xl xl:text-5xl mb-2 md:mb-3">
                    {s.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-white/70">
                    {s.description}
                  </p>

                  <span className="mt-4 md:mt-6 inline-block eyebrow text-xs md:text-sm text-muted-foreground group-hover:text-brand">
                    Learn more <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
