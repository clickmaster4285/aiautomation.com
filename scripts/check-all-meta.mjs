import fs from "fs";
import path from "path";

const titles = new Map();
const descs = new Map();
const bad = [];

function add(source, title, desc) {
  if (title) {
    if (title.length < 50 || title.length > 60) bad.push(`T ${title.length} ${source} ${title}`);
    if (!titles.has(title)) titles.set(title, []);
    titles.get(title).push(source);
  }
  if (desc) {
    if (desc.length < 140 || desc.length > 155) bad.push(`D ${desc.length} ${source} ${desc}`);
    if (!descs.has(desc)) descs.set(desc, []);
    descs.get(desc).push(source);
  }
}

for (const name of fs.readdirSync("content/Solutions")) {
  if (!name.endsWith(".ts") || name === "index.ts" || name === "type.ts") continue;
  const text = fs.readFileSync(path.join("content/Solutions", name), "utf8");
  const title = text.match(/titleTag:\s*'([^']*)'/)?.[1];
  const desc = text.match(/metaDescription:\s*'([^']*)'/)?.[1];
  add("sol:" + name, title, desc);
}

function firstSeo(file) {
  const text = fs.readFileSync(file, "utf8");
  const cut = text.split("sections:")[0];
  return {
    title: cut.match(/title:\s*\n?\s*'([^']*)'/)?.[1],
    desc: cut.match(/metaDescription:\s*\n?\s*'([^']*)'/)?.[1],
  };
}

for (const dir of ["content/services", "content/Industries"]) {
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".ts") || name === "index.ts") continue;
    const { title, desc } = firstSeo(path.join(dir, name));
    if (title) add(dir + "/" + name, title, desc);
  }
}

const hub = fs.readFileSync("lib/hub-seo.ts", "utf8");
const hubStrings = [...hub.matchAll(/"([^"\n]{40,})"/g)].map((m) => m[1]).filter((s) => !s.startsWith("/") && !s.includes("{"));
for (const value of hubStrings) {
  if (value.length < 80) add("hub-title", value, null);
  else add("hub-desc", null, value);
}

const pages = [
  "app/layout.tsx",
  "app/solutions/page.tsx",
  "app/services/page.tsx",
  "app/about/page.tsx",
  "app/contact/page.tsx",
  "app/free-automation-audit/page.tsx",
  "app/case-studies/page.tsx",
  "app/blog/layout.tsx",
  "app/privacy-policy/layout.tsx",
  "app/terms-conditions/layout.tsx",
];
for (const file of pages) {
  const text = fs.readFileSync(file, "utf8");
  const cut = text.slice(0, text.indexOf("export default") > 0 ? text.indexOf("export default") : 2500);
  const title = cut.match(/title:\s*'([^']*)'/)?.[1];
  const desc = cut.match(/description:\s*'([^']*)'/)?.[1];
  add(file, title, desc);
}

const dupT = [...titles.entries()].filter(([, sources]) => new Set(sources).size > 1);
const dupD = [...descs.entries()].filter(([, sources]) => new Set(sources).size > 1);
console.log("bad", bad.length);
console.log(bad.slice(0, 40).join("\n"));
console.log("dup titles", dupT.length);
for (const [title, sources] of dupT.slice(0, 20)) console.log("DUP T", title, sources.join(" | "));
console.log("dup descs", dupD.length);
for (const [desc, sources] of dupD.slice(0, 15)) console.log("DUP D", desc.slice(0, 80), sources.join(" | "));
