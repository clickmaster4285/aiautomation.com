import fs from "fs";

const ORIGIN = "http://127.0.0.1:3467";
const SITE = "https://clickmastersaiautomation.com";

async function text(url) {
  const started = performance.now();
  const res = await fetch(url, { redirect: "manual" });
  const body = await res.text();
  return {
    status: res.status,
    location: res.headers.get("location"),
    ms: Math.round(performance.now() - started),
    body,
    cache: res.headers.get("cache-control"),
  };
}

function locs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const index = await text(`${ORIGIN}/sitemap.xml`);
const children = locs(index.body).map((loc) => loc.replace(SITE, ORIGIN));
const pages = new Set();
for (const child of children) {
  const xml = await text(child);
  if (xml.status !== 200) {
    console.log("sitemap fail", xml.status, child, xml.ms);
    continue;
  }
  for (const loc of locs(xml.body)) {
    const path = loc.replace(SITE, "") || "/";
    pages.add(path.startsWith("/") ? path : `/${path}`);
  }
}
pages.add("/");
pages.add("/case-studies/ai-receptionist-lead-response-automation");

const list = [...pages].sort();
console.log("urls", list.length, "sitemaps", children.length);

function decode(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function pick(html, re) {
  return decode(html.match(re)?.[1] || "").replace(/\s+/g, " ").trim();
}

async function crawl(path) {
  const started = performance.now();
  let url = `${ORIGIN}${path}`;
  const hops = [];
  let res;
  for (let i = 0; i < 5; i++) {
    res = await fetch(url, { redirect: "manual" });
    hops.push({ status: res.status, url });
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location") || "";
      url = location.startsWith("http") ? location.replace(SITE, ORIGIN) : `${ORIGIN}${location}`;
      continue;
    }
    break;
  }
  const html = hops.at(-1).status === 200 ? await res.text() : "";
  const title = pick(html, /<title>([^<]*)<\/title>/i);
  const description = pick(html, /<meta name="description" content="([^"]*)"/i);
  const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/i);
  const robots = pick(html, /<meta name="robots" content="([^"]*)"/i);
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
  const orgs = [...html.matchAll(/"@type"\s*:\s*"Organization"/g)].length;
  const orgIds = [...html.matchAll(/"@id"\s*:\s*"([^"]*#organization)"/g)].map((m) => m[1]);
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1].replace(/\/$/, "") || "/");
  return {
    path,
    status: hops.at(-1).status,
    hops: hops.length,
    ms: Math.round(performance.now() - started),
    title,
    titleLen: title.length,
    description,
    descLen: description.length,
    canonical,
    robots,
    h1: h1s[0] || "",
    h1Count: h1s.length,
    orgs,
    orgIds: [...new Set(orgIds)],
    hrefs,
    zero: />\s*0\+\s*</.test(html) || />\s*0%\s*</.test(html),
  };
}

const results = [];
const queue = list.slice();
const workers = Array.from({ length: 8 }, async () => {
  while (queue.length) {
    const path = queue.shift();
    try {
      results.push(await crawl(path));
    } catch (error) {
      results.push({ path, status: 0, error: String(error) });
    }
  }
});
await Promise.all(workers);

const incoming = new Map();
for (const page of results) {
  for (const href of page.hrefs || []) {
    incoming.set(href, (incoming.get(href) || 0) + 1);
  }
}

const titles = new Map();
const descs = new Map();
for (const page of results.filter((p) => p.status === 200)) {
  if (page.title) {
    if (!titles.has(page.title)) titles.set(page.title, []);
    titles.get(page.title).push(page.path);
  }
  if (page.description) {
    if (!descs.has(page.description)) descs.set(page.description, []);
    descs.get(page.description).push(page.path);
  }
}

