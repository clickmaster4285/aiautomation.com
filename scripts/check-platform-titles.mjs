import fs from "fs";
import path from "path";

function fields(file) {
  const text = fs.readFileSync(file, "utf8").split("sections:")[0];
  const title = text.match(/title(?:Tag)?:\s*\n?\s*'([^']*)'/)?.[1];
  const desc = text.match(/metaDescription:\s*\n?\s*'([^']*)'/)?.[1];
  return { title, desc };
}

const bad = [];
for (const dir of ["content/Platforms", "content/Solutions"]) {
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".ts") || name === "index.ts") continue;
    const { title, desc } = fields(path.join(dir, name));
    if (!title) continue;
    if (title.length < 50 || title.length > 60) bad.push(`T ${title.length} ${name} ${title}`);
    if (desc && (desc.length < 140 || desc.length > 155)) bad.push(`D ${desc.length} ${name} ${desc}`);
  }
}
console.log(bad.join("\n") || "ok");
