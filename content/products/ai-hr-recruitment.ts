// content/products/ai-hr-recruitment.ts
// Copy + SEO for /products/ai-hr-recruitment (parent of the AI HR & Recruitment cluster).
//
// Accuracy rules for this page (keep them when editing):
// - Broad overview of AI HR and recruitment: hiring workflows + HR admin. Introduces the five
//   children but does not target their primary keywords as main topics.
// - Verified on the site: recruitment automation of candidate intake, candidate data processing,
//   internal notifications and recruitment administration (Make / Zapier pages); RPA example of
//   new-hire account creation and system updates (no outcome numbers); knowledge assistants in
//   Slack / Teams answering HR and policy questions from documented sources, citing sources and
//   respecting permissions; document data extraction and form processing; employee onboarding
//   listed as automatable on BPA / workflow pages.
// - Do NOT name ATS, HRIS or calendar products. No payroll, attendance, time-off tracking,
//   performance reviews or employee monitoring.
// - Screening: AI summarizes and suggests against criteria the hiring team defines; people decide;
//   AI is not bias-free; local employment / AI-in-hiring rules may apply (client confirms with advisers).
// - Interview scheduling is a coordination workflow we scope, not a built-in feature.
// - No statistics, prices, testimonials, certifications, guarantees or ongoing-support promises.
// - Clickmasters builds this inside the client's existing tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.
// The `related` grid (the five child pages) is separate from those five.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_HR_RECRUITMENT_PATH = '/products/ai-hr-recruitment';

export const aiHrRecruitmentSeo: HubSeo = {
  name: 'AI HR & Recruitment',
  path: AI_HR_RECRUITMENT_PATH,
  title: 'AI HR and Recruitment Automation | Clickmasters',
  description:
    'AI HR and recruitment automation built in your tools: candidate intake, screening support, interview coordination and HR admin, with people deciding.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI HR & Recruitment', path: AI_HR_RECRUITMENT_PATH },
  ],
};

export const aiHrRecruitmentKeywords = [
  'AI HR and recruitment',
  'AI HR & recruitment',
  'AI for HR and recruitment',
  'HR and recruitment automation',
  'recruitment process automation',
  'AI-powered HR workflows',
  'hiring workflow automation',
  'candidate intake automation',
  'HR admin automation',
  'automating HR processes with AI',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'business process automation', href: '/services/business-process-automation', section: 'What Is AI HR and Recruitment?' },
  { anchor: 'recruitment workflows built with Zapier', href: '/platforms/zapier-automation-services', section: 'Recruitment Process Automation, From Application to Hire (spotlight)' },
  { anchor: 'appointment booking automation', href: '/solutions/appointment-booking-automation', section: 'Interview Coordination Without the Email Chains (extras)' },
  { anchor: 'robotic process automation', href: '/services/robotic-process-automation', section: 'HR Admin and Employee Management (extras)' },
  { anchor: 'AI knowledge assistant', href: '/services/ai-knowledge-assistants', section: 'HR Admin and Employee Management (extras)' },
] as const;

