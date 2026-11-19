// content/products/ai-workflow-business-process-automation.ts
// Copy + SEO for /products/ai-workflow-business-process-automation (category parent).
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities stated elsewhere on the site: AI workflow automation (service + solution pages),
//   business process automation, robotic process automation, data/document automation, AI agents,
//   and the n8n / Make / Zapier / Airtable platform pages.
// - Platforms named here are the ones named in those sources: n8n, Make, Zapier, Airtable, HubSpot,
//   Salesforce, GoHighLevel, OpenAI / Claude / Gemini (as the AI layer inside workflows), custom code / APIs.
// - Enterprise section talks about practices (access, audit trails, documentation, staged rollout,
//   ownership). Do NOT add certifications, compliance claims, SSO, uptime or scalability guarantees.
// - No statistics, percentages, prices, testimonials, customer names, guarantees or ongoing-support promises.
// - Clickmasters designs and builds automation inside the client’s existing tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.
// The five child pages are linked from the `related` grid, separately from those five.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_WORKFLOW_BPA_PATH = '/products/ai-workflow-business-process-automation';

export const aiWorkflowBpaSeo: HubSeo = {
  name: 'AI Workflow & Business Process Automation',
  path: AI_WORKFLOW_BPA_PATH,
  title: 'AI Workflow and Business Process Automation | Clickmasters',
  description:
    'AI workflow and business process automation built in your tools: connected apps, routed approvals, AI steps for messy inputs and human review where it counts.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Workflow & Business Process Automation', path: AI_WORKFLOW_BPA_PATH },
  ],
};

export const aiWorkflowBpaKeywords = [
  'AI workflow and business process automation',
  'AI workflow automation',
  'business process automation',
  'AI business process automation',
  'intelligent process automation',
  'workflow automation vs business process automation',
  'cross-department workflow automation',
  'repetitive task automation',
  'approval workflow automation',
  'intelligent process management',
  'enterprise workflow automation',
  'how to automate business processes',
];

// The five contextual internal links used in the copy below (all verified to resolve).
export const internalLinks = [
  { anchor: 'business process automation solutions', href: '/solutions/business-process-automation', section: 'What Is AI Workflow and Business Process Automation?' },
  { anchor: 'document automation', href: '/solutions/document-automation', section: 'Cross-Department Automation (spotlight)' },
  { anchor: 'robotic process automation', href: '/services/robotic-process-automation', section: 'Workflow Automation vs BPA vs Intelligent Process Automation (extras)' },
  { anchor: 'AI workflow automation solutions', href: '/solutions/ai-workflow-automation', section: 'Intelligent Process Management' },
  { anchor: 'n8n automation services', href: '/platforms/n8n-automation-services', section: 'Platforms and Systems We Connect' },
] as const;

