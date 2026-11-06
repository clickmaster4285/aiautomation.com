const pages = ["/", "/blog", "/case-studies"];
for (const path of pages) {
  const html = await (await fetch("http://127.0.0.1:3467" + path)).text();
  const hasIndex = html.includes('href="/case-studies"');
  const hasStudy = html.includes("ai-receptionist-lead-response-automation");
  const needs = html.includes("Why Healthcare Needs");
  console.log(path, "index", hasIndex, "study", hasStudy);
}
const health = await (await fetch("http://127.0.0.1:3467/solutions/ai-chatbots/for-healthcare")).text();
console.log("needs heading", health.includes("Why Healthcare Needs"));
console.log("old heading", health.includes("Why Healthcare Need "));
console.log("glue", health.includes("andwhere"));
console.log("org", (health.match(/"@type":"Organization"/g) || []).length);
