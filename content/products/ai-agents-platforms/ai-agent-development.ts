// content/products/ai-agents-platforms/ai-agent-development.ts
// Copy + SEO for /products/ai-agents-platforms/ai-agent-development.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the service and build process: discovery, design, prototype, development, integration, testing
//   and QA, deployment, then monitoring and iteration after launch (scope set in the quote); what the client
//   receives; how to choose a development partner. The components of the stack belong to the AI Agent Platform
//   sibling; autonomy levels to Autonomous AI Agents; governance across departments to Enterprise AI Agents;
//   coordinated specialist agents to Multi-Agent Systems.
// - Do NOT reuse the testimonials, case results or "leading company" claims on /services/ai-agent-development.
// - Agents are custom, built around the client’s workflow, tools, data and APIs; narrow scope; human approval
//   before important or sensitive actions; escalation with full context; action logging. Never "fully autonomous".
// - Systems, models, frameworks and cloud named only as on the site: Salesforce, HubSpot, Zoho, SAP, NetSuite,
//   Oracle, email, Slack, Microsoft Teams, helpdesks, cloud storage; REST APIs, webhooks, MCP connectors; GPT
//   (OpenAI), Claude, Gemini, open-source; LangChain, LlamaIndex, CrewAI, AutoGen; AWS, Azure, GCP.
// - No statistics, percentages, time saved, prices, durations, testimonials, case results, customer names,
//   "leading/best" claims, certifications, compliance claims, uptime, guarantees or support commitments beyond
//   "monitoring and iteration after launch, scoped in your quote".
// - The client pays platform and AI usage costs directly and owns the agents and documentation.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_AGENT_DEVELOPMENT_PATH = '/products/ai-agents-platforms/ai-agent-development';

export const aiAgentDevelopmentSeo: HubSeo = {
  name: 'AI Agent Development',
  path: AI_AGENT_DEVELOPMENT_PATH,
  title: 'AI Agent Development Process and Deliverables | Clickmasters',
  description:
    'Custom AI agent development from discovery and a prototype to integration, testing and launch in your environment, with guardrails and approvals built in.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Agents & Platforms', path: '/products/ai-agents-platforms' },
    { name: 'AI Agent Development', path: AI_AGENT_DEVELOPMENT_PATH },
  ],
};

export const aiAgentDevelopmentKeywords = [
  'AI agent development',
  'custom AI agent development',
  'AI agent development services',
  'build AI agents for business',
  'hire AI agent developers',
  'AI agent development company',
  'AI agent proof of concept',
  'AI agent development process',
  'custom AI agents integrated with CRM and ERP',
  'how to choose an AI agent development partner',
  'how long does it take to build an AI agent',
  'what does AI agent development involve',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI agents and platforms', href: '/products/ai-agents-platforms', section: 'What Is AI Agent Development?' },
  { anchor: 'more AI agent use cases by team', href: '/solutions/ai-agents', section: 'Worked Example: Building a Lead Qualification Agent (spotlight)' },
  { anchor: 'custom AI development', href: '/services/custom-ai-development', section: 'How to Choose an AI Agent Development Partner (extras)' },
  { anchor: 'the components of an AI agent platform', href: '/products/ai-agents-platforms/ai-agent-platform', section: 'Development vs Platform vs Enterprise Rollout (extras)' },
  { anchor: 'rolling governed agents out across departments', href: '/products/ai-agents-platforms/enterprise-ai-agents', section: 'Development vs Platform vs Enterprise Rollout (extras)' },
] as const;

