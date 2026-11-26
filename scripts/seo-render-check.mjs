// scripts/seo-render-check.mjs
// Rendered-DOM SEO + performance check in headless Chrome (DevTools protocol, no dependencies).
// Catches what a raw-HTML crawl cannot: client-rendered images without alt text, LCP / CLS,
// mobile horizontal overflow, small tap targets and console errors.
//
//   node scripts/seo-render-check.mjs <origin> <outFile> [mobile|desktop] [path ...]
//   node scripts/seo-render-check.mjs http://127.0.0.1:3456 reports/render-local.json mobile / /products
// With no paths, reads every 200 URL from reports/seo-audit-local-before.json (or SEO_PATHS_FROM).
import { spawn } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";

const ORIGIN = (process.argv[2] || "http://127.0.0.1:3456").replace(/\/$/, "");
const OUT = process.argv[3] || "reports/render-local.json";
const MODE = process.argv[4] || "mobile";
let paths = process.argv.slice(5);
if (!paths.length) {
  const src = process.env.SEO_PATHS_FROM || "reports/seo-audit-local-before.json";
  paths = JSON.parse(fs.readFileSync(src, "utf8")).rows.filter((r) => r.status === 200).map((r) => r.path);
}

const CHROME = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
].find((p) => p && fs.existsSync(p));
if (!CHROME) throw new Error("Chrome not found; set CHROME_PATH");

const port = 9300 + Math.floor(Math.random() * 500);
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "seo-chrome-"));
const chrome = spawn(CHROME, [
  "--headless=new",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  "--no-first-run",
  "--no-default-browser-check",
  "--disable-extensions",
  "--mute-audio",
  "about:blank",
], { stdio: "ignore" });

async function waitForChrome() {
  for (let i = 0; i < 60; i++) {
    try {
      return await (await fetch(`http://127.0.0.1:${port}/json/version`)).json();
    } catch {
      await new Promise((r) => setTimeout(r, 250));
    }
  }
  throw new Error("Chrome did not start");
}
await waitForChrome();

async function openTarget() {
  const t = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" })).json();
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise((r, j) => ((ws.onopen = r), (ws.onerror = j)));
  let id = 0;
  const pending = new Map();
  const listeners = [];
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    } else if (msg.method) listeners.forEach((l) => l(msg));
  };
  // Every DevTools command times out, so one stuck page cannot hang the whole run.
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const i = ++id;
      const timer = setTimeout(() => { pending.delete(i); reject(new Error(`timeout: ${method}`)); }, 30000);
      pending.set(i, { resolve: (v) => { clearTimeout(timer); resolve(v); }, reject: (e) => { clearTimeout(timer); reject(e); } });
      ws.send(JSON.stringify({ id: i, method, params }));
    });
  return { send, on: (f) => listeners.push(f), close: () => { ws.close(); return fetch(`http://127.0.0.1:${port}/json/close/${t.id}`); } };
}

// Collected in the page. Buffered PerformanceObservers report LCP / CLS that happened before injection.
const PROBE = `(() => {
  window.__vitals = { lcp: 0, lcpEl: '', cls: 0 };
  new PerformanceObserver((l) => { for (const e of l.getEntries()) { window.__vitals.lcp = e.startTime; const el = e.element; window.__vitals.lcpEl = el ? (el.tagName + (el.currentSrc ? ' ' + el.currentSrc.split('/').pop().slice(0,80) : ' ' + (el.textContent||'').trim().slice(0,60))) : ''; } }).observe({ type: 'largest-contentful-paint', buffered: true });
  new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__vitals.cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
})()`;

