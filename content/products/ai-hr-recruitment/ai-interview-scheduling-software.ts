// content/products/ai-hr-recruitment/ai-interview-scheduling-software.ts
// Copy + SEO for /products/ai-hr-recruitment/ai-interview-scheduling-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is interview coordination only: availability, time options, booking, confirmations,
//   rescheduling, panel coordination, interviewer briefs and hand-offs. Not screening, not onboarding.
// - Do NOT name calendar or video platforms. The site’s appointment booking page
//   (/solutions/appointment-booking-automation) names none. It does describe availability checks,
//   confirmation and reminder sequences, self-service rescheduling, calendar and CRM sync and intake
//   at booking for CUSTOMER bookings. For interviews these are framed as workflow patterns we scope
//   in the audit around the client’s calendar tools — never as built-in product features.
// - No ATS names. No payroll, attendance, time-off or performance features.
// - Integrations beyond n8n, Make, Zapier, Airtable, Slack, Microsoft Teams and email are framed as
//   scoped in the audit.
// - No statistics, prices, testimonials, guarantees, or ongoing-support promises.
// - Clickmasters builds this inside the client’s existing tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_INTERVIEW_SCHEDULING_SOFTWARE_PATH = '/products/ai-hr-recruitment/ai-interview-scheduling-software';

export const aiInterviewSchedulingSoftwareSeo: HubSeo = {
  name: 'AI Interview Scheduling Software',
  path: AI_INTERVIEW_SCHEDULING_SOFTWARE_PATH,
  title: 'AI Interview Scheduling Software for Teams | Clickmasters',
  description:
    'AI interview scheduling software built around your calendars: candidates get time options, panels stay coordinated and changes are handled in one workflow.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI HR & Recruitment', path: '/products/ai-hr-recruitment' },
    { name: 'AI Interview Scheduling Software', path: AI_INTERVIEW_SCHEDULING_SOFTWARE_PATH },
  ],
};

export const aiInterviewSchedulingSoftwareKeywords = [
  'AI interview scheduling software',
  'interview scheduling automation',
  'automated interview scheduling',
  'AI interview scheduling',
  'interview coordination workflow',
  'panel interview scheduling',
  'candidate self-scheduling',
  'interview rescheduling workflow',
  'recruiting coordination automation',
  'interviewer availability',
  'interview confirmation messages',
  'how to schedule interviews faster',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI HR and recruitment', href: '/products/ai-hr-recruitment', section: 'What Is AI Interview Scheduling Software?' },
  { anchor: 'appointment booking automation', href: '/solutions/appointment-booking-automation', section: 'Core Pieces of an Interview Scheduling Workflow' },
  { anchor: 'AI resume screening software', href: '/products/ai-hr-recruitment/ai-resume-screening-software', section: 'What the Workflow Handles and What Recruiters Keep' },
  { anchor: 'AI HR automation', href: '/products/ai-hr-recruitment/ai-hr-automation', section: 'After the Final Interview (extras)' },
  { anchor: 'Zapier automation services', href: '/platforms/zapier-automation-services', section: 'Tools the Scheduling Workflow Connects' },
] as const;

