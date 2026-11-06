import fs from "fs";
import path from "path";

function firstTitle(file) {
  const text = fs.readFileSync(file, "utf8");
  const cut = text.split("sections:")[0];
  return cut.match(/title:\s*\n?\s*'([^']*)'/)?.[1];
}

for (const dir of ["content/services", "content/Industries"]) {
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".ts") || name === "index.ts") continue;
    const title = firstTitle(path.join(dir, name));
    const flag = /Services Services|Service Services|Services Systems| Systems \|/.test(title || "") ? " FIX" : "";
    console.log(`${title?.length} ${name}${flag} ${title}`);
  }
}
