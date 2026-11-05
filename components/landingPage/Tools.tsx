"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Link from "next/link";
import { Marker } from "./Shared";

const platformHref: Record<string, string> = {
  Zapier: "/platforms/zapier-automation-services",
  Make: "/platforms/make-automation-services",
  n8n: "/platforms/n8n-automation-services",
  HubSpot: "/platforms/hubspot-automation-services",
};

const icons: Record<string, ReactNode> = {
OpenAI: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.745 19.95a4.5 4.5 0 0 1-6.146-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.372 2.02-1.162a.076.076 0 0 1 .071 0l4.83 2.781a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.674zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
</svg>
),

Anthropic: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-6.454 0h3.603L17.456 20h-3.603L7.373 3.52z" />
</svg>
),

n8n: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
</svg>
),

Zapier: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path d="M12.003 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12.003 12C18.63 24 24 18.628 24 12c0-6.627-5.37-12-11.997-12zm5.24 13.773H13.77v3.473a1.768 1.768 0 1 1-3.536 0v-3.473H6.757a1.768 1.768 0 1 1 0-3.536h3.477V6.754a1.768 1.768 0 1 1 3.536 0v3.483h3.473a1.768 1.768 0 1 1 0 3.536z" />
</svg>
),

Make: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path d="M10.937 2.938a.957.957 0 0 0-.937.976v16.172a.957.957 0 0 0 .957.957.957.957 0 0 0 .957-.957V3.914a.957.957 0 0 0-.977-.976zm-5.75 3.82a.957.957 0 0 0-.938.977v10.53a.957.957 0 0 0 .957.957.957.957 0 0 0 .957-.957V7.735a.957.957 0 0 0-.976-.977zm11.5 0a.957.957 0 0 0-.937.977v10.53a.957.957 0 0 0 .957.957.957.957 0 0 0 .957-.957V7.735a.957.957 0 0 0-.977-.977z" />
</svg>
),

HubSpot: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path d="M18.164 7.93V5.084a1.56 1.56 0 0 0 .9-1.408V3.63a1.56 1.56 0 0 0-1.557-1.557h-.046A1.56 1.56 0 0 0 15.905 3.63v.046a1.56 1.56 0 0 0 .9 1.408V7.93a4.43 4.43 0 0 0-2.104 1.197L6.674 3.389a1.74 1.74 0 0 0 .072-.497 1.749 1.749 0 1 0-1.749 1.749c.28 0 .541-.072.774-.193l7.924 5.659a4.416 4.416 0 0 0-.579 2.176 4.43 4.43 0 0 0 .653 2.32l-2.41 2.41a1.37 1.37 0 0 0-.396-.062 1.397 1.397 0 1 0 1.397 1.397 1.37 1.37 0 0 0-.062-.396l2.38-2.38A4.44 4.44 0 0 0 22.6 12.3a4.44 4.44 0 0 0-4.436-4.37zm-.015 6.615a2.252 2.252 0 1 1 0-4.504 2.252 2.252 0 0 1 0 4.504z" />
</svg>
),

Salesforce: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path d="M10.07 1.676c.856-.89 2.05-1.445 3.374-1.445 1.74 0 3.264.96 4.086 2.387a5.272 5.272 0 0 1 2.106-.439c2.924 0 5.296 2.373 5.296 5.296 0 .368-.038.728-.11 1.074C23.95 8.99 24 9.46 24 9.939c0 2.554-2.07 4.622-4.62 4.622-.306 0-.605-.03-.895-.088-.706 1.443-2.185 2.436-3.894 2.436-.56 0-1.092-.115-1.574-.322-.734 1.685-2.41 2.864-4.362 2.864-2.177 0-4.009-1.46-4.618-3.444a4.217 4.217 0 0 1-.723.064C1.489 16.07 0 14.58 0 12.743c0-.982.407-1.87 1.06-2.504A4.9 4.9 0 0 1 .806 9.01c0-2.71 2.196-4.908 4.908-4.908.585 0 1.146.102 1.667.288a4.368 4.368 0 0 1 2.69-1.714z" />
</svg>
),

Google: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053z" />
</svg>
),
};

type ToolsData = {
  heading: string;
  subheading: string;
  categories: { category: string; items: string[] }[];
};

// Map tool names from the data file to available brand icons
const iconAlias: Record<string, string> = {
  Claude: "Anthropic",
  "Google Gemini": "Google",
};

const fallbackIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M9 9h6v6H9z" />
  </svg>
);

export default function Tools({ data }: { data: ToolsData }) {
  // Flatten the categories into unique [name, category] pairs
  const seen = new Set<string>();
  const tools: [string, string][] = [];
  for (const category of data.categories) {
    for (const name of category.items) {
      if (!seen.has(name)) {
        seen.add(name);
        tools.push([name, category.category]);
      }
    }
  }

return (
<section className="bg-secondary py-24">
<div className="mx-auto max-w-[84vw] px-6">
<div className="flex items-center w-full gap-4 mb-12">
<Marker n="13" />
<div className="flex-1 h-px bg-black/10" />
<span className="eyebrow text-muted-foreground whitespace-nowrap">
Our Stack
</span>
</div>

    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
      <div>
        <h2 className="display text-3xl sm:text-4xl md:text-5xl">
          {data.heading}
        </h2>

        <p className="text-muted-foreground text-md mt-6 max-w-xs">
          {data.subheading}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {tools.map((t, i) => {
          const href = platformHref[t[0]];
          const card = (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-paper border border-border p-4 hover:border-brand transition-colors h-full"
            >
              <div className="text-muted-foreground mb-3">
                {icons[iconAlias[t[0]] ?? t[0]] ?? fallbackIcon}
              </div>

              <div className="font-semibold text-sm">{t[0]}</div>
              <div className="text-xs text-muted-foreground">{t[1]}</div>
            </motion.div>
          );
          return href ? (
            <Link key={t[0]} href={href} className="block">
              {card}
            </Link>
          ) : (
            <div key={t[0]}>{card}</div>
          );
        })}
      </div>
    </div>
  </div>
</section>

);
}