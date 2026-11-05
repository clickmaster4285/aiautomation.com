// AIA-01 SEO validator. Crawls sitemap + app routes and writes a CSV report.
// Usage:
//   node scripts/aia-01-validate.mjs --base https://clickmastersaiautomation.com --report reports/aia-01-before-report.csv
//   node scripts/aia-01-validate.mjs --base http://127.0.0.1:3456 --report reports/aia-01-after-report.csv --final

import fs from "fs";
import path from "path";

const SITE_ORIGIN = "https://clickmastersaiautomation.com";
const SITE_HOSTNAME = "clickmastersaiautomation.com";

export function canonicalUrl(input) {
  const trimmed = (input || "").trim();
  if (!trimmed) return SITE_ORIGIN;
  let url;
  if (/^https?:\/\//i.test(trimmed)) url = new URL(trimmed);
  else url = new URL(trimmed.startsWith("/") ? trimmed : `/${trimmed}`, SITE_ORIGIN);
  url.protocol = "https:";
  url.hostname = SITE_HOSTNAME;
  url.port = "";
  url.search = "";
  url.hash = "";
  let pathname = url.pathname.replace(/\/{2,}/g, "/");
  if (pathname.length > 1 && pathname.endsWith("/")) pathname = pathname.slice(0, -1);
  if (!pathname.startsWith("/")) pathname = `/${pathname}`;
  if (pathname === "/") return SITE_ORIGIN;
  return `${SITE_ORIGIN}${pathname}`;
}

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  if (i === -1) return fallback;
  return process.argv[i + 1];
}

const base = (arg("--base", SITE_ORIGIN) || SITE_ORIGIN).replace(/\/+$/, "");
const reportPath = arg("--report", "reports/aia-01-after-report.csv");
const finalMode = process.argv.includes("--final");
const includeApp = process.argv.includes("--app-routes");

function csvEscape(value) {
  const text = value == null ? "" : String(value);
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function walkPages(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "api" || entry.name.startsWith("(")) {
        walkPages(full, acc);
        continue;
      }
      walkPages(full, acc);
    } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
      const rel = path
        .relative("app", path.dirname(full))
        .split(path.sep)
        .filter((part) => !(part.startsWith("(") && part.endsWith(")")))
        .join("/");
      if (rel.includes("[")) continue;
      const route = rel === "" || rel === "." ? "/" : `/${rel}`;
      acc.push(route);
    }
  }
  return acc;
}

async function fetchManual(url) {
  const chain = [];
  let current = url;
  const seen = new Set();
  for (let hop = 0; hop < 8; hop++) {
    if (seen.has(current)) {
      return { status: 0, finalUrl: current, redirectCount: chain.length, html: "", xRobots: "", loop: true, chain };
    }
    seen.add(current);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    let res;
    try {
      res = await fetch(current, {
        redirect: "manual",
        signal: controller.signal,
        headers: { "user-agent": "AIA-01-seo-validator", accept: "text/html" },
      });
    } catch (error) {
      clearTimeout(timer);
      return {
        status: 0,
        finalUrl: current,
        redirectCount: chain.filter((item) => item.status >= 300 && item.status < 400).length,
        html: "",
        xRobots: "",
        loop: false,
        error: error.name === "AbortError" ? "timeout" : String(error.message || error),
        chain,
      };
    }
    clearTimeout(timer);
    const location = res.headers.get("location");
    const xRobots = res.headers.get("x-robots-tag") || "";
    chain.push({ url: current, status: res.status, location: location || "" });
    if (res.status >= 300 && res.status < 400 && location) {
      current = new URL(location, current).href;
      continue;
    }
    const type = res.headers.get("content-type") || "";
    const html = type.includes("html") || type.includes("xml") || type === "" ? await res.text() : "";
    const redirectCount = chain.filter((item) => item.status >= 300 && item.status < 400).length;
    return { status: res.status, finalUrl: current, redirectCount, html, xRobots, loop: false, chain };
  }
  return { status: 0, finalUrl: current, redirectCount: chain.length, html: "", xRobots: "", loop: true, chain };
}

