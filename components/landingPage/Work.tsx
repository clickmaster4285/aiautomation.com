"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { SectionLabel, splitHeading } from "./Shared";

type ProofItem = {
  label: string;
  title: string;
  description: string;
  /** Only set once the linked page is publish-ready (handover H-07). */
  link?: { text: string; href: string };
};

type ProofData = {
  label: string;
  heading: string;
  items: ProofItem[];
  sectionLink?: { text: string; link: string };
};

// Proof (handover 4.10, default version). Shows only work that can be evidenced:
// no anonymous case studies, testimonials, star ratings or portraits.
export default function Work({ data, marker }: { data: ProofData; marker?: string }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section id="work" className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label={data.label} marker={marker} />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {head}{" "}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>

          {data.sectionLink && (
            <Link
              href={data.sectionLink.link}
              className="eyebrow text-brand text-xs md:text-sm hover:underline"
            >
              {data.sectionLink.text} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {data.items.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border bg-white p-6 md:p-10"
            >
              <span className="eyebrow inline-block border border-brand text-brand px-3 py-1 text-xs">
                {item.label}
              </span>

              <h3 className="display text-2xl md:text-4xl mt-6 mb-4">{item.title}</h3>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {item.link && (
                <Link
                  href={item.link.href}
                  className="mt-6 inline-block eyebrow text-brand text-xs md:text-sm hover:underline"
                >
                  {item.link.text} <span aria-hidden="true">→</span>
                </Link>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
