import fs from "fs";
import path from "path";

const replacements = [
  ["Why Healthcare Need ", "Why Healthcare Needs "],
  ["Why E-commerce Need ", "Why E-commerce Needs "],
  ["Why Retail Need ", "Why Retail Needs "],
  ["Why Manufacturing Need ", "Why Manufacturing Needs "],
  ["Why Education Need ", "Why Education Needs "],
  ["Why Construction Need ", "Why Construction Needs "],
  ["Why Real Estate Need ", "Why Real Estate Needs "],
  ["andwhere appropriateinfrastructure", "and, where appropriate, infrastructure"],
  ["channelsusually", "channels, usually"],
  ["headcountwhich", "headcount, which"],
  ["everythingunless", "everything, unless"],
  ["office sideorder", "office side: order"],
  ["reportingmuch", "reporting, much"],
  ["projectswith", "projects, with"],
  ["invoicinga ", "invoicing, a "],
  ["twiceonce", "twice: once"],
];

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, acc);
    else if (name.endsWith(".ts") || name.endsWith(".tsx")) acc.push(full);
  }
  return acc;
}

let files = 0;
for (const file of [...walk("content"), ...walk("app/solutions")]) {
  let text = fs.readFileSync(file, "utf8");
  const original = text;
  for (const [from, to] of replacements) text = text.replaceAll(from, to);
  if (text !== original) {
    fs.writeFileSync(file, text);
    files += 1;
  }
}
console.log("updated", files);
