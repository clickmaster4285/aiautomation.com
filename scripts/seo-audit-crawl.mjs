// scripts/seo-audit-crawl.mjs
// Full-site SEO crawl. Seeds from the sitemap index, then follows every internal link it finds,
// so URLs that are linked but not in the sitemap (and sitemap URLs nothing links to) both surface.
//
//   node scripts/seo-audit-crawl.mjs [origin] [outPrefix]
//   node scripts/seo-audit-crawl.mjs http://127.0.0.1:3456 reports/seo-audit-local
//   node scripts/seo-audit-crawl.mjs https://clickmastersaiautomation.com reports/seo-audit-live
//
// Writes <outPrefix>.json (every field per URL) and <outPrefix>.csv. No dependencies.
import fs from "fs";
import path from "path";

const ORIGIN = (process.argv[2] || "http://127.0.0.1:3456").replace(/\/$/, "");
const OUT = process.argv[3] || "reports/seo-audit-local";
const SITE = "https://clickmastersaiautomation.com";
const UA = "Mozilla/5.0 (compatible; ClickmastersSEOAudit/1.0)";
const CONCURRENCY = ORIGIN.startsWith("http://127.0.0.1") || ORIGIN.includes("localhost") ? 8 : 3;

const toLocal = (u) => u.replace(SITE, ORIGIN);
const decode = (v) =>
  v
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
const clean = (v) => decode(String(v || "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`, "i"));
  return m ? decode(m[1] ?? m[2] ?? "") : null;
};

async function get(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const started = performance.now();
      const res = await fetch(url, { redirect: "manual", headers: { "user-agent": UA }, signal: AbortSignal.timeout(45000) });
      const ttfb = Math.round(performance.now() - started);
      const body = await res.text();
      return { res, body, ttfb, total: Math.round(performance.now() - started) };
    } catch (e) {
      if (i === tries - 1) throw e;
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
}

function normPath(href, base) {
  if (!href) return null;
  href = href.trim();
  if (/^(mailto:|tel:|javascript:|data:|#)/i.test(href)) return null;
  let u;
  try {
    u = new URL(href, base);
  } catch {
    return null;
  }
  const host = u.hostname.replace(/^www\./, "");
  const local = new URL(ORIGIN).hostname;
  if (host !== "clickmastersaiautomation.com" && u.hostname !== local) return { external: u.href };
  if (/\.(png|jpe?g|webp|avif|gif|svg|ico|mp4|webm|pdf|docx?|xml|txt|css|js|json|woff2?)$/i.test(u.pathname)) return { asset: u.pathname };
  if (u.pathname.startsWith("/_next/") || u.pathname.startsWith("/api/")) return null;
  return { path: u.pathname, hadQuery: !!u.search, hadSlash: u.pathname.length > 1 && u.pathname.endsWith("/") };
}

function regions(html) {
  const body = html.replace(/<script\b[\s\S]*?<\/script>/gi, "").replace(/<style\b[\s\S]*?<\/style>/gi, "").replace(/<noscript\b[\s\S]*?<\/noscript>/gi, "");
  const mainStart = body.search(/<main\b[^>]*id="main-content"/i);
  const footerStart = body.search(/<footer\b/i);
  let main = body;
  let chrome = "";
  if (mainStart >= 0) {
    const end = footerStart > mainStart ? footerStart : body.length;
    main = body.slice(mainStart, end);
    chrome = body.slice(0, mainStart) + body.slice(end);
  }
  return { body, main, chrome };
}

function parseLinks(fragment, base) {
  const out = [];
  for (const m of fragment.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/gi)) {
    const tag = m[0].match(/^<a\b[^>]*>/i)[0];
    const href = attr(tag, "href");
    const n = normPath(href, base);
    if (!n) continue;
    out.push({
      ...n,
      text: clean(m[0]).slice(0, 120) || attr(tag, "aria-label") || "",
      rel: attr(tag, "rel") || "",
      target: attr(tag, "target") || "",
    });
  }
  return out;
}

function parseJsonLd(html) {
  const types = [];
  const errors = [];
  const ids = [];
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(m[1]);
      const walk = (node) => {
        if (Array.isArray(node)) return node.forEach(walk);
        if (!node || typeof node !== "object") return;
        if (node["@type"]) types.push(...[].concat(node["@type"]));
        if (node["@id"] && node["@type"]) ids.push(node["@id"]);
        for (const [k, v] of Object.entries(node)) if (k !== "@context" && typeof v === "object") walk(v);
      };
      walk(data);
    } catch (e) {
      errors.push(String(e.message).slice(0, 80));
    }
  }
  return { types, errors, ids, blocks: [...html.matchAll(/application\/ld\+json/g)].length };
}

