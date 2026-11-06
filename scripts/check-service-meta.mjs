import fs from "fs";
import path from "path";

function firstSeo(file) {
  const text = fs.readFileSync(file, "utf8");
  const cut = text.split("sections:")[0];
  const title = cut.match(/title:\s*\n?\s*'([^']*)'/)?.[1];
  const desc = cut.match(/metaDescription:\s*\n?\s*'([^']*)'/)?.[1];
  return { title, desc };
}

const bad = [];
for (const dir of ["content/services", "content/Industries"]) {
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".ts") || name === "index.ts" || name === "homepage.ts") continue;
    const { title, desc } = firstSeo(path.join(dir, name));
    if (!title) continue;
    if (title.length < 50 || title.length > 60) bad.push(`T ${title.length} ${name} ${title}`);
    if (!desc || desc.length < 140 || desc.length > 155) bad.push(`D ${desc ? desc.length : 0} ${name} ${desc || ""}`);
  }
}
console.log(bad.join("\n") || "ok");
console.log("count", bad.length);
