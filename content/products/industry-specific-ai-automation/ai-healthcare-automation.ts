// content/products/industry-specific-ai-automation/ai-healthcare-automation.ts
// Copy + SEO for /products/industry-specific-ai-automation/ai-healthcare-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Primary keyword is "medical practice automation" (with "AI healthcare automation" as secondary). Do NOT target
//   "industry-specific AI solutions" (the parent owns it) or the broad healthcare sector overview at
//   /industries/ai-automation-for-healthcare.
// - Administrative work only: scheduling, intake, reminders, referrals, insurance and billing paperwork, patient
//   messages, after-hours calls. The automation does not diagnose, advise or decide on care, and does not answer
//   clinical questions; those are flagged to staff and clinicians. Coverage decisions and claims stay with staff.
// - Compliance phrasing only: "we design with privacy in mind; formal compliance such as HIPAA is a shared
//   responsibility that depends on your specific setup, agreements and processes, and is confirmed for your
//   project". Never "HIPAA-compliant" or any certification claim.
// - EHR, practice management and patient portal connections only "where the system offers an API or integration,
//   confirmed during discovery". No named EHR is promised as standard. n8n can be self-hosted.
// - Example projects are "scoped per practice", not packaged features.
// - No statistics, percentages, no-show figures, time saved, prices, testimonials, case results, customer names,
//   "leading/best" claims, guarantees or ongoing-support promises. Monitoring and improvement after launch:
//   "scope and terms are agreed per project". The practice owns automations, accounts and documentation and pays
//   platform and AI usage costs directly.
//
// Inline links use [anchor text](/path). The contextual internal links are listed in `internalLinks` below.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_HEALTHCARE_AUTOMATION_PATH = '/products/industry-specific-ai-automation/ai-healthcare-automation';

export const aiHealthcareAutomationSeo: HubSeo = {
  name: 'AI Healthcare Automation',
  path: AI_HEALTHCARE_AUTOMATION_PATH,
  title: 'Medical Practice Automation with AI | Clickmasters',
  description:
    'Medical practice automation for scheduling, intake, reminders and referrals, built in your systems with staff approval at each step. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'Industry-Specific AI Automation', path: '/products/industry-specific-ai-automation' },
    { name: 'AI Healthcare Automation', path: AI_HEALTHCARE_AUTOMATION_PATH },
  ],
};

export const aiHealthcareAutomationKeywords = [
  'medical practice automation',
  'AI healthcare automation',
  'healthcare administrative automation',
  'clinic workflow automation',
  'patient intake automation',
  'appointment reminder automation',
  'healthcare front desk automation',
  'patient follow-up automation',
  'insurance verification paperwork automation',
  'medical office automation',
  'referral processing automation',
  'no-show reduction workflows',
  'how to automate a medical practice front desk',
  'automate patient intake forms for a clinic',
  'after-hours call handling for medical practices',
  'referral intake automation for specialist clinics',
  'appointment reminders that connect to practice scheduling',
];

// The contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI solutions for specific industries', href: '/products/industry-specific-ai-automation', section: 'What Is Medical Practice Automation?' },
  { anchor: 'our healthcare sector overview', href: '/industries/ai-automation-for-healthcare', section: 'What Is Medical Practice Automation?' },
  { anchor: 'appointment booking automation for healthcare', href: '/solutions/appointment-booking-automation/for-healthcare', section: 'Scheduling, Intake, Calls and the Patient Inbox (spotlight)' },
  { anchor: 'document workflows for healthcare practices', href: '/solutions/document-automation/for-healthcare', section: 'Scheduling, Intake, Calls and the Patient Inbox (spotlight)' },
  { anchor: 'AI voice agents for clinics', href: '/solutions/ai-voice-agents/for-healthcare', section: 'Scheduling, Intake, Calls and the Patient Inbox (spotlight)' },
  { anchor: 'patient support inbox automation', href: '/solutions/customer-support-automation/for-healthcare', section: 'Scheduling, Intake, Calls and the Patient Inbox (spotlight)' },
  { anchor: 'legal workflow automation', href: '/products/industry-specific-ai-automation/ai-legal-automation', section: 'Patient Data, Privacy and Human Oversight (extras)' },
  { anchor: 'connecting AI to EHR and practice systems', href: '/products/general-ai-automation/ai-integration-services', section: 'Technologies and Integrations' },
] as const;

