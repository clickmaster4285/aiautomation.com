// content/products/industry-specific-ai-automation/ai-education-automation.ts
// Copy + SEO for /products/industry-specific-ai-automation/ai-education-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Primary keyword is "AI education automation". Focus is the ADMINISTRATIVE side of schools, colleges,
//   universities and private training providers: enquiries, admissions logging and routing, document chasing,
//   visit booking, course registration admin, parent/student communication, staff admin and reporting.
// - Do NOT target or claim teaching, grading, proctoring, assessment or learning-content tools. Say clearly that
//   the page covers administration only.
// - Admissions decisions, offers, scholarships, registrations and student matters are always decided by staff.
//   The document check verifies completeness only; it never assesses content.
// - Privacy phrasing (do not change): "We design with privacy in mind; formal compliance with FERPA and similar
//   student-privacy rules is a shared responsibility that depends on your specific setup and is confirmed for
//   your project." No "FERPA-compliant" or other certification claims.
// - SIS, LMS and admissions portals are connected only "where the system offers an API or integration, confirmed
//   during discovery". Never promise a named SIS/LMS integration as standard.
// - Use cases are examples, scoped per project. No statistics, percentages, prices, testimonials, client names,
//   "leading/best" claims, guarantees or ongoing-support promises beyond "monitoring and improvement after launch
//   is part of our process; scope and terms are agreed per project".
// - The client owns the automations, accounts and documentation and pays platform and AI usage costs directly.
//
// Inline links use [anchor text](/path). This page contains EXACTLY EIGHT contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_EDUCATION_AUTOMATION_PATH = '/products/industry-specific-ai-automation/ai-education-automation';

export const aiEducationAutomationSeo: HubSeo = {
  name: 'AI Education Automation',
  path: AI_EDUCATION_AUTOMATION_PATH,
  title: 'AI Education Automation for School Admin | Clickmasters',
  description:
    'AI education automation for schools, colleges and training providers: admissions, enrollment, enquiries and reporting, with staff approving. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'Industry-Specific AI Automation', path: '/products/industry-specific-ai-automation' },
    { name: 'AI Education Automation', path: AI_EDUCATION_AUTOMATION_PATH },
  ],
};

export const aiEducationAutomationKeywords = [
  'AI education automation',
  'school administration automation',
  'admissions automation',
  'enrollment workflow automation',
  'student enquiry chatbot',
  'student communication automation',
  'education CRM automation',
  'course registration automation',
  'parent communication automation',
  'training provider automation',
  'higher education admin automation',
  'education reporting automation',
  'how can schools use AI for admin work',
  'can a chatbot answer admissions questions',
  'how to automate enrollment follow-up',
  'is student data safe with AI automation',
  'automate application document chasing',
  'admissions enquiry automation for private training providers',
  'AI for college admissions office admin',
];

// The eight contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'industry-specific AI automation category', href: '/products/industry-specific-ai-automation', section: 'What Is AI Education Automation? (intro)' },
  { anchor: 'chatbot built for education enquiries', href: '/solutions/ai-chatbots/for-education', section: 'Who Approves What (spotlight)' },
  { anchor: 'CRM automation for schools and colleges', href: '/solutions/crm-automation/for-education', section: 'Who Approves What (spotlight)' },
  { anchor: 'appointment booking automation for education', href: '/solutions/appointment-booking-automation/for-education', section: 'Who Approves What (spotlight)' },
  { anchor: 'business process automation for education', href: '/solutions/business-process-automation/for-education', section: 'Practical Use Cases (extras)' },
  { anchor: 'Education reporting automation', href: '/solutions/reporting-automation/for-education', section: 'Practical Use Cases (extras)' },
  { anchor: 'AI knowledge assistant', href: '/services/ai-knowledge-assistants', section: 'Practical Use Cases (extras)' },
  { anchor: 'adding AI to the business software you already run', href: '/products/general-ai-automation/ai-powered-business-software', section: 'Technologies and Integrations' },
] as const;

