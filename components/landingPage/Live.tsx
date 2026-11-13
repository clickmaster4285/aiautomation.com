"use client";

import { motion } from "framer-motion";
import { SectionLabel, splitHeading } from "./Shared";

type ExampleWorkflowData = {
  label: string;
  heading: string;
  body: string;
  panelTitle: string;
  steps: string[];
};

// Example workflow (handover 4.7). The panel is an illustration, not a live system:
// no "LIVE" badge, counters, status words or performance statistics.
export default function Live({ data, marker }: { data: ExampleWorkflowData; marker?: string }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section id="example-workflow" className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <SectionLabel label={data.label} marker={marker} />

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
              {head}{" "}
              <br />
              <span className="display-italic text-brand">{tail}</span>
            </h2>
            <p className="text-muted-foreground mt-4 md:mt-6 max-w-xl text-sm md:text-base leading-relaxed mx-auto md:mx-0">
              {data.body}
            </p>
          </div>

          {/* Illustration panel */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full rounded-lg border border-border bg-white shadow-2xl overflow-hidden"
          >
            <figcaption className="flex items-center gap-1.5 px-3 md:px-4 py-2 md:py-3 border-b border-border bg-secondary">
              <span className="size-2 md:size-3 rounded-full bg-red-400" aria-hidden="true" />
              <span className="size-2 md:size-3 rounded-full bg-amber-400" aria-hidden="true" />
              <span className="size-2 md:size-3 rounded-full bg-emerald-400" aria-hidden="true" />
              <span className="text-[11px] md:text-xs text-muted-foreground mx-auto pr-8">
                {data.panelTitle}
              </span>
            </figcaption>

            <ol className="divide-y divide-border">
              {data.steps.map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="flex items-center gap-3 md:gap-4 px-4 md:px-5 py-4 md:py-5"
                >
                  <span className="eyebrow text-brand tabular-nums text-xs md:text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-sm md:text-base">{step}</span>
                  {i < data.steps.length - 1 && (
                    <span className="ml-auto text-muted-foreground" aria-hidden="true">
                      ↓
                    </span>
                  )}
                </motion.li>
              ))}
            </ol>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
