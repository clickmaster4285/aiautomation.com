// content/products/ai-hr-recruitment/ai-recruitment-software.ts
// Copy + SEO for /products/ai-hr-recruitment/ai-recruitment-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the end-to-end hiring pipeline as a workflow: candidate intake, pipeline stages,
//   hiring team collaboration and candidate communication. Screening and interview scheduling
//   are only introduced here (they have their own sibling pages).
// - Verified on the site: candidate intake, candidate data processing, internal notifications and
//   recruitment administration (Make / Zapier pages); form and application processing into
//   structured records (document automation). Everything else is framed as a workflow we scope.
// - Do NOT name ATS, HRIS or calendar products. No payroll, attendance, performance tracking.
// - AI summarizes and drafts; people decide. AI is not bias-free. Local AI-in-hiring rules may apply.
// - No statistics, prices, testimonials, certifications, guarantees or ongoing-support promises.
// - Clickmasters builds this inside the client's existing tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_RECRUITMENT_SOFTWARE_PATH = '/products/ai-hr-recruitment/ai-recruitment-software';

export const aiRecruitmentSoftwareSeo: HubSeo = {
  name: 'AI Recruitment Software',
  path: AI_RECRUITMENT_SOFTWARE_PATH,
  title: 'AI Recruitment Software for Hiring Pipelines | Clickmasters',
  description:
    'AI recruitment software built on your tools: candidate intake, pipeline stages, hiring team updates and candidate messages you approve. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI HR & Recruitment', path: '/products/ai-hr-recruitment' },
    { name: 'AI Recruitment Software', path: AI_RECRUITMENT_SOFTWARE_PATH },
  ],
};

export const aiRecruitmentSoftwareKeywords = [
  'AI recruitment software',
  'AI recruiting software',
  'recruitment workflow automation',
  'hiring pipeline automation',
  'automated candidate intake',
  'candidate communication automation',
  'hiring team collaboration',
  'AI-assisted recruiting',
  'recruitment pipeline management',
  'how to automate a hiring process',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI HR and recruitment', href: '/products/ai-hr-recruitment', section: 'What Is AI Recruitment Software?' },
  { anchor: 'turns submitted forms into structured records', href: '/solutions/document-automation', section: 'One Hire, Step by Step (explainer)' },
  { anchor: 'Make automation', href: '/platforms/make-automation-services', section: 'Recruitment Tools We Build Around' },
  { anchor: 'AI resume screening software', href: '/products/ai-hr-recruitment/ai-resume-screening-software', section: 'What AI Handles and What Recruiters Decide' },
  { anchor: 'AI interview scheduling software', href: '/products/ai-hr-recruitment/ai-interview-scheduling-software', section: 'Hiring Team Collaboration (spotlight)' },
] as const;

