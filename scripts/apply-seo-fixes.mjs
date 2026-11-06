import fs from "fs";
import path from "path";

const root = process.cwd();

const EXACT = [
  ["instancetransparent", "instance, transparent"],
  ["strengthswhile", "strengths, while"],
  ["HubSpotand", "HubSpot, and"],
  ["What This Isand Isn't", "What This Is and Isn't"],
  ["What This Isand Isn\\'t", "What This Is and Isn\\'t"],
  ["Isand", "Is and"],
  ["audit30", "audit. 30"],
  ["Nothe ", "No. The "],
  ["requestsa ", "requests. A "],
  ["issueeach", "issue. Each"],
  ["yourecords", "you. Records"],
  ["teamquote", "team. Quote"],
  ["outreachwith", "outreach, with"],
  [" a agency", " an agency"],
  ["A agency", "An agency"],
  ["for saas", "for SaaS"],
  ["problemand ", "problem, and "],
  ["systemswe ", "systems. We "],
  ["boxevery ", "box. Every "],
  ["workthe ", "work. The "],
  ["freeand ", "free, and "],
  ["expandingso ", "expanding, so "],
  ["constraintsand ", "constraints, and "],
  ["fieldso ", "fields, so "],
  ["staffit's", "staff. It's"],
  ["contextthe ", "context. The "],
  ["loggedthe ", "logged. The "],
  ["actionsso ", "actions, so "],
  ["draftingand ", "drafting, and "],
  ["systemsso ", "systems, so "],
  ["automaticallythe ", "automatically. The "],
  ["throughoutthe ", "throughout the "],
  ["reviewthe ", "review. The "],
  ["paymentsthe ", "payments. The "],
  ["inquiriesthe ", "inquiries. The "],
  ["runsagency ", "runs. Agency "],
  ["onagency ", "on agency "],
  ["logisticsevery ", "logistics. Every "],
  ["dispatchthe ", "dispatch. The "],
  ["reportingoften", "reporting. Often"],
  ["shortthe ", "short. The "],
  ["oversightthe ", "oversight. The "],
  ["upand ", "up, and "],
  ["coordinatorsit's", "coordinators. It's"],
  ["bookkeepersit's", "bookkeepers. It's"],
  ["teamsit's", "teams. It's"],
  ["hostingso ", "hosting, so "],
  ["teamthe ", "team. The "],
  ["hostthe ", "host. The "],
  ["environmentand ", "environment, and "],
  ["actionanswering", "action, answering"],
  ["routingfar ", "routing, far "],
  ["processevery ", "process. Every "],
  ["offand ", "off, and "],
  ["ofand ", "of, and "],
  ["operationsand ", "operations, and "],
  ["stackand ", "stack, and "],
  ["audit  we", "audit. We"],
  ["audit  We", "audit. We"],
];

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
  "reporting-automation": "assemble the numbers the team already asks for, on a schedule",
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

const INDUSTRY_WORD = {
  insurance: /insurance/i,
  healthcare: /healthcare/i,
  education: /education/i,
  saas: /saas/i,
  ecommerce: /e-?commerce/i,
  "real-estate": /real estate/i,
  "law-firms": /law firm/i,
  "accounting-firms": /accounting/i,
  construction: /construction/i,
  manufacturing: /manufacturing/i,
  logistics: /logistic/i,
  restaurants: /restaurant/i,
  retail: /retail/i,
};

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

function repairText(input) {
  let text = input;
  const pairs = [...EXACT].sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of pairs) text = text.split(from).join(to);
  text = text.replace(/Salesforce(?=[a-z])/g, "Salesforce ");
  text = text.replace(/[a-z]{4,}high-/g, (match) => `${match.slice(0, -5)}. High-`);
  text = text.replace(/\b[a-z']{8,}\b/g, (word) => {
    const rules = [
      [/([a-z]{4,})automation$/, "$1. Automation"],
      [/([a-z]{4,})connecting$/, "$1, connecting"],
      [/([a-z]{4,})automatically$/, "$1. Automatically"],
      [/([a-z]{4,})handled$/, "$1, handled"],
      [/([a-z]{4,})built$/, "$1, built"],
      [/([a-z]{4,})it's$/, "$1. It's"],
    ];
    for (const [re, rep] of rules) {
      if (re.test(word)) return word.replace(re, rep);
    }
    return word;
  });
  return text;
}

