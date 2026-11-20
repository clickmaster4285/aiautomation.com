// content/products/general-ai-automation/enterprise-ai-automation-solutions.ts
// Copy + SEO for /products/general-ai-automation/enterprise-ai-automation-solutions.
//
// Accuracy rules for this page (keep them when editing):
// - Owns the primary keyword "enterprise AI automation": running automation as a governed program (portfolio
//   prioritization, governance controls, security review cooperation, phased rollout) across departments. Do not
//   target "enterprise workflow automation" (/products/ai-workflow-business-process-automation/...) or
//   "enterprise AI agents" (/products/ai-agents-platforms/...); link to them instead. Company-level strategy belongs
//   to /services/ai-strategy-advisory.
// - No certifications or compliance claims. Use the approved phrasing: formal compliance is a shared responsibility
//   that depends on your specific setup and is confirmed for your project.
// - SAP, NetSuite, Oracle and other connections are conditional on an API or integration, confirmed during discovery.
// - Automations run in the client’s cloud and accounts; the client owns the automations, accounts and documentation
//   and pays platform and AI usage costs directly. Use cases are examples, scoped per project.
// - No statistics, percentages, prices, testimonials, client names, uptime figures, SLAs or guarantees.
//
// Inline links use [anchor text](/path). This page contains EXACTLY SEVEN contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const ENTERPRISE_AI_AUTOMATION_SOLUTIONS_PATH = '/products/general-ai-automation/enterprise-ai-automation-solutions';

export const enterpriseAiAutomationSolutionsSeo: HubSeo = {
  name: 'Enterprise AI Automation Solutions',
  path: ENTERPRISE_AI_AUTOMATION_SOLUTIONS_PATH,
  title: 'Enterprise AI Automation with Governance | Clickmasters',
  description:
    'Enterprise AI automation run as a governed program: portfolio priorities, access, logging, approvals and phased rollout in your own cloud. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'General AI Automation', path: '/products/general-ai-automation' },
    { name: 'Enterprise AI Automation Solutions', path: ENTERPRISE_AI_AUTOMATION_SOLUTIONS_PATH },
  ],
};

export const enterpriseAiAutomationSolutionsKeywords = [
  'enterprise AI automation',
  'enterprise AI automation solutions',
  'AI automation at scale',
  'AI governance for automation',
  'enterprise intelligent automation',
  'automation center of excellence',
  'enterprise automation roadmap',
  'AI automation security review',
  'cross-department automation',
  'ERP AI automation',
  'enterprise automation partner',
  'automation portfolio management',
  'how to prioritize AI automation across departments',
  'change control for AI workflows',
  'running AI automation in your own cloud account',
  'phased rollout of enterprise automation',
];

// The seven contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI automation for business, from first workflow to company-wide', href: '/products/general-ai-automation', section: 'What Enterprise AI Automation Means (intro)' },
  { anchor: 'our AI strategy advisory service', href: '/services/ai-strategy-advisory', section: 'The Program View (explainer)' },
  { anchor: 'process-level optimization', href: '/products/general-ai-automation/ai-process-optimization', section: 'The Program View (explainer)' },
  { anchor: 'reporting automation for leadership', href: '/services/ai-reporting-automation', section: 'Governance Controls (features)' },
  { anchor: 'enterprise workflow automation', href: '/products/ai-workflow-business-process-automation/enterprise-workflow-automation', section: 'Enterprise Use Cases (extras)' },
  { anchor: 'enterprise AI agents', href: '/products/ai-agents-platforms/enterprise-ai-agents', section: 'Enterprise Use Cases (extras)' },
  { anchor: 'integration layer between AI and your systems', href: '/products/general-ai-automation/ai-integration-services', section: 'Technologies and Integrations (integrations)' },
] as const;