const COLLECT = `(() => {
  const vw = document.documentElement.clientWidth;
  const imgs = [...document.querySelectorAll('img')].map((i) => {
    const r = i.getBoundingClientRect();
    return {
      src: (i.currentSrc || i.src || '').slice(0, 140),
      alt: i.hasAttribute('alt') ? i.getAttribute('alt') : null,
      hidden: i.getAttribute('aria-hidden') === 'true' || r.width === 0,
      natural: i.naturalWidth + 'x' + i.naturalHeight,
      shown: Math.round(r.width) + 'x' + Math.round(r.height),
      oversized: i.naturalWidth > 0 && r.width > 0 && i.naturalWidth > r.width * devicePixelRatio * 2.2,
      loading: i.getAttribute('loading'),
      hasDims: i.hasAttribute('width') && i.hasAttribute('height'),
      broken: i.complete && i.naturalWidth === 0 && !!(i.currentSrc || i.src),
    };
  });
  const svgsNoLabel = [...document.querySelectorAll('svg[role="img"]')].filter((s) => !s.getAttribute('aria-label') && !s.querySelector('title')).length;
  const overflow = [...document.querySelectorAll('body *')].filter((el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.right <= vw + 2) return false;
    const cs = getComputedStyle(el);
    if (cs.position === 'fixed' || cs.visibility === 'hidden') return false;
    // Skip children of a clipping ancestor (carousels, marquees).
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      const ps = getComputedStyle(p);
      if (/(hidden|clip|auto|scroll)/.test(ps.overflowX)) return false;
    }
    return true;
  }).slice(0, 5).map((el) => el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').slice(0, 3).join('.') : '') + ' right=' + Math.round(el.getBoundingClientRect().right));
  const smallTaps = [...document.querySelectorAll('main a[href], main button')].filter((el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return false;
    const cs = getComputedStyle(el);
    if (cs.display === 'inline' && el.closest('p,li')) return false; // in-text links are exempt
    return r.width < 24 || r.height < 24;
  }).slice(0, 5).map((el) => (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30) + ' ' + Math.round(el.getBoundingClientRect().width) + 'x' + Math.round(el.getBoundingClientRect().height));
  const nav = performance.getEntriesByType('navigation')[0] || {};
  const res = performance.getEntriesByType('resource');
  const sum = (f) => Math.round(res.filter(f).reduce((a, r) => a + (r.transferSize || 0), 0) / 1024);
  const fontSize = parseFloat(getComputedStyle(document.body).fontSize);
  return {
    h1: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim().slice(0, 100)),
    mains: document.querySelectorAll('main').length,
    imgs,
    svgsNoLabel,
    overflow,
    scrollWidth: document.documentElement.scrollWidth,
    viewport: vw,
    smallTaps,
    bodyFontPx: fontSize,
    ttfb: Math.round(nav.responseStart || 0),
    domContentLoaded: Math.round(nav.domContentLoadedEventEnd || 0),
    load: Math.round(nav.loadEventEnd || 0),
    jsKB: sum((r) => r.initiatorType === 'script' || /\\.js(\\?|$)/.test(r.name)),
    cssKB: sum((r) => /\\.css(\\?|$)/.test(r.name)),
    imgKB: sum((r) => r.initiatorType === 'img' || /\\.(png|jpe?g|webp|avif|gif|svg)(\\?|$)/.test(r.name)),
    fontKB: sum((r) => /\\.(woff2?|ttf)(\\?|$)/.test(r.name)),
    mediaKB: sum((r) => /\\.(mp4|webm)(\\?|$)/.test(r.name)),
    totalKB: Math.round(((nav.transferSize || 0) + res.reduce((a, r) => a + (r.transferSize || 0), 0)) / 1024),
    requests: res.length + 1,
    thirdParty: [...new Set(res.map((r) => { try { return new URL(r.name).hostname } catch { return '' } }).filter((h) => h && !h.includes('127.0.0.1') && !h.includes('localhost') && !h.endsWith('clickmastersaiautomation.com')))],
    vitals: window.__vitals,
  };
})()`;

async function check(p) {
  const tab = await openTarget();
  const errors = [];
  tab.on((m) => {
    if (m.method === "Runtime.exceptionThrown") errors.push(("exception: " + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text)).slice(0, 200));
    if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") errors.push(("console: " + m.params.args.map((a) => a.value ?? a.description ?? "").join(" ")).slice(0, 200));
    if (m.method === "Log.entryAdded" && m.params.entry.level === "error" && !/favicon/.test(m.params.entry.url || "")) errors.push(("log: " + m.params.entry.text + " " + (m.params.entry.url || "")).slice(0, 200));
  });
  await tab.send("Page.enable");
  await tab.send("Runtime.enable");
  await tab.send("Log.enable");
  await tab.send("Network.enable");
  await tab.send("Network.setCacheDisabled", { cacheDisabled: true });
  if (MODE === "mobile") {
    await tab.send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 3, mobile: true });
    await tab.send("Emulation.setUserAgentOverride", { userAgent: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36" });
    // Lighthouse-like mobile throttling: 4x CPU, ~1.6 Mbps / 150 ms RTT.
    if (process.env.THROTTLE !== "0") {
      await tab.send("Emulation.setCPUThrottlingRate", { rate: 4 });
      await tab.send("Network.emulateNetworkConditions", { offline: false, latency: 150, downloadThroughput: 1.6 * 1024 * 1024 / 8, uploadThroughput: 750 * 1024 / 8 });
    }
  } else {
    await tab.send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  }
  await tab.send("Page.addScriptToEvaluateOnNewDocument", { source: PROBE });
  const loaded = new Promise((r) => tab.on((m) => m.method === "Page.loadEventFired" && r()));
  await tab.send("Page.navigate", { url: ORIGIN + p });
  await Promise.race([loaded, new Promise((r) => setTimeout(r, 45000))]);
  await new Promise((r) => setTimeout(r, 2500));
  // Read LCP before scrolling (scrolling ends LCP observation), then scroll to load lazy content.
  const before = (await tab.send("Runtime.evaluate", { expression: "JSON.stringify(window.__vitals)", returnByValue: true })).result.value;
  await tab.send("Runtime.evaluate", {
    expression: `new Promise(async (r) => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((s) => setTimeout(s, 120)); } scrollTo(0, 0); setTimeout(r, 800); })`,
    awaitPromise: true,
  });
  const data = (await tab.send("Runtime.evaluate", { expression: COLLECT, returnByValue: true })).result.value;
  data.vitals = { ...JSON.parse(before), cls: data.vitals.cls };
  await tab.close();
  return { path: p, mode: MODE, ...data, errors: [...new Set(errors)].slice(0, 8) };
}

