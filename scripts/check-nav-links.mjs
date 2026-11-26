// scripts/check-nav-links.mjs
// Checks every link in the rendered main navigation (and the header CTA) against a running build:
// HTTP 200 with no redirect, not noindexed, and any #fragment present as an id on the target page.
//
//   node scripts/check-nav-links.mjs [origin] [page]
//   node scripts/check-nav-links.mjs http://127.0.0.1:3456 /
const ORIGIN = (process.argv[2] || 'http://127.0.0.1:3456').replace(/\/$/, '');
const PAGE = process.argv[3] || '/';

const html = await (await fetch(ORIGIN + PAGE)).text();
const nav = html.match(/<nav[^>]*aria-label="Main navigation"[\s\S]*?<\/nav>/)?.[0];
if (!nav) throw new Error('Main navigation not found in the server HTML');
const header = html.match(/<header[\s\S]*?<\/header>/)?.[0] ?? '';

const hrefs = [...new Set([...header.matchAll(/<a[^>]+href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, '&')))];
const navLinks = [...nav.matchAll(/<a[^>]+href="([^"]+)"/g)].length;
const panels = [...nav.matchAll(/id="nav-panel-([a-z-]+)"/g)].map((m) => m[1]);

const pages = new Map();
const load = async (path) => {
  if (!pages.has(path)) {
    const res = await fetch(ORIGIN + path, { redirect: 'manual' });
    pages.set(path, { status: res.status, location: res.headers.get('location'), body: res.status === 200 ? await res.text() : '' });
  }
  return pages.get(path);
};

const problems = [];
for (const href of hrefs) {
  if (!href.startsWith('/')) {
    problems.push(`${href}: not an internal path`);
    continue;
  }
  const [path, frag] = href.split('#');
  const page = await load(path || '/');
  if (page.status !== 200) problems.push(`${href}: HTTP ${page.status}${page.location ? ` -> ${page.location}` : ''}`);
  else {
    if (/<meta name="robots" content="[^"]*noindex/.test(page.body)) problems.push(`${href}: target is noindex`);
    if (frag && !new RegExp(`id="${frag}"`).test(page.body)) problems.push(`${href}: #${frag} not found on ${path}`);
  }
}

console.log(`Menus in server HTML: ${panels.length} (${panels.join(', ')})`);
console.log(`Links in <nav>: ${navLinks}; unique header hrefs checked: ${hrefs.length}`);
console.log(problems.length ? `PROBLEMS (${problems.length}):\n  ${problems.join('\n  ')}` : 'All header links: 200, indexable, fragments present.');
process.exitCode = problems.length ? 1 : 0;
