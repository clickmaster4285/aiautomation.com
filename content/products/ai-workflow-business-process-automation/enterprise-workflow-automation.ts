// content/products/ai-workflow-business-process-automation/enterprise-workflow-automation.ts
// Copy + SEO for /products/ai-workflow-business-process-automation/enterprise-workflow-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Focus: workflow automation for complex, cross-department processes: standardization, governance
//   (ownership, documentation, change control, audit trail where the platform supports it), access and
//   permissions as scoping considerations, staged rollout, scalability considerations.
// - NO certifications (SOC 2, ISO, HIPAA, GDPR compliance claims), no SSO claims, no uptime or
//   scalability guarantees. Governance items are practices we apply or considerations we address in scoping.
// - Platform facts: n8n can be self-hosted (content/Platforms/n8n-automation-service.ts); RPA bots work with
//   legacy systems and ERPs such as SAP, NetSuite, Oracle (content/services/robotic-process-automation.ts).
// - No statistics, prices, testimonials, guarantees or ongoing-support promises.
// - Clickmasters builds this inside the client’s existing tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const ENTERPRISE_WORKFLOW_AUTOMATION_PATH =
  '/products/ai-workflow-business-process-automation/enterprise-workflow-automation';

export const enterpriseWorkflowAutomationSeo: HubSeo = {
  name: 'Enterprise Workflow Automation',
  path: ENTERPRISE_WORKFLOW_AUTOMATION_PATH,
  title: 'Enterprise Workflow Automation Across Teams | Clickmasters',
  description:
    'Enterprise workflow automation for processes that cross departments, with clear owners, documented workflows, scoped access, change control and staged rollout.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Workflow & Business Process Automation', path: '/products/ai-workflow-business-process-automation' },
    { name: 'Enterprise Workflow Automation', path: ENTERPRISE_WORKFLOW_AUTOMATION_PATH },
  ],
};

export const enterpriseWorkflowAutomationKeywords = [
  'enterprise workflow automation',
  'cross-department workflow automation',
  'enterprise process automation',
  'workflow governance',
  'workflow standardization',
  'automation change control',
  'workflow audit trail',
  'workflow access permissions',
  'staged automation rollout',
  'scaling workflow automation',
  'enterprise automation documentation',
  'how to automate workflows across departments',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI workflow and business process automation', href: '/products/ai-workflow-business-process-automation', section: 'What Is Enterprise Workflow Automation?' },
  { anchor: 'business process automation software', href: '/products/ai-workflow-business-process-automation/business-process-automation-software', section: 'What We Build Into Enterprise Workflows (features intro)' },
  { anchor: 'intelligent process automation', href: '/products/ai-workflow-business-process-automation/intelligent-process-automation', section: 'Where AI Fits in an Enterprise Workflow' },
  { anchor: 'RPA bots', href: '/services/robotic-process-automation', section: 'Systems We Connect Across the Organization' },
  { anchor: 'self-hosted n8n', href: '/platforms/n8n-automation-services', section: 'Systems We Connect Across the Organization' },
] as const;

