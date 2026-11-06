import fs from "fs";
import path from "path";

const OUTCOME = {
  "ai-chatbots": "answer questions, qualify leads, and book appointments",
  "ai-agents": "carry multi-step work inside the tools the team already uses",
  "ai-voice-agents": "answer and place calls, then hand off with the context captured",
  "ai-workflow-automation": "move multi-step work across systems without manual handoffs",
  "business-process-automation": "take repetitive operations off the people who currently chase them",
  "crm-automation": "keep contacts, deals, and follow-ups current without re-keying",
  "customer-support-automation": "resolve routine requests and escalate the cases that need a person",
  "document-automation": "extract, check, and route data from invoices, forms, and files",
  "invoice-automation": "capture, check, and post bills so the close has fewer errors",
  "appointment-booking-automation": "schedule, confirm, and remind so booked time is not missed",
  "marketing-automation": "run nurture and campaign follow-up without a manual queue",
  "sales-automation": "enrich leads, follow up, and log activity so reps can sell",
  "lead-generation-automation": "capture, qualify, and route new demand while it is still warm",
  "reporting-automation": "assemble the numbers teams already ask for, on a schedule",
};

const SOLUTION_NAME = {
  "ai-chatbots": "AI chatbots",
  "ai-agents": "AI agents",
  "ai-voice-agents": "AI voice agents",
  "ai-workflow-automation": "AI workflow automation",
  "business-process-automation": "business process automation",
  "crm-automation": "CRM automation",
  "customer-support-automation": "customer support automation",
  "document-automation": "document automation",
  "invoice-automation": "invoice automation",
  "appointment-booking-automation": "appointment booking automation",
  "marketing-automation": "marketing automation",
  "sales-automation": "sales automation",
  "lead-generation-automation": "lead generation automation",
  "reporting-automation": "reporting automation",
};

const AUDIENCE = {
  insurance: "Insurance agencies",
  healthcare: "Healthcare teams",
  education: "Education teams",
  saas: "SaaS companies",
  ecommerce: "E-commerce teams",
  "real-estate": "Real estate brokerages",
  "law-firms": "Law firms",
  "accounting-firms": "Accounting firms",
  construction: "Construction companies",
  manufacturing: "Manufacturers",
  logistics: "Logistics teams",
  restaurants: "Restaurants",
  retail: "Retailers",
  zapier: "Teams running Zapier",
  salesforce: "Teams running Salesforce",
  hubspot: "Teams running HubSpot",
  n8n: "Teams running n8n",
  airtable: "Teams running Airtable",
  make: "Teams running Make",
};

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

function fitTitle(heading) {
  let base = heading.replace("Appointment & Booking Automation", "Booking Automation");
  const forAt = base.lastIndexOf(" for ");
  const tail = forAt >= 0 ? base.slice(forAt) : "";
  let head = forAt >= 0 ? base.slice(0, forAt) : base;
  const suffixes = [
    " | Clickmasters",
    " | Clickmasters AI",
    " Services | Clickmasters",
    " Systems | Clickmasters",
  ];
  const build = (h) => suffixes.map((suffix) => `${h}${tail}${suffix}`);
  let options = build(head).filter((item) => item.length >= 50 && item.length <= 60);
  while (options.length === 0 && head.includes(" ")) {
    head = head.replace(/\s+\S+$/, "");
    options = build(head).filter((item) => item.length >= 50 && item.length <= 60);
    if (head.split(" ").length < 2) break;
  }
  if (options.length) {
    options.sort((a, b) => Math.abs(a.length - 55) - Math.abs(b.length - 55));
    return options[0];
  }
  let t = `${base} | Clickmasters`;
  if (t.length > 60) t = t.slice(0, 60).replace(/\s+\S*$/, "").trim();
  if (t.length < 50) t = `${base} Services | Clickmasters`;
  if (t.length > 60) t = t.slice(0, 60).replace(/\s+\S*$/, "").trim();
  if (t.length < 50) {
    const withTeams = t.replace(" | Clickmasters", " Teams | Clickmasters");
    if (withTeams.length >= 50 && withTeams.length <= 60) return withTeams;
    if (t.length + 3 <= 60) return `${t} AI`;
  }
  return t;
}

function fitDescription(who, name, outcome) {
  const core = `${who} use Clickmasters ${name} to ${outcome}.`;
  const tails = [
    " The first workflow is scoped before it goes live.",
    " People keep the exceptions that need judgment.",
    " Book a free audit to choose the first workflow.",
    " It runs on the tools the team already has.",
    " Start with one high-volume workflow.",
    " Book a free audit.",
    " Ask the team.",
  ];
  const options = [core];
  for (const tail of tails) options.push(core + tail);
  for (let i = 0; i < tails.length; i++) {
    for (let j = 0; j < tails.length; j++) {
      if (i !== j) options.push(core + tails[i] + tails[j]);
    }
  }
  const good = options.filter((item) => item.length >= 140 && item.length <= 155);
  if (good.length) {
    good.sort((a, b) => Math.abs(a.length - 148) - Math.abs(b.length - 148));
    return good[0];
  }
  let t = options.sort((a, b) => Math.abs(a.length - 148) - Math.abs(b.length - 148))[0];
  if (t.length > 155) {
    t = t.slice(0, 155);
    const space = t.lastIndexOf(" ");
    if (space >= 140) t = t.slice(0, space);
    t = t.replace(/[,:;]\s*$/, "");
    if (!t.endsWith(".")) t += ".";
  }
  while (t.length < 140 && t.length + 9 <= 155) t += " Ask us.";
  if (t.length > 155) t = `${t.slice(0, 154).trim()}.`;
  return t;
}

