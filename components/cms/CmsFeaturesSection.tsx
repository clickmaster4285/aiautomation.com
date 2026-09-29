"use client";

import { motion } from "framer-motion";

import { Marker, splitHeading } from "@/components/landingPage/Shared";

type CmsFeatureItem = { icon?: string; title: string; description?: string; url?: string; linkLabel?: string };

type CmsFeaturesData = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  items: CmsFeatureItem[];
};

// Same grid/card treatment as landingPage/Benefits, but with CMS-controlled
// labels instead of the landing page's fixed "05 / Why Automate" header.
// Used for the CMS "features", "services", "benefits", "process" and "cards" types.
export default function CmsFeaturesSection({ data }: { data: CmsFeaturesData }) {
  const { head, tail } = splitHeading(data.heading ?? "");

  return (
    <section className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        {data.eyebrow && (
          <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="flex-1 h-px bg-black/10" />
            <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
              {data.eyebrow}
            </span>
          </div>
        )}

        {(data.heading || data.description) && (
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {head}
              {head && <br />}
              <span className="display-italic text-brand">{tail}</span>
            </h2>
            {data.description && (
              <p className="text-base md:text-lg text-muted-foreground md:text-right md:self-end">
                {data.description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-paper p-8 group hover:bg-ink hover:text-white transition-colors duration-500"
            >
              <div className="flex items-center justify-between py-4">
                <Marker n={String(i + 1).padStart(2, "0")} />
                {item.icon && <span className="text-2xl" aria-hidden>{item.icon}</span>}
              </div>
              <h3 className="display text-2xl md:text-3xl mb-3">{item.title}</h3>
              {item.description && (
                <p className="text-sm md:text-md text-muted-foreground group-hover:text-white/70 leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.url && (
                <a
                  href={item.url}
                  className="inline-block mt-4 text-sm font-medium text-brand group-hover:text-white transition-colors"
                >
                  {item.linkLabel || "Learn more"} ›
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