function clampTitle(seed) {
  let t = seed.replace(/\s+/g, " ").trim();
  if (t.length > 60) {
    let cut = t.slice(0, 60);
    const space = cut.lastIndexOf(" ");
    if (space >= 50) cut = cut.slice(0, space);
    t = cut.replace(/[|,:;-]+\s*$/, "").trim();
  }
  if (t.length < 50) {
    const extra = " | Clickmasters";
    if (!t.endsWith("Clickmasters") && t.length + extra.length <= 60) t += extra;
  }
  if (t.length < 50) t = `${t} AI`.trim();
  if (t.length > 60) t = t.slice(0, 60).replace(/\s+\S*$/, "").trim();
  return t;
}

function clampDescription(seed) {
  let t = seed.replace(/\s+/g, " ").trim();
  const pads = [
    " Book a free audit.",
    " The build uses your current tools.",
    " People keep the exceptions.",
  ];
  if (!/[.!?]$/.test(t)) t += ".";
  let i = 0;
  while (t.length < 140 && i < pads.length) {
    if (t.length + pads[i].length <= 155) t += pads[i];
    i += 1;
  }
  if (t.length > 155) {
    let cut = t.slice(0, 155);
    const space = cut.lastIndexOf(" ");
    if (space >= 140) cut = cut.slice(0, space);
    t = cut.replace(/[,:;]\s*$/, "").trim();
    if (!/[.!?]$/.test(t)) {
      if (t.length > 154) t = t.slice(0, 154).trim();
      t += ".";
    }
  }
  return t;
}

function audienceFromUrl(url) {
  const parts = url.split("/").filter(Boolean);
  const last = parts[parts.length - 1] || "";
  if (last.startsWith("for-")) return AUDIENCE[last.slice(4)] || null;
  if (last.startsWith("with-")) return AUDIENCE[last.slice(5)] || null;
  return null;
}

function makeSolutionMeta(category, url, heading) {
  const name = SOLUTION_NAME[category] || heading;
  const audience = audienceFromUrl(url);
  const outcome = OUTCOME[category] || "remove repetitive work from the tools the team already uses";
  const who = audience || "Operations teams";
  const titleSeed = audience ? heading : `${heading} | Clickmasters`;
  const title = clampTitle(titleSeed);
  const description = clampDescription(
    `${who} use Clickmasters ${name} to ${outcome}.`,
  );
  return { title, description };
}

function replaceLineField(text, field, value) {
  const re = new RegExp(`(${field}:\\s*)(['"])(?:\\\\.|(?!\\2).)*\\2`);
  if (!re.test(text)) return null;
  return text.replace(re, `$1'${value.replace(/'/g, "\\'")}'`);
}

const usedTitles = new Map();
const usedDescriptions = new Map();
const mismatches = [];
let solutionFiles = 0;

function claim(map, value, file) {
  if (map.has(value)) map.get(value).push(file);
  else map.set(value, [file]);
}

for (const file of walk(path.join(root, "content", "Solutions"))) {
  if (!file.endsWith(".ts") || file.endsWith("index.ts") || file.endsWith("type.ts")) continue;
  let text = fs.readFileSync(file, "utf8");
  if (!text.includes("titleTag:")) continue;
  text = repairText(text);
  const url = (text.match(/url:\s*'([^']+)'/) || [])[1];
  const category = (text.match(/category:\s*'([^']+)'/) || [])[1];
  const heading = (text.match(/heroHeading:\s*'([^']+)'/) || text.match(/title:\s*'([^']+)'/) || [])[1];
  if (!url || !heading) continue;
  const meta = makeSolutionMeta(category, url, heading);
  let title = meta.title;
  let description = meta.description;
  if (usedTitles.has(title)) title = clampTitle(`${heading} systems`);
  if (usedDescriptions.has(description)) {
    description = clampDescription(`${description.replace(/\.$/, "")} for ${heading}.`);
  }
  const nextTitle = replaceLineField(text, "titleTag", title);
  const nextDesc = replaceLineField(nextTitle || text, "metaDescription", description);
  if (!nextTitle || !nextDesc) {
    console.error("Could not replace metadata", file);
    continue;
  }
  fs.writeFileSync(file, nextDesc);
  claim(usedTitles, title, file);
  claim(usedDescriptions, description, file);
  solutionFiles += 1;
  const segment = url.split("/").pop() || "";
  if (segment.startsWith("for-")) {
    const key = segment.slice(4);
    const pattern = INDUSTRY_WORD[key];
    if (pattern && !pattern.test(heading)) mismatches.push(`${url} heading "${heading}"`);
  }
  if (title.length < 50 || title.length > 60 || description.length < 140 || description.length > 155) {
    console.error("RANGE", title.length, description.length, url, title, description);
  }
}

