"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionLabel, splitHeading } from "./Shared";

type ProblemData = {
  label: string;
  heading: string;
  body: string;
  listHeading: string;
  items: string[];
  closingLine?: string;
};

// "What we automate" section (handover 4.3)
export default function Problem({ data, marker }: { data: ProblemData; marker?: string }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section id="what-we-automate" className="bg-ink text-white py-24 relative overflow-hidden">
      <div className="mx-auto max-w-[84vw] px-6">
        <SectionLabel label={data.label} marker={marker} dark />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl">
            {head}{" "}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>

          <p className="text-white/70 max-w-xl leading-relaxed md:self-end">{data.body}</p>
        </div>

        <Image
          src="/images/robo-side.jpg"
          alt="Robot peeking around a wall and waving"
          width={480}
          height={541}
          sizes="144px"
          quality={60}
          loading="lazy"
          className="absolute left-0 top-[40%] w-36 h-auto opacity-90 hidden md:block"
        />

        <div className="mt-16 max-w-3xl">
          <h3 className="eyebrow text-white/60 mb-4">{data.listHeading}</h3>

          <ul className="divide-y divide-white/10 border-t border-white/10">
            {data.items.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-6 py-5 group cursor-default"
              >
                <span className="text-brand text-xl" aria-hidden="true">—</span>
                <span className="display text-2xl md:text-3xl lg:text-4xl group-hover:translate-x-2 transition-transform">
                  {t}
                </span>
              </motion.li>
            ))}
          </ul>

          {data.closingLine && (
            <p className="mt-10 border-l-2 border-brand pl-6 text-lg md:text-xl text-white/80">
              {data.closingLine}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