export const aiHrRecruitment: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'AI HR & Recruitment',
    heading: 'AI HR and Recruitment Automation That Gives Your People Team Its Time Back',
    accentWords: 6,
    subheading:
      'Clickmasters builds AI HR and recruitment workflows inside the tools your team already uses. Applications are logged and routed, hiring managers stay informed, interviews are coordinated and HR admin runs on repeatable steps, while every hiring and people decision stays with a person.',
    primaryCta: { text: 'Book a Free HR Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/bussiness.png',
    imageAlt: 'Business team reviewing AI HR and recruitment workflows for hiring and HR administration',
    imageWidth: 667,
    imageHeight: 374,
    marquee: ['Candidate intake', 'Hiring pipeline updates', 'Screening support', 'Interview coordination', 'Onboarding steps', 'HR policy answers'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is AI HR and Recruitment?',
    paragraphs: [
      'AI HR and recruitment means using automation and AI to run the repeatable parts of hiring and people administration. Workflows move information between your forms, inboxes, spreadsheets and HR systems. AI reads, summarizes and drafts where a task involves text, such as an application, a policy question or a status update. People keep the judgment: who to interview, who to hire and how to handle anything sensitive.',
      'For most companies, HR and hiring are not short of effort. They are short of joined-up process. A candidate applies in one place, feedback lives in another, onboarding tasks sit in someone’s head. Clickmasters treats HR and recruitment as a set of business processes, the same way we approach [business process automation](/services/business-process-automation) in finance or operations, and connects the steps so nothing depends on memory.',
      'We are an AI automation agency, not a software vendor. There is no new HR platform to buy or log in to. We map how your team hires and administers people today, then build the workflows inside the tools you already pay for and hand them over to you.',
    ],
    problems: [
      'Applications arrive through several channels and get logged by hand, if at all.',
      'Hiring managers chase HR for updates, and candidates wait days to hear anything.',
      'Interview times are agreed through long email threads.',
      'New-hire setup depends on one person remembering every step.',
      'HR answers the same policy questions every week.',
    ],
  },

  explainer: {
    eyebrow: 'Why Manual HR Breaks',
    heading: 'The Traditional HR and Hiring Challenges We Usually Find',
    paragraphs: [
      'Manual HR processes work while a company is small. One person knows where every CV is, who needs a laptop on Monday and which policy applies to which team. Growth exposes the gaps. More roles open at once, more managers get involved and more employees need answers, but the process is still a mix of inboxes, spreadsheets and goodwill.',
      'The cost is rarely obvious on a budget line. It shows up as slow responses to good candidates, inconsistent onboarding between departments and HR staff spending their week on copy-paste work instead of the people side of the job. These are the problems an audit usually surfaces first.',
    ],
    points: [
      { title: 'Scattered Candidate Data', description: 'Applications sit across email, job boards and forms, so nobody has one reliable list of who applied for what.' },
      { title: 'Slow Hiring Communication', description: 'Updates depend on someone finding time to write them, so candidates and managers are left waiting.' },
      { title: 'Inconsistent Onboarding', description: 'Each department onboards differently, and steps like account setup are easy to miss.' },
      { title: 'Repeated HR Questions', description: 'Answers already exist in policy documents, but staff still ask HR because the documents are hard to search.' },
    ],
  },

  features: {
    eyebrow: 'What We Automate',
    heading: 'Core HR and Recruitment Workflows We Build',
    intro:
      'Each workflow is scoped around your hiring process, your HR policies and the systems you already use. Nothing on this list is a fixed product feature; it is the kind of work we map and build in your stack.',
    items: [
      { title: 'Candidate Intake', description: 'Applications from your forms and inboxes become structured candidate records in one place, tagged by role and source.' },
      { title: 'Pipeline Updates', description: 'When a candidate moves stage, the right people are notified and the record is updated without manual chasing.' },
      { title: 'Screening Support', description: 'AI summarizes applications against criteria your hiring team writes, so reviewers start from a clear overview.' },
      { title: 'Interview Coordination', description: 'Workflows collect availability, share interview details and keep the hiring team in the loop.' },
      { title: 'Candidate Messages', description: 'Status updates are drafted from templates your team approves, so every applicant hears back.' },
      { title: 'Onboarding Checklists', description: 'A signed offer can start the onboarding steps: tasks assigned, accounts requested, documents collected.' },
      { title: 'HR Requests & Documents', description: 'Routine requests are routed to the right owner, and form data is extracted into the systems that need it.' },
      { title: 'Policy Q&A', description: 'Employees ask questions in chat and get answers drawn from your documented HR policies, with sources.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How AI HR and Recruitment Automation Works Day to Day',
    intro:
      'Behind every workflow is a simple chain: something happens, data is captured, rules and AI decide what to prepare, and a person acts on it. Here is how that looks across a typical hire.',
    steps: [
      { title: 'Capture', description: 'An application, request or form submission arrives and is turned into a structured record in the system your team uses.' },
      { title: 'Organize', description: 'The record is tagged by role, team or request type, and duplicates or missing details are flagged.' },
      { title: 'Prepare', description: 'AI summarizes the application or request against the criteria and policies you defined, ready for review.' },
      { title: 'Notify', description: 'The right recruiter, hiring manager or HR owner is told what needs their attention, with context attached.' },
      { title: 'Decide', description: 'A person reviews, decides and records the outcome. The workflow never makes a hiring or HR decision on its own.' },
      { title: 'Follow Through', description: 'Once a decision is logged, the next steps run: candidate messages, interview coordination or onboarding tasks.' },
    ],
  },

  benefits: {
    eyebrow: 'Business Benefits',
    heading: 'What AI HR and Recruitment Changes for Your Team',
    intro:
      'The goal is not fewer HR people. It is HR and hiring teams spending less time moving data and more time with candidates, managers and employees.',
    items: [
      { title: 'Faster Responses', description: 'Candidates and managers get updates when something changes, not when someone remembers to send them.' },
      { title: 'One Source of Truth', description: 'Candidate and request data lives in one agreed place instead of several inboxes and sheets.' },
      { title: 'Consistent Process', description: 'Every hire follows the same steps, so quality does not depend on who is running the role.' },
      { title: 'Less Admin Load', description: 'Logging, routing, internal notifications and document handling run in the background.' },
      { title: 'Clearer Oversight', description: 'Decisions are recorded alongside the data that informed them, which makes reviews easier.' },
      { title: 'Room to Grow', description: 'More roles and more employees can be handled without the admin growing at the same rate.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Screening With Human Oversight',
    heading: 'Candidate Screening Workflows Where People Make the Call',
    paragraphs: [
      'Screening is where AI in hiring needs the most care. In the workflows we build, AI reads each application and summarizes it against criteria your hiring team writes down in advance, such as required experience or a certification the role needs. It can suggest which applications look like a closer match. It does not reject anyone, and it does not make the shortlist on its own.',
      'AI is not free of bias. It can reflect patterns in the data and in the way criteria are worded, so every suggestion is reviewed by a person and the setup should be checked periodically. Rules on the use of AI in hiring and on candidate data vary by location, so we recommend confirming your obligations with your own legal or HR advisers before going live. The page on AI resume screening software, linked below, covers this step in detail.',
    ],
    aiDoes: [
      'Summarizes applications against your written criteria',
      'Highlights missing information or unclear details',
      'Suggests which applications to review first',
      'Drafts candidate updates from approved templates',
      'Keeps records and notes in the agreed system',
    ],
    peopleDo: [
      'Define the criteria for each role',
      'Review every application the AI has summarized',
      'Decide who moves forward and who does not',
      'Check the setup periodically for fairness',
      'Handle sensitive conversations personally',
    ],
  },

  spotlight: {
    eyebrow: 'Recruitment Process Automation',
    heading: 'Recruitment Process Automation, From Application to Hire',
    paragraphs: [
      'A typical hire touches a surprising number of steps. A candidate applies, a record is created, the hiring manager is told, the application is reviewed, interviews are arranged, feedback is collected, a decision is made and the candidate hears back. When each of those steps waits on a person to copy data or send a message, a good applicant can sit untouched for a week.',
      'Recruitment process automation connects the steps. Our [recruitment workflows built with Zapier](/platforms/zapier-automation-services) and similar platforms handle candidate intake, internal notifications and recruitment administration, so the hiring team works from one up-to-date pipeline and every stage change triggers the next action.',
    ],
    points: [
      { title: 'Application Logged', description: 'A new application creates a candidate record with role, source and attachments in one place.' },
      { title: 'Team Notified', description: 'The recruiter and hiring manager receive a short summary and a link, not a forwarded email chain.' },
      { title: 'Stage Changes Tracked', description: 'Moving a candidate to interview, offer or rejection updates the record and starts the right follow-up.' },
      { title: 'Feedback Collected', description: 'Interviewers are asked for feedback in a consistent format, and responses land on the candidate record.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Interview Coordination',
      heading: 'Interview Coordination Without the Email Chains',
      accentWords: 3,
      paragraphs: [
        'Arranging interviews is mostly logistics: finding a time that suits the candidate and two or three busy interviewers, then sharing the details with everyone. It is a common source of delay, and it rarely needs human judgment.',
        'We scope interview coordination as a workflow around the email and calendar tools you already use. It borrows the thinking behind our [appointment booking automation](/solutions/appointment-booking-automation) for customer bookings, applied to an internal hiring process. What exactly can be automated depends on your tools and is confirmed in the audit.',
      ],
      points: [
        { title: 'Availability Requests', description: 'Candidates are asked for their availability in a consistent, polite format once they reach the interview stage.' },
        { title: 'Panel Coordination', description: 'Interviewers are told who they are meeting, when and where to find the candidate’s summary.' },
        { title: 'Change Handling', description: 'When a time changes, the workflow updates the people and records involved instead of leaving it to memory.' },
        { title: 'Feedback Prompts', description: 'After the interview, each interviewer is asked to submit feedback against the role’s criteria.' },
      ],
    },
    {
      eyebrow: 'HR Admin & Employee Management',
      heading: 'HR Admin and Employee Management Workflows',
      accentWords: 4,
      paragraphs: [
        'Once someone accepts an offer, the work shifts to administration: accounts, equipment, documents, introductions and a stream of first-week questions. Employee onboarding is one of the processes our workflow and BPA work most often covers. In one [robotic process automation](/services/robotic-process-automation) project, a bot took over new-hire account creation and system updates that an HR team had been doing by hand.',
        'Day-to-day questions are a second source of HR admin. An [AI knowledge assistant](/services/ai-knowledge-assistants) in Slack or Microsoft Teams can answer routine HR questions from your documented policies, cite the source, respect access permissions and say plainly when it does not know. Employee records and lifecycle changes, such as role moves and leavers, can follow the same structured approach.',
      ],
      points: [
        { title: 'Onboarding Steps', description: 'A new starter triggers a checklist of tasks for HR, IT and the manager, each with an owner.' },
        { title: 'Account Setup', description: 'Repetitive system updates and account requests for new hires are handled by a workflow or bot.' },
        { title: 'Document Handling', description: 'Information from submitted forms is extracted into the right records, with unclear fields flagged for review.' },
        { title: 'Policy Answers', description: 'Routine HR questions are answered from approved documents, and anything else is routed to a person.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Where AI HR and Recruitment Automation Fits',
    items: [
      { title: 'Growing Companies', description: 'Businesses opening several roles at once, where hiring has outgrown one person’s inbox.' },
      { title: 'Recruitment Agencies', description: 'Teams processing candidate data and client updates across many open roles at the same time.' },
      { title: 'Multi-Location Employers', description: 'Organizations that need the same hiring and onboarding steps followed at every site.' },
      { title: 'High-Volume Hiring', description: 'Roles that attract large numbers of applications, where logging and first responses take most of the time.' },
      { title: 'Lean HR Teams', description: 'One or two HR people supporting a whole company, who need admin to run without them.' },
      { title: 'Remote Teams', description: 'Distributed companies where onboarding and policy questions happen in chat rather than in person.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Built Around the Tools Your HR Team Already Uses',
    paragraphs: [
      'HR and hiring data usually lives in a mix of systems: an applicant tracking tool or spreadsheet, a shared inbox, an HR system of record, document storage and team chat. We connect these through automation platforms such as n8n, Make, Zapier and Airtable, and through APIs where a tool offers one.',
      'We do not promise integrations in advance. During the audit we check which of your tools can be connected, how, and with what access, and the written quote states exactly what will be built.',
    ],
    groups: [
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'Team Chat', items: ['Slack', 'Microsoft Teams'] },
      { label: 'Documents & Knowledge', items: ['Google Drive', 'SharePoint', 'Confluence', 'Notion'] },
      { label: 'Your HR Stack', items: ['Your hiring tool or tracker', 'Your HR records system', 'Your email and calendar', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Work With Clickmasters on HR and Recruitment',
    intro:
      'HR data is personal, and hiring decisions affect people’s lives. We build with that in mind, and we are clear about what automation should and should not do.',
    items: [
      { title: 'Process First', description: 'We map how your team actually hires and onboards before suggesting any automation.' },
      { title: 'People Decide', description: 'AI prepares and summarizes. Hiring and HR decisions are always made and recorded by a person.' },
      { title: 'Your Existing Tools', description: 'Workflows are built in the systems you already use, not on a new platform your team must learn.' },
      { title: 'Honest About AI', description: 'We will tell you where AI helps, where a simple rule is better and where people should stay fully in charge.' },
      { title: 'Staged Rollout', description: 'Workflows run on real hires under human oversight before they are trusted to run unattended.' },
      { title: 'You Own the Result', description: 'Workflows, accounts and documentation are handed over to you at the end of the project.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How an AI HR and Recruitment Project Runs',
    intro:
      'Most teams start with one process, often candidate intake or onboarding, and add more once it proves itself. You approve the plan before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We review your hiring and HR admin processes, tools and pain points, and agree where to start.' },
      { title: 'Process Mapping', description: 'Each step, owner, rule and approval point is written down and confirmed with your team.' },
      { title: 'Build', description: 'Workflows and AI steps are built inside your existing systems, using the criteria and policies you provide.' },
      { title: 'Test', description: 'Every workflow is tested end to end with sample candidates and requests before real data flows through it.' },
      { title: 'Staged Rollout', description: 'Workflows go live in stages, with people checking the output before it runs unattended.' },
      { title: 'Handover', description: 'You receive the workflows, accounts and documentation, so your team owns and understands what was built.' },
    ],
    note: 'Your written quote sets out the scope, platforms, deliverables, usage costs and timeline before any work begins.',
  },

  cta: {
    bandHeading: 'See which HR and hiring work you can automate',
    heading: 'Give Your HR Team Time for the People Side of the Job',
    description:
      'Book a free, no-obligation audit. We will look at how you hire, onboard and answer HR questions today, show you where automation would help first and tell you where it would not.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  related: {
    eyebrow: 'The AI HR & Recruitment Suite',
    heading: 'Five Areas of HR and Hiring We Automate',
    intro:
      'Each page goes deeper into one part of the process. Start with the area that costs your team the most time.',
    items: [
      {
        title: 'AI Recruitment Software',
        description: 'Your whole hiring pipeline as one connected workflow: intake, stages, hiring team updates and candidate communication.',
        href: '/products/ai-hr-recruitment/ai-recruitment-software',
      },
      {
        title: 'AI Resume Screening Software',
        description: 'AI summaries and shortlist suggestions against criteria your team defines, with people reviewing every decision.',
        href: '/products/ai-hr-recruitment/ai-resume-screening-software',
      },
      {
        title: 'AI HR Automation',
        description: 'Onboarding steps, employee requests, HR documents and policy questions handled through repeatable workflows.',
        href: '/products/ai-hr-recruitment/ai-hr-automation',
      },
      {
        title: 'AI Interview Scheduling Software',
        description: 'Interview coordination workflows that collect availability, brief the panel and keep everyone updated.',
        href: '/products/ai-hr-recruitment/ai-interview-scheduling-software',
      },
      {
        title: 'AI Employee Management Software',
        description: 'Employee records and lifecycle admin for joiners, movers and leavers, kept consistent across teams.',
        href: '/products/ai-hr-recruitment/ai-employee-management-software',
      },
    ],
  },

  faqHeading: 'AI HR and Recruitment: Frequently Asked Questions',
  faqSideText: 'Have a question about your own hiring process or HR tools? Book a free audit and we will answer it for your situation.',
  faqs: [
    {
      question: 'What is AI HR and recruitment automation?',
      answer:
        'AI HR and recruitment automation uses workflows and AI to handle the repeatable parts of hiring and HR admin, such as logging applications, notifying hiring managers, coordinating interviews, running onboarding steps and answering routine policy questions. People still make every hiring and HR decision.',
    },
    {
      question: 'Is this a new HR software platform?',
      answer:
        'No. Clickmasters is an automation agency. We build workflows inside the tools you already use and hand them over to you, so there is no new platform, login or subscription from us.',
    },
    {
      question: 'Which HR and recruitment tasks can be automated?',
      answer:
        'Common starting points are candidate intake, pipeline notifications, candidate status updates, interview coordination, feedback collection, onboarding checklists, new-hire account requests, form data extraction and policy questions. The audit confirms which ones fit your process and tools.',
    },
    {
      question: 'Will AI decide which candidates we hire?',
      answer:
        'No. AI can summarize applications and suggest which to review first, based on criteria your team writes. A person reviews the applications and makes every decision about who moves forward.',
    },
    {
      question: 'Is AI screening fair and free of bias?',
      answer:
        'AI is not bias-free. It can reflect patterns in data and in how criteria are worded. That is why every suggestion is reviewed by a person, criteria are written carefully, and the setup should be checked periodically.',
    },
    {
      question: 'Are there legal rules on using AI in hiring?',
      answer:
        'Rules on AI in hiring and on handling candidate and employee data vary by country and region. We build with human review in place, but you should confirm your own obligations with your legal or HR advisers before going live.',
    },
    {
      question: 'Can it work with the hiring and HR tools we already use?',
      answer:
        'Usually, yes. We connect tools through platforms such as n8n, Make, Zapier and Airtable, or through APIs. What can be connected depends on each tool, so we check it in the audit rather than promise it up front.',
    },
    {
      question: 'Can you automate employee onboarding?',
      answer:
        'Yes. A new starter can trigger a checklist of tasks for HR, IT and the manager, along with account requests, document collection and welcome information. We have built bots that handle new-hire account creation and system updates.',
    },
    {
      question: 'Can employees ask HR questions to an AI assistant?',
      answer:
        'Yes. A knowledge assistant in Slack or Microsoft Teams can answer routine questions from your documented HR policies, show where the answer came from and say when it does not know, so the question goes to a person.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your hiring and HR processes, agree the first workflow to automate and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
