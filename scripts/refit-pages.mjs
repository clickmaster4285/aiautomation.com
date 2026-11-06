import fs from "fs";
import path from "path";

function fitTitle(heading) {
  const suffixes = [" | Clickmasters", " | Clickmasters AI", " Services | Clickmasters", " Systems | Clickmasters"];
  const options = suffixes.map((suffix) => heading + suffix).filter((item) => item.length >= 50 && item.length <= 60);
  if (options.length) return options.sort((a, b) => Math.abs(a.length - 55) - Math.abs(b.length - 55))[0];
  let t = `${heading} | Clickmasters`;
  if (t.length > 60) t = t.slice(0, 60).replace(/\s+\S*$/, "").trim();
  if (t.length < 50) {
    const withTeams = t.replace(" | Clickmasters", " Teams | Clickmasters");
    if (withTeams.length >= 50 && withTeams.length <= 60) return withTeams;
    if (`${heading} Services | Clickmasters`.length <= 60) return `${heading} Services | Clickmasters`;
  }
  if (t.length < 50 && t.length + 3 <= 60) t += " AI";
  return t;
}

function fitDescription(seed) {
  let core = seed.replace(/\s+/g, " ").trim();
  if (!core.endsWith(".")) core += ".";
  const tails = [
    " Book a free audit.",
    " People keep the exceptions.",
    " It uses tools you already run.",
    " Start with one workflow.",
    " Ask the team today.",
  ];
  const options = [core];
  for (const tail of tails) options.push(core + tail);
  for (let i = 0; i < tails.length; i++) {
    for (let j = 0; j < tails.length; j++) if (i !== j) options.push(core + tails[i] + tails[j]);
  }
  const good = options.filter((item) => item.length >= 140 && item.length <= 155);
  if (good.length) return good.sort((a, b) => Math.abs(a.length - 148) - Math.abs(b.length - 148))[0];
  let t = options.sort((a, b) => Math.abs(a.length - 148) - Math.abs(b.length - 148))[0];
  if (t.length > 155) {
    t = t.slice(0, 155);
    const space = t.lastIndexOf(" ");
    if (space >= 140) t = t.slice(0, space);
    if (!t.endsWith(".")) t += ".";
  }
  while (t.length < 140 && t.length + 9 <= 155) t += " Ask us.";
  return t;
}

function setHeadField(head, field, value) {
  const re = new RegExp(`${field}:\\s*(?:\\n\\s*)?'(?:\\\\'|[^'])*'`);
  if (!re.test(head)) throw new Error(`no ${field}`);
  return head.replace(re, `${field}: '${value.replace(/'/g, "\\'")}'`);
}

const serviceSeeds = {
  "ai-chatbot-automation.ts": ["AI Chatbot Development Services", "Clickmasters builds custom AI chatbots for support, lead capture, sales questions, and appointment booking."],
  "ai-voice-agents.ts": ["AI Voice Agent Development Services", "Clickmasters builds AI voice agents that answer and place calls, capture details, and hand off with context."],
  "ai-agent-development.ts": ["AI Agent Development Services", "Clickmasters builds AI agents that look up, draft, update, and log work inside the systems your team already uses."],
  "ai-workflow-automation.ts": ["AI Workflow Automation Services", "Clickmasters designs AI workflows that connect your tools and move repetitive work without a manual handoff."],
  "ai-workflow-automation-service.ts": ["AI Workflow Automation Service", "Clickmasters designs and ships workflow automation that connects the tools your team already uses."],
  "business-process-automation.ts": ["Business Process Automation Services", "Clickmasters automates repeated operational steps across delivery, finance, support, and approvals."],
  "robotic-process-automation.ts": ["Robotic Process Automation Services", "Clickmasters builds robotic process automation for stable, rules-based work that should not need a person."],
  "ai-reporting-automation.ts": ["AI Reporting Automation Services", "Clickmasters automates the reports your team already asks for and pulls the numbers on a set schedule."],
  "ai-lead-generation.ts": ["AI Lead Generation Services", "Clickmasters builds lead generation that captures, qualifies, and routes demand while the inquiry is warm."],
  "ai-knowledge-assistants.ts": ["AI Knowledge Assistant Services", "Clickmasters builds knowledge assistants that answer from your material and send unclear cases to a person."],
  "ai-strategy-advisory.ts": ["AI Strategy and Advisory Services", "Clickmasters advises which workflow to automate first, which tool fits, and where a person should stay involved."],
  "custom-ai-development.ts": ["Custom AI Development Services", "Clickmasters designs custom AI systems around your data, tools, and the exceptions your team still needs."],
  "ai-marketing-automation.ts": ["AI Marketing Automation Services", "Clickmasters connects marketing automation so nurture and follow-up continue without a manual queue."],
  "ai-sales-automation.ts": ["AI Sales Automation Services", "Clickmasters automates lead follow-up, enrichment, and activity logging so selling time stays on conversations."],
  "ai-customer-support-automation.ts": ["AI Customer Support Automation", "Clickmasters automates routine customer support and routes the conversations that still need a person."],
  "ai-data-document-automation.ts": ["Document and Data Automation Services", "Clickmasters extracts, checks, and routes data from documents so teams stop re-keying the same files."],
  "ai-integration-service.ts": ["AI Integration Services for Business", "Clickmasters connects AI automation to the CRM, database, and SaaS tools your team already runs."],
};