export const aiEducationAutomation: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'AI Education Automation',
    heading: 'AI Education Automation for Schools, Colleges and Training',
    accentWords: 3,
    subheading:
      'Admissions teams, registrars and school offices spend much of their week answering the same questions, chasing the same documents and copying the same details between systems. AI education automation takes on that administrative load: enquiries, applications, enrollment follow-up, scheduling, reminders and reporting. Clickmasters builds these workflows inside your existing tools, and staff approve anything that affects a student or a decision.',
    primaryCta: { text: 'Book a Free Education Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/business.jpg',
    imageAlt:
      'Generic business automation illustration, representing administrative workflows for admissions, enrollment and office teams in education',
    imageWidth: 1200,
    imageHeight: 628,
    marquee: ['Admissions enquiries', 'Enrollment follow-up', 'Document chasing', 'Visit booking', 'Parent communication', 'Enrollment reporting'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is AI Education Automation?',
    paragraphs: [
      'AI education automation is the use of AI models and workflow automation to run the repetitive administrative work of schools, colleges and training providers: answering enquiries, logging applications, chasing documents, booking visits, sending reminders and compiling reports. Staff keep every decision about admissions, students and learning, and the automation prepares the work for them.',
      'This page sits within our [industry-specific AI automation category](/products/industry-specific-ai-automation) and covers schools, colleges, universities and private training providers. The pressure points look similar whether you run a high school, a community college or a short-course training business.',
    ],
    problems: [
      'Questions about fees, deadlines, entry requirements and start dates arrive in waves, often in the evening and at weekends, when no one is in the office.',
      'Applications stall on missing transcripts, identity documents, references and forms, tracked in spreadsheets and inboxes.',
      'A prospective student who enquired weeks ago may never hear back because the team was busy with current students.',
      'Enquiry forms, the CRM, the student information system and email each hold part of the picture, so staff retype details.',
      'Simple questions about schedules, registration or forms land on staff who also handle complex cases.',
      'Enrollment numbers, enquiry sources and pipeline status are pulled together manually before every meeting.',
    ],
  },

  explainer: {
    eyebrow: 'Where the Line Sits',
    heading: 'Administration Only, Not Teaching',
    paragraphs: [
      'We do not build teaching tools, grading systems, proctoring software or learning content. Nothing on this page touches assessment or classroom instruction. The focus is the office side of education: the admissions inbox, enrollment paperwork, parent and student communication, and the reports leadership asks for.',
      'Education workflows handle personal information about students and families, so privacy shapes every design decision. We limit what data each automation can see, keep it inside your accounts where possible, and confirm AI provider data settings during discovery. We design with privacy in mind; formal compliance with FERPA and similar student-privacy rules is a shared responsibility that depends on your specific setup and is confirmed for your project.',
    ],
    points: [
      { title: 'In Scope', description: 'The admissions inbox, enrollment paperwork, parent and student communication, and the reports leadership asks for.' },
      { title: 'Out of Scope', description: 'Teaching tools, grading systems, proctoring software, learning content, assessment and classroom instruction.' },
      { title: 'Limited Data Access', description: 'Each automation sees only the data it needs, kept inside your accounts where possible.' },
      { title: 'Provider Settings Checked', description: 'AI provider data settings are confirmed during discovery, before any student data is used.' },
    ],
  },

  features: {
    eyebrow: 'Key Capabilities',
    heading: 'What AI Education Automation Can Handle',
    intro:
      'Each capability is chosen for your office and your systems, and staff stay in control of anything that affects a student or a decision.',
    items: [
      { title: 'Student Enquiry Chatbot', description: 'Answers on your website from approved content, with a clear hand-off to staff.' },
      { title: 'Admissions Automation', description: 'Logging, routing and follow-up for every enquiry and application.' },
      { title: 'Enrollment Workflow Automation', description: 'Document checklists, reminders and status updates for applicants.' },
      { title: 'Course Registration Automation', description: 'Collecting choices, checking forms and preparing records for the registrar.' },
      { title: 'Student and Parent Communication', description: 'Scheduled notices, reminders and replies drafted for staff to check.' },
      { title: 'Education CRM Automation', description: 'Keeping records, stages and tasks current without manual updates.' },
      { title: 'Staff Admin', description: 'Internal requests, onboarding checklists and approvals routed to the right person.' },
      { title: 'Reporting', description: 'Enrollment, enquiry and pipeline summaries produced on a schedule.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'From First Enquiry to Enrolled Student',
    intro: 'Here is an example workflow for an admissions office. The details are scoped per project.',
    steps: [
      { title: 'An Enquiry Comes In', description: 'A prospective student or parent asks a question through your website chat, a form or email.' },
      { title: 'The Assistant Answers From Approved Information', description: 'A chatbot answers using only content your team has approved, and passes personal or out-of-scope questions to staff with contact details collected.' },
      { title: 'The Record Is Created and Routed', description: 'The enquirer’s details, program of interest and questions are logged in your CRM and routed to the right admissions officer.' },
      { title: 'Follow-Up and Visit Booking Run on Schedule', description: 'Approved follow-up messages go out with an invitation to book a campus visit, open day or advising call, with confirmations and reminders.' },
      { title: 'Application Documents Are Checked for Completeness', description: 'The workflow checks which required documents are present and sends polite reminders for anything missing. It does not assess the content.' },
      { title: 'Staff Make Every Admissions Decision', description: 'Complete files go to a review queue. Once staff record a decision, the workflow sends the approved letter template and starts the enrollment checklist.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Benefits for Education Teams',
    intro: 'The automation handles the repetitive steps so office and admissions staff can spend their time on the people who need them.',
    items: [
      { title: 'Prompt Answers', description: 'Prospective students and parents get prompt answers, including outside office hours.' },
      { title: 'Fewer Unanswered Enquiries', description: 'Follow-up no longer depends on spare time, so fewer enquiries go unanswered.' },
      { title: 'Time for People Who Need It', description: 'Staff spend more time on applicants and students who need a person.' },
      { title: 'Complete Files', description: 'Application files reach reviewers complete, with less chasing.' },
      { title: 'Data Entered Once', description: 'Details are entered once and shared across systems, reducing retyping.' },
      { title: 'Visible Progress', description: 'Leadership sees enrollment progress without waiting for a manual report.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Staff Stay in Control',
    heading: 'What the Automation Does and What Staff Decide',
    paragraphs: [
      'The automation prepares and handles the repetitive steps: it answers routine questions from approved content, logs and routes enquiries, chases documents and compiles reports. Offers, rejections, scholarships and any exception are decided by people.',
      'Admissions staff own the chatbot content and handle hand-offs, the registrar confirms registrations, the school office approves templates and sensitive messages, and leadership reviews reports before they are shared.',
    ],
    aiDoes: [
      'Answers admissions enquiries from approved content',
      'Logs enquiries and routes them to the right officer',
      'Tracks required documents and sends reminders',
      'Offers times, books, confirms and reminds for visits',
      'Collects course choices, checks forms and flags clashes',
      'Compiles pipeline and enrollment summaries',
    ],
    peopleDo: [
      'Decide every admissions outcome',
      'Review complete application files',
      'Confirm course registrations',
      'Approve templates and sensitive messages',
      'Review reports before they are shared',
    ],
  },

  spotlight: {
    eyebrow: 'Approval Points',
    heading: 'Who Approves What in Education Admin',
    paragraphs: [
      'A [chatbot built for education enquiries](/solutions/ai-chatbots/for-education) answers using only content your team has approved, such as program pages, entry requirements and key dates. If the question is about a personal situation or falls outside that content, it collects contact details and passes the conversation to a member of staff.',
      'Enquiries are then logged and routed; our page on [CRM automation for schools and colleges](/solutions/crm-automation/for-education) explains how records and pipelines are kept up to date. [Appointment booking automation for education](/solutions/appointment-booking-automation/for-education) handles confirmations, reminders and rescheduling for campus visits, open days and advising calls.',
    ],
    points: [
      { title: 'Admissions Enquiries', description: 'Answers from approved content, logs the enquiry, hands off personal questions. Admissions staff own the content and handle hand-offs.' },
      { title: 'Application Document Chasing', description: 'Tracks required documents and sends reminders. An admissions officer reviews complete files.' },
      { title: 'Visits and Advising Calls', description: 'Offers times, books, confirms and reminds. Staff set availability and handle changes.' },
      { title: 'Admissions Decisions', description: 'Sends the approved letter after a decision is recorded. Admissions staff decide every outcome.' },
      { title: 'Course Registration Admin', description: 'Collects choices, checks forms, flags clashes for review. The registrar confirms registrations.' },
      { title: 'Parent Communication', description: 'Sends scheduled notices and reminders from templates. The school office approves templates and sensitive messages.' },
      { title: 'Enrollment Reporting', description: 'Compiles pipeline and enrollment summaries. Leadership reviews before sharing.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Use Cases',
      heading: 'Practical Use Cases in Education Administration',
      accentWords: 2,
      paragraphs: [
        'These are examples, scoped per project after discovery. Higher education admin automation often starts in admissions and the registrar’s office: enquiry handling, application tracking, enrollment checklists and course registration paperwork. Our page on [business process automation for education](/solutions/business-process-automation/for-education) shows how multi-department processes are mapped and automated.',
        '[Education reporting automation](/solutions/reporting-automation/for-education) pulls enquiry, application and enrollment data into regular summaries. Staff can also ask an internal [AI knowledge assistant](/services/ai-knowledge-assistants) questions about policies and procedures and get answers drawn from your own documents, with sources.',
      ],
      points: [
        { title: 'Schools', description: 'Answer routine parent questions about term dates, uniforms, transport and forms. Send reminders for permission slips and events, and route anything about a specific child to the school office.' },
        { title: 'Colleges and Universities', description: 'Enquiry handling, application tracking, enrollment checklists and course registration paperwork in admissions and the registrar’s office.' },
        { title: 'Private Training Providers', description: 'Answering course questions, taking bookings, sending joining instructions, collecting payment confirmations and issuing attendance reminders.' },
        { title: 'Operations and Leadership', description: 'Regular enquiry, application and enrollment summaries, plus answers to policy and procedure questions from your own documents.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Education Automation Is For',
    items: [
      { title: 'Admissions Teams', description: 'Offices answering the same questions and chasing the same documents every cycle.' },
      { title: 'Registrars', description: 'Teams handling enrollment checklists and course registration paperwork.' },
      { title: 'School Offices', description: 'Staff fielding parent questions about term dates, forms, transport and events.' },
      { title: 'Colleges and Universities', description: 'Institutions where enquiries, applications and enrollment move across several departments.' },
      { title: 'Private Training Providers', description: 'Short-course and training businesses that need speed and volume in bookings and joining instructions.' },
      { title: 'Operations and Leadership', description: 'Leaders who want enrollment progress visible without a manual report before every meeting.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Technologies and Integrations',
    paragraphs: [
      'We work in the tools your institution already uses: Zapier, Make or n8n (which can be self-hosted when you want tighter control over data); OpenAI (GPT), Anthropic Claude, Google Gemini or open-source models; HubSpot, Salesforce or Zoho; Gmail, Outlook, Microsoft Teams, Slack, and Twilio for SMS; Airtable, SQL databases and cloud platforms on AWS, Azure or GCP. Systems connect through webhooks, REST APIs and MCP connectors.',
      'Your student information system, learning management system and admissions portal are connected only where the system offers an API or integration, confirmed during discovery. If you would rather add AI features to systems staff already know than buy another platform, see our page on [adding AI to the business software you already run](/products/general-ai-automation/ai-powered-business-software).',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n'] },
      { label: 'AI Models', items: ['OpenAI (GPT)', 'Anthropic Claude', 'Google Gemini', 'Open-source models'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'Zoho'] },
      { label: 'Communication', items: ['Gmail', 'Outlook', 'Microsoft Teams', 'Slack', 'Twilio'] },
      { label: 'Data and Cloud', items: ['Airtable', 'SQL databases', 'AWS', 'Azure', 'GCP'] },
      { label: 'Connections', items: ['Webhooks', 'REST APIs', 'MCP connectors'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Education Teams Work With Clickmasters',
    intro: 'We build administrative workflows around your office, your systems and your academic calendar.',
    items: [
      { title: 'Built in Your Tools', description: 'Automations run in your accounts and alongside your existing systems.' },
      { title: 'Yours to Keep', description: 'You own the automations, accounts and documentation, and you pay platform and AI usage costs directly.' },
      { title: 'Staff Stay in Control', description: 'Admissions decisions, student matters and sensitive messages always go to a person.' },
      { title: 'A Clear Starting Point', description: 'The free audit identifies the tasks worth automating first, before you commit to anything.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Implement Education Automation',
    intro:
      'Every project follows our six published steps, adapted to your academic calendar and team, and building starts only after you approve the plan.',
    steps: [
      { title: 'Discovery', description: 'We learn how enquiries, applications and enrollment move through your office, which systems hold the data, and where staff time goes.' },
      { title: 'Strategy and Mapping', description: 'We map triggers, decision points, actions, integrations and approval points, and agree what the automation may and may not say to students and parents.' },
      { title: 'Development', description: 'We build the workflows, chatbot content and connections in your accounts, ideally timed around your admissions cycle.' },
      { title: 'Testing', description: 'We test with realistic enquiries and applications, including edge cases and failure scenarios such as unusual questions, incomplete forms and unavailable systems.' },
      { title: 'Deployment', description: 'The automation is launched in your live environment, and your team receives the documentation and access.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'You do not need to automate the whole office at once. The free audit tells you which tasks are worth automating first and which are not, with no obligation.',
  },

  cta: {
    bandHeading: 'Find your first education workflow',
    heading: 'Give Your Admissions and Office Staff Their Time Back',
    description:
      'Start with the enquiry, application or reporting task your team repeats most, and we will show you what automating it involves and where staff stay in control.',
    primary: { text: 'Book a Free Education Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Education Automation: Common Questions',
  faqSideText: 'Not sure which admissions or office task to automate first? Book a free audit and we will review it with you.',
  faqs: [
    {
      question: 'How can schools use AI for admin work?',
      answer:
        'Schools can use AI to answer routine enquiries, log and route applications, chase missing documents, send reminders and compile reports. The automation prepares and handles the repetitive steps, while staff keep decisions about admissions and students. Most schools start with the task that takes the most office time.',
    },
    {
      question: 'Can a chatbot answer admissions questions?',
      answer:
        'Yes, a chatbot can answer common admissions questions about programs, entry requirements, deadlines and fees, using only content your team has approved. Questions about personal circumstances or anything outside that content are handed to admissions staff with the conversation attached.',
    },
    {
      question: 'How do you automate enrollment follow-up?',
      answer:
        'Enrollment follow-up is automated with a sequence of approved messages triggered by the applicant’s stage in your CRM. The workflow sends reminders for missing documents, deadlines and next steps, and stops or alerts staff when the applicant replies or their status changes.',
    },
    {
      question: 'Is student data safe with AI automation?',
      answer:
        'Student data is handled with care at every step: each automation sees only the data it needs, information stays in your accounts where possible, and AI provider settings are confirmed during discovery. We design with privacy in mind; formal compliance with FERPA and similar rules is a shared responsibility that depends on your setup and is confirmed for your project.',
    },
    {
      question: 'Does AI education automation grade work or teach students?',
      answer:
        'No. AI education automation as we build it covers administration only, such as enquiries, enrollment, scheduling, communication and reporting. We do not build grading, teaching, proctoring or learning-content tools.',
    },
    {
      question: 'Will it connect to our student information system?',
      answer:
        'It can, where your student information system offers an API or integration, which we confirm during discovery. If it does not, we look at alternatives such as scheduled exports or working through your CRM, and we tell you if a connection is not practical.',
    },
    {
      question: 'Is this only for universities?',
      answer:
        'No. The same approach works for schools, colleges, universities and private training providers. The workflows differ in scale and detail, and each is scoped per project.',
    },
  ],
};
