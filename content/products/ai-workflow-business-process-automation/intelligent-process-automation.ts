// content/products/ai-workflow-business-process-automation/intelligent-process-automation.ts
// Copy + SEO for /products/ai-workflow-business-process-automation/intelligent-process-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Focus: intelligent process automation = AI steps (classify, extract, summarize, suggest) combined with
//   rules-based workflows and RPA bots, for steps that need judgment. Decision support, not decision making.
// - Document handling is described the way content/services/ai-data-document-automation.ts states it:
//   AI extraction from PDFs, invoices, receipts and forms, validation rules, uncertain fields flagged for a person.
//   No accuracy figures, no claims of perfect extraction.
// - RPA facts come from content/services/robotic-process-automation.ts (bots for rule-based work, legacy systems,
//   ERP names SAP / NetSuite / Oracle, predictable action logs). Do not quote its case-study outcomes.
// - No statistics, prices, testimonials, certifications, compliance claims, guarantees or ongoing-support promises.
// - Clickmasters builds this inside the client’s existing tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const INTELLIGENT_PROCESS_AUTOMATION_PATH =
  '/products/ai-workflow-business-process-automation/intelligent-process-automation';

export const intelligentProcessAutomationSeo: HubSeo = {
  name: 'Intelligent Process Automation',
  path: INTELLIGENT_PROCESS_AUTOMATION_PATH,
  title: 'Intelligent Process Automation (IPA) | Clickmasters',
  description:
    'Intelligent process automation pairing AI with rules and RPA bots, so documents and decisions move faster while your team keeps exceptions and approvals.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Workflow & Business Process Automation', path: '/products/ai-workflow-business-process-automation' },
    { name: 'Intelligent Process Automation', path: INTELLIGENT_PROCESS_AUTOMATION_PATH },
  ],
};

export const intelligentProcessAutomationKeywords = [
  'intelligent process automation',
  'IPA',
  'intelligent automation',
  'AI process automation',
  'RPA and AI',
  'intelligent document processing',
  'AI decision support',
  'human-in-the-loop automation',
  'exception handling automation',
  'traditional vs intelligent automation',
  'what is intelligent process automation',
  'responsible AI automation',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI workflow and business process automation', href: '/products/ai-workflow-business-process-automation', section: 'What Is Intelligent Process Automation?' },
  { anchor: 'robotic process automation', href: '/services/robotic-process-automation', section: 'Traditional Automation vs Intelligent Process Automation (explainer)' },
  { anchor: 'AI workflow automation software', href: '/products/ai-workflow-business-process-automation/ai-workflow-automation-software', section: 'AI Suggests, People Decide' },
  { anchor: 'document automation', href: '/solutions/document-automation', section: 'Reading Documents and Messages Inside the Process (spotlight)' },
  { anchor: 'enterprise workflow automation', href: '/products/ai-workflow-business-process-automation/enterprise-workflow-automation', section: 'Responsible Automation, Built In From the Start (extras)' },
] as const;

