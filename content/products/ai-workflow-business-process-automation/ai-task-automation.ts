// content/products/ai-workflow-business-process-automation/ai-task-automation.ts
// Copy + SEO for /products/ai-workflow-business-process-automation/ai-task-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is single recurring tasks: one trigger, a short fixed set of steps, one owner.
//   Multi-step workflows with branching belong to AI Workflow Automation Software; whole
//   end-to-end processes to the BPA sibling; judgment-heavy AI + RPA work to Intelligent Process Automation.
// - Platforms named here are the ones named in site sources: n8n, Make, Zapier, Airtable, HubSpot,
//   Salesforce, GoHighLevel, OpenAI / Claude / Gemini (AI layer), custom code / APIs / webhooks.
// - No statistics, hours-saved figures, prices, testimonials, guarantees or ongoing-support promises.
// - Clickmasters builds automations on platforms the client owns — it is not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_TASK_AUTOMATION_PATH = '/products/ai-workflow-business-process-automation/ai-task-automation';

export const aiTaskAutomationSeo: HubSeo = {
  name: 'AI Task Automation',
  path: AI_TASK_AUTOMATION_PATH,
  title: 'AI Task Automation for Repetitive Work | Clickmasters',
  description:
    'AI task automation for recurring jobs your team repeats daily: data entry, exports, status updates, reminders and inbox sorting, on n8n, Make or Zapier.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Workflow & Business Process Automation', path: '/products/ai-workflow-business-process-automation' },
    { name: 'AI Task Automation', path: AI_TASK_AUTOMATION_PATH },
  ],
};

export const aiTaskAutomationKeywords = [
  'AI task automation',
  'task automation software',
  'repetitive task automation',
  'automate recurring tasks',
  'automate data entry',
  'automate daily reports',
  'automated reminders and follow-ups',
  'email sorting automation',
  'Zapier task automation',
  'which tasks to automate first',
  'how to automate repetitive tasks',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI workflow and business process automation', href: '/products/ai-workflow-business-process-automation', section: 'What Is AI Task Automation?' },
  { anchor: 'AI workflow automation with Zapier', href: '/solutions/ai-workflow-automation/with-zapier', section: 'How to Spot a Task Worth Automating (explainer)' },
  { anchor: 'reporting automation', href: '/solutions/reporting-automation', section: 'Recurring Reports, Without the Monday Morning Scramble (spotlight)' },
  { anchor: 'AI workflow automation software', href: '/products/ai-workflow-business-process-automation/ai-workflow-automation-software', section: 'From One Task to a Full Workflow (extras)' },
  { anchor: 'business process automation software', href: '/products/ai-workflow-business-process-automation/business-process-automation-software', section: 'From One Task to a Full Workflow (extras)' },
] as const;