function extractCanonicals(html) {
  const tags = html.match(/<link\b[^>]*>/gi) || [];
  const found = [];
  for (const tag of tags) {
    if (!/rel\s*=\s*["']canonical["']/i.test(tag)) continue;
    const href = tag.match(/href\s*=\s*["']([^"']+)["']/i);
    if (href) found.push(href[1]);
  }
  return found;
}

function extractRobots(html) {
  const metas = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of metas) {
    if (!/name\s*=\s*["']robots["']/i.test(tag)) continue;
    const content = tag.match(/content\s*=\s*["']([^"']+)["']/i);
    if (content) return content[1];
  }
  return "";
}

function parseLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map((match) => match[1].trim());
}

function onBase(url) {
  const parsed = new URL(url, base);
  return new URL(parsed.pathname + parsed.search, base).href;
}

async function sitemapUrls() {
  const root = await fetchManual(`${base}/sitemap.xml`);
  const locs = parseLocs(root.html).map(onBase);
  const pages = [];
  const indexes = locs.filter((loc) => /sitemap/i.test(loc) && loc !== `${base}/sitemap.xml`);
  if (indexes.length === 0) pages.push(...locs);
  for (const loc of indexes) {
    const child = await fetchManual(loc);
    pages.push(...parseLocs(child.html).map(onBase).filter((item) => !/sitemap/i.test(item)));
  }
  return [...new Set(pages)];
}

function toBase(url) {
  const canonical = canonicalUrl(url);
  const pathAndQuery = canonical.slice(SITE_ORIGIN.length) || "/";
  return `${base}${pathAndQuery}`;
}

async function mapPool(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

const appRoutes = includeApp ? walkPages("app") : [];
const fromSitemap = await sitemapUrls();
const requested = new Map();
for (const loc of fromSitemap) requested.set(canonicalUrl(loc), loc);
for (const route of appRoutes) requested.set(canonicalUrl(route), `${base}${route === "/" ? "/" : route}`);

console.log(`base=${base} urls=${requested.size} sitemap=${fromSitemap.length} appRoutes=${appRoutes.length}`);

const sitemapSet = new Set(fromSitemap.map((loc) => canonicalUrl(loc)));

const rows = await mapPool([...requested.entries()], 6, async ([preferred]) => {
  const startUrl = preferred === SITE_ORIGIN ? `${base}/` : toBase(preferred);
  const used = await fetchManual(startUrl);
  const canonicals = extractCanonicals(used.html);
  const robots = extractRobots(used.html);
  const canonical = canonicals[0] || "";
  const firstStatus = used.chain[0]?.status || used.status;
  let canonicalStatus = "";
  let canonicalRedirects = "";
  let canonicalFinal = "";
  if (canonical) {
    const canonAbs = new URL(canonical, startUrl);
    const localCanon = new URL(canonAbs.pathname + canonAbs.search, base).href;
    const canonFetch = await fetchManual(localCanon);
    canonicalStatus = String(canonFetch.chain[0]?.status || canonFetch.status);
    canonicalRedirects = String(canonFetch.redirectCount);
    canonicalFinal = canonFetch.finalUrl;
  }
  const noindex = /noindex/i.test(robots) || /noindex/i.test(used.xRobots);
  const indexable = firstStatus === 200 && !noindex && !used.loop;
  const self = canonical ? canonicalUrl(canonical) === canonicalUrl(used.finalUrl || startUrl) : false;
  const slashMismatch = canonical ? canonicalUrl(canonical) !== canonical.replace(/\/+$/, canonical.endsWith("/") && new URL(canonical, startUrl).pathname !== "/" ? canonical : canonical) && /\/$/.test(new URL(canonical, startUrl).pathname) && new URL(canonical, startUrl).pathname !== "/" : false;
  return {
    requestedUrl: startUrl,
    httpStatus: firstStatus,
    finalUrl: used.finalUrl,
    redirectCount: used.redirectCount,
    canonicalUrl: canonical,
    canonicalCount: canonicals.length,
    canonicalStatus,
    canonicalRedirects,
    canonicalFinal,
    self,
    indexable,
    robots,
    xRobots: used.xRobots,
    inSitemap: sitemapSet.has(canonicalUrl(startUrl)) ? "yes" : "no",
    loop: used.loop ? "yes" : "no",
    error: used.error || "",
    slashMismatch: slashMismatch ? "yes" : "no",
    preferred,
  };
});

const header = [
  "requested_url",
  "http_status",
  "final_url",
  "redirect_count",
  "canonical_url",
  "canonical_count",
  "canonical_http_status",
  "canonical_redirect_count",
  "canonical_final_url",
  "canonical_self_reference",
  "indexable",
  "robots_meta",
  "x_robots_tag",
  "sitemap_inclusion",
  "redirect_loop",
  "trailing_slash_canonical",
  "error",
];

const lines = [header.join(",")];
for (const row of rows) {
  const slash = row.canonicalUrl
    ? (() => {
        try {
          const pathname = new URL(row.canonicalUrl, SITE_ORIGIN).pathname;
          return pathname !== "/" && pathname.endsWith("/") ? "yes" : "no";
        } catch {
          return "invalid";
        }
      })()
    : "no";
  lines.push(
    [
      row.requestedUrl,
      row.httpStatus,
      row.finalUrl,
      row.redirectCount,
      row.canonicalUrl,
      row.canonicalCount,
      row.canonicalStatus,
      row.canonicalRedirects,
      row.canonicalFinal,
      row.self ? "yes" : "no",
      row.indexable ? "yes" : "no",
      row.robots,
      row.xRobots,
      row.inSitemap,
      row.loop,
      slash,
      row.error,
    ]
      .map(csvEscape)
      .join(",")
  );
}

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, lines.join("\n") + "\n");

const indexable = rows.filter((row) => row.indexable);
const conflicts = indexable.filter((row) => {
  const status = Number(row.canonicalStatus);
  return [301, 302, 307, 308].includes(status) || Number(row.canonicalRedirects) > 0;
});
const missing = indexable.filter((row) => row.canonicalCount === 0);
const multiple = indexable.filter((row) => row.canonicalCount > 1);
const httpCanon = indexable.filter((row) => row.canonicalUrl.startsWith("http://"));
const hostMismatch = indexable.filter((row) => {
  if (!row.canonicalUrl) return false;
  try {
    return new URL(row.canonicalUrl, SITE_ORIGIN).hostname !== SITE_HOSTNAME;
  } catch {
    return true;
  }
});
const slash = indexable.filter((row) => {
  if (!row.canonicalUrl) return false;
  try {
    const pathname = new URL(row.canonicalUrl, SITE_ORIGIN).pathname;
    return pathname !== "/" && pathname.endsWith("/");
  } catch {
    return false;
  }
});
const cross = indexable.filter((row) => row.canonicalUrl && !row.self);
const loops = rows.filter((row) => row.loop === "yes");
const chains = rows.filter((row) => row.redirectCount > 1);
const canon200 = indexable.filter((row) => row.canonicalUrl && Number(row.canonicalStatus) === 200 && Number(row.canonicalRedirects) === 0);

const summary = {
  checked: rows.length,
  indexable: indexable.length,
  canonical200: canon200.length,
  conflicts: conflicts.length,
  missing: missing.length,
  multiple: multiple.length,
  httpCanon: httpCanon.length,
  hostMismatch: hostMismatch.length,
  slash: slash.length,
  cross: cross.length,
  loops: loops.length,
  chains: chains.length,
};

console.log(JSON.stringify(summary, null, 2));
console.log(`wrote ${reportPath}`);

if (finalMode) {
  const conflictPath = "reports/aia-01-canonical-redirect-conflicts.csv";
  const missingPath = "reports/aia-01-missing-canonicals.csv";
  const conflictLines = [["requested_url", "canonical_url", "canonical_http_status", "canonical_redirect_count"].join(",")];
  for (const row of conflicts) {
    conflictLines.push([row.requestedUrl, row.canonicalUrl, row.canonicalStatus, row.canonicalRedirects].map(csvEscape).join(","));
  }
  const missingLines = [["requested_url", "http_status", "robots_meta"].join(",")];
  for (const row of missing) {
    missingLines.push([row.requestedUrl, row.httpStatus, row.robots].map(csvEscape).join(","));
  }
  fs.writeFileSync(conflictPath, conflictLines.join("\n") + "\n");
  fs.writeFileSync(missingPath, missingLines.join("\n") + "\n");
  fs.writeFileSync(
    "reports/aia-01-validation-metrics.json",
    JSON.stringify({ summary, cross: cross.map((row) => ({ url: row.requestedUrl, canonical: row.canonicalUrl })) }, null, 2)
  );
}