export const intelligentProcessAutomation: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'Intelligent Process Automation',
    heading: 'Intelligent Process Automation for the Steps That Need Judgment',
    accentWords: 4,
    subheading:
      'Rules and bots are good at repeatable steps. They stall when a step means reading a document, sorting a request or weighing a choice. We combine AI with rules-based workflows and RPA inside your existing systems, and we route every uncertain case to a person.',
    primaryCta: { text: 'Book a Free Intelligent Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt: 'Diagram-style illustration of intelligent process automation combining AI steps, rules and human review',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['AI plus rules', 'RPA for repeatable steps', 'Document data extraction', 'Decision support', 'Exceptions to people', 'Logged actions'],
  },

  intro: {
    eyebrow: 'Beyond Fixed Rules',
    heading: 'What Is Intelligent Process Automation?',
    paragraphs: [
      'Intelligent process automation (IPA) combines AI with rules-based workflows and software bots. The rules and bots handle the predictable parts of a process. AI handles the parts that need reading or interpretation. People keep the decisions that carry real weight.',
      'Most processes are not purely mechanical. An invoice has to be read before it can be checked. A customer email has to be understood before anyone knows where it goes. A request may fit three different paths. These steps are where plain automation hands the work back to a person, and where queues build up.',
      'This page covers the intelligent layer of our [AI workflow and business process automation](/products/ai-workflow-business-process-automation) work. It explains what AI adds, where it stops, and how we keep your team in control of the outcome.',
    ],
    problems: [
      'Automations run fine until a document or message arrives in an unexpected format.',
      'Staff still read every incoming item just to decide where it should go.',
      'Data is re-typed from PDFs and emails into business systems by hand.',
      'Unusual cases fail quietly instead of reaching someone who can fix them.',
    ],
  },

  explainer: {
    eyebrow: 'Know the Difference',
    heading: 'Traditional Automation vs Intelligent Process Automation',
    paragraphs: [
      'Traditional automation follows instructions written in advance: when this happens, do that. It works well for structured data and stable steps. [Robotic process automation](/services/robotic-process-automation) extends the idea to screen-level work, so a bot can update older systems that have no modern connection.',
      'Intelligent automation keeps those rules and bots in place and adds AI steps for unstructured input. The AI reads, classifies, extracts and suggests. The rules then check what the AI produced, and the workflow decides whether to continue or to ask a person. Each part does the job it is suited to.',
    ],
    points: [
      { title: 'Rules', description: 'Fixed logic for structured data and predictable steps: if a value matches, take the next action.' },
      { title: 'RPA Bots', description: 'Software bots that repeat rule-based screen work, including in legacy systems without APIs.' },
      { title: 'AI Steps', description: 'Reading, classifying, extracting and drafting where the input is free text or a varied document.' },
      { title: 'People', description: 'Approvals, judgment calls and any case the system is not confident about.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Intelligent Process Automation Can Handle',
    intro:
      'Each capability is designed around one of your processes and built into the tools you already run. Nothing goes live until your team has reviewed how it behaves.',
    items: [
      { title: 'Classification and Routing', description: 'Incoming emails, requests and tickets are sorted by what they are about and sent to the right queue or path.' },
      { title: 'Document Data Extraction', description: 'Fields are pulled from PDFs, invoices, receipts and forms, even when layouts vary from sender to sender.' },
      { title: 'Validation Rules', description: 'Extracted values are checked against expected ranges, purchase orders or existing records before anything is written.' },
      { title: 'Decision Support', description: 'AI summarizes a case and suggests an option, and the person who owns the decision makes the call.' },
      { title: 'Bot-Driven System Updates', description: 'RPA bots carry approved data into systems that cannot be reached any other way.' },
      { title: 'Exception Queues', description: 'Low-confidence or mismatched items land in a review queue with the uncertain detail highlighted.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an Intelligent Automation Flow Runs',
    intro:
      'Take an inbound supplier email with an invoice attached. The same pattern applies to most processes we build.',
    steps: [
      { title: 'Capture', description: 'The email and its attachment are picked up as soon as they arrive.' },
      { title: 'Understand', description: 'AI identifies the item as an invoice and extracts the supplier, amount, date and line items.' },
      { title: 'Check', description: 'Rules compare the values with the matching purchase order and the expected ranges.' },
      { title: 'Route', description: 'Clean matches continue. Mismatches, missing orders or unknown suppliers go to a reviewer with the issue named.' },
      { title: 'Act', description: 'Approved data is written to the accounting system by an integration or, where needed, an RPA bot.' },
      { title: 'Record', description: 'Each step is logged, so anyone can see what happened to the invoice and who approved it.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Teams Add Intelligence to Their Automation',
    intro:
      'The main gain is coverage. More of a process can run on its own, and the part that cannot is handed over cleanly.',
    items: [
      { title: 'Less Manual Reading', description: 'Staff stop opening every item just to find out what it is.' },
      { title: 'Less Re-Keying', description: 'Data moves from documents into systems without being typed twice.' },
      { title: 'Fewer Silent Failures', description: 'Odd cases are flagged for review instead of breaking the flow.' },
      { title: 'Faster Hand-Offs', description: 'Reviewers receive a summary and the relevant fields, not a raw inbox.' },
      { title: 'Consistent Handling', description: 'The same checks run on every item, at any hour.' },
      { title: 'Clear Records', description: 'Logged steps make it easier to answer the question of what happened and why.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Decision Support',
    heading: 'AI Suggests, People Decide',
    paragraphs: [
      'In intelligent process automation, AI is an assistant to the decision, not the decision maker. It can read a long request and summarize it in three lines. It can suggest the likely category or the next step. Where money, customers or policy are involved, a named person approves before the workflow acts.',
      'Approval steps sit inside the same [AI workflow automation software](/products/ai-workflow-business-process-automation/ai-workflow-automation-software) that runs the rest of the process. The reviewer sees the suggestion, the source material and the options, then clicks approve, edit or reject.',
    ],
    aiDoes: [
      'Reads emails, forms and documents',
      'Classifies requests by type and urgency',
      'Extracts fields from varied layouts',
      'Summarizes a case for the reviewer',
      'Suggests a category, route or next step',
      'Flags what it is unsure about',
    ],
    peopleDo: [
      'Set the rules, thresholds and approval points',
      'Approve decisions that affect money, customers or policy',
      'Resolve exceptions the system cannot settle',
      'Review results and decide what to change',
    ],
  },

  spotlight: {
    eyebrow: 'Document and Information Processing',
    heading: 'Reading Documents and Messages Inside the Process',
    paragraphs: [
      'Older OCR tools read characters but had no sense of what a field meant, so most output still needed checking. Current AI extraction pairs OCR with language models. It can find the total on an invoice whatever the layout, and tell an invoice number from an order number by meaning.',
      'Extraction alone is not the goal. Values are validated against your records, the routine items continue, and anything uncertain is held for a person with the doubtful field marked. When documents are the main problem, our [document automation](/solutions/document-automation) solution covers that work in more depth.',
    ],
    points: [
      { title: 'Invoices and Receipts', description: 'Supplier, amount, date and line items read and matched to orders.' },
      { title: 'Forms and Applications', description: 'Submitted forms turned into structured records in the right system.' },
      { title: 'Contracts and Agreements', description: 'Key terms, dates and figures extracted for a person to review.' },
      { title: 'Inbound Messages', description: 'Free-text emails sorted, summarized and routed to the right team.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Exception Handling',
      heading: 'Exceptions Go to People, Not Into a Void',
      accentWords: 3,
      paragraphs: [
        'Every process has cases nobody planned for: a total that does not match, a document in a new format, a request that fits no category. Weak automation either stops or pushes the item through regardless. We design the exception path as carefully as the main path.',
        'Each exception reaches a named owner with the context they need. That includes the original item, what the system found, which check failed and what it would suggest. Once resolved, the item rejoins the flow at the right point instead of starting again.',
      ],
      points: [
        { title: 'Confidence Thresholds', description: 'Items below the level you agree are held for review rather than processed.' },
        { title: 'Named Owners', description: 'Each exception type has a person or team responsible for it.' },
        { title: 'Context Attached', description: 'Reviewers see the source, the extracted data and the failed check together.' },
        { title: 'Retries and Alerts', description: 'If a connected system is unavailable, the workflow retries and alerts someone instead of failing quietly.' },
      ],
    },
    {
      eyebrow: 'Responsible Automation',
      heading: 'Responsible Automation, Built In From the Start',
      accentWords: 4,
      paragraphs: [
        'AI can be wrong, and a process that hides that is risky. We scope each automation to the data it needs, keep people on the decisions that matter, and log what the system did. You can see why an item went where it went.',
        'For organizations rolling this out across several departments, the same principles extend into ownership, change control and staged rollout. Our [enterprise workflow automation](/products/ai-workflow-business-process-automation/enterprise-workflow-automation) page covers that side.',
      ],
      points: [
        { title: 'Scoped Data Access', description: 'Each workflow touches only the systems and fields its job requires.' },
        { title: 'Human Approval Points', description: 'High-impact actions wait for a person, by design.' },
        { title: 'Logged Actions', description: 'Steps, decisions and approvals are recorded where your platforms support it.' },
        { title: 'Regular Review', description: 'Exception rates and AI suggestions are checked after launch and the rules adjusted.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Where Intelligent Process Automation Fits',
    items: [
      { title: 'Finance Teams', description: 'Invoice and receipt capture, purchase order matching, and mismatches routed to an approver.' },
      { title: 'Operations Teams', description: 'Order and request handling where stock, payment or address issues need a person.' },
      { title: 'Customer Service', description: 'Tickets classified by topic and urgency, with unclear cases sent for manual review.' },
      { title: 'HR Administration', description: 'Onboarding paperwork processed and new-hire system updates carried out by bots.' },
      { title: 'Sales Operations', description: 'Inbound inquiries read, summarized and routed to the right owner in the CRM.' },
      { title: 'Teams on Legacy Systems', description: 'Older software kept in place, with RPA bots doing the updates people used to type.' },
    ],
  },

  integrations: {
    eyebrow: 'Systems',
    heading: 'Where We Build Intelligent Automation',
    paragraphs: [
      'We build on the platforms and systems you already run. Workflows are orchestrated in n8n, Make or Zapier, and connect to CRMs such as HubSpot and Salesforce and ERPs such as SAP, NetSuite or Oracle. Where a system has no usable API, an RPA bot can do the work through its interface.',
      'The right mix depends on volume, data sensitivity and how much AI each step needs. n8n can be self-hosted when data needs to stay in your environment. What can be connected in your case is confirmed during the audit.',
    ],
    groups: [
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
      { label: 'Business Systems', items: ['HubSpot', 'Salesforce', 'SAP', 'NetSuite', 'Oracle'] },
      { label: 'Data and Records', items: ['Airtable', 'Spreadsheets', 'Databases'] },
      { label: 'Inputs', items: ['PDFs', 'Invoices', 'Receipts', 'Forms', 'Emails'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Intelligent Automation With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We design the process first, then decide which steps need AI, which need rules and which need a person.',
    items: [
      { title: 'Process Before Tools', description: 'We map your steps, volumes and exceptions before choosing any technology.' },
      { title: 'AI Only Where It Helps', description: 'If a rule does the job, we use a rule. AI goes where input is messy.' },
      { title: 'Exception Paths Designed', description: 'Unusual cases have an owner and a route from day one.' },
      { title: 'No New Platform to Learn', description: 'Everything runs inside the systems and automation tools you already use.' },
      { title: 'Honest Scoping', description: 'We tell you which steps are not ready for automation yet.' },
      { title: 'You Own the Result', description: 'Workflows, accounts and documentation are handed over to your team.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up Intelligent Process Automation',
    intro:
      'We begin with one process that involves reading or sorting work by hand. You approve the design, including every approval point, before we build.',
    steps: [
      { title: 'Free Audit', description: 'We review the process, its volume and where people spend time reading, checking and re-typing.' },
      { title: 'Process Map', description: 'Steps, rules, AI tasks, thresholds, exception owners and approvals are agreed in writing.' },
      { title: 'Build', description: 'Workflows, AI steps and any RPA bots are built in your tools.' },
      { title: 'Test on Real Samples', description: 'We run real documents and messages through it, including the awkward ones.' },
      { title: 'Staged Rollout', description: 'The flow goes live in stages, with your team reviewing outputs before volume increases.' },
      { title: 'Handover', description: 'You receive the workflows, accounts and documentation that explain how each step works.' },
    ],
    note: 'Your written quote covers the process in scope, the platforms involved, deliverables, expected usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find the steps your automation cannot handle yet',
    heading: 'Bring Judgment Steps Into Your Automation',
    description:
      'Book a free, no-obligation audit. We will look at where your team reads, sorts and re-types work, show where AI can help, and point out where a person should stay in charge.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Intelligent Process Automation: Common Questions',
  faqSideText: 'Not sure whether your process needs AI or just better rules? Book a free audit and we will tell you plainly.',
  faqs: [
    {
      question: 'What is intelligent process automation?',
      answer:
        'Intelligent process automation combines AI with rules-based workflows and RPA bots. Rules and bots run the predictable steps, AI handles reading and sorting unstructured input, and people approve the decisions that matter.',
    },
    {
      question: 'How is intelligent automation different from RPA?',
      answer:
        'RPA bots repeat fixed, rule-based actions, often through a system’s screens. Intelligent automation keeps those bots and adds AI steps for documents, free text and choices between paths, plus review queues for uncertain cases.',
    },
    {
      question: 'Does AI make the final decisions?',
      answer:
        'Not for decisions with real consequences. AI summarizes and suggests. The approval points you choose, such as payments, customer commitments or policy exceptions, wait for a person.',
    },
    {
      question: 'What happens when the AI is not sure?',
      answer:
        'The item is held in a review queue instead of being processed. The reviewer sees the source, the extracted data and the specific field or check that caused the doubt.',
    },
    {
      question: 'Can it read invoices, forms and other documents?',
      answer:
        'Yes. AI extraction pulls fields from PDFs, invoices, receipts and forms with varied layouts. Values are then validated against your records, and anything uncertain is flagged for a person.',
    },
    {
      question: 'Is AI extraction always accurate?',
      answer:
        'No system is perfect, so we do not promise that. We combine extraction with validation rules and human review, which means errors are caught and flagged rather than passed into your systems.',
    },
    {
      question: 'Can it work with older software that has no API?',
      answer:
        'Often, yes. RPA bots can work through a system’s interface, so legacy software can stay in place. Whether a specific system is suitable is checked during the audit.',
    },
    {
      question: 'Which platforms do you use?',
      answer:
        'We commonly build on n8n, Make and Zapier, and connect systems such as HubSpot, Salesforce, SAP, NetSuite and Oracle. The choice depends on your volume, data needs and existing tools.',
    },
    {
      question: 'Is intelligent automation right for every process?',
      answer:
        'No. If a process is fully structured, plain rules are simpler and cheaper. AI is worth adding where people currently read, interpret or sort input before anything else can happen.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We pick one process, map its steps and exceptions, and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
