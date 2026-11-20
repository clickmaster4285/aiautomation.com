// content/products/ai-agents-platforms/autonomous-ai-agents.ts
// Copy + SEO for /products/ai-agents-platforms/autonomous-ai-agents.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is what "autonomy" really means for a business agent: scoped autonomy inside guardrails, autonomy
//   vs rule-based automation, choosing an autonomy level per action, and escalation to a person with context.
//   Platform components belong to the AI Agent Platform sibling; the build service to AI Agent Development;
//   coordinated specialist agents to Multi-Agent Systems; governance at organization scale to Enterprise AI Agents.
// - NEVER imply unrestricted, unsupervised or fully independent decision-making. Site wording to respect:
//   agents are "not a fully autonomous system that runs your business unsupervised". Important or sensitive
//   actions wait for human approval; actions are logged; scope is narrow; monitoring and iteration follow launch.
// - The autonomy "levels" described here are design options agreed per task in scoping, not a product setting.
// - Systems named are the ones named in site sources (Salesforce, HubSpot, Zoho, SAP, NetSuite, Oracle, email,
//   Slack, Microsoft Teams, helpdesks, cloud storage; REST APIs, webhooks, MCP connectors; GPT, Claude, Gemini,
//   open-source models; LangChain, LlamaIndex, CrewAI, AutoGen).
// - No statistics, percentages, time-saved figures, prices, testimonials, customer names, guarantees,
//   certifications, uptime or ongoing-support promises beyond monitoring and iteration scoped in the quote.
// - Clickmasters builds agents in the client’s environment on platforms the client owns — not a SaaS product.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AUTONOMOUS_AI_AGENTS_PATH = '/products/ai-agents-platforms/autonomous-ai-agents';

export const autonomousAiAgentsSeo: HubSeo = {
  name: 'Autonomous AI Agents',
  path: AUTONOMOUS_AI_AGENTS_PATH,
  title: 'Autonomous AI Agents With Scoped Guardrails | Clickmasters',
  description:
    'Autonomous AI agents that complete multi-step tasks inside limits you set: they act on routine steps, ask approval for sensitive ones and escalate with context.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Agents & Platforms', path: '/products/ai-agents-platforms' },
    { name: 'Autonomous AI Agents', path: AUTONOMOUS_AI_AGENTS_PATH },
  ],
};

export const autonomousAiAgentsKeywords = [
  'autonomous AI agents',
  'autonomous agent systems',
  'AI agents that complete tasks',
  'agentic automation',
  'levels of autonomy for AI agents',
  'AI agent guardrails',
  'human-in-the-loop AI agents',
  'autonomous agents vs rule-based automation',
  'autonomous AI agents for business operations',
  'build autonomous AI agents',
  'how autonomous should an AI agent be',
  'are autonomous AI agents safe for business',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI agents for business', href: '/products/ai-agents-platforms', section: 'What Are Autonomous AI Agents?' },
  { anchor: 'AI agent solutions for operations teams', href: '/solutions/ai-agents', section: 'What Autonomy Means in Practice (explainer)' },
  { anchor: 'intelligent process automation', href: '/products/ai-workflow-business-process-automation/intelligent-process-automation', section: 'Where the Agent Decides and Where Your Team Decides' },
  { anchor: 'coordinated multi-agent systems', href: '/products/ai-agents-platforms/multi-agent-systems', section: 'Autonomous Agents vs Rule-Based Automation vs Multi-Agent Systems (extras)' },
  { anchor: 'how we develop and test AI agents', href: '/products/ai-agents-platforms/ai-agent-development', section: 'How We Set Up Your First Autonomous Agent' },
] as const;

