import Image from "next/image";
import { Plus } from "lucide-react";

import { splitHeading } from "./Shared";

type FAQData = {
  heading: string;
  items: { question: string; answer: string }[];
  sideText?: string;
  sideLink?: { text: string; link: string };
};

const defaultSideText =
  "Have a question about your own setup? Book a free automation audit and we will answer it for your business.";
const defaultSideLink = { text: "Book a Call", link: "/free-automation-audit" };

// Every answer is rendered in the HTML. The native <details> element toggles
// visibility, so the answers are readable with JavaScript disabled.
export default function FAQ({
  data,
  ctaPosition,
}: {
  data: FAQData;
  /** Sent to analytics as the audit button position (e.g. "faq"). */
  ctaPosition?: string;
}) {
  const { head, tail } = splitHeading(data.heading);
  const sideText = data.sideText ?? defaultSideText;
  const sideLink = data.sideLink ?? defaultSideLink;

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[84vw] px-6">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="md:sticky md:top-24 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand" aria-hidden="true" />
              <span className="text-brand text-sm font-semibold tracking-widest uppercase font-sans">
                FAQ
              </span>
            </div>
            <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              {head}{" "}
              <br />
              <span className="display-italic text-brand">{tail}</span>
            </h2>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs">{sideText}</p>
            <a
              href={sideLink.link}
              data-cta-position={ctaPosition}
              className="inline-block mt-6 bg-black hover:bg-brand text-white font-medium px-6 py-3 rounded-none transition-colors duration-200 text-sm sm:text-base"
            >
              {sideLink.text} <span aria-hidden="true">→</span>
            </a>
            <Image
              src="/images/robot-mascot2.jpg"
              alt=""
              width={479}
              height={479}
              sizes="(min-width: 1280px) 256px, (min-width: 1024px) 224px, (min-width: 768px) 192px, 160px"
              quality={60}
              loading="lazy"
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 mt-6 md:mt-8 float-y motion-reduce:animate-none"
            />
          </div>

          {/* Right Column – FAQ List */}
          <div className="space-y-3 sm:space-y-4 w-full">
            {data.items.map((faq, idx) => (
              <details
                key={faq.question}
                open={idx === 0}
                className="group border rounded-2xl transition-colors duration-300 border-gray-200 bg-white hover:border-gray-300 open:border-brand/40 open:bg-brand/5 open:shadow-sm"
              >
                <summary className="w-full flex items-center justify-between gap-3 p-4 sm:p-6 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900 group-open:text-brand transition-colors">
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 bg-gray-100 text-gray-500 group-open:bg-brand group-open:text-white group-open:rotate-45"
                  >
                    <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                </summary>
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
