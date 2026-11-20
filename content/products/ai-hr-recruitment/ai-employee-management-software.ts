// content/products/ai-hr-recruitment/ai-employee-management-software.ts
// Copy + SEO for /products/ai-hr-recruitment/ai-employee-management-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the employee record and lifecycle: keeping employee information accurate across systems,
//   joiner / mover / leaver admin, and the internal coordination around each change. Task-level HR admin
//   (requests, policy Q&A, communications) belongs to the AI HR automation sibling page.
// - Clickmasters builds workflows around the HR system the client already uses. We are NOT a system of
//   record, HRIS or SaaS app. Do NOT name HR systems or ATS products.
// - Explicitly out of scope: payroll, attendance, time-off tracking, performance tracking / reviews and
//   employee monitoring. Only the FAQ may mention them, and only to say we do not build them.
// - Verified on the site: RPA case (new-hire account creation and system updates, no outcome numbers);
//   document automation that extracts data from documents and escalates what it is unsure about;
//   Airtable workflows that create structured records and start the right steps; BPA connects
//   departments including HR and lists employee onboarding.
// - No statistics, prices, testimonials, certifications, compliance claims, guarantees, or
//   ongoing-support promises.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_EMPLOYEE_MANAGEMENT_SOFTWARE_PATH = '/products/ai-hr-recruitment/ai-employee-management-software';

export const aiEmployeeManagementSoftwareSeo: HubSeo = {
  name: 'AI Employee Management Software',
  path: AI_EMPLOYEE_MANAGEMENT_SOFTWARE_PATH,
  title: 'AI Employee Management Software for HR Teams | Clickmasters',
  description:
    'AI employee management software built around your HR system: accurate employee records, joiner, mover and leaver workflows, and every team kept in step.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI HR & Recruitment', path: '/products/ai-hr-recruitment' },
    { name: 'AI Employee Management Software', path: AI_EMPLOYEE_MANAGEMENT_SOFTWARE_PATH },
  ],
};

export const aiEmployeeManagementSoftwareKeywords = [
  'AI employee management software',
  'employee records automation',
  'employee lifecycle automation',
  'joiners movers leavers process',
  'employee offboarding automation',
  'employee data management',
  'HR records workflow',
  'employee information management',
  'role change workflow',
  'keep employee data in sync',
  'internal HR coordination',
  'how to automate employee record updates',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI HR and recruitment system', href: '/products/ai-hr-recruitment', section: 'What Is AI Employee Management Software?' },
  { anchor: 'AI recruitment software', href: '/products/ai-hr-recruitment/ai-recruitment-software', section: 'Joiners, Movers and Leavers as Connected Workflows (spotlight)' },
  { anchor: 'AI HR automation', href: '/products/ai-hr-recruitment/ai-hr-automation', section: 'What AI Does With Employee Information' },
  { anchor: 'business process automation', href: '/services/business-process-automation', section: 'One Change, Every Team Informed (extras)' },
  { anchor: 'Airtable automation', href: '/platforms/airtable-automation-services', section: 'Working With the Systems You Already Run' },
] as const;

