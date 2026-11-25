// content/products/general-ai-automation/end-to-end-ai-automation.ts
// Copy + SEO for /products/general-ai-automation/end-to-end-ai-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Owns the primary keyword "end-to-end AI automation": the delivery model in which one team carries a project
//   from the free audit through the published six-step process (discovery, strategy and mapping, development,
//   testing, deployment, monitoring and improvement), with a client decision gate at each stage. This page is about
//   how work is delivered, not what gets built; do not target company-level AI strategy (AI Strategy & Advisory)
//   or process optimization (AI Process Optimization sibling).
// - No SLAs, uptime figures, guarantees, timelines or ongoing-support promises. Monitoring and improvement after
//   launch is part of the process; scope and terms are agreed per project. Project length depends on scope and is
//   planned in discovery; never state durations.
// - Integrations are conditional: where the system offers an API or integration, confirmed during discovery.
//   Builds are scoped per project.
// - No statistics, percentages, prices, testimonials, case results, customer names, "leading/best" claims,
//   certifications or compliance claims.
// - The client approves the plan before anything is built, owns the automations, accounts and documentation, and
//   pays platform and AI usage costs directly.
//
// Inline links use [anchor text](/path). This page contains EXACTLY EIGHT contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const END_TO_END_AI_AUTOMATION_PATH = '/products/general-ai-automation/end-to-end-ai-automation';

export const endToEndAiAutomationSeo: HubSeo = {
  name: 'End-to-End AI Automation',
  path: END_TO_END_AI_AUTOMATION_PATH,
  title: 'End-to-End AI Automation, Audit to Launch | Clickmasters',
  description:
    'End-to-end AI automation from one team: discovery, mapping, build, testing and launch in your accounts, with your sign-off at each stage.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'General AI Automation', path: '/products/general-ai-automation' },
    { name: 'End-to-End AI Automation', path: END_TO_END_AI_AUTOMATION_PATH },
  ],
};

export const endToEndAiAutomationKeywords = [
  'end-to-end AI automation',
  'end-to-end automation services',
  'full-cycle AI automation',
  'AI automation implementation partner',
  'AI automation from strategy to deployment',
  'done-for-you AI automation',
  'turnkey AI automation',
  'AI automation project lifecycle',
  'AI automation agency process',
  'single-vendor automation delivery',
  'automation handover and documentation',
  'what end-to-end AI automation includes',
  'one team for AI automation strategy, build and launch',
  'AI automation project steps and decision gates',
  'what the client does during an automation project',
  'handover of automation documentation and access',
];

// The eight contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'the main ways to apply AI automation', href: '/products/general-ai-automation', section: 'What End-to-End Means in Practice (intro)' },
  { anchor: 'Clickmasters', href: '/', section: 'What End-to-End Means in Practice (intro)' },
  { anchor: 'company-level AI strategy and roadmaps', href: '/services/ai-strategy-advisory', section: 'Why Split Delivery Breaks at the Handoffs (explainer)' },
  { anchor: 'workflow automation that connects your tools', href: '/services/ai-workflow-automation', section: 'What We Build End to End (features)' },
  { anchor: 'AI agents that carry out multi-step tasks', href: '/services/ai-agent-development', section: 'What We Build End to End (features)' },
  { anchor: 'process optimization work', href: '/products/general-ai-automation/ai-process-optimization', section: 'What You Do and What You Get at Each Step (extras)' },
  { anchor: 'custom automation software', href: '/products/general-ai-automation/custom-ai-automation-software', section: 'What You Do and What You Get at Each Step (extras)' },
  { anchor: 'who we are and how we work', href: '/about', section: 'How an End-to-End Project Starts (getting started)' },
] as const;

