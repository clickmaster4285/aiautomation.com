"use client";

import { motion } from "framer-motion";

type CtaBandData = {
  heading: string;
  subheading: string;
  cta: { text: string; link: string; primary?: boolean };
};

export default function CtaBand({
  data,
  ctaPosition,
}: {
  data: CtaBandData;
  /** Sent to analytics as the audit button position (e.g. "mid-page"). */
  ctaPosition?: string;
}) {
  return (
    <section className="bg-ink text-white py-16 md:py-20">
      <div className="mx-auto max-w-[84vw] px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {data.heading}
          </h2>

          <p className="text-white/60 mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
            {data.subheading}
          </p>
        </div>

        <motion.a
          href={data.cta.link}
          data-cta-position={ctaPosition}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-brand text-white text-sm px-8 py-4 inline-flex items-center justify-center gap-2 whitespace-nowrap"
        >
          {data.cta.text} <span aria-hidden="true">›</span>
        </motion.a>
      </div>
    </section>
  );
}