export const aiHealthcareAutomation: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'AI Healthcare Automation',
    heading: 'Medical Practice Automation with AI for Clinics and Care Teams',
    accentWords: 4,
    subheading:
      'Medical practice automation takes the administrative work that fills a front desk’s day (booking, intake forms, reminders, referral paperwork, after-hours calls) and runs it through workflows built inside the systems your practice already uses. Your clinicians keep every clinical decision, and a staff member approves anything that needs judgment.',
    primaryCta: { text: 'Book a Free Healthcare Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'Illustration of a hand pressing a glowing automation button surrounded by workflow icons, representing administrative automation for a medical practice',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Scheduling', 'Patient intake', 'Appointment reminders', 'Referral processing', 'After-hours calls', 'Billing paperwork'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is Medical Practice Automation?',
    paragraphs: [
      'Medical practice automation is the use of rules-based workflows and AI to handle a clinic’s administrative tasks, such as scheduling, patient intake, reminders, referral processing and billing paperwork, inside the practice’s existing systems. Staff review exceptions and approve anything that needs judgment, while clinical decisions remain entirely with clinicians.',
      'Clickmasters designs and builds this kind of AI healthcare automation for clinics, specialist practices and multi-location groups. This page is part of our [AI solutions for specific industries](/products/industry-specific-ai-automation). For the broad view of AI in healthcare, see [our healthcare sector overview](/industries/ai-automation-for-healthcare). Here we cover what we build, how a workflow runs and where people stay in control.',
      'Most practices don’t face one big problem. They face many small, repetitive tasks that pile up between patients. None of this is clinical work, but patients feel all of it. Clinic workflow automation targets this layer.',
    ],
    problems: [
      'The phone rings while someone is checking a patient in. Calls roll to voicemail, and callbacks become another task on the list.',
      'Intake forms arrive incomplete. Staff chase missing insurance details or signatures on the morning of the visit.',
      'Reminders depend on whoever has time. When reminders slip, no-shows and late cancellations leave gaps in the schedule.',
      'Referrals come in every format. Faxes, emails, portal uploads and phone calls all need to be read, retyped and matched to a patient.',
      'Insurance and billing paperwork repeats. The same details get copied between forms, portals and the practice management system.',
      'Process knowledge lives in people’s heads. When a long-serving coordinator is away, things get missed.',
    ],
  },

  explainer: {
    eyebrow: 'Approvals',
    heading: 'Who Approves What',
    paragraphs: [
      'Every workflow is split into what runs automatically, what is prepared for staff and what staff decide. The real split is mapped with your team and approved before anything is built.',
    ],
    points: [
      { title: 'New-Patient Booking', description: 'Automated: capturing details, offering slots or preparing the booking request. The front desk confirms where your rules require it.' },
      { title: 'Intake Forms', description: 'Automated: sending forms, chasing missing items, filing completed forms. Staff review flagged or incomplete forms.' },
      { title: 'Insurance Verification Paperwork', description: 'Automated: collecting details and preparing the verification packet. Billing or front-desk staff verify coverage.' },
      { title: 'Referrals', description: 'Automated: reading the referral, extracting key fields, matching to a patient. Staff confirm the match and the triage route.' },
      { title: 'Patient Messages', description: 'Automated: sorting by type and drafting routine replies. Staff send or edit drafts; clinical questions go to clinicians.' },
      { title: 'Reminders and Follow-Ups', description: 'Automated: sending reminders and recall messages. Clinicians set follow-up instructions; staff own exceptions.' },
    ],
  },

  features: {
    eyebrow: 'What We Automate',
    heading: 'What We Automate for Clinics and Practices',
    intro: 'Most projects start with one or two of these building blocks and add more later.',
    items: [
      { title: 'Scheduling and Reminders', description: 'Booking, confirmations, reminders and reschedule requests, often the clearest place to start.' },
      { title: 'Patient Intake', description: 'Forms sent ahead of the visit, checked for missing fields and filed in the right place.' },
      { title: 'After-Hours and Overflow Calls', description: 'A voice agent takes messages, handles routine bookings where your systems allow it and passes anything else to staff.' },
      { title: 'Patient Message Inbox', description: 'Portal messages, emails and web enquiries sorted by type, with routine replies drafted for staff to review.' },
      { title: 'Referral Processing', description: 'Referral documents read, with patient, referring provider and reason extracted into a work item for your team.' },
      { title: 'Insurance and Billing Paperwork', description: 'Details assembled and forms prepared. Coverage decisions and claims stay with your staff.' },
      { title: 'Consent and Records Requests', description: 'The same intake approach applied to consent forms, records requests and other practice paperwork.' },
      { title: 'Exception Flags', description: 'Messages that mention urgent symptoms, a clinical question or a complaint are flagged to staff immediately.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'A New-Patient Request From First Contact to First Visit',
    intro:
      'Here is one example workflow. The real steps are mapped with your team and approved before anything is built.',
    steps: [
      { title: 'A Request Arrives', description: 'A patient fills in a web form, calls after hours, or a referral document lands in a shared inbox.' },
      { title: 'Details Are Captured and Structured', description: 'Name, contact details, reason for visit and referral source are pulled into a standard record and checked for required fields.' },
      { title: 'Scheduling Is Offered', description: 'Where your scheduling system offers an API, the patient sees suitable open slots. Where it doesn’t, the front desk receives a prepared booking request to confirm in one step.' },
      { title: 'Intake Goes Out Early', description: 'The patient receives an intake form link straight away, with polite reminders for missing items on a schedule your team sets.' },
      { title: 'Insurance Details Are Prepared', description: 'Card details and plan information are assembled into a verification packet. A staff member checks and confirms coverage.' },
      { title: 'Reminders Run Before the Visit', description: 'The patient gets reminders with a simple way to confirm or reschedule, and freed slots go back to the front desk.' },
      { title: 'Anything Unusual Goes to a Person', description: 'Urgent symptoms, clinical questions or complaints are flagged to staff with full context. The automation does not answer clinical questions.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes for Your Team',
    intro: 'The automation takes on the repetitive administration, so your team’s time goes to the patients in front of them.',
    items: [
      { title: 'More Time With Patients', description: 'Front-desk staff spend more time with the patients in front of them.' },
      { title: 'More Complete Intake', description: 'Intake arrives more complete, with fewer gaps to chase.' },
      { title: 'Consistent Reminders', description: 'Patients get consistent reminders and an easy way to reschedule.' },
      { title: 'Clear Queues', description: 'Referrals and messages land in clear queues instead of scattered inboxes.' },
      { title: 'Less Reliance on Memory', description: 'Processes no longer depend on one person’s memory.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Human in the Loop',
    heading: 'What the Automation Handles and What Your Staff Decide',
    paragraphs: [
      'The automation handles administration and preparation: booking, reminders, forms and paperwork. Clinical questions and anything that needs medical judgment are flagged to your staff and clinicians with the relevant context.',
      'Your team sets which visit types need a person to approve, which reply templates are used and where exceptions go. A staff member approves wherever a decision needs judgment.',
    ],
    aiDoes: [
      'Captures and structures new-patient requests',
      'Offers slots or prepares booking requests',
      'Sends and chases intake forms',
      'Assembles insurance verification packets',
      'Reads referrals and extracts key fields',
      'Sorts messages and drafts routine replies',
    ],
    peopleDo: [
      'Make every clinical decision',
      'Verify coverage and handle claims',
      'Confirm referral matches and triage routes',
      'Send or edit drafted replies and own exceptions',
    ],
  },

  spotlight: {
    eyebrow: 'Front Desk Workflows',
    heading: 'Scheduling, Intake, Calls and the Patient Inbox',
    paragraphs: [
      'Booking, confirmations, reminders and reschedule requests are often the clearest place to start. Our page on [appointment booking automation for healthcare](/solutions/appointment-booking-automation/for-healthcare) covers this in more detail, including no-show reduction workflows that offer freed slots back to your team.',
      'Intake automation sends forms ahead of the visit, checks them for missing fields and files completed forms in the right place. The same approach applies to consent forms, records requests and other paperwork. See our [document workflows for healthcare practices](/solutions/document-automation/for-healthcare) for examples.',
      'A voice agent can answer calls when the front desk is busy or the office is closed, take a message, book or reschedule a routine appointment where your systems allow it, and pass anything else to staff. Our [AI voice agents for clinics](/solutions/ai-voice-agents/for-healthcare) handle administrative requests only.',
      'Portal messages, emails and web enquiries can be sorted by type, with routine replies drafted for staff to review. Our [patient support inbox automation](/solutions/customer-support-automation/for-healthcare) page explains how triage and drafting work without removing staff from the conversation.',
    ],
    points: [
      { title: 'Scheduling', description: 'Bookings, confirmations and reschedules, with freed slots offered back to your team.' },
      { title: 'Intake', description: 'Forms sent early, checked for missing fields and filed where they belong.' },
      { title: 'Calls', description: 'Administrative requests handled after hours or at busy times, with everything else passed to staff.' },
      { title: 'Inbox', description: 'Messages triaged and drafted, with staff kept in the conversation.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Examples',
      heading: 'Example Projects, Scoped Per Practice',
      accentWords: 3,
      paragraphs: [
        'These are examples we scope per project, not packaged features. Each one starts with a free audit that reviews your current processes and tools and tells you which tasks are worth automating first, and which aren’t.',
      ],
      points: [
        { title: 'A Family Practice', description: 'Automating new-patient intake and reminders, with the front desk confirming bookings for longer visit types.' },
        { title: 'A Specialist Clinic', description: 'Processing referrals from several sources into one queue, with a coordinator approving each match.' },
        { title: 'A Physical Therapy or Rehab Clinic', description: 'Sending recurring visit reminders and rebooking prompts based on the plan the clinician sets.' },
        { title: 'A Multi-Location Group', description: 'Routing after-hours calls to the right location’s queue and producing a morning summary for each front desk.' },
      ],
    },
    {
      eyebrow: 'Privacy and Oversight',
      heading: 'Patient Data, Privacy and Human Oversight',
      accentWords: 3,
      paragraphs: [
        'Healthcare data is sensitive, and we build accordingly. We design with privacy in mind: each automation handles only the data it needs, access is limited to the people who should see it, and where appropriate the workflows run on infrastructure that keeps patient data in your environment, such as a self-hosted n8n instance. Formal compliance such as HIPAA is a shared responsibility that depends on your specific setup, agreements and processes, and is confirmed for your project.',
        'Clinical decisions stay with clinicians. The automation prepares, sorts and reminds. It does not diagnose, advise or decide on care. We use the same pattern of restricted access and human review in other confidential settings, such as [legal workflow automation](/products/industry-specific-ai-automation/ai-legal-automation) for law firms.',
      ],
      points: [
        { title: 'Only the Data It Needs', description: 'Each automation is limited to the data its task requires.' },
        { title: 'Restricted Access', description: 'Access is limited to the people who should see it.' },
        { title: 'Data in Your Environment', description: 'Where appropriate, workflows run on infrastructure such as self-hosted n8n.' },
        { title: 'Shared Responsibility', description: 'Formal compliance such as HIPAA depends on your setup and is confirmed for your project.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Medical Practice Automation Is For',
    items: [
      { title: 'Practice Owners', description: 'Owners who want routine administration handled inside the systems they already run.' },
      { title: 'Office and Practice Managers', description: 'Managers whose front desk spends its day on repeat tasks.' },
      { title: 'Family Practices', description: 'Practices that want intake and reminders to run without constant chasing.' },
      { title: 'Specialist Clinics', description: 'Clinics receiving referrals from several sources in several formats.' },
      { title: 'Physical Therapy and Rehab Clinics', description: 'Clinics with recurring visits that need reminders and rebooking prompts.' },
      { title: 'Multi-Location Groups', description: 'Groups that need calls and requests routed to the right location’s team.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Technologies and Integrations',
    paragraphs: [
      'We build inside your tools and accounts. Your EHR, practice management system or patient portal is connected where the system offers an API or integration, confirmed during discovery. If there is no usable connection, we design a workflow that prepares the work for staff to enter.',
      'Around those systems, a project may use Zapier, Make or n8n (with n8n available self-hosted), Twilio for SMS and voice, and AI models chosen with your data requirements in mind, hosted on AWS, Azure or GCP where needed. Our integration page explains the technical side of [connecting AI to EHR and practice systems](/products/general-ai-automation/ai-integration-services).',
    ],
    groups: [
      { label: 'Practice Systems (Where an API Exists)', items: ['EHR', 'Practice management system', 'Patient portal'] },
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n (self-hosted available)'] },
      { label: 'Communication', items: ['Twilio', 'Gmail', 'Outlook', 'Slack', 'Microsoft Teams'] },
      { label: 'AI Models', items: ['OpenAI GPT', 'Anthropic Claude', 'Google Gemini', 'Open-source models'] },
      { label: 'Data and Connections', items: ['Airtable', 'SQL databases', 'REST APIs', 'Webhooks'] },
      { label: 'Cloud', items: ['AWS', 'Azure', 'GCP'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Practices Work With Clickmasters',
    intro: 'We build administrative automation around your practice’s systems and rules, with people kept in charge of every decision that matters.',
    items: [
      { title: 'You Own What We Build', description: 'The automations, accounts and documentation belong to your practice, and you pay platform and AI usage costs directly.' },
      { title: 'People Stay in the Loop', description: 'A staff member approves wherever a decision needs judgment, and exceptions reach a person with context.' },
      { title: 'We Build in Your Tools', description: 'Workflows connect the systems you already run instead of replacing them.' },
      { title: 'We Start With an Honest Audit', description: 'The free audit tells you what is worth automating and what is better left alone.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How a Healthcare Automation Project Runs',
    intro: 'Every project follows our six published steps. You approve the plan before anything is built.',
    steps: [
      { title: 'Discovery', description: 'We walk through your front desk, intake, scheduling and billing workflows with the people who do the work, and confirm which systems offer an API.' },
      { title: 'Strategy and Mapping', description: 'We map triggers, decision points, actions, integrations and approval points. You approve the plan before anything is built.' },
      { title: 'Development', description: 'We build the workflows in your accounts, using test data wherever possible.' },
      { title: 'Testing', description: 'We test normal cases, edge cases and failure scenarios, such as a missing insurance field or a message that mentions symptoms.' },
      { title: 'Deployment', description: 'The automation goes live in your environment, with documentation and access handed over to your team.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'The free audit reviews your current processes and tools, with no obligation to proceed.',
  },

  cta: {
    bandHeading: 'Not sure where to start?',
    heading: 'Start With a Free Healthcare Automation Audit',
    description:
      'If your front desk spends its day on repeat tasks, the audit is a practical first step. We review your current processes and tools and tell you which tasks are worth automating first, and which aren’t, with no obligation to proceed.',
    primary: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Medical Practice Automation: Common Questions',
  faqSideText: 'Not sure which front-desk task to automate first? Book a free audit and we will work it out with you.',
  faqs: [
    {
      question: 'How do I automate a medical practice front desk?',
      answer:
        'Start with one repetitive, rules-based task, such as appointment reminders or intake form follow-up, and automate it inside the systems you already use. Map who approves what before building, then add after-hours call handling or message triage once the first workflow runs well. A free audit helps you choose the first task.',
    },
    {
      question: 'Can AI handle patient appointment booking?',
      answer:
        'Yes, for routine visit types an AI assistant or voice agent can offer open slots, book, confirm and reschedule appointments, where your scheduling system offers an API. Where it doesn’t, the automation prepares the booking for staff to confirm. Your team sets which visit types need a person to approve.',
    },
    {
      question: 'Is AI automation safe for patient data?',
      answer:
        'It depends on how it is built and hosted. We design with privacy in mind, limit each workflow to the data it needs and restrict access, and can keep data in your environment where appropriate. Formal compliance such as HIPAA is a shared responsibility that depends on your specific setup and is confirmed for your project.',
    },
    {
      question: 'What can a clinic automate first?',
      answer:
        'Good first candidates are appointment reminders, intake form collection, after-hours call capture and referral intake. These tasks are repetitive, follow clear rules and don’t involve clinical judgment. The right starting point depends on where your staff lose the most time.',
    },
    {
      question: 'Does automation integrate with my EHR?',
      answer:
        'It can, where your EHR or practice management system offers an API or integration, which we confirm during discovery. We don’t promise any named EHR connection as standard. If no usable connection exists, we design the workflow so it prepares information for staff to enter.',
    },
    {
      question: 'Does AI make clinical decisions in these workflows?',
      answer:
        'No. The automation handles administration and preparation, such as booking, reminders, forms and paperwork. Clinical questions and anything that needs medical judgment are flagged to your staff and clinicians with the relevant context.',
    },
    {
      question: 'Who owns the automations once they are built?',
      answer:
        'Your practice does. You own the automations, accounts and documentation, and you pay platform and AI usage costs directly to the providers.',
    },
  ],
};
