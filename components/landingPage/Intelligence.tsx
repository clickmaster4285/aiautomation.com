"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Marker, splitHeading } from "./Shared";

type IntelligenceData = {
  heading: string;
  content: string;
  tags: string[];
};

export default function Intelligence({ data }: { data: IntelligenceData }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section id="about" className="bg-paper py-24">
      <div className="mx-auto max-w-[84vw] px-6">

        {/* Header */}
        <div className="flex items-center w-full mb-12 gap-4">
          <Marker n="02" />
          <div className="flex-1 border-t border-black/10" />
          <p className="eyebrow text-muted-foreground whitespace-nowrap">
            What We Do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="relative">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {head}
              <br />
              <span className="display-italic text-brand">{tail}</span>
            </h2>

            {/* Mascot */}
            <motion.div
              className="absolute -top-6 right-8 w-52 md:w-64 float-y"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Image
                src="/images/robot-mascot2.jpg"
                alt="Clickmasters robot mascot"
                width={479}
                height={479}
                sizes="(min-width: 768px) 256px, 208px"
                quality={60}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Tags */}
            {data.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-10">
                {data.tags.map((t) => (
                  <span
                    key={t}
                    className="text-sm border border-gray-300 px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {data.content}
            </p>

            <div className="divide-y divide-border border-t border-border">
              {[
                ["Lead Captured", "Website / Landing Page"],
                ["AI Qualification", "Instant Scoring & Routing"],
                ["CRM Sync", "HubSpot / Salesforce"],
                ["Follow Up Sent", "Personalized Outreach"],
                ["Meeting Booked", "Auto Calendar Invite"],
              ].map(([a, b], i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="eyebrow text-muted-foreground tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="font-medium text-lg">{a}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}