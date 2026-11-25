// content/products/general-ai-automation/ai-process-optimization.ts
// Copy + SEO for /products/general-ai-automation/ai-process-optimization.
//
// Accuracy rules for this page (keep them when editing):
// - Owns the primary keyword "AI process optimization": hands-on analysis and redesign of one specific process
//   (interviews, walkthroughs of real cases, system data, as-is and to-be mapping) before it is automated.
//   Company-level roadmaps belong to AI Strategy & Advisory; the rules/AI/people design approach to the
//   Intelligent Business Automation sibling; delivery model to End-to-End AI Automation.
// - No process-mining claims. Clickmasters does NOT use process-mining software; say so where relevant.
// - Lawyers keep every legal decision; legal and other regulated examples are administrative workflows only.
// - Processes listed are examples, scoped per project. Integrations are conditional: where the system offers an
//   API or integration, confirmed during discovery.
// - No statistics, percentages, time-saved figures, prices, testimonials, case results, customer names,
//   "leading/best" claims, certifications, compliance claims, guarantees or SLAs. Monitoring and improvement after
//   launch is part of the process; scope and terms are agreed per project.
// - The client owns any resulting automations, accounts and documentation and pays platform and AI usage costs
//   directly.
//
// Inline links use [anchor text](/path). This page contains EXACTLY EIGHT contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_PROCESS_OPTIMIZATION_PATH = '/products/general-ai-automation/ai-process-optimization';

export const aiProcessOptimizationSeo: HubSeo = {
  name: 'AI Process Optimization',
  path: AI_PROCESS_OPTIMIZATION_PATH,
  title: 'AI Process Optimization Before You Automate | Clickmasters',
  description:
    'AI process optimization that maps how work really flows, removes wasted steps and redesigns the process before it is automated. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'General AI Automation', path: '/products/general-ai-automation' },
    { name: 'AI Process Optimization', path: AI_PROCESS_OPTIMIZATION_PATH },
  ],
};

export const aiProcessOptimizationKeywords = [
  'AI process optimization',
  'business process optimization with AI',
  'process mapping for automation',
  'process bottleneck analysis',
  'AI process improvement',
  'workflow optimization',
  'automation opportunity assessment',
  'process redesign before automation',
  'operations efficiency with AI',
  'process documentation for automation',
  'reduce manual handoffs',
  'should you optimize a process before automating it',
  'how to find bottlenecks in a business process',
  'as-is and to-be process mapping for AI',
  'removing steps before automating',
  'deciding where approvals sit in a redesigned process',
];

// The eight contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'the full range of AI automation options', href: '/products/general-ai-automation', section: 'What AI Process Optimization Is (intro)' },
  { anchor: 'the free automation audit', href: '/free-automation-audit', section: 'What AI Process Optimization Is (intro)' },
  { anchor: 'splitting the work between rules, AI and people', href: '/products/general-ai-automation/intelligent-business-automation', section: 'From Redesign to Automation (extras)' },
  { anchor: 'automating the redesigned operational process', href: '/services/business-process-automation', section: 'From Redesign to Automation (extras)' },
  { anchor: 'AI strategy and advisory', href: '/services/ai-strategy-advisory', section: 'How This Differs From AI Strategy (extras)' },
  { anchor: 'reporting automation', href: '/services/ai-reporting-automation', section: 'Processes That Benefit (extras)' },
  { anchor: 'matter intake and legal workflow redesign', href: '/products/industry-specific-ai-automation/ai-legal-automation', section: 'Processes That Benefit (extras)' },
  { anchor: 'one team carrying it through to launch', href: '/products/general-ai-automation/end-to-end-ai-automation', section: 'How the Work Runs (getting started)' },
] as const;

