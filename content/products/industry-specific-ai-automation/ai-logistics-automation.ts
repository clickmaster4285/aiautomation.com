// content/products/industry-specific-ai-automation/ai-logistics-automation.ts
// Copy + SEO for /products/industry-specific-ai-automation/ai-logistics-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Primary keyword is "AI logistics automation". Do NOT target "industry-specific AI solutions" (the parent owns
//   it) or "AI data extraction software" (owned by the AI Document & Data Intelligence child).
// - Administrative and operational workflows only: documents, emails, calls, data entry, billing, reporting and
//   follow-up. Clickmasters does NOT build route optimization engines, fleet telematics, load-planning algorithms
//   or warehouse robotics; an automation can only exchange data with such systems where they offer an API.
// - TMS, WMS, carrier portals and accounting systems connect only "where the system offers an API or integration,
//   confirmed during discovery". Say plainly when a connection is not practical. No named TMS is promised.
// - Extraction accuracy depends on source document quality; extracted data is checked against records and unclear
//   documents go to a person. Rates, claims, rebooking, customs questions and invoices are approved by people.
// - Use cases are examples "scoped per project", not packaged products.
// - No statistics, percentages, time saved, cash-flow figures, prices, testimonials, case results, customer names,
//   "leading/best" claims, guarantees or ongoing-support promises. Monitoring and improvement after launch:
//   "scope and terms are agreed per project". The client owns automations, accounts and documentation and pays
//   platform and AI usage costs directly.
//
// Inline links use [anchor text](/path). The contextual internal links are listed in `internalLinks` below.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_LOGISTICS_AUTOMATION_PATH = '/products/industry-specific-ai-automation/ai-logistics-automation';

export const aiLogisticsAutomationSeo: HubSeo = {
  name: 'AI Logistics Automation',
  path: AI_LOGISTICS_AUTOMATION_PATH,
  title: 'AI Logistics Automation for Freight & 3PL | Clickmasters',
  description:
    'AI logistics automation for freight forwarders, 3PLs and carriers: documents, status updates, carrier emails and billing, staff-approved. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'Industry-Specific AI Automation', path: '/products/industry-specific-ai-automation' },
    { name: 'AI Logistics Automation', path: AI_LOGISTICS_AUTOMATION_PATH },
  ],
};

export const aiLogisticsAutomationKeywords = [
  'AI logistics automation',
  'logistics workflow automation',
  'freight document automation',
  'shipment status update automation',
  'carrier communication automation',
  '3PL automation',
  'proof of delivery processing',
  'bill of lading data extraction',
  'logistics customer service automation',
  'dispatch admin automation',
  'TMS integration',
  'AI for freight forwarders',
  'logistics invoice automation',
  'how can AI help a freight forwarder',
  'how to automate shipment status emails',
  'can AI read bills of lading and PODs',
  'what logistics processes can be automated',
  'automate where is my shipment enquiries',
  'POD to invoice automation',
  'logistics back-office automation without replacing the TMS',
];

// The contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'sector-specific AI automation', href: '/products/industry-specific-ai-automation', section: 'What Is AI Logistics Automation?' },
  { anchor: 'AI data extraction software', href: '/products/ai-document-data-intelligence/ai-data-extraction-software', section: 'Where AI Reads and People Decide' },
  { anchor: 'logistics workflow automation', href: '/solutions/ai-workflow-automation/for-logistics', section: 'Practical Use Cases (spotlight)' },
  { anchor: 'document automation for logistics teams', href: '/solutions/document-automation/for-logistics', section: 'Practical Use Cases (spotlight)' },
  { anchor: 'AI voice agent set up for logistics calls', href: '/solutions/ai-voice-agents/for-logistics', section: 'Practical Use Cases (spotlight)' },
  { anchor: 'customer support automation for logistics', href: '/solutions/customer-support-automation/for-logistics', section: 'Practical Use Cases (spotlight)' },
  { anchor: 'invoice automation for freight and logistics', href: '/solutions/invoice-automation/for-logistics', section: 'Practical Use Cases (spotlight)' },
  { anchor: 'custom automation software for older systems and portals', href: '/products/general-ai-automation/custom-ai-automation-software', section: 'Technologies and Integrations' },
] as const;

