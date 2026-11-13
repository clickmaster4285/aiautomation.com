"use client";

import { motion } from "framer-motion";

import { SectionLabel, splitHeading } from "./Shared";
import Tools, { type ToolsData } from "./Tools";

type IntegrationCategory = { title: string; description: string };

type IntegrationsData = {
  label: string;
  heading: string;
  subheading: string;
  categories: IntegrationCategory[];
};

// Integrations and platforms (handover 4.9): integration cards plus the tool list.
export default function Integrations({
  data,
  tools,
  marker,
}: {
  data: IntegrationsData;
  tools?: ToolsData;
  marker?: string;
}) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section id="integrations" className="bg-secondary py-12 md:py-24">
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label={data.label} marker={marker} />

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {head}{" "}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground md:text-right md:self-end">
            {data.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {data.categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-paper border border-border p-6 md:p-8 hover:border-brand transition-colors"
            >
              <div className="eyebrow text-brand tabular-nums mb-4" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="display text-xl md:text-2xl mb-3">{c.title}</h3>

              <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </div>

        {tools && <Tools data={tools} />}
      </div>
    </section>
  );
}
