"use client";

import { motion } from "framer-motion";
import { Marker, splitHeading } from "./Shared";

type TestimonialItem = {
  rating: number;
  quote: string;
  author: string;
  role: string;
  company: string;
};

type TestimonialsData = {
  heading: string;
  items: TestimonialItem[];
};

const portraits = [
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80", width: 500, height: 749 },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80", width: 500, height: 333 },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", width: 500, height: 750 },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80", width: 500, height: 749 },
];

const rotations = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];
const offsets = ["mt-0", "mt-8", "mt-2", "mt-10"];

export default function Testimonials({ data }: { data: TestimonialsData }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-[84vw] px-6">

        <div className="flex items-center w-full gap-4 mb-12">
          <Marker n="14" />

          <div className="flex-1 h-px bg-black/10" />

          <span className="eyebrow text-muted-foreground whitespace-nowrap">
            Client Voices
          </span>
        </div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 mb-16">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {head}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>
          <p className="text-sm text-muted-foreground md:self-end max-w-lg">
            Real feedback from business owners and operators who replaced
            manual work with AI automation built by Clickmasters.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {data.items.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, rotate: 0, scale: 1.03, zIndex: 10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 80 }}
              className={`relative bg-white p-3 pb-6 shadow-xl ${rotations[i % rotations.length]} ${offsets[i % offsets.length]} transform origin-center`}
              style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.25)" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
                <img
                  {...portraits[i % portraits.length]}
                  alt={t.author}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                />
              </div>

              <div
                className="text-brand text-sm mb-1 px-1"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {"★".repeat(t.rating)}
              </div>

              <div className="eyebrow text-muted-foreground text-md mb-1 px-1">
                {t.author}
              </div>
              <div className="text-xs text-muted-foreground px-1">
                {t.role}, {t.company}
              </div>
              <p
                className="text-lg leading-snug px-1 font-serif italic mt-3"
                style={{ fontFamily: "'Caveat', 'Bradley Hand', cursive" }}
              >
                {t.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}