import fs from "fs";

const files = [
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
  "lib/hub-seo.ts",
  "content/services/homepage.ts",
  "content/case-studies/clickmasters-ai-lead-response-case-study.ts",
];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const titles = [...text.matchAll(/title:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  const descs = [...text.matchAll(/description:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  console.log("\n" + file);
  for (const title of titles.slice(0, 6)) {
    const flag = title.length < 50 || title.length > 60 ? " BAD" : "";
    console.log(`  T ${title.length}${flag} ${title}`);
  }
  for (const desc of descs.slice(0, 4)) {
    const flag = desc.length < 140 || desc.length > 155 ? " BAD" : "";
    console.log(`  D ${desc.length}${flag} ${desc}`);
  }
}

const hub = fs.readFileSync("lib/hub-seo.ts", "utf8");
for (const match of hub.matchAll(/"([^"]{40,})"/g)) {
  const value = match[1];
  const bad = value.length < 140 ? value.length < 50 || value.length > 60 : value.length > 155;
  if (value.length < 50 || (value.length > 60 && value.length < 140) || value.length > 155) {
    console.log("HUB", value.length, value);
  }
}
