// content/products/ai-agents-platforms/enterprise-ai-agents.ts
// Copy + SEO for /products/ai-agents-platforms/enterprise-ai-agents.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is running agents at organization scale: governance (named ownership, role-based access, action
//   logs, approvals), integration with SAP / NetSuite / Oracle / Salesforce / Microsoft Teams and the other
//   systems named on the site, cloud deployment on AWS / Azure / GCP in the client’s environment, and staged
//   rollout across departments. Autonomy levels belong to the Autonomous AI Agents sibling; specialist-agent
//   architectures to Multi-Agent Systems; the build service to AI Agent Development.
// - Governance and security controls are PRACTICES AGREED IN SCOPING with the client’s IT, security and
//   process owners. Never claim certifications or compliance (SOC 2, ISO, HIPAA, GDPR, "compliance-ready"),
//   uptime, SLAs or guaranteed accuracy.
// - Agents are "not a fully autonomous system that runs your business unsupervised": important or sensitive
//   actions wait for human approval; escalation with full context; narrow scope; monitoring and iteration
//   after launch, scoped in the quote.
// - Worked example is illustrative of a typical rollout, not a delivered case. No statistics, percentages,
//   time-saved figures, prices, testimonials or customer names.
// - Clickmasters is an agency that builds in the client’s environment — not a licensable enterprise platform.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const ENTERPRISE_AI_AGENTS_PATH = '/products/ai-agents-platforms/enterprise-ai-agents';

export const enterpriseAiAgentsSeo: HubSeo = {
  name: 'Enterprise AI Agents',
  path: ENTERPRISE_AI_AGENTS_PATH,
  title: 'Enterprise AI Agents With Governance Built In | Clickmasters',
  description:
    'Enterprise AI agents built in your cloud and connected to SAP, NetSuite, Oracle or Salesforce, with named owners, role-based access, logs and approvals.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Agents & Platforms', path: '/products/ai-agents-platforms' },
    { name: 'Enterprise AI Agents', path: ENTERPRISE_AI_AGENTS_PATH },
  ],
};

export const enterpriseAiAgentsKeywords = [
  'enterprise AI agents',
  'enterprise agent orchestration',
  'AI agents for enterprises',
  'enterprise AI automation',
  'governed AI agents',
  'AI agent governance',
  'role-based access for AI agents',
  'AI agents for SAP and NetSuite',
  'AI agents in Microsoft Teams',
  'deploy AI agents on AWS Azure or GCP',
  'enterprise AI agent development',
  'how to roll out AI agents across departments',
  'how do you govern AI agents in an enterprise',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'business AI agents', href: '/products/ai-agents-platforms', section: 'What Are Enterprise AI Agents?' },
  { anchor: 'enterprise workflow automation', href: '/products/ai-workflow-business-process-automation/enterprise-workflow-automation', section: 'Enterprise Agents vs Enterprise Workflow Automation vs Multi-Agent Designs (extras)' },
  { anchor: 'coordinated multi-agent designs', href: '/products/ai-agents-platforms/multi-agent-systems', section: 'Enterprise Agents vs Enterprise Workflow Automation vs Multi-Agent Designs (extras)' },
  { anchor: 'RPA bots for systems without an API', href: '/services/robotic-process-automation', section: 'Enterprise Systems Your Agents Can Work With' },
  { anchor: 'our AI agent development process', href: '/products/ai-agents-platforms/ai-agent-development', section: 'How We Introduce AI Agents Into Your Organization' },
] as const;