export const aiTaskAutomation: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Task Automation',
    heading: 'AI Task Automation That Takes Repetitive Work Off Your Team’s List',
    accentWords: 3,
    subheading:
      'We automate the recurring tasks your team does every day or every week: copying data between apps, sending reminders, sorting emails, exporting reports and updating statuses. Each task runs on a platform you own, such as Zapier, Make or n8n, and tells you if it ever fails.',
    primaryCta: { text: 'Book a Free Task Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt: 'Illustration of recurring tasks being completed automatically between connected business apps',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Data entry', 'Status updates', 'Reminders', 'Inbox sorting', 'Scheduled exports', 'File handling'],
  },

  intro: {
    eyebrow: 'Small Tasks, Daily Cost',
    heading: 'What Is AI Task Automation?',
    paragraphs: [
      'AI task automation takes one recurring job and makes it run by itself. A new form entry is copied into the CRM. An attachment is saved to the right folder. A reminder goes out the day before an appointment. Each task is small, but together they fill a large part of many people’s week.',
      'Rules handle most of these tasks. AI is added where the input is messy, such as an email that needs sorting by what it is about, or a note that needs turning into a tidy summary. The aim is a quick, reliable win, not a large project.',
      'Task automation is the starting level of our [AI workflow and business process automation](/products/ai-workflow-business-process-automation) range. It is often the best place to begin, because the first task proves the approach and builds connections the next automation can reuse.',
    ],
    problems: [
      'Skilled people spend part of each day copying data from one app to another.',
      'Reminders and follow-ups depend on someone remembering to send them.',
      'The same weekly export is rebuilt by hand every time.',
      'Small manual steps cause typos, missed updates and duplicate records.',
    ],
  },

  explainer: {
    eyebrow: 'Choosing Tasks',
    heading: 'How to Spot a Task Worth Automating',
    paragraphs: [
      'Not every task is worth automating. The best candidates are frequent, follow the same steps each time and do not need much judgment. If someone could write the steps down on a single page, the task is usually a good fit.',
      'Many of these tasks can run on a simple, linear setup that is quick to build and easy to maintain. Our page on [AI workflow automation with Zapier](/solutions/ai-workflow-automation/with-zapier) shows how we use that approach for straightforward, lower-volume tasks.',
    ],
    points: [
      { title: 'It Happens Often', description: 'Daily or weekly tasks pay back faster than ones that happen a few times a year.' },
      { title: 'The Steps Are the Same', description: 'The task follows a fixed pattern, with few exceptions to handle.' },
      { title: 'The Data Is Digital', description: 'Inputs already live in an app, an inbox, a form or a spreadsheet.' },
      { title: 'Mistakes Are Costly', description: 'A typo or a missed step causes rework, delays or an unhappy customer.' },
      { title: 'Nobody Enjoys It', description: 'Tasks people dislike are often the ones that get delayed or done in a rush.' },
      { title: 'Low Judgment', description: 'The task does not require a person to weigh up a difficult decision.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'Tasks Our AI Task Automation Handles',
    intro:
      'Each automation is set up around your apps and the way your team already works. These are the kinds of tasks we take off people’s lists most often.',
    items: [
      { title: 'Data Entry Between Apps', description: 'Form entries, orders and contacts copied into the CRM, spreadsheet or database without retyping.' },
      { title: 'Status Updates', description: 'Records, boards and channels updated when a deal, ticket or job moves to a new stage.' },
      { title: 'Reminders and Follow-Ups', description: 'Appointment reminders, overdue nudges and follow-up messages sent on time.' },
      { title: 'Inbox Sorting', description: 'An AI step reads incoming emails, labels them by topic and sends them to the right person or folder.' },
      { title: 'Scheduled Exports', description: 'Data pulled from your apps on a timetable and saved or sent in the format you need.' },
      { title: 'File Handling', description: 'Attachments renamed, saved to the right folder and linked to the matching record.' },
      { title: 'Notes and Summaries', description: 'Call notes, form responses or long emails summarized by AI for a person to check.' },
      { title: 'Record Clean-Up', description: 'Names, phone numbers and fields formatted consistently, with likely duplicates flagged.' },
      { title: 'Failure Alerts', description: 'If a task cannot finish, the owner is told what happened and which item was affected.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Automated Task, Step by Step',
    intro:
      'Here is a common example: saving invoice attachments from a shared inbox. The same short pattern applies to most recurring tasks.',
    steps: [
      { title: 'Trigger', description: 'A new email with an attachment arrives in the shared accounts inbox.' },
      { title: 'Check', description: 'The automation confirms the attachment is a document type it should handle.' },
      { title: 'Read', description: 'An AI step reads the email to identify the supplier and what the document is.' },
      { title: 'Act', description: 'The file is renamed, saved to the supplier’s folder and logged in a spreadsheet.' },
      { title: 'Notify', description: 'The finance team gets a short message with a link, ready for review.' },
      { title: 'Alert on Failure', description: 'If the supplier is unclear or the save fails, the email is flagged for a person instead of skipped.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Teams Start With Task Automation',
    intro:
      'Task automation is a low-risk way to see what automation can do for your business before taking on anything larger.',
    items: [
      { title: 'Quick Wins', description: 'Single tasks are faster to build and test than full workflows or processes.' },
      { title: 'Time Back for Skilled Work', description: 'People spend less of their day on copying, checking and chasing.' },
      { title: 'Fewer Small Errors', description: 'Data is entered once and moved the same way every time.' },
      { title: 'Nothing Forgotten', description: 'Reminders, updates and exports happen on schedule, even on busy days.' },
      { title: 'Low Commitment', description: 'You can start with one task and decide what to automate next once it is running.' },
      { title: 'Reusable Foundations', description: 'Connections built for the first task can be reused by the next automation.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Rules Plus AI',
    heading: 'Where AI Helps in Everyday Tasks',
    paragraphs: [
      'Most recurring tasks do not need AI at all. Copying a field from one app to another is best handled by a simple rule, which is cheaper and more predictable. We only add AI where the input varies and a rule cannot cope.',
      'Typical examples are sorting emails by what they are about, pulling a name or reference number out of free text, or drafting a short summary of a long message. In each case, the result is checked against your rules, and anything the AI is unsure about goes to a person.',
    ],
    aiDoes: [
      'Sorts incoming emails by topic or intent',
      'Pulls names, dates and references from text',
      'Summarizes long messages and call notes',
      'Drafts short replies for a person to send',
      'Tidies inconsistent formatting in records',
      'Flags inputs it cannot read confidently',
    ],
    peopleDo: [
      'Choose which tasks to automate',
      'Set the rules each task follows',
      'Review drafts and flagged items',
      'Decide when a task should change',
    ],
  },

  spotlight: {
    eyebrow: 'Example Task',
    heading: 'Recurring Reports, Without the Monday Morning Scramble',
    paragraphs: [
      'Many teams start each week by pulling numbers from several apps into a spreadsheet, tidying them up and sending a summary to managers. It is the same work every week, and it often falls to someone with more valuable things to do.',
      'Once automated, the data is collected on a schedule, placed into the same template and sent to the right people. An AI-drafted summary can be added for a person to check before it goes out. For larger reporting needs across many sources, our [reporting automation](/solutions/reporting-automation) solution covers the detail.',
    ],
    points: [
      { title: 'Scheduled Collection', description: 'Figures are pulled from your apps at a set time, without anyone logging in.' },
      { title: 'Same Template', description: 'The report uses one layout every week, so it is easy to compare.' },
      { title: 'Draft Summary', description: 'AI can draft a short commentary for a person to review and edit.' },
      { title: 'Missing Data Flagged', description: 'If a source cannot be reached, the report says so instead of showing blanks.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Where to Begin',
      heading: 'Common First Tasks by Team',
      accentWords: 2,
      paragraphs: [
        'Every team has its own list of repetitive jobs. These are some of the tasks we see most often as a sensible first automation.',
        'The right first task is the one that is frequent, simple and annoying for your team. We help you pick it during the audit.',
      ],
      points: [
        { title: 'Sales', description: 'New form leads added to the CRM, with a follow-up task assigned to a rep.' },
        { title: 'Operations', description: 'Job or order status changes posted to the team channel and the customer record.' },
        { title: 'Finance', description: 'Invoice and receipt attachments saved, named and logged automatically.' },
        { title: 'Customer Support', description: 'Incoming emails sorted by topic and sent to the right queue.' },
        { title: 'HR and Admin', description: 'Meeting and document reminders sent ahead of deadlines.' },
      ],
    },
    {
      eyebrow: 'Task, Workflow or Process?',
      heading: 'From One Task to a Full Workflow',
      accentWords: 3,
      paragraphs: [
        'A single task has one trigger and a short set of steps. As soon as you need several branches, approvals or more than a couple of apps working together, it becomes a workflow. Our page on [AI workflow automation software](/products/ai-workflow-business-process-automation/ai-workflow-automation-software) explains how those multi-step builds work.',
        'When several workflows link together to run work from start to finish across teams, the focus shifts to the whole process. That is covered by [business process automation software](/products/ai-workflow-business-process-automation/business-process-automation-software). Many businesses move through all three levels over time.',
      ],
      points: [
        { title: 'A Task Is Enough When', description: 'One trigger leads to a few fixed steps, owned by one person or team.' },
        { title: 'Move to a Workflow When', description: 'The task needs conditions, approvals or several apps in sequence.' },
        { title: 'Shared Foundations', description: 'Connections and alerts built for a task carry over to larger automations.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Task Automation Is For',
    items: [
      { title: 'Small Teams', description: 'Teams where a few people cover many roles and manual admin gets in the way of the main work.' },
      { title: 'Growing Businesses', description: 'Companies whose task volume is rising faster than they want to hire for admin.' },
      { title: 'Operations Managers', description: 'Managers who want routine updates and hand-offs to happen without chasing.' },
      { title: 'Founders and Owners', description: 'Owners who still do repetitive tasks themselves and want that time back.' },
      { title: 'First-Time Automators', description: 'Teams new to automation who want a small, low-risk place to start.' },
      { title: 'Teams With Existing Zaps', description: 'Teams whose own automations break or need tidying and documenting.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Apps Your Tasks Can Connect',
    paragraphs: [
      'Task automations connect the tools your team already uses: email, forms, spreadsheets, CRMs, calendars, chat and file storage. Connections use native connectors, APIs or webhooks, depending on what each app supports.',
      'Models such as OpenAI, Claude or Gemini power the AI steps where they are needed. Which apps can be connected in your stack, and how, is confirmed during the audit.',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n', 'Airtable'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'GoHighLevel'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Connections', items: ['APIs', 'Webhooks', 'Custom code'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Automate Your Tasks With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We build task automations on platforms you own and hand them over with clear notes on how they work.',
    items: [
      { title: 'Honest Task Selection', description: 'We tell you when a task is not worth automating, or better left as it is.' },
      { title: 'Simplest Tool That Works', description: 'We use the lightest setup that handles the task reliably, without over-building.' },
      { title: 'AI Only Where Needed', description: 'Rules do most of the work. AI is added only where the input varies.' },
      { title: 'Failures Are Visible', description: 'Every automation alerts its owner if it cannot finish a run.' },
      { title: 'Tested With Real Data', description: 'Each task is checked with realistic examples, including messy and missing inputs.' },
      { title: 'You Own It', description: 'The automations, accounts and documentation belong to you after handover.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Automate Your First Task',
    intro:
      'We begin with the task your team repeats most often. You approve the steps before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We look at your team’s recurring tasks and pick the one with the clearest return.' },
      { title: 'Task Outline', description: 'The trigger, steps, rules and failure alerts are agreed in writing.' },
      { title: 'Build', description: 'The automation is set up on the chosen platform and connected to your apps.' },
      { title: 'Test', description: 'The task is run with sample data, including edge cases, before going live.' },
      { title: 'Go Live', description: 'The task starts running, with your team watching the first results.' },
      { title: 'Handover', description: 'You receive account access and a short guide to how the automation works.' },
    ],
    note: 'Your written quote lists the tasks in scope, the platforms involved, deliverables, usage costs and a timeline.',
  },

  cta: {
    bandHeading: 'Find the task to automate first',
    heading: 'Stop Doing the Same Task Twice',
    description:
      'Book a free, no-obligation task automation audit. We will look at the jobs your team repeats, suggest which to automate first, and be honest about what is not worth it.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Task Automation: Common Questions',
  faqSideText: 'Not sure which of your tasks could run on their own? Book a free audit and we will go through them with you.',
  faqs: [
    {
      question: 'What is AI task automation?',
      answer:
        'It is the automation of single recurring tasks, such as data entry, reminders, status updates, exports and inbox sorting, so they run without anyone doing them by hand. AI is used where the input varies, such as reading an email to decide where it should go.',
    },
    {
      question: 'How is task automation different from workflow automation?',
      answer:
        'A task automation handles one job with one trigger and a few fixed steps. Workflow automation chains many steps together, with branches, approvals and several apps. Many businesses start with tasks and build up to workflows.',
    },
    {
      question: 'Which tasks should we automate first?',
      answer:
        'Start with tasks that happen often, follow the same steps every time and do not need much judgment. Copying data between apps, sending reminders and building recurring reports are common first choices.',
    },
    {
      question: 'Is this a software product we subscribe to?',
      answer:
        'No. We build task automations on platforms and apps you own, such as Zapier, Make or n8n. You pay the platform and AI usage costs directly, and the automations belong to you.',
    },
    {
      question: 'Do our tasks need AI to be automated?',
      answer:
        'Usually not. Most recurring tasks are handled well by simple rules. We add AI only where a rule cannot cope, such as sorting free-text emails or summarizing notes.',
    },
    {
      question: 'What happens if an automated task fails?',
      answer:
        'Each automation is set up to alert its owner when a run cannot finish, with details of what went wrong and which item was affected, so nothing is silently skipped.',
    },
    {
      question: 'Can you fix automations we set up ourselves?',
      answer:
        'Often, yes. We can review existing automations, add failure alerts, tidy the setup and document how it works. Whether to fix or rebuild is decided during the audit.',
    },
    {
      question: 'Can we automate just one task to start?',
      answer:
        'Yes. Starting with a single task is a common and sensible approach. Once it is running, you can decide whether to automate more.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your recurring tasks, agree the first one to automate and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