export const enterpriseWorkflowAutomation: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'Enterprise Workflow Automation',
    heading: 'Enterprise Workflow Automation That Holds Up Across Departments',
    accentWords: 3,
    subheading:
      'When a process passes through finance, operations, HR and IT, automating one team’s part is not enough. We design workflows that run the whole chain, with a named owner, written documentation, controlled changes and a rollout your teams can absorb.',
    primaryCta: { text: 'Book a Free Enterprise Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt: 'Illustration of enterprise workflow automation connecting systems and approvals across departments',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Cross-department processes', 'Standardized steps', 'Named process owners', 'Change control', 'Scoped access', 'Staged rollout'],
  },

  intro: {
    eyebrow: 'Automation at Organization Scale',
    heading: 'What Is Enterprise Workflow Automation?',
    paragraphs: [
      'Enterprise workflow automation is the design and running of automated workflows that span several departments, systems and approval levels. The technology is similar to smaller projects. The difference is the number of people affected, and the need to keep the workflows controlled as they grow.',
      'In larger organizations, one process often touches five systems and four teams. Each team has built its own workaround: a spreadsheet here, an email chain there, a small script nobody else understands. The result works, mostly. But nobody can see the full process, and a change in one team quietly breaks another.',
      'This page covers the organization-wide side of our [AI workflow and business process automation](/products/ai-workflow-business-process-automation) work: how we standardize, govern and roll out workflows that many teams depend on.',
    ],
    problems: [
      'The same process runs differently in each department or region.',
      'Automations exist, but nobody knows who owns them or how they work.',
      'A change to one system breaks a workflow another team relies on.',
      'Requests stall between teams because no one can see where they are.',
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What We Build Into Enterprise Workflows',
    intro:
      'These are the parts that let a workflow survive at organization scale. If you are automating one process end to end inside a single team, our [business process automation software](/products/ai-workflow-business-process-automation/business-process-automation-software) page is the better starting point.',
    items: [
      { title: 'Cross-Department Design', description: 'One workflow for the whole chain, with hand-offs between teams built in.' },
      { title: 'Standard Process Steps', description: 'A single agreed version of the process replaces local variations.' },
      { title: 'Approval Routing', description: 'Requests go to the right approver, with reminders and escalation when they stall.' },
      { title: 'Named Process Owners', description: 'Every workflow has a person accountable for how it behaves.' },
      { title: 'Written Documentation', description: 'Triggers, steps, rules, connections and owners are documented for your team.' },
      { title: 'Change Control', description: 'Changes are requested, tested and approved before they reach the live workflow.' },
      { title: 'Scoped Access', description: 'Each workflow connects only to the systems and data its job requires.' },
      { title: 'Error Handling', description: 'Retries, alerts and fallback paths keep one failed step from stopping the chain.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Purchase Request, Four Departments',
    intro:
      'A purchase request is a typical cross-department process. Here is how the automated version moves it from request to payment.',
    steps: [
      { title: 'Request', description: 'An employee submits a standard request form, and a record is created in the system of record.' },
      { title: 'Budget Approval', description: 'The workflow routes it to the budget owner, reminds them if it waits and escalates if they are away.' },
      { title: 'Procurement', description: 'Once approved, procurement receives the request with all details attached and raises the order.' },
      { title: 'Finance', description: 'The order and later the invoice are matched in the finance system, and mismatches go to a reviewer.' },
      { title: 'Status Updates', description: 'The requester and each team can see where the request is at every stage.' },
      { title: 'Record', description: 'Each approval and action is logged, giving a history of the request from start to finish.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes When Workflows Are Governed',
    intro:
      'The benefit is not only speed. It is a process that more people can trust, understand and change safely.',
    items: [
      { title: 'One Way of Working', description: 'Teams follow the same steps, so results are comparable across departments.' },
      { title: 'Visible Progress', description: 'Anyone involved can see where a request is and who holds it.' },
      { title: 'Fewer Stalled Hand-Offs', description: 'Reminders and escalation stop work from sitting in an inbox.' },
      { title: 'Safer Changes', description: 'Tested, approved changes reduce the risk of breaking another team’s work.' },
      { title: 'Easier Reviews', description: 'Logged actions make it simpler to answer questions about past decisions.' },
      { title: 'Less Key-Person Risk', description: 'Documentation means the workflow does not depend on one person’s memory.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI With Boundaries',
    heading: 'Where AI Fits in an Enterprise Workflow',
    paragraphs: [
      'Most of an enterprise workflow is rules: route this, notify that, update the record. AI earns a place at specific steps, such as reading an incoming document, classifying a request or summarizing a case for an approver. Each AI step is scoped, documented and placed before a human check where the outcome matters.',
      'When a process is full of documents and judgment calls, the AI layer becomes a larger part of the design. Our [intelligent process automation](/products/ai-workflow-business-process-automation/intelligent-process-automation) page explains how we combine AI, rules and RPA in that case.',
    ],
    aiDoes: [
      'Classifies incoming requests and messages',
      'Extracts data from documents and forms',
      'Summarizes cases for approvers',
      'Suggests the likely route or category',
      'Flags items it is not confident about',
    ],
    peopleDo: [
      'Own each workflow and its rules',
      'Approve spending, policy and customer decisions',
      'Approve changes before they go live',
      'Review exceptions and logs',
      'Decide when to extend automation to new teams',
    ],
  },

  spotlight: {
    eyebrow: 'Governance',
    heading: 'Ownership, Documentation and Change Control',
    paragraphs: [
      'Automation without governance tends to sprawl. Different teams build overlapping workflows, nobody retires the old ones, and a broken step is only noticed when a customer or auditor asks. We treat governance as part of the build, not paperwork added later.',
      'In practice that means four habits. Every workflow has an owner. Every workflow is documented in plain language. Changes follow an agreed request, test and approval path. And actions are logged, so there is a record of what ran and who approved what, to the extent your platforms support it.',
    ],
    points: [
      { title: 'Ownership', description: 'A named owner for each workflow and each exception type, recorded in the documentation.' },
      { title: 'Documentation', description: 'Triggers, steps, rules, connected systems and approval points written down and handed over.' },
      { title: 'Change Control', description: 'Proposed changes are tested before release, with an agreed way to restore the previous version.' },
      { title: 'Audit Trail', description: 'Run histories and approval records kept in the platform, where the platform supports it.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Access and Permissions',
      heading: 'Access and Permissions, Considered Before the Build',
      accentWords: 3,
      paragraphs: [
        'A workflow that connects many systems also holds many credentials. During scoping we look at which accounts each workflow uses, what each one can read and change, and who can edit the workflow itself. The aim is least access: each automation gets what its job needs and no more.',
        'Sensitive data needs extra thought. Some organizations prefer that workflows run in their own environment, and others need certain fields kept out of automation entirely. We record these decisions in the documentation, and your security or IT team signs off before go-live.',
      ],
      points: [
        { title: 'Service Accounts', description: 'Where your platforms allow, workflows run under accounts your IT team controls rather than personal logins.' },
        { title: 'Least Access', description: 'Connections are limited to the systems and fields each step requires.' },
        { title: 'Edit Rights', description: 'Who can change a workflow is agreed and limited to named people.' },
        { title: 'Sensitive Fields', description: 'Data that should stay out of automation is identified and excluded in the design.' },
      ],
    },
    {
      eyebrow: 'Rollout and Scale',
      heading: 'A Staged Rollout That Leaves Room to Grow',
      accentWords: 4,
      paragraphs: [
        'Large launches carry large risks. We start with one process, often in one department or region, and run it alongside close review before widening it. Each stage has a clear check before the next one begins.',
        'Scale is a design question, not a promise. We look at expected volumes, the limits of connected systems, which platform suits the load and how the workflow behaves when an upstream system is slow or down. Where growth is expected, we design so new teams can be added without rebuilding the core.',
      ],
      points: [
        { title: 'Pilot First', description: 'One process and one group of users before a wider launch.' },
        { title: 'Stage Gates', description: 'Each stage is reviewed with the process owner before the next begins.' },
        { title: 'Volume Planning', description: 'Expected volumes and system limits are reviewed during scoping.' },
        { title: 'Reusable Patterns', description: 'Shared steps are built once so later teams can adopt them consistently.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Cross-Department Processes We Automate',
    items: [
      { title: 'Purchase to Pay', description: 'Requests, budget approvals, orders, invoice matching and payment hand-offs between teams.' },
      { title: 'Employee Onboarding', description: 'HR, IT and the hiring manager coordinated, with account setup and system updates handled in sequence.' },
      { title: 'Order to Fulfillment', description: 'Orders validated, inventory updated, fulfillment triggered and exceptions flagged with context.' },
      { title: 'Data Sync Across Systems', description: 'CRM, ERP and finance records kept consistent without re-entry.' },
      { title: 'Cross-Team Reporting', description: 'Reports assembled from several systems on a schedule and sent to the right people.' },
      { title: 'Customer Requests', description: 'Requests that involve service, finance and operations routed and tracked to resolution.' },
    ],
  },

  integrations: {
    eyebrow: 'Systems',
    heading: 'Systems We Connect Across the Organization',
    paragraphs: [
      'Enterprise workflows rarely live in one tool. We connect CRMs such as Salesforce and HubSpot, ERPs such as SAP, NetSuite and Oracle, and the other cloud applications your teams use. Where older software has no usable API, [RPA bots](/services/robotic-process-automation) can work through its interface so it can stay in place.',
      'The orchestration layer depends on your requirements. Make and Zapier suit many workflows. When data must stay inside your own infrastructure, [self-hosted n8n](/platforms/n8n-automation-services) is often the better fit. Which systems can be connected, and how, is confirmed during the audit.',
    ],
    groups: [
      { label: 'Orchestration', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
      { label: 'CRM', items: ['Salesforce', 'HubSpot'] },
      { label: 'ERP and Finance', items: ['SAP', 'NetSuite', 'Oracle'] },
      { label: 'Older Systems', items: ['Legacy software via RPA', 'Cloud and on-premise systems'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Organizations Work With Clickmasters on Enterprise Automation',
    intro:
      'Clickmasters is an AI automation agency. We design and build workflows inside the systems your organization already runs, and hand them over in a state your teams can manage.',
    items: [
      { title: 'Process Mapping First', description: 'We map the whole chain across teams before automating any part of it.' },
      { title: 'Governance in the Build', description: 'Owners, documentation and change paths are part of the deliverable.' },
      { title: 'Vendor-Neutral Choices', description: 'Platforms are chosen for fit with your systems and data needs.' },
      { title: 'Designed for Exceptions', description: 'Unusual cases have an owner and a route, not a silent failure.' },
      { title: 'Plain Explanations', description: 'Decisions are explained so business and IT teams both understand them.' },
      { title: 'Full Handover', description: 'You own the workflows, the accounts and the documentation.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Start an Enterprise Workflow Automation Project',
    intro:
      'We begin with one cross-department process and the people who own it. Nothing is built until the design, owners and access plan are approved.',
    steps: [
      { title: 'Free Audit', description: 'We review the process, the teams and systems involved, and where work stalls.' },
      { title: 'Process and Access Map', description: 'Steps, hand-offs, owners, approvals and system access are agreed in writing.' },
      { title: 'Build', description: 'Workflows are built in your platforms, with documentation written alongside.' },
      { title: 'Test', description: 'Normal cases, exceptions and failure scenarios are tested before go-live.' },
      { title: 'Staged Rollout', description: 'A pilot group goes first, then the workflow widens stage by stage.' },
      { title: 'Handover', description: 'Workflows, accounts and documentation pass to your named owners.' },
    ],
    note: 'Your written quote sets out the processes in scope, the platforms involved, deliverables, expected usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'Map one cross-department process with us',
    heading: 'Automate the Processes That Cross Team Lines',
    description:
      'Book a free, no-obligation audit. We will trace one process across your departments, show where automation and governance would help, and say plainly where they would not.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Enterprise Workflow Automation: Common Questions',
  faqSideText: 'Have a process that stalls between teams? Book a free audit and we will map it with the people who run it.',
  faqs: [
    {
      question: 'What is enterprise workflow automation?',
      answer:
        'Enterprise workflow automation means automating processes that span several departments, systems and approval levels, and governing those workflows with owners, documentation and change control so they stay reliable as they grow.',
    },
    {
      question: 'How is it different from regular workflow automation?',
      answer:
        'The building blocks are similar. The difference is scale and control: more teams, more systems and more people affected by a change, so ownership, access and rollout need to be planned from the start.',
    },
    {
      question: 'Do you replace our existing systems?',
      answer:
        'No. We build inside the systems and platforms you already run, such as your CRM and ERP, and connect them. Older software can often stay in place with RPA doing the updates.',
    },
    {
      question: 'How do you handle governance?',
      answer:
        'Each workflow gets a named owner and written documentation. Changes follow an agreed test and approval path, and actions are logged in the platform where it supports run histories.',
    },
    {
      question: 'Is there an audit trail?',
      answer:
        'Most automation platforms keep run histories, and we design workflows to record approvals and key actions. How much is kept, and for how long, depends on the platform and is agreed during scoping.',
    },
    {
      question: 'How do you manage access and permissions?',
      answer:
        'We review which accounts each workflow uses and what they can reach, aim for the least access each job needs, and limit who can edit workflows. Your IT or security team approves the plan.',
    },
    {
      question: 'Are you certified for SOC 2, ISO or similar standards?',
      answer:
        'We do not claim certifications. Workflows run inside your own platforms and accounts, and we document what data each one touches so your security and compliance teams can review it against your own requirements.',
    },
    {
      question: 'Can the workflows scale as more teams join?',
      answer:
        'We plan for it but do not guarantee specific volumes. We review expected load and system limits in scoping, choose a platform that fits, and build shared steps that new teams can reuse.',
    },
    {
      question: 'Why roll out in stages?',
      answer:
        'A pilot shows how the workflow behaves with real users and data before many teams depend on it. Problems found early are cheaper to fix and affect fewer people.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We trace one cross-department process, agree owners and access, and send a written quote with scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