function audienceFromUrl(url) {
  const last = url.split("/").filter(Boolean).pop() || "";
  if (last.startsWith("for-")) return AUDIENCE[last.slice(4)] || "Operations teams";
  if (last.startsWith("with-")) return AUDIENCE[last.slice(5)] || "Operations teams";
  return "Operations teams";
}

const glue = [
  ["CSRsit's", "CSRs. It's"],
  ["reportingso ", "reporting, so "],
  ["toolsand ", "tools, and "],
  ["workflowsand ", "workflows, and "],
  ["developmentand ", "development, and "],
  ["laterand ", "later, and "],
];

const titles = new Map();
const descriptions = new Map();
const problems = [];

for (const file of walk(path.join("content", "Solutions"))) {
  if (!file.endsWith(".ts") || file.endsWith(`${path.sep}index.ts`)) continue;
  let text = fs.readFileSync(file, "utf8");
  if (!text.includes("titleTag:")) continue;
  for (const [from, to] of glue) text = text.split(from).join(to);
  const url = (text.match(/url:\s*'([^']+)'/) || [])[1];
  const category = (text.match(/category:\s*'([^']+)'/) || [])[1] || "";
  const heading = (text.match(/heroHeading:\s*'([^']+)'/) || [])[1];
  if (!url || !heading) continue;
  let title = fitTitle(heading);
  let description = fitDescription(audienceFromUrl(url), SOLUTION_NAME[category] || heading, OUTCOME[category] || "remove repetitive work from the current process");
  if (titles.has(title)) title = fitTitle(`${heading} Build`);
  if (descriptions.has(description)) description = fitDescription(audienceFromUrl(url), `${SOLUTION_NAME[category] || heading} for this team`, OUTCOME[category] || "remove repetitive work");
  text = text.replace(/titleTag:\s*'[^']*'/, `titleTag: '${title.replace(/'/g, "\\'")}'`);
  text = text.replace(/metaDescription:\s*'[^']*'/, `metaDescription: '${description.replace(/'/g, "\\'")}'`);
  fs.writeFileSync(file, text);
  titles.set(title, file);
  descriptions.set(description, file);
  if (title.length < 50 || title.length > 60) problems.push(`title ${title.length} ${url} ${title}`);
  if (description.length < 140 || description.length > 155) problems.push(`desc ${description.length} ${url} ${description}`);
}

function replaceQuoted(file, current, next) {
  const full = file;
  const text = fs.readFileSync(full, "utf8");
  if (!text.includes(current)) {
    problems.push(`missing ${file} :: ${current}`);
    return;
  }
  fs.writeFileSync(full, text.replace(current, next));
}

const staticTitles = [
  ["app/layout.tsx", "Clickmasters | AI Automation for Growing Businesses", fitTitle("Clickmasters AI Automation for Business")],
  ["app/solutions/page.tsx", null, fitTitle("AI Automation Solutions for Business Teams")],
  ["app/services/page.tsx", null, fitTitle("AI Automation Services for Operating Teams")],
  ["app/about/page.tsx", "About Clickmasters | AI Automation Agency Team", fitTitle("About Clickmasters AI Automation Agency")],
  ["app/contact/page.tsx", "Contact Clickmasters | Book an Automation Audit AI", fitTitle("Contact Clickmasters for an Automation Audit")],
  ["app/free-automation-audit/page.tsx", null, fitTitle("Free Automation Audit with Clickmasters")],
  ["app/case-studies/page.tsx", null, fitTitle("Clickmasters Case Studies of AI Automation")],
  ["app/blog/layout.tsx", null, fitTitle("AI Automation Blog and Guides by Clickmasters")],
  ["app/privacy-policy/layout.tsx", "Privacy Policy | Clickmasters AI Automation", fitTitle("Privacy Policy for Clickmasters AI Automation")],
  ["app/terms-conditions/layout.tsx", null, fitTitle("Terms and Conditions for Clickmasters Services")],
];

const staticDescriptions = [
  ["app/layout.tsx", "Clickmasters designs AI automation systems, agents, and workflows that take repetitive work off your team. Book a free audit. People keep the exceptions.", fitDescription("Growing companies", "AI automation", "take repetitive work off the team without replacing the people who decide")],
  ["app/contact/page.tsx", "Get in touch with Clickmasters. Book a free automation audit or ask a question we reply fast and tell you honestly if we're the right fit.", fitDescription("Operators", "a direct reply from Clickmasters", "book a free audit or ask whether the workflow is a fit")],
];

for (const [file, current, next] of []) {
  if (next.length < 50 || next.length > 60) problems.push(`static title ${next.length} ${next}`);
  if (!current) continue;
  replaceQuoted(file, current, next);
}

for (const [file, current, next] of []) {
  if (next.length < 140 || next.length > 155) problems.push(`static desc ${next.length} ${next}`);
  replaceQuoted(file, current, next);
}

console.log(JSON.stringify({
  titles: titles.size,
  descriptions: descriptions.size,
  problems: problems.length,
}, null, 2));
console.log(problems.slice(0, 30).join("\n"));
