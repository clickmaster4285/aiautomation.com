// content/products/ai-hr-recruitment/ai-hr-automation.ts
// Copy + SEO for /products/ai-hr-recruitment/ai-hr-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is HR admin workflows: onboarding steps, HR requests, HR documents, policy Q&A and
//   employee communications. Hiring, screening, interview scheduling and the employee record /
//   lifecycle angle belong to sibling pages — do not target their primary keywords here.
// - Verified on the site: RPA case where a bot handled new-hire account creation and system updates
//   (described as an example of the work, never with its outcome numbers); knowledge assistants in
//   Slack / Teams that answer from company documents via RAG, point to sources, say when the answer
//   is not in the content and respect existing permissions; sources named: Google Drive, Confluence,
//   SharePoint, Notion, Slack; document automation that extracts data from documents (OCR plus
//   language models) and escalates what it is unsure about; BPA pages list employee onboarding and HR.
// - Do NOT name HR systems or ATS products. Do NOT mention payroll, attendance, time-off tracking,
//   performance reviews or employee monitoring.
// - No statistics, prices, testimonials, certifications, compliance claims, guarantees, or
//   ongoing-support promises. Clickmasters builds inside the client's existing tools — not a SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_HR_AUTOMATION_PATH = '/products/ai-hr-recruitment/ai-hr-automation';

export const aiHrAutomationSeo: HubSeo = {
  name: 'AI HR Automation',
  path: AI_HR_AUTOMATION_PATH,
  title: 'AI HR Automation for Onboarding & HR Admin | Clickmasters',
  description:
    'AI HR automation built in your existing tools: onboarding steps, HR requests, documents and policy answers run as workflows, with HR approving what matters.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI HR & Recruitment', path: '/products/ai-hr-recruitment' },
    { name: 'AI HR Automation', path: AI_HR_AUTOMATION_PATH },
  ],
};

export const aiHrAutomationKeywords = [
  'AI HR automation',
  'HR workflow automation',
  'HR process automation',
  'automate employee onboarding',
  'onboarding automation for HR',
  'HR request automation',
  'HR document automation',
  'HR policy chatbot',
  'HR knowledge assistant',
  'automated employee communications',
  'HR admin automation',
  'how to automate HR tasks',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI HR and recruitment', href: '/products/ai-hr-recruitment', section: 'What Is AI HR Automation?' },
  { anchor: 'robotic process automation', href: '/services/robotic-process-automation', section: 'Onboarding Steps That Run in the Right Order (explainer)' },
  { anchor: 'AI knowledge assistant', href: '/services/ai-knowledge-assistants', section: 'Policy Answers in Slack or Teams, With Sources (spotlight)' },
  { anchor: 'AI employee management software', href: '/products/ai-hr-recruitment/ai-employee-management-software', section: 'HR Requests and Documents Without the Inbox Chase (extras)' },
  { anchor: 'AI recruitment software', href: '/products/ai-hr-recruitment/ai-recruitment-software', section: 'What AI Handles and What HR Decides' },
] as const;

