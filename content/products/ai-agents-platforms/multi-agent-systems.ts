// content/products/ai-agents-platforms/multi-agent-systems.ts
// Copy + SEO for /products/ai-agents-platforms/multi-agent-systems.
//
// Accuracy rules for this page (keep them when editing):
// - Multi-agent systems are NOT an established Clickmasters product. Present them honestly: we build single,
//   well-scoped agents first; where a process genuinely needs coordinated specialized agents, a multi-agent
//   design (for example with CrewAI or AutoGen, the frameworks named on the site) is scoped per project in
//   discovery. Architecture patterns on this page are general industry patterns, not standard deliverables.
// - Focus is architecture and fit: orchestrator + specialists, pipeline, reviewer/checker; when multi-agent beats
//   a single agent and when it does not. Autonomy levels belong to the Autonomous AI Agents sibling; platform
//   components to AI Agent Platform; organization-wide governance to Enterprise AI Agents.
// - The worked example is illustrative ("how such a design could look"), not a delivered case.
// - Guardrails as on the rest of the site: human approval before important or sensitive actions, escalation
//   with context, narrow scope, action logging, monitoring and iteration after launch (scoped in the quote).
// - No statistics, percentages, time-saved figures, prices, testimonials, customer names, guarantees,
//   certifications or claims of unrestricted autonomy. Clickmasters is an agency, not a SaaS vendor.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const MULTI_AGENT_SYSTEMS_PATH = '/products/ai-agents-platforms/multi-agent-systems';

export const multiAgentSystemsSeo: HubSeo = {
  name: 'Multi-Agent Systems',
  path: MULTI_AGENT_SYSTEMS_PATH,
  title: 'Multi-Agent Systems and Agent Orchestration | Clickmasters',
  description:
    'Multi-agent systems explained: orchestrator, pipeline and reviewer patterns, when specialized agents beat one agent, and how we scope each design per project.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Agents & Platforms', path: '/products/ai-agents-platforms' },
    { name: 'Multi-Agent Systems', path: MULTI_AGENT_SYSTEMS_PATH },
  ],
};

export const multiAgentSystemsKeywords = [
  'multi-agent systems',
  'multi-agent orchestration',
  'agent orchestration',
  'specialized AI agents',
  'multi-agent architecture',
  'orchestrator and specialist agents',
  'CrewAI multi-agent development',
  'AutoGen multi-agent systems',
  'single agent vs multi-agent',
  'multi-agent system development for business',
  'when to use a multi-agent system',
  'how do multi-agent systems work',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI agents and platforms', href: '/products/ai-agents-platforms', section: 'What Are Multi-Agent Systems?' },
  { anchor: 'autonomous AI agents with scoped guardrails', href: '/products/ai-agents-platforms/autonomous-ai-agents', section: 'Who Decides in a Multi-Agent System' },
  { anchor: 'AI knowledge assistants', href: '/services/ai-knowledge-assistants', section: 'Three Common Multi-Agent Architectures (spotlight)' },
  { anchor: 'enterprise AI agents', href: '/products/ai-agents-platforms/enterprise-ai-agents', section: 'Single Agent vs Multi-Agent System vs Enterprise Rollout (extras)' },
  { anchor: 'components of an AI agent platform', href: '/products/ai-agents-platforms/ai-agent-platform', section: 'Frameworks and Systems for Multi-Agent Designs' },
] as const;

