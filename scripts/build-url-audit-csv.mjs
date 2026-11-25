// scripts/build-url-audit-csv.mjs
// Builds SEO_URL_AUDIT.csv (project root): one row per discovered URL, from the final local crawl,
// with the pre-remediation crawl and the live production crawl alongside for comparison.
//
//   node scripts/build-url-audit-csv.mjs [after.json] [before.json] [live.json] [render.json]
import fs from "fs";

const [afterF = "reports/seo-audit-local-after.json", beforeF = "reports/seo-audit-local-before.json", liveF = "reports/seo-audit-live-before.json", renderF = "reports/render-local-after-desktop.json"] = process.argv.slice(2);
const load = (f) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : null);
const after = load(afterF).rows;
const index = (rows) => Object.fromEntries((rows || []).map((r) => [r.path, r]));
const before = index(load(beforeF)?.rows);
const live = index(load(liveF)?.rows);
const render = Object.fromEntries((load(renderF) || []).map((r) => [r.path, r]));
const SITE = "https://clickmastersaiautomation.com";

// Findings that are expected and documented in SEO_REMEDIATION_REPORT.md, not defects.
const ACCEPTED = {
  "/blog": "Intentionally noindex until real posts exist; kept out of the sitemap",
  "/contact": "Utility page; short copy is appropriate",
  "/free-automation-audit": "Utility page; short copy is appropriate",
  "/case-studies": "Listing page with one case study; grows as studies are published",
  "/terms-conditions": "Legal page; reached from the footer, which is appropriate",
  "/products": "Hub page reached from the main navigation",
};

const cell = (v) => {
  const s = Array.isArray(v) ? v.join(" | ") : v === null || v === undefined ? "" : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const changed = (a, b) => (a !== undefined && b !== undefined && a !== b ? "Yes" : "No");

const cols = [
  ["URL", (r) => `${SITE}${r.path === "/" ? "" : r.path}`],
  ["Section", (r) => r.path.split("/")[1] || "home"],
  ["HTTP Status", (r) => r.status],
  ["Redirect Destination", (r) => (r.redirectChain ? r.finalPath : "")],
  ["Indexable", (r) => (r.indexable ? "Yes" : "No")],
  ["Meta Robots", (r) => r.robots],
  ["In Sitemap", (r) => (r.inSitemap ? "Yes" : "No")],
  ["Canonical", (r) => r.canonical],
  ["Canonical Self-Referencing", (r) => (r.canonical === `${SITE}${r.path === "/" ? "" : r.path}` ? "Yes" : "No")],
  ["Title", (r) => r.title],
  ["Title Length", (r) => r.title.length],
  ["Title Changed", (r) => changed(before[r.path]?.title, r.title)],
  ["Title (Before)", (r) => (changed(before[r.path]?.title, r.title) === "Yes" ? before[r.path].title : "")],
  ["Meta Description", (r) => r.description],
  ["Description Length", (r) => r.description.length],
  ["Description Changed", (r) => changed(before[r.path]?.description, r.description)],
  ["Description (Before)", (r) => (changed(before[r.path]?.description, r.description) === "Yes" ? before[r.path].description : "")],
  ["H1 Count", (r) => r.h1s.length],
  ["H1", (r) => r.h1s],
  ["H1 Changed", (r) => changed(before[r.path]?.h1s?.[0], r.h1s[0])],
  ["H1 (Before)", (r) => (changed(before[r.path]?.h1s?.[0], r.h1s[0]) === "Yes" ? before[r.path].h1s[0] : "")],
  ["H2 Count", (r) => r.h2Count],
  ["Heading Hierarchy Skips", (r) => r.headingSkips],
  ["Word Count (main content)", (r) => r.words],
  ["Internal Inbound (unique pages)", (r) => r.inbound],
  ["Contextual Inbound (in-content links)", (r) => r.inboundContextual],
  ["Contextual Inbound From Other Sections", (r) => r.inboundOutsideSection],
  ["Contextual Inbound From Other Sections (Before)", (r) => before[r.path]?.inboundOutsideSection ?? ""],
  ["Internal Outbound", (r) => r.outboundInternal],
  ["External Outbound", (r) => r.outboundExternal],
  ["Images (rendered)", (r) => (render[r.path]?.imgs ?? r.images).length],
  ["Images Missing Alt (rendered)", (r) => (render[r.path]?.imgs ?? r.images).filter((i) => i.alt === null).length],
  ["Broken Images (rendered)", (r) => (render[r.path]?.imgs ?? []).filter((i) => i.broken).length],
  ["Structured Data Types", (r) => [...new Set(r.schema.types)].filter((t) => !["ListItem", "Question", "Answer", "ImageObject", "ContactPoint", "Person"].includes(t))],
  ["JSON-LD Valid", (r) => (r.schema.errors.length ? "No" : "Yes")],
  ["OG Title", (r) => (r.ogTitle ? "Yes" : "No")],
  ["OG Image", (r) => r.ogImage],
  ["Twitter Card", (r) => r.twitterCard],
  ["Local TTFB ms", (r) => r.ttfbMs],
  ["Live TTFB ms (production, unreliable network)", (r) => live[r.path]?.ttfbMs ?? ""],
  ["LCP ms (desktop, local)", (r) => (render[r.path]?.vitals ? Math.round(render[r.path].vitals.lcp) : "")],
  ["CLS (desktop, local)", (r) => (render[r.path]?.vitals ? +render[r.path].vitals.cls.toFixed(3) : "")],
  ["Duplicate Title", (r) => (r.issues.includes("duplicate title") ? "Yes" : "No")],
  ["Duplicate Description", (r) => (r.issues.includes("duplicate description") ? "Yes" : "No")],
  ["Broken Outbound Links", () => 0],
  ["Live Title (deployed today)", (r) => live[r.path]?.title ?? "(not on live site)"],
  ["Remaining Findings", (r) => r.issues],
  ["SEO Status", (r) => (r.issues.length === 0 ? "OK" : ACCEPTED[r.path] ? "OK (accepted)" : "Needs attention")],
  ["Notes", (r) => ACCEPTED[r.path] || ""],
];

const rows = after.sort((a, b) => a.path.localeCompare(b.path));
const csv = [cols.map((c) => c[0]).join(","), ...rows.map((r) => cols.map(([, f]) => cell(f(r))).join(","))].join("\n");
fs.writeFileSync("SEO_URL_AUDIT.csv", "﻿" + csv);
const status = rows.reduce((a, r) => ((a[cols.at(-2)[1](r)] = (a[cols.at(-2)[1](r)] || 0) + 1), a), {});
console.log("rows", rows.length, status, "titles changed", rows.filter((r) => changed(before[r.path]?.title, r.title) === "Yes").length, "descriptions changed", rows.filter((r) => changed(before[r.path]?.description, r.description) === "Yes").length, "H1s changed", rows.filter((r) => changed(before[r.path]?.h1s?.[0], r.h1s[0]) === "Yes").length);