export const autonomousAiAgents: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'Autonomous AI Agents',
    heading: 'Autonomous AI Agents That Finish the Work Within the Limits You Set',
    accentWords: 4,
    subheading:
      'We build AI agents that take a request, work out the next step, use your systems to complete it and report back. They act on their own where the step is routine and reversible, ask a person before anything important or sensitive, and hand over with full context when they get stuck.',
    primaryCta: { text: 'Book a Free AI Agent Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of a multi-step automated workflow across connected business apps with AI steps, representing an autonomous AI agent completing a task inside set limits',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Scoped autonomy', 'Multi-step tasks', 'Approval gates', 'Escalation with context', 'Action logs', 'Monitoring after launch'],
  },

  intro: {
    eyebrow: 'Autonomy, Defined Honestly',
    heading: 'What Are Autonomous AI Agents?',
    paragraphs: [
      'Autonomous AI agents are software that can be given a goal rather than a script. A request comes in, the agent reads it, looks up what it needs in your CRM, inbox or database, decides which action to take next and carries on until the task is done or it reaches a point where a person should decide. The “autonomous” part is that choice of next step, which a fixed workflow cannot make.',
      'In a business setting, that autonomy always has edges. An agent that qualifies inbound leads might update CRM fields on its own but leave the outreach email as a draft for a rep to send. An agent handling supplier queries might look up invoice status freely but never change bank details. Deciding where those edges sit, action by action, is most of the design work.',
      'This page explains how we approach autonomy within our wider range of [AI agents for business](/products/ai-agents-platforms): what agents can safely do alone, where approvals belong, and how to tell whether a task needs an agent at all. We are clear on one point from the start. What we build is not a system that runs your business unsupervised.',
    ],
    problems: [
      'Work arrives as emails, notes and messages that no fixed rule can sort reliably.',
      'Simple tasks need someone to look things up in three systems before acting.',
      'Rule-based automations break the moment a request does not match the expected pattern.',
      'Teams are wary of “autonomous AI” because nobody has explained what it would actually be allowed to do.',
      'Earlier AI pilots produced answers but could not take the next step in the systems where work happens.',
    ],
  },

  explainer: {
    eyebrow: 'Levels of Autonomy',
    heading: 'What Autonomy Means in Practice',
    paragraphs: [
      'Autonomy is not a single switch. It is a set of decisions about each action an agent might take: may it do this alone, should it prepare the action for approval, or should it only report what it found? A single agent usually works at several levels at once, acting freely on low-risk steps and stopping at the ones that matter.',
      'We agree these levels per action during scoping, using a simple test: how costly is it if the agent gets this wrong, and how easily can it be undone? Our overview of [AI agent solutions for operations teams](/solutions/ai-agents) shows the kinds of tasks where this approach is used.',
    ],
    points: [
      { title: 'Inform', description: 'The agent researches and reports. It gathers facts, summarizes them and leaves every action to a person.' },
      { title: 'Suggest', description: 'The agent recommends a next step, such as a lead score or a ticket category, for a person to accept or change.' },
      { title: 'Draft for Approval', description: 'The agent prepares the full action, such as an email or a record change, and waits for a named person to approve it.' },
      { title: 'Act and Notify', description: 'For routine, reversible steps, the agent acts on its own and tells the owner what it did.' },
      { title: 'Act and Log', description: 'For very low-risk steps, such as adding an internal note, the agent acts and records the action for later review.' },
      { title: 'Never Allowed', description: 'Some actions are outside the agent’s scope entirely, and it has no access that would let it attempt them.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our Autonomous AI Agents Can Do',
    intro:
      'Every agent is built around one workflow, your tools and your data, not a general template. These are the capabilities we combine, set to the autonomy level each step deserves.',
    items: [
      { title: 'Understand Unstructured Requests', description: 'Emails, chat messages, form notes and documents are read for intent, so the agent knows what is being asked before it acts.' },
      { title: 'Look Up Information Itself', description: 'The agent queries your CRM, ERP, helpdesk or document store to collect the facts a person would normally gather by hand.' },
      { title: 'Choose the Next Action', description: 'Within its guardrails, the agent picks the next step based on what it has found, rather than following one fixed path.' },
      { title: 'Complete Multi-Step Tasks', description: 'Research, record updates, drafting and routing happen in sequence across connected systems until the task is finished.' },
      { title: 'Answer From Your Documents', description: 'Retrieval from your own policies and files lets the agent ground its decisions and answers in your sources.' },
      { title: 'Approval Gates', description: 'Sensitive or important actions pause until a named person approves them, in email, Slack or Microsoft Teams.' },
      { title: 'Escalation With Context', description: 'When the agent cannot proceed, a person receives what it tried, what it found and where it got stuck.' },
      { title: 'Action Logging', description: 'Every action and decision is recorded, so you can review what the agent did and why after the fact.' },
      { title: 'Outcome Reporting', description: 'Each task ends with a short report to the owner or the source system, so nothing finishes silently.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an Autonomous Agent Works Through One Task',
    intro:
      'A worked example: an agent that handles inbound demo requests for a B2B software company. The same loop of read, look up, decide, act and report applies to most agent tasks.',
    steps: [
      { title: 'Receive', description: 'A demo request arrives through the website form with a company name, a work email and a free-text note about the problem.' },
      { title: 'Investigate', description: 'The agent checks the CRM for an existing account or open deal, then reviews the company details supplied and the note to understand the need.' },
      { title: 'Decide', description: 'It compares what it found with the qualification criteria you defined and decides whether this is a new lead, a duplicate or an existing customer.' },
      { title: 'Act Within Limits', description: 'Because CRM updates are reversible, it creates or updates the record and adds a summary on its own. That step is set to act and notify.' },
      { title: 'Wait for Approval', description: 'It drafts a tailored reply and books nothing. The draft goes to the assigned rep, because outbound email is set to draft for approval.' },
      { title: 'Escalate or Report', description: 'If the request looks like a partnership enquiry it was not scoped for, it routes the full context to a person instead of guessing.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Scoped Autonomy Gives Your Team',
    intro:
      'The value of an autonomous agent comes from removing the look-up-and-decide work around a task, while keeping people in charge of the decisions that carry risk.',
    items: [
      { title: 'Messy Inputs Handled', description: 'Requests that do not fit a form or a rule can still be understood and acted on.' },
      { title: 'Fewer Hand-Offs', description: 'The agent gathers context across systems itself instead of passing the task between people.' },
      { title: 'People Decide What Matters', description: 'Approvals sit exactly where your team wants them, not wherever the tool happens to allow.' },
      { title: 'Clear Escalations', description: 'When a person is needed, they start with the full story rather than a bare alert.' },
      { title: 'A Reviewable Record', description: 'Logged actions make it possible to check, explain and improve what the agent does.' },
      { title: 'Autonomy That Can Grow', description: 'Once an action has a track record your team trusts, its autonomy level can be raised deliberately.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Agent Plus People',
    heading: 'Where the Agent Decides and Where Your Team Decides',
    paragraphs: [
      'A useful way to think about autonomy is to separate judgment about information from judgment about consequences. Agents are good at the first: reading a vague request, working out what it refers to, finding the right record and suggesting what should happen. The second, deciding whether to commit money, change a customer’s terms or send something on the company’s behalf, stays with people unless you have explicitly agreed otherwise for a low-risk case.',
      'Not every judgment-heavy task needs an agent. When a process follows known steps but has a few points that need AI to read documents or classify requests, [intelligent process automation](/products/ai-workflow-business-process-automation/intelligent-process-automation) is often the simpler and more predictable choice. We recommend an agent when the path itself changes from one request to the next.',
    ],
    aiDoes: [
      'Reads and interprets unstructured requests',
      'Looks up records across connected systems',
      'Chooses the next step within its guardrails',
      'Updates records where it is allowed to',
      'Drafts messages and actions for approval',
      'Escalates with a summary of what it tried',
    ],
    peopleDo: [
      'Set the autonomy level for each action',
      'Approve sensitive and important actions',
      'Resolve escalations the agent cannot handle',
      'Review logs and decide when limits change',
    ],
  },

  spotlight: {
    eyebrow: 'Guardrails',
    heading: 'Guardrails That Keep Autonomous AI Agents in Scope',
    paragraphs: [
      'Guardrails are what make autonomy usable. They are not a disclaimer added at the end, but part of how the agent is built: which systems it can reach, which actions each connection allows, which outcomes need approval and what happens when something looks wrong. An agent that cannot technically perform an action is safer than one that has been asked politely not to.',
      'We design guardrails alongside the workflow, test them with awkward and adversarial examples before launch, and keep watching them afterwards. Monitoring and iteration after launch are part of the build, with the scope set in your quote.',
    ],
    points: [
      { title: 'Narrow Scope', description: 'Each agent has one clearly defined job and only the system access that job needs, granted through role-based permissions.' },
      { title: 'Action Limits', description: 'Connections are set up so the agent can read widely but write only where its scope allows.' },
      { title: 'Approval Thresholds', description: 'Actions above a value, outside a category or affecting customers wait for a named person.' },
      { title: 'Stop and Escalate', description: 'Low confidence, missing data or an unfamiliar request makes the agent stop and hand over rather than improvise.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Choosing Autonomy',
      heading: 'How to Choose the Right Level of Autonomy for Each Task',
      accentWords: 2,
      paragraphs: [
        'Teams new to agents often ask how much freedom to give them. Our answer is to start lower than feels necessary and raise it with evidence. An agent that drafts for approval for its first weeks builds a record of decisions your team can review. Steps that are consistently approved without changes are good candidates for more autonomy.',
        'Four questions decide the starting level for each action. They are worth asking even if you never build an agent, because they make clear which parts of a process carry real risk.',
      ],
      points: [
        { title: 'Can It Be Undone?', description: 'Reversible actions, such as an internal note or a draft, can move up the scale sooner than permanent ones.' },
        { title: 'Who Is Affected?', description: 'Actions visible to customers, suppliers or regulators usually keep a person in the loop.' },
        { title: 'What Does an Error Cost?', description: 'Steps that move money, change terms or delete data stay at draft for approval or outside the agent’s scope.' },
        { title: 'How Clear Is the Input?', description: 'Where requests are often ambiguous, the agent should suggest rather than act until patterns are understood.' },
      ],
    },
    {
      eyebrow: 'Where This Fits',
      heading: 'Autonomous Agents vs Rule-Based Automation vs Multi-Agent Systems',
      accentWords: 3,
      paragraphs: [
        'Rule-based automation follows a fixed path: when this happens, do that. It is cheaper, faster and more predictable, and it is the right choice whenever the steps are known in advance. An autonomous agent earns its place when the right next step depends on what it finds, such as which system holds the answer or whether a request is really a complaint.',
        'Some processes are large enough that one agent would need too many tools and too much context to stay reliable. In those cases, [coordinated multi-agent systems](/products/ai-agents-platforms/multi-agent-systems) split the work between specialized agents. We build a single, well-scoped agent first and only add more where the process genuinely calls for it.',
      ],
      points: [
        { title: 'Choose Rule-Based Automation When', description: 'The steps are the same every time and the inputs are structured.' },
        { title: 'Choose an Autonomous Agent When', description: 'Inputs are unstructured and the path changes depending on what the agent finds.' },
        { title: 'Consider Multiple Agents When', description: 'Distinct specialist jobs, such as research and checking, would overload a single agent.' },
        { title: 'Mix Them Freely', description: 'Many builds combine an agent for the judgment steps with plain workflow automation for everything else.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Autonomous AI Agents Are For',
    items: [
      { title: 'Operations Managers', description: 'Managers whose teams spend their day gathering context across systems before they can act on a request.' },
      { title: 'Sales and Revenue Teams', description: 'Teams that want leads researched, qualified and logged, with outreach drafted for reps to approve.' },
      { title: 'Support Leaders', description: 'Leaders who want tickets investigated, categorized and drafted before an agent picks them up.' },
      { title: 'Finance and Back Office', description: 'Teams handling invoice exceptions, reconciliation queries and record updates that need a look-up first.' },
      { title: 'Cautious First-Time Adopters', description: 'Businesses that want agent help but need clear limits on what it can do before they agree to it.' },
      { title: 'Teams Outgrowing Rules', description: 'Teams whose rule-based automations keep breaking on requests that do not fit the expected pattern.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Systems an Autonomous Agent Can Work Across',
    paragraphs: [
      'An agent is only as useful as the systems it can reach. We connect agents to CRMs, ERPs, helpdesks, internal databases, email, team chat and cloud storage where those systems offer APIs, using REST APIs, webhooks and MCP connectors. Each connection is given only the permissions the agent’s scope requires.',
      'We are model-agnostic. GPT, Claude, Gemini or an open-source model is chosen per task based on what it needs to do and what it costs to run, and frameworks such as LangChain, LlamaIndex, CrewAI or AutoGen are used where they suit the build. Exactly what can be connected in your stack is confirmed in the audit.',
    ],
    groups: [
      { label: 'CRMs', items: ['Salesforce', 'HubSpot', 'Zoho'] },
      { label: 'ERPs', items: ['SAP', 'NetSuite', 'Oracle'] },
      { label: 'Communication', items: ['Email', 'Slack', 'Microsoft Teams', 'Helpdesks'] },
      { label: 'AI Models', items: ['GPT (OpenAI)', 'Claude', 'Gemini', 'Open-source models'] },
      { label: 'Connections', items: ['REST APIs', 'Webhooks', 'MCP connectors', 'Internal databases'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Autonomous AI Agents With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We build agents around your workflow and systems, set their limits with you, and deploy them in your own environment.',
    items: [
      { title: 'Honest About Autonomy', description: 'We tell you plainly what an agent should and should not do alone, and we never sell unsupervised operation.' },
      { title: 'Limits Agreed in Writing', description: 'The autonomy level for each action is documented and signed off before the build starts.' },
      { title: 'Agents Only Where They Fit', description: 'If a rule-based workflow would do the job better, we recommend that instead.' },
      { title: 'Tested on Hard Cases', description: 'We test with ambiguous, incomplete and out-of-scope requests, not just tidy examples.' },
      { title: 'Watched After Launch', description: 'Monitoring and iteration after go-live are built into the project, as scoped in your quote.' },
      { title: 'You Own the Agent', description: 'The agent, its configuration and documentation are yours. You pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up Your First Autonomous Agent',
    intro:
      'We start with one task, set its autonomy levels conservatively and widen them only with evidence. For the full build sequence, see [how we develop and test AI agents](/products/ai-agents-platforms/ai-agent-development).',
    steps: [
      { title: 'Free Audit', description: 'We review your workflows and identify a task where an agent would help and the risks are manageable.' },
      { title: 'Action Map', description: 'Every action the agent might take is listed, with its autonomy level, approver and escalation path agreed.' },
      { title: 'Prototype', description: 'A working proof of concept runs on real examples so your team can see how the agent reasons and where it stops.' },
      { title: 'Build and Connect', description: 'The agent is developed, connected to your systems with scoped permissions and given its approval gates.' },
      { title: 'Supervised Launch', description: 'The agent goes live in your environment with tighter limits at first while your team reviews its decisions.' },
      { title: 'Review and Adjust', description: 'Logs and escalations are reviewed, and limits are raised or tightened based on what the evidence shows.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline, including the autonomy level agreed for each action.',
  },

  cta: {
    bandHeading: 'Decide what your agent may do alone',
    heading: 'Get Agent Help Without Giving Up Control',
    description:
      'Book a free, no-obligation AI agent audit. We will look at your workflows, suggest where an agent could take on real work, and map which actions should stay with your team.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Autonomous AI Agents: Common Questions',
  faqSideText: 'Unsure how much an agent should be trusted with in your business? Book a free audit and we will map it action by action.',
  faqs: [
    {
      question: 'What are autonomous AI agents?',
      answer:
        'Autonomous AI agents are AI systems that can take a goal, look up the information they need, choose the next action and complete multi-step tasks across connected systems. In business use, that autonomy is limited to the actions you agree, with approvals and escalation for the rest.',
    },
    {
      question: 'Will an autonomous agent make decisions without anyone checking?',
      answer:
        'Only for the low-risk, reversible steps you explicitly allow, and even then the actions are logged. Important or sensitive actions wait for a person to approve them. We do not build agents that run your business unsupervised.',
    },
    {
      question: 'How is an autonomous agent different from a workflow automation?',
      answer:
        'A workflow follows a fixed path set in advance. An agent decides its next step based on what it finds, which helps when requests are unstructured or the path varies. Where the steps are always the same, a workflow is usually the better and cheaper choice.',
    },
    {
      question: 'What are the levels of autonomy for an AI agent?',
      answer:
        'We work with a simple scale: inform, suggest, draft for approval, act and notify, and act and log, plus actions that are never allowed. Each action an agent can take is placed on that scale during scoping, based on how costly and how reversible a mistake would be.',
    },
    {
      question: 'What happens when the agent is unsure or gets stuck?',
      answer:
        'It stops and escalates to a person, passing on what it tried, what it found and where it got stuck. The person can then finish the task or give the agent what it needs to continue.',
    },
    {
      question: 'Can we give the agent more autonomy later?',
      answer:
        'Yes, and that is how we recommend working. Once the logs show that a step is consistently handled well, you can raise its autonomy level. Limits can be tightened again just as easily.',
    },
    {
      question: 'Which tasks are good candidates for autonomous AI agents?',
      answer:
        'Tasks that start with an unstructured request and need information from several systems: lead research and qualification, support triage, client onboarding, invoice exceptions and record updates are common examples.',
    },
    {
      question: 'Can we review what the agent has done?',
      answer:
        'Yes. Agent actions are logged, so your team can see what was done, when and why. Those logs are also what we use to monitor and improve the agent after launch.',
    },
    {
      question: 'Which AI models do your agents use?',
      answer:
        'We are model-agnostic and choose between GPT, Claude, Gemini and open-source models based on the task and running cost. The model can be changed later if a better fit becomes available.',
    },
    {
      question: 'Is this an AI agent product we subscribe to?',
      answer:
        'No. Clickmasters is an agency. We build the agent around your workflow and deploy it in your environment. You pay platform and AI usage costs directly and own the agent and its documentation.',
    },
    {
      question: 'How do we get started with autonomous AI agents?',
      answer:
        'Book a free audit. We review your workflows, propose a first task with its autonomy levels mapped out and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