const pageFixes = walk(path.join(root, "app")).filter((file) => file.endsWith(".tsx"));
let orgReplacements = 0;
for (const file of pageFixes) {
  let text = fs.readFileSync(file, "utf8");
  const original = text;
  text = repairText(text);
  text = text.replace(
    /provider:\s*\{\s*'@type':\s*'Organization',\s*name:\s*'Clickmasters',?\s*\}/g,
    "provider: { '@id': 'https://clickmastersaiautomation.com/#organization' }",
  );
  if (text.includes("breadcrumb") && !text.includes("label: 'Solutions'") && !text.includes('label: "Solutions"')) {
    text = text.replace(
      /(\{\s*label:\s*'Home',\s*href:\s*'\/'\s*\},)/,
      "$1\n          { label: 'Solutions', href: '/solutions' },",
    );
  }
  if (text.includes("<StatsSection") && text.includes("stats={content.stats")) {
    text = text.replace(/\n[ \t]*<StatsSection[\s\S]*?\/>\n/, "\n");
  }
  if (text !== original) {
    if (text.includes("#organization") && !original.includes("#organization")) orgReplacements += 1;
    fs.writeFileSync(file, text);
  }
}

function setLiteral(file, from, to) {
  const full = path.join(root, file);
  const text = fs.readFileSync(full, "utf8");
  if (!text.includes(from)) throw new Error(`Missing snippet in ${file}: ${from.slice(0, 80)}`);
  fs.writeFileSync(full, text.replace(from, to));
}

