// content/products/ai-hr-recruitment/ai-resume-screening-software.ts
// Copy + SEO for /products/ai-hr-recruitment/ai-resume-screening-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the screening step only: criteria the hiring team defines, resume summaries,
//   criteria matching, suggested shortlists, fairness checks and human review.
// - AI suggests and summarizes. People decide. Never claim the AI is unbiased, fair by default,
//   or that it removes bias. Say plainly that it needs human review and periodic checks.
// - Local employment and AI-in-hiring rules may apply: tell the client to confirm with their own
//   advisers. No legal or compliance claims (no GDPR / EEOC / certification claims).
// - No ATS names. No payroll, attendance, time-off or performance features.
// - Document reading is described the way /solutions/document-automation describes extraction
//   (fields pulled from PDFs and forms, uncertain items flagged for a person).
// - Integrations beyond n8n, Make, Zapier, Airtable, Slack, Microsoft Teams and email are framed as
//   scoped in the audit around the client’s existing tools.
// - No statistics, prices, testimonials, guarantees, or ongoing-support promises.
// - Clickmasters builds this inside the client’s existing tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_RESUME_SCREENING_SOFTWARE_PATH = '/products/ai-hr-recruitment/ai-resume-screening-software';

export const aiResumeScreeningSoftwareSeo: HubSeo = {
  name: 'AI Resume Screening Software',
  path: AI_RESUME_SCREENING_SOFTWARE_PATH,
  title: 'AI Resume Screening Software for Hiring Teams | Clickmasters',
  description:
    'AI resume screening software built in your hiring tools: summaries against criteria you set, suggested shortlists and human review before any decision.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI HR & Recruitment', path: '/products/ai-hr-recruitment' },
    { name: 'AI Resume Screening Software', path: AI_RESUME_SCREENING_SOFTWARE_PATH },
  ],
};

export const aiResumeScreeningSoftwareKeywords = [
  'AI resume screening software',
  'AI resume screening',
  'automated resume screening',
  'resume screening automation',
  'AI candidate screening',
  'AI CV screening',
  'resume summaries with AI',
  'candidate shortlisting workflow',
  'screening criteria for hiring',
  'human review in AI hiring',
  'responsible AI in recruitment',
  'how to screen resumes faster',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI HR and recruitment automation', href: '/products/ai-hr-recruitment', section: 'What Is AI Resume Screening Software?' },
  { anchor: 'document automation', href: '/solutions/document-automation', section: 'Reading a Resume the Way the Criteria Need It (explainer)' },
  { anchor: 'AI recruitment software', href: '/products/ai-hr-recruitment/ai-recruitment-software', section: 'What AI Prepares and What Your Hiring Team Decides' },
  { anchor: 'AI interview scheduling software', href: '/products/ai-hr-recruitment/ai-interview-scheduling-software', section: 'From Shortlist to Next Step (spotlight)' },
  { anchor: 'automation built on Make', href: '/platforms/make-automation-services', section: 'Where the Screening Workflow Runs' },
] as const;