export const aiHrAutomation: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'AI HR Automation',
    heading: 'AI HR Automation That Clears the Admin Off Your HR Team’s Desk',
    accentWords: 4,
    subheading:
      'We build AI HR automation inside the tools your people already use. Onboarding steps run in order, HR requests reach the right person, documents get processed, and routine policy questions are answered from your own handbook.',
    primaryCta: { text: 'Book a Free HR Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/bussiness.png',
    imageAlt: 'HR team reviewing automated onboarding tasks and employee requests with AI HR automation',
    imageWidth: 667,
    imageHeight: 374,
    marquee: ['Onboarding workflows', 'HR request routing', 'Document processing', 'Policy answers from your handbook', 'Employee communications'],
  },

  intro: {
    eyebrow: 'HR Admin, Automated',
    heading: 'What Is AI HR Automation?',
    paragraphs: [
      'AI HR automation means turning the repeatable parts of HR administration into workflows that run on their own. Rules handle the predictable steps, such as creating accounts or sending a checklist. AI handles the steps that involve reading or writing, such as pulling details from a form or answering a policy question from your documents.',
      'Most HR teams do not struggle with the big decisions. They struggle with volume. The same onboarding checklist gets rebuilt for every new starter. A simple request, like a letter confirming employment, sits in a shared inbox for days. People ask how many days of notice they owe, and someone stops what they are doing to find the policy.',
      'This page covers the admin side of [AI HR and recruitment](/products/ai-hr-recruitment): the tasks that keep HR running after someone is hired. Each workflow is scoped with you and built around the systems you already have.',
    ],
    problems: [
      'Onboarding depends on one person remembering every step for every new hire.',
      'HR requests arrive by email, chat and corridor, with no clear owner or status.',
      'Staff re-type details from forms and documents into several systems.',
      'The same policy questions reach HR every week, even though the answers are written down.',
    ],
  },

  explainer: {
    eyebrow: 'Onboarding, Step by Step',
    heading: 'Onboarding Steps That Run in the Right Order',
    paragraphs: [
      'Onboarding is usually the first HR workflow worth automating, because it is long, repetitive and easy to get wrong. Here is a typical flow we might scope. A start date is confirmed. The workflow creates the new hire’s accounts, updates the internal systems that need their details, and sends IT and the line manager their tasks. A welcome message with first-week information goes out, and HR sees a checklist that ticks itself off as each step completes.',
      'Some of those steps happen in systems with no clean way to connect. That is where [robotic process automation](/services/robotic-process-automation) fits: a software bot works through the screens the way a person would. We have used this approach for an HR team whose staff were creating accounts and updating systems by hand for every new hire.',
    ],
    points: [
      { title: 'Start-Date Trigger', description: 'A confirmed hire or start date kicks off the onboarding sequence.' },
      { title: 'Account and System Setup', description: 'Accounts are created and internal systems updated without manual re-typing.' },
      { title: 'Task Hand-Offs', description: 'IT, facilities and the line manager each receive the tasks that belong to them.' },
      { title: 'Live Checklist', description: 'HR can see which steps are done and which are waiting, for every starter.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our AI HR Automation Can Cover',
    intro:
      'These are the workflows HR teams most often bring to an audit. We confirm which ones suit your processes and tools before anything is built.',
    items: [
      { title: 'Onboarding Workflows', description: 'Checklists, account setup and task hand-offs that start from a confirmed hire.' },
      { title: 'Request Intake', description: 'One form or channel for HR requests, with each one logged and given an owner.' },
      { title: 'Request Routing', description: 'Requests are sent to the right person or team based on type and urgency.' },
      { title: 'Document Processing', description: 'Details are read from submitted forms and documents and passed to the right system for checking.' },
      { title: 'Letter and Form Drafts', description: 'Standard letters and forms are drafted from templates and employee details for HR to review.' },
      { title: 'Policy Q&A Assistant', description: 'Employees ask questions in Slack or Teams and get answers drawn from your HR documents.' },
      { title: 'Employee Announcements', description: 'Updates and reminders reach the right groups at the right time, written once and approved.' },
      { title: 'Approval Steps', description: 'Anything sensitive waits for a named person to approve it before the workflow continues.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an HR Request Moves Through an Automated Workflow',
    intro:
      'A request for an employment letter is a good example. The same pattern applies to most HR admin tasks.',
    steps: [
      { title: 'Request', description: 'An employee submits the request through a form or a message in your team chat.' },
      { title: 'Log & Classify', description: 'The request is logged, given a type and checked for the details it needs.' },
      { title: 'Route', description: 'It goes to the person who owns that request type, with the employee told who has it.' },
      { title: 'Draft', description: 'AI prepares the letter from your template and the details on file.' },
      { title: 'Approve', description: 'HR reviews the draft, edits anything that needs it and approves it.' },
      { title: 'Close', description: 'The letter is sent, the record is updated and the request is marked complete.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why HR Teams Automate Their Admin',
    intro:
      'The aim is not to take people out of HR. It is to stop skilled people spending their week on copying, chasing and answering the same questions.',
    items: [
      { title: 'Consistent Onboarding', description: 'Every new hire goes through the same steps, whoever in HR is running it.' },
      { title: 'Requests Stop Getting Lost', description: 'Each request has an owner and a status, so nothing waits in an inbox unseen.' },
      { title: 'Less Re-Typing', description: 'Details entered once flow to where they are needed, with fewer chances for error.' },
      { title: 'Faster Answers for Staff', description: 'Routine policy questions get answered at once, at any hour.' },
      { title: 'Clearer Communication', description: 'Employees hear about changes on time and in a consistent voice.' },
      { title: 'Time for People Work', description: 'HR gets back hours for conversations that actually need a person.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Shared Work',
    heading: 'What AI Handles and What HR Decides',
    paragraphs: [
      'In HR, the line between automation and judgment matters more than in most departments. AI is good at reading a form, drafting a standard letter or finding the paragraph in a policy that answers a question. It should not decide anything that affects someone’s job or wellbeing. Those calls stay with your team, and the workflows are built to hand them over.',
      'The same principle applies before people join. If your hiring process also needs work, our [AI recruitment software](/products/ai-hr-recruitment/ai-recruitment-software) page covers the pipeline from application to offer, and onboarding can pick up where it ends.',
    ],
    aiDoes: [
      'Reads details from submitted forms and documents',
      'Classifies and routes incoming HR requests',
      'Drafts standard letters from your templates',
      'Answers routine policy questions from your documents',
      'Drafts announcements and reminders for review',
      'Flags requests that are missing information',
    ],
    peopleDo: [
      'Approve letters, documents and anything sensitive',
      'Handle complaints, grievances and personal matters',
      'Own the policies the assistant answers from',
      'Decide what each workflow is allowed to do on its own',
    ],
  },

  spotlight: {
    eyebrow: 'Policy Questions',
    heading: 'Policy Answers in Slack or Teams, With Sources',
    paragraphs: [
      'A large share of HR messages are questions whose answers already exist in a handbook or policy page. An [AI knowledge assistant](/services/ai-knowledge-assistants) lets employees ask those questions in Slack or Teams, in plain language. It finds the relevant passage in your own documents and answers from it, pointing to the source so the employee can read the full policy.',
      'When your documents do not contain an answer, the assistant says so instead of guessing, and the question can be passed to HR. It connects to where your documents already live, such as Google Drive, Confluence, SharePoint or Notion, and respects the permissions you already have. A side effect is useful: questions it cannot answer show you where the handbook has gaps.',
    ],
    points: [
      { title: 'Answers From Your Documents', description: 'Responses come from your own policies, not from general knowledge on the internet.' },
      { title: 'Sources Shown', description: 'Each answer points to the document it came from, so staff can check it.' },
      { title: 'Honest Gaps', description: 'If the answer is not written down, the assistant says so and routes the question to HR.' },
      { title: 'New-Hire Help', description: 'People in their first weeks can find answers without interrupting colleagues.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Requests & Documents',
      heading: 'HR Requests and Documents Without the Inbox Chase',
      accentWords: 3,
      paragraphs: [
        'HR paperwork tends to arrive in every format: scanned forms, PDFs, emails with attachments. Document automation reads those files, pulls out the details that matter and passes them on for checking. Anything it is unsure about is sent to a person rather than entered automatically, so the data that reaches your systems stays reliable.',
        'Requests follow the same idea. Instead of a shared inbox, each one gets logged, routed and tracked to completion. Where the work is less about a single task and more about keeping each person’s details accurate as they join, move and leave, see [AI employee management software](/products/ai-hr-recruitment/ai-employee-management-software).',
      ],
      points: [
        { title: 'One Front Door', description: 'A single form or chat channel replaces scattered emails and messages.' },
        { title: 'Data Read From Documents', description: 'Key details are extracted from forms and files instead of being typed by hand.' },
        { title: 'Checks Before Entry', description: 'Uncertain values are flagged for review before they reach any system.' },
        { title: 'Status for Everyone', description: 'Employees and HR can see where a request stands without asking.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Helps',
    heading: 'Who AI HR Automation Is For',
    items: [
      { title: 'Small HR Teams', description: 'One or two people covering a growing company, where admin crowds out everything else.' },
      { title: 'Growing Companies', description: 'Businesses hiring steadily, where onboarding quality slips as volume rises.' },
      { title: 'Multi-Site Organizations', description: 'Teams that need the same onboarding and communications to happen at every location.' },
      { title: 'Remote and Hybrid Teams', description: 'Companies where new hires and staff rely on chat and documents instead of a nearby HR desk.' },
      { title: 'Operations-Led HR', description: 'Founders and operations managers who handle HR alongside their other work.' },
      { title: 'People Teams Under Pressure', description: 'HR departments that want time back for culture, development and employee support.' },
    ],
  },

  integrations: {
    eyebrow: 'Tools',
    heading: 'Built Around the Tools You Already Use',
    paragraphs: [
      'We do not introduce a new HR platform. Workflows connect the systems you already run: your HR system, your team chat, your document storage and the accounts new hires need. The automation layer is usually n8n, Make or Zapier, with robotic process automation for systems that have no usable connection.',
      'Which of your tools can be connected, and how, is checked during the audit. We tell you plainly if something cannot be automated reliably.',
    ],
    groups: [
      { label: 'Team Chat', items: ['Slack', 'Microsoft Teams'] },
      { label: 'Document Sources', items: ['Google Drive', 'Confluence', 'SharePoint', 'Notion'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'Your Systems', items: ['Your existing HR system', 'Internal tools via APIs', 'RPA for legacy screens'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build HR Automation With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We design HR workflows around how your team actually works, then build them in the tools you already pay for.',
    items: [
      { title: 'Process First', description: 'We map your onboarding and request handling before suggesting any automation.' },
      { title: 'People Stay in Charge', description: 'Approval points are built into every workflow that touches sensitive matters.' },
      { title: 'No New Platform', description: 'Everything runs inside your existing HR, chat and document tools.' },
      { title: 'Honest Scoping', description: 'We say which HR tasks are worth automating and which are better left to people.' },
      { title: 'Tested Before Staff See It', description: 'Every workflow is tested with sample cases before it touches real employees.' },
      { title: 'Yours to Keep', description: 'You own the workflows, the accounts they run on and the documentation behind them.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up AI HR Automation',
    intro:
      'We begin with the HR tasks that take the most time today. You approve a written plan before any build starts.',
    steps: [
      { title: 'Free Audit', description: 'We review your onboarding, request handling, documents and the questions HR answers most.' },
      { title: 'Workflow Map', description: 'Triggers, steps, owners and approval points are agreed for each workflow in scope.' },
      { title: 'Build', description: 'Workflows are built in your tools, and the assistant is connected to your HR documents.' },
      { title: 'Test', description: 'Each workflow is run with sample hires and requests before going live.' },
      { title: 'Staged Rollout', description: 'Workflows go live one at a time, with HR watching the first runs closely.' },
      { title: 'Handover', description: 'You receive the workflows, accounts and documentation so your team can run them.' },
    ],
    note: 'Your written quote sets out the workflows in scope, the platforms involved, deliverables, usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'See which HR tasks can run on their own',
    heading: 'Give Your HR Team Its Week Back',
    description:
      'Book a free, no-obligation HR automation audit. We will look at your onboarding, requests and documents, show you where automation would save the most time, and tell you where it would not.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI HR Automation: Common Questions',
  faqSideText: 'Not sure which HR tasks to automate first? Book a free audit and we will work through it with you.',
  faqs: [
    {
      question: 'What is AI HR automation?',
      answer:
        'AI HR automation turns repeatable HR admin, such as onboarding steps, requests, documents and policy questions, into workflows. Rules run the predictable steps and AI handles reading, drafting and answering. Clickmasters builds it inside your existing tools.',
    },
    {
      question: 'Which HR tasks are best to automate first?',
      answer:
        'Usually onboarding, because it has many steps and repeats with every hire. HR request intake and routine policy questions are also common starting points. The audit shows which tasks take the most time in your team.',
    },
    {
      question: 'Is this a new HR software platform?',
      answer:
        'No. We are an automation agency, not a software vendor. We build workflows that connect the HR system, chat tools and document storage you already use, and you own what we build.',
    },
    {
      question: 'Can it automate new-hire account creation?',
      answer:
        'Often, yes. Where your systems allow it, accounts can be created and records updated as part of the onboarding workflow. Where they do not, robotic process automation can work through the screens. We confirm what is possible during the audit.',
    },
    {
      question: 'How does the policy assistant avoid giving wrong answers?',
      answer:
        'It answers from your own HR documents and shows the source for each answer. When the documents do not cover a question, it says so instead of guessing and can pass the question to HR. Your team stays responsible for keeping policies current.',
    },
    {
      question: 'Will AI make decisions about employees?',
      answer:
        'No. AI reads, drafts, routes and answers routine questions. Decisions that affect someone’s role or circumstances stay with people, and sensitive steps wait for a named person to approve them.',
    },
    {
      question: 'Can employee communications be automated without sounding robotic?',
      answer:
        'Yes. Announcements and reminders are drafted once, in your voice, and approved by HR before the workflow uses them. Automation decides who receives each message and when, and your team keeps control of what it says.',
    },
    {
      question: 'How is employee data kept secure?',
      answer:
        'Workflows are built inside your own tools and accounts, and the policy assistant respects the access permissions you already have. We agree with you during scoping what data each workflow can see and use.',
    },
    {
      question: 'How long does it take to set up?',
      answer:
        'It depends on how many workflows are in scope and how your systems connect. Your written quote includes a timeline for each stage, from mapping and build through testing and staged rollout.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your HR admin, agree the first workflows to automate and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
