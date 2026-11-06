import fs from "fs";
import path from "path";

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

const titles = new Map();
const descs = new Map();
const bad = [];
let n = 0;
for (const file of walk("content/Solutions")) {
  if (!file.endsWith(".ts")) continue;
  const text = fs.readFileSync(file, "utf8");
  const title = text.match(/titleTag:\s*'([^']*)'/)?.[1];
  const desc = text.match(/metaDescription:\s*'([^']*)'/)?.[1];
  if (!title) continue;
  n += 1;
  if (title.length < 50 || title.length > 60) bad.push(`T ${title.length} ${title}`);
  if (!desc || desc.length < 140 || desc.length > 155) bad.push(`D ${desc ? desc.length : 0} ${path.basename(file)} ${desc || ""}`);
  titles.set(title, [...(titles.get(title) || []), path.basename(file)]);
  if (desc) descs.set(desc, [...(descs.get(desc) || []), path.basename(file)]);
}
const dupT = [...titles].filter(([, files]) => files.length > 1);
const dupD = [...descs].filter(([, files]) => files.length > 1);
console.log({ files: n, uniqueTitles: titles.size, uniqueDescs: descs.size, bad: bad.length, dupT: dupT.length, dupD: dupD.length });
console.log(bad.slice(0, 15).join("\n"));
console.log(dupT.map(([title, files]) => `${title} :: ${files.join(", ")}`).join("\n"));
console.log("---desc dups---");
console.log(dupD.slice(0, 8).map(([desc, files]) => `${desc.length} ${files.join(", ")}`).join("\n"));

const glue = fs.readFileSync("content/Solutions/ai-chatbots-for-insurance.ts", "utf8");
console.log("csr", glue.includes("CSRsit's"), "isand", glue.includes("Isand"));
