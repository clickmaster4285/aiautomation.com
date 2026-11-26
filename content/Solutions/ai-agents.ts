// content/Solutions/ai-agents.ts
export const aiAgents = {
  url: '/solutions/ai-agents',
  titleTag: 'AI Agents for Multi-Step Business Workflows | Clickmasters',
  metaDescription: 'AI agents that read context, run multi-step tasks across your systems within set guardrails and report back, while people approve key decisions.',
  primaryKeyword: 'ai agents',
  bookingLink: '/free-automation-audit',

  heroBadge: 'AI Agents',
  heroHeading:
    'AI Agents That Execute Multi-Step Business Workflows End to End',
  heroSubheading:
    'AI agents from Clickmasters go beyond chatbots and simple workflows. They interpret context, make decisions within defined guardrails, execute multi-step tasks across your systems, and report outcomes — while keeping humans in control of decisions that matter.',

  sections: {
    'Why Businesses Need AI Agents': [
      'Many business tasks require more than a single action or a fixed workflow: they involve reading information, making a decision, taking several steps across multiple systems, and following up when something goes wrong. Traditional automation handles the predictable pieces, but struggles when the task is complex or the input varies.',
      'AI agents close that gap. They can interpret unstructured inputs, plan the steps required, execute actions across connected systems, and adapt when the path changes — all within defined guardrails, with human review where it matters.',
    ],
    'The Problems This Solves': [
      '**Handle multi-step tasks that span multiple systems without manual coordination** The agent moves work from your CRM to email to helpdesk on its own, so nobody has to copy details between tools.',
      '**Interpret unstructured inputs (emails, documents, requests) as the starting point** We train the agent to read free-form messages and files, pull out the key details, and decide what work comes next.',
      '**Execute follow-up actions based on what the task actually needs** Instead of following one fixed path, the agent picks the next step from what it finds, such as chasing missing details or updating records.',
      '**Reduce manual coordination overhead between teams and tools** Your team stops chasing handoffs, status checks, and reminders because the agent tracks each task and passes it along with full context.',
      '**Keep humans in the loop for high-stakes or ambiguous cases** We set clear approval points so the agent pauses and routes sensitive or unclear decisions to the right person before acting.',
    ],
    'Where to Start: Your First Automation': [
      'Start with the task where your team spends the most coordination time — the one where someone reads something, decides what to do, takes three or four steps across systems, and follows up if it does not work.',
      'Typical starting points: lead research and qualification, customer onboarding, or support triage. A single well-scoped agent usually produces visible time savings in weeks and becomes the template for expanding AI to adjacent tasks.',
    ],
    'A Worked Example': [
      'A B2B sales team spends hours per week researching inbound leads before qualifying them: reading the inquiry, looking up the company, checking fit, drafting a personalized response, and logging everything in the CRM. An AI agent handles this end to end — reads the inquiry, enriches with company data, scores fit, drafts a response for human approval, updates the CRM, and alerts the right rep. Research and prep time drops from ~20 minutes per lead to under a minute, with humans making the final judgment.',
    ],
    "What This Is and Isn't": [
      'This is a practical AI agent that handles real business tasks end to end within defined guardrails. It reads, decides, executes, and reports — and knows when to escalate to a human.',
      'This is not a fully autonomous system that runs your business unsupervised. The agent operates within clear scope, with human review where decisions carry real risk or cost, and with monitoring so behavior stays predictable as scope expands.',
    ],
    'Built for Real Business Operations': [
      'Real business tasks have edge cases: missing information, unusual scenarios, decisions that depend on context the agent cannot see, and outcomes that should not happen automatically. We build AI agents with clear scope, explicit guardrails, monitoring, and hand-off paths — so agents stay useful without becoming unpredictable.',
    ],
    'What the Return Looks Like': [
      'Teams typically see reduced research and coordination time, faster response to inbound requests, more consistent decisions, and better use of senior team members who previously spent time on routine tasks. The return compounds as more tasks move into the agent layer — each additional agent benefits from the same integration foundation and monitoring.',
    ],
    'Why Clickmasters': [
      '**Custom AI agents designed around your actual tasks and tools** We map how your team really works today, then build each agent to fit those steps instead of forcing a generic template.',
      '**Practical use of AI where it adds value — not AI for the sake of AI** We use simple rules where they work and reserve AI reasoning for the steps that need judgment, keeping agents dependable and affordable.',
      '**Integrations with CRM, ERP, email, helpdesk, and cloud storage** We connect agents directly to the systems your team already uses, so they can read records and take action where work happens.',
      '**Human-in-the-loop review for high-stakes decisions** Agents prepare the work and draft the decision, then your team approves anything sensitive before it goes out or changes a record.',
      '**Monitoring and iteration so agents improve after launch** We log every agent action, review where it struggled or escalated, and refine its instructions and scope as your needs change.',
    ],
  },

  stats: [
    { value: 'Free', label: 'Automation Audit' },
    { value: '30 min', label: 'Audit Call, No Obligation' },
    { value: '1st', label: 'Highest-Return Workflow First' },
    { value: '100%', label: 'Ownership Guaranteed' },
  ],

  faqQuestions: [
    {
      question: 'What is an AI agent?',
      answer:
        'An AI agent is software that can interpret context, make decisions within defined guardrails, and execute multi-step tasks across connected systems. Unlike a single-purpose workflow, an AI agent can adapt the steps it takes based on what it finds.',
    },
    {
      question: 'How is an AI agent different from an AI chatbot?',
      answer:
        'AI chatbots primarily handle conversations. AI agents take action — they read inputs, plan steps, execute tasks across multiple systems, and report outcomes. Some agents include conversational interfaces, but their core purpose is execution.',
    },
    {
      question: 'How are AI agents kept reliable and predictable?',
      answer:
        'Reliability comes from clear scope, defined guardrails, monitoring, and human review for high-stakes decisions. We scope agents narrowly, log their actions, and iterate based on real outcomes — so they stay useful without becoming unpredictable.',
    },
    {
      question: 'Can AI agents connect to our existing tools?',
      answer:
        'Yes, where integrations or APIs exist. We connect agents to CRM systems, ERPs, email platforms, helpdesks, cloud storage, and custom business applications.',
    },
    {
      question: 'What happens when an AI agent cannot complete a task?',
      answer:
        'The agent escalates to a human with full context — what it tried, what it found, and where it got stuck. This is by design: agents should hand off cleanly when they are outside their scope or confidence.',
    },
    {
      question: 'What affects AI agent cost?',
      answer:
        'Cost depends on the complexity of the tasks automated, the number of integrations required, the amount of human review needed, and monitoring and iteration after launch.',
    },
  ],

  relatedSolutions: [
    {
      slug: 'ai-agents/for-accounting-firms',
      title: 'AI Agents for Accounting Firms',
      description:
        'AI agents for client onboarding, document processing, and compliance task automation at accounting firms.',
    },
    {
      slug: 'ai-agents/for-construction',
      title: 'AI Agents for Construction',
      description:
        'AI agents for project intake, subcontractor coordination, and documentation workflows in construction.',
    },
    {
      slug: 'ai-agents/for-ecommerce',
      title: 'AI Agents for Ecommerce',
      description:
        'AI agents for order handling, customer support, and inventory-driven operations in ecommerce.',
    },
  ],

  cta: 'Put AI Agents to Work in Your Business',

  // Page layout for app/solutions/[service]: section order, titles and page-specific props.
  page: {
    schema: { name: 'AI Agent Development', serviceType: 'AI Agent Development' },
    blocks: [
      {
        type: 'HeroSection',
        props: {
          primaryCta: { text: 'Book a Free Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'Learn More', href: '#why-ai-agents' },
          visual: {
            $element: 'AutomationHeroMockup',
            props: {
              industry: 'AI Agents',
              triggerLabel: 'New Business Task',
              actionLabels: ['Interpret Context', 'Execute Steps', 'Report Outcomes'],
              metricValue: '1,200',
              metricLabel: 'business tasks executed end-to-end this week',
              submetric: '80% less manual coordination',
              platform: 'AI Agents + Connected Business Systems',
              accent: '#F97316',
            },
          },
          breadcrumb: [
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'AI Agents', href: { $ref: 'url' } },
          ],
        },
      },
      {
        type: 'WhySection',
        section: 'Why Businesses Need AI Agents',
        props: { title: 'Why Businesses Need AI Agents' },
      },
      {
        type: 'ProblemsSection',
        section: 'The Problems This Solves',
        props: { title: 'The Problems This Solves' },
      },
      {
        type: 'StartSection',
        section: 'Where to Start: Your First Automation',
        props: { title: 'Where to Start: Your First Automation' },
      },
      {
        type: 'ExampleSection',
        section: 'A Worked Example',
        props: { title: 'A Worked Example' },
      },
      {
        type: 'BoundariesSection',
        section: 'What This Is and Isn\'t',
        props: { title: 'What This Is and Isn\'t' },
      },
      {
        type: 'RealitiesSection',
        section: 'Built for Real Business Operations',
        props: { title: 'Built for Real Business Operations' },
      },
      {
        type: 'ReturnSection',
        section: 'What the Return Looks Like',
        props: { title: 'What the Return Looks Like' },
      },
      {
        type: 'WhyUsSection',
        section: 'Why Clickmasters',
        props: { title: 'Why Clickmasters' },
      },
      { type: 'FAQSection', props: { title: 'Frequently Asked Questions', subtitle: 'Common questions about AI agents' } },
      { type: 'RelatedSolutions', props: { title: 'Explore Other Solutions', subtitle: 'More ways we can help you automate' } },
      {
        type: 'CTASection',
        props: {
          subtitle: 'Book a free automation audit — 30 minutes, no obligation, and an honest read on where AI agents pay off for your business.',
          primaryCta: { text: 'Book a Free Automation Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'View All Solutions', href: '/solutions' },
          background: 'light',
          showForm: true,
        },
      },
    ],
  },
};