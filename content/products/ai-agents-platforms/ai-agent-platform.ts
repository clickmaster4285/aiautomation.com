// content/products/ai-agents-platforms/ai-agent-platform.ts
// Copy + SEO for /products/ai-agents-platforms/ai-agent-platform.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the platform as a set of components (model, tools and integrations, context/RAG, guardrails and
//   approvals, monitoring and logs, deployment and access), how Clickmasters assembles that stack in the
//   client’s environment, build-vs-buy, and how to evaluate a platform. The build service and its stages belong
//   to the AI Agent Development sibling; coordinated specialist agents to Multi-Agent Systems; autonomy levels to
//   Autonomous AI Agents; governance at scale to Enterprise AI Agents.
// - This is NOT a licensable product. Clickmasters has no platform of its own to sell or subscribe to; say so.
// - Frameworks named are only the ones on the site: LangChain, LlamaIndex, CrewAI, AutoGen. Integration layer:
//   REST APIs, webhooks, MCP connectors. Models: GPT (OpenAI), Claude, Gemini, open-source. Cloud: AWS, Azure, GCP.
//   Systems: Salesforce, HubSpot, Zoho, SAP, NetSuite, Oracle, email, Slack, Microsoft Teams, helpdesks, storage.
// - Multi-agent designs are scoped per project in discovery, not an established product.
// - No statistics, percentages, prices, testimonials, case results, customer names, "leading/best" claims,
//   certifications, compliance claims, uptime, guaranteed accuracy or ongoing-support promises beyond
//   "monitoring and iteration after launch, scoped in your quote".
// - The client pays platform and AI usage costs directly and owns the agents and documentation.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_AGENT_PLATFORM_PATH = '/products/ai-agents-platforms/ai-agent-platform';

export const aiAgentPlatformSeo: HubSeo = {
  name: 'AI Agent Platform',
  path: AI_AGENT_PLATFORM_PATH,
  title: 'AI Agent Platform: Components and Stack | Clickmasters',
  description:
    'What an AI agent platform is made of: model, tools, retrieval, guardrails, monitoring and deployment, plus how to evaluate one and run it in your own cloud.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Agents & Platforms', path: '/products/ai-agents-platforms' },
    { name: 'AI Agent Platform', path: AI_AGENT_PLATFORM_PATH },
  ],
};

export const aiAgentPlatformKeywords = [
  'AI agent platform',
  'AI agents platform',
  'AI agent software',
  'AI agent framework',
  'agent stack',
  'AI agent architecture components',
  'LangChain vs LlamaIndex vs CrewAI',
  'build vs buy AI agent platform',
  'self-hosted AI agent platform on AWS or Azure',
  'AI agent platform for business',
  'how to evaluate an AI agent platform',
  'what is an AI agent platform',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI agents for business', href: '/products/ai-agents-platforms', section: 'What Is an AI Agent Platform?' },
  { anchor: 'AI knowledge assistants', href: '/services/ai-knowledge-assistants', section: 'The Six Layers of an AI Agent Platform (explainer)' },
  { anchor: 'coordinating several specialized agents', href: '/products/ai-agents-platforms/multi-agent-systems', section: 'Agent Frameworks We Build With (spotlight)' },
  { anchor: 'n8n automation services', href: '/platforms/n8n-automation-services', section: 'Build vs Buy: Choosing How Your Agent Stack Comes Together (extras)' },
  { anchor: 'AI agent development service', href: '/products/ai-agents-platforms/ai-agent-development', section: 'Platform vs Development vs Multi-Agent Systems (extras)' },
] as const;