async function crawl(p) {
  let url = `${ORIGIN}${p}`;
  const hops = [];
  let r;
  for (let i = 0; i < 6; i++) {
    r = await get(url);
    hops.push({ status: r.res.status, url: url.replace(ORIGIN, "") });
    if (r.res.status >= 300 && r.res.status < 400) {
      const loc = r.res.headers.get("location") || "";
      url = loc.startsWith("http") ? toLocal(loc) : `${ORIGIN}${loc}`;
      continue;
    }
    break;
  }
  const final = hops.at(-1);
  const html = final.status === 200 ? r.body : "";
  const head = html.split(/<\/head>/i)[0] || "";
  const metaContent = (name, key = "name") => {
    const tags = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]).filter((t) => (attr(t, key) || "").toLowerCase() === name);
    return tags.map((t) => attr(t, "content") || "");
  };
  const titles = [...head.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)].map((m) => clean(m[1]));
  const canonicals = [...head.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/gi)].map((m) => attr(m[0], "href"));
  const { main, chrome, body } = regions(html);
  const headings = [...body.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({ level: +m[1], text: clean(m[2]) }));
  const h1s = headings.filter((h) => h.level === 1);
  const skips = [];
  let prev = 0;
  for (const h of headings) {
    if (prev && h.level > prev + 1) skips.push(`h${prev}->h${h.level} "${h.text.slice(0, 40)}"`);
    prev = h.level;
  }
  const emptyHeadings = headings.filter((h) => !h.text).length;
  const words = clean(main).split(/\s+/).filter((w) => /[a-z0-9]/i.test(w)).length;
  const base = `${SITE}${final.url}`;
  const mainLinks = parseLinks(main, base);
  const chromeLinks = parseLinks(chrome, base);
  const imgs = [...body.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const images = imgs.map((t) => ({
    src: (attr(t, "src") || "").slice(0, 160),
    alt: attr(t, "alt"),
    width: attr(t, "width"),
    height: attr(t, "height"),
    loading: attr(t, "loading"),
    fetchpriority: attr(t, "fetchpriority"),
    hasFill: /data-nimg="fill"/.test(t),
    ariaHidden: attr(t, "aria-hidden"),
  }));
  const ld = parseJsonLd(html);
  const mixed = [...html.matchAll(/(?:src|href)="(http:\/\/[^"]+)"/gi)].map((m) => m[1]).filter((u) => !u.startsWith("http://www.w3.org"));
  return {
    path: p,
    status: final.status,
    redirectChain: hops.length > 1 ? hops.map((h) => `${h.status} ${h.url}`).join(" > ") : "",
    finalPath: final.url,
    ttfbMs: r.ttfb,
    totalMs: r.total,
    bytes: html.length,
    xRobots: r.res.headers.get("x-robots-tag") || "",
    lang: (html.match(/<html\b[^>]*\slang="([^"]*)"/i) || [])[1] || "",
    charset: /<meta\s+charSet="utf-8"/i.test(head) || /<meta\s+charset="utf-8"/i.test(head),
    viewport: metaContent("viewport")[0] || "",
    titles,
    title: titles[0] || "",
    descriptions: metaContent("description"),
    description: metaContent("description")[0] || "",
    robots: metaContent("robots").join(" | "),
    canonicals,
    canonical: canonicals[0] || "",
    ogTitle: metaContent("og:title", "property")[0] || "",
    ogDescription: metaContent("og:description", "property")[0] || "",
    ogImage: metaContent("og:image", "property")[0] || "",
    ogUrl: metaContent("og:url", "property")[0] || "",
    twitterCard: metaContent("twitter:card")[0] || "",
    verificationTags: metaContent("google-site-verification").length,
    h1s: h1s.map((h) => h.text),
    headingCount: headings.length,
    h2Count: headings.filter((h) => h.level === 2).length,
    headingSkips: skips,
    emptyHeadings,
    words,
    mainLinks,
    chromeLinks,
    images,
    schema: ld,
    mixedContent: [...new Set(mixed)].slice(0, 5),
  };
}