export const enterpriseAiAutomationSolutions: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'Enterprise AI Automation',
    heading: 'Enterprise AI Automation Solutions with Governance Built In',
    accentWords: 3,
    subheading:
      'In a large organization, building one automation is rarely the hard part. The hard part is deciding which of dozens of requests to fund, keeping every workflow secure and traceable, and rolling changes out without disrupting teams. We help you prioritize, govern and deliver automations across departments, in your own cloud and accounts.',
    primaryCta: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/business.jpg',
    imageAlt:
      'Illustration of business operations connected by automation, representing enterprise AI automation managed as a governed program across departments',
    imageWidth: 1200,
    imageHeight: 628,
    marquee: ['Portfolio prioritization', 'Access control', 'Audit logs', 'Approval workflows', 'Change control', 'Phased rollout'],
  },

  intro: {
    eyebrow: 'Program, Not Projects',
    heading: 'What Enterprise AI Automation Means',
    paragraphs: [
      'Enterprise AI automation is the coordinated use of workflow automation, AI models and system integrations across multiple departments, managed as a portfolio with shared governance. It covers how automations are chosen, built, secured, approved, logged and changed, not only what each individual workflow does.',
      'It treats that work as a program, not a string of one-off projects, with people approving the decisions that matter. For smaller-scale starting points, see our guide to [AI automation for business, from first workflow to company-wide](/products/general-ai-automation).',
      'Without that program view, automation tends to stall in large organizations for familiar reasons.',
    ],
    problems: [
      'Shadow automations multiply. Teams build their own workflows on different platforms, and nobody has a full list of what runs where.',
      'Security reviews arrive late. A promising pilot stops when IT or security sees it for the first time.',
      'Priorities are unclear. Requests come from every department, and the loudest one often wins.',
      'Change is risky. Updating a workflow that touches the ERP or customer data has no clear approval path.',
      'Knowledge sits with individuals. When the builder moves on, documentation is thin or missing.',
      'AI adds new questions. Leaders need to know where data goes, which model processes it and who reviews the output.',
    ],
  },

  explainer: {
    eyebrow: 'The Program View',
    heading: 'From Scattered Projects to a Managed Portfolio',
    paragraphs: [
      'We gather candidate processes from each department and assess them on business value, effort, risk, data sensitivity and dependencies. The result is a ranked backlog and a roadmap your leadership can approve.',
      'Company-level direction and operating model questions belong with [our AI strategy advisory service](/services/ai-strategy-advisory), while individual processes that need redesign first go through [process-level optimization](/products/general-ai-automation/ai-process-optimization) before they are automated.',
    ],
    points: [
      { title: 'Portfolio Prioritization', description: 'Candidate processes ranked on business value, effort, risk, data sensitivity and dependencies, into a roadmap leadership can approve.' },
      { title: 'Governance Controls', description: 'Shared rules for access, logging, approvals, change control, ownership and visibility across every automation.' },
      { title: 'Security Review Cooperation', description: 'Working within your security and procurement process rather than around it, with data flows documented.' },
      { title: 'Phased Rollout', description: 'Automations go live with a pilot group first, then expand once the owners are satisfied, with sign-off at each phase.' },
    ],
  },

  features: {
    eyebrow: 'Governance Controls',
    heading: 'Governance Controls for Every Automation',
    intro:
      'These controls are agreed during strategy and mapping and documented before workflows go live. Status and exception data can feed dashboards through [reporting automation for leadership](/services/ai-reporting-automation), so sponsors see what is running without asking for manual updates.',
    items: [
      { title: 'Access', description: 'Service accounts with least-privilege permissions, managed in your identity and access setup.' },
      { title: 'Logging', description: 'A record of each run, its inputs, AI outputs and actions taken.' },
      { title: 'Approvals', description: 'Defined points where a named role must approve before the workflow acts.' },
      { title: 'Change Control', description: 'Versioned workflows, documented changes and agreed sign-off before updates go live.' },
      { title: 'Ownership', description: 'Every automation has a named business owner and technical documentation.' },
      { title: 'Visibility', description: 'An inventory of automations and regular status updates for stakeholders.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Cross-Department Workflow Under Governance',
    intro:
      'Take a purchase request process that spans operations, finance and the ERP. The approval rules, logging fields and access permissions are agreed and documented before the workflow is built.',
    steps: [
      { title: 'Request', description: 'An employee submits a purchase request through a form or Microsoft Teams.' },
      { title: 'Enrichment', description: 'The workflow pulls supplier and budget data from the ERP and checks for an existing contract.' },
      { title: 'AI Review', description: 'An AI step reads the request and any attached quote, summarizes it and flags missing information or policy questions.' },
      { title: 'Approval', description: 'The summary goes to the budget holder in Teams. Requests above defined thresholds also route to finance. Each approver sees the original documents alongside the summary.' },
      { title: 'System Update', description: 'Once approved, the workflow creates the purchase record in the ERP through its API.' },
      { title: 'Logging', description: 'Every step, approval and AI output is logged, and the requester is notified.' },
      { title: 'Exceptions', description: 'Unclear or rejected requests return to a person with full context instead of being dropped.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Benefits of a Governed Program',
    intro: 'Governance is what lets automation grow across departments without losing control.',
    items: [
      { title: 'Clear Priorities', description: 'Effort goes to the processes that matter most to the business.' },
      { title: 'Fewer Surprises in Security Review', description: 'Documentation exists from the start.' },
      { title: 'Traceable Activity', description: 'Logs show what each automation did and who approved it.' },
      { title: 'Safer Changes', description: 'Through version control and agreed sign-off.' },
      { title: 'Lower Dependency on Individuals', description: 'Every workflow has an owner and documentation.' },
      { title: 'Steady Expansion', description: 'Phased rollouts build confidence across departments.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and People',
    heading: 'What AI Prepares and What Named Roles Approve',
    paragraphs: [
      'AI adds new questions for leadership: where data goes, which model processes it and who reviews the output. In a governed program, those answers are documented, and approval points are part of the mapping step rather than an afterthought.',
      'AI steps read, summarize and flag. Defined points require a named role to approve before the workflow acts, and unclear or rejected items return to a person with full context.',
    ],
    aiDoes: [
      'Reads requests and attached quotes',
      'Summarizes each request for approvers',
      'Flags missing information or policy questions',
      'Looks up records and drafts responses within defined permissions',
      'Prepares cases for internal teams',
    ],
    peopleDo: [
      'Approve requests at defined points',
      'Sign off changes before updates go live',
      'Own each automation as a named business owner',
      'Approve the roadmap and plan before anything is built',
    ],
  },

  spotlight: {
    eyebrow: 'Security Review',
    heading: 'Security Review Cooperation',
    paragraphs: [
      'We work within your security and procurement process rather than around it. That means documenting data flows, the systems and AI providers involved, where processing happens and how access is controlled, then answering your reviewers’ questions.',
      'We do not claim certifications. Formal compliance with any framework your organization follows is a shared responsibility that depends on your specific setup and is confirmed for your project.',
    ],
    points: [
      { title: 'Data Flows', description: 'Where data enters, moves and is stored across each workflow.' },
      { title: 'Systems and AI Providers', description: 'Every system and AI provider involved in the automation.' },
      { title: 'Processing Location', description: 'Where processing happens, including your own cloud and accounts.' },
      { title: 'Access Control', description: 'How service accounts and permissions are set up and managed.' },
      { title: 'Reviewer Questions', description: 'Answers to your security and procurement reviewers, as part of the process.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Use Cases',
      heading: 'Enterprise Use Cases',
      accentWords: 2,
      paragraphs: [
        'These are examples, scoped per project. Our page on [enterprise workflow automation](/products/ai-workflow-business-process-automation/enterprise-workflow-automation) covers multi-step approval workflows in more detail.',
        'For AI agents that look up records, draft responses and prepare cases within defined permissions, see our [enterprise AI agents](/products/ai-agents-platforms/enterprise-ai-agents) page.',
      ],
      points: [
        { title: 'Cross-Department Approvals', description: 'Purchasing, contracts, onboarding and access requests.' },
        { title: 'AI Agents for Internal Teams', description: 'Agents that look up records, draft responses and prepare cases within defined permissions.' },
        { title: 'ERP Data Entry and Validation', description: 'From emails, forms and documents.' },
        { title: 'Shared Service Center Triage', description: 'For HR, IT and finance requests.' },
        { title: 'Management Reporting', description: 'Figures assembled from several systems into one regular pack.' },
        { title: 'Knowledge Assistants', description: 'Answers to staff questions from internal documents, with sources shown.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Enterprise AI Automation Is For',
    items: [
      { title: 'Operations Leaders', description: 'Leaders fielding automation requests from every department and needing a way to rank them.' },
      { title: 'IT and Security Teams', description: 'Teams who need to see data flows, access and logging before a workflow goes live.' },
      { title: 'Transformation Leaders', description: 'People running AI automation as a program rather than a string of one-off projects.' },
      { title: 'Finance and Shared Services', description: 'Teams handling approvals and requests that span several departments and the ERP.' },
      { title: 'Executive Sponsors', description: 'Sponsors who want to see what is running without asking for manual updates.' },
      { title: 'Organizations With Shadow Automations', description: 'Companies where nobody has a full list of what runs where.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Technologies and Integrations',
    paragraphs: [
      'Enterprise programs typically involve ERPs, CRMs, communication and support platforms, databases and cloud hosting. Orchestration can run on n8n (including self-hosted), Make or custom code, and connections use REST APIs, webhooks and MCP connectors.',
      'Every system connection depends on the system offering an API or integration, confirmed during discovery. The [integration layer between AI and your systems](/products/general-ai-automation/ai-integration-services) is often the largest piece of enterprise work.',
    ],
    groups: [
      { label: 'ERPs', items: ['SAP', 'NetSuite', 'Oracle'] },
      { label: 'CRMs and Support', items: ['Salesforce', 'HubSpot', 'Zendesk'] },
      { label: 'Communication', items: ['Microsoft Teams', 'Outlook', 'Slack'] },
      { label: 'Orchestration and Agents', items: ['n8n (self-hosted)', 'Make', 'Custom code', 'LangChain', 'LlamaIndex'] },
      { label: 'AI Models', items: ['OpenAI', 'Anthropic', 'Google', 'Open-source models'] },
      { label: 'Data and Cloud', items: ['SQL databases', 'Cloud data platforms', 'AWS', 'Azure', 'GCP'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Enterprises Work With Clickmasters',
    intro: 'We work within your environment, standards and review processes, and we document everything we build.',
    items: [
      { title: 'Your Environment, Your Accounts', description: 'Automations run in your cloud and tools. You own the automations, accounts and documentation, and pay platform and AI usage costs directly.' },
      { title: 'Human Approval by Design', description: 'Approval points are part of the mapping step, and exceptions go to people with context.' },
      { title: 'Documentation as a Deliverable', description: 'Each workflow is documented for your IT, security and operations teams.' },
      { title: 'No Platform to Sell', description: 'As an agency, we recommend tools based on your standards and existing licenses.' },
      { title: 'An Honest Starting Point', description: 'The free audit identifies what is worth automating and what is not.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'Implementation Process',
    intro: 'Start with the processes already on your list. Your sponsors approve the plan before anything is built.',
    steps: [
      { title: 'Discovery', description: 'Stakeholder interviews, system inventory, candidate processes and constraints from IT and security.' },
      { title: 'Strategy and Mapping', description: 'Portfolio prioritization, then detailed mapping of triggers, decision points, actions, integrations and approval points for the first workflows.' },
      { title: 'Development', description: 'Builds in your environment, following your access and change policies.' },
      { title: 'Testing', description: 'Testing with realistic data, including edge cases, failure scenarios and permission checks, with your owners involved.' },
      { title: 'Deployment', description: 'Phased go-live with documentation and access handed over to your teams.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'Each rollout phase has its own sign-off, so a problem in one area does not hold up the whole program.',
  },

  cta: {
    bandHeading: 'Planning an enterprise program?',
    heading: 'Plan Your Enterprise Automation Program',
    description:
      'Start with the processes already on your list. Schedule a free audit and we will review your candidates and tools, suggest where to begin, and tell you plainly which processes are not worth automating yet.',
    primary: { text: 'Schedule a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Enterprise AI Automation: Common Questions',
  faqSideText: 'Planning an enterprise program? Book a free audit to review a set of candidate processes and get an honest view of which to start with.',
  faqs: [
    {
      question: 'How do enterprises scale AI automation?',
      answer:
        'Enterprises scale AI automation by managing it as a portfolio: ranking candidate processes, applying shared governance and rolling out in phases. Each automation gets a named owner, documentation and logging, so the program can grow without losing control.',
    },
    {
      question: 'How do you govern AI automations across departments?',
      answer:
        'We use agreed controls for access, logging, approvals and change control, plus an inventory of every automation and its owner. These rules are defined during strategy and mapping and documented before workflows go live.',
    },
    {
      question: 'How do you handle security reviews?',
      answer:
        'We cooperate with your security review by documenting data flows, systems, AI providers, processing locations and access controls, and by answering your reviewers’ questions. We do not claim certifications; formal compliance is a shared responsibility confirmed for your specific setup.',
    },
    {
      question: 'Can AI automation work with SAP or NetSuite?',
      answer:
        'It can where the system offers an API or integration that your environment allows us to use. What is available in your specific configuration is confirmed during discovery, before the plan is approved.',
    },
    {
      question: 'Where do the automations run?',
      answer:
        'They run in your cloud and accounts, such as AWS, Azure or GCP, or in the platforms you already license. You own the automations, accounts and documentation, and pay platform and AI usage costs directly.',
    },
    {
      question: 'Do you hold compliance certifications?',
      answer:
        'No, we do not claim certifications. We design with privacy and security in mind and work within your policies, and formal compliance depends on your specific setup and is confirmed for your project.',
    },
    {
      question: 'How do you decide which automations to build first?',
      answer:
        'We assess each candidate on business value, effort, risk, data sensitivity and dependencies, then agree a ranked roadmap with your sponsors. Processes that need redesign are improved before they are automated.',
    },
  ],
};
