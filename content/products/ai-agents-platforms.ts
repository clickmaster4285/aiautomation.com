// content/products/ai-agents-platforms.ts
// Copy + SEO for /products/ai-agents-platforms (category parent).
//
// Accuracy rules for this page (keep them when editing):
// - Primary keyword is "AI agents for business". Do NOT target "AI agent platform" as primary (the
//   ai-agent-platform child owns it), nor "AI agent development" (owned by the ai-agent-development child).
// - Only capabilities stated elsewhere on the site: custom agents built around the client’s workflow, tools,
//   data and APIs; an agent understands a request, accesses information, chooses the next action within
//   defined guardrails, completes multi-step tasks across connected systems and reports outcomes; human
//   approval before important or sensitive actions; escalation with full context; narrow scope, action
//   logging, monitoring and iteration after launch; RAG answers from the client’s documents with sources.
// - Agents are explicitly NOT fully autonomous systems that run a business unsupervised. Multi-agent designs are
//   NOT an established product: single well-scoped agents come first, coordinated agents are scoped per project.
// - Systems named here are the ones named on the site: Salesforce, HubSpot, Zoho, SAP, NetSuite, Oracle,
//   email, Slack, Microsoft Teams, helpdesks, cloud storage; REST APIs, webhooks, MCP connectors; models GPT
//   (OpenAI), Claude, Gemini, open-source; frameworks LangChain, LlamaIndex, CrewAI, AutoGen; AWS, Azure, GCP.
//   Connections are always phrased as "where APIs exist; confirmed in discovery".
// - Industry applications are framed as general use or "scoped per project", not standard features.
// - No statistics, percentages, time saved, prices, testimonials, case results, customer names,
//   "leading/best" claims, certifications, compliance claims, uptime, guarantees or ongoing-support promises.
// - Clickmasters is an agency that builds agents in the client’s environment — not a licensable agent platform.
//   The client pays platform and AI usage costs directly and owns the agents and documentation.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links,
// one to each child page. There is no `related` grid on this page.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_AGENTS_PLATFORMS_PATH = '/products/ai-agents-platforms';

export const aiAgentsPlatformsSeo: HubSeo = {
  name: 'AI Agents & Platforms',
  path: AI_AGENTS_PLATFORMS_PATH,
  title: 'AI Agents for Business, Built in Your Tools | Clickmasters',
  description:
    'AI agents for business that research, update records and handle multi-step tasks in your CRM, ERP and inbox, with guardrails, approvals and full action logs.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Agents & Platforms', path: AI_AGENTS_PLATFORMS_PATH },
  ],
};

export const aiAgentsPlatformsKeywords = [
  'AI agents for business',
  'business AI agents',
  'agentic AI solutions',
  'AI agent automation',
  'AI agents and platforms',
  'AI agents vs chatbots',
  'AI agents for CRM and back-office work',
  'AI agents with human approval',
  'custom AI agents for small and mid-sized businesses',
  'AI agent agency',
  'hire a company to build AI agents',
  'what can AI agents do for a business',
  'how do AI agents work',
];

// The five contextual internal links used in the copy below (one per child page).
export const internalLinks = [
  { anchor: 'how an AI agent platform is put together', href: '/products/ai-agents-platforms/ai-agent-platform', section: 'What Are AI Agents for Business?' },
  { anchor: 'how much autonomy an agent should really have', href: '/products/ai-agents-platforms/autonomous-ai-agents', section: 'Agents vs Chatbots vs Automated Workflows (explainer)' },
  { anchor: 'multi-agent systems', href: '/products/ai-agents-platforms/multi-agent-systems', section: 'Match Your Agent Question to the Right Page (extras)' },
  { anchor: 'enterprise AI agents with governance built in', href: '/products/ai-agents-platforms/enterprise-ai-agents', section: 'Systems Business AI Agents Connect To' },
  { anchor: 'our AI agent development process', href: '/products/ai-agents-platforms/ai-agent-development', section: 'How We Put Your First AI Agent to Work' },
] as const;