export const aiInterviewSchedulingSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'AI Interview Scheduling',
    heading: 'AI Interview Scheduling Software That Ends the Back-and-Forth Emails',
    accentWords: 4,
    subheading:
      'We build AI interview scheduling software as a workflow inside the tools your team already uses. Once a candidate is cleared for interview, the workflow gathers interviewer availability, offers the candidate suitable times, records the booking and keeps everyone informed when plans change.',
    primaryCta: { text: 'Book a Free Interview Scheduling Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/bussiness.png',
    imageAlt: 'Recruiter coordinating candidate interview times with a hiring panel through an automated scheduling workflow',
    imageWidth: 667,
    imageHeight: 374,
    marquee: ['Interviewer availability', 'Candidate time options', 'Panel coordination', 'Rescheduling handled', 'Interviewer briefs'],
  },

  intro: {
    eyebrow: 'Interview Coordination',
    heading: 'What Is AI Interview Scheduling Software?',
    paragraphs: [
      'AI interview scheduling software coordinates the work between a candidate being shortlisted and an interview actually taking place. It finds times when the right interviewers are free, offers them to the candidate, books the slot and tells everyone involved. When something changes, it starts the same process again without a recruiter rewriting the whole email thread.',
      'Scheduling looks like a small task until you count the messages. One interview with three panel members can take a dozen emails to arrange. Multiply that by every candidate on every open role and coordination quietly becomes a full-time job. Meanwhile the candidate waits, and a slow reply can cost you someone you wanted to hire.',
      'This page focuses on interview coordination only. It is one part of our [AI HR and recruitment](/products/ai-hr-recruitment) work. Clickmasters is an automation agency, so we scope and build the scheduling workflow around your calendars and hiring tools instead of handing you another app to log in to.',
    ],
    problems: [
      'Recruiters spend hours each week trading emails about availability.',
      'Panel interviews stall because one interviewer never replies.',
      'Candidates wait days for a time slot after being told they are through.',
      'Last-minute changes leave interviewers without the right details or the latest time.',
    ],
  },

  features: {
    eyebrow: 'Workflow Pieces',
    heading: 'Core Pieces of an Interview Scheduling Workflow',
    intro:
      'None of these are switched on by default. We scope each one in the audit, around the calendar tools and hiring process you already have. For customer bookings we build similar patterns, such as availability checks, confirmations and calendar records, in our [appointment booking automation](/solutions/appointment-booking-automation) work.',
    items: [
      { title: 'Interview Triggers', description: 'A candidate moving to the interview stage starts the scheduling workflow automatically.' },
      { title: 'Availability Gathering', description: 'Interviewer free time is read from the calendar tool your team already uses, where it allows it.' },
      { title: 'Candidate Time Options', description: 'The candidate receives a short list of suitable times and picks the one that works.' },
      { title: 'Panel Coordination', description: 'Times are only offered when every required interviewer for that round is free.' },
      { title: 'Booking Records', description: 'The confirmed interview is added to calendars and to the candidate record together.' },
      { title: 'Confirmation Messages', description: 'Candidates and interviewers receive the time, format and any instructions you approve.' },
      { title: 'Rescheduling Paths', description: 'When either side needs to move, the workflow offers new times and updates every record.' },
      { title: 'Interviewer Briefs', description: 'Each interviewer gets the candidate summary and the questions for their round before the interview.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How One Interview Gets Scheduled',
    intro:
      'This is the path for a single first-round interview with a small panel. Your own rules decide the details at each step.',
    steps: [
      { title: 'Candidate Cleared', description: 'A reviewer moves the candidate to the interview stage, and the scheduling workflow starts.' },
      { title: 'Panel Identified', description: 'The workflow looks up which interviewers are needed for that role and round.' },
      { title: 'Availability Checked', description: 'Free time is gathered for each panel member, within the working hours and buffers you set.' },
      { title: 'Options Sent', description: 'The candidate receives a few suitable times in a message your team has approved.' },
      { title: 'Interview Booked', description: 'The chosen time is recorded in calendars and the candidate record, and confirmations go out.' },
      { title: 'Briefs and Follow-Through', description: 'Interviewers receive their brief, and any reschedule or no reply is routed to the right person.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Teams Automate Interview Coordination',
    intro:
      'The gains come from removing waiting and retyping, not from changing how you interview.',
    items: [
      { title: 'Faster Time to Interview', description: 'Candidates get time options soon after being shortlisted, not when a recruiter finds a gap.' },
      { title: 'Fewer Email Threads', description: 'Availability, booking and changes are handled in one workflow instead of long chains of replies.' },
      { title: 'Prepared Interviewers', description: 'Every panel member arrives with the same candidate information and the right questions.' },
      { title: 'A Better Candidate Experience', description: 'Clear, prompt messages show candidates that your process is organised.' },
      { title: 'Accurate Records', description: 'Calendars and candidate records agree, so nobody has to check which time is real.' },
      { title: 'Recruiter Time Back', description: 'Coordinators spend their time on candidates and hiring managers rather than diaries.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Workflow and People',
    heading: 'What the Workflow Handles and What Recruiters Keep',
    paragraphs: [
      'Most of interview scheduling is rules: who needs to be there, when they are free and what everyone should be told. Automation handles those rules reliably. AI helps with the parts that involve language, such as reading a candidate’s reply asking for a different day or drafting a brief from the candidate’s screening notes.',
      'Scheduling works best when the step before it is organised. If shortlists are prepared by [AI resume screening software](/products/ai-hr-recruitment/ai-resume-screening-software), confirmed candidates can move straight into scheduling with their summary attached.',
    ],
    aiDoes: [
      'Starts scheduling when a candidate reaches the interview stage',
      'Finds times when the required interviewers are free',
      'Offers time options to the candidate',
      'Reads replies that ask for changes and routes them',
      'Drafts interviewer briefs from screening notes',
      'Keeps calendars and candidate records in step',
    ],
    peopleDo: [
      'Decide who interviews for each role and round',
      'Approve every message template candidates receive',
      'Handle sensitive requests, such as accessibility needs',
      'Step in when a schedule cannot be resolved automatically',
      'Run the interviews and make the hiring decisions',
    ],
  },

  spotlight: {
    eyebrow: 'Panels and Changes',
    heading: 'Panel Interviews and Rescheduling Without the Chaos',
    paragraphs: [
      'Single interviews are easy to book. Panels are where manual scheduling breaks. Three interviewers, each with their own commitments, have to line up with a candidate who may also be working a full-time job. The workflow only offers times when everyone required is free, and it can hold back or escalate when a key interviewer has no availability in the window you set.',
      'Changes are the other weak point. When an interviewer drops out or a candidate asks to move, the workflow treats it as a new scheduling request. It offers fresh times, updates every calendar entry and record, and tells each person what changed. If no suitable time can be found, it hands the situation to a recruiter instead of looping on its own.',
    ],
    points: [
      { title: 'Required and Optional Interviewers', description: 'Mark who must attend and who can join if free, so optional people never block a booking.' },
      { title: 'Multi-Round Sequences', description: 'A first round can lead to the next round being scheduled once a person approves progression.' },
      { title: 'Candidate-Led Changes', description: 'A candidate asking to move is offered new times rather than starting a fresh email chain.' },
      { title: 'Escalation Rules', description: 'Unresolved conflicts go to a named recruiter with the full history attached.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Hand-Offs',
      heading: 'After the Final Interview',
      accentWords: 2,
      paragraphs: [
        'Scheduling does not stop at the interview itself. Interviewers need a simple way to record feedback while it is fresh, and the hiring manager needs that feedback in one place before deciding. The workflow can ask each interviewer for their notes after the interview and gather them on the candidate record.',
        'Once an offer is accepted, the work changes from recruiting to onboarding. That stage is covered by [AI HR automation](/products/ai-hr-recruitment/ai-hr-automation), which handles new-hire steps, documents and internal requests after the decision is made.',
      ],
      points: [
        { title: 'Feedback Requests', description: 'Each interviewer is asked for their notes after the interview, using the structure your team prefers.' },
        { title: 'Feedback in One Place', description: 'Notes are attached to the candidate record so the hiring manager reads them together.' },
        { title: 'Decision Prompts', description: 'The hiring manager is notified when all feedback for a round is in.' },
        { title: 'Clean Hand-Off', description: 'Hired candidates pass to the onboarding workflow with their details already recorded.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Who Needs Interview Scheduling Automation',
    items: [
      { title: 'In-House Recruiting Teams', description: 'Recruiters coordinating many open roles and hiring managers at the same time.' },
      { title: 'Recruitment Agencies', description: 'Consultants arranging interviews between candidates and several client companies.' },
      { title: 'Volume Hiring', description: 'Roles with many first-round interviews in a short period, such as seasonal or contact-centre hiring.' },
      { title: 'Panel-Heavy Processes', description: 'Technical and leadership hiring where several people take part in each round.' },
      { title: 'Distributed Teams', description: 'Interviewers and candidates spread across locations and working hours.' },
      { title: 'Small Businesses', description: 'Founders and managers who run interviews themselves and have little time to coordinate them.' },
    ],
  },

  integrations: {
    eyebrow: 'Platforms',
    heading: 'Tools the Scheduling Workflow Connects',
    paragraphs: [
      'The workflow sits between your calendars, your candidate records and the channels your team reads. We confirm during the audit which calendar tools you use and what they allow us to connect to, then list it in the quote. Many teams already run hiring admin through Zapier, and our [Zapier automation services](/platforms/zapier-automation-services) cover candidate intake and internal notifications of this kind.',
      'Where Zapier is not the right fit, we build on n8n or Make, or connect directly through a tool’s API. We do not ask you to change the calendar or hiring tools your team relies on.',
    ],
    groups: [
      { label: 'Calendars', items: ['Your team’s existing calendar tool', 'Shared interviewer calendars'] },
      { label: 'Candidate Records', items: ['Your current hiring tool', 'Airtable', 'Spreadsheets'] },
      { label: 'Messages', items: ['Email', 'Slack', 'Microsoft Teams'] },
      { label: 'Automation Layer', items: ['Zapier', 'Make', 'n8n', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Interview Scheduling With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We look at how interviews are arranged today and build a workflow that fits your hiring process rather than forcing a new one on it.',
    items: [
      { title: 'Built Around Your Process', description: 'Rounds, panels, buffers and message wording follow your rules, not a template.' },
      { title: 'Your Existing Tools', description: 'We work with the calendars and hiring tools your team already uses.' },
      { title: 'People Stay in Charge', description: 'Recruiters approve templates and handle anything the workflow cannot resolve.' },
      { title: 'Clear Scope', description: 'We say in writing what the workflow will do and which connections it relies on.' },
      { title: 'Tested Before Candidates See It', description: 'Every path, including reschedules and no replies, is tested with sample data first.' },
      { title: 'Yours to Keep', description: 'You own the workflows, accounts and documentation once the build is handed over.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up Interview Scheduling Automation',
    intro:
      'We start by mapping how one interview is arranged today, from shortlist to confirmation. You approve the design before we build anything.',
    steps: [
      { title: 'Free Audit', description: 'A review of your interview process, calendar tools, panel rules and where coordination slows down.' },
      { title: 'Scheduling Map', description: 'Triggers, interviewers per round, time rules, messages and escalation points are agreed in writing.' },
      { title: 'Build', description: 'The workflow is built in your tools, with your approved message templates.' },
      { title: 'Test', description: 'Bookings, panel conflicts, reschedules and no replies are tested with sample candidates.' },
      { title: 'Staged Rollout', description: 'Scheduling goes live for one role or team first, with recruiters watching the early runs.' },
      { title: 'Handover', description: 'We hand over the workflows, accounts and documentation so your team owns the system.' },
    ],
    note: 'Your written quote lists the workflows in scope, the platforms involved, deliverables, usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find out how much coordination you can automate',
    heading: 'Get Candidates From Shortlist to Interview Faster',
    description:
      'Book a free, no-obligation interview scheduling audit. We will map how interviews are arranged today, show where a workflow would remove the waiting and the email chains, and be honest about what should stay with your recruiters.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Interview Scheduling: Common Questions',
  faqSideText: 'Curious how scheduling would work with your calendars and panels? Book a free audit and we will map it out with you.',
  faqs: [
    {
      question: 'What is AI interview scheduling software?',
      answer:
        'AI interview scheduling software coordinates interviews between candidates and interviewers: it gathers availability, offers time options, records the booking and handles changes. Clickmasters builds it as a workflow inside your existing calendar and hiring tools.',
    },
    {
      question: 'Is this a scheduling app we sign up for?',
      answer:
        'No. Clickmasters is an automation agency. We scope and build a scheduling workflow in the tools you already use, and you own it once it is handed over.',
    },
    {
      question: 'Will it work with our calendar?',
      answer:
        'We confirm this during the audit. We check which calendar tools your team uses and what they allow us to connect to, and the quote lists exactly what the workflow will rely on.',
    },
    {
      question: 'Can it schedule panel interviews?',
      answer:
        'Yes, that is one of the main reasons teams automate scheduling. The workflow only offers times when every required interviewer is free and escalates to a recruiter when no time fits.',
    },
    {
      question: 'What happens when a candidate needs to reschedule?',
      answer:
        'The request is treated as a new scheduling step. The candidate is offered new times, calendars and records are updated, and everyone is told what changed. Anything unusual goes to a recruiter.',
    },
    {
      question: 'Can candidates receive reminders before the interview?',
      answer:
        'Reminder messages can be scoped into the workflow if you want them, using wording your team approves. We decide timing and channel with you in the audit.',
    },
    {
      question: 'Do candidates talk to an AI?',
      answer:
        'Candidates receive messages from the workflow, written from templates your team has approved. AI can help read replies, such as a request for a different day, but people handle anything sensitive or unclear.',
    },
    {
      question: 'Does this replace our recruiting coordinator?',
      answer:
        'No. It removes the repetitive back-and-forth so coordinators can focus on candidates, hiring managers and the cases that need judgment.',
    },
    {
      question: 'How is interview scheduling different from resume screening?',
      answer:
        'Screening decides who should be interviewed, with a person confirming each outcome. Scheduling starts after that decision and arranges the interview itself. The two can be connected so confirmed candidates move straight into scheduling.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We map how interviews are arranged today, agree the first roles or teams to cover and send a written quote with scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
