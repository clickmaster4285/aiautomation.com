const pages = [
  "/",
  "/about",
  "/industries",
  "/platforms/zapier-automation-services",
  "/solutions/ai-chatbots",
  "/solutions/ai-chatbots/for-healthcare",
];

for (const path of pages) {
  const html = await (await fetch(`http://127.0.0.1:3467${path}`)).text();
  const hits = [...html.matchAll(/.{0,40}0\+.{0,20}|.{0,30}0%/g)].map((m) => m[0].replace(/\s+/g, " ").slice(0, 90));
  const links = [...new Set([...html.matchAll(/href="(\/solutions\/[^"]+)"/g)].map((m) => m[1]))];
  console.log("\nPAGE", path);
  console.log("zeros", hits.slice(0, 5));
  console.log("solution hrefs", links.length, links.slice(0, 8).join(" | "));
}
