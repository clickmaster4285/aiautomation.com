"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { splitHeading } from "./Shared";

type FinalCtaData = {
  heading: string;
  subheading: string;
  cta: { text: string; link: string; primary?: boolean };
};

export default function CTA({ data }: { data: FinalCtaData }) {
  const { head, tail } = splitHeading(data.heading);
  return (
    <section className="bg-paper py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center relative">
        
        {/* Left floating mascot */}
        <motion.div
          className="absolute left-4 top-0 w-24 md:w-52"
          animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src="/images/robot-mascot2.jpg"
            alt="Clickmasters robot mascot"
            width={479}
            height={479}
            sizes="(min-width: 768px) 208px, 96px"
            quality={60}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right floating mascot */}
        <motion.div
          className="absolute right-4 top-12 w-24 md:w-52"
          animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src="/images/robot-mascot2.jpg"
            alt="Clickmasters robot mascot"
            width={479}
            height={479}
            sizes="(min-width: 768px) 208px, 96px"
            quality={60}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/clickmasters-logo.png"
            alt="ClickMasters"
            width={160}
            height={40}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </div>

        {/* Headings */}
        {head && (
          <h2 className="display text-4xl sm:text-5xl md:text-7xl py-8">
            {head}
          </h2>
        )}

        <h2 className="display-italic text-4xl sm:text-5xl md:text-7xl mt-2">
          {tail}
        </h2>

        <p className="text-lg text-muted-foreground mt-10 max-w-md mx-auto">
          {data.subheading}
        </p>

        {data.cta && (
          <a
            href={data.cta.link}
            className="inline-block mt-8 bg-ink text-white text-sm px-8 py-4 hover:bg-brand transition-colors"
          >
            {data.cta.text} <span>›</span>
          </a>
        )}

        {/* Bottom marquee text – left to right continuous slide */}
<div className="mt-16 overflow-hidden">
  <div className="display text-[8vw] text-ink/5 whitespace-nowrap flex">
    <div className="flex animate-marquee">
      <span>CLICKMASTERS · CLICKMASTERS · CLICKMASTERS · CLICKMASTERS · </span>
      <span>CLICKMASTERS · CLICKMASTERS · CLICKMASTERS · CLICKMASTERS · </span>
    </div>
  </div>
</div>

<style jsx>{`
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
`}</style>
      </div>
    </section>
  );
}