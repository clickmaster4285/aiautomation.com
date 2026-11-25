// content/products/ai-workflow-business-process-automation/ai-workflow-automation-software.ts
// Copy + SEO for /products/ai-workflow-business-process-automation/ai-workflow-automation-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the workflow system itself: triggers, steps, branching, AI steps, approvals,
//   data mapping, error handling, monitoring. Whole end-to-end processes belong to the BPA sibling;
//   single tasks to AI Task Automation; AI + RPA judgment work to Intelligent Process Automation.
// - Platforms named here are the ones named in site sources: n8n, Make, Zapier, Airtable, HubSpot,
//   Salesforce, GoHighLevel, OpenAI / Claude / Gemini (AI layer), custom code / APIs / webhooks.
//   Platform trade-offs follow the AI workflow automation service pages.
// - No statistics, prices, testimonials, guarantees, uptime promises or ongoing-support promises.
// - Clickmasters builds workflows on platforms the client owns — it is not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_WORKFLOW_AUTOMATION_SOFTWARE_PATH =
  '/products/ai-workflow-business-process-automation/ai-workflow-automation-software';

export const aiWorkflowAutomationSoftwareSeo: HubSeo = {
  name: 'AI Workflow Automation Software',
  path: AI_WORKFLOW_AUTOMATION_SOFTWARE_PATH,
  title: 'AI Workflow Automation Software Across Apps | Clickmasters',
  description:
    'AI workflow automation software built on n8n, Make or Zapier: triggers, branching, approvals, error handling and monitoring for multi-step work across apps.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Workflow & Business Process Automation', path: '/products/ai-workflow-business-process-automation' },
    { name: 'AI Workflow Automation Software', path: AI_WORKFLOW_AUTOMATION_SOFTWARE_PATH },
  ],
};

export const aiWorkflowAutomationSoftwareKeywords = [
  'AI workflow automation software',
  'workflow automation software',
  'multi-step workflow automation',
  'workflow automation tools',
  'automated workflows across apps',
  'workflow triggers and actions',
  'conditional workflow branching',
  'approval workflow software',
  'workflow error handling',
  'n8n vs Make vs Zapier',
  'how to automate a multi-step workflow',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI workflow and business process automation', href: '/products/ai-workflow-business-process-automation', section: 'What Is AI Workflow Automation Software?' },
  { anchor: 'Make automation services', href: '/platforms/make-automation-services', section: 'The Building Blocks of an Automated Workflow (explainer)' },
  { anchor: 'intelligent process automation', href: '/products/ai-workflow-business-process-automation/intelligent-process-automation', section: 'Rules and AI Steps in the Same Workflow' },
  { anchor: 'business process automation software', href: '/products/ai-workflow-business-process-automation/business-process-automation-software', section: 'When One Workflow Becomes a Process (extras)' },
  { anchor: 'AI workflow automation with n8n', href: '/solutions/ai-workflow-automation/with-n8n', section: 'Apps Your Workflows Can Connect' },
] as const;

