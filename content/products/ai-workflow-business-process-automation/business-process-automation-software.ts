// content/products/ai-workflow-business-process-automation/business-process-automation-software.ts
// Copy + SEO for /products/ai-workflow-business-process-automation/business-process-automation-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus: whole business processes end to end (client onboarding, invoice approval, order processing,
//   employee onboarding), standardization, visibility (dashboards, status, audit trails), department examples
//   and process improvement. Workflow-engine mechanics belong on the ai-workflow-automation-software sibling.
// - Process examples come from content/services/business-process-automation.ts and
//   content/Solutions/business-process-automation.ts. Do not add order-to-cash, procure-to-pay or other named
//   frameworks that the sources do not use.
// - HR example is limited to employee onboarding steps (new-hire account creation, system updates), as the RPA
//   page describes. No payroll, attendance, time-off or performance tracking.
// - Systems named here are named in the source files (CRMs, SAP / NetSuite / Oracle, QuickBooks, Xero, Zendesk,
//   Shopify, Airtable, Slack, n8n, Make, Zapier). What can be connected is confirmed in the audit.
// - No statistics, prices, testimonials, certifications, compliance claims, guarantees or ongoing-support promises.
// - Clickmasters builds this inside the client’s existing systems — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const BUSINESS_PROCESS_AUTOMATION_SOFTWARE_PATH =
  '/products/ai-workflow-business-process-automation/business-process-automation-software';

export const businessProcessAutomationSoftwareSeo: HubSeo = {
  name: 'Business Process Automation Software',
  path: BUSINESS_PROCESS_AUTOMATION_SOFTWARE_PATH,
  title: 'Business Process Automation Software | Clickmasters',
  description:
    'Business process automation software built into your own systems: whole processes run end to end, steps stay standard, and you can see where every case stands.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Workflow & Business Process Automation', path: '/products/ai-workflow-business-process-automation' },
    { name: 'Business Process Automation Software', path: BUSINESS_PROCESS_AUTOMATION_SOFTWARE_PATH },
  ],
};

export const businessProcessAutomationSoftwareKeywords = [
  'business process automation software',
  'BPA software',
  'end-to-end process automation',
  'business process automation examples',
  'process standardization',
  'approval process automation',
  'client onboarding automation',
  'invoice approval automation',
  'employee onboarding automation',
  'process visibility dashboards',
  'cross-department automation',
  'how to automate a business process',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI workflow and business process automation', href: '/products/ai-workflow-business-process-automation', section: 'What Is Business Process Automation Software?' },
  { anchor: 'intelligent process automation', href: '/products/ai-workflow-business-process-automation/intelligent-process-automation', section: 'Where AI Fits Inside Business Process Automation' },
  { anchor: 'invoice automation', href: '/solutions/invoice-automation', section: 'Invoice Approval, From Inbox to Approved (spotlight)' },
  { anchor: 'AI workflow automation software', href: '/products/ai-workflow-business-process-automation/ai-workflow-automation-software', section: 'Standardize, Measure, Then Improve the Process (extras)' },
  { anchor: 'robotic process automation', href: '/services/robotic-process-automation', section: 'Systems We Connect Across a Process' },
] as const;