const out = [];
const queue = paths.slice();
const conc = Number(process.env.CONC || 3);
await Promise.all(
  Array.from({ length: conc }, async () => {
    while (queue.length) {
      const p = queue.shift();
      try {
        out.push(await Promise.race([check(p), new Promise((_, rej) => setTimeout(() => rej(new Error('page timeout (90s)')), 90000))]));
      } catch (e) {
        out.push({ path: p, error: String(e) });
      }
      if (out.length % 20 === 0) console.log(`  rendered ${out.length}/${paths.length}`);
    }
  }),
);
chrome.kill();

out.sort((a, b) => a.path.localeCompare(b.path));
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const visible = (r) => (r.imgs || []).filter((i) => !i.hidden);
const report = {
  pages: out.length,
  failed: out.filter((r) => r.error).map((r) => r.path),
  imgsMissingAlt: out.flatMap((r) => (r.imgs || []).filter((i) => i.alt === null).map((i) => `${r.path} ${i.src}`)),
  imgsEmptyAltVisible: out.flatMap((r) => visible(r).filter((i) => i.alt === "").map((i) => `${r.path} ${i.src} ${i.shown}`)).slice(0, 40),
  imgsBroken: out.flatMap((r) => (r.imgs || []).filter((i) => i.broken).map((i) => `${r.path} ${i.src}`)),
  imgsOversized: out.flatMap((r) => visible(r).filter((i) => i.oversized).map((i) => `${r.path} ${i.src} natural=${i.natural} shown=${i.shown}`)).slice(0, 40),
  multipleMain: out.filter((r) => r.mains > 1).map((r) => r.path),
  h1NotOne: out.filter((r) => r.h1 && r.h1.length !== 1).map((r) => `${r.path} ${r.h1.length}`),
  overflow: out.filter((r) => r.scrollWidth > r.viewport + 2 || (r.overflow || []).length).map((r) => ({ path: r.path, scrollWidth: r.scrollWidth, els: r.overflow })),
  smallTaps: out.filter((r) => (r.smallTaps || []).length).map((r) => ({ path: r.path, taps: r.smallTaps })).slice(0, 30),
  consoleErrors: out.filter((r) => (r.errors || []).length).map((r) => ({ path: r.path, errors: r.errors })),
  lcpOver2500: out.filter((r) => r.vitals?.lcp > 2500).map((r) => ({ path: r.path, lcp: Math.round(r.vitals.lcp), el: r.vitals.lcpEl })),
  clsOver01: out.filter((r) => r.vitals?.cls > 0.1).map((r) => ({ path: r.path, cls: +r.vitals.cls.toFixed(3) })),
  thirdParty: [...new Set(out.flatMap((r) => r.thirdParty || []))],
  medians: (() => {
    const ok = out.filter((r) => !r.error);
    const med = (f) => { const v = ok.map(f).filter((x) => x != null).sort((a, b) => a - b); return v[Math.floor(v.length / 2)]; };
    return { lcp: Math.round(med((r) => r.vitals.lcp)), cls: +med((r) => r.vitals.cls).toFixed(3), ttfb: med((r) => r.ttfb), load: med((r) => r.load), jsKB: med((r) => r.jsKB), totalKB: med((r) => r.totalKB), requests: med((r) => r.requests) };
  })(),
};
fs.writeFileSync(OUT.replace(/\.json$/, "-summary.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2).slice(0, 9000));