export const multiAgentSystems: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'Multi-Agent Systems',
    heading: 'Multi-Agent Systems, Designed Only Where One Agent Is Not Enough',
    accentWords: 4,
    subheading:
      'Some processes are too broad for a single AI agent to handle reliably. A multi-agent design splits the work between specialized agents with a clear coordinator. We start with one well-scoped agent, and where your process genuinely needs more, we scope a multi-agent architecture with you in discovery.',
    primaryCta: { text: 'Book a Free AI Agent Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of a multi-step automated workflow across connected apps with AI steps, representing specialized AI agents coordinating on one business process',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Orchestrator and specialists', 'Pipeline agents', 'Reviewer agents', 'Shared context', 'Human approval', 'Scoped per project'],
  },

  intro: {
    eyebrow: 'Several Agents, One Job',
    heading: 'What Are Multi-Agent Systems?',
    paragraphs: [
      'Multi-agent systems are AI setups in which several agents, each with its own narrow job, work together on one process. One agent might research a request, another might draft a response and a third might check the draft against your policies before a person sees it. A coordinator, or a fixed sequence, decides who works on what and when the task is finished.',
      'The appeal is focus. A single agent asked to research, decide, write and check everything has to carry a lot of instructions, tools and context at once, and its reliability can suffer. Splitting the work lets each agent have fewer tools, clearer instructions and a result that can be tested on its own.',
      'We want to be direct about where this sits in our [AI agents and platforms](/products/ai-agents-platforms) work. Multi-agent designs are not a packaged product we sell. We build single, well-scoped agents first, and where a process genuinely needs coordinated specialists, the architecture is scoped per project during discovery.',
    ],
    problems: [
      'One agent has been given so many tools and instructions that its behavior has become hard to predict.',
      'A process mixes very different jobs, such as research, writing and checking, that each need their own rules.',
      'Outputs need an independent check before a person sees them, not a model marking its own work.',
      'Vendors pitch “agent swarms” without explaining who is in charge or how failures are caught.',
      'Teams cannot tell whether their problem needs several agents or just a better-designed single one.',
    ],
  },

  explainer: {
    eyebrow: 'Single or Multiple',
    heading: 'When a Multi-Agent System Beats a Single Agent, and When It Doesn’t',
    paragraphs: [
      'More agents are not automatically better. Every extra agent adds model calls, running cost, hand-offs where context can be lost and more places for something to go wrong. A single agent with good tools and clear limits handles a surprising range of work, and it is easier to test, explain and maintain.',
      'A multi-agent design starts to make sense when the jobs inside a process are genuinely different from each other, when one step should be checked by something other than the step that produced it, or when parts of the work can run in parallel. These are the signals we look for in discovery.',
    ],
    points: [
      { title: 'Distinct Skills Needed', description: 'Research, calculation, drafting and checking each need different instructions, tools or data access.' },
      { title: 'Independent Checking', description: 'A separate reviewer agent tests output against rules the producing agent was not focused on.' },
      { title: 'Parallel Work', description: 'Several sources or records can be investigated at once, then combined into one result.' },
      { title: 'Stay Single for Coherent Jobs', description: 'The task is one coherent job that a well-scoped agent with a few tools already handles reliably.' },
      { title: 'Stay Single When Cost Matters', description: 'Cost per run matters more than the gain from splitting, or the volume is too low to justify the complexity.' },
    ],
  },

  features: {
    eyebrow: 'Design Elements',
    heading: 'What a Well-Designed Multi-Agent System Includes',
    intro:
      'When a project does call for several agents, these are the elements we design and agree with you. Each one is scoped to your process rather than taken from a template.',
    items: [
      { title: 'Clear Roles', description: 'Each agent has one defined job, written instructions and a test set that shows whether it does that job well.' },
      { title: 'Orchestration Logic', description: 'A coordinator agent or a fixed sequence decides which agent works next and when the task is complete.' },
      { title: 'Scoped Tool Access', description: 'Each agent can reach only the systems and actions its role needs, through role-based permissions.' },
      { title: 'Shared Context', description: 'Findings are passed between agents in a structured form, so details are not lost at each hand-off.' },
      { title: 'Reviewer Checks', description: 'A checking agent tests drafts and decisions against your rules and sources before anything moves on.' },
      { title: 'Grounding in Your Documents', description: 'Agents that need facts retrieve them from your own files and records, with sources attached.' },
      { title: 'Human Approval Points', description: 'Important or sensitive actions wait for a named person, however many agents worked on them first.' },
      { title: 'Stop Conditions', description: 'Limits on steps and retries stop agents from looping, and send the task to a person instead.' },
      { title: 'End-to-End Logging', description: 'Every agent’s input, output and action is recorded, so a result can be traced back step by step.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How a Multi-Agent Design Could Handle One Support Case',
    intro:
      'An illustrative example of an orchestrator-and-specialists design for a support team, of the kind we might scope in discovery. A single triage agent can often do much of this; the split is worth it only when each role needs its own tools and checks.',
    steps: [
      { title: 'Coordinate', description: 'A coordinator agent reads an incoming ticket about a damaged delivery and a request for a refund, and decides which specialists are needed.' },
      { title: 'Investigate', description: 'An investigation agent looks up the order and shipping status in connected systems and collects the relevant history.' },
      { title: 'Check Policy', description: 'A policy agent retrieves the returns and refund rules from your documents and notes what they say about this case.' },
      { title: 'Draft', description: 'A drafting agent writes a reply and a proposed resolution using only the facts and policy passages it was given.' },
      { title: 'Review', description: 'A reviewer agent checks the draft against the policy and the order data, and sends it back if a claim is unsupported.' },
      { title: 'Hand to a Person', description: 'The support agent receives the draft, the evidence and the proposed refund, and approves, edits or rejects it.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What a Well-Scoped Multi-Agent System Can Offer',
    intro:
      'Where the fit is right, splitting work between specialized agents brings practical advantages. Where it is not, these benefits do not outweigh the extra cost and complexity, and we will say so.',
    items: [
      { title: 'More Predictable Agents', description: 'Narrow roles with fewer tools are easier to test and behave more consistently.' },
      { title: 'Built-In Second Opinion', description: 'A reviewer agent catches unsupported claims and rule breaks before a person spends time on them.' },
      { title: 'Easier Fault Finding', description: 'When something goes wrong, logs show which agent produced which step.' },
      { title: 'Change One Part at a Time', description: 'A single role can be improved or swapped without rebuilding the whole system.' },
      { title: 'Right Model per Role', description: 'Simpler roles can run on lower-cost models while harder ones use more capable ones.' },
      { title: 'Room to Grow', description: 'New specialist roles can be added later when the process expands.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Agents Plus People',
    heading: 'Who Decides in a Multi-Agent System',
    paragraphs: [
      'Adding agents does not add authority. A common worry is that several agents talking to each other will start making decisions nobody signed off. In the designs we scope, the opposite is true: agents pass work and findings between themselves, but the actions that matter still stop at a person, and every exchange is logged.',
      'Each agent in the system gets its own autonomy level, set by the same logic we use for single agents. If you want to understand how those levels are chosen action by action, our page on [autonomous AI agents with scoped guardrails](/products/ai-agents-platforms/autonomous-ai-agents) explains the approach in detail.',
    ],
    aiDoes: [
      'Splits a request into specialist tasks',
      'Investigates records and sources in parallel',
      'Retrieves relevant policy and reference text',
      'Drafts responses and proposed actions',
      'Checks drafts against rules and evidence',
      'Escalates cases that fall outside every role',
    ],
    peopleDo: [
      'Agree the roles and how they hand off',
      'Approve important and sensitive actions',
      'Handle escalations and unusual cases',
      'Review logs and decide what changes',
    ],
  },

  spotlight: {
    eyebrow: 'Architecture Patterns',
    heading: 'Three Common Multi-Agent Architectures',
    paragraphs: [
      'Most practical multi-agent architectures are variations on a few patterns. Knowing them helps you judge any proposal, including ours. The right pattern depends on whether the order of work is fixed, whether it changes per request and how much checking the output needs.',
      'Some processes need only one specialist role alongside a person. A retrieval-focused assistant that answers from your documents with sources, like the [AI knowledge assistants](/services/ai-knowledge-assistants) we build, is often the first specialist other agents would rely on.',
    ],
    points: [
      { title: 'Orchestrator and Specialists', description: 'A coordinator agent breaks the request down and calls specialist agents as needed. Suits requests whose path varies.' },
      { title: 'Pipeline', description: 'Agents work in a fixed order, each passing structured output to the next. Suits processes with stable stages, such as intake, enrichment and drafting.' },
      { title: 'Producer and Reviewer', description: 'One agent produces a draft and another checks it against rules and sources, returning it with reasons if it fails.' },
      { title: 'Combinations', description: 'Real designs often mix patterns, such as a pipeline whose final stage is a reviewer, with a person at the end.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Our Approach',
      heading: 'Why We Start With a Single Agent',
      accentWords: 2,
      paragraphs: [
        'Our default is one agent with a narrow job, the tools it needs and clear approval points. Building it first tells us a lot: which parts of the task it handles well, where it struggles and whether the struggle comes from too many responsibilities or from something else, such as missing data or unclear rules.',
        'If the single agent shows that a role should be separated, for example because its drafts need an independent check, we scope a multi-agent design with that evidence in hand, using frameworks such as CrewAI or AutoGen where they suit the job. The single agent is rarely wasted work; it often becomes one of the specialists.',
      ],
      points: [
        { title: 'Prove the Task First', description: 'A single agent shows whether the work can be automated reliably at all.' },
        { title: 'Split for a Reason', description: 'Roles are separated only where the evidence shows one agent is overloaded or needs checking.' },
        { title: 'Scoped in Discovery', description: 'Roles, hand-offs, frameworks and approval points are agreed before any multi-agent build.' },
        { title: 'Reuse What Works', description: 'Connections, test sets and guardrails from the first agent carry over to the wider design.' },
      ],
    },
    {
      eyebrow: 'Where This Fits',
      heading: 'Single Agent vs Multi-Agent System vs Enterprise Rollout',
      accentWords: 3,
      paragraphs: [
        'These three are often confused. A single agent handles one job end to end. A multi-agent system splits one process between specialists. An enterprise rollout is about something else again: running agents across several departments with consistent ownership, access control and logging, whether each of those agents works alone or in a team.',
        'If your main concern is governance, approvals and integration across business units, our page on [enterprise AI agents](/products/ai-agents-platforms/enterprise-ai-agents) covers that ground. Many organizations need a well-governed single agent long before they need a multi-agent system.',
      ],
      points: [
        { title: 'Single Agent', description: 'One coherent job, a handful of tools and clear limits. The right starting point for most teams.' },
        { title: 'Multi-Agent System', description: 'One process with distinct specialist roles, checks or parallel work that would overload a single agent.' },
        { title: 'Enterprise Rollout', description: 'Several agents across departments, with shared governance, access control and staged deployment.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Should Consider Multi-Agent Systems',
    items: [
      { title: 'Teams With a Working Agent', description: 'Teams whose first agent works but is now carrying too many responsibilities to stay reliable.' },
      { title: 'Processes That Need Checking', description: 'Workflows where output must be independently reviewed against policy before a person sees it.' },
      { title: 'Research-Heavy Work', description: 'Sales, onboarding or back-office tasks that gather information from several systems before acting.' },
      { title: 'Technical Leaders Evaluating Options', description: 'CTOs and heads of operations comparing single-agent and multi-agent proposals.' },
      { title: 'Teams Burned by Over-Built Pilots', description: 'Organizations whose earlier agent projects were complex, costly and hard to debug.' },
      { title: 'Growing Agent Programs', description: 'Businesses adding new tasks to an agent setup and wanting a structure that can take them.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Frameworks and Systems for Multi-Agent Designs',
    paragraphs: [
      'Where a project calls for coordinated agents, frameworks such as CrewAI and AutoGen help define roles and hand-offs, while LangChain and LlamaIndex are used for tool calling and retrieval. The choice is made per project. Agents connect to your CRM, ERP, helpdesk, internal databases, email and team chat through REST APIs, webhooks and MCP connectors where those systems allow it.',
      'Models are chosen per role, mixing GPT, Claude, Gemini and open-source options based on task and cost. For how models, tools, context, guardrails and monitoring fit together underneath any agent setup, see the [components of an AI agent platform](/products/ai-agents-platforms/ai-agent-platform).',
    ],
    groups: [
      { label: 'Agent Frameworks', items: ['CrewAI', 'AutoGen', 'LangChain', 'LlamaIndex'] },
      { label: 'AI Models', items: ['GPT (OpenAI)', 'Claude', 'Gemini', 'Open-source models'] },
      { label: 'Business Systems', items: ['Salesforce', 'HubSpot', 'Zoho', 'SAP', 'NetSuite', 'Oracle'] },
      { label: 'Communication', items: ['Email', 'Slack', 'Microsoft Teams', 'Helpdesks'] },
      { label: 'Connections', items: ['REST APIs', 'Webhooks', 'MCP connectors', 'Internal databases'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Scope Multi-Agent Systems With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency that builds custom agents in your environment. On multi-agent work, our main value is honest scoping: designing more agents only when the process needs them.',
    items: [
      { title: 'Single Agent First', description: 'We prove the task with one agent before proposing a more complex design.' },
      { title: 'Straight Talk on Fit', description: 'If a multi-agent system would add cost without adding reliability, we tell you.' },
      { title: 'Roles You Can Read', description: 'Each agent’s job, tools and limits are documented in plain language.' },
      { title: 'People Keep Authority', description: 'Approvals for important actions sit with your team, regardless of how many agents are involved.' },
      { title: 'Traceable Results', description: 'Logging across every agent means any output can be traced back step by step.' },
      { title: 'You Own the System', description: 'Agents, configuration and documentation are yours. You pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Scope a Multi-Agent System',
    intro:
      'Every multi-agent design starts as a conversation about one process. We decide together whether it needs several agents, and if not, what a single agent should do instead.',
    steps: [
      { title: 'Free Audit', description: 'We review the process, the systems involved and any agents or automations you already run.' },
      { title: 'Discovery', description: 'We map the jobs inside the process and test whether they are distinct enough to separate.' },
      { title: 'Architecture Design', description: 'If a multi-agent design fits, roles, pattern, hand-offs, approval points and frameworks are agreed in writing.' },
      { title: 'Prototype', description: 'A working proof of concept runs on real examples, so you can see how the agents coordinate and where they stop.' },
      { title: 'Build, Integrate and Test', description: 'Agents are developed, connected to your systems and tested individually and together, including failure cases.' },
      { title: 'Deploy and Monitor', description: 'The system goes live in your environment, with monitoring and iteration after launch as scoped in your quote.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline, and states whether the design uses one agent or several.',
  },

  cta: {
    bandHeading: 'Find out if you need one agent or several',
    heading: 'Get an Honest View of Your Agent Architecture',
    description:
      'Book a free, no-obligation AI agent audit. We will look at your process, tell you whether a single agent or a multi-agent system fits, and explain why.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Multi-Agent Systems: Common Questions',
  faqSideText: 'Wondering whether your process needs one agent or several? Book a free audit and we will give you a straight answer.',
  faqs: [
    {
      question: 'What are multi-agent systems?',
      answer:
        'Multi-agent systems are setups in which several AI agents, each with a narrow role, work together on one process. A coordinator or a fixed sequence decides which agent works next, and the results are combined before a person reviews the important actions.',
    },
    {
      question: 'Is a multi-agent system a product you offer off the shelf?',
      answer:
        'No. We build single, well-scoped agents first. Where a process genuinely needs coordinated specialist agents, we scope a multi-agent design for that project during discovery.',
    },
    {
      question: 'When is a multi-agent system better than a single agent?',
      answer:
        'When a process contains genuinely different jobs, when output needs an independent check, or when work can run in parallel. If one agent with a few tools handles the task reliably, a single agent is simpler and cheaper.',
    },
    {
      question: 'What is multi-agent orchestration?',
      answer:
        'Orchestration is the logic that decides which agent does what and when. It can be a coordinator agent that delegates to specialists, or a fixed pipeline in which each agent hands structured output to the next.',
    },
    {
      question: 'What are the main multi-agent architecture patterns?',
      answer:
        'The common ones are orchestrator and specialists, a fixed pipeline, and producer and reviewer. Many practical designs combine them, for example a pipeline whose last stage is a reviewer agent followed by a person.',
    },
    {
      question: 'Do multi-agent systems cost more to run?',
      answer:
        'Usually, yes, because each agent makes its own model calls. That is one reason we only recommend them where the gain is clear, and why simpler roles can run on lower-cost models.',
    },
    {
      question: 'Can several agents make decisions without a person?',
      answer:
        'Not for important or sensitive actions. Agents pass work between themselves, but those actions wait for human approval, and every step is logged so results can be traced.',
    },
    {
      question: 'Which frameworks do you use for multi-agent systems?',
      answer:
        'CrewAI and AutoGen are the frameworks we name for coordinated agents, alongside LangChain and LlamaIndex for tools and retrieval. The choice is made per project in discovery.',
    },
    {
      question: 'Can our existing agent become part of a multi-agent system?',
      answer:
        'Often, yes. A working single agent frequently becomes one of the specialists, keeping its connections, tests and guardrails. Whether that suits your setup is assessed in the audit.',
    },
    {
      question: 'How do you stop agents from looping or contradicting each other?',
      answer:
        'Designs include limits on steps and retries, structured hand-offs between agents and reviewer checks. When those limits are reached, the task goes to a person with the full log.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your process, recommend a single agent or a multi-agent design and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