// ── seed ─────────────────────────────────────────────────────────────────────
const sitemapUrls = new Set();
const sitemapStatus = [];
const robots = await get(`${ORIGIN}/robots.txt`);
const index = await get(`${ORIGIN}/sitemap.xml`);
const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
for (const child of locs(index.body)) {
  const xml = await get(toLocal(child));
  const urls = xml.res.status === 200 ? locs(xml.body) : [];
  sitemapStatus.push({ sitemap: child, status: xml.res.status, urls: urls.length, ttfb: xml.ttfb });
  for (const u of urls) sitemapUrls.add(u);
}
const sitemapPaths = new Set([...sitemapUrls].map((u) => new URL(u).pathname));

const seen = new Set(["/", ...sitemapPaths]);
const queue = [...seen];
const results = new Map();
const discoveredFrom = new Map();

async function worker() {
  while (queue.length) {
    const p = queue.shift();
    try {
      const row = await crawl(p);
      results.set(p, row);
      for (const l of [...row.mainLinks, ...row.chromeLinks]) {
        if (!l.path) continue;
        const target = l.path.length > 1 ? l.path.replace(/\/$/, "") : l.path;
        if (!seen.has(target)) {
          seen.add(target);
          discoveredFrom.set(target, p);
          queue.push(target);
        }
      }
    } catch (e) {
      results.set(p, { path: p, status: 0, error: String(e) });
    }
    if (results.size % 25 === 0) process.stdout.write(`  crawled ${results.size}, queued ${queue.length}\n`);
  }
}
// Workers stop when the queue is momentarily empty, so loop until it drains for good.
while (queue.length) await Promise.all(Array.from({ length: CONCURRENCY }, worker));

// ── link graph ───────────────────────────────────────────────────────────────
const rows = [...results.values()];
const inbound = new Map(); // target -> Set(source)
const inboundContextual = new Map(); // links inside <main>
const brokenLinks = [];
const slashLinks = [];
const externalNoRel = [];
for (const r of rows) {
  for (const [list, map] of [
    [r.mainLinks || [], inboundContextual],
    [[...(r.mainLinks || []), ...(r.chromeLinks || [])], inbound],
  ]) {
    for (const l of list) {
      if (!l.path) continue;
      const t = l.path.length > 1 ? l.path.replace(/\/$/, "") : l.path;
      if (t === r.path) continue;
      if (!map.has(t)) map.set(t, new Set());
      map.get(t).add(r.path);
    }
  }
  for (const l of [...(r.mainLinks || []), ...(r.chromeLinks || [])]) {
    if (l.path) {
      const t = results.get(l.path.length > 1 ? l.path.replace(/\/$/, "") : l.path);
      if (t && t.status !== 200) brokenLinks.push({ from: r.path, to: l.path, status: t.status, chain: t.redirectChain, text: l.text });
      if (l.hadSlash) slashLinks.push({ from: r.path, to: l.path });
    }
    if (l.external && l.target === "_blank" && !/noopener|noreferrer/.test(l.rel)) externalNoRel.push({ from: r.path, to: l.external });
  }
}

const ok = rows.filter((r) => r.status === 200);
const group = (key) => {
  const m = new Map();
  for (const r of ok) {
    const v = typeof key === "function" ? key(r) : r[key];
    if (!v) continue;
    if (!m.has(v)) m.set(v, []);
    m.get(v).push(r.path);
  }
  return [...m.entries()].filter(([, ps]) => ps.length > 1).map(([value, paths]) => ({ value, paths }));
};
const dupTitles = group("title");
const dupDescs = group("description");
const dupH1 = group((r) => r.h1s?.[0]);
const dupSet = (list) => new Set(list.flatMap((d) => d.paths));
const dupTitleSet = dupSet(dupTitles);
const dupDescSet = dupSet(dupDescs);
const dupH1Set = dupSet(dupH1);

const expectedCanonical = (p) => `${SITE}${p === "/" ? "" : p}`;
const sectionOf = (p) => "/" + (p.split("/")[1] || "");