export const aiResumeScreeningSoftware: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'AI Resume Screening',
    heading: 'AI Resume Screening Software That Prepares the Shortlist and Leaves the Decision to You',
    accentWords: 6,
    subheading:
      'We build AI resume screening software inside the hiring tools you already use. Your team writes the criteria. AI reads each application against them, writes a short summary with the evidence it found and suggests a shortlist. A person reviews every recommendation before a candidate moves forward or is turned down.',
    primaryCta: { text: 'Book a Free Resume Screening Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/bussiness.png',
    imageAlt: 'Hiring team reviewing AI-prepared resume summaries and a suggested candidate shortlist',
    imageWidth: 667,
    imageHeight: 374,
    marquee: ['Criteria you define', 'Evidence-based summaries', 'Suggested shortlists', 'Human review on every decision', 'Periodic fairness checks'],
  },

  intro: {
    eyebrow: 'The Screening Step',
    heading: 'What Is AI Resume Screening Software?',
    paragraphs: [
      'AI resume screening software reads incoming applications against a set of criteria and gives your hiring team a structured first pass. Instead of opening two hundred attachments, a recruiter sees a short summary for each candidate. It shows which requirements the resume appears to meet, which ones it does not mention and where the evidence sits in the document.',
      'Screening is usually the slowest part of an early hiring process. A popular role can bring in far more applications than anyone has time to read properly. Good candidates wait for days. Tired reviewers start skimming, and two people on the same team end up judging applications in two different ways.',
      'This page covers one step: screening. It sits inside our wider [AI HR and recruitment automation](/products/ai-hr-recruitment) work, and it can run on its own or as part of a full hiring workflow. Clickmasters is an automation agency, so we build the screening workflow in your existing tools rather than selling you a new platform.',
    ],
    problems: [
      'Applications pile up in an inbox or folder faster than the team can read them.',
      'Each reviewer applies slightly different standards to the same role.',
      'Strong candidates wait so long for a reply that they accept other offers.',
      'Nobody can explain afterwards why one applicant was shortlisted and another was not.',
    ],
  },

  explainer: {
    eyebrow: 'Criteria First',
    heading: 'Reading a Resume the Way the Criteria Need It',
    paragraphs: [
      'Resumes arrive as PDFs, documents and form entries, each laid out differently. The workflow first turns them into consistent fields: work history, skills, qualifications and anything else your criteria ask about. It uses the same approach to reading documents that we apply in [document automation](/solutions/document-automation), where fields are pulled from varied layouts and anything the system is unsure about is flagged for a person.',
      'Only then does AI compare the application with your criteria. The criteria come from the hiring manager, not from the software. A typical set separates must-have requirements, such as a licence a role legally needs, from nice-to-have signals, such as experience with a particular type of project. AI reports what it found against each one. It does not invent a single score that hides its reasoning.',
    ],
    points: [
      { title: 'Must-Have Criteria', description: 'Requirements the role genuinely depends on, written and agreed by the hiring team before screening starts.' },
      { title: 'Nice-to-Have Signals', description: 'Helpful experience that adds context to a summary but never rules a candidate out by itself.' },
      { title: 'Evidence Notes', description: 'Each match points back to the part of the resume it came from, so a reviewer can check it in seconds.' },
      { title: 'Not Found, Not Failed', description: 'Missing information is marked as not mentioned, which is different from a candidate not having the skill.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What We Build Into an AI Resume Screening Workflow',
    intro:
      'Every capability is scoped around your roles, your application channels and the way your team already reviews candidates. Nothing below makes a hiring decision on its own.',
    items: [
      { title: 'Application Intake', description: 'New applications from your careers form, shared inbox or existing hiring tool are collected into one place.' },
      { title: 'Resume Field Extraction', description: 'Work history, skills and qualifications are pulled into structured fields, with unclear items flagged for review.' },
      { title: 'Criteria Templates', description: 'Each role gets a written set of must-have and nice-to-have criteria that the hiring manager approves.' },
      { title: 'Candidate Summaries', description: 'AI writes a short, plain-language summary of each application against the criteria, with evidence notes.' },
      { title: 'Suggested Shortlists', description: 'Applications are grouped into suggested tiers for a recruiter to confirm, change or override.' },
      { title: 'Review Queues', description: 'Every suggestion lands in a queue for a named reviewer, rather than triggering an automatic outcome.' },
      { title: 'Duplicate Detection', description: 'Repeat applications from the same person are linked, so they are reviewed once and consistently.' },
      { title: 'Decision Log', description: 'The criteria version, AI summary and the reviewer’s final decision are recorded together for each candidate.' },
      { title: 'Team Notifications', description: 'Hiring managers are told in Slack, Microsoft Teams or email when a shortlist is ready for them.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How One Application Moves Through Screening',
    intro:
      'Here is the path a single application takes, from the moment it arrives to the moment a person decides what happens next.',
    steps: [
      { title: 'Application Arrives', description: 'A candidate applies through your careers page, an inbox or your current hiring tool, and a candidate record is created.' },
      { title: 'Resume Is Read', description: 'The resume is converted into structured fields. Anything the workflow cannot read confidently is flagged.' },
      { title: 'Criteria Are Applied', description: 'AI compares the fields with the approved criteria for that role and notes the evidence for each match.' },
      { title: 'Summary Is Written', description: 'A short summary and a suggested tier are attached to the candidate record.' },
      { title: 'Person Reviews', description: 'A recruiter or hiring manager reads the summary, opens the resume where needed and makes the call.' },
      { title: 'Decision Is Recorded', description: 'The outcome, the reviewer and the criteria version are logged, and the next workflow step starts.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes When Screening Is Structured',
    intro:
      'The aim is not to remove people from hiring. It is to give them a consistent starting point and more time for the applications that deserve a careful read.',
    items: [
      { title: 'Faster First Response', description: 'Candidates hear back sooner because the first pass no longer waits for a free afternoon.' },
      { title: 'One Standard per Role', description: 'Every application for a role is read against the same written criteria.' },
      { title: 'Reasons You Can Explain', description: 'Each shortlist decision has a summary and a reviewer attached, so it can be explained later.' },
      { title: 'Less Copying and Pasting', description: 'Candidate details move into your records without anyone retyping them.' },
      { title: 'Better Use of Manager Time', description: 'Hiring managers review a prepared shortlist instead of an unsorted folder.' },
      { title: 'Visible Pipeline', description: 'The team can see how many applications are waiting, reviewed or moved on for each role.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Preparation, Not Judgment',
    heading: 'What AI Prepares and What Your Hiring Team Decides',
    paragraphs: [
      'AI is useful in screening because it reads quickly and applies the same checklist every time. It is not useful for deciding who deserves a job. That judgment depends on context the software does not have, so the workflow keeps it with your people.',
      'Screening is one stage of a longer process. If you also want intake, stage tracking and candidate messages handled end to end, that is the job of [AI recruitment software](/products/ai-hr-recruitment/ai-recruitment-software). Screening plugs into it as one step.',
    ],
    aiDoes: [
      'Reads resumes and pulls out structured fields',
      'Compares applications with your written criteria',
      'Writes short summaries with evidence notes',
      'Suggests a shortlist tier for each candidate',
      'Flags unclear, incomplete or duplicate applications',
      'Logs what it suggested for later review',
    ],
    peopleDo: [
      'Write and approve the screening criteria for each role',
      'Review every suggestion before a candidate moves on or is declined',
      'Override the AI whenever their judgment differs',
      'Run periodic checks on screening outcomes',
      'Make every hiring decision',
    ],
  },

  spotlight: {
    eyebrow: 'Shortlist Review',
    heading: 'From Shortlist to Next Step',
    paragraphs: [
      'A shortlist is only useful if someone acts on it quickly. When a reviewer confirms a candidate, the workflow updates the record, tells the hiring manager and prepares the next step. When a reviewer declines a candidate, the outcome is logged and any message to the candidate follows the wording and timing your team has approved.',
      'For most teams the next step is an interview. Confirmed candidates can pass straight into [AI interview scheduling software](/products/ai-hr-recruitment/ai-interview-scheduling-software), so the time saved in screening is not lost in a week of emails about availability.',
    ],
    points: [
      { title: 'Confirm or Change', description: 'Reviewers accept a suggested tier, move a candidate up or down, or ask for a second opinion.' },
      { title: 'Manager Hand-Off', description: 'The hiring manager receives the confirmed shortlist with each summary attached.' },
      { title: 'Approved Candidate Messages', description: 'Replies to candidates use templates your team signed off, sent only after a person has decided.' },
      { title: 'Borderline Cases', description: 'Applications that sit between tiers are routed to a second reviewer rather than decided by default.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Responsible AI',
      heading: 'Fairness, Bias and Human Review in AI Resume Screening',
      accentWords: 3,
      paragraphs: [
        'We will be direct about this. AI is not free of bias, and no screening tool can promise fair or neutral decisions. Language models learn from human writing, and human writing carries human assumptions. Criteria can also introduce bias by themselves. A requirement for an unbroken career history, for example, can disadvantage carers or people who have been unwell, even if nobody meant it to.',
        'That is why the workflows we build treat AI as an assistant to reviewers, never as the decision-maker. The safeguards below are designed in from the first workshop, not added at the end. They reduce risk. They do not remove it, and they only work if your team keeps using them after launch.',
        'Rules on using AI and automated tools in hiring differ by country, state and sector, and some places expect notices to candidates, assessments or audits. We do not give legal advice. Please confirm what applies to you with your own employment and legal advisers before screening goes live, and we will design the workflow around what they tell you.',
      ],
      points: [
        { title: 'Job-Related Criteria Only', description: 'Each criterion is reviewed with the hiring manager to check that it relates to the work, and vague or proxy requirements are challenged.' },
        { title: 'Personal Details Kept Out', description: 'Where your process allows it, names, photos, ages and similar details can be held back from the AI summary step.' },
        { title: 'A Person Decides Every Outcome', description: 'No candidate is rejected or advanced by the AI alone. A named reviewer confirms each outcome.' },
        { title: 'Easy Overrides', description: 'Reviewers can disagree with a suggestion in one step, and overrides are logged so patterns become visible.' },
        { title: 'Periodic Outcome Checks', description: 'Your team reviews screening results at regular intervals to look for groups that are being filtered out unexpectedly.' },
        { title: 'Explainable Records', description: 'Summaries, criteria versions and decisions are kept together, so you can explain how any shortlist was formed.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Who Uses AI Resume Screening',
    items: [
      { title: 'High-Volume Roles', description: 'Customer service, retail and operations roles where a single advert can bring in a large stack of applications.' },
      { title: 'Small HR Teams', description: 'One or two people handling hiring alongside everything else, who need a reliable first pass.' },
      { title: 'Recruitment Agencies', description: 'Consultants reading applications for several clients, each with its own requirements.' },
      { title: 'Specialist Hiring', description: 'Roles with clear must-have qualifications or licences, where checking them by hand is slow and repetitive.' },
      { title: 'Growing Companies', description: 'Teams opening many roles at once who want every hiring manager working to the same standard.' },
      { title: 'Graduate and Intern Programs', description: 'Seasonal intakes where applications arrive in a short window and need consistent review.' },
    ],
  },

  integrations: {
    eyebrow: 'Platforms',
    heading: 'Where the Screening Workflow Runs',
    paragraphs: [
      'We build the workflow around the places your applications already arrive and the tools your team already reads. The automation layer usually runs on n8n, Make or Zapier. For teams whose hiring admin already runs there, see how we approach [automation built on Make](/platforms/make-automation-services).',
      'If you use a dedicated hiring or applicant tracking tool, we check during the audit what it allows us to connect to and how. We confirm integrations in writing in your quote rather than promising them in advance.',
    ],
    groups: [
      { label: 'Application Sources', items: ['Careers page forms', 'Shared hiring inboxes', 'Your current hiring tool'] },
      { label: 'Candidate Records', items: ['Airtable', 'Spreadsheets', 'Databases'] },
      { label: 'Team Updates', items: ['Slack', 'Microsoft Teams', 'Email'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Resume Screening With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We design screening around your roles and your reviewers, and we are cautious about where AI belongs in hiring.',
    items: [
      { title: 'Criteria Built With You', description: 'We work through each role’s requirements with the hiring manager before any screening runs.' },
      { title: 'Human Review by Design', description: 'Every workflow we build keeps a person responsible for each candidate outcome.' },
      { title: 'Honest About Limits', description: 'We tell you where AI screening helps, where it carries risk and where a manual read is better.' },
      { title: 'No New Platform to Learn', description: 'The workflow runs inside the tools your team already uses for hiring.' },
      { title: 'Tested With Real Examples', description: 'We test the workflow on past or sample applications before any live candidate goes through it.' },
      { title: 'Yours to Keep', description: 'You own the workflows, the criteria templates, the accounts and the documentation once the build is handed over.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up AI Resume Screening',
    intro:
      'We begin with how your team screens today: where applications come from, who reads them and how decisions are recorded. You approve the plan before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'A review of your application channels, current screening steps and where time is lost.' },
      { title: 'Criteria Workshop', description: 'Must-have and nice-to-have criteria are written for the first roles and checked for job relevance.' },
      { title: 'Workflow Map', description: 'Intake, reading, summaries, review queues and logging are agreed in writing.' },
      { title: 'Build', description: 'The workflow is built in your tools, with review steps in place from the start.' },
      { title: 'Test Against Past Applications', description: 'Your team compares AI summaries with their own reads to check the criteria behave as intended.' },
      { title: 'Staged Rollout and Handover', description: 'Screening goes live one role at a time with close human review, then we hand over the workflows and documentation.' },
    ],
    note: 'Your written quote lists the roles and workflows in scope, the platforms involved, deliverables, usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'See which parts of screening you can hand to AI',
    heading: 'Give Your Hiring Team a Better First Read',
    description:
      'Book a free, no-obligation resume screening audit. We will look at how applications reach you today, show where an AI-prepared first pass would save time, and be clear about where human judgment should stay.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Resume Screening: Common Questions',
  faqSideText: 'Wondering how screening would work for your roles? Book a free audit and we will walk through it with you.',
  faqs: [
    {
      question: 'What is AI resume screening software?',
      answer:
        'AI resume screening software reads applications against criteria your hiring team sets, summarizes each one with the evidence it found and suggests a shortlist. Clickmasters builds it inside your existing tools, and a person reviews every suggestion before anything happens to a candidate.',
    },
    {
      question: 'Does the AI decide who gets hired or rejected?',
      answer:
        'No. The AI prepares summaries and suggestions. A recruiter or hiring manager confirms every outcome, and they can override the AI at any point.',
    },
    {
      question: 'Is AI resume screening biased?',
      answer:
        'It can be. AI is not free of bias, and criteria can introduce bias too. We reduce the risk with job-related criteria, human review of every outcome, logged overrides and periodic checks of results, but no tool can guarantee fair decisions on its own.',
    },
    {
      question: 'Who writes the screening criteria?',
      answer:
        'Your hiring team does. We help structure them into must-have and nice-to-have items and question any requirement that does not clearly relate to the job.',
    },
    {
      question: 'Are there legal rules about using AI in hiring?',
      answer:
        'In some places, yes, and they vary by location and sector. We do not give legal advice, so please confirm what applies with your own advisers. We then build the workflow to fit their guidance, for example around candidate notices or record keeping.',
    },
    {
      question: 'What happens to resumes the AI cannot read properly?',
      answer:
        'They are flagged and sent to a person rather than scored. The same goes for incomplete applications and anything the workflow is unsure about.',
    },
    {
      question: 'Do we need to replace our hiring tool?',
      answer:
        'No. We build around the tools you already use. During the audit we check what your current hiring tool, inbox or forms allow us to connect to, and confirm it in the quote.',
    },
    {
      question: 'How do we know the screening is working as intended?',
      answer:
        'Before launch, your team compares AI summaries with their own reads of past or sample applications. After launch, the decision log and periodic outcome checks show where reviewers disagree with the AI and whether any group is being filtered out unexpectedly.',
    },
    {
      question: 'Can candidates be told the outcome automatically?',
      answer:
        'Messages can be sent automatically once a person has made the decision, using wording your team has approved. The AI does not send outcomes on its own judgment.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your current screening process, agree the first roles to cover and send a written quote with scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