const staticMeta = [
  ["app/layout.tsx", "ClickMasters | Automate the Future of Work with AI", clampTitle("Clickmasters | AI Automation for Growing Businesses"), "We design and build AI automation systems, AI agents, and workflow automation that eliminate manual work, increase efficiency, and scale your business 24/7.", clampDescription("Clickmasters designs AI automation systems, agents, and workflows that take repetitive work off your team.")],
  ["app/solutions/page.tsx", "AI Automation Solutions | Clickmasters", clampTitle("AI Automation Solutions for Business Teams | Clickmasters"), "Explore our comprehensive AI automation solutions for business efficiency.", clampDescription("Explore Clickmasters AI automation solutions for sales, support, documents, reporting, and the tools your team already uses.")],
  ["app/services/page.tsx", "AI Automation Services | Clickmasters", clampTitle("AI Automation Services for Operating Teams | Clickmasters"), "Explore Clickmasters AI automation services: workflow and process automation, RPA, AI agents, chatbots, voice agents, reporting and custom AI development.", clampDescription("Clickmasters AI automation services cover workflows, process automation, agents, chatbots, voice, reporting, and custom development.")],
  ["lib/hub-seo.ts", "CRM Automation Solutions | Clickmasters", clampTitle("CRM Automation Solutions for Sales Teams | Clickmasters"), "CRM automation that keeps contacts, deals, and follow-ups accurate without manual data entry.", clampDescription("CRM automation that keeps contacts, deals, and follow-ups accurate without asking reps to re-key the same record.")],
  ["lib/hub-seo.ts", "Customer Support Automation | Clickmasters", clampTitle("Customer Support Automation for Service Teams"), "Customer support automation that resolves routine tickets and escalates the cases that need a person.", clampDescription("Customer support automation that resolves routine tickets and escalates the cases that still need a person on the team.")],
  ["lib/hub-seo.ts", "Document Automation Solutions | Clickmasters", clampTitle("Document Automation Solutions for Operations Teams"), "Document automation that extracts, validates, and routes data from invoices, forms, and files.", clampDescription("Document automation that extracts, checks, and routes data from invoices, forms, and files into the systems you use.")],
  ["lib/hub-seo.ts", "Invoice Automation Solutions | Clickmasters", clampTitle("Invoice Automation Solutions for Finance Teams"), "Invoice automation that captures, checks, and posts bills so finance closes faster.", clampDescription("Invoice automation that captures, checks, and posts bills so finance closes with fewer re-keys and fewer missed exceptions.")],
  ["lib/hub-seo.ts", "Appointment Booking Automation | Clickmasters", clampTitle("Appointment Booking Automation for Busy Teams"), "Appointment booking automation that schedules, confirms, and reminds so bookings are not missed.", clampDescription("Appointment booking automation that schedules, confirms, and reminds so the calendar stays full without a manual chase.")],
  ["lib/hub-seo.ts", "Marketing Automation Solutions | Clickmasters", clampTitle("Marketing Automation Solutions for Growth Teams"), "Marketing automation for nurture sequences, campaigns, and content that runs without a manual queue.", clampDescription("Marketing automation for nurture, campaigns, and follow-up that keeps moving when nobody is watching the queue.")],
  ["lib/hub-seo.ts", "Sales Automation Solutions | Clickmasters", clampTitle("Sales Automation Solutions for Revenue Teams"), "Sales automation that enriches leads, follows up, and logs activity so reps spend time selling.", clampDescription("Sales automation that enriches leads, follows up, and logs activity so representatives spend their time selling.")],
  ["lib/hub-seo.ts", "AI Automation Platforms | Clickmasters", clampTitle("AI Automation Platforms We Implement | Clickmasters"), "Automation platforms we implement: Zapier, Make, n8n, HubSpot, Airtable, and GoHighLevel.", clampDescription("Automation platforms Clickmasters implements, including Zapier, Make, n8n, HubSpot, Airtable, and GoHighLevel.")],
  ["lib/hub-seo.ts", "AI Automation by Industry | Clickmasters", clampTitle("AI Automation by Industry for Operating Teams"), "AI automation for healthcare, finance, e-commerce, SaaS, real estate, law firms, and professional services.", clampDescription("AI automation for healthcare, finance, e-commerce, SaaS, real estate, law firms, and other professional services teams.")],
  ["lib/hub-seo.ts", "AI Automation Solutions | Clickmasters", clampTitle("AI Automation Solutions Built Around Your Tools"), "Explore our comprehensive AI automation solutions for business efficiency.", clampDescription("Explore Clickmasters AI automation solutions for the workflows, tools, and handoffs your team repeats every day.")],
  ["lib/hub-seo.ts", "AI Automation Services | Clickmasters", clampTitle("AI Automation Services from Workflow to Agents"), "Explore Clickmasters AI automation services: workflow and process automation, RPA, AI agents, chatbots, voice agents, reporting and custom AI development.", clampDescription("Clickmasters services span workflow automation, process automation, agents, chatbots, voice, reporting, and custom AI.")],
  ["app/about/page.tsx", "About Clickmasters | AI Automation Agency", clampTitle("About Clickmasters | AI Automation Agency Team"), "Clickmasters is a US AI automation agency that builds production AI agents and workflow automation businesses actually own. Meet the team and our approach.", clampDescription("Clickmasters builds production AI agents and workflow automation that the business owns. Meet the team and the approach.")],
  ["app/contact/page.tsx", "Contact Clickmasters | AI Automation Agency", clampTitle("Contact Clickmasters | Book an Automation Audit"), "Get in touch with Clickmasters. Book a free automation audit or ask a question we reply fast and tell you honestly if we're the right fit.", clampDescription("Contact Clickmasters to book a free automation audit or ask a question. We reply with an honest read on fit.")],
  ["app/free-automation-audit/page.tsx", "Free Automation Audit | Clickmasters", clampTitle("Free Automation Audit with the Clickmasters Team"), "Book a free automation audit with Clickmasters. We map one workflow, tell you where the hours go, and say honestly if we are the right fit.", clampDescription("Book a free automation audit. We map one workflow, show where the hours go, and say honestly if we are the right fit.")],
  ["app/case-studies/page.tsx", "Case studies | Clickmasters", clampTitle("Clickmasters Case Studies | AI Automation Builds"), "Every Clickmasters build, documented end to end — the brief, the gaps we closed, the rules the system cannot break, the test results and the limits we designed around.", clampDescription("Clickmasters case studies document the brief, the gaps closed, the rules the system cannot break, and the limits we designed.")],
  ["app/blog/layout.tsx", "AI Automation Blog | Clickmasters", clampTitle("AI Automation Blog | Guides from Clickmasters"), "Guides and insights on AI workflow automations, AI agents, chatbots, CRM and document automation from the Clickmasters team.", clampDescription("Guides from Clickmasters on AI workflows, agents, chatbots, CRM automation, and document automation for operating teams.")],
  ["app/privacy-policy/layout.tsx", "Privacy Policy | Clickmasters AI Automation", clampTitle("Privacy Policy | Clickmasters AI Automation"), "How Clickmasters collects, uses and protects your personal information when you use our website and AI automation services.", clampDescription("How Clickmasters collects, uses, and protects personal information when you use this website and our automation services.")],
  ["app/terms-conditions/layout.tsx", "Terms & Conditions | Clickmasters AI Automation", clampTitle("Terms and Conditions | Clickmasters AI Automation"), "The terms and conditions that govern your use of the Clickmasters website and our AI automation services.", clampDescription("The terms that govern use of the Clickmasters website and the AI automation services described on these pages.")],
];