for (const r of rows) {
  const inSet = inbound.get(r.path) || new Set();
  const ctxSet = inboundContextual.get(r.path) || new Set();
  r.inbound = inSet.size;
  r.inboundContextual = ctxSet.size;
  r.inboundOutsideSection = [...ctxSet].filter((s) => sectionOf(s) !== sectionOf(r.path)).length;
  r.inboundSample = [...ctxSet].slice(0, 6);
  r.outboundInternal = new Set([...(r.mainLinks || []), ...(r.chromeLinks || [])].filter((l) => l.path).map((l) => l.path)).size;
  r.outboundContextual = new Set((r.mainLinks || []).filter((l) => l.path).map((l) => l.path)).size;
  r.outboundExternal = new Set([...(r.mainLinks || []), ...(r.chromeLinks || [])].filter((l) => l.external).map((l) => l.external)).size;
  r.inSitemap = sitemapPaths.has(r.path);
  r.discoveredFrom = discoveredFrom.get(r.path) || (r.inSitemap ? "sitemap" : "seed");
  const noindex = /noindex/i.test(r.robots || "") || /noindex/i.test(r.xRobots || "");
  r.indexable = r.status === 200 && !noindex && (!r.canonical || r.canonical === expectedCanonical(r.path));
  const issues = [];
  if (r.status !== 200) issues.push(`status ${r.status}${r.redirectChain ? ` (${r.redirectChain})` : ""}`);
  if (r.status === 200) {
    if (!r.title) issues.push("missing title");
    if ((r.titles || []).length > 1) issues.push("multiple titles");
    if (r.title && r.title.length > 60) issues.push(`long title (${r.title.length})`);
    if (r.title && r.title.length < 25) issues.push(`short title (${r.title.length})`);
    if (!r.description) issues.push("missing description");
    if ((r.descriptions || []).length > 1) issues.push("multiple descriptions");
    if (r.description && r.description.length > 155) issues.push(`long description (${r.description.length})`);
    if (r.description && r.description.length < 70) issues.push(`short description (${r.description.length})`);
    if (dupTitleSet.has(r.path)) issues.push("duplicate title");
    if (dupDescSet.has(r.path)) issues.push("duplicate description");
    if (dupH1Set.has(r.path)) issues.push("duplicate H1");
    if (!r.canonical) issues.push("missing canonical");
    if ((r.canonicals || []).length > 1) issues.push("multiple canonicals");
    if (r.canonical && r.canonical !== expectedCanonical(r.path)) issues.push(`canonical -> ${r.canonical}`);
    if (noindex) issues.push("noindex");
    if (r.h1s.length === 0) issues.push("missing H1");
    if (r.h1s.length > 1) issues.push(`${r.h1s.length} H1s`);
    if (r.h1s[0] && r.h1s[0].length > 70) issues.push(`long H1 (${r.h1s[0].length})`);
    if (r.h2Count === 0) issues.push("no H2");
    if (r.headingSkips.length) issues.push(`heading skips (${r.headingSkips.length})`);
    if (r.emptyHeadings) issues.push(`empty headings (${r.emptyHeadings})`);
    if (!r.ogTitle || !r.ogDescription) issues.push("missing OG title/description");
    if (!r.ogImage) issues.push("missing OG image");
    if (!r.twitterCard) issues.push("missing twitter card");
    if (r.verificationTags > 1) issues.push("duplicate verification meta");
    const noAlt = r.images.filter((i) => i.alt === null).length;
    if (noAlt) issues.push(`images missing alt (${noAlt})`);
    if (r.schema.errors.length) issues.push("invalid JSON-LD");
    if (r.mixedContent.length) issues.push("http:// resources");
    if (r.inSitemap === false) issues.push("not in sitemap");
    if (r.inbound === 0) issues.push("orphan (no inbound links)");
    else if (r.inboundContextual === 0) issues.push("no contextual inbound links");
    if (r.words < 250) issues.push(`thin main content (${r.words} words)`);
  }
  r.issues = issues;
}

// Sitemap entries that are not indexable 200s
const sitemapProblems = [...sitemapPaths].filter((p) => !results.get(p) || !results.get(p).indexable).map((p) => ({ path: p, status: results.get(p)?.status, issues: results.get(p)?.issues }));
const notInSitemap = ok.filter((r) => r.indexable && !r.inSitemap).map((r) => r.path);