export const aiWorkflowBpa: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'AI Workflow & Business Process Automation',
    heading: 'AI Workflow and Business Process Automation That Moves Work Without Manual Hand-Offs',
    accentWords: 4,
    subheading:
      'Clickmasters connects the tools your teams already use and turns the steps between them into automated workflows. Rules handle the predictable parts, AI handles the messy inputs, and people stay in charge of the decisions that carry real risk.',
    primaryCta: { text: 'Book a Free Process Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt: 'Illustration of connected business systems for AI workflow and business process automation',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Connected apps', 'Approval routing', 'AI triage and extraction', 'Cross-department processes', 'Exception handling', 'Human checkpoints'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is AI Workflow and Business Process Automation?',
    paragraphs: [
      'AI workflow and business process automation is the practice of handing the repeatable steps of your operations to software. A trigger, such as a form, an email, a signed agreement or a paid invoice, starts a sequence. Data moves between your systems, approvals go to the right person, and records update without anyone retyping them.',
      'The AI part matters when inputs are not tidy. A rule can copy a field from one app to another. It cannot read a customer email and tell whether it is a complaint, a refund request or a sales lead. AI steps can classify that message, pull out the key details and decide which path it should take, then pass it back to ordinary workflow logic.',
      'Workflow automation usually means one chain of steps. Business process automation covers a whole process from start to finish, often across several teams and systems. Our [business process automation solutions](/solutions/business-process-automation) page explains the process side in depth. This page shows how the pieces fit together and where each one belongs.',
    ],
    problems: [
      'The same customer details are typed into the CRM, the accounting tool and a spreadsheet.',
      'Requests wait in an inbox until the right approver happens to notice them.',
      'Work stalls when one person is on leave, because only they know the steps.',
      'Nobody can say where a request is stuck without asking around.',
      'Busy weeks mean skipped follow-ups and missed updates.',
    ],
  },

  explainer: {
    eyebrow: 'The Manual Workflow Problem',
    heading: 'Why Manual Processes Cost More Than They Appear To',
    paragraphs: [
      'Manual work rarely looks expensive in the moment. A minute copying an order number. Three minutes checking whether an approval came through. Ten minutes rebuilding the same weekly report. Spread across a team and a year, those fragments add up to a job nobody was hired to do.',
      'The bigger cost is leakage. A follow-up slips during a busy week. A figure is mistyped between two systems. An enquiry that arrives after hours sits until morning. Each slip creates rework, and some of it reaches customers. Manual processes also tie capacity to headcount: when volume doubles, the copy-and-paste work doubles with it.',
    ],
    points: [
      { title: 'Scattered Effort', description: 'Small manual steps are spread across many people, so the total time is never measured.' },
      { title: 'Silent Errors', description: 'Mistyped fields and skipped steps surface later as billing disputes, duplicate records or unhappy customers.' },
      { title: 'Hidden Bottlenecks', description: 'Approvals and hand-offs sit in inboxes, and there is no single view of what is waiting where.' },
      { title: 'Growth Needs Hiring', description: 'More orders, leads or tickets mean more people doing the same repetitive work.' },
    ],
  },

  features: {
    eyebrow: 'How AI Improves Processes',
    heading: 'What an Automated Business Process Can Do',
    intro:
      'Each capability is built inside the tools you already run and configured around your own rules. Most processes use a mix of them, with AI added only to the steps where fixed rules fall short.',
    items: [
      { title: 'Event Triggers', description: 'A new lead, signed contract, paid invoice, ticket or status change starts the right workflow straight away.' },
      { title: 'Scheduled Runs', description: 'Nightly syncs, Monday reports and month-end checks run on a timetable with nobody watching.' },
      { title: 'Cross-System Sync', description: 'CRM, ERP, accounting, helpdesk and spreadsheets stay consistent when a record changes in one of them.' },
      { title: 'Approval Routing', description: 'Requests go to the right approver, with reminders when they stall and a record of every decision.' },
      { title: 'AI Classification', description: 'Emails, forms and free-text requests are sorted by intent or type so they reach the right team.' },
      { title: 'Data Extraction', description: 'Key fields are pulled from invoices, contracts and forms, checked against your rules and passed on as structured data.' },
      { title: 'AI Drafting', description: 'First drafts of replies, summaries and status updates are written for a person to check and send.' },
      { title: 'Exception Handling', description: 'Unusual or uncertain cases are flagged to a person with full context instead of failing quietly.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an Automated Process Runs From Trigger to Result',
    intro:
      'Most automated processes follow the same shape, whether they handle orders, invoices, client onboarding or internal requests.',
    steps: [
      { title: 'Trigger', description: 'Something happens in one of your systems, or a scheduled time arrives, and the workflow starts.' },
      { title: 'Capture & Check', description: 'The incoming data is collected and validated against your rules, so missing or odd values are caught early.' },
      { title: 'Interpret', description: 'Where the input is unstructured, an AI step classifies it, extracts the details and suggests the next path.' },
      { title: 'Act Across Systems', description: 'Records are created or updated, tasks are assigned and the right people are notified.' },
      { title: 'Human Checkpoint', description: 'Approvals, sensitive actions and low-confidence cases wait for a person before the workflow continues.' },
      { title: 'Log & Report', description: 'Each run is logged, failures raise an alert, and the status of every item stays visible.' },
    ],
  },

  benefits: {
    eyebrow: 'Efficiency',
    heading: 'What Changes When Processes Run on Their Own',
    intro:
      'The gains come from removing the waiting and retyping between steps, not from asking people to work faster.',
    items: [
      { title: 'Fewer Manual Touchpoints', description: 'Data is entered once and reused everywhere it is needed.' },
      { title: 'Faster Cycle Times', description: 'Requests move to the next step the moment the previous one finishes.' },
      { title: 'Consistent Execution', description: 'Every run follows the same steps in the same order, whoever is on shift.' },
      { title: 'Room to Grow', description: 'Higher volume is absorbed by the workflow instead of by extra copy-and-paste work.' },
      { title: 'Clear Status', description: 'Teams can see what is done, what is waiting and what needs attention.' },
      { title: 'Better Use of People', description: 'Staff spend their time on customers, exceptions and decisions, not on moving data.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Intelligent Process Management',
    heading: 'Where AI Helps and Where People Stay in Charge',
    paragraphs: [
      'AI is good at reading. It can interpret an email, tell an invoice from a purchase order, summarize a long request and propose which path a case should follow. It is not a replacement for judgment on decisions that cost money or affect customers, so those stay with your team.',
      'In practice, the workflow provides structure, controls and an audit trail, and AI supplies understanding at the specific steps that need it. Our [AI workflow automation solutions](/solutions/ai-workflow-automation) page shows a worked example of this split for a shared inbox.',
    ],
    aiDoes: [
      'Classifies incoming emails, forms and requests',
      'Extracts fields from documents and messages',
      'Suggests which branch or approver applies',
      'Drafts replies, summaries and updates',
      'Flags cases it is unsure about',
      'Summarizes process activity for reports',
    ],
    peopleDo: [
      'Define the rules, thresholds and approval levels',
      'Approve sensitive or high-value actions',
      'Handle exceptions the workflow escalates',
      'Review results and decide what to change',
    ],
  },

  spotlight: {
    eyebrow: 'Cross-Department Automation',
    heading: 'One Process, Several Teams, No Re-Typing',
    paragraphs: [
      'The slowest part of most processes is the gap between departments. Take a purchase request. Someone in operations emails a manager, the manager replies with approval, finance enters the details into the accounting tool, and the requester chases everyone for an update. Four people, three systems and no shared status.',
      'Automated, the request starts from a form. The workflow checks the amount against your approval rules, sends it to the right manager, and creates the record in finance once it is approved. The requester gets an update at each stage. Where the process starts from a document, such as a supplier quote or a contract, [document automation](/solutions/document-automation) can capture the details so nobody types them in by hand.',
    ],
    points: [
      { title: 'Sales to Operations', description: 'A closed deal creates the project, assigns the kickoff tasks and notifies the delivery team.' },
      { title: 'Operations to Finance', description: 'Completed work or approved requests produce the matching invoice or accounting record.' },
      { title: 'HR to IT', description: 'A new starter’s details trigger account set-up and system updates before day one.' },
      { title: 'Support to the Right Team', description: 'Tickets are classified and routed to billing, product or account management with context attached.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Know the Difference',
      heading: 'Workflow Automation vs BPA vs Intelligent Process Automation',
      accentWords: 3,
      paragraphs: [
        'These terms overlap, and vendors use them loosely. The useful distinction is scope and judgment. Workflow automation connects apps and runs one chain of steps. Business process automation covers an entire process across teams. Intelligent process automation adds AI to the steps that need reading or interpretation, often alongside rule-based bots.',
        'Those bots are [robotic process automation](/services/robotic-process-automation): software that repeats rule-based screen work, such as data entry in older systems that have no modern integration. Most real projects blend several of these approaches. The skill is matching each step to the simplest method that does it reliably.',
      ],
      points: [
        { title: 'AI Workflow Automation', description: 'A trigger starts a chain of steps across connected apps, with AI steps for classification, extraction or drafting. Example: a web lead is scored, routed and logged in the CRM.' },
        { title: 'Business Process Automation', description: 'Several connected workflows cover one process end to end, such as client onboarding from signed agreement to first invoice, across sales, operations and finance.' },
        { title: 'Intelligent Process Automation', description: 'AI and rule-based bots work together on processes that involve unstructured documents or judgment calls, with uncertain cases sent to a person.' },
        { title: 'Task Automation', description: 'The smallest unit: one recurring task, such as a daily export or a status update, taken off someone’s to-do list.' },
        { title: 'Enterprise Workflow Automation', description: 'The same methods applied across many departments, with extra attention to access, documentation and controlled change.' },
      ],
    },
    {
      eyebrow: 'Repetitive Task Automation',
      heading: 'Start With the Tasks Everyone Repeats',
      accentWords: 3,
      paragraphs: [
        'Not every win needs a full process redesign. Many teams begin with a single repetitive task that eats time every day, then build outward once it works. A well-chosen first task proves the approach and creates the integrations the next workflow can reuse.',
        'Good candidates are high in volume, low in judgment and disliked by the people doing them. If a task follows the same steps every time and someone could write those steps down, it is usually worth a look.',
      ],
      points: [
        { title: 'Data Entry Between Apps', description: 'Copying details from forms, emails or spreadsheets into the CRM or accounting tool.' },
        { title: 'Notifications and Reminders', description: 'Telling the right person that something is ready, overdue or waiting for them.' },
        { title: 'Recurring Reports', description: 'Assembling the same weekly or monthly report from live data instead of exports.' },
        { title: 'Record Updates', description: 'Changing statuses, owners and fields when an event happens elsewhere.' },
      ],
    },
    {
      eyebrow: 'Enterprise Considerations',
      heading: 'What Larger Organizations Should Plan For',
      accentWords: 2,
      paragraphs: [
        'Automation at scale is as much about control as about speed. When workflows touch finance records, customer data or several departments, you need to know who can change them, what they did and how to roll back a change. We treat these as design questions from the start rather than afterthoughts.',
        'Every requirement is agreed during scoping and written into the plan, so there are no surprises when a workflow moves from one team to many.',
      ],
      points: [
        { title: 'Access and Permissions', description: 'Workflows use accounts and permissions you control, and only the right people can edit them.' },
        { title: 'Audit Trails', description: 'Runs, approvals and changes are logged so you can trace what happened to any item.' },
        { title: 'Documentation', description: 'Each workflow is documented with its triggers, logic, integrations and owners.' },
        { title: 'Staged Rollout', description: 'Processes go live in phases, with people watching the first runs before volume increases.' },
        { title: 'Change Management', description: 'Teams are told what changes in their day, and who to contact when an exception appears.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Business Processes Teams Automate First',
    items: [
      { title: 'Finance', description: 'Invoice capture and matching, purchase approvals, expense checks and recurring financial reports.' },
      { title: 'Operations', description: 'Order processing, fulfillment hand-offs, supplier communications and project set-up.' },
      { title: 'Sales', description: 'Lead intake, scoring and routing, CRM updates and follow-up tasks after every call.' },
      { title: 'Customer Support', description: 'Ticket triage, routing by intent, escalation of urgent cases and status updates to customers.' },
      { title: 'HR and Admin', description: 'Employee onboarding steps, internal requests and the account set-up that comes with a new starter.' },
      { title: 'Professional Services', description: 'Client intake, contract approvals, document review steps and internal reporting.' },
    ],
  },

  integrations: {
    eyebrow: 'Platforms',
    heading: 'Platforms and Systems We Connect',
    paragraphs: [
      'We are platform-agnostic. Zapier suits simple, linear flows. Make handles visual, multi-branch logic. n8n fits high-volume, AI-heavy or data-sensitive workflows and can be self-hosted. For technical builds, see our [n8n automation services](/platforms/n8n-automation-services).',
      'The AI layer can use models such as OpenAI, Claude or Gemini inside the workflow, and custom code or APIs fill the gaps where no connector exists. Which systems can be connected, and how, is confirmed in the audit rather than promised up front.',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'GoHighLevel'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Business Systems', items: ['ERP', 'Accounting', 'Helpdesk', 'Project management', 'Cloud storage'] },
      { label: 'Custom', items: ['APIs', 'Webhooks', 'Custom code', 'RPA bots'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Process Automation With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We map how work actually moves through your business, then build automation in the systems you already pay for.',
    items: [
      { title: 'Process First', description: 'We map the real steps, owners and exceptions before choosing any tool.' },
      { title: 'Platform-Honest', description: 'If a simple workflow solves the problem, we will not recommend a custom build.' },
      { title: 'Built for Exceptions', description: 'Workflows include retries, alerts and human checkpoints, not only the happy path.' },
      { title: 'AI Where It Helps', description: 'AI is added to steps that need reading or interpretation, not to every step by default.' },
      { title: 'Tested Before Launch', description: 'Each workflow is tested against real scenarios, including the awkward ones, before it goes live.' },
      { title: 'Yours to Keep', description: 'You own the workflows, the accounts they run in and the documentation behind them.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Automate Your First Process',
    intro:
      'We start with one process that costs your team the most time, prove it works, and expand from there. You approve the plan before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We review your current processes and pick the one with the clearest return.' },
      { title: 'Process Map', description: 'Triggers, steps, owners, approval rules and exceptions are written down and agreed.' },
      { title: 'Build', description: 'Workflows are built in your tools, with AI steps only where they are needed.' },
      { title: 'Test', description: 'Every path is run with sample data, including missing fields and failure cases.' },
      { title: 'Staged Rollout', description: 'The process goes live in phases, with your team overseeing the first runs.' },
      { title: 'Handover', description: 'You receive the workflows, account access and documentation, ready for your team to own.' },
    ],
    note: 'Your written quote covers the processes in scope, the platforms involved, deliverables, usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find the process worth automating first',
    heading: 'Stop Moving Work Between Systems by Hand',
    description:
      'Book a free, no-obligation process automation audit. We will look at how work moves through your teams today, show you where automation would save the most time, and be honest about what is not worth automating yet.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  related: {
    eyebrow: 'Workflow & Process Automation',
    heading: 'Five Ways to Automate How Work Moves',
    intro:
      'Pick the level that matches your problem, from a single recurring task to governed automation across departments.',
    items: [
      {
        title: 'AI Workflow Automation Software',
        description: 'Multi-step workflows across your apps with triggers, branching, approvals, error handling and monitoring.',
        href: '/products/ai-workflow-business-process-automation/ai-workflow-automation-software',
      },
      {
        title: 'Business Process Automation Software',
        description: 'Whole processes automated end to end, standardized across teams and visible from start to finish.',
        href: '/products/ai-workflow-business-process-automation/business-process-automation-software',
      },
      {
        title: 'AI Task Automation',
        description: 'Single recurring tasks taken off individual and team to-do lists, one quick win at a time.',
        href: '/products/ai-workflow-business-process-automation/ai-task-automation',
      },
      {
        title: 'Intelligent Process Automation',
        description: 'AI combined with rules and RPA bots for processes that need judgment, with people reviewing the hard cases.',
        href: '/products/ai-workflow-business-process-automation/intelligent-process-automation',
      },
      {
        title: 'Enterprise Workflow Automation',
        description: 'Automation across departments with clear access, audit trails, documentation and controlled rollout.',
        href: '/products/ai-workflow-business-process-automation/enterprise-workflow-automation',
      },
    ],
  },

  faqHeading: 'AI Workflow and Process Automation: Common Questions',
  faqSideText: 'Not sure which of your processes to automate first? Book a free audit and we will map it with you.',
  faqs: [
    {
      question: 'What is AI workflow and business process automation?',
      answer:
        'It is the use of software to run the repeatable steps of your operations, such as moving data, routing approvals and updating records, with AI handling the steps that involve reading or interpreting unstructured information. Clickmasters builds it inside the tools you already use.',
    },
    {
      question: 'What is the difference between workflow automation and business process automation?',
      answer:
        'The terms overlap. Workflow automation usually refers to one chain of steps between apps. Business process automation covers a complete process end to end, often joining several workflows, teams and systems.',
    },
    {
      question: 'Where does intelligent process automation fit?',
      answer:
        'Intelligent process automation combines AI with rule-based automation and RPA bots. It suits processes with unstructured inputs, such as documents and emails, where some steps need interpretation and uncertain cases need a person.',
    },
    {
      question: 'Which processes should we automate first?',
      answer:
        'Start with a process that is high in volume, follows repeatable steps and frustrates the people doing it. Common first choices are lead routing, invoice processing, client onboarding, approval requests and support ticket triage.',
    },
    {
      question: 'Will automation replace our staff?',
      answer:
        'It replaces the repetitive parts of the work, not the people. Teams use it to absorb volume and reduce manual errors, and spend their time on customers, exceptions and decisions.',
    },
    {
      question: 'Can automation connect our existing tools?',
      answer:
        'Usually, yes, where the tools offer integrations or APIs. We connect CRMs, ERPs, accounting software, helpdesks, project management tools and cloud storage. For older systems without integrations, RPA bots can sometimes fill the gap. We confirm what is possible during the audit.',
    },
    {
      question: 'What happens when a workflow hits an error or an unusual case?',
      answer:
        'We build in retries, alerts and fallback paths, so failures surface rather than break the chain silently. Unusual or low-confidence cases are routed to a person with the context they need.',
    },
    {
      question: 'Which platforms do you build on?',
      answer:
        'We choose between n8n, Make, Zapier and Airtable, or work inside CRMs such as HubSpot and Salesforce, depending on complexity, volume, budget and data needs. Custom code and APIs are used where no connector exists.',
    },
    {
      question: 'Do we own the workflows once they are built?',
      answer:
        'Yes. The workflows, the accounts they run in and the documentation are handed over to you, so you are not dependent on us to keep them running.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your processes, agree the first one to automate and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