export const aiLogisticsAutomation: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Logistics Automation',
    heading: 'AI Logistics Automation for Freight Forwarders, 3PLs and Carriers',
    accentWords: 4,
    subheading:
      'Freight moves by road, sea and air, but the office runs on email, PDFs and phone calls. AI logistics automation takes on that office work: reading bills of lading and proofs of delivery, sending shipment status updates, answering “where is my load” questions, logging carrier confirmations and preparing invoices, with a person approving every step that needs judgment.',
    primaryCta: { text: 'Book a Free Logistics Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of a multi-step automated workflow across connected business apps with AI steps, representing a freight office workflow from proof of delivery to invoice',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Bills of lading', 'Proofs of delivery', 'Shipment status updates', 'Carrier emails', 'Quote intake', 'Freight invoicing'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is AI Logistics Automation?',
    paragraphs: [
      'AI logistics automation is the use of AI models and workflow automation to handle the repetitive office work behind freight: extracting data from shipping documents, updating systems, sending status messages, sorting customer and carrier emails and preparing billing. Rules handle the predictable steps, AI reads and drafts, and your team approves exceptions and decisions.',
      'Clickmasters designs and builds these workflows inside the tools your team already uses. This page is part of our [sector-specific AI automation](/products/industry-specific-ai-automation) work. It focuses on the administrative and communication side of freight forwarding, third-party logistics and carrier operations.',
    ],
    problems: [
      'Documents arrive in every format. BOLs, PODs, rate confirmations, packing lists and commercial invoices come in as PDFs, scans, phone photos and email bodies, and someone keys the details in by hand.',
      'Status questions never stop. A coordinator looks each shipment up, then types an answer they have written many times before.',
      'Carrier communication is scattered across inboxes, texts and calls, so updates are missed or logged late.',
      'Billing waits on paperwork. An invoice cannot go out until the POD is received, matched to the load and checked against the agreed rate.',
      'Exceptions surface late. A missed pickup or short delivery is often discovered when the customer complains.',
      'Systems do not talk to each other. Quotes, loads and invoices live in different places, and dispatch admin turns into data entry.',
    ],
  },

  explainer: {
    eyebrow: 'Scope',
    heading: 'What This Page Does Not Cover',
    paragraphs: [
      'To be clear about scope: we do not build route optimization engines, fleet telematics, load-planning algorithms or warehouse robotics. If you already run those systems, an automation can read from or write to them where they offer an API.',
      'The work described here is administrative and operational: documents, messages, data entry, reporting and follow-up.',
    ],
    points: [
      { title: 'Not Route Optimization', description: 'We do not build routing engines or load-planning algorithms.' },
      { title: 'Not Fleet Telematics', description: 'Vehicle tracking systems stay as they are; automations can read from them where an API exists.' },
      { title: 'Not Warehouse Robotics', description: 'Physical warehouse automation is outside this service.' },
      { title: 'What It Does Cover', description: 'Documents, messages, data entry, billing, reporting and follow-up in the freight office.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'Key Capabilities',
    intro: 'These are the building blocks we combine for freight forwarders, 3PLs and carriers, chosen per project.',
    items: [
      { title: 'Freight Document Automation', description: 'Reading BOLs, PODs, rate confirmations, packing lists, arrival notices and commercial invoices.' },
      { title: 'Inbox Triage', description: 'Sorting customer, carrier and internal emails and routing each to the right person or queue.' },
      { title: 'Shipment Status Updates', description: 'Milestone messages by email or SMS, triggered by changes in your systems.' },
      { title: 'Exception Alerts', description: 'A flag when a pickup is missed, a document is missing or data does not match.' },
      { title: 'Reporting', description: 'Load, billing and exception data pulled into a regular summary for managers.' },
      { title: 'Audit Trail', description: 'A record of what the automation did and who approved each step.' },
      { title: 'Voice Handling', description: 'Routine status calls answered, with a hand-off to a person.' },
      { title: 'Quote Intake', description: 'Lane, weight and dates collected and a quote drafted from your rate sheet for approval.' },
      { title: 'Invoice Drafting', description: 'Invoices drafted from load data with PODs attached, ready for finance to approve.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'An Example Workflow From POD to Invoice',
    intro: 'Here is one workflow we might build for a freight forwarder or 3PL, scoped per project.',
    steps: [
      { title: 'The Document Arrives', description: 'A driver or carrier emails a proof of delivery or uploads a photo, and the automation picks up the file from the shared inbox or upload folder.' },
      { title: 'AI Reads and Extracts the Details', description: 'An AI model pulls out the load or reference number, consignee, delivery date, signature and any notes such as damage or shortage.' },
      { title: 'Rules Check the Data', description: 'The POD is matched to the open load record and compared with what was booked. Anything that does not match is flagged rather than guessed.' },
      { title: 'A Coordinator Reviews Exceptions', description: 'Mismatches, missing signatures and damage notes go to a review queue in Slack, Microsoft Teams or email, with the document and extracted fields side by side.' },
      { title: 'Systems Are Updated', description: 'Once approved, the load is marked delivered in your TMS or tracking sheet, where it offers an API, and the customer receives a confirmation from an approved template.' },
      { title: 'The Invoice Is Drafted for Approval', description: 'The invoice is drafted from the load record and agreed rate, with the POD attached, and someone in finance approves it before it is sent.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Benefits for Logistics Operations',
    intro: 'The office work around each shipment moves on its own, while your team handles the exceptions and the customers.',
    items: [
      { title: 'Less Retyping', description: 'Coordinators spend less time retyping and more time on exceptions and customers.' },
      { title: 'Earlier Delay Updates', description: 'Customers hear about delays sooner, in a consistent and approved message.' },
      { title: 'Invoices Move Sooner', description: 'Invoices move as soon as paperwork is complete, instead of waiting in a queue.' },
      { title: 'Fewer Keying Errors', description: 'Data is extracted once and checked by rules, so keying errors drop.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Human in the Loop',
    heading: 'Where AI Reads and People Decide',
    paragraphs: [
      'Rules handle the predictable steps and AI reads and drafts. An AI model can read a POD or bill of lading and pull out the reference number, consignee, delivery date, signature and notes. For a closer look at this step, see our [AI data extraction software](/products/ai-document-data-intelligence/ai-data-extraction-software) page.',
      'Accuracy depends on the quality of the source document, so extracted data is checked against your records and unclear or mismatched documents go to a person. Decisions on rates, claims, rebooking, customs questions and customer-sensitive issues stay with your people.',
    ],
    aiDoes: [
      'Reads documents and extracts references, dates and notes',
      'Matches PODs to open loads',
      'Sends milestone updates from approved templates',
      'Sorts customer and carrier emails',
      'Drafts quotes and invoices',
      'Flags mismatches and missed pickups',
    ],
    peopleDo: [
      'Review mismatches and damage notes',
      'Approve rates and quotes before sending',
      'Decide on rebooking, claims and complaints',
      'Approve invoices before anything goes out',
    ],
  },

  spotlight: {
    eyebrow: 'Use Cases',
    heading: 'Practical Use Cases',
    paragraphs: [
      'Each of these is an example, scoped per project after discovery, not a packaged product. Freight forwarders can have arrival notices and commercial invoices read, shipment files prepared and milestone updates sent; our page on [logistics workflow automation](/solutions/ai-workflow-automation/for-logistics) shows how such multi-step processes are built.',
      'For 3PL automation, the work often centers on receiving and shipping paperwork across many client accounts and producing activity summaries. Our [document automation for logistics teams](/solutions/document-automation/for-logistics) covers the paperwork side in more depth.',
      'Carriers and trucking companies can process rate confirmations, capture POD data from driver uploads and keep dispatch notes current. Status calls from shippers can be answered by an [AI voice agent set up for logistics calls](/solutions/ai-voice-agents/for-logistics), which looks up the load and transfers anything unusual to a dispatcher.',
      'Logistics customer service automation answers routine tracking enquiries across email and chat, so your team can focus on claims and complaints; see [customer support automation for logistics](/solutions/customer-support-automation/for-logistics). For billing, PODs are matched to loads, invoices drafted and missing paperwork chased, and our page on [invoice automation for freight and logistics](/solutions/invoice-automation/for-logistics) goes deeper on billing workflows.',
    ],
    points: [
      { title: 'Freight Forwarders', description: 'Arrival notices and commercial invoices read, shipment files prepared, milestone updates sent.' },
      { title: 'Third-Party Logistics Providers', description: 'Receiving and shipping paperwork across client accounts, plus activity summaries.' },
      { title: 'Carriers and Trucking Companies', description: 'Rate confirmations processed, POD data captured and dispatch notes kept current.' },
      { title: 'Customer Service Teams', description: 'Routine tracking enquiries answered so people can focus on claims and complaints.' },
      { title: 'Billing and Accounts', description: 'PODs matched to loads, invoices drafted and missing paperwork chased.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Approvals',
      heading: 'Who Approves What',
      accentWords: 3,
      paragraphs: [
        'Every workflow sets out what the automation does and where a person steps in. The split below is an example; the real approval points are mapped with your team and approved before anything is built.',
      ],
      points: [
        { title: 'POD and Bill of Lading Intake', description: 'The automation reads, extracts and matches to the load. A coordinator reviews mismatches and damage notes.' },
        { title: 'Shipment Status Updates', description: 'Milestone updates go out from approved templates. Unusual delays go to a person.' },
        { title: '“Where Is My Shipment” Enquiries', description: 'The load is looked up and a reply drafted or sent. Customer service handles complaints and claims.' },
        { title: 'Carrier Emails and Confirmations', description: 'Messages sorted, pickups and delays logged, changes flagged. The dispatcher decides on rebooking or reassignment.' },
        { title: 'Quote Requests', description: 'Lane, weight and dates collected and a quote drafted. Pricing or sales approves the rate before sending.' },
        { title: 'Freight Invoicing', description: 'Invoices drafted with PODs attached. Finance approves before anything goes out.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Logistics Automation Is For',
    items: [
      { title: 'Freight Forwarders', description: 'Teams handling arrival notices, commercial invoices and shipment files across many moves.' },
      { title: 'Third-Party Logistics Providers', description: 'Providers managing paperwork and reporting across many client accounts.' },
      { title: 'Carriers and Trucking Companies', description: 'Offices processing rate confirmations, PODs and dispatch notes.' },
      { title: 'Operations and Office Managers', description: 'Managers who want coordinators spending time on exceptions rather than data entry.' },
      { title: 'Customer Service Teams', description: 'Teams fielding constant tracking enquiries by email, chat and phone.' },
      { title: 'Billing and Accounts Teams', description: 'Finance staff waiting on PODs before invoices can go out.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Technologies and Integrations',
    paragraphs: [
      'We build inside your existing tools and accounts. Your TMS, WMS, carrier portals and accounting system are connected only where the system offers an API or integration, confirmed during discovery.',
      'TMS integration is often the hardest part, because many logistics businesses run older installations or customer portals with no usable API. In those cases we look at options such as [custom automation software for older systems and portals](/products/general-ai-automation/custom-ai-automation-software), and we tell you plainly if a connection is not practical.',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n (self-hosted available)'] },
      { label: 'AI Models', items: ['OpenAI GPT', 'Anthropic Claude', 'Google Gemini', 'Open-source models'] },
      { label: 'Communication', items: ['Gmail', 'Outlook', 'Microsoft Teams', 'Slack', 'Twilio'] },
      { label: 'Data and Cloud', items: ['Airtable', 'SQL databases', 'Cloud data platforms', 'AWS', 'Azure', 'GCP'] },
      { label: 'ERPs and CRMs', items: ['SAP', 'NetSuite', 'Oracle', 'HubSpot', 'Salesforce', 'Zoho'] },
      { label: 'Connection Methods', items: ['REST APIs', 'Webhooks', 'MCP connectors'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Freight Offices Work With Clickmasters',
    intro: 'We automate the office side of logistics inside your own systems, with people kept in charge of the decisions.',
    items: [
      { title: 'We Build in Your Tools', description: 'Automations run in your accounts, not on a platform you rent from us.' },
      { title: 'You Own the Result', description: 'You own the automations, accounts and documentation, and you pay platform and AI usage costs directly.' },
      { title: 'People Stay in Charge', description: 'Rates, claims, rebooking and customer-sensitive issues go to a person with context.' },
      { title: 'We Start With an Audit', description: 'The free audit says which tasks to automate first, and which to leave alone.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Implement Logistics Automation',
    intro: 'Our six-step process is adapted to how your freight office works. You approve the plan before anything is built.',
    steps: [
      { title: 'Discovery', description: 'We look at your inboxes, document types, systems and who touches each step of a load.' },
      { title: 'Strategy and Mapping', description: 'We map triggers, decision points, actions, integrations and approval points for the chosen workflow, such as POD intake or status updates.' },
      { title: 'Development', description: 'We build the workflow, AI prompts and system connections in your accounts.' },
      { title: 'Testing', description: 'We test with real samples of your documents and emails, including edge cases and failure scenarios such as poor scans, missing reference numbers and dropped connections.' },
      { title: 'Deployment', description: 'The workflow goes live in your environment, and documentation and access are handed over to your team.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'Not sure which workflow to start with? The free audit reviews your document, email and billing workflows, with no obligation to proceed.',
  },

  cta: {
    bandHeading: 'Not sure which workflow to start with?',
    heading: 'Start With the Paperwork That Slows You Down',
    description:
      'Pick the workflow that takes the most coordinator time, and we will show you what automating it involves and where your team approves. The free audit tells you which workflows are worth automating first and which are not.',
    primary: { text: 'Book a Free Logistics Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Logistics Automation: Common Questions',
  faqSideText: 'Wondering whether your TMS or document mix is a fit? Book a free audit and we will check with you.',
  faqs: [
    {
      question: 'How can AI help a freight forwarder?',
      answer:
        'AI can take on the document and communication work around each shipment. It reads arrival notices, bills of lading and commercial invoices, updates shipment records, and drafts customer updates and quotes for your team to check. Decisions on rates, customs questions and exceptions stay with your people.',
    },
    {
      question: 'Can AI read bills of lading and proofs of delivery?',
      answer:
        'Yes, AI models can extract reference numbers, parties, dates, signatures and notes from BOLs and PODs, including scans and photos. Accuracy depends on the quality of the source document, so the workflow checks extracted data against your records and sends unclear or mismatched documents to a person for review.',
    },
    {
      question: 'How do you automate shipment status emails?',
      answer:
        'The workflow watches for milestone changes in your TMS, tracking sheet or carrier emails and sends a templated update to the customer. Your team approves the templates, and unusual delays or sensitive accounts can be routed to a person before anything is sent. Connections to your systems depend on available APIs, confirmed during discovery.',
    },
    {
      question: 'What logistics processes can be automated?',
      answer:
        'Good candidates are repetitive and follow rules: document intake, data entry, status updates, tracking enquiries, carrier confirmations, quote intake, invoice preparation and reporting. Work that needs judgment, such as pricing, claims and rebooking, keeps a person in the loop. The free audit helps you decide which processes to start with.',
    },
    {
      question: 'Is this route optimization or warehouse software?',
      answer:
        'No. This service covers office and administrative workflows: documents, emails, calls, data entry, billing and reporting. We do not build route optimization engines, fleet telematics or warehouse robotics, although an automation can exchange data with those systems where they offer an API.',
    },
    {
      question: 'Will it work with our TMS?',
      answer:
        'It can, where your TMS offers an API or integration, which we confirm during discovery. If it does not, we look at alternatives such as working from exports, email notifications or a custom connector. We will tell you if a connection is not practical.',
    },
    {
      question: 'Do we need to replace our existing software?',
      answer:
        'No. We build automations inside the tools and accounts you already use, such as your inboxes, TMS, spreadsheets and accounting system. You own the automations and documentation, and you pay platform and AI usage costs directly.',
    },
  ],
};