export const businessProcessAutomationSoftware: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'Business Process Automation Software',
    heading: 'Business Process Automation Software That Runs the Whole Process',
    accentWords: 3,
    subheading:
      'We build business process automation software inside the systems you already run. Each process follows one agreed path from the first request to the final record. People approve the steps that need judgment, and a live view shows where every case stands.',
    primaryCta: { text: 'Book a Free Process Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt: 'Connected business systems illustrating business process automation software running a process end to end',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['End-to-end processes', 'Standard steps', 'Approval routing', 'Exception handling', 'Process dashboards', 'Audit trails'],
  },

  intro: {
    eyebrow: 'Whole Processes, Not Single Steps',
    heading: 'What Is Business Process Automation Software?',
    paragraphs: [
      'Business process automation software takes a complete business process, such as onboarding a client or approving an invoice, and runs it as one connected system. It moves data between your tools, sends each request to the right person and records what happened at every stage. Your team still makes the calls that need judgment.',
      'Most processes cross several teams. A signed client agreement touches sales, operations and finance, and each team keeps its own records. When those hand-offs run on email and spreadsheets, cases stall between departments and nobody owns the full picture. Automating the process as a whole closes the gaps between steps, not just the steps themselves.',
      'This page is part of our [AI workflow and business process automation](/products/ai-workflow-business-process-automation) range. It covers the process level: mapping, standardizing and monitoring work from start to finish.',
    ],
    problems: [
      'The same process runs differently depending on who handles it.',
      'Requests wait in inboxes because nobody knows whose turn it is.',
      'Data is retyped between the CRM, accounting and project tools.',
      'Managers cannot see where a case is stuck without chasing people.',
      'Unusual cases break the process, and nobody notices until a customer does.',
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our Business Process Automation Software Covers',
    intro:
      'Each capability is configured around a process map your team signs off. Nothing is switched on until the steps, owners and rules are agreed in writing.',
    items: [
      { title: 'Process Mapping', description: 'Every trigger, step, hand-off and decision point is written down before anything is built.' },
      { title: 'Cross-System Data Flow', description: 'Records move between CRM, ERP, accounting and project tools without anyone retyping them.' },
      { title: 'Approval Routing', description: 'Requests reach the right approver under your rules, with reminders and escalation when they stall.' },
      { title: 'Standard Steps', description: 'Each case follows the same agreed sequence, whoever starts it and whenever it arrives.' },
      { title: 'Exception Paths', description: 'Missing data and unusual cases go to a named person with the full context attached.' },
      { title: 'Document Handling', description: 'Data from invoices, forms and contracts is extracted, checked against your rules and passed on.' },
      { title: 'Audit Trails', description: 'Actions and decisions are logged, so you can see who approved what and when.' },
      { title: 'Process Dashboards', description: 'Live views show the status of each case and the stages where work tends to slow down.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an Automated Business Process Runs',
    intro:
      'Client onboarding makes a good example. The shape is the same for invoice approvals, order handling or a new hire’s first week.',
    steps: [
      { title: 'Trigger', description: 'A signed agreement recorded in the CRM starts the process for that client.' },
      { title: 'Capture & Check', description: 'Client details are pulled from the agreement and checked for missing or conflicting fields.' },
      { title: 'Create Records', description: 'The project is set up in your project tool and the first invoice is prepared in accounting.' },
      { title: 'Route Approvals', description: 'Anything outside your rules, such as non-standard terms, goes to a named approver first.' },
      { title: 'Notify & Hand Off', description: 'Operations, finance and the account owner learn what is theirs to do, and the client receives the welcome emails.' },
      { title: 'Track & Close', description: 'The dashboard shows the case moving through each stage, and the log records every action taken.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes When the Whole Process Is Automated',
    intro:
      'The biggest gains come from the joins between teams. That is where most delays and errors start.',
    items: [
      { title: 'Fewer Hand-Off Delays', description: 'Work moves to the next team as soon as the previous step is complete.' },
      { title: 'Consistent Outcomes', description: 'Every case follows the same rules, so results do not depend on who is on shift.' },
      { title: 'Less Rework', description: 'Data entered once flows to each system that needs it, which removes copy-paste mistakes.' },
      { title: 'Clear Ownership', description: 'Each step has a named owner, and the system shows who is holding a case right now.' },
      { title: 'Easier Reviews', description: 'Logged decisions make internal checks and month-end reviews quicker to run.' },
      { title: 'Room to Grow', description: 'Busier periods are absorbed by the process instead of extra manual effort.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Rules, AI and People',
    heading: 'Where AI Fits Inside Business Process Automation',
    paragraphs: [
      'Most of a business process is rules. If the amount is under a limit, approve it. If a field is empty, ask for it. Rules are predictable and cheap to run, so we use them wherever they work. AI is added only at the steps where inputs vary, such as reading a supplier email, classifying a document or drafting a status update.',
      'When a step needs real judgment rather than pattern matching, the design moves toward [intelligent process automation](/products/ai-workflow-business-process-automation/intelligent-process-automation), where AI suggests and a person confirms. In both cases, decisions with financial, contractual or customer impact stay with your team.',
    ],
    aiDoes: [
      'Reads and classifies incoming documents and emails',
      'Extracts the fields the next step needs',
      'Suggests which approval path applies',
      'Drafts status updates for each case',
      'Flags cases that do not match the usual pattern',
      'Summarizes process data for managers',
    ],
    peopleDo: [
      'Agree the process map and business rules',
      'Approve payments, contracts and exceptions',
      'Resolve the cases the system flags for review',
      'Decide what to change when the data shows a bottleneck',
    ],
  },

  spotlight: {
    eyebrow: 'Process Example',
    heading: 'Invoice Approval, From Inbox to Approved',
    paragraphs: [
      'Invoice approval is a fair test of process automation because it crosses finance, budget owners and your accounting system. Done by hand, invoices are keyed in, matched against purchase orders by eye and forwarded for sign-off by email. Duplicates can slip through, and approvals wait for days in someone’s inbox.',
      'Once automated, each invoice is captured when it arrives. Its data is extracted, matched to the purchase order and routed to the approver your rules name. Mismatches go to a person with both documents attached. Our [invoice automation](/solutions/invoice-automation) solution covers the finance detail in more depth.',
    ],
    points: [
      { title: 'Capture', description: 'Invoices arriving by email or upload start the process without anyone logging them.' },
      { title: 'Match', description: 'Extracted fields are checked against the purchase order and the supplier record.' },
      { title: 'Route', description: 'Approval goes to the right budget owner, with a reminder if it stalls.' },
      { title: 'Record', description: 'Approved invoices are posted to accounting, and each decision is kept in the log.' },
    ],
  },

  extras: [
    {
      eyebrow: 'By Department',
      heading: 'Business Process Automation Examples by Department',
      accentWords: 2,
      paragraphs: [
        'Every department has a few processes that take more time than they should. They are rarely the interesting ones. They are the high-volume, step-heavy routines everyone assumes must be done by hand.',
        'Processes that cross departments usually pay back the most, because that is where hand-offs pile up. The examples below are typical starting points, and the audit confirms which ones fit your setup.',
      ],
      points: [
        { title: 'Finance', description: 'Invoice matching, purchase order approvals and expense reconciliation, with exceptions sent to a reviewer.' },
        { title: 'Operations', description: 'Order processing, fulfillment hand-offs, purchase requisitions and supplier communications.' },
        { title: 'HR', description: 'Employee onboarding steps such as new-hire account creation and updates across internal systems.' },
        { title: 'Sales', description: 'Lead intake, qualification and assignment, then a clean hand-off to operations and finance when a deal closes.' },
        { title: 'Customer Support', description: 'Ticket routing and escalation based on request type, priority and account.' },
        { title: 'Professional Services', description: 'Client onboarding, contract approvals and recurring internal reports.' },
      ],
    },
    {
      eyebrow: 'Visibility and Improvement',
      heading: 'Standardize, Measure, Then Improve the Process',
      accentWords: 3,
      paragraphs: [
        'Automating a messy process only makes the mess faster. That is why mapping comes first. Writing every step down tends to reveal duplicate approvals, steps nobody needs and decisions without a clear owner. Those get fixed on paper before anything is built.',
        'Once a process runs through one system, it produces data you did not have before: how many cases are open, where they wait and how often exceptions occur. That data shapes the next round of changes. A process is built from individual workflows, and our page on [AI workflow automation software](/products/ai-workflow-business-process-automation/ai-workflow-automation-software) explains how each of those runs step by step.',
      ],
      points: [
        { title: 'One Agreed Path', description: 'A documented standard replaces the private versions each person used to follow.' },
        { title: 'Status at a Glance', description: 'Managers see open cases and their current stage without asking around.' },
        { title: 'Bottleneck Spotting', description: 'Dashboards show which stages hold work up, so fixes target the real problem.' },
        { title: 'Room to Adjust', description: 'Rules and steps can be changed as the business changes, without starting over.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It’s For',
    heading: 'Teams That Get the Most From Process Automation',
    items: [
      { title: 'Operations Leaders', description: 'Owners of processes that span several teams and have no single view of progress.' },
      { title: 'Finance Teams', description: 'Teams handling invoices, approvals and reconciliations that pile up at month end.' },
      { title: 'Growing Service Businesses', description: 'Firms where client onboarding still depends on one experienced person remembering every step.' },
      { title: 'Multi-Location Businesses', description: 'Companies that need the same process to run the same way at every site.' },
      { title: 'HR and People Teams', description: 'Teams setting up accounts and system access for new starters by hand.' },
      { title: 'Businesses on Older Systems', description: 'Teams whose key software has limited connections and still needs to be part of the process.' },
    ],
  },

  integrations: {
    eyebrow: 'Systems',
    heading: 'Systems We Connect Across a Process',
    paragraphs: [
      'Business process automation only works if it reaches every system the process touches. We connect CRMs, ERPs, accounting, project management, help desks and cloud storage through their APIs. The automation layer is built in n8n, Make, Zapier or custom code, depending on volume and complexity.',
      'Some older systems have no usable API. In those cases, [robotic process automation](/services/robotic-process-automation) bots can carry out the screen-level steps a person would. What each of your systems allows is confirmed during the audit, not promised in advance.',
    ],
    groups: [
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'Zoho CRM', 'GoHighLevel'] },
      { label: 'ERP & Accounting', items: ['SAP', 'NetSuite', 'Oracle', 'QuickBooks', 'Xero'] },
      { label: 'Operations & Support', items: ['Airtable', 'Zendesk', 'Shopify', 'Slack'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs', 'RPA bots'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Process Automation With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We design and build process automation inside your existing systems, then hand it over to you.',
    items: [
      { title: 'Process First, Tools Second', description: 'We map how the work really happens before choosing any platform.' },
      { title: 'Designed for Exceptions', description: 'Real cases are messy, so every process has a defined path for the ones that do not fit.' },
      { title: 'Honest Scope', description: 'We tell you which steps are worth automating and which should stay manual.' },
      { title: 'No New Platform to Learn', description: 'Your team keeps working in the tools it already knows.' },
      { title: 'Tested on Real Cases', description: 'Each process is checked against real scenarios, including the awkward ones, before launch.' },
      { title: 'Yours to Keep', description: 'Workflows, accounts and documentation belong to you at handover.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up Business Process Automation Software',
    intro:
      'We start with one process that costs your team the most time. You approve the map and the plan before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We review your current processes and pick the one with the clearest return.' },
      { title: 'Process Map', description: 'Steps, owners, rules, approvals and exception paths are agreed in writing.' },
      { title: 'Build', description: 'The automation is built inside your systems against the approved map.' },
      { title: 'Test', description: 'Real scenarios, including exceptions, are run before any live case enters.' },
      { title: 'Staged Rollout', description: 'The process goes live in stages, with your team watching the first cases.' },
      { title: 'Handover', description: 'You receive the documentation, and every workflow and account stays in your name.' },
    ],
    note: 'Your written quote lists the processes in scope, the platforms involved, deliverables, usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find the process that costs you the most',
    heading: 'Run Your Busiest Process From Start to Finish',
    description:
      'Book a free, no-obligation process automation audit. We will map one of your core processes, show where hand-offs and retyping cost the most time, and be clear about what should stay manual.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Business Process Automation Software: Common Questions',
  faqSideText: 'Not sure which process to automate first? Book a free audit and we will map it with you.',
  faqs: [
    {
      question: 'What is business process automation software?',
      answer:
        'Business process automation software runs a complete business process, such as client onboarding or invoice approval, across the tools and teams involved. Clickmasters builds it inside your existing systems, with people approving the steps that need judgment.',
    },
    {
      question: 'How is business process automation different from workflow automation?',
      answer:
        'The terms overlap. A workflow is usually one chain of steps between a trigger and a result. Business process automation covers the whole outcome, which often links several workflows across departments and systems.',
    },
    {
      question: 'Which business processes can be automated?',
      answer:
        'Common examples are client and customer onboarding, employee onboarding, invoice and purchase order approvals, order processing, support ticket routing, document processing and recurring reports.',
    },
    {
      question: 'Do we need to buy a new platform?',
      answer:
        'No. We build inside the CRM, accounting, ERP and project tools you already use, connected through n8n, Make, Zapier or custom code. Any usage costs are listed in your written quote.',
    },
    {
      question: 'Can it connect departments that use different systems?',
      answer:
        'Yes, where the systems have integrations or APIs. For older software without one, RPA bots can handle the screen-level steps. The audit confirms what is possible for each system.',
    },
    {
      question: 'What happens when a case does not fit the rules?',
      answer:
        'It follows an exception path. The case is flagged to a named person with the context attached, instead of failing silently or being pushed through.',
    },
    {
      question: 'How do we see where a process is stuck?',
      answer:
        'Process dashboards show open cases, their current stage and where work tends to wait. The audit trail shows who did what and when for each case.',
    },
    {
      question: 'Will process automation replace our staff?',
      answer:
        'It replaces the repetitive parts of the work, such as retyping, chasing and forwarding. Approvals, exceptions and decisions that need judgment stay with your team.',
    },
    {
      question: 'How long does it take to automate a process?',
      answer:
        'It depends on the number of steps, systems and approval rules involved. Your written quote sets out a timeline for each stage, and we usually start with a single process.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your processes, agree the first one to automate and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
