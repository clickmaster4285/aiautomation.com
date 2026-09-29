"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Marker, splitHeading } from "./Shared";

type CaseStudyResult = {
  metric: string;
  before: string;
  after: string;
};

type CaseStudy = {
  title: string;
  description: string;
  results: CaseStudyResult[];
};

type WorkData = {
  heading: string;
  subheading: string;
  items: CaseStudy[];
};

// Case study titles look like "Sales Lead Qualification (B2B Services Company)"
// -> { title: "Sales Lead Qualification", tag: "B2B Services Company" }
function splitTitle(raw: string) {
  const match = raw.match(/^(.*?)\s*\((.+)\)\s*$/);
  return match
    ? { title: match[1], tag: match[2] }
    : { title: raw, tag: "Case Study" };
}

const featuredImg = "/images/work2.jpg";
const secondaryImgs = ["/images/work3.jpg", "/images/work4.jpg"];

export default function Work({ data }: { data: WorkData }) {
  const { head, tail } = splitHeading(data.heading);

  const featuredItem = data.items[0];
  const parsedFeatured = featuredItem
    ? splitTitle(featuredItem.title)
    : { title: "", tag: "Case Study" };

  const featured = {
    tag: parsedFeatured.tag,
    title: parsedFeatured.title,
    desc: featuredItem?.description ?? "",
    co: parsedFeatured.tag,
    results: featuredItem?.results ?? [],
    img: featuredImg,
  };

  const secondary = data.items.slice(1, 3).map((c, i) => {
    const parsed = splitTitle(c.title);
    return {
      tag: parsed.tag,
      title: parsed.title,
      desc: c.description,
      co: parsed.tag,
      before: c.results[0]?.before ?? "",
      after: c.results[0]?.after ?? "",
      img: secondaryImgs[i] ?? featuredImg,
    };
  });

  return (
    <section id="work" className="bg-secondary py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
          <Marker n="11" />
          <div className="flex-1 h-px bg-black/10" />
          <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
            Case Studies
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            {head}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>

          <a href="#" className="text-sm hover:text-brand">
            View all work →
          </a>
        </div>

        {/* Summary of results from the content data file */}
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed mt-4 mb-8 md:mb-12">
          {data.subheading}
        </p>

        {/* Featured Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:grid md:grid-cols-2 overflow-hidden"
        >
          <div className="bg-ink text-white p-6 md:p-10 flex flex-col justify-between min-h-[380px] md:min-h-[420px] order-2 md:order-1">
            <div>
              <span className="eyebrow text-brand mb-4 md:mb-6 inline-block text-xs md:text-sm">
                {featured.tag}
              </span>

              <h3 className="display text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 leading-tight">
                {featured.title}
              </h3>

              <p className="text-sm text-white/60 max-w-md leading-relaxed">
                {featured.desc}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10 pt-4 md:pt-6 border-t border-white/10">
              <div>
                <div className="eyebrow text-white/40 mb-1 text-xs md:text-sm">
                  Client
                </div>

                <div className="display text-base sm:text-lg md:text-xl">
                  {featured.co}
                </div>
              </div>

              {featured.results.map((r) => (
                <div key={r.metric}>
                  <div className="eyebrow text-white/40 mb-1 text-xs md:text-sm">
                    {r.metric}
                  </div>

                  <div className="display text-base sm:text-lg md:text-xl text-brand">
                    {r.before} <span className="text-white/40">→</span>{" "}
                    {r.after}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[380px] overflow-hidden group order-1 md:order-2">
            <Image
              src={featured.img}
              alt={featured.title}
              width={900}
              height={600}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Secondary Projects */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
          {secondary.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative h-64 sm:h-80 md:h-110 overflow-hidden group cursor-pointer"
            >
              <Image
                src={c.img}
                alt={c.title}
                width={900}
                height={600}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <span className="eyebrow text-brand bg-white/10 backdrop-blur px-2 py-1 self-start">
                  {c.tag}
                </span>

                <div>
                  <h3 className="display text-2xl md:text-3xl mb-2 md:mb-3">
                    {c.title}
                  </h3>

                  <p className="text-xs md:text-sm text-white/70 max-w-md leading-relaxed mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
                    {c.desc}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs border-t border-white/20 pt-3">
                    <span>{c.co}</span>
                    <span className="text-brand">
                      {c.before} <span className="text-white/50">→</span>{" "}
                      {c.after}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}