for (const [file, oldTitle, newTitle, oldDesc, newDesc] of staticMeta) {
  if (newTitle.length < 50 || newTitle.length > 60) console.error("STATIC TITLE", file, newTitle.length, newTitle);
  if (newDesc.length < 140 || newDesc.length > 155) console.error("STATIC DESC", file, newDesc.length, newDesc);
  setLiteral(file, oldTitle, newTitle);
  setLiteral(file, oldDesc, newDesc);
  claim(usedTitles, newTitle, file);
  claim(usedDescriptions, newDesc, file);
}

const caseTitle = "AI Receptionist for Small Business | Clickmasters Case Study";
const caseDesc = "How Clickmasters built an AI receptionist that answers calls, texts back missed calls, replies to emails and books jobs for trades. Call the demo line.";
const newCaseTitle = clampTitle("AI Receptionist Case Study for Small Business");
const newCaseDesc = clampDescription("How Clickmasters built an AI receptionist that answers calls, texts missed calls, replies to email, and books jobs for trades.");
setLiteral("content/case-studies/clickmasters-ai-lead-response-case-study.ts", caseTitle, newCaseTitle);
setLiteral("content/case-studies/clickmasters-ai-lead-response-case-study.ts", caseDesc, newCaseDesc);

function fitFirstSeo(file, titleSeed, descriptionSeed) {
  const full = path.join(root, file);
  let text = fs.readFileSync(full, "utf8");
  const sectionsAt = text.indexOf("sections:");
  if (sectionsAt < 0) return;
  let head = text.slice(0, sectionsAt);
  const tail = text.slice(sectionsAt);
  const title = clampTitle(titleSeed);
  const description = clampDescription(descriptionSeed);
  const nextHead = head
    .replace(/title:\s*(['"])(?:\\.|(?!\1).)*\1/s, `title: '${title.replace(/'/g, "\\'")}'`)
    .replace(/metaDescription:\s*(['"])(?:\\.|(?!\1).)*\1/s, `metaDescription:\n  '${description.replace(/'/g, "\\'")}'`);
  fs.writeFileSync(full, nextHead + tail);
  claim(usedTitles, title, file);
  claim(usedDescriptions, description, file);
  if (title.length < 50 || title.length > 60 || description.length < 140 || description.length > 155) {
    console.error("CONTENT RANGE", file, title.length, description.length, title, description);
  }
}

const serviceCopy = {
  "ai-chatbot-automation.ts": ["AI Chatbot Development Services | Clickmasters", "Clickmasters builds custom AI chatbots for support, lead capture, sales questions, and appointment booking."],
  "ai-voice-agents.ts": ["AI Voice Agent Development Services | Clickmasters", "Clickmasters builds AI voice agents that answer and place calls, capture the details, and hand off with context."],
  "ai-agent-development.ts": ["AI Agent Development Services for Business | Clickmasters", "Clickmasters builds AI agents that look up, draft, update, and log work inside the systems your team already uses."],
  "ai-workflow-automation.ts": ["AI Workflow Automation Services | Clickmasters", "Clickmasters designs AI workflows that connect your tools and move repetitive work without a manual handoff."],
  "ai-workflow-automation-service.ts": ["AI Workflow Automation Service for Operations", "Clickmasters designs and ships workflow automation that connects the tools your team already uses every day."],
  "business-process-automation.ts": ["Business Process Automation Services | Clickmasters", "Clickmasters automates the repeated operational steps that slow delivery, finance, support, and internal approvals."],
  "robotic-process-automation.ts": ["Robotic Process Automation Services | Clickmasters", "Clickmasters builds robotic process automation for stable, rules-based work that should not need a person each time."],
  "ai-reporting-automation.ts": ["AI Reporting Automation Services | Clickmasters", "Clickmasters automates the reports your team already asks for, pulling the numbers on a schedule you can trust."],
  "ai-lead-generation.ts": ["AI Lead Generation Services | Clickmasters", "Clickmasters builds lead generation systems that capture, qualify, and route new demand while the inquiry is still warm."],
  "ai-knowledge-assistants.ts": ["AI Knowledge Assistant Services | Clickmasters", "Clickmasters builds knowledge assistants that answer from your own material and send unclear cases to a person."],
  "ai-strategy-advisory.ts": ["AI Strategy and Advisory Services | Clickmasters", "Clickmasters advises on which workflow to automate first, which tool fits, and where a person should stay in the loop."],
  "custom-ai-development.ts": ["Custom AI Development Services | Clickmasters", "Clickmasters designs custom AI systems around your data, tools, and the exceptions your team still needs to see."],
  "ai-marketing-automation.ts": ["AI Marketing Automation Services | Clickmasters", "Clickmasters connects marketing automation to your stack so nurture and follow-up run without a manual queue."],
  "ai-sales-automation.ts": ["AI Sales Automation Services | Clickmasters", "Clickmasters automates lead follow-up, enrichment, and activity logging so sales time goes to conversations."],
  "ai-customer-support-automation.ts": ["AI Customer Support Automation Services", "Clickmasters automates routine customer support and routes the conversations that still need a person."],
  "ai-data-document-automation.ts": ["Document and Data Automation Services", "Clickmasters extracts, checks, and routes data from documents so teams stop re-keying the same files."],
  "ai-integration-service.ts": ["AI Integration Services for Business Systems", "Clickmasters connects AI automation to the CRM, database, and SaaS tools your team already runs."],
};

for (const [name, [title, description]] of Object.entries(serviceCopy)) {
  const file = path.join("content", "services", name);
  if (fs.existsSync(path.join(root, file))) fitFirstSeo(file, title, description);
}

const industryCopy = {
  "healthcare.ts": ["AI Automation for Healthcare Practices | Clickmasters", "AI automation for healthcare practices covers scheduling, intake, reminders, and follow-up, with clinical decisions left to staff."],
  "law-firms.ts": ["AI Automation for Law Firms | Clickmasters", "AI automation for law firms covers intake, document routing, follow-up, and scheduling while attorneys keep the legal judgment."],
  "ecommerce.ts": ["AI Automation for E-commerce Teams | Clickmasters", "AI automation for e-commerce teams covers orders, support, abandoned carts, and the updates that should not wait for a person."],
  "saas.ts": ["AI Automation for SaaS Companies | Clickmasters", "AI automation for SaaS companies covers lead routing, onboarding, support, and the product ops work that repeats every week."],
  "real-estate.ts": ["AI Automation for Real Estate Teams | Clickmasters", "AI automation for real estate teams covers inquiries, showing follow-up, CRM updates, and the paperwork that piles up."],
  "finance-accounting.ts": ["AI Automation for Finance and Accounting Teams", "AI automation for finance and accounting covers invoices, reconciliations, reporting, and the files teams re-key today."],
  "professional-services.ts": ["AI Automation for Professional Services Firms", "AI automation for professional services covers intake, scheduling, documents, and follow-up without taking judgment off the team."],
};

for (const [name, [title, description]] of Object.entries(industryCopy)) {
  fitFirstSeo(path.join("content", "Industries", name), title, description);
}

const dupTitles = [...usedTitles.entries()].filter(([, files]) => files.length > 1);
const dupDesc = [...usedDescriptions.entries()].filter(([, files]) => files.length > 1);
const outOfRange = [];
for (const [title, files] of usedTitles) {
  if (title.length < 50 || title.length > 60) outOfRange.push(`title ${title.length} ${files[0]} ${title}`);
}
for (const [description, files] of usedDescriptions) {
  if (description.length < 140 || description.length > 155) outOfRange.push(`desc ${description.length} ${files[0]} ${description}`);
}

console.log(JSON.stringify({
  solutionFiles,
  orgProviderPages: orgReplacements,
  duplicateTitles: dupTitles.length,
  duplicateDescriptions: dupDesc.length,
  outOfRange: outOfRange.length,
  industryMismatches: mismatches.length,
}, null, 2));
if (dupTitles.length) console.log("DUP TITLES", dupTitles.slice(0, 8));
if (dupDesc.length) console.log("DUP DESC", dupDesc.slice(0, 5).map(([d, f]) => [d, f]));
if (outOfRange.length) console.log(outOfRange.slice(0, 20).join("\n"));
if (mismatches.length) console.log(mismatches.slice(0, 20).join("\n"));