const badTitle = results.filter((p) => p.status === 200 && (p.titleLen < 50 || p.titleLen > 60));
const badDesc = results.filter((p) => p.status === 200 && (p.descLen < 140 || p.descLen > 155));
const dupT = [...titles.entries()].filter(([, paths]) => paths.length > 1);
const dupD = [...descs.entries()].filter(([, paths]) => paths.length > 1);
const badCanon = results.filter((p) => p.status === 200 && p.canonical !== `${SITE}${p.path === "/" ? "" : p.path}`);
const multiOrg = results.filter((p) => p.orgs > 1);
const noOrg = results.filter((p) => p.status === 200 && p.orgs === 0);
const slow = results.filter((p) => p.ms > 1000).sort((a, b) => b.ms - a.ms);
const not200 = results.filter((p) => p.status !== 200);
const chains = results.filter((p) => p.hops > 1);
const zeros = results.filter((p) => p.zero);
const oneIn = results.filter((p) => p.status === 200 && (incoming.get(p.path) || 0) <= 1);
const solutionIndustry = results.filter((p) => /\/solutions\/[^/]+\/for-/.test(p.path));
const wrongIndustry = solutionIndustry.filter((p) => {
  const segment = p.path.split("/").at(-1).replace(/^for-/, "").replace(/-/g, " ");
  const hay = `${p.h1} ${p.title}`.toLowerCase();
  const token = segment.split(" ")[0];
  return token && !hay.includes(token) && !hay.includes(segment);
});

const summary = {
  crawled: results.length,
  ok: results.filter((p) => p.status === 200).length,
  not200: not200.map((p) => ({ path: p.path, status: p.status, hops: p.hops })),
  chains: chains.length,
  badTitle: badTitle.map((p) => ({ path: p.path, len: p.titleLen, title: p.title })),
  badDesc: badDesc.map((p) => ({ path: p.path, len: p.descLen, description: p.description })),
  dupTitles: dupT.map(([title, paths]) => ({ title, paths })),
  dupDescs: dupD.map(([description, paths]) => ({ description: description.slice(0, 80), paths })),
  badCanon: badCanon.map((p) => ({ path: p.path, canonical: p.canonical })),
  multiOrg: multiOrg.map((p) => ({ path: p.path, orgs: p.orgs, ids: p.orgIds })),
  noOrg: noOrg.map((p) => p.path),
  slow: slow.map((p) => ({ path: p.path, ms: p.ms })),
  zeros: zeros.map((p) => p.path),
  oneIncoming: oneIn.map((p) => p.path),
  wrongIndustry: wrongIndustry.map((p) => ({ path: p.path, h1: p.h1, title: p.title })),
  timing: {
    median: results.map((p) => p.ms).sort((a, b) => a - b)[Math.floor(results.length / 2)],
    max: Math.max(...results.map((p) => p.ms || 0)),
    over250: results.filter((p) => p.ms > 250).length,
    over1000: slow.length,
  },
};

fs.mkdirSync("reports", { recursive: true });
fs.writeFileSync("reports/seo-crawl-summary.json", JSON.stringify(summary, null, 2));
console.log(JSON.stringify({
  crawled: summary.crawled,
  ok: summary.ok,
  not200: summary.not200.length,
  chains: summary.chains,
  badTitle: summary.badTitle.length,
  badDesc: summary.badDesc.length,
  dupTitles: summary.dupTitles.length,
  dupDescs: summary.dupDescs.length,
  badCanon: summary.badCanon.length,
  multiOrg: summary.multiOrg.length,
  noOrg: summary.noOrg.length,
  slow: summary.slow,
  zeros: summary.zeros.length,
  oneIncoming: summary.oneIncoming.length,
  wrongIndustry: summary.wrongIndustry.length,
  timing: summary.timing,
}, null, 2));
if (summary.badTitle.length) console.log("titles", summary.badTitle.slice(0, 12));
if (summary.badDesc.length) console.log("descs", summary.badDesc.slice(0, 8));
if (summary.badCanon.length) console.log("canon", summary.badCanon.slice(0, 8));
if (summary.not200.length) console.log("status", summary.not200.slice(0, 12));
if (summary.wrongIndustry.length) console.log("industry", summary.wrongIndustry.slice(0, 8));
if (summary.oneIncoming.length) console.log("inlinks", summary.oneIncoming.slice(0, 20));