export const enterpriseAiAgents: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'Enterprise AI Agents',
    heading: 'Enterprise AI Agents Your IT, Security and Process Owners Can Sign Off',
    accentWords: 3,
    subheading:
      'We build AI agents that work inside your ERP, CRM and collaboration tools, run in your own cloud environment and follow governance agreed with your teams before the build: a named owner for every agent, role-based access, logged actions and human approval for anything important. Rollout happens one department at a time.',
    primaryCta: { text: 'Book a Free Enterprise AI Agent Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of a multi-step automated workflow across connected enterprise apps with AI steps, representing governed AI agents working across ERP, CRM and collaboration systems',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Named agent owners', 'Role-based access', 'Action logs', 'Approval gates', 'Your cloud environment', 'Staged rollout'],
  },

  intro: {
    eyebrow: 'Agents at Organization Scale',
    heading: 'What Are Enterprise AI Agents?',
    paragraphs: [
      'Enterprise AI agents are AI agents built to work inside a large organization’s systems and rules. Like any agent, they read requests, look up information, choose the next step within defined guardrails and complete multi-step tasks. What makes them enterprise agents is everything around that: who owns each one, what it is allowed to access, how its actions are recorded and approved, and how it fits alongside the ERP, CRM and collaboration tools thousands of people already use.',
      'In practice, the hard questions in an enterprise are rarely about the model. They are about whether the procurement agent can see supplier bank details, who signs off when the finance agent proposes a write-off, where the logs live and what happens when the agent owner changes role. We treat those questions as part of the build, agreed in scoping with your IT, security and process owners.',
      'This page covers the enterprise side of our [business AI agents](/products/ai-agents-platforms) work. It is written for leaders who need to introduce agents responsibly across departments, not just run a pilot in one team.',
    ],
    problems: [
      'AI pilots run in one team’s sandbox and never make it past security review.',
      'Nobody can say who owns an agent, what it can access or who answers for its actions.',
      'Agents that cannot reach SAP, NetSuite, Oracle or Salesforce end up producing summaries nobody can act on.',
      'Different departments are buying separate AI tools with different rules and no shared oversight.',
      'Leadership wants progress on agents but will not accept a system that acts without approvals or records.',
    ],
  },

  explainer: {
    eyebrow: 'Governance',
    heading: 'Governance for Enterprise AI Agents, Agreed Before the Build',
    paragraphs: [
      'Governed AI agents start with written answers to a few plain questions. We work through them with your stakeholders during discovery and design, and the answers become part of the agent’s specification rather than a policy document filed elsewhere.',
      'We do not hand you a certification or a compliance badge. What we do is design each agent to meet the security and governance requirements your organization sets, and document how it does so, so your own reviewers can check it.',
    ],
    points: [
      { title: 'Named Ownership', description: 'Every agent has a business owner responsible for its scope and outcomes, and a technical owner for its configuration.' },
      { title: 'Role-Based Access', description: 'The agent reaches only the systems, records and actions its job needs, using permissions your IT team controls.' },
      { title: 'Action Logs', description: 'Each request, decision and action is recorded so it can be reviewed, explained and audited by your own teams.' },
      { title: 'Approval Rules', description: 'Actions above agreed values, outside agreed categories or visible to customers wait for a named approver.' },
      { title: 'Escalation Paths', description: 'When the agent cannot proceed, a defined person receives what it tried, what it found and where it got stuck.' },
      { title: 'Change Control', description: 'Changes to an agent’s scope, prompts, tools or limits follow a review route agreed with the owners.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our Enterprise AI Agents Handle',
    intro:
      'Each enterprise agent is designed around one process, the systems it touches and the controls your organization requires. These are the capabilities we combine.',
    items: [
      { title: 'ERP-Connected Tasks', description: 'Agents read and, where permitted, update records in SAP, NetSuite or Oracle through the APIs those systems provide.' },
      { title: 'CRM Operations', description: 'Lead research and qualification, account updates and sales research prepared in Salesforce, HubSpot or Zoho.' },
      { title: 'Back-Office Work', description: 'Invoice exceptions, reconciliation queries and record updates investigated and prepared for finance to approve.' },
      { title: 'Support Triage', description: 'Tickets investigated, categorized, drafted and routed in your helpdesk, with a person approving replies where agreed.' },
      { title: 'Approvals in Teams or Slack', description: 'Approvers see the proposed action and its evidence in Microsoft Teams, Slack or email and decide there.' },
      { title: 'Answers From Internal Knowledge', description: 'Agents retrieve policies, procedures and records from your own documents and cite their sources.' },
      { title: 'Client and Employee Onboarding', description: 'Multi-step onboarding tasks coordinated across systems, with document checks and hand-offs to the right teams.' },
      { title: 'Department-Level Access', description: 'Role-based access keeps each agent, and each user of it, within the boundaries of their department.' },
      { title: 'Monitoring and Logs', description: 'Agent activity is logged and monitored after launch, so issues are spotted and the agent is improved.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an Enterprise Agent Handles One Finance Exception',
    intro:
      'An illustrative example: an agent that prepares supplier invoice exceptions for an accounts payable team working in NetSuite, with approvals in Microsoft Teams. The governance around each step was agreed in scoping.',
    steps: [
      { title: 'Pick Up', description: 'An invoice that failed purchase order matching lands in the exception queue the agent is permitted to read.' },
      { title: 'Investigate', description: 'Using read-only NetSuite access, the agent pulls the purchase order, receipt records and the supplier’s recent invoice history.' },
      { title: 'Explain', description: 'It identifies the likely cause, such as a price change on two lines, and checks the supplier agreement held in your document store.' },
      { title: 'Propose', description: 'It prepares a proposed resolution with the evidence attached. It has no permission to post or approve the invoice itself.' },
      { title: 'Approve', description: 'The AP lead receives the proposal in Microsoft Teams and approves, edits or rejects it. Her decision is recorded with the agent’s reasoning.' },
      { title: 'Log and Report', description: 'Every look-up, proposal and decision is written to the action log, and the owner sees weekly exception patterns.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Governed Agents Give an Enterprise',
    intro:
      'The goal is agents that can move past the pilot stage because the people responsible for risk, systems and operations have agreed how they work.',
    items: [
      { title: 'A Route Past Security Review', description: 'Access, logging and deployment are designed with your reviewers, not presented to them at the end.' },
      { title: 'Clear Accountability', description: 'Every agent has an owner, so questions about its behavior have someone to answer them.' },
      { title: 'Work Done in Core Systems', description: 'Agents act in your ERP and CRM where permitted, rather than producing notes someone has to retype.' },
      { title: 'Consistent Oversight', description: 'Shared governance practices apply across departments instead of a different approach per tool.' },
      { title: 'Reviewable Decisions', description: 'Action logs show what each agent did and who approved it.' },
      { title: 'Measured Expansion', description: 'Staged rollout lets each department adopt agents once the previous stage is stable.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Agents Plus People',
    heading: 'Where Enterprise Agents Act and Where People Decide',
    paragraphs: [
      'In an enterprise, the line between agent work and human work is drawn by consequence and by policy. Agents handle the investigation and preparation that slows teams down: finding the right records across systems, comparing them, reading the supporting documents and drafting the proposed action. People keep the decisions that commit the organization, such as approving payments, changing customer terms or granting access.',
      'Those boundaries are written into each agent’s access rights and approval rules, so they hold even if an instruction is misread. An agent that has only read access to a finance system cannot post a journal, however a request is phrased.',
    ],
    aiDoes: [
      'Investigates requests across ERP and CRM records',
      'Reads supporting documents and policies',
      'Prepares proposed actions with evidence',
      'Updates records where it has permission',
      'Routes approvals to the right person',
      'Logs every step for later review',
    ],
    peopleDo: [
      'Own each agent and its scope',
      'Approve important and sensitive actions',
      'Set access rights and security requirements',
      'Decide when an agent expands to a new team',
    ],
  },

  spotlight: {
    eyebrow: 'Staged Rollout',
    heading: 'Rolling Out Enterprise AI Agents One Department at a Time',
    paragraphs: [
      'Large organizations rarely benefit from launching agents everywhere at once. A staged rollout begins with one process in one department, chosen because the value is clear and the risk is manageable. That first agent sets the patterns for ownership, access, logging and approvals that later agents reuse.',
      'Each new stage builds on what came before. Connections to SAP, Salesforce or Teams made for the first agent are reused, governance practices are refined, and the next department starts with a proven approach rather than a blank page.',
    ],
    points: [
      { title: 'Stage One: One Process', description: 'A single agent in one department, with conservative limits and close review of its decisions.' },
      { title: 'Stage Two: Adjacent Work', description: 'Related processes in the same department, reusing its connections and approval routes.' },
      { title: 'Stage Three: New Departments', description: 'Agents for other teams, each with its own owner and access, under the same governance practices.' },
      { title: 'Ongoing: Review and Refine', description: 'Logs and escalations are reviewed, and limits are adjusted as each agent earns trust.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Security Requirements',
      heading: 'Security and Deployment Requirements We Agree in Scoping',
      accentWords: 2,
      paragraphs: [
        'Every enterprise has its own security requirements, and we do not assume ours are the same as yours. During scoping we sit down with your IT and security teams and agree how each agent will be deployed, what it can reach and how its activity will be recorded. Those decisions are written into the specification and the quote.',
        'Agents are deployed in your environment on AWS, Azure or GCP, so the data they handle stays within infrastructure you control. Models are chosen per task, including GPT, Claude, Gemini or open-source options where your policies call for them.',
      ],
      points: [
        { title: 'Deployment Location', description: 'Which cloud account, region and environment the agent runs in, under your organization’s control.' },
        { title: 'Data Access', description: 'Which systems, records and fields each agent may read or write, and which are off limits.' },
        { title: 'Model Choice', description: 'Which models may process which data, chosen with your policies on external services in mind.' },
        { title: 'Logging and Retention', description: 'What is logged, where the logs are kept and who in your organization can review them.' },
        { title: 'User Access', description: 'Which roles can use, approve, configure or change each agent.' },
      ],
    },
    {
      eyebrow: 'Where This Fits',
      heading: 'Enterprise Agents vs Enterprise Workflow Automation vs Multi-Agent Designs',
      accentWords: 3,
      paragraphs: [
        'Not every enterprise process needs an agent. Where the steps are known and the inputs are structured, such as a cross-department approval chain or a scheduled data sync, [enterprise workflow automation](/products/ai-workflow-business-process-automation/enterprise-workflow-automation) is more predictable and easier to govern. Agents are the right tool when requests are unstructured and the next step depends on what is found.',
        'Some enterprise processes are broad enough to need several specialist agents working together. Those [coordinated multi-agent designs](/products/ai-agents-platforms/multi-agent-systems) are scoped per project, and they sit under the same governance as any single agent: owners, access rights, logs and approvals.',
      ],
      points: [
        { title: 'Choose Workflow Automation When', description: 'The process follows fixed steps across systems and mainly needs routing, approvals and reliable data movement.' },
        { title: 'Choose an Enterprise Agent When', description: 'Requests vary, information must be gathered from several systems and a proposed action needs preparing.' },
        { title: 'Consider Multiple Agents When', description: 'One process contains distinct specialist jobs or needs an independent reviewer before a person decides.' },
        { title: 'Same Governance Throughout', description: 'Whichever approach is used, ownership, access, logging and approvals are agreed the same way.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Enterprise AI Agents Are For',
    items: [
      { title: 'CIOs and CTOs', description: 'Technology leaders who need agents that fit their architecture, identity model and security requirements.' },
      { title: 'Heads of Operations', description: 'Leaders looking to take investigation and preparation work off teams across several departments.' },
      { title: 'Finance and Shared Services', description: 'Teams handling exceptions, reconciliation queries and record updates across ERP systems.' },
      { title: 'Sales and Service Leaders', description: 'Leaders who want research, qualification and triage done inside Salesforce, HubSpot or the helpdesk.' },
      { title: 'Risk and Security Teams', description: 'Reviewers who need to see access, logging and approval design before any agent goes live.' },
      { title: 'Organizations Past the Pilot', description: 'Companies with a promising AI pilot that now needs ownership, integration and a rollout plan.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Enterprise Systems Your Agents Can Work With',
    paragraphs: [
      'Enterprise agents are connected to ERPs such as SAP, NetSuite and Oracle, CRMs such as Salesforce, HubSpot and Zoho, internal APIs and databases, helpdesks, cloud storage, email, Slack and Microsoft Teams, where those systems offer APIs. Connections use REST APIs, webhooks and MCP connectors, each with only the permissions the agent’s role requires.',
      'Where an older system has no API, we can sometimes use [RPA bots for systems without an API](/services/robotic-process-automation) to reach it, assessed case by case. What can be connected in your landscape, and how, is confirmed during discovery with your IT team.',
    ],
    groups: [
      { label: 'ERPs', items: ['SAP', 'NetSuite', 'Oracle'] },
      { label: 'CRMs', items: ['Salesforce', 'HubSpot', 'Zoho'] },
      { label: 'Collaboration', items: ['Microsoft Teams', 'Slack', 'Email', 'Helpdesks'] },
      { label: 'Cloud Deployment', items: ['AWS', 'Azure', 'GCP'] },
      { label: 'AI Models', items: ['GPT (OpenAI)', 'Claude', 'Gemini', 'Open-source models'] },
      { label: 'Connections', items: ['REST APIs', 'Webhooks', 'MCP connectors', 'Internal databases', 'Cloud storage'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Enterprise AI Agents With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We build custom agents in your environment, designed around your systems and the controls your organization sets.',
    items: [
      { title: 'Governance in the Specification', description: 'Ownership, access, logging and approvals are designed and documented before development starts.' },
      { title: 'Built in Your Cloud', description: 'Agents are deployed on your AWS, Azure or GCP environment, not a third-party platform you rent.' },
      { title: 'Honest About Claims', description: 'We do not offer certifications. We meet the requirements you set and document how.' },
      { title: 'Connected to Core Systems', description: 'Agents work in your ERP, CRM and collaboration tools where APIs allow, not in a separate silo.' },
      { title: 'Model-Agnostic', description: 'Models are chosen per task and cost, and can be changed as your policies or options change.' },
      { title: 'You Own Everything', description: 'Agents, configuration and documentation are yours. You pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Introduce AI Agents Into Your Organization',
    intro:
      'We begin with one process, one department and the stakeholders who need to approve it. The stages below follow [our AI agent development process](/products/ai-agents-platforms/ai-agent-development), with governance agreed at each step.',
    steps: [
      { title: 'Free Audit', description: 'We review candidate processes, the systems involved and the stakeholders who will need to sign off.' },
      { title: 'Discovery and Governance', description: 'Owners, access rights, approval rules, logging and deployment requirements are agreed with IT and security.' },
      { title: 'Design and Prototype', description: 'The workflow and architecture are designed, and a working proof of concept runs on representative data.' },
      { title: 'Develop and Integrate', description: 'The agent is built and connected to your ERP, CRM and collaboration tools with scoped permissions.' },
      { title: 'Test and Deploy', description: 'The agent is tested, including failure and out-of-scope cases, then deployed in your cloud environment.' },
      { title: 'Monitor and Expand', description: 'Activity is monitored and improved after launch, and the next department is planned once the first is stable.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline, including the governance practices agreed for each agent.',
  },

  cta: {
    bandHeading: 'Move your AI agents past the pilot',
    heading: 'Introduce AI Agents With the Controls Your Organization Expects',
    description:
      'Book a free, no-obligation enterprise AI agent audit. We will review your candidate processes and systems, outline the governance each agent would need, and suggest where a first rollout makes sense.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Enterprise AI Agents: Common Questions',
  faqSideText: 'Need agents that will pass your own security and process reviews? Book a free audit and bring the people who will sign them off.',
  faqs: [
    {
      question: 'What are enterprise AI agents?',
      answer:
        'Enterprise AI agents are AI agents built to work inside a large organization’s systems and rules. They complete multi-step tasks across ERPs, CRMs and collaboration tools, with named owners, role-based access, action logs and human approval for important actions.',
    },
    {
      question: 'How do you govern AI agents in an enterprise?',
      answer:
        'We agree governance with your stakeholders before the build: who owns each agent, what it may access, which actions need approval, what is logged and how changes are reviewed. These practices are written into the agent’s specification and documentation.',
    },
    {
      question: 'Are your enterprise AI agents certified for SOC 2, HIPAA or GDPR?',
      answer:
        'We do not claim certifications or compliance for the agents we build. We design each agent to meet the security and governance requirements your organization sets, agreed in scoping, and document how it does so for your own reviewers.',
    },
    {
      question: 'Can enterprise agents work with SAP, NetSuite, Oracle and Salesforce?',
      answer:
        'Yes, where those systems offer APIs for the data and actions involved. Each agent receives only the permissions its role needs, and what can be connected in your landscape is confirmed during discovery.',
    },
    {
      question: 'Where are the agents deployed?',
      answer:
        'In your own environment on AWS, Azure or GCP, so the data they handle stays within infrastructure your organization controls. The deployment details are agreed with your IT team.',
    },
    {
      question: 'Can approvals happen in Microsoft Teams?',
      answer:
        'Yes. Approvers can receive the proposed action with its evidence in Microsoft Teams, Slack or email and approve, edit or reject it there. Each decision is recorded with the agent’s action log.',
    },
    {
      question: 'Will enterprise agents act without human approval?',
      answer:
        'Only on low-risk actions you explicitly allow, and those are logged. Important or sensitive actions wait for a named approver. Our agents are not systems that run your business unsupervised.',
    },
    {
      question: 'How do you roll out agents across several departments?',
      answer:
        'One process at a time. The first agent establishes connections and governance practices, which later agents reuse. Each new department gets its own owners and access rights under the same approach.',
    },
    {
      question: 'Which AI models do enterprise agents use?',
      answer:
        'We are model-agnostic and choose GPT, Claude, Gemini or open-source models per task, based on capability, cost and your policies on which models may process which data.',
    },
    {
      question: 'What is enterprise agent orchestration?',
      answer:
        'It is the coordination of several agents and the workflows around them, so that each works within its scope and hands off cleanly to people or other agents. Where a process needs coordinated agents, the design is scoped per project.',
    },
    {
      question: 'Do we license an enterprise agent platform from you?',
      answer:
        'No. Clickmasters is an agency. We build the agents in your environment on platforms you own, you pay platform and AI usage costs directly, and the agents and documentation belong to you.',
    },
    {
      question: 'How do we get started with enterprise AI agents?',
      answer:
        'Book a free audit. We review candidate processes and systems, then send a written quote covering scope, platforms, deliverables, usage costs and timeline for a first department rollout.',
    },
  ],
};