export const aiAgentDevelopment: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'AI Agent Development',
    heading: 'AI Agent Development, From First Workshop to Production',
    accentWords: 4,
    subheading:
      'We design, build and launch custom AI agents for one clearly defined job in your business. Each agent is shaped around your workflow, connected to your systems, tested on your real cases and handed over running in your environment, with approvals and escalation designed in from the first draft.',
    primaryCta: { text: 'Book a Free AI Agent Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of a multi-step automated workflow across connected apps with AI steps, representing a custom AI agent built into a company’s systems',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Discovery', 'Agent design', 'Working prototype', 'System integration', 'Testing and QA', 'Launch and iteration'],
  },

  intro: {
    eyebrow: 'The Service',
    heading: 'What Is AI Agent Development?',
    paragraphs: [
      'AI agent development is the work of turning a business task into an agent that can carry it out reliably. That means much more than writing a prompt. Someone has to decide exactly what the agent is responsible for, which systems it may read and change, what it should do when information is missing, where a person must approve, and how you will know it is behaving as intended once it is live.',
      'At Clickmasters, custom AI agent development follows a fixed path: discovery, design, a working prototype, development, integration, testing and deployment, followed by monitoring and improvement after launch. Each stage ends with something you can review, so you are never asked to fund a full build on the strength of a slide.',
      'This page explains the service itself. For an overview of what agents can do across a business, start with our guide to [AI agents and platforms](/products/ai-agents-platforms).',
    ],
    problems: [
      'You know which task you want an agent for, but not how to turn it into a buildable specification.',
      'An internal experiment produced a clever demo that nobody trusts with live data.',
      'Off-the-shelf agent tools cannot reach the CRM, ERP or internal database your process depends on.',
      'Previous suppliers delivered a chatbot when what you needed was something that completes tasks.',
      'Nobody has defined what the agent should do when it is unsure, so it either guesses or stops silently.',
    ],
  },

  explainer: {
    eyebrow: 'Deliverables',
    heading: 'What You Get From an AI Agent Development Project',
    paragraphs: [
      'A finished agent is more than the code that runs it. To be safe to operate and easy to change, it needs a written definition of its job, a record of the decisions behind its design and a way to test it again after every change. These are the deliverables we hand over at the end of a project.',
      'Everything is built in accounts you control and documented for your team. You pay cloud, platform and AI usage costs directly, so nothing stops working if our involvement ends.',
    ],
    points: [
      { title: 'Agent Specification', description: 'A plain-language description of the agent’s job, its allowed actions, its approval points and its escalation rules.' },
      { title: 'Working Agent', description: 'The agent running in your environment, connected to the systems in scope and handling live requests.' },
      { title: 'Integrations', description: 'The connectors, API calls and webhooks the agent uses, built with only the access its job needs.' },
      { title: 'Test Set', description: 'A library of real and awkward example cases used to check the agent before launch and after every change.' },
      { title: 'Logs and Monitoring', description: 'Action logging and monitoring in place, so every step the agent takes can be reviewed.' },
      { title: 'Documentation', description: 'Architecture notes, configuration details and an operating guide for the people who will own the agent.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'AI Agent Development Services We Provide',
    intro:
      'Each project draws on the services below. Smaller agents may need only a few of them; agents that touch several systems usually need most.',
    items: [
      { title: 'Use-Case Selection', description: 'Help choosing a first task that is frequent, well defined and safe to hand to an agent.' },
      { title: 'Workflow and Guardrail Design', description: 'Mapping the agent’s steps, allowed actions, approval points and escalation paths before any code is written.' },
      { title: 'Prototyping', description: 'A working proof of concept run against your real examples so output quality can be judged early.' },
      { title: 'Integration Development', description: 'Connections to your CRM, ERP, helpdesk, email, chat and databases through REST APIs, webhooks and MCP connectors.' },
      { title: 'Document Retrieval', description: 'Setting up search over your documents so the agent answers from your information and names its sources.' },
      { title: 'Approval and Escalation Flows', description: 'Sending proposed actions and stuck cases to the right person in email, Slack or Teams with full context.' },
      { title: 'Testing and QA', description: 'Checking normal, unusual, incomplete and adversarial inputs, plus what happens when a connected system fails.' },
      { title: 'Cloud Deployment', description: 'Launching the agent on AWS, Azure or GCP in your accounts, with role-based access.' },
      { title: 'Post-Launch Iteration', description: 'Reviewing logs and escalations after launch and refining the agent, within the scope agreed in your quote.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'Our AI Agent Development Process, Stage by Stage',
    intro:
      'Every stage has a clear output you review before the next begins. If the prototype shows the idea will not work well enough, you find out before the main build, not after.',
    steps: [
      { title: 'Discovery', description: 'We study the task, the people involved, the systems and data it touches, and what a good result looks like.' },
      { title: 'Design', description: 'The workflow, architecture, allowed actions, approval points and escalation rules are written into the agent specification.' },
      { title: 'Prototype', description: 'A working proof of concept runs on real examples, so you can judge its decisions and drafts before development.' },
      { title: 'Development and Integration', description: 'The agent is built out and connected to the systems in scope, with access limited to what it needs.' },
      { title: 'Testing and QA', description: 'The test set is run end to end, including edge cases and failure scenarios, and issues are fixed before launch.' },
      { title: 'Deployment and Monitoring', description: 'The agent goes live in your environment, logs are reviewed and the agent is refined after launch.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Build AI Agents for Business This Way',
    intro:
      'A staged process takes the guesswork out of agent projects. You see real output early and decide at each step whether to continue.',
    items: [
      { title: 'Early Proof', description: 'The prototype shows how the agent handles your actual cases before you commit to the full build.' },
      { title: 'Fewer Surprises at Launch', description: 'Edge cases and system failures are tested deliberately rather than discovered by customers.' },
      { title: 'An Agent That Fits', description: 'Built around your process and systems, it does not force your team to adopt a new way of working.' },
      { title: 'Clear Responsibilities', description: 'The specification makes it obvious what the agent does, what people do and who owns each decision.' },
      { title: 'Easier to Change', description: 'With a test set and documentation in place, the agent can be adjusted without starting again.' },
      { title: 'Full Ownership', description: 'The agent, its configuration and its documentation belong to you after handover.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Designing the Split',
    heading: 'Deciding What the Agent Does and What Stays With People',
    paragraphs: [
      'The most important decisions in AI agent development are not technical. They are about responsibility: which actions are routine enough to let the agent take, which need a person’s approval, and which the agent should never attempt. We work through those questions with the people who do the task today, because they know where the risky cases hide.',
      'The answers become part of the build. Actions the agent should never take are simply not given to it as tools. Actions that need approval pause until someone confirms. And when the agent is unsure, it escalates with a note of what it tried, what it found and where it got stuck, so the person picking it up does not have to start again.',
    ],
    aiDoes: [
      'Reads and classifies incoming requests',
      'Researches records across connected systems',
      'Drafts replies, notes and summaries',
      'Updates the fields it is permitted to change',
      'Proposes actions that require approval',
      'Escalates unclear cases with its working shown',
    ],
    peopleDo: [
      'Agree the agent’s job and limits in discovery',
      'Review the prototype and test results',
      'Approve sensitive actions once it is live',
      'Decide on changes after reviewing the logs',
    ],
  },

  spotlight: {
    eyebrow: 'Worked Example',
    heading: 'Worked Example: Building a Lead Qualification Agent',
    paragraphs: [
      'Consider a B2B services firm whose inbound leads arrive through a website form and land in HubSpot. A sales coordinator researches each one by hand, checks whether it matches the firm’s target market, and assigns the promising ones to a rep. The coordinator wants that groundwork done before they start each morning.',
      'In discovery we would agree the qualification criteria, the sources the agent may consult and what it may change in the CRM. The prototype would run on a batch of past leads so the coordinator could compare its judgments with their own. Only after that comparison would the full build and HubSpot integration go ahead. For other starting points, see [more AI agent use cases by team](/solutions/ai-agents).',
    ],
    points: [
      { title: 'Discovery Output', description: 'Written qualification criteria, permitted CRM fields and the rule that only the coordinator assigns leads to reps.' },
      { title: 'Prototype Check', description: 'The agent scores past leads, and the coordinator marks where they would have decided differently.' },
      { title: 'Build and Integration', description: 'The agent writes a summary, score and reasoning into each HubSpot record and flags borderline leads.' },
      { title: 'After Launch', description: 'Disagreements between agent and coordinator are reviewed and the criteria tightened where needed.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Choosing a Partner',
      heading: 'How to Choose an AI Agent Development Partner',
      accentWords: 3,
      paragraphs: [
        'Whether you hire AI agent developers in-house, use a freelancer or work with an agency, the same questions reveal whether the result will hold up in production. Be wary of anyone who leads with how autonomous their agents are rather than how they are controlled.',
        'Also check that an agent is the right tool at all. A good partner will tell you when a standard workflow would do the job more cheaply, or when your need is a broader AI build such as a model integrated into your own product. That second case is covered by our [custom AI development](/services/custom-ai-development) service.',
      ],
      points: [
        { title: 'Do They Start With a Prototype?', description: 'A working proof of concept on your data should come before a full build commitment.' },
        { title: 'How Do They Handle Uncertainty?', description: 'Ask what the agent does when it is unsure. “It escalates with context” is the answer you want.' },
        { title: 'Where Will It Run?', description: 'Confirm the agent will run in your accounts and that you will own the code and configuration.' },
        { title: 'Are They Model-Agnostic?', description: 'A partner tied to one model may not choose the best fit for your task or budget.' },
        { title: 'What Happens After Launch?', description: 'Ask how logs will be reviewed and what iteration is included, and get it written into the quote.' },
      ],
    },
    {
      eyebrow: 'Where This Fits',
      heading: 'Development vs Platform vs Enterprise Rollout',
      accentWords: 4,
      paragraphs: [
        'Development is the service: the people, stages and decisions that produce a working agent. The technology it runs on, from the model and framework to the retrieval and logging layers, is covered by [the components of an AI agent platform](/products/ai-agents-platforms/ai-agent-platform). Those choices are made during the design stage described above.',
        'If your organization plans to run agents in several teams, the questions widen to ownership, role-based access, shared approval rules and a staged rollout plan. Our page on [rolling governed agents out across departments](/products/ai-agents-platforms/enterprise-ai-agents) covers that larger picture. Most organizations still begin with a single agent developed this way.',
      ],
      points: [
        { title: 'Read This Page When', description: 'You have a task in mind and want to know how the agent would be scoped, built and launched.' },
        { title: 'Read Platform When', description: 'You are weighing models, frameworks, hosting and build-vs-buy before or during design.' },
        { title: 'Read Enterprise When', description: 'Agents will span departments and need shared governance, access rules and a rollout plan.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Our AI Agent Development Service Is For',
    items: [
      { title: 'Teams With a Clear Use Case', description: 'Businesses that know which task they want an agent for and need it built properly.' },
      { title: 'Companies Without AI Engineers', description: 'Organizations that would rather not hire AI agent developers for a first project.' },
      { title: 'Owners of a Stalled Pilot', description: 'Teams with a promising experiment that needs integration, testing and safe deployment.' },
      { title: 'Operations and Sales Leaders', description: 'Managers who want research, record updates and triage handled before their team picks the work up.' },
      { title: 'Back-Office Managers', description: 'Finance and admin leads with document-driven tasks, reconciliation checks or exception handling.' },
      { title: 'IT Departments', description: 'Technology teams that want an outside build delivered into their own cloud and documented for them to own.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Systems We Connect During Development',
    paragraphs: [
      'Integration is often the largest part of an agent build. We connect agents to CRMs such as Salesforce, HubSpot and Zoho, ERPs such as SAP, NetSuite and Oracle, internal APIs and databases, email, Slack, Microsoft Teams, helpdesks and cloud storage, wherever an API exists. Connections use REST APIs, webhooks and MCP connectors.',
      'Agents are built with frameworks such as LangChain and LlamaIndex, on a model chosen per task and cost, and deployed on AWS, Azure or GCP. What can be connected in your stack is confirmed in discovery.',
    ],
    groups: [
      { label: 'CRMs', items: ['Salesforce', 'HubSpot', 'Zoho'] },
      { label: 'ERPs and Data', items: ['SAP', 'NetSuite', 'Oracle', 'Internal APIs', 'Databases'] },
      { label: 'Communication', items: ['Email', 'Slack', 'Microsoft Teams', 'Helpdesks'] },
      { label: 'AI Models', items: ['OpenAI GPT', 'Claude', 'Gemini', 'Open-source models'] },
      { label: 'Frameworks', items: ['LangChain', 'LlamaIndex', 'CrewAI', 'AutoGen'] },
      { label: 'Cloud and Connectors', items: ['AWS', 'Azure', 'GCP', 'REST APIs', 'Webhooks', 'MCP'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Choose Clickmasters for AI Agent Development',
    intro:
      'We are an AI automation agency that builds agents into the tools businesses already run. Our process is designed to show you real output early and leave you owning everything at the end.',
    items: [
      { title: 'Prototype Before Build', description: 'You see the agent working on your own cases before the main development begins.' },
      { title: 'One Job, Done Well', description: 'Each agent has a narrow, written scope, so it is easier to test, trust and extend.' },
      { title: 'Controls in the Design', description: 'Approval points, tool limits and escalation are agreed in discovery and built from the start.' },
      { title: 'Straight Answers', description: 'If a simpler automation or no automation is the better choice, we say so.' },
      { title: 'Built in Your Environment', description: 'The agent runs in your cloud and accounts, and you pay usage costs directly.' },
      { title: 'Documented Handover', description: 'Specification, test set, architecture notes and operating guide are all handed over.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How to Start Your AI Agent Development Project',
    intro:
      'The first conversation is about the task, not the technology. We need to understand the work before we can say whether an agent is the right answer.',
    steps: [
      { title: 'Free Audit', description: 'We discuss the task you have in mind, the people who do it now and the systems involved.' },
      { title: 'Written Quote', description: 'You receive a quote covering scope, platforms, deliverables, usage costs and timeline.' },
      { title: 'Discovery Workshop', description: 'We work with the people closest to the task to agree the agent’s job, limits and success measures.' },
      { title: 'Prototype Review', description: 'You review the proof of concept on real examples and decide whether to proceed.' },
      { title: 'Build, Test and Launch', description: 'The agent is developed, integrated, tested and deployed in your environment.' },
      { title: 'Review After Launch', description: 'Logs and escalations are reviewed and the agent refined, as scoped in your quote.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline for each stage.',
  },

  cta: {
    bandHeading: 'Turn one task into a working agent',
    heading: 'Get an Agent Built Around How Your Team Actually Works',
    description:
      'Book a free, no-obligation AI agent audit. We will talk through the task you have in mind, tell you honestly whether an agent fits, and outline how a first build would be scoped and proven.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Agent Development: Common Questions',
  faqSideText: 'Have a task in mind for an agent? Book a free audit and we will tell you how we would scope it.',
  faqs: [
    {
      question: 'What is AI agent development?',
      answer:
        'It is the process of turning a business task into an AI agent that carries it out reliably: defining the job and its limits, designing the workflow, prototyping, building and integrating it with your systems, testing it and deploying it, then monitoring and refining it after launch.',
    },
    {
      question: 'What does custom AI agent development include?',
      answer:
        'Discovery, design, a working prototype, development, integration, testing and QA, and deployment in your environment, followed by monitoring and iteration after launch. You receive the agent, its specification, test set, integrations and documentation.',
    },
    {
      question: 'Why start with a prototype?',
      answer:
        'A prototype shows how the agent handles your real cases before the main build. It is the cheapest point at which to discover that the task needs different criteria, more data or a simpler approach.',
    },
    {
      question: 'How long does it take to build an AI agent?',
      answer:
        'It depends on the task, the number of systems the agent must connect to and how much testing the risk level calls for. The timeline for each stage is set out in your written quote after the audit.',
    },
    {
      question: 'Should we hire AI agent developers in-house or use an agency?',
      answer:
        'In-house developers make sense if you plan to build many agents and want the skills permanently. For a first agent, an agency can bring a tested process and hand over documentation your team can own. Some businesses do both: an agency builds the first agent while internal staff learn the setup.',
    },
    {
      question: 'Which systems can you integrate the agent with?',
      answer:
        'CRMs such as Salesforce, HubSpot and Zoho, ERPs such as SAP, NetSuite and Oracle, internal APIs and databases, email, Slack, Microsoft Teams, helpdesks and cloud storage, wherever an API exists. Your specific connections are confirmed in discovery.',
    },
    {
      question: 'How do you stop the agent making mistakes with live data?',
      answer:
        'No agent is perfect, so we design for mistakes. Its access is limited to what its job needs, sensitive actions require human approval, every step is logged and unclear cases are escalated with context. Testing covers unusual and failure cases before launch.',
    },
    {
      question: 'Who owns the agent once it is built?',
      answer:
        'You do. The agent runs in accounts you control, and the code, configuration and documentation are handed over. You pay platform and AI usage costs directly.',
    },
    {
      question: 'Can you take over an agent another team started?',
      answer:
        'Often, yes. We review the existing work during the audit, check how it handles access, approvals and logging, and recommend whether to extend it or rebuild the parts that are not safe to run live.',
    },
    {
      question: 'What happens after the agent launches?',
      answer:
        'Logs and escalations are reviewed, and the agent is refined where its instructions, criteria or tools need adjusting. The scope of that monitoring and iteration is agreed in your quote.',
    },
    {
      question: 'How do we start AI agent development with Clickmasters?',
      answer:
        'Book a free audit. We discuss the task, the people and the systems involved, then send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