export const aiRecruitmentSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Recruitment Software',
    heading: 'AI Recruitment Software That Keeps Every Candidate Moving Through Your Pipeline',
    accentWords: 5,
    subheading:
      'We build AI recruitment software as a set of connected workflows inside the tools your hiring team already uses. Applications become candidate records, every stage change triggers the next step, and candidates hear back on time, while recruiters and hiring managers make the decisions.',
    primaryCta: { text: 'Book a Free Recruitment Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/bussiness.png',
    imageAlt: 'Hiring team managing a recruitment pipeline with AI recruitment software workflows',
    imageWidth: 667,
    imageHeight: 374,
    marquee: ['Candidate intake', 'Pipeline stages', 'Hiring manager updates', 'Feedback collection', 'Candidate messages', 'Offer hand-off'],
  },

  intro: {
    eyebrow: 'Hiring, Connected',
    heading: 'What Is AI Recruitment Software?',
    paragraphs: [
      'AI recruitment software is the system that runs your hiring pipeline from the moment someone applies to the moment they accept or are declined. Workflows move each candidate through agreed stages and tell the right people what to do next. AI handles the text-heavy parts, such as summarizing an application or drafting a status update, so the team reads less and responds faster.',
      'At Clickmasters, it is not a product you subscribe to. We build it inside the forms, inboxes, spreadsheets and hiring tools you already have, and it forms one part of our wider [AI HR and recruitment](/products/ai-hr-recruitment) work. The result belongs to you once it is handed over.',
      'Teams usually come to us when hiring has outgrown the way it was first set up. Roles open faster than one recruiter can track, hiring managers lose sight of where things stand, and strong applicants drift away because no one replied.',
    ],
    problems: [
      'Candidates apply through several channels and some are never logged.',
      'No one can say at a glance how many people are at each stage.',
      'Hiring managers ask for updates instead of seeing them.',
      'Interview feedback arrives late, in different formats, or not at all.',
      'Applicants wait days for a reply, then accept another offer.',
    ],
  },

  explainer: {
    eyebrow: 'One Hire, Step by Step',
    heading: 'What a Recruitment Workflow Looks Like in Practice',
    paragraphs: [
      'Take a single application. A candidate submits the form on your careers page. A workflow picks it up, creates a candidate record against the right role and attaches the CV. The same intake approach that [turns submitted forms into structured records](/solutions/document-automation) elsewhere in a business pulls the key details into fields your team can sort and filter.',
      'Next, the recruiter and the hiring manager receive a short summary with a link to the record. When the recruiter moves the candidate to the interview stage, the workflow starts interview coordination and drafts a message to the candidate for approval. After the interview, each panel member is asked for feedback. Once a decision is logged, the matching candidate message is prepared and, for a hire, the offer and onboarding steps begin.',
    ],
    points: [
      { title: 'Trigger', description: 'A new application, a stage change or a logged decision starts the next part of the workflow.' },
      { title: 'Record', description: 'Every action is written back to the candidate record, so the history is complete.' },
      { title: 'Notify', description: 'The person who needs to act is told, with context, in the tool they already check.' },
      { title: 'Hand Over', description: 'When a person decides, the workflow carries out the agreed follow-up steps.' },
    ],
  },

  features: {
    eyebrow: 'What We Build',
    heading: 'Recruitment Workflows Inside AI Recruitment Software',
    intro:
      'These are the building blocks we scope most often. Each one is configured around your stages, roles and approval rules, and only the ones that fit your process are built.',
    items: [
      { title: 'Candidate Intake', description: 'Applications from your careers page, inboxes and forms land as one set of candidate records, tagged by role and source.' },
      { title: 'Pipeline Stages', description: 'Your stages, from applied to hired or declined, are defined once, and each move triggers the actions you agreed.' },
      { title: 'Hiring Manager Updates', description: 'Managers receive concise summaries when a candidate needs their input, instead of a weekly status chase.' },
      { title: 'Structured Feedback', description: 'Interviewers are asked for feedback in a consistent format, and their notes are added to the candidate record.' },
      { title: 'Candidate Communication', description: 'Acknowledgements, stage updates and outcome messages are drafted from templates your team approves.' },
      { title: 'Pipeline Overview', description: 'A view of open roles, stage counts and stalled candidates, built from the data the workflows already record.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How AI Recruitment Software Runs a Hiring Pipeline',
    intro:
      'Each stage of hiring becomes a workflow step with a clear owner. Rules move the work along, AI prepares the reading and writing, and a person signs off every decision.',
    steps: [
      { title: 'Apply', description: 'A candidate applies, and the workflow creates or updates their record with the role, source and documents.' },
      { title: 'Summarize', description: 'AI produces a short overview of the application against the role requirements your team wrote.' },
      { title: 'Review', description: 'The recruiter reads the summary and the original application, then decides the next stage.' },
      { title: 'Coordinate', description: 'Moving to interview starts the coordination workflow and briefs the hiring team.' },
      { title: 'Collect Feedback', description: 'Panel members submit structured feedback, and the hiring manager sees it in one place.' },
      { title: 'Close the Loop', description: 'The decision is logged, the candidate receives an approved message and, for a hire, onboarding begins.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Hiring Teams Use AI Recruitment Software',
    intro:
      'Recruiters gain the most when admin stops competing with conversations. These are the practical changes teams notice once the pipeline runs as a workflow.',
    items: [
      { title: 'No Lost Applicants', description: 'Every application is captured and assigned, whichever channel it came through.' },
      { title: 'Quicker Replies', description: 'Candidates receive acknowledgements and updates as their status changes.' },
      { title: 'Shared Visibility', description: 'Recruiters and managers look at the same pipeline instead of separate notes.' },
      { title: 'Better Feedback', description: 'Consistent feedback formats make candidates easier to compare fairly.' },
      { title: 'Repeatable Hiring', description: 'Each role follows the same agreed steps, whoever is recruiting for it.' },
      { title: 'More Recruiter Time', description: 'Less copying and chasing leaves more time for calls with candidates and managers.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and People',
    heading: 'What AI Handles and What Recruiters Decide',
    paragraphs: [
      'AI is useful in recruitment where the work is reading and writing. It can condense a long application into the points a reviewer needs, draft a polite update for a candidate and pull feedback comments into one summary. Rules handle the rest: moving records, sending notifications and starting the next step.',
      'Judgment stays with people. AI is not bias-free, so its summaries are a starting point for review, never a verdict, and the setup should be checked from time to time. The screening step has its own page on [AI resume screening software](/products/ai-hr-recruitment/ai-resume-screening-software), including how criteria are written. Because rules on AI in hiring vary by location, please confirm your obligations with your own advisers.',
    ],
    aiDoes: [
      'Summarizes applications against your stated role requirements',
      'Drafts candidate messages from approved templates',
      'Condenses interviewer feedback into one overview',
      'Flags records with missing details or no recent activity',
      'Keeps the pipeline record up to date',
    ],
    peopleDo: [
      'Write the role requirements and stage rules',
      'Review applications and decide who progresses',
      'Approve candidate-facing message templates',
      'Run interviews and make the hiring decision',
      'Handle offers and difficult conversations',
    ],
  },

  spotlight: {
    eyebrow: 'Hiring Team Collaboration',
    heading: 'Hiring Team Collaboration That Does Not Rely on Chasing',
    paragraphs: [
      'Most hiring delays happen between people, not inside any one task. A CV waits for a manager to look at it. Feedback waits for an interviewer to write it up. An offer waits for an approval nobody knew was needed. The workflows we build make each hand-off explicit: who needs to act, by when and with what information.',
      'Interviews are a common hand-off point. Arranging times with candidates and panels has its own page on [AI interview scheduling software](/products/ai-hr-recruitment/ai-interview-scheduling-software). Here, the focus is everything around it, so the panel arrives prepared and their input reaches the decision maker quickly.',
    ],
    points: [
      { title: 'Clear Owners', description: 'Each stage has a named owner, and the workflow tells them when something is waiting.' },
      { title: 'Panel Briefings', description: 'Interviewers receive the candidate summary and the criteria before they meet.' },
      { title: 'Feedback Requests', description: 'Panel members are asked for feedback after each interview, and gaps are visible to the recruiter.' },
      { title: 'Approval Routing', description: 'Where your process needs sign-off, such as for an offer, the request goes to the right approver.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Candidate Communication',
      heading: 'Candidate Communication That Stays Consistent',
      accentWords: 3,
      paragraphs: [
        'Silence is one of the most common complaints applicants have about hiring. It is rarely intentional; recruiters simply run out of time to write updates. Tying messages to pipeline stages means each candidate hears something when their status changes, in wording your team has already approved.',
        'AI can personalize a template with the role and the next step, but the templates themselves are written and signed off by your team. Sensitive messages, such as a decline after a final interview, can be set to wait for a person to review before they are sent.',
      ],
      points: [
        { title: 'Acknowledgements', description: 'Applicants are told their application arrived and what happens next.' },
        { title: 'Stage Updates', description: 'Moving to interview or another stage prepares the matching message.' },
        { title: 'Outcome Messages', description: 'Decisions lead to a clear, respectful message drafted from your template.' },
        { title: 'Human Review Points', description: 'Any message type can require approval before it goes out.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Teams That Benefit From AI Recruitment Software',
    items: [
      { title: 'In-House Recruiters', description: 'Recruiters managing several open roles who need admin to stop eating into candidate time.' },
      { title: 'Recruitment Agencies', description: 'Agencies processing candidate data and updates for multiple clients and roles at once.' },
      { title: 'Founders Hiring Directly', description: 'Small companies where the founder or a manager runs hiring alongside their day job.' },
      { title: 'Seasonal and Volume Hiring', description: 'Businesses filling many similar roles in a short window, where intake volume is the bottleneck.' },
      { title: 'Multi-Site Operations', description: 'Employers that want every location to follow the same hiring steps and messages.' },
      { title: 'Growing Teams', description: 'Companies moving from occasional hires to a steady hiring plan for the first time.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Recruitment Tools We Build Around',
    paragraphs: [
      'Your hiring data might live in a dedicated hiring tool, an Airtable base, a spreadsheet or a shared inbox. We connect those systems with your email and team chat through platforms such as n8n, Zapier and [Make automation](/platforms/make-automation-services), which is well suited to candidate data processing and internal notifications.',
      'Every integration depends on what your tools allow, so we check connections and access during the audit. Where a tool has an API, a custom connection may be possible. The written quote lists exactly which systems will be connected.',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['n8n', 'Make', 'Zapier'] },
      { label: 'Candidate Data', items: ['Airtable', 'Spreadsheets', 'Your hiring tool'] },
      { label: 'Team Communication', items: ['Slack', 'Microsoft Teams', 'Email'] },
      { label: 'Custom Connections', items: ['APIs', 'Web forms', 'Shared inboxes'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Recruitment Workflows With Clickmasters',
    intro:
      'We design hiring automation around your stages and your people. The aim is a pipeline your team trusts, not another tool they work around.',
    items: [
      { title: 'Your Process, Mapped', description: 'We document your current stages and hand-offs before we automate any of them.' },
      { title: 'Decisions Stay Human', description: 'AI summarizes and drafts. Recruiters and managers decide who progresses and who is hired.' },
      { title: 'No New Platform', description: 'Workflows run in tools you already use, so your team does not have to switch systems.' },
      { title: 'Plain Talk About AI', description: 'We explain its limits, including bias, and where a simple rule works better.' },
      { title: 'Tested on Real Roles', description: 'Workflows go live in stages, with your team checking output before it runs unattended.' },
      { title: 'Full Handover', description: 'You receive the workflows, accounts and documentation when the project ends.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up AI Recruitment Software',
    intro:
      'Most projects start with intake and stage updates for one or two roles, then expand to the full pipeline. You see and approve the plan first.',
    steps: [
      { title: 'Free Audit', description: 'We look at how you hire today, which tools hold candidate data and where time is lost.' },
      { title: 'Pipeline Mapping', description: 'Stages, owners, messages and approval points are agreed with your hiring team.' },
      { title: 'Build', description: 'Intake, stage, notification and messaging workflows are built inside your systems.' },
      { title: 'Test', description: 'Sample applications run through every stage before any real candidate data is used.' },
      { title: 'Staged Rollout', description: 'The pipeline goes live on selected roles first, with people reviewing each step.' },
      { title: 'Handover', description: 'Workflows, accounts and documentation are handed over so your team owns them.' },
    ],
    note: 'Your written quote covers the scope, platforms, deliverables, usage costs and timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find the gaps in your hiring pipeline',
    heading: 'Build a Hiring Pipeline Your Team Can Rely On',
    description:
      'Book a free, no-obligation recruitment automation audit. We will review how candidates move through your process today, show where workflows would save the most time and be clear about where they would not.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Recruitment Software: Frequently Asked Questions',
  faqSideText: 'Want to know how this would work for your roles and tools? Book a free audit and we will walk through it with you.',
  faqs: [
    {
      question: 'What is AI recruitment software?',
      answer:
        'AI recruitment software runs your hiring pipeline as connected workflows: capturing applications, moving candidates through stages, updating the hiring team and drafting candidate messages. Clickmasters builds it inside your existing tools rather than selling a separate platform.',
    },
    {
      question: 'Do we need to replace our current hiring tool?',
      answer:
        'Usually not. We build around the tools you already use, whether that is a dedicated hiring tool, a spreadsheet or an Airtable base. The audit confirms what can be connected.',
    },
    {
      question: 'Does the AI decide who gets hired?',
      answer:
        'No. AI summarizes applications and drafts messages. Recruiters and hiring managers review candidates and make every decision about who progresses and who is hired.',
    },
    {
      question: 'How does it handle applications from different channels?',
      answer:
        'Intake workflows collect applications from your careers page, forms and inboxes and turn them into candidate records tagged by role and source, so the team works from one list.',
    },
    {
      question: 'Can candidates receive updates automatically?',
      answer:
        'Yes, from templates your team writes and approves. Each stage change can prepare the matching message, and sensitive message types can be held for a person to review before sending.',
    },
    {
      question: 'How do hiring managers stay involved?',
      answer:
        'Managers receive short summaries when a candidate needs their input, see feedback in one place and get approval requests where your process needs them, without having to ask for status updates.',
    },
    {
      question: 'Is AI in recruitment biased?',
      answer:
        'It can be. AI may reflect patterns in data or in how requirements are worded. That is why its output is reviewed by people and the setup should be checked periodically. Rules on AI in hiring vary by location, so confirm your obligations with your advisers.',
    },
    {
      question: 'Does this include resume screening and interview scheduling?',
      answer:
        'They can be part of the same pipeline. Screening support and interview coordination each have their own pages covering how those steps work in more detail.',
    },
    {
      question: 'Is it suitable for a small company?',
      answer:
        'Yes. A small team can start with intake and candidate acknowledgements for one role, then add stages and feedback workflows once the first part is working.',
    },
    {
      question: 'How long does setup take?',
      answer:
        'It depends on the number of stages, tools and roles involved. After the free audit, your written quote sets out the scope, deliverables, usage costs and a timeline.',
    },
  ],
};