export const aiProcessOptimization: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'AI Process Optimization',
    heading: 'AI Process Optimization: Fix the Process, Then Automate It',
    accentWords: 3,
    subheading:
      'Automating a process that already has too many steps, handoffs and workarounds tends to produce a faster version of the same mess. We map how the work really runs, take out what does not need to exist, decide where AI and people fit, and only then automate. The goal is a simpler process first and a faster one second.',
    primaryCta: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of a multi-step workflow across connected apps, representing a business process mapped and simplified before it is automated',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Interviews', 'Walkthroughs of real cases', 'System data', 'As-is mapping', 'To-be design', 'Then automate'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What AI Process Optimization Is',
    paragraphs: [
      'AI process optimization is the analysis and redesign of a specific business process before automating it. It maps how work actually flows, finds handoffs, rework and waiting time, removes unnecessary steps, and defines a to-be process that shows where rules, AI and human approvals belong, ready to be automated.',
      'It is one of [the full range of AI automation options](/products/general-ai-automation) we offer, and it often begins with [the free automation audit](/free-automation-audit), which points to the processes worth looking at first.',
    ],
    problems: [
      'A step was added after one mistake and never removed.',
      'A spreadsheet appeared to cover a gap in the CRM.',
      'An approval was introduced for a manager who left years ago.',
      'The same details are typed into more than one system.',
      'Nobody is quite sure who owns some of the steps.',
    ],
  },

  explainer: {
    eyebrow: 'The Risk',
    heading: 'Why Automating a Messy Process Makes It Worse',
    paragraphs: [
      'Most processes were never designed. They grew. A step was added after one mistake, a spreadsheet appeared to cover a gap in the CRM, and an approval was introduced for a manager who left years ago. When that process is automated as it stands, the problems come with it.',
      'Removing a step is usually cheaper than automating it.',
    ],
    points: [
      { title: 'Workarounds Get Locked In', description: 'The automation copies the spreadsheet step instead of asking why the spreadsheet exists.' },
      { title: 'Rework Speeds Up', description: 'If information is often wrong at the start, automation simply moves the wrong information faster.' },
      { title: 'Exceptions Multiply', description: 'An unclear process produces many unclear cases, and each one ends up in someone’s inbox.' },
      { title: 'The Build Gets Bigger Than It Needs to Be', description: 'Every unnecessary step becomes another thing to build, test and maintain.' },
    ],
  },

  features: {
    eyebrow: 'What We Look For',
    heading: 'What We Look For in a Process',
    intro:
      'Once the as-is process is mapped, we mark the points where work is lost, repeated or stuck, and the decisions that genuinely need a person.',
    items: [
      { title: 'Handoffs', description: 'Each time work passes between people or teams, information can be lost and work can wait.' },
      { title: 'Rework', description: 'Steps that are repeated because something was missing or wrong earlier.' },
      { title: 'Waiting Time', description: 'Points where nothing happens until someone gets to it.' },
      { title: 'Duplicate Entry', description: 'The same details typed into more than one system.' },
      { title: 'Approvals That Add Nothing', description: 'Sign-offs that are always granted or that duplicate another check.' },
      { title: 'Unclear Ownership', description: 'Steps where nobody is quite sure who is responsible.' },
      { title: 'Judgment Points', description: 'Decisions that genuinely need a person and should stay with one.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How We Analyze a Process',
    intro:
      'We do not use process-mining software. The work is hands-on and based on four sources, brought together into a redesigned process ready to automate.',
    steps: [
      { title: 'Interviews With the People Who Do the Work', description: 'We talk to the people who run the process day to day, plus the people who receive its output. They know where things get stuck, which steps they skip and which ones they repeat.' },
      { title: 'Walkthroughs of Real Cases', description: 'We follow actual recent cases from start to finish, on screen, in the systems your team uses. Real cases reveal the detours that the official process description leaves out.' },
      { title: 'System Data', description: 'Where your systems allow, we look at exports, timestamps, status histories and inbox patterns to see where work waits and where it bounces back.' },
      { title: 'Mapping the As-Is Process', description: 'We bring this together in a map of the current process: each step, who does it, which system it touches, where it waits and where it loops back.' },
      { title: 'Designing the To-Be Process', description: 'Unnecessary steps are removed, approvals are placed on purpose and ownership is made clear at each step.' },
      { title: 'Labeling Each Remaining Step', description: 'Each step is marked as handled by fixed rules, by AI (reading, classifying, drafting) or by a person.' },
    ],
  },

  benefits: {
    eyebrow: 'What You Gain',
    heading: 'What You Gain From Optimizing First',
    intro: 'Wondering whether a process is ready to automate? A free automation audit is the quickest way to find out.',
    items: [
      { title: 'A Simpler Process', description: 'Steps removed rather than sped up.' },
      { title: 'Clear Ownership', description: 'A named owner at each step.' },
      { title: 'Approval Points Placed on Purpose', description: 'Sign-offs sit where judgment matters.' },
      { title: 'A Smaller, More Reliable Build', description: 'There is less to automate, test and maintain.' },
      { title: 'Process Documentation', description: 'A record of how the process should run, useful for training even before anything is automated.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Rules, AI and People',
    heading: 'Where AI Fits in the Redesigned Process',
    paragraphs: [
      'Once the to-be process is agreed, each remaining step gets a label: handled by fixed rules, handled by AI, or handled by a person. A good candidate for AI is repetitive, happens often and involves reading, sorting or drafting from varied input. If a task follows rules, plain automation may be enough.',
      'Steps that need real judgment stay with people, with AI preparing the information. A person approves wherever a decision needs it, and exceptions go to a person with context.',
    ],
    aiDoes: [
      'Reads and classifies varied input',
      'Drafts messages and summaries',
      'Checks returned documents for completeness',
      'Prepares information for the person who decides',
    ],
    peopleDo: [
      'Make the decisions that need judgment',
      'Sign off at the approval points placed on purpose',
      'Own each step of the redesigned process',
      'Approve the to-be plan before anything is built',
    ],
  },

  spotlight: {
    eyebrow: 'Worked Example',
    heading: 'Example: Client Onboarding, As-Is and To-Be',
    paragraphs: [
      'A typical example from a service business. Each point below shows the step as it runs today and how it looks after the redesign.',
      'In this example, a spreadsheet and a duplicate approval disappear before any automation is built. What remains is shorter, has one clear approval point and is easier to automate reliably.',
    ],
    points: [
      { title: 'Handover From Sales', description: 'As-is: the rep emails operations a summary; details are often missing. To-be: a signed deal triggers a structured intake form tied to the CRM record.' },
      { title: 'Data Entry', description: 'As-is: operations re-types client details into the project tool and a spreadsheet. To-be: details flow from the CRM into the project tool; the spreadsheet is removed.' },
      { title: 'Document Collection', description: 'As-is: staff email requests and chase replies by hand. To-be: an automated request with reminders; AI checks returned documents for completeness.' },
      { title: 'Review', description: 'As-is: two managers approve the same file separately. To-be: one named approver signs off, with the checklist pre-filled.' },
      { title: 'Kickoff', description: 'As-is: a coordinator schedules by email back-and-forth. To-be: the client books from available slots and the team is notified.' },
      { title: 'Status Updates', description: 'As-is: the client emails to ask for progress. To-be: updates are sent at agreed milestones.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Next Step',
      heading: 'From Redesign to Automation',
      accentWords: 2,
      paragraphs: [
        'Once the to-be process is agreed, each remaining step gets a label: handled by fixed rules, handled by AI (reading, classifying, drafting), or handled by a person. That split follows the approach we describe in [splitting the work between rules, AI and people](/products/general-ai-automation/intelligent-business-automation). For processes that run across departments and mostly follow clear rules, the next step is [automating the redesigned operational process](/services/business-process-automation).',
        'Not every improvement needs automation. Some changes are simply new rules, a shared form or a removed step. We point those out as well.',
      ],
      points: [
        { title: 'Rules', description: 'Fixed, predictable steps handled the same way every time.' },
        { title: 'AI', description: 'Reading, classifying and drafting from varied input.' },
        { title: 'People', description: 'Decisions that need judgment, with AI preparing the information.' },
        { title: 'No Automation Needed', description: 'New rules, a shared form or a removed step.' },
      ],
    },
    {
      eyebrow: 'Process vs Strategy',
      heading: 'How This Differs From AI Strategy',
      accentWords: 2,
      paragraphs: [
        'Process optimization works on one process at a time: how it runs, what to remove, what to automate. It answers “how should this process work?”',
        'Company-level questions are a different engagement. If you need to decide where AI fits across the business, build a roadmap or set priorities across departments, that is [AI strategy and advisory](/services/ai-strategy-advisory). The two fit together, but they are not the same thing.',
      ],
      points: [
        { title: 'Process Optimization', description: 'One process in depth: how it runs, what to remove and what to automate.' },
        { title: 'AI Strategy', description: 'Company level: where AI fits across the business and in what order.' },
      ],
    },
    {
      eyebrow: 'Use Cases',
      heading: 'Processes That Benefit, Scoped per Project',
      accentWords: 3,
      paragraphs: [
        'These are examples. Each is scoped per project. Recurring reports often involve figures copied between systems by hand before [reporting automation](/services/ai-reporting-automation) can take over.',
        'Matter intake at law firms is covered in more depth under [matter intake and legal workflow redesign](/products/industry-specific-ai-automation/ai-legal-automation). Lawyers keep every legal decision.',
      ],
      points: [
        { title: 'Client or Customer Onboarding', description: 'Details pass between sales, operations and finance.' },
        { title: 'Request Intake', description: 'Forms and emails arrive incomplete and need chasing.' },
        { title: 'Internal Approvals', description: 'Requests wait for sign-off with unclear rules.' },
        { title: 'Recurring Reports', description: 'Figures are copied between systems by hand.' },
        { title: 'Matter Intake at Law Firms', description: 'Intake redesigned as an administrative workflow. Lawyers keep every legal decision.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Process Optimization Is For',
    items: [
      { title: 'Operations Leaders', description: 'Managers who suspect a process is inefficient and want it analyzed before investing in automation.' },
      { title: 'Service Businesses', description: 'Teams whose client onboarding passes details between sales, operations and finance.' },
      { title: 'Teams Chasing Incomplete Requests', description: 'People whose forms and emails arrive incomplete and need chasing.' },
      { title: 'Approvers and Managers', description: 'Teams where requests wait for sign-off with unclear rules.' },
      { title: 'Reporting Teams', description: 'People copying figures between systems by hand for recurring reports.' },
      { title: 'Law Firm Intake Teams', description: 'Staff handling matter intake, with every legal decision left to lawyers.' },
    ],
  },

  integrations: {
    eyebrow: 'Tools and Systems',
    heading: 'Tools and Systems Involved',
    paragraphs: [
      'Optimization works with the systems you already have. We review the CRMs, helpdesks, spreadsheets, inboxes and databases a process touches, and the to-be design is built on platforms such as Zapier, Make and n8n, with AI models such as GPT, Claude or Gemini where reading or drafting is needed.',
      'Connections to CRMs such as HubSpot, Salesforce, Zoho or Pipedrive, and to tools like Airtable, Slack, Microsoft Teams, Gmail and Outlook, are made where the system offers an API or integration, confirmed during discovery.',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n'] },
      { label: 'AI Models', items: ['GPT', 'Claude', 'Gemini'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'Zoho', 'Pipedrive'] },
      { label: 'Data and Collaboration', items: ['Airtable', 'Spreadsheets', 'Databases'] },
      { label: 'Communication', items: ['Slack', 'Microsoft Teams', 'Gmail', 'Outlook'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Clickmasters for AI Process Optimization',
    intro: 'We look at the process before the technology, and we are honest about what does not need automating.',
    items: [
      { title: 'Willing to Say “Don’t Automate This”', description: 'If a step should be removed or stay manual, we say so.' },
      { title: 'People Stay in Charge of Judgment', description: 'A person approves wherever a decision needs it, and exceptions go to a person with context.' },
      { title: 'Built in Your Tools', description: 'Any resulting automation runs in your accounts. You own the automations, accounts and documentation, and you pay platform and AI usage costs directly.' },
      { title: 'Free Audit First', description: 'With no obligation to proceed.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'How the Work Runs',
    heading: 'How the Work Runs',
    intro:
      'Optimization sits inside our published process, mainly in the first two steps. You can stop after the redesign, or continue with [one team carrying it through to launch](/products/general-ai-automation/end-to-end-ai-automation).',
    steps: [
      { title: 'Discovery', description: 'Interviews, walkthroughs and system data on the chosen process.' },
      { title: 'Strategy and Mapping', description: 'The as-is map, the issues found and the to-be design, with triggers, decision points, actions, integrations and approval points.' },
      { title: 'Development', description: 'The redesigned process is automated in your systems.' },
      { title: 'Testing', description: 'Real cases run through it, including edge cases and failure scenarios.' },
      { title: 'Deployment', description: 'It goes live, with documentation and access handed over.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'You approve the plan before anything is built, and you can stop after the redesign.',
  },

  cta: {
    bandHeading: 'Fix one process first',
    heading: 'Fix One Process First',
    description:
      'Pick the process your team complains about most. A clear look at how it really runs is usually enough to show what to remove, what to automate and what to leave with people.',
    primary: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Process Optimization: Common Questions',
  faqSideText: 'Wondering whether a process is ready to automate? Book a free automation audit and we will look at it with you.',
  faqs: [
    {
      question: 'What is AI process optimization?',
      answer:
        'It is the analysis and redesign of a business process before it is automated. We map how the work runs today, remove unnecessary steps and define where rules, AI and people should each take over. The result is a simpler process that is ready to automate.',
    },
    {
      question: 'Should you optimize a process before automating it?',
      answer:
        'Usually, yes. Automating a process as it stands tends to lock in workarounds and duplicate steps. A short redesign first often means a smaller, more reliable automation.',
    },
    {
      question: 'How do you find bottlenecks in a business process?',
      answer:
        'We interview the people who do the work, walk through real recent cases and look at system data such as timestamps and status histories. Then we map the process and mark handoffs, rework and waiting time. Bottlenecks tend to show up where work waits for a person or loops back.',
    },
    {
      question: 'What makes a process a good candidate for AI?',
      answer:
        'A good candidate is repetitive, happens often and involves reading, sorting or drafting from varied input. If a task follows rules, plain automation may be enough. Steps that need real judgment should stay with people, with AI preparing the information.',
    },
    {
      question: 'How is process optimization different from AI strategy?',
      answer:
        'Process optimization looks at one process in depth and redesigns it. AI strategy works at company level, deciding where AI fits across the business and in what order. Many clients start with one and move to the other.',
    },
    {
      question: 'Do you use process-mining software?',
      answer:
        'No. Our analysis is based on interviews, walkthroughs, system data and mapping. That suits most growing businesses, where the most useful information sits with the people doing the work.',
    },
    {
      question: 'What do we receive at the end?',
      answer:
        'You receive an as-is map, a list of the issues found and a to-be process design showing approval points and what should be automated. You approve the plan before anything is built. You can then build it with us or stop there.',
    },
  ],
};