const industrySeeds = {
  "healthcare.ts": ["AI Automation for Healthcare Practices", "AI automation for healthcare practices covers scheduling, intake, reminders, and follow-up, with clinical decisions left to staff."],
  "law-firms.ts": ["AI Automation for Law Firms", "AI automation for law firms covers intake, document routing, follow-up, and scheduling while attorneys keep the legal judgment."],
  "ecommerce.ts": ["AI Automation for E-commerce Teams", "AI automation for e-commerce covers orders, support, and the updates that should not wait on a person."],
  "saas.ts": ["AI Automation for SaaS Companies", "AI automation for SaaS companies covers lead routing, onboarding, support, and the product work that repeats."],
  "real-estate.ts": ["AI Automation for Real Estate Teams", "AI automation for real estate covers inquiries, follow-up, CRM updates, and the paperwork that piles up."],
  "finance-accounting.ts": ["AI Automation for Finance and Accounting", "AI automation for finance and accounting covers invoices, reconciliations, reporting, and files teams re-key."],
  "professional-services.ts": ["AI Automation for Professional Services", "AI automation for professional services covers intake, scheduling, documents, and follow-up, with judgment left to the firm."],
};

const problems = [];
function writeSeo(file, titleSeed, descSeed) {
  const text = fs.readFileSync(file, "utf8");
  const at = text.indexOf("sections:");
  if (at < 0) throw new Error("no sections " + file);
  const title = fitTitle(titleSeed);
  const description = fitDescription(descSeed);
  if (title.length < 50 || title.length > 60) problems.push(`T ${title.length} ${file} ${title}`);
  if (description.length < 140 || description.length > 155) problems.push(`D ${description.length} ${file} ${description}`);
  let head = setHeadField(text.slice(0, at), "title", title);
  head = setHeadField(head, "metaDescription", description);
  fs.writeFileSync(file, head + text.slice(at));
}

for (const [name, seeds] of Object.entries(serviceSeeds)) writeSeo(path.join("content/services", name), seeds[0], seeds[1]);
for (const [name, seeds] of Object.entries(industrySeeds)) writeSeo(path.join("content/Industries", name), seeds[0], seeds[1]);

function replaceMeta(file, title, description) {
  let text = fs.readFileSync(file, "utf8");
  const cutAt = text.indexOf("export default");
  let head = text.slice(0, cutAt);
  const tail = text.slice(cutAt);
  if (title) {
    if (title.length < 50 || title.length > 60) problems.push(`T ${title.length} ${title}`);
    head = head.replace(/title:\s*(['"])(?:\\.|(?!\1).)*\1/, `title: '${title.replace(/'/g, "\\'")}'`);
  }
  if (description) {
    if (description.length < 140 || description.length > 155) problems.push(`D ${description.length} ${description}`);
    head = head.replace(/description:\s*(['"])(?:\\.|(?!\1).)*\1/s, `description: '${description.replace(/'/g, "\\'")}'`);
  }
  fs.writeFileSync(file, head + tail);
}

replaceMeta("app/about/page.tsx", null, fitDescription("Clickmasters builds production AI agents and workflow automation that the business owns. Meet the team and the approach."));
replaceMeta("app/contact/page.tsx", null, fitDescription("Contact Clickmasters to book a free automation audit or ask a question. We reply with an honest read on fit."));
replaceMeta("app/free-automation-audit/page.tsx", fitTitle("Schedule Your Free Automation Audit"), fitDescription("Book a free automation audit. We map one workflow, show where the hours go, and say honestly if we are the right fit."));
replaceMeta("app/case-studies/page.tsx", fitTitle("Clickmasters AI Automation Case Studies"), fitDescription("Clickmasters case studies document the brief, the gaps closed, the rules a system cannot break, and the limits designed around the work."));
replaceMeta("app/blog/layout.tsx", fitTitle("Clickmasters AI Automation Blog and Guides"), fitDescription("Guides from Clickmasters on AI workflows, agents, chatbots, CRM automation, and document automation for operating teams."));
replaceMeta("app/privacy-policy/layout.tsx", null, fitDescription("How Clickmasters collects, uses, and protects personal information when you use this website and our automation services."));
replaceMeta("app/terms-conditions/layout.tsx", fitTitle("Terms and Conditions for Clickmasters"), fitDescription("The terms that govern use of the Clickmasters website and the AI automation services described on these pages."));

let hub = fs.readFileSync("lib/hub-seo.ts", "utf8");
hub = hub.replaceAll(". Book a free audit.", ". Book a free audit. Ask today.");
hub = hub.replace(
  "Invoice Automation Solutions for Finance Teams AI",
  fitTitle("Invoice Automation for Finance Teams"),
);
hub = hub.replace(
  "AI Automation Services from Workflow to Agents AI",
  fitTitle("AI Automation Services for Workflows"),
);
fs.writeFileSync("lib/hub-seo.ts", hub);

console.log(problems.join("\n") || "page seo ok");