export const endToEndAiAutomation: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'End-to-End AI Automation',
    heading: 'End-to-End AI Automation: One Team From Audit to Launch and Beyond',
    accentWords: 3,
    subheading:
      'Getting an automation live usually involves more people than expected. Clickmasters delivers end-to-end AI automation: one team carries the work from the first audit to a live, documented system in your accounts, and you approve each stage before the next one starts.',
    primaryCta: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/business.jpg',
    imageAlt:
      'Business illustration representing one team carrying an AI automation project from audit and planning through to launch',
    imageWidth: 1200,
    imageHeight: 628,
    marquee: ['Free automation audit', 'Discovery', 'Strategy and mapping', 'Development', 'Testing', 'Deployment', 'Monitoring and improvement'],
  },

  intro: {
    eyebrow: 'What End-to-End Means',
    heading: 'What End-to-End Means in Practice',
    paragraphs: [
      'End-to-end AI automation is a delivery model in which one team handles every stage of an automation project: auditing processes, mapping the workflow, building it, testing it, deploying it into your systems and improving it after launch. The client approves the plan before building starts and receives documentation and access at handover.',
      'This page is about how the work is delivered, not what gets built. For the kinds of automation themselves, see [the main ways to apply AI automation](/products/general-ai-automation). [Clickmasters](/) is an AI automation agency, so the same team that maps your process is the one that builds and launches it.',
    ],
    problems: [
      'Someone decides what to automate, someone else designs it, and a third party builds it.',
      'The builder has to guess the rules, exceptions and approval points.',
      'When a workflow fails, every party says it is someone else’s problem.',
      'Nobody has documentation for the whole system.',
      'Edge cases surface in production instead of in testing.',
    ],
  },

  explainer: {
    eyebrow: 'The Handoff Problem',
    heading: 'Why Split Delivery Breaks at the Handoffs',
    paragraphs: [
      'A common setup looks like this: a consultancy writes a strategy, a freelancer builds some workflows, and internal IT is asked to maintain them. Each party may do good work. The trouble is in between.',
      'Strategy on its own still has a place. If you need [company-level AI strategy and roadmaps](/services/ai-strategy-advisory) before choosing any project, that is a separate engagement. End-to-end delivery is for when you know you want something built and running.',
    ],
    points: [
      { title: 'Intent Gets Lost', description: 'The strategy says “automate lead follow-up”. The builder has to guess the rules, exceptions and approval points.' },
      { title: 'Nobody Owns the Gaps', description: 'When a workflow fails because a CRM field changed, the builder says it is an IT issue and IT says it is the builder’s code.' },
      { title: 'Documentation Is Thin', description: 'Each party documents its own piece, if at all, and nobody has the whole picture.' },
      { title: 'Testing Is Rushed', description: 'Edge cases surface in production because the people who knew about them were not in the room when it was built.' },
    ],
  },

  features: {
    eyebrow: 'What We Build',
    heading: 'What We Build End to End',
    intro:
      'The same delivery model applies whatever the build: [workflow automation that connects your tools](/services/ai-workflow-automation), moving data between systems without manual handoffs, or [AI agents that carry out multi-step tasks](/services/ai-agent-development), such as qualifying a lead or processing a request, and pass exceptions to your team. Each build is scoped per project.',
    items: [
      { title: 'Workflow Automation', description: 'Data moved between your systems without manual handoffs.' },
      { title: 'AI Agents', description: 'Multi-step tasks such as qualifying a lead or processing a request, with exceptions passed to your team.' },
      { title: 'Chatbots and Voice Agents', description: 'Conversational front ends for enquiries, scoped per project.' },
      { title: 'Reporting Automation', description: 'Reports and dashboards assembled from your systems, scoped per project.' },
      { title: 'Document and Invoice Processing', description: 'Information pulled from documents and invoices and checked before it is used, scoped per project.' },
      { title: 'System Integrations', description: 'Connections between the tools you already use, where an API or integration exists.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'The Six Steps, in Detail',
    intro:
      'Every project starts with a free audit and then follows the same six steps. Each one ends with a decision that sits with you.',
    steps: [
      { title: 'Before Step One: Free Audit', description: 'We review your current processes and tools, then tell you which tasks are worth automating first and which are not. There is no obligation.' },
      { title: 'Discovery', description: 'We learn how the chosen process actually runs, not how it is described in the handbook: talking to the people who do the work, looking at real examples and checking which systems are involved and what access they offer.' },
      { title: 'Strategy and Mapping', description: 'We design the automation on paper first. The map shows triggers, decision points, actions, integrations and approval points: exactly where a person signs off and what happens to exceptions.' },
      { title: 'Development', description: 'We build the workflow in your accounts on the agreed platforms, write the AI instructions and set up error handling, logging and escalation paths.' },
      { title: 'Testing', description: 'We test with realistic examples, including edge cases and failure scenarios: missing data, unexpected replies, system errors and requests the AI should not handle alone. Your team tries it too.' },
      { title: 'Deployment', description: 'The automation goes into your live environment. Documentation and access are handed over: how it works, where it runs, which accounts it uses and what to do when something needs attention.' },
      { title: 'Monitoring and Improvement', description: 'Once live, real usage shows where instructions, thresholds or rules need adjusting. Scope and terms are agreed per project.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What You Get From One Accountable Team',
    intro: 'When one team holds the whole line, the gaps between strategy, design and build disappear.',
    items: [
      { title: 'No Translation Losses', description: 'Nothing is lost between strategy, design and build.' },
      { title: 'One Place to Ask Questions', description: 'From the first audit to after launch.' },
      { title: 'Whole-System Documentation', description: 'Documentation that covers the whole system, not fragments.' },
      { title: 'Clear Decision Points', description: 'You are never surprised by what gets built.' },
      { title: 'Ownership at the End', description: 'Everything is in your accounts.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Human in the Loop',
    heading: 'What the Automation Does and What Your People Do',
    paragraphs: [
      'End to end does not mean hands off. A person approves wherever a decision needs judgment, and exceptions go to a person with context. Where those approval points sit is decided by you during strategy and mapping, before anything is built.',
      'In the sales enquiry example on this page, AI reads, classifies and drafts, while replies to existing customers and anything mentioning pricing wait for a rep to approve.',
    ],
    aiDoes: [
      'Captures each enquiry from form, email and phone messages',
      'Reads and classifies the enquiry',
      'Creates or updates the CRM record',
      'Drafts a first reply',
      'Routes qualified leads to the right rep',
    ],
    peopleDo: [
      'Decide where approval points sit',
      'Approve replies to existing customers and pricing mentions',
      'Handle exceptions passed on with context',
      'Approve the plan, testing and go-live',
    ],
  },

  spotlight: {
    eyebrow: 'Worked Example',
    heading: 'Example: One Workflow From Audit to Live',
    paragraphs: [
      'Say the audit shows that inbound sales enquiries wait too long for a first reply. Discovery reveals enquiries arrive through a web form, email and phone messages, and that reps copy details into the CRM by hand.',
      'Mapping defines the flow: capture each enquiry, have AI read it and classify it, create or update the CRM record, draft a first reply, and route qualified leads to the right rep. The approval point is agreed: replies to existing customers and anything mentioning pricing wait for a rep to approve.',
    ],
    points: [
      { title: 'Development', description: 'The workflow is built in your CRM and automation platform.' },
      { title: 'Testing', description: 'Past enquiries are run through it, including spam, duplicates and incomplete forms.' },
      { title: 'Deployment', description: 'Documentation and access are handed over.' },
      { title: 'Monitoring', description: 'Real usage shows which enquiry types still need instructions adjusted.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Your Role',
      heading: 'What You Do and What You Get at Each Step',
      accentWords: 4,
      paragraphs: [
        'Each step shows what happens, what you do and what you receive. During mapping, if the process has unnecessary steps, we flag them, and in some cases it is worth doing focused [process optimization work](/products/general-ai-automation/ai-process-optimization) before building anything.',
        'Most builds use platforms such as n8n, Make or Zapier. Where a platform cannot handle the logic or a system needs a bespoke connector, we write [custom automation software](/products/general-ai-automation/custom-ai-automation-software) components instead.',
      ],
      points: [
        { title: 'Free Audit', description: 'You do: a conversation about how work flows today. You get: a short list of candidates and an honest view of what to leave alone.' },
        { title: 'Discovery', description: 'You do: give us time with the people who run the process and access to example data or screens. You get: a clear picture of the current process, the systems it touches, which integrations look possible and where the tricky cases are.' },
        { title: 'Strategy and Mapping', description: 'You do: review the map, challenge it and decide where approvals sit. You get: a documented plan with scope, tools, integrations and the split between automated steps and human steps.' },
        { title: 'Development', description: 'You do: answer questions as they come up and provide any account access the build needs. You get: a working automation in a test setup, matching the approved plan.' },
        { title: 'Testing', description: 'You do: run real-world examples through it and tell us what looks wrong. You get: a tested automation and a record of what was tested and what was fixed.' },
        { title: 'Deployment', description: 'You do: brief the team who will work alongside it. You get: a live system you own, with the automations, accounts and documentation in your name. You pay platform and AI usage costs directly.' },
        { title: 'Monitoring and Improvement', description: 'You do: flag anything that does not behave as expected and share feedback from the team. You get: adjustments based on real cases, within the agreed scope.' },
      ],
    },
    {
      eyebrow: 'Decision Gates',
      heading: 'The Decision Gates at a Glance',
      accentWords: 2,
      paragraphs: [
        'Every stage ends with a decision that is yours. Approving the plan before anything is built is the most important decision point in the project.',
        'If you want to see where your first project would start, a free automation audit is the first gate, and it carries no obligation.',
      ],
      points: [
        { title: 'Free Audit', description: 'Whether to go further.' },
        { title: 'Discovery', description: 'Whether we have the process right.' },
        { title: 'Strategy and Mapping', description: 'Approve the plan before building.' },
        { title: 'Development', description: 'Agree any scope changes.' },
        { title: 'Testing', description: 'Confirm it is ready for live use.' },
        { title: 'Deployment', description: 'Sign off go-live.' },
        { title: 'Monitoring and Improvement', description: 'Extend, adjust or move to the next process.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who End-to-End AI Automation Suits',
    items: [
      { title: 'Teams Ready to Build', description: 'Businesses that know they want something built and running, not only a strategy document.' },
      { title: 'Teams Burned by Split Delivery', description: 'Companies whose strategy, build and maintenance were spread across separate parties and lost in the handoffs.' },
      { title: 'Teams With Partial Work Done', description: 'Businesses with an existing strategy, process map or automations that need to be reviewed and extended.' },
      { title: 'Sales and Support Teams', description: 'Teams whose enquiries, follow-ups or requests wait on manual copying between systems.' },
      { title: 'Operations Leaders', description: 'Managers who want one accountable team and clear decision points at every stage.' },
      { title: 'Owners Who Want to Own the Result', description: 'Businesses that want the automations, accounts and documentation in their own name.' },
    ],
  },

  integrations: {
    eyebrow: 'Tools We Deliver On',
    heading: 'Tools We Deliver On',
    paragraphs: [
      'We build on the platforms you use or the ones that suit the job, where the system offers an API or integration, confirmed during discovery: Zapier, Make and n8n (which can be self-hosted); CRMs such as HubSpot, Salesforce, Zoho, Pipedrive and GoHighLevel; AI models from OpenAI, Anthropic Claude, Google Gemini and open-source providers.',
      'Support tools such as Zendesk, Intercom and Freshdesk and communication tools including Slack, Microsoft Teams, Gmail, Outlook and Twilio are connected the same way. Connections use REST APIs, webhooks and MCP connectors.',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'Zoho', 'Pipedrive', 'GoHighLevel'] },
      { label: 'AI Models', items: ['OpenAI GPT', 'Anthropic Claude', 'Google Gemini', 'Open-source models'] },
      { label: 'Support', items: ['Zendesk', 'Intercom', 'Freshdesk'] },
      { label: 'Communication', items: ['Slack', 'Microsoft Teams', 'Gmail', 'Outlook', 'Twilio'] },
      { label: 'Connection Methods', items: ['REST APIs', 'Webhooks', 'MCP connectors'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Clickmasters for End-to-End AI Automation',
    intro: 'The people who map your process are the ones who build, test and launch it.',
    items: [
      { title: 'One Team Across Every Step', description: 'The people who mapped your process are the ones who build it.' },
      { title: 'Human in the Loop', description: 'A person approves wherever a decision needs judgment, and exceptions go to a person with context.' },
      { title: 'Your Accounts, Your System', description: 'You own the automations, accounts and documentation.' },
      { title: 'A Free Audit to Start', description: 'With no obligation to proceed.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How an End-to-End Project Starts',
    intro:
      'Every end-to-end project starts the same way: a clear look at how your work runs today and which tasks are worth automating first. Then it follows our published six steps. You can read more about [who we are and how we work](/about).',
    steps: [
      { title: 'Discovery', description: 'We learn how the process actually runs, which systems it touches and where the tricky cases are.' },
      { title: 'Strategy and Mapping', description: 'Triggers, decision points, actions, integrations and approval points are mapped. You approve the plan before anything is built.' },
      { title: 'Development', description: 'The workflow, AI instructions, error handling, logging and escalation paths are built in your accounts.' },
      { title: 'Testing', description: 'Realistic examples, edge cases and failure scenarios are run through it, and your team tries it too.' },
      { title: 'Deployment', description: 'It goes live in your environment, with documentation and access handed over.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'Each step ends with a decision, and approving the plan is a separate decision from building it. The free audit carries no obligation.',
  },

  cta: {
    bandHeading: 'Start with the audit',
    heading: 'Start With the Audit',
    description:
      'Every end-to-end project starts with a clear look at how your work runs today. Book a free automation audit and we will tell you where your first project should begin.',
    primary: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'End-to-End AI Automation: Common Questions',
  faqSideText: 'Want to see where your first project would start? Book a free automation audit, with no obligation to proceed.',
  faqs: [
    {
      question: 'What does end-to-end AI automation include?',
      answer:
        'It includes every stage from the audit to a live system: discovery, strategy and mapping, development, testing, deployment, and monitoring and improvement. One team handles all of them. You approve the plan before building starts and receive documentation and access at handover.',
    },
    {
      question: 'How long does an AI automation project take?',
      answer:
        'It depends on the scope, the number of systems involved and how many approval points and exceptions the process has. We map this during discovery and give you a realistic plan before anything is built. A single focused workflow is usually quicker than a process that spans several departments.',
    },
    {
      question: 'What do we need to provide during the project?',
      answer:
        'Time with the people who run the process, example data and access to the systems involved. You also make the decisions at each gate, most importantly approving the plan before development. We handle the design, build and testing work.',
    },
    {
      question: 'What happens after launch?',
      answer:
        'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project. Real usage shows where rules or AI instructions need adjusting. You can also decide to extend the automation or move to the next process.',
    },
    {
      question: 'Do we own the automation at the end?',
      answer:
        'Yes. The automations, accounts and documentation are yours, and you pay platform and AI usage costs directly. Access is handed over at deployment.',
    },
    {
      question: 'Can we stop after the plan?',
      answer:
        'Yes. Each step ends with a decision, and approving the plan is a separate decision from building it. The free audit carries no obligation either.',
    },
    {
      question: 'What if we already have part of the work done?',
      answer:
        'We start from where you are. If you already have a strategy, a process map or existing automations, discovery reviews them and the plan builds on what works. We will point out anything that needs changing before it is extended.',
    },
  ],
};
