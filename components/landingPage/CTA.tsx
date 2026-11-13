"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { splitHeading } from "./Shared";

type FinalCtaData = {
  heading: string;
  subheading: string;
  cta: { text: string; link: string; primary?: boolean };
};

// Final call to action (handover 4.14)
export default function CTA({
  data,
  ctaPosition,
}: {
  data: FinalCtaData;
  /** Sent to analytics as the audit button position (e.g. "footer"). */
  ctaPosition?: string;
}) {
  const { head, tail } = splitHeading(data.heading);
  return (
    <section className="bg-paper py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center relative">
        
        {/* Left floating mascot */}
        <motion.div
          className="absolute left-4 top-0 w-24 md:w-52 pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src="/images/robot-mascot2.jpg"
            alt=""
            width={479}
            height={479}
            sizes="(min-width: 768px) 208px, 96px"
            quality={60}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right floating mascot */}
        <motion.div
          className="absolute right-4 top-12 w-24 md:w-52 pointer-events-none"
          animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src="/images/robot-mascot2.jpg"
            alt=""
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
            alt="Clickmasters"
            width={160}
            height={40}
            className="h-10 md:h-12 w-auto"
            loading="lazy"
          />
        </div>

        {/* One heading: normal head + italic tail */}
        <h2 className="display text-4xl sm:text-5xl md:text-7xl py-4 md:py-8">
          {head && (
            <>
              {head}{" "}
              <br />
            </>
          )}
          <span className="display-italic">{tail}</span>
        </h2>

        <p className="text-lg text-muted-foreground mt-10 max-w-md mx-auto">
          {data.subheading}
        </p>

        {data.cta && (
          <a
            href={data.cta.link}
            data-cta-position={ctaPosition}
            className="inline-block mt-8 bg-ink text-white text-sm px-8 py-4 hover:bg-brand transition-colors"
          >
            {data.cta.text} <span aria-hidden="true">›</span>
          </a>
        )}

        {/* Bottom marquee text – left to right continuous slide */}
<div className="mt-16 overflow-hidden" aria-hidden="true">
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
  @media (prefers-reduced-motion: reduce) {
    .animate-marquee {
      animation: none;
    }
  }
`}</style>
      </div>
    </section>
  );
}