export const aiWorkflowAutomationSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Workflow Automation Software',
    heading: 'AI Workflow Automation Software for Multi-Step Work Across Apps',
    accentWords: 4,
    subheading:
      'We build AI workflow automation software on platforms you own, such as n8n, Make or Zapier. Each workflow starts from a real event, moves through your apps step by step, branches on conditions, pauses for approvals and tells you when something goes wrong.',
    primaryCta: { text: 'Book a Free Workflow Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt: 'Illustration of a multi-step automated workflow running across connected apps with AI steps',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Event triggers', 'Multi-step actions', 'Conditional branching', 'AI decision steps', 'Approval steps', 'Retries and alerts'],
  },

  intro: {
    eyebrow: 'The Workflow Engine',
    heading: 'What Is AI Workflow Automation Software?',
    paragraphs: [
      'AI workflow automation software is the system that runs a chain of steps between your apps without anyone doing them by hand. A trigger starts the run. Each step reads data, changes a record, sends a message or calls another tool. AI steps sit inside the chain wherever something needs reading or interpreting, such as an email or a free-text form.',
      'The difference from a basic two-app connection is depth. A real workflow can have a dozen steps, several branches, a wait for a manager’s approval and a plan for what happens when one app is down. That is the part most teams never get to when they set up automations themselves.',
      'This page covers the workflow layer itself. For how it fits with process-level and enterprise automation, see the overview of [AI workflow and business process automation](/products/ai-workflow-business-process-automation).',
    ],
    problems: [
      'Simple two-step automations break as soon as the process has a condition.',
      'Approvals happen in email threads, outside the automation entirely.',
      'Workflows fail silently, and nobody notices until a customer complains.',
      'Only one person understands how the existing automations are wired.',
    ],
  },

  explainer: {
    eyebrow: 'Anatomy of a Workflow',
    heading: 'The Building Blocks of an Automated Workflow',
    paragraphs: [
      'Every workflow, however complex, is made from a small set of parts. Knowing them makes it easier to see which of your processes could run on their own and what each one would need.',
      'The parts that matter most are the ones people skip: conditions, approvals and error paths. Visual platforms are well suited to this kind of branching logic, which is why many of our multi-path builds use the scenario design described on our [Make automation services](/platforms/make-automation-services) page.',
    ],
    points: [
      { title: 'Triggers', description: 'The event or schedule that starts a run: a form, a new record, an incoming email, a webhook, a paid invoice or a set time.' },
      { title: 'Actions', description: 'The steps that create, update or move data, send notifications and assign tasks in your apps.' },
      { title: 'Conditions and Branches', description: 'Rules that send each item down the right path, based on values such as amount, region, source or type.' },
      { title: 'AI Steps', description: 'Points where a model reads, classifies, extracts or drafts before the workflow decides what to do next.' },
      { title: 'Approval Pauses', description: 'Steps where the workflow waits for a person to approve, reject or edit before it continues.' },
      { title: 'Error Paths', description: 'Retries, fallbacks and alerts that take over when a step fails or returns something unexpected.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our AI Workflow Automation Software Handles',
    intro:
      'Each workflow is configured around your apps, data and rules. These are the capabilities we build in, used as much or as little as the job requires.',
    items: [
      { title: 'Event and Webhook Triggers', description: 'Workflows start the moment something happens in a connected app, not when someone checks.' },
      { title: 'Scheduled Workflows', description: 'Nightly syncs, weekly reports and monthly checks run on a fixed timetable.' },
      { title: 'Multi-Step Actions', description: 'One trigger can update the CRM, create a task, post a message and write to a spreadsheet in sequence.' },
      { title: 'Conditional Branching', description: 'Filters and routing rules send each item down the path that fits it.' },
      { title: 'AI Decision Steps', description: 'Models classify messages, extract details from text and suggest the next branch.' },
      { title: 'Approval Steps', description: 'Discounts, expenses, content or contracts wait for sign-off, with reminders and escalation if they stall.' },
      { title: 'Data Mapping', description: 'Fields are validated, cleaned and reformatted so each app receives data in the shape it expects.' },
      { title: 'Error Handling', description: 'Failed steps retry, fall back to another path or stop safely and raise an alert.' },
      { title: 'Run Monitoring', description: 'Each run is logged, so you can see what happened to any item and where it stopped.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Workflow Run, Step by Step',
    intro:
      'Here is a lead-handling workflow as an example. The same pattern applies to orders, requests, tickets and internal approvals.',
    steps: [
      { title: 'Trigger', description: 'A prospect submits the contact form on your website, and the workflow starts.' },
      { title: 'Validate', description: 'Required fields are checked, duplicates are matched against the CRM and missing data is flagged.' },
      { title: 'Interpret', description: 'An AI step reads the message, works out what the prospect is asking for and scores it against your criteria.' },
      { title: 'Branch', description: 'Sales-ready leads go to the right rep by product or territory. Others enter a nurture path.' },
      { title: 'Act', description: 'The contact and task are created in the CRM, the rep is notified and a first reply is drafted for review.' },
      { title: 'Monitor', description: 'The run is logged. If any step fails, it retries and alerts the owner instead of dropping the lead.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Teams Move From Manual Steps to Automated Workflows',
    intro:
      'The value is not only speed. It is knowing that the same steps happen every time, and that you will hear about it when they do not.',
    items: [
      { title: 'No Copy-and-Paste', description: 'Data moves between apps automatically, so it is typed once.' },
      { title: 'Immediate Response', description: 'Workflows react to events as they happen, including evenings and weekends.' },
      { title: 'Same Steps Every Time', description: 'Each run follows the rules you agreed, whoever is busy that day.' },
      { title: 'Visible Failures', description: 'Errors raise alerts instead of quietly leaving work undone.' },
      { title: 'Approvals That Move', description: 'Requests reach the right person and do not sit unseen in an inbox.' },
      { title: 'Easier to Change', description: 'Documented, modular workflows can be adjusted when your process changes.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Rules Plus AI',
    heading: 'Rules and AI Steps in the Same Workflow',
    paragraphs: [
      'Most steps in a workflow do not need AI. Moving a record or sending a notification is plumbing, and fixed rules do it cheaply and reliably. AI earns its place at the steps where the input varies: a message to interpret, a document to read or a choice between several paths.',
      'When a process depends heavily on judgment, or mixes AI with bots that work in older systems, it moves into [intelligent process automation](/products/ai-workflow-business-process-automation/intelligent-process-automation). For most multi-step workflows, a few well-placed AI steps are enough.',
    ],
    aiDoes: [
      'Reads incoming emails and form messages',
      'Classifies requests by intent or type',
      'Extracts names, references and amounts',
      'Suggests the branch a case should follow',
      'Drafts replies and summaries for review',
      'Flags inputs it cannot interpret confidently',
    ],
    peopleDo: [
      'Set the rules, branches and thresholds',
      'Approve sensitive or high-value actions',
      'Handle the cases the workflow escalates',
      'Decide when the workflow should change',
    ],
  },

  spotlight: {
    eyebrow: 'Reliability',
    heading: 'Error Handling and Monitoring Built In',
    paragraphs: [
      'A workflow that works in a demo can still fail in real use. An app changes a field, an API times out, or a form arrives with a value nobody expected. Without error handling, the run stops and nobody knows. The lead is lost, or the invoice never posts.',
      'We design every workflow on the assumption that something will fail. Each risky step has a retry or a fallback. When a run cannot finish, the right person is alerted with enough detail to fix it. Logs show the history of every item, so diagnosing a problem takes minutes rather than an afternoon.',
    ],
    points: [
      { title: 'Retries', description: 'Temporary failures, such as a timeout, are retried before anything is flagged.' },
      { title: 'Fallback Paths', description: 'If a step cannot complete, the item moves to a safe alternative or a manual queue.' },
      { title: 'Alerts', description: 'The workflow owner is notified when a run fails, with the item and step attached.' },
      { title: 'Run History', description: 'Every run is recorded, so you can trace what happened and replay it once fixed.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Choosing a Platform',
      heading: 'n8n, Make or Zapier: Which Workflow Platform Fits?',
      accentWords: 3,
      paragraphs: [
        'There is no single best workflow automation software. The right choice depends on how complex the logic is, how many runs you expect, how sensitive the data is and who will maintain it afterwards.',
        'We are not tied to any platform, and we will say so when the simpler, cheaper option is the better fit. Sometimes the right answer is to keep a workflow inside the CRM you already use.',
      ],
      points: [
        { title: 'Zapier', description: 'Quickest to set up, with a large app library. Best for linear, lower-volume flows. Less suited to complex logic or high volume.' },
        { title: 'Make', description: 'A visual canvas with strong branching. Best for complex multi-step workflows with real conditions. Steeper to learn than Zapier.' },
        { title: 'n8n', description: 'Developer-friendly, can be self-hosted, with AI nodes and no per-run fees. Best for high-volume or data-sensitive work. Needs more technical setup.' },
        { title: 'Inside Your CRM', description: 'HubSpot or GoHighLevel workflows suit automation that stays within the CRM.' },
        { title: 'Custom Code and APIs', description: 'Full control where no platform fits, with a higher upfront investment.' },
      ],
    },
    {
      eyebrow: 'Workflow or Process?',
      heading: 'When One Workflow Becomes a Process',
      accentWords: 3,
      paragraphs: [
        'A single workflow handles one chain of steps: a lead is routed, an approval is collected, a record is synced. Many businesses start there. Over time, several workflows begin to depend on each other and form a full process, such as client onboarding from signed agreement to first invoice.',
        'At that point the questions change. Who owns each stage? How do you see the whole process at once? How do teams hand work over? That is the focus of [business process automation software](/products/ai-workflow-business-process-automation/business-process-automation-software), which builds on the workflows described here.',
      ],
      points: [
        { title: 'One Workflow Is Enough When', description: 'The work starts and ends in a clear place and involves one team.' },
        { title: 'Think in Processes When', description: 'Several teams, systems and approvals are involved from start to finish.' },
        { title: 'Shared Foundations', description: 'Integrations, error handling and logging built for the first workflow are reused by the next.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Workflows We Commonly Build',
    items: [
      { title: 'Lead Intake and Routing', description: 'Form leads validated, scored, assigned to a rep and logged in the CRM with a follow-up task.' },
      { title: 'Order Processing', description: 'New orders validated, inventory updated, fulfillment triggered and failed payments flagged with context.' },
      { title: 'Data Synchronization', description: 'Changes in one system, such as an address or plan, copied to the CRM, billing and support tools.' },
      { title: 'Approval Routing', description: 'Discount, expense, content and contract requests sent to the right approver, with reminders and a logged decision.' },
      { title: 'Inbox Triage', description: 'Shared-inbox emails classified by intent and turned into the right ticket or task for the right team.' },
      { title: 'Scheduled Reporting', description: 'Reports assembled from live data on a schedule, with an AI-drafted summary for a person to check.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Apps Your Workflows Can Connect',
    paragraphs: [
      'Workflows connect the CRMs, email, spreadsheets, helpdesks, billing, accounting and project tools you already use, through native connectors, APIs or webhooks. For AI-heavy or self-hosted builds, see how we approach [AI workflow automation with n8n](/solutions/ai-workflow-automation/with-n8n).',
      'Models such as OpenAI, Claude or Gemini power the AI steps, integrated into the workflow rather than used on their own. What can be connected in your stack is confirmed during the audit.',
    ],
    groups: [
      { label: 'Workflow Platforms', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'GoHighLevel'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Connections', items: ['APIs', 'Webhooks', 'Custom code'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Workflows With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We design and build workflows on platforms you own, then hand them over with the documentation to run them.',
    items: [
      { title: 'Mapped Before Built', description: 'Every trigger, step, branch and exception is written down before we open a platform.' },
      { title: 'Platform-Honest Advice', description: 'We recommend the tool that fits your volume, budget and data needs, not the one we prefer.' },
      { title: 'Production-Ready', description: 'Retries, alerts and fallback paths are part of the build, not an extra.' },
      { title: 'Modular Design', description: 'Large workflows are split into parts that are easier to test, change and reuse.' },
      { title: 'Tested on Real Cases', description: 'Each path is tested with realistic data, including missing fields and failures.' },
      { title: 'You Own It', description: 'The workflows, accounts and documentation belong to you after handover.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Build Your First Workflow',
    intro:
      'We start with the workflow that costs your team the most manual effort. You approve the design before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We review your current manual steps and pick the workflow with the clearest return.' },
      { title: 'Workflow Map', description: 'Triggers, steps, branches, approvals and error paths are agreed in writing.' },
      { title: 'Build', description: 'The workflow is built on the chosen platform, connected to your apps and data.' },
      { title: 'Test', description: 'Every branch and failure path is run with sample data before going live.' },
      { title: 'Staged Rollout', description: 'The workflow goes live gradually, with your team watching the first runs.' },
      { title: 'Handover', description: 'You receive the workflow, account access and documentation of how it works.' },
    ],
    note: 'Your written quote lists the workflows in scope, the platforms involved, deliverables, usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'See which workflow to automate first',
    heading: 'Let Your Apps Do the Hand-Offs',
    description:
      'Book a free, no-obligation workflow automation audit. We will look at the steps your team repeats between apps, recommend the right platform, and be honest about what is not worth automating.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Workflow Automation Software: Common Questions',
  faqSideText: 'Wondering whether one of your processes could run as a workflow? Book a free audit and we will map it with you.',
  faqs: [
    {
      question: 'What is AI workflow automation software?',
      answer:
        'It is software that runs a multi-step chain of tasks across your apps automatically, from a trigger to a result, with AI steps for reading, classifying or drafting where rules alone are not enough. Clickmasters builds it on platforms such as n8n, Make and Zapier.',
    },
    {
      question: 'How is it different from a simple app-to-app automation?',
      answer:
        'A simple automation does one thing when one event happens. A full workflow can include many steps, conditional branches, approval pauses, AI steps and error handling, so it can run a real piece of work from start to finish.',
    },
    {
      question: 'Is this a software product we subscribe to?',
      answer:
        'No. We design and build workflows on automation platforms and apps you own. You pay the platform and AI usage costs directly, and the workflows belong to you.',
    },
    {
      question: 'Which platform should we use: n8n, Make or Zapier?',
      answer:
        'Zapier suits simple, linear flows. Make suits complex branching logic. n8n suits high-volume, AI-heavy or data-sensitive work and can be self-hosted. We recommend one after looking at your workflow, volume and budget.',
    },
    {
      question: 'Can a workflow wait for a person to approve something?',
      answer:
        'Yes. Approval steps pause the workflow until the right person approves, rejects or edits the request. Reminders and escalation can be added if a request stalls.',
    },
    {
      question: 'What happens if an app is down or a step fails?',
      answer:
        'We build retries, fallback paths and alerts into each workflow. Temporary failures are retried, and anything that cannot finish is flagged to the owner with the details needed to fix it.',
    },
    {
      question: 'Do we need AI in every workflow?',
      answer:
        'No. Many steps are best handled by fixed rules. We add AI only where inputs vary, such as reading emails, classifying requests or drafting replies.',
    },
    {
      question: 'Can you improve the automations we already have?',
      answer:
        'Often, yes. We can review existing workflows, add missing branches and error handling, and document how they work. Whether to rebuild or extend them is decided during the audit.',
    },
    {
      question: 'Can our team change the workflows later?',
      answer:
        'Yes. Workflows are built in a modular way and documented, so your team or any capable builder can adjust them as your process changes.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your manual steps, agree the first workflow and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