export const aiAgentsPlatforms: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'AI Agents & Platforms',
    heading: 'AI Agents for Business That Do Real Work Inside the Systems You Already Run',
    accentWords: 4,
    subheading:
      'Clickmasters designs and builds AI agents around your workflow, your data and your tools. An agent reads the request, gathers what it needs from your CRM, inbox or ERP, takes the next sensible step within limits you set, and asks a person before anything important or sensitive happens.',
    primaryCta: { text: 'Book a Free AI Agent Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of a multi-step automated workflow across connected business apps with AI steps, representing AI agents working across a company’s systems',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Lead research', 'CRM updates', 'Support triage', 'Client onboarding', 'Back-office tasks', 'Exception handling'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Are AI Agents for Business?',
    paragraphs: [
      'AI agents for business are software assistants that can carry a task through several steps on their own, inside limits you define. Ask one to qualify a new inbound lead and it can look the company up, check whether the contact already exists in your CRM, compare the details with your ideal customer profile, write a short summary and update the record. Where the next step matters, such as assigning the lead to a senior rep, it stops and asks.',
      'What separates an agent from a script is that it can work with untidy inputs and choose between actions. A customer email might be a complaint, a billing question or a cancellation, written in any order and with half the details missing. An agent can read it, work out what is being asked, look up the order, and decide which of the actions you have allowed it to take fits best. A rule-based automation can only follow the path it was given.',
      'This page is the overview of our AI agents and platforms range. It covers where agents help, how they work and where people stay in charge. If you want to understand the technical layers underneath, read about [how an AI agent platform is put together](/products/ai-agents-platforms/ai-agent-platform) before you choose tools.',
    ],
    problems: [
      'Skilled staff spend hours researching leads, accounts or suppliers before they can act on them.',
      'Support and operations inboxes need reading, investigating and routing before anyone can reply.',
      'CRM and ERP records drift out of date because updating them is nobody’s main job.',
      'Rule-based automations break the moment an email, document or request does not fit the template.',
      'A chatbot was tried, but it could only answer questions and never actually finished a task.',
    ],
  },

  explainer: {
    eyebrow: 'Know the Difference',
    heading: 'Agents vs Chatbots vs Automated Workflows',
    paragraphs: [
      'The three terms are often used as if they mean the same thing, and that causes poor buying decisions. A chatbot holds a conversation and answers questions. An automated workflow follows fixed steps when a trigger fires: a form is submitted, so a record is created and an email goes out. An AI agent sits between the two. It understands a request in plain language like a chatbot, but it also takes actions in your systems like a workflow, and it can choose the order of those actions based on what it finds.',
      'That flexibility is useful, but it is also why agents need firmer limits than either alternative. In practice, the agents we build combine all three ideas: fixed workflow steps for the predictable parts, an agent for the judgment-heavy middle, and a person at every point where a mistake would be costly. Before you decide on [how much autonomy an agent should really have](/products/ai-agents-platforms/autonomous-ai-agents), it helps to be clear which of the three your problem actually needs.',
    ],
    points: [
      { title: 'Chatbot', description: 'Answers questions in a conversation. Useful for information, but it does not usually change anything in your systems.' },
      { title: 'Automated Workflow', description: 'Runs the same steps every time a trigger fires. Reliable and cheap, but stuck when the input does not match the rule.' },
      { title: 'AI Agent', description: 'Interprets the request, gathers information, picks the next allowed action and carries the task across several systems.' },
      { title: 'Best Fit for an Agent', description: 'Tasks with messy inputs, several possible paths and a clear definition of what “done” looks like.' },
      { title: 'Better Left to a Workflow', description: 'Tasks where the steps never change. Adding an agent there only adds cost and unpredictability.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Business AI Agents Can Handle',
    intro:
      'Each agent is built for one clearly scoped job and given only the tools and data that job requires. These are the capabilities we combine most often, chosen per agent rather than switched on by default.',
    items: [
      { title: 'Request Understanding', description: 'Reads emails, tickets, chat messages and form notes written in ordinary language and works out what is being asked.' },
      { title: 'Information Gathering', description: 'Looks up records in your CRM, ERP, helpdesk or database so it acts on current facts, not assumptions.' },
      { title: 'Answers From Your Documents', description: 'Searches your policies, manuals and past files and answers with a reference to the source it used.' },
      { title: 'Multi-Step Task Completion', description: 'Carries a task through several actions in sequence, such as checking, updating, drafting and notifying.' },
      { title: 'Record Updates', description: 'Writes notes, statuses and fields back into connected systems so records stay current without manual entry.' },
      { title: 'Drafting for Review', description: 'Prepares replies, summaries and outreach drafts for a person to edit and send.' },
      { title: 'Approval Requests', description: 'Pauses before important or sensitive actions and sends the proposed step to the right person to approve.' },
      { title: 'Escalation With Context', description: 'Hands stuck cases to a person with what it tried, what it found and where it stopped.' },
      { title: 'Action Logging', description: 'Records every step the agent takes, so you can see what it did and why after the fact.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an AI Agent Handles a Task From Request to Result',
    intro:
      'Whatever the job, a well-built agent follows the same controlled loop. The example here is a supplier email asking why an invoice has not been paid.',
    steps: [
      { title: 'Receive the Request', description: 'The email arrives in the accounts inbox and the agent is triggered to handle it.' },
      { title: 'Understand It', description: 'The agent identifies the supplier, the invoice number mentioned and the question being asked.' },
      { title: 'Gather Facts', description: 'It looks up the invoice in the accounting system and checks its status, approver and any notes.' },
      { title: 'Choose the Next Step', description: 'From the actions it is allowed to take, it picks one: draft a status reply, or chase the approver internally.' },
      { title: 'Check With a Person', description: 'Anything outside its limits, such as a disputed amount, goes to the finance team with the full trail attached.' },
      { title: 'Report the Outcome', description: 'The agent logs what it did, updates the record and leaves a short summary for the team to see.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What AI Agents Change for Your Team',
    intro:
      'The value of an agent is not that it replaces people. It is that the research, lookups and record-keeping around a decision are done before a person arrives to make it.',
    items: [
      { title: 'Prepared Work, Not Raw Inputs', description: 'Staff open a case that has already been read, researched and summarized, instead of starting from a blank inbox.' },
      { title: 'Systems That Stay Current', description: 'Agents write their findings back into the CRM or ERP as part of the task, so records do not lag behind reality.' },
      { title: 'Fewer Dead Ends', description: 'Requests that do not fit a template are interpreted rather than dropped, so less work falls through the gaps.' },
      { title: 'Consistent Handling', description: 'Every request is checked against the same information and rules, whoever happens to be on shift.' },
      { title: 'Clear Accountability', description: 'Action logs and approval records show exactly what the agent did and who signed off on what.' },
      { title: 'Room to Grow', description: 'Higher volumes of routine requests are absorbed by the agent while your team focuses on the harder cases.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Guardrails and Oversight',
    heading: 'Where AI Agents Act and Where People Decide',
    paragraphs: [
      'An AI agent is not a fully autonomous system that runs your business unsupervised, and we do not build it as one. Each agent has a narrow job, a short list of actions it may take and a clear rule for when to stop and ask. Reading, looking up and drafting are usually safe to leave with the agent. Changing money, contracts, customer commitments or anything hard to undo goes to a person first.',
      'Those limits are set in discovery and written down before the build starts. After launch, every action is logged and the agent is monitored, so you can see where it hesitates, where it escalates and where its instructions need tightening. Iteration after launch is part of the plan, with its scope agreed in your quote.',
    ],
    aiDoes: [
      'Reads and interprets incoming requests',
      'Looks up records across connected systems',
      'Answers from your documents with sources',
      'Drafts replies, notes and summaries',
      'Updates fields and statuses it is allowed to change',
      'Escalates unclear cases with full context',
    ],
    peopleDo: [
      'Define the agent’s job, tools and limits',
      'Approve important or sensitive actions',
      'Handle escalations and exceptions',
      'Review logs and decide what changes next',
    ],
  },

  spotlight: {
    eyebrow: 'Use Cases',
    heading: 'Where AI Agents for Business Earn Their Place',
    paragraphs: [
      'The best first agent sits on a task that is frequent, needs some reading or judgment, and currently eats into the time of someone skilled. Lead research and qualification is a common example. A sales development rep might spend the first part of each day looking up new sign-ups, checking company size and industry, and deciding who deserves a call. An agent can do that groundwork overnight and leave a ranked, annotated list in the CRM by morning.',
      'Support triage is another. Instead of a person reading every ticket to work out what it is about, an agent investigates first: it reads the message, pulls up the customer’s orders and history, drafts a likely reply and routes the ticket to the right queue. The agent does the investigation; your support team keeps the conversation.',
    ],
    points: [
      { title: 'Sales and Lead Research', description: 'Account research, lead qualification, CRM updates and outreach preparation for reps to review.' },
      { title: 'Support Triage', description: 'Tickets read, investigated against order and account data, drafted and routed to the right person.' },
      { title: 'Back-Office Work', description: 'Invoice processing, reconciliation checks and record updates, with exceptions sent to the finance team.' },
      { title: 'Onboarding and Documents', description: 'Client onboarding steps and document-driven processes moved forward, with gaps chased and flagged.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Industry Applications',
      heading: 'How Different Industries Use Business AI Agents',
      accentWords: 3,
      paragraphs: [
        'The underlying pattern is the same across sectors: read a request, gather facts, take a permitted step, involve a person where it counts. What changes is the data, the systems and where the line for human approval sits. A software company may let an agent update a trial account’s CRM fields freely, while a law firm will want every outgoing document reviewed by an attorney.',
        'The examples below are general applications we see in each sector. Which of them suits your business, and with which systems, is scoped per project in discovery rather than offered as a ready-made package.',
      ],
      points: [
        { title: 'SaaS Companies', description: 'Trial sign-up research, account health summaries for customer success and ticket triage against product usage data.' },
        { title: 'Ecommerce', description: 'Order status questions investigated against the store and shipping data, with refunds and exceptions left to staff.' },
        { title: 'Professional Services', description: 'Client onboarding packs chased and checked, and project records updated from emails and meeting notes.' },
        { title: 'Finance and Accounting', description: 'Supplier queries answered from the accounting system and reconciliation exceptions prepared for review.' },
        { title: 'Law Firms', description: 'Searching the firm’s own case files and precedents for a fee earner, with every legal decision kept with an attorney.' },
      ],
    },
    {
      eyebrow: 'Which Page Fits',
      heading: 'Match Your Agent Question to the Right Page',
      accentWords: 3,
      paragraphs: [
        'AI agents raise different questions depending on where you are. Some teams are still working out what an agent could do for them; others already have a use case and want to know what it will be built on, how it will be governed or who should build it. The five pages in this range are split by those questions.',
        'Most businesses should start with one well-scoped agent before considering [multi-agent systems](/products/ai-agents-platforms/multi-agent-systems), where several specialized agents share a process. That design is worth it for some workflows, but it is scoped per project, and a single agent that works reliably is the right foundation either way.',
      ],
      points: [
        { title: '“What would we build it on?”', description: 'AI Agent Platform: the model, tools, retrieval, guardrails, monitoring and deployment that make up an agent stack.' },
        { title: '“Who builds it, and how?”', description: 'AI Agent Development: our service from discovery and prototype through integration, testing and launch.' },
        { title: '“How much should it do on its own?”', description: 'Autonomous AI Agents: levels of autonomy, guardrails and when an agent should stop and escalate.' },
        { title: '“One agent isn’t enough for this process”', description: 'Multi-Agent Systems: when coordinated specialist agents help, and when a single agent is the better answer.' },
        { title: '“We need this across departments”', description: 'Enterprise AI Agents: ownership, role-based access, approvals, logs and staged rollout in larger organizations.' },
      ],
    },
    {
      eyebrow: 'Honest Fit',
      heading: 'When an AI Agent Is the Wrong Answer',
      accentWords: 3,
      paragraphs: [
        'Not every problem needs an agent. If the steps are always the same, a standard automated workflow is cheaper, faster and easier to maintain. If the task needs real expertise or relationships, an agent may help with preparation but should not own the outcome. We would rather tell you that in an audit than build something more complex than the job requires.',
        'Agents also depend on access. If the information an agent needs lives only in someone’s head, or in a system with no API or export, the first step may be getting that data into a usable place, not building the agent itself.',
      ],
      points: [
        { title: 'Fixed, Predictable Steps', description: 'A rule-based workflow will do the job with less cost and less to go wrong.' },
        { title: 'Rare Tasks', description: 'Something done a few times a year rarely justifies the design and testing an agent needs.' },
        { title: 'No Reachable Data', description: 'An agent cannot act on information it cannot access, so the data question comes first.' },
        { title: 'High-Stakes Judgment', description: 'Legal, financial or personnel decisions stay with qualified people, with the agent preparing the groundwork.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Uses AI Agents for Business',
    items: [
      { title: 'Business Owners', description: 'Owners who want routine research, follow-up and record-keeping handled without adding headcount for it.' },
      { title: 'Operations Managers', description: 'Managers whose teams lose time investigating requests before they can act on them.' },
      { title: 'Sales and RevOps Leaders', description: 'Teams that want leads researched, qualified and logged in the CRM before reps pick them up.' },
      { title: 'Support Leads', description: 'Support managers who want tickets investigated and routed so agents can focus on the reply.' },
      { title: 'Finance and Back-Office Teams', description: 'Teams handling supplier queries, record updates and exceptions across accounting and ERP systems.' },
      { title: 'IT and Digital Leaders', description: 'Decision-makers who want agents built inside their own environment, with access and logging they control.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Systems Business AI Agents Connect To',
    paragraphs: [
      'An agent is only as useful as the systems it can reach. We connect agents to CRMs such as Salesforce, HubSpot and Zoho, ERPs such as SAP, NetSuite and Oracle, internal APIs and databases, email, Slack, Microsoft Teams, helpdesks and cloud storage, wherever an API exists. Connections run through REST APIs, webhooks and MCP connectors, and each agent is given only the access its job needs. What can be connected in your stack is confirmed in discovery.',
      'The model is chosen per task and cost: GPT from OpenAI, Claude, Gemini or an open-source model. Agents are deployed in your environment on AWS, Azure or GCP with role-based access. For larger organizations rolling agents out across several teams, our page on [enterprise AI agents with governance built in](/products/ai-agents-platforms/enterprise-ai-agents) covers ownership, approvals and staged rollout.',
    ],
    groups: [
      { label: 'CRMs', items: ['Salesforce', 'HubSpot', 'Zoho'] },
      { label: 'ERPs and Data', items: ['SAP', 'NetSuite', 'Oracle', 'Internal APIs', 'Databases'] },
      { label: 'Communication', items: ['Email', 'Slack', 'Microsoft Teams', 'Helpdesks', 'Cloud storage'] },
      { label: 'AI Models', items: ['OpenAI GPT', 'Claude', 'Gemini', 'Open-source models'] },
      { label: 'Frameworks and Connectors', items: ['LangChain', 'LlamaIndex', 'CrewAI', 'AutoGen', 'REST APIs', 'Webhooks', 'MCP'] },
      { label: 'Cloud', items: ['AWS', 'Azure', 'GCP'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your AI Agents With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency, not an agent software vendor. We build each agent around your process and hand it over running in your environment.',
    items: [
      { title: 'Built Around Your Workflow', description: 'Every agent is designed for your tools, data and rules rather than adapted from a generic template.' },
      { title: 'Narrow Scope First', description: 'We start with one clearly defined job, prove it works, then widen what the agent handles.' },
      { title: 'Guardrails From Day One', description: 'Approval points, action limits and escalation rules are part of the design, not added after a mistake.' },
      { title: 'Model-Agnostic', description: 'We pick the model that suits each task and its cost, and can change it later without starting over.' },
      { title: 'Visible Behavior', description: 'Action logs and monitoring show what the agent did, so you are never guessing.' },
      { title: 'You Own the Result', description: 'The agent, its configuration and documentation are yours, and you pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Put Your First AI Agent to Work',
    intro:
      'We begin with a single task that matters, prove it with a working prototype and only then build it out. For the full detail of each stage, see [our AI agent development process](/products/ai-agents-platforms/ai-agent-development).',
    steps: [
      { title: 'Free Audit', description: 'We look at where your team spends time reading, researching and updating, and pick a candidate task.' },
      { title: 'Discovery', description: 'The task, systems, data, allowed actions and approval points are mapped and agreed in writing.' },
      { title: 'Prototype', description: 'A working proof of concept runs on real examples so you can judge its output before full development.' },
      { title: 'Build and Integrate', description: 'The agent is developed and connected to your systems with only the access it needs.' },
      { title: 'Test and Launch', description: 'Normal, unusual and failure cases are tested before the agent goes live in your environment.' },
      { title: 'Monitor and Improve', description: 'Logs and escalations are reviewed after launch and the agent is refined, within the scope of your quote.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find the task your first agent should take on',
    heading: 'Give Your Team an Agent That Does the Groundwork',
    description:
      'Book a free, no-obligation AI agent audit. We will look at the work your team repeats, tell you honestly whether an agent, a simple workflow or neither is the right fit, and show what a first agent could take on.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Agents for Business: Common Questions',
  faqSideText: 'Not sure whether your problem needs an agent or a simpler workflow? Book a free audit and we will work it out with you.',
  faqs: [
    {
      question: 'What are AI agents for business?',
      answer:
        'They are AI assistants that can complete multi-step tasks inside your systems, not just answer questions. An agent reads a request, gathers information from tools such as your CRM or ERP, takes the next action it is allowed to take and reports what it did, asking a person before anything important or sensitive.',
    },
    {
      question: 'How is an AI agent different from a chatbot?',
      answer:
        'A chatbot mainly holds a conversation and answers questions. An agent also acts: it can look up a record, update a field, draft a reply and route a case. Many agents have no chat window at all and work in the background on emails, tickets or records.',
    },
    {
      question: 'What can AI agents do for a business?',
      answer:
        'Common jobs include researching and qualifying leads, keeping CRM records current, triaging support tickets, preparing sales outreach, moving onboarding forward, handling document-driven steps and back-office work such as invoice processing, reconciliation checks and exception handling.',
    },
    {
      question: 'Will an AI agent run without anyone supervising it?',
      answer:
        'No. Each agent works within a narrow scope and a defined set of actions, and pauses for human approval before important or sensitive steps. Every action is logged, and unclear cases are escalated to a person with full context.',
    },
    {
      question: 'Do we need an agent, or would a normal automation do?',
      answer:
        'If the steps are the same every time, a normal automated workflow is usually the better choice. Agents earn their cost when inputs are messy, there are several possible paths and some judgment is needed to choose between them. We will tell you which applies during the audit.',
    },
    {
      question: 'Which systems can an AI agent connect to?',
      answer:
        'CRMs such as Salesforce, HubSpot and Zoho, ERPs such as SAP, NetSuite and Oracle, internal APIs and databases, email, Slack, Microsoft Teams, helpdesks and cloud storage, wherever an API exists. Connections in your specific stack are confirmed in discovery.',
    },
    {
      question: 'Which AI models do your agents use?',
      answer:
        'We are model-agnostic. Depending on the task and its cost, an agent might use GPT from OpenAI, Claude, Gemini or an open-source model, and the model can be changed later if something better suited appears.',
    },
    {
      question: 'Can an agent answer questions from our own documents?',
      answer:
        'Yes. Using retrieval-augmented generation, an agent can search your policies, manuals or files and answer with a reference to the source, so your team can check where each answer came from.',
    },
    {
      question: 'Is this an AI agent platform we subscribe to?',
      answer:
        'No. Clickmasters is an agency. We build agents in your environment using the models, frameworks and cloud accounts that suit your project. You pay platform and AI usage costs directly, and you own the agents and their documentation.',
    },
    {
      question: 'Is our data safe with AI agents for business?',
      answer:
        'Agents are deployed in your own environment with role-based access and only the permissions their task requires, and every action they take is logged. Specific security requirements are agreed with you during scoping.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review the work your team repeats, agree a first agent worth building and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