export const aiAgentPlatform: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'AI Agent Platform',
    heading: 'AI Agent Platform Components, Assembled Inside Your Own Environment',
    accentWords: 3,
    subheading:
      'An AI agent is only as dependable as the stack underneath it: the model, the tools it can call, the documents it can read, the limits it works within and the logs that show what it did. We help you choose those components and assemble them in your cloud and your systems, rather than selling you a platform of our own.',
    primaryCta: { text: 'Book a Free Agent Stack Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of a multi-step automated workflow across connected apps with AI steps, representing the layers of an AI agent platform working together',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Model layer', 'Tools and connectors', 'Retrieval over your documents', 'Guardrails and approvals', 'Action logs', 'Cloud deployment'],
  },

  intro: {
    eyebrow: 'Under the Hood',
    heading: 'What Is an AI Agent Platform?',
    paragraphs: [
      'An AI agent platform is the set of components an agent needs to do useful work: a language model to reason with, tools to act in your systems, a way to read your own information, rules that limit what it may do, monitoring that records each step, and somewhere secure to run. Some vendors package those parts into one product. Others leave you to assemble them from frameworks and cloud services. Either way, the parts are the same.',
      'To be clear about what we offer: Clickmasters does not license an agent platform. We are an agency, and we assemble the stack that suits your agent from established models, frameworks and connectors, deployed in your own cloud account. You own it, and you pay the platform and AI usage costs directly.',
      'This page explains the layers, how to compare options and how we put them together. It sits within our wider guide to [AI agents for business](/products/ai-agents-platforms), which covers what agents can do and where they fit.',
    ],
    problems: [
      'Every vendor demo looks impressive, but none of them shows how the agent would reach your actual systems.',
      'It is hard to tell which parts of an agent product are the model and which parts are the vendor’s own.',
      'A proof of concept worked on a laptop, but nobody planned how it would be logged, secured or monitored.',
      'Committing to one platform feels risky when models and prices change every few months.',
      'IT wants the agent inside the company’s cloud, and most packaged products cannot say yes to that.',
    ],
  },

  explainer: {
    eyebrow: 'Platform Anatomy',
    heading: 'The Six Layers of an AI Agent Platform',
    paragraphs: [
      'When you strip away the branding, every agent stack is made of the same six layers. Comparing platforms layer by layer is the quickest way to see what you are really paying for, and which gaps you would have to fill yourself.',
      'The context layer deserves extra attention because it decides whether answers are grounded in your information or in the model’s general knowledge. Retrieval-augmented generation lets the agent search your documents and cite the source it used. The same technique powers our [AI knowledge assistants](/services/ai-knowledge-assistants), which answer staff questions from company files.',
    ],
    points: [
      { title: 'Model', description: 'The language model that reads requests and decides the next step: GPT, Claude, Gemini or an open-source model, chosen by task and cost.' },
      { title: 'Tools and Integrations', description: 'The defined actions an agent can take in your CRM, ERP, helpdesk or database, through REST APIs, webhooks or MCP connectors.' },
      { title: 'Context and Retrieval', description: 'Access to your policies, records and files, so answers and decisions rest on your own information with sources.' },
      { title: 'Guardrails and Approvals', description: 'Limits on which tools may be used, checks on inputs and outputs, and human approval before sensitive actions.' },
      { title: 'Monitoring and Logs', description: 'A record of every step, tool call and escalation, so behavior can be reviewed and improved after launch.' },
      { title: 'Deployment and Access', description: 'Where the agent runs, on AWS, Azure or GCP, and which people and systems it may reach through role-based access.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What We Set Up in Your AI Agent Platform',
    intro:
      'Each component is configured for the agent you actually need, not installed because a platform happens to include it. These are the pieces we assemble most often.',
    items: [
      { title: 'Model Selection', description: 'A model chosen for the task and its cost, with the option to switch later without rebuilding the agent.' },
      { title: 'Tool Definitions', description: 'Each action the agent may take is written as a specific, limited tool, such as “read order status” rather than open database access.' },
      { title: 'System Connectors', description: 'Connections to CRMs, ERPs, helpdesks, email and chat through REST APIs, webhooks and MCP connectors where APIs exist.' },
      { title: 'Document Retrieval', description: 'Your documents indexed so the agent can find relevant passages and cite where its answer came from.' },
      { title: 'Approval Gates', description: 'Named actions that always pause for a person, with the proposed step and supporting detail shown to the approver.' },
      { title: 'Role-Based Access', description: 'Agent credentials limited to the systems and records its job requires, separate from staff accounts.' },
      { title: 'Action Logging', description: 'Each request, tool call, result and escalation recorded so you can trace exactly what happened.' },
      { title: 'Escalation Routing', description: 'Stuck or out-of-scope cases sent to the right person in email, Slack or Teams with full context.' },
      { title: 'Test Scenarios', description: 'A set of realistic and awkward examples kept with the agent, so changes can be checked before they go live.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How We Assemble an Agent Stack in Your Environment',
    intro:
      'We start from the agent’s job and work down to the components, so the platform is shaped by the task rather than the other way round.',
    steps: [
      { title: 'Define the Job', description: 'We agree what the agent must do, what “done” means and which actions it may and may not take.' },
      { title: 'Map Systems and Data', description: 'We list the systems it needs to read or update and confirm which have usable APIs.' },
      { title: 'Choose Components', description: 'Model, framework, retrieval approach and connectors are selected and written into the design.' },
      { title: 'Set Guardrails', description: 'Tool limits, approval points, escalation rules and access permissions are configured before any live data is touched.' },
      { title: 'Deploy in Your Cloud', description: 'The stack runs in your AWS, Azure or GCP account, with logging and monitoring switched on from the start.' },
      { title: 'Review and Adjust', description: 'Logs and escalations are reviewed after launch, and components are tuned within the scope of your quote.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Assemble Your Own Agent Stack',
    intro:
      'A stack built in your environment takes more thought up front than a sign-up form, but it gives you control over the parts that matter most once the agent is doing real work.',
    items: [
      { title: 'No Platform Lock-In', description: 'Models, frameworks and connectors can be swapped individually as better or cheaper options appear.' },
      { title: 'Data Stays Where You Put It', description: 'The agent runs in your cloud account, under your access policies, next to the systems it works with.' },
      { title: 'Costs You Can See', description: 'You pay cloud and model usage directly, so the running cost of each agent is visible line by line.' },
      { title: 'Limits You Define', description: 'Guardrails and approval points are written for your process rather than inherited from a vendor default.' },
      { title: 'Traceable Behavior', description: 'Full action logs make it possible to answer “why did the agent do that?” with evidence.' },
      { title: 'A Base for the Next Agent', description: 'Connectors, retrieval and logging built for the first agent can be reused by the second.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Control Layer',
    heading: 'What the Agent Decides and What Your Platform Enforces',
    paragraphs: [
      'A common mistake is to rely on the model’s instructions alone to keep an agent in line. Instructions help, but they are not a control. In a well-built AI agent platform, the important limits live outside the model: the agent simply has no tool for actions it should never take, and actions that need a person are blocked until someone approves them.',
      'That split keeps the flexible part, the model’s reading and reasoning, where it is useful, and keeps the hard limits in configuration your team can inspect. If the agent misreads a request, the worst it can do is propose the wrong step, which a person then declines.',
    ],
    aiDoes: [
      'Interprets requests written in plain language',
      'Chooses which permitted tool to use next',
      'Searches your documents for relevant passages',
      'Summarizes findings and drafts responses',
      'Proposes actions that need approval',
      'Escalates when it lacks information or permission',
    ],
    peopleDo: [
      'Decide which tools and data the agent gets',
      'Approve actions behind approval gates',
      'Review logs and escalated cases',
      'Sign off changes to models, tools or rules',
    ],
  },

  spotlight: {
    eyebrow: 'Frameworks',
    heading: 'Agent Frameworks We Build With',
    paragraphs: [
      'Frameworks save time by handling the plumbing between a model, its tools and its data. We use the ones that suit the job rather than one for everything. LangChain and LlamaIndex cover most single-agent builds: the first is a general toolkit for connecting models to tools and steps, the second is focused on indexing and retrieving information from your documents.',
      'CrewAI and AutoGen are designed for setups where several agents with different roles work on one process. Most first agents do not need that, and we would only propose it after discovery shows a real reason. If your process does call for [coordinating several specialized agents](/products/ai-agents-platforms/multi-agent-systems), that design is scoped per project.',
    ],
    points: [
      { title: 'LangChain', description: 'A general framework for chaining model calls, tools and logic, used for many single-agent builds.' },
      { title: 'LlamaIndex', description: 'A data framework for indexing documents and retrieving the right passages for the agent to use.' },
      { title: 'CrewAI', description: 'A framework for agents with defined roles working together, considered only when one agent is not enough.' },
      { title: 'AutoGen', description: 'A framework for agents that coordinate through structured exchanges, scoped per project where it fits.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Build vs Buy',
      heading: 'Build vs Buy: Choosing How Your Agent Stack Comes Together',
      accentWords: 3,
      paragraphs: [
        'There are broadly three routes. You can subscribe to a packaged agent product, which is quick to start but limits you to its connectors, its models and its hosting. You can add AI steps to an automation platform you already use, which suits agents whose job is mostly a sequence with one or two reading or decision points. Our [n8n automation services](/platforms/n8n-automation-services) page covers that route, including self-hosting. Or you can assemble a framework-based stack in your cloud, which takes more design but gives you the most control.',
        'Whichever route you lean towards, evaluate it against the same questions. The points below are the ones we work through with clients before recommending anything, and they apply just as much to a packaged product as to our own builds.',
      ],
      points: [
        { title: 'Can It Reach Your Systems?', description: 'Check for working connectors or APIs for the exact CRM, ERP and helpdesk you use, not just the category.' },
        { title: 'Can You Change the Model?', description: 'A platform tied to one model leaves you exposed if pricing, quality or availability changes.' },
        { title: 'Where Do the Limits Live?', description: 'Look for tool-level permissions and approval gates enforced by the platform, not just written into a prompt.' },
        { title: 'What Gets Logged?', description: 'You should be able to see every tool call and decision, and export those logs into your own systems.' },
        { title: 'Where Does It Run?', description: 'Confirm whether the agent can run in your own cloud account and under your access policies.' },
      ],
    },
    {
      eyebrow: 'Worked Example',
      heading: 'The Stack Behind a Support Triage Agent',
      accentWords: 3,
      paragraphs: [
        'Picture an ecommerce business whose support inbox fills with “where is my order?” and “can I change my address?” messages. The agent’s job is to read each ticket, look up the order, draft a reply and route it. Here is how the six layers would come together for that one agent.',
        'Notice what is missing. The agent has no tool for issuing refunds or editing orders, so it cannot do either, however a customer phrases the request. Those cases are routed to staff with the order details attached. Every component choice would be confirmed in discovery against the actual helpdesk and store systems.',
      ],
      points: [
        { title: 'Model and Framework', description: 'A model chosen for reading short customer messages at a sensible cost, built with LangChain.' },
        { title: 'Tools', description: 'Read-only order lookup, a “draft reply” action in the helpdesk and a “route to queue” action. Nothing else.' },
        { title: 'Context', description: 'Shipping and returns policies indexed so draft replies quote the current policy and name the source.' },
        { title: 'Guardrails and Logs', description: 'Drafts wait for a support agent to send; refund requests escalate; every lookup and draft is logged.' },
      ],
    },
    {
      eyebrow: 'Where This Fits',
      heading: 'Platform vs Development vs Multi-Agent Systems',
      accentWords: 4,
      paragraphs: [
        'This page is about what an agent runs on. If your question is who designs and builds the agent, and what happens at each stage from discovery to launch, that is covered by our [AI agent development service](/products/ai-agents-platforms/ai-agent-development). The platform choices on this page are made during that process, not separately from it.',
        'Multi-agent systems are a design pattern that sits on top of a platform: several agents, each with its own tools and role, working on one process. They need the same six layers, plus a way for agents to hand work to one another. Getting the platform right for a single agent comes first.',
      ],
      points: [
        { title: 'Read This Page When', description: 'You are comparing agent products or frameworks, or IT needs to know what the agent will run on.' },
        { title: 'Read Development When', description: 'You have a use case and want to know how the agent is scoped, built, tested and launched.' },
        { title: 'Read Multi-Agent When', description: 'One process genuinely needs several specialized agents working together.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who This AI Agent Platform Guidance Is For',
    items: [
      { title: 'IT and Technology Leads', description: 'People who need to know where an agent runs, what it can reach and how it is logged before approving it.' },
      { title: 'Operations Leaders', description: 'Managers comparing agent products and wanting a plain-language view of what each one includes.' },
      { title: 'Founders of Growing Companies', description: 'Owners deciding whether to subscribe to an agent tool or build something they will own.' },
      { title: 'Teams With a Stalled Prototype', description: 'Teams whose proof of concept works but has no plan for access, monitoring or deployment.' },
      { title: 'Cloud-First Businesses', description: 'Companies already on AWS, Azure or GCP that want agents to run alongside their other workloads.' },
      { title: 'Data-Sensitive Organizations', description: 'Businesses that want agent activity and data access kept under their own policies.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Components and Systems in a Typical Agent Stack',
    paragraphs: [
      'The tools layer connects agents to CRMs such as Salesforce, HubSpot and Zoho, ERPs such as SAP, NetSuite and Oracle, internal APIs and databases, email, Slack, Microsoft Teams, helpdesks and cloud storage, wherever an API exists. Connections use REST APIs, webhooks and MCP connectors.',
      'Which components suit your agent, and which of your systems can be connected, is confirmed in discovery before anything is built. The stack is deployed in your cloud account with role-based access.',
    ],
    groups: [
      { label: 'Models', items: ['OpenAI GPT', 'Claude', 'Gemini', 'Open-source models'] },
      { label: 'Frameworks', items: ['LangChain', 'LlamaIndex', 'CrewAI', 'AutoGen'] },
      { label: 'Connectors', items: ['REST APIs', 'Webhooks', 'MCP connectors'] },
      { label: 'Business Systems', items: ['Salesforce', 'HubSpot', 'Zoho', 'SAP', 'NetSuite', 'Oracle'] },
      { label: 'Communication', items: ['Email', 'Slack', 'Microsoft Teams', 'Helpdesks'] },
      { label: 'Cloud', items: ['AWS', 'Azure', 'GCP'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Plan Your Agent Platform With Clickmasters',
    intro:
      'We have no platform of our own to sell, so our recommendation follows your requirements rather than a product roadmap.',
    items: [
      { title: 'Vendor-Neutral Advice', description: 'We compare packaged products, automation platforms and framework builds on your criteria.' },
      { title: 'Task-First Design', description: 'Components are chosen for the agent’s job, so you do not pay for layers you will not use.' },
      { title: 'Controls Outside the Prompt', description: 'Limits are enforced through tool design, access and approval gates, not instructions alone.' },
      { title: 'Model-Agnostic Builds', description: 'The model can be changed later without rebuilding the tools, retrieval or logging.' },
      { title: 'Your Cloud, Your Accounts', description: 'Everything runs in accounts you control, and you pay usage costs directly.' },
      { title: 'Documented Handover', description: 'You receive the configuration, architecture notes and documentation, so the stack is yours to run.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Plan Your AI Agent Platform',
    intro:
      'Platform decisions are easier once the first agent’s job is clear, so we begin there and design the stack around it.',
    steps: [
      { title: 'Free Audit', description: 'We review the task you have in mind and the systems and data it would depend on.' },
      { title: 'Requirements', description: 'Access, hosting, logging and approval requirements are written down with your IT and operations leads.' },
      { title: 'Stack Options', description: 'We set out the realistic routes, packaged, automation platform or framework build, with trade-offs.' },
      { title: 'Prototype', description: 'A working proof of concept runs on the chosen components against real examples.' },
      { title: 'Deploy', description: 'The stack is deployed in your cloud with guardrails, logging and monitoring in place.' },
      { title: 'Handover', description: 'Architecture notes, configuration and documentation are handed to your team.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline for each stage.',
  },

  cta: {
    bandHeading: 'Decide what your agent should run on',
    heading: 'Choose an Agent Stack You Can Inspect, Change and Own',
    description:
      'Book a free, no-obligation agent stack audit. We will look at the agent you have in mind, compare the realistic platform routes and explain what each layer would mean for your systems.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Agent Platform: Common Questions',
  faqSideText: 'Comparing agent products or frameworks? Book a free audit and we will walk through the trade-offs with you.',
  faqs: [
    {
      question: 'What is an AI agent platform?',
      answer:
        'It is the collection of components an agent runs on: a language model, tools for acting in your systems, retrieval over your documents, guardrails and approval steps, monitoring and logs, and a secure place to deploy. It can be bought as a packaged product or assembled from frameworks and cloud services.',
    },
    {
      question: 'Do you sell or license an AI agent platform?',
      answer:
        'No. Clickmasters is an agency. We assemble the stack your agent needs from established models, frameworks and connectors, deployed in your cloud account. You own it and pay platform and AI usage costs directly.',
    },
    {
      question: 'What is the difference between an AI agent framework and a platform?',
      answer:
        'A framework such as LangChain or LlamaIndex is a code library that helps connect a model to tools and data. A platform is the whole working stack around it, including hosting, access control, approvals, logging and monitoring. A framework is one part of a platform.',
    },
    {
      question: 'Should we build or buy our agent stack?',
      answer:
        'Buying suits simple agents that only need the connectors a product already has. Building suits agents that must reach your specific systems, run in your cloud or follow your own controls. An automation platform with AI steps is often a sensible middle route. We compare the options during the audit.',
    },
    {
      question: 'How do we evaluate an AI agent platform?',
      answer:
        'Check whether it connects to your actual systems, lets you change the model, enforces limits and approvals outside the prompt, logs every tool call, and can run under your own cloud and access policies. Those five questions separate most options quickly.',
    },
    {
      question: 'Which frameworks do you use?',
      answer:
        'We build with LangChain and LlamaIndex for most single-agent work, and consider CrewAI or AutoGen only where a process needs several coordinated agents, which is scoped per project in discovery.',
    },
    {
      question: 'Which AI models can the platform use?',
      answer:
        'The model layer is model-agnostic: GPT from OpenAI, Claude, Gemini or an open-source model, chosen by task and cost. Because tools, retrieval and logging sit outside the model, it can be changed later.',
    },
    {
      question: 'Can the agent stack run in our own cloud?',
      answer:
        'Yes. We deploy on AWS, Azure or GCP in accounts you control, with role-based access so the agent reaches only the systems and records its job requires.',
    },
    {
      question: 'How does an AI agent platform stop an agent doing something it shouldn’t?',
      answer:
        'By design rather than instruction. The agent is only given tools for actions it is allowed to take, sensitive actions sit behind approval gates, its access is limited by role, and every step is logged for review.',
    },
    {
      question: 'Can an agent use our documents as a source?',
      answer:
        'Yes. A retrieval layer indexes your documents so the agent can find relevant passages and cite the source it used, keeping answers grounded in your own information.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review the agent you have in mind and your systems, set out the platform options and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