export const aiEmployeeManagementSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Employee Management',
    heading: 'AI Employee Management Software That Keeps Every Record Current',
    accentWords: 3,
    subheading:
      'We build AI employee management software around the HR system you already use. When someone joins, changes role or leaves, the record is updated once, every connected system follows, and each team gets the tasks that belong to it.',
    primaryCta: { text: 'Book a Free Employee Management Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/bussiness.png',
    imageAlt: 'Employee records and lifecycle changes kept in sync across systems with AI employee management software',
    imageWidth: 667,
    imageHeight: 374,
    marquee: ['Accurate employee records', 'Joiner workflows', 'Role and team changes', 'Leaver checklists', 'Cross-team coordination'],
  },

  intro: {
    eyebrow: 'The Employee Record',
    heading: 'What Is AI Employee Management Software?',
    paragraphs: [
      'AI employee management software, as we build it, is a set of workflows that keep employee information accurate and act on it. It sits around your existing HR system rather than replacing it. When a detail changes, the change is checked, recorded and passed to every place that depends on it.',
      'In many companies, the same person exists in five places: the HR system, a spreadsheet, the IT directory, a team chat and a manager’s own notes. Each copy drifts. A promotion is recorded in one place but not the others. A leaver still appears on a team list weeks later. Nobody is careless; there are simply too many places to update by hand.',
      'This page covers the record and lifecycle side of our [AI HR and recruitment system](/products/ai-hr-recruitment). It is about who people are in your systems and what happens when that changes.',
    ],
    problems: [
      'Employee details differ between the HR system, spreadsheets and other tools.',
      'Role and team changes reach some departments but not others.',
      'Leavers keep accounts, access or equipment longer than they should.',
      'HR spends hours confirming which version of a record is correct.',
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What We Build Into Employee Management Workflows',
    intro:
      'Every workflow is designed around your HR system and the tools connected to it. Your team decides which changes run automatically and which wait for approval.',
    items: [
      { title: 'Single Source Updates', description: 'A change made in your HR system is passed to the other tools that hold the same details.' },
      { title: 'Change Request Forms', description: 'Employees and managers submit updates through one structured form instead of email.' },
      { title: 'Record Checks', description: 'Missing fields and mismatched values are flagged for HR before they spread.' },
      { title: 'Joiner Setup', description: 'A new record triggers the setup steps each team needs to complete.' },
      { title: 'Mover Updates', description: 'Role, team, manager or location changes update records and notify the people affected.' },
      { title: 'Leaver Checklists', description: 'Departures start a tracked list of tasks across HR, IT and the line manager.' },
      { title: 'Document Capture', description: 'Details are read from submitted documents and added to the record after checking.' },
      { title: 'Change History', description: 'Each update is logged with who requested it, who approved it and when.' },
      { title: 'Team Notifications', description: 'The right people hear about a change in the channel they already use.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How a Role Change Flows Through Your Systems',
    intro:
      'Take an employee moving to a new team with a new manager. Here is how a workflow we might scope would handle it.',
    steps: [
      { title: 'Request', description: 'The current manager submits the move through a change form, with an effective date.' },
      { title: 'Check', description: 'The workflow confirms the required details are present and match the existing record.' },
      { title: 'Approve', description: 'HR and the receiving manager approve the change before anything updates.' },
      { title: 'Update', description: 'On the effective date, the HR system and connected tools receive the new role, team and manager.' },
      { title: 'Coordinate', description: 'IT, the old team and the new team each get the tasks and notices that apply to them.' },
      { title: 'Log', description: 'The change and every step taken are recorded for HR to review later.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes When Employee Records Stay Accurate',
    intro:
      'Accurate records sound like a small thing. In practice, they decide whether the rest of the business can trust what HR tells it.',
    items: [
      { title: 'One Version of the Truth', description: 'Every connected tool shows the same details for the same person.' },
      { title: 'Cleaner Departures', description: 'Leaver tasks are tracked to completion instead of left to memory.' },
      { title: 'Smoother Internal Moves', description: 'People changing roles find their new setup ready when they arrive.' },
      { title: 'Less Manual Checking', description: 'HR stops cross-checking spreadsheets to find the correct record.' },
      { title: 'Clear Accountability', description: 'Every change shows who asked for it and who approved it.' },
      { title: 'Better Reporting Inputs', description: 'Headcount and team lists are built from data that is actually current.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and Your HR Team',
    heading: 'What AI Does With Employee Information',
    paragraphs: [
      'Most of the work here is reliable plumbing: rules that move a change from one system to the next. AI is useful at the edges, where information arrives messy. It can read a submitted document, match a free-text request to the right record or summarize what changed for a manager. It does not decide whether a change is correct. HR does.',
      'Employee management covers the record. The everyday tasks around it, such as HR requests, policy questions and staff announcements, are covered on our [AI HR automation](/products/ai-hr-recruitment/ai-hr-automation) page.',
    ],
    aiDoes: [
      'Reads details from submitted documents and forms',
      'Matches change requests to the right employee record',
      'Spots missing or conflicting details for review',
      'Drafts change notices for managers and teams',
      'Summarizes a person’s recent record changes for HR',
    ],
    peopleDo: [
      'Approve every change to an employee record',
      'Decide who can see and edit which details',
      'Handle sensitive moves and departures personally',
      'Own the HR system as the record of truth',
    ],
  },

  spotlight: {
    eyebrow: 'The Employee Lifecycle',
    heading: 'Joiners, Movers and Leavers as Connected Workflows',
    paragraphs: [
      'Every employee goes through three kinds of change: joining, moving and leaving. Each one touches several systems and several teams. Treating them as connected workflows, rather than separate checklists, means nothing falls between departments.',
      'Joining starts when hiring ends. If your pipeline is handled by [AI recruitment software](/products/ai-hr-recruitment/ai-recruitment-software), an accepted offer can create the employee record and start the joiner steps without anyone re-typing the details. Moves update the record and adjust what each team needs to do. Departures run a leaver checklist that closes out accounts, equipment and records in a set order.',
    ],
    points: [
      { title: 'Joiners', description: 'A new record triggers account setup, equipment requests and manager tasks.' },
      { title: 'Movers', description: 'Changes of role, team, manager or location update every connected system on the effective date.' },
      { title: 'Leavers', description: 'A departure date starts a tracked checklist across HR, IT and the line manager.' },
      { title: 'Exceptions', description: 'Anything unusual, such as a back-dated change, goes to HR before it runs.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Internal Coordination',
      heading: 'One Change, Every Team Informed',
      accentWords: 3,
      paragraphs: [
        'An employee change is rarely just an HR matter. IT needs to adjust access. Facilities may need to move a desk or ship equipment. Managers need to know who is joining or leaving their team. When these hand-offs depend on someone sending the right email, at least one usually gets missed.',
        'Coordination workflows send each team its part of the change as a task, with a due date and an owner. HR sees one view of what is done and what is outstanding. This is the same principle behind our [business process automation](/services/business-process-automation) work: connect the departments a process passes through, and keep people involved where their judgment is needed.',
      ],
      points: [
        { title: 'Task per Team', description: 'IT, facilities and managers each receive only the tasks that apply to them.' },
        { title: 'Due Dates', description: 'Tasks are timed against the start, move or leaving date.' },
        { title: 'Overdue Alerts', description: 'HR is told when a step has not been completed on time.' },
        { title: 'Single Status View', description: 'Everyone can see where a lifecycle change stands without chasing.' },
      ],
    },
    {
      eyebrow: 'Data Quality',
      heading: 'Employee Information You Can Rely On',
      accentWords: 3,
      paragraphs: [
        'Accurate records depend on how information gets in. Free-text emails and scanned forms invite errors. A structured change form, combined with checks before anything is saved, stops most problems at the door. When details arrive in documents, they can be read automatically, with anything uncertain sent to a person instead of saved.',
        'Access matters as much as accuracy. During scoping we agree which details each workflow can read and change, and who can approve what. Employee data is sensitive, so those decisions are made with you, not assumed.',
      ],
      points: [
        { title: 'Structured Inputs', description: 'Forms ask for exactly the details a change needs, in the right format.' },
        { title: 'Pre-Save Checks', description: 'Values are validated against the existing record before they are written.' },
        { title: 'Reviewed Extraction', description: 'Details read from documents are checked when the workflow is unsure.' },
        { title: 'Scoped Access', description: 'Each workflow only touches the information it has been allowed to use.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Teams That Benefit From AI Employee Management',
    items: [
      { title: 'Companies With Several Systems', description: 'Businesses where employee details live in an HR system, spreadsheets and other tools at once.' },
      { title: 'Fast-Growing Teams', description: 'Organizations adding people and reorganizing teams faster than records can keep up.' },
      { title: 'Multi-Location Businesses', description: 'Companies where moves between sites need several teams to act together.' },
      { title: 'IT-Heavy Workplaces', description: 'Teams where every joiner, mover and leaver means account and access changes.' },
      { title: 'Lean HR Functions', description: 'Small HR teams responsible for record accuracy across the whole company.' },
      { title: 'Organizations Going Through Change', description: 'Businesses restructuring, merging teams or cleaning up records after rapid growth.' },
    ],
  },

  integrations: {
    eyebrow: 'Systems',
    heading: 'Working With the Systems You Already Run',
    paragraphs: [
      'Your HR system stays the record of truth. Our workflows connect it to the other places employee details live, using n8n, Make, Zapier or the system’s own API. Some teams keep supporting lists and trackers in Airtable, and [Airtable automation](/platforms/airtable-automation-services) can turn those into structured records that start the right steps automatically.',
      'Where a system has no usable connection, robotic process automation can update it through its screens. Which tools can be connected is confirmed in the audit, not promised in advance.',
    ],
    groups: [
      { label: 'Record of Truth', items: ['Your existing HR system'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
      { label: 'Records & Trackers', items: ['Airtable', 'Spreadsheets'] },
      { label: 'Team Channels', items: ['Slack', 'Microsoft Teams', 'Email'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Clickmasters for Employee Management Workflows',
    intro:
      'Clickmasters is an AI automation agency. We do not sell an HR system. We make the one you have work better with everything around it.',
    items: [
      { title: 'Your HR System Stays', description: 'We build around the system you already chose, rather than asking you to migrate.' },
      { title: 'Lifecycle Mapped First', description: 'Joiner, mover and leaver steps are mapped with every team involved before we build.' },
      { title: 'Approvals Built In', description: 'Record changes wait for the right person to approve them.' },
      { title: 'Clear Scope', description: 'We tell you what we build and what stays with your existing HR tools.' },
      { title: 'Tested With Real Scenarios', description: 'Each workflow is tested with sample joiners, movers and leavers before launch.' },
      { title: 'Full Ownership', description: 'Workflows, accounts and documentation are handed over to your team.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up AI Employee Management Software',
    intro:
      'We start by tracing where employee information lives and how each change moves today. You approve the plan before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We review your HR system, the tools that copy its data and your current lifecycle steps.' },
      { title: 'Lifecycle Map', description: 'Joiner, mover and leaver flows, owners, approvals and data access are agreed in writing.' },
      { title: 'Build', description: 'Workflows are built in your tools and connected to your HR system.' },
      { title: 'Test', description: 'Sample changes are run end to end to confirm every system updates correctly.' },
      { title: 'Staged Rollout', description: 'Workflows go live one lifecycle stage at a time, with HR watching the first runs.' },
      { title: 'Handover', description: 'You receive the workflows, accounts and documentation behind them.' },
    ],
    note: 'Your written quote lists the workflows in scope, the platforms involved, deliverables, usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find out where your employee records drift',
    heading: 'Make Every Employee Change Happen Once',
    description:
      'Book a free, no-obligation audit. We will trace how employee information moves through your business, show you where workflows would keep it accurate, and be honest about what is out of scope.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Employee Management Software: Common Questions',
  faqSideText: 'Want to see how your joiner, mover and leaver steps could run? Book a free audit and we will map them with you.',
  faqs: [
    {
      question: 'What is AI employee management software?',
      answer:
        'As Clickmasters builds it, AI employee management software is a set of workflows around your HR system. They keep employee records accurate across tools and run the joiner, mover and leaver steps that follow each change.',
    },
    {
      question: 'Do we need to replace our HR system?',
      answer:
        'No. Your HR system remains the record of truth. We connect it to the other tools that hold employee details and build the workflows around it.',
    },
    {
      question: 'Do you build payroll, attendance or performance tools?',
      answer:
        'No. Payroll, attendance, time-off tracking, performance reviews and employee monitoring are not what we build. We focus on employee records, lifecycle workflows and coordination, and connect to the HR systems you already use for the rest.',
    },
    {
      question: 'What does joiners, movers and leavers mean?',
      answer:
        'It is a common way to describe the three main changes in an employee’s time with a company: starting, changing role or team, and leaving. Each one needs records updated and tasks completed across several teams.',
    },
    {
      question: 'Can offboarding tasks be automated?',
      answer:
        'Yes, as a workflow we scope with you. A leaving date can start a checklist covering account changes, equipment return and record updates, with each task assigned and tracked.',
    },
    {
      question: 'How do you keep employee data in sync across systems?',
      answer:
        'Changes are made once, usually in your HR system, and workflows pass them to the connected tools. Checks run before data is written, and conflicting details are flagged for HR to resolve.',
    },
    {
      question: 'What does AI actually do here?',
      answer:
        'AI handles messy inputs: reading documents, matching requests to the right record and drafting notices. The rules that move data between systems are standard automation, and HR approves the changes.',
    },
    {
      question: 'Who can see and change employee information?',
      answer:
        'You decide. During scoping we agree which details each workflow can read and update and who approves each type of change. The workflows run inside your own tools and accounts.',
    },
    {
      question: 'How is this different from AI HR automation?',
      answer:
        'AI HR automation covers task-level admin such as HR requests, policy questions and announcements. Employee management focuses on the record itself and the lifecycle changes that update it. Many teams start with one and add the other.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We trace how employee information moves today, agree the first workflows and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
