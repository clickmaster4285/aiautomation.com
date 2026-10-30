// content/Solutions/ai-agents.ts
export const aiAgents = {
  url: '/solutions/ai-agents',
  titleTag: 'AI Agents Development Solutions | Clickmasters',
  metaDescription:
    'AI agents from Clickmasters handle multi-step business tasks end to end — interpreting context, executing actions, and updating your systems, with human review where it matters.',
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
      'Handle multi-step tasks that span multiple systems without manual coordination',
      'Interpret unstructured inputs (emails, documents, requests) as the starting point',
      'Execute follow-up actions based on what the task actually needs',
      'Reduce manual coordination overhead between teams and tools',
      'Keep humans in the loop for high-stakes or ambiguous cases',
    ],
    'What We Automate': [
      'Lead research and qualification across web, CRM, and enrichment sources',
      'Customer onboarding with multi-system account setup',
      'Document-driven processes: read, classify, extract, and act',
      'Support triage with investigation, response drafting, and routing',
      'Sales research: account analysis, contact discovery, and outreach preparation',
      'Back-office tasks: invoice processing, reconciliation, and record updates',
      'Exception handling and escalation when normal paths fail',
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
      'Custom AI agents designed around your actual tasks and tools',
      'Practical use of AI where it adds value — not AI for the sake of AI',
      'Integrations with CRM, ERP, email, helpdesk, and cloud storage',
      'Human-in-the-loop review for high-stakes decisions',
      'Monitoring and iteration so agents improve after launch',
    ],
  },

  stats: [
    { value: '80%', label: 'less manual coordination time' },
    { value: '3x', label: 'faster research and prep work' },
    { value: '24/7', label: 'execution of routine business tasks' },
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
};