const summary = {
  origin: ORIGIN,
  crawledAt: new Date().toISOString(),
  robotsTxt: robots.body,
  sitemaps: sitemapStatus,
  sitemapUrlCount: sitemapPaths.size,
  urlsDiscovered: rows.length,
  status200: ok.length,
  non200: rows.filter((r) => r.status !== 200).map((r) => ({ path: r.path, status: r.status, chain: r.redirectChain, from: r.discoveredFrom })),
  indexable: rows.filter((r) => r.indexable).length,
  sitemapProblems,
  notInSitemap,
  dupTitles,
  dupDescs,
  dupH1,
  brokenLinks: brokenLinks.slice(0, 200),
  brokenLinkCount: brokenLinks.length,
  trailingSlashLinks: slashLinks.slice(0, 50),
  externalBlankNoRel: externalNoRel.slice(0, 50),
  issueCounts: rows.flatMap((r) => r.issues || []).map((i) => i.replace(/\s*\(.*\)$/, "").replace(/canonical -> .*/, "canonical mismatch").replace(/status \d+.*/, (s) => s.split(" (")[0])).reduce((a, i) => ((a[i] = (a[i] || 0) + 1), a), {}),
  timing: (() => {
    const t = ok.map((r) => r.ttfbMs).sort((a, b) => a - b);
    return { p50: t[Math.floor(t.length / 2)], p90: t[Math.floor(t.length * 0.9)], max: t.at(-1), slowest: [...ok].sort((a, b) => b.ttfbMs - a.ttfbMs).slice(0, 10).map((r) => ({ path: r.path, ttfbMs: r.ttfbMs, bytes: r.bytes })) };
  })(),
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(`${OUT}.json`, JSON.stringify({ summary, rows }, null, 1));
fs.writeFileSync(`${OUT}-summary.json`, JSON.stringify(summary, null, 2));

const csvCell = (v) => {
  const s = Array.isArray(v) ? v.join(" | ") : v === null || v === undefined ? "" : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const cols = [
  ["URL", (r) => `${SITE}${r.path === "/" ? "" : r.path}`],
  ["HTTP Status", (r) => r.status],
  ["Redirect Chain", (r) => r.redirectChain],
  ["Indexable", (r) => (r.indexable ? "Yes" : "No")],
  ["In Sitemap", (r) => (r.inSitemap ? "Yes" : "No")],
  ["Canonical", (r) => r.canonical],
  ["Meta Robots", (r) => r.robots],
  ["Title", (r) => r.title],
  ["Title Length", (r) => r.title?.length || 0],
  ["Meta Description", (r) => r.description],
  ["Description Length", (r) => r.description?.length || 0],
  ["H1 Count", (r) => r.h1s?.length || 0],
  ["H1", (r) => r.h1s || []],
  ["H2 Count", (r) => r.h2Count || 0],
  ["Heading Skips", (r) => r.headingSkips || []],
  ["Word Count (main)", (r) => r.words || 0],
  ["Inbound Internal (unique pages)", (r) => r.inbound || 0],
  ["Inbound Contextual (in <main>)", (r) => r.inboundContextual || 0],
  ["Inbound Contextual From Other Sections", (r) => r.inboundOutsideSection || 0],
  ["Outbound Internal", (r) => r.outboundInternal || 0],
  ["Outbound External", (r) => r.outboundExternal || 0],
  ["Images", (r) => r.images?.length || 0],
  ["Images Missing Alt", (r) => (r.images || []).filter((i) => i.alt === null).length],
  ["Images Empty Alt", (r) => (r.images || []).filter((i) => i.alt === "").length],
  ["Structured Data Types", (r) => [...new Set(r.schema?.types || [])]],
  ["JSON-LD Errors", (r) => r.schema?.errors || []],
  ["OG Image", (r) => r.ogImage],
  ["Twitter Card", (r) => r.twitterCard],
  ["TTFB ms", (r) => r.ttfbMs],
  ["HTML Bytes", (r) => r.bytes],
  ["Duplicate Title", (r) => (dupTitleSet.has(r.path) ? "Yes" : "No")],
  ["Duplicate Description", (r) => (dupDescSet.has(r.path) ? "Yes" : "No")],
  ["Broken Outbound Links", (r) => brokenLinks.filter((b) => b.from === r.path).length],
  ["Issues", (r) => r.issues || []],
];
const sorted = rows.sort((a, b) => a.path.localeCompare(b.path));
fs.writeFileSync(`${OUT}.csv`, [cols.map((c) => c[0]).join(","), ...sorted.map((r) => cols.map(([, f]) => csvCell(f(r))).join(","))].join("\n"));

console.log(JSON.stringify({ ...summary, robotsTxt: undefined, dupTitles: dupTitles.length, dupDescs: dupDescs.length, dupH1: dupH1.length, brokenLinks: undefined, trailingSlashLinks: slashLinks.length, externalBlankNoRel: externalNoRel.length, sitemapProblems: sitemapProblems.length, notInSitemap }, null, 2));
