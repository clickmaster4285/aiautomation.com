// content/products/ai-marketing-automation/ai-email-automation.ts
// Copy + SEO for /products/ai-marketing-automation/ai-email-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is email only: automated email workflows, AI drafting, personalization, segmentation,
//   send-time optimization, behavior-based follow-ups and email reporting (dashboards + AI summaries).
// - Email tools named on the site: ActiveCampaign, Klaviyo, Mailchimp, Marketo, HubSpot (plus CRMs on the parent).
// - Do NOT add SMS, WhatsApp, A/B testing, attribution, predictive analytics, deliverability,
//   inbox-placement or open/click-rate promises — not stated on the site.
// - No statistics, prices, testimonials, guarantees, or ongoing-support promises.
// - Clickmasters builds this inside the client's existing email and CRM tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_EMAIL_AUTOMATION_PATH = '/products/ai-marketing-automation/ai-email-automation';

export const aiEmailAutomationSeo: HubSeo = {
  name: 'AI Email Automation',
  path: AI_EMAIL_AUTOMATION_PATH,
  title: 'AI Email Automation With Personalized Flows | Clickmasters',
  description:
    'AI email automation built in your email platform: behavior-triggered sequences, segment-level personalization, AI drafts you approve and live reports.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Marketing Automation', path: '/products/ai-marketing-automation' },
    { name: 'AI Email Automation', path: AI_EMAIL_AUTOMATION_PATH },
  ],
};

export const aiEmailAutomationKeywords = [
  'AI email automation',
  'automated email workflows',
  'AI email marketing',
  'personalized email automation',
  'email sequence automation',
  'behavior-triggered emails',
  'automated follow-up emails',
  'email segmentation with AI',
  'send-time optimization',
  'AI email copywriting',
  'email campaign workflows',
  'how to automate email follow-ups',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'complete AI marketing automation system', href: '/products/ai-marketing-automation', section: 'What Is AI Email Automation?' },
  { anchor: 'AI lead generation', href: '/services/ai-lead-generation', section: 'Follow-Up Emails That Fit What the Contact Did (spotlight)' },
  { anchor: 'AI social media automation', href: '/products/ai-marketing-automation/ai-social-media-automation', section: 'What AI Writes and What Your Team Signs Off' },
  { anchor: 'AI campaign management software', href: '/products/ai-marketing-automation/ai-campaign-management-software', section: 'Email Performance Reporting Without the Export Day (extras)' },
  { anchor: 'email automation built on HubSpot', href: '/solutions/marketing-automation/with-hubspot', section: 'Email Platforms We Build On' },
] as const;

export const aiEmailAutomation: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Email Automation',
    heading: 'AI Email Automation That Sends the Right Message After Every Action',
    accentWords: 5,
    subheading:
      'We build AI email automation inside the email platform you already use. Sequences start from real customer actions, each segment gets its own wording and timing, and AI drafts every message for your team to approve before it goes out.',
    primaryCta: { text: 'Book a Free Email Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-marketing-automation-ai-humanoid-profile.webp',
    imageAlt: 'AI humanoid profile illustrating AI email automation for personalized email sequences',
    imageWidth: 666,
    imageHeight: 375,
    marquee: ['Triggered sequences', 'Segment-level personalization', 'AI-drafted emails', 'Send-time optimization', 'Email reporting'],
  },

  intro: {
    eyebrow: 'Email, Automated',
    heading: 'What Is AI Email Automation?',
    paragraphs: [
      'AI email automation is the practice of letting workflows decide when an email goes out, and letting AI help decide what it says. A trigger, such as a sign-up, a download or a purchase, starts a sequence. AI then drafts the copy, adapts it to the reader’s segment and suggests when to send it.',
      'Your email list is often the most direct line you have to customers. Yet most teams run it by hand: one newsletter, one blast, the same words for everyone. Automated email workflows replace that with sequences that respond to each contact. They run day and night without anyone pressing send.',
      'This page covers the email side of our [complete AI marketing automation system](/products/ai-marketing-automation). It works on its own, or as one channel inside a wider set of journeys.',
    ],
    problems: [
      'Welcome and follow-up emails go out late, or never, when the team is busy.',
      'Every subscriber gets the same newsletter, whatever they bought or clicked.',
      'Writing each email variation from scratch slows down every campaign.',
      'Nobody can say which sequences are working without a day of exports.',
    ],
  },

  explainer: {
    eyebrow: 'Beyond the Blast',
    heading: 'From One-Off Blasts to Automated Email Workflows',
    paragraphs: [
      'A blast is a single send to a whole list at a time someone picked. An automated email workflow is a set of rules. It says which event starts the sequence, how long to wait between emails and what to do when a contact opens, clicks or stays silent.',
      'AI adds three things to those rules. It drafts the emails in your brand voice from your own material. It tailors the wording for each segment. And it picks send times that suit each group, instead of one hour for everyone.',
    ],
    points: [
      { title: 'Action Triggers', description: 'Sign-ups, form fills, purchases and lifecycle changes start the matching sequence.' },
      { title: 'Date and Rule Triggers', description: 'Renewals, anniversaries and your own business rules can schedule emails too.' },
      { title: 'Branching on Behavior', description: 'Opens, clicks and silence decide which email a contact receives next.' },
      { title: 'Exit Conditions', description: 'Contacts leave a sequence once they convert, reply or move to sales.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'Core Capabilities of Our AI Email Automation',
    intro:
      'Each capability is configured in your email platform around your list, offers and brand voice. Your team keeps approval over every email that customers will read.',
    items: [
      { title: 'Triggered Sequences', description: 'Welcome, onboarding, nurture and post-purchase series start the moment the trigger happens.' },
      { title: 'AI Email Drafting', description: 'Subject lines and body copy are drafted from your messaging and product information, ready for review.' },
      { title: 'Segment Personalization', description: 'Contacts are grouped by source, interest, behavior and stage, and each group gets wording that fits.' },
      { title: 'Send-Time Optimization', description: 'Emails are scheduled for the times each segment is most likely to read them.' },
      { title: 'Behavior-Based Follow-Ups', description: 'A click, a visit or a quiet week decides the next email, so follow-up never depends on memory.' },
      { title: 'Re-Engagement Series', description: 'Dormant subscribers receive a dedicated sequence to win them back or tidy the list.' },
      { title: 'CRM Sync', description: 'Email activity and lifecycle stages stay in step with your CRM records.' },
      { title: 'Approval Steps', description: 'New or changed emails wait for a person to approve them before the workflow uses them.' },
      { title: 'Email Dashboards', description: 'Sequence and segment performance is reported automatically, with AI summaries of what changed.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an Automated Email Sequence Runs',
    intro:
      'Each sequence follows the same path, from the first trigger to the report your team reads at the end of the week.',
    steps: [
      { title: 'Trigger', description: 'A contact signs up, buys, downloads or reaches a date or stage you defined.' },
      { title: 'Segment', description: 'The contact is placed in a segment based on profile, source and recent behavior.' },
      { title: 'Draft & Approve', description: 'AI drafts the emails for that segment, and your team edits and approves them once.' },
      { title: 'Schedule', description: 'Each email is timed for its segment, with waits set between steps.' },
      { title: 'Branch', description: 'Opens, clicks and silence move the contact to the next email, a different path or a re-engagement series.' },
      { title: 'Report', description: 'Dashboards update from the live data, and AI summaries point out which sequences need attention.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Teams Automate Their Email Marketing',
    intro:
      'The gains are practical. Email goes out on time, reads as if it were written for the reader, and takes far less effort to produce.',
    items: [
      { title: 'No Missed Follow-Ups', description: 'Sequences run whether or not anyone is at their desk.' },
      { title: 'More Relevant Emails', description: 'Segments receive wording that matches what they did and what they care about.' },
      { title: 'Faster Production', description: 'Editing an AI draft takes far less time than writing every variation by hand.' },
      { title: 'One Consistent Voice', description: 'Emails are grounded in your brand material, so tone stays steady across sequences.' },
      { title: 'Cleaner Lists', description: 'Re-engagement flows show who still wants to hear from you.' },
      { title: 'Clear Reporting', description: 'Sequence performance is visible without building spreadsheets each week.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Writer and Reviewer',
    heading: 'What AI Writes and What Your Team Signs Off',
    paragraphs: [
      'AI email copywriting is useful for the volume of work, not for the judgment. It turns a brief and your product facts into drafts for every segment and step. Your team then decides what is accurate, on brand and worth sending.',
      'Many teams pair email with [AI social media automation](/products/ai-marketing-automation/ai-social-media-automation), so a single approved message can be adapted for both channels without starting again.',
    ],
    aiDoes: [
      'Drafts subject lines and email body copy',
      'Writes variations for each segment',
      'Suggests send times per segment',
      'Routes contacts down the right branch',
      'Summarizes sequence performance',
      'Flags contacts who look ready for sales',
    ],
    peopleDo: [
      'Set the offer, message and goal of each sequence',
      'Approve every email before it is used',
      'Choose segments and exit rules',
      'Decide what to change based on the reports',
    ],
  },

  spotlight: {
    eyebrow: 'Automated Follow-Up',
    heading: 'Follow-Up Emails That Fit What the Contact Did',
    paragraphs: [
      'Follow-up is where email does its most valuable work, and where manual processes break first. A contact downloads a guide, then hears nothing for a month. With automated follow-up emails, the next message is already queued and matched to that download.',
      'Follow-up is also the bridge between new leads and sales. Once [AI lead generation](/services/ai-lead-generation) brings contacts in, email sequences keep them warm. Contacts who show buying signals are then passed to sales with their email history attached.',
    ],
    points: [
      { title: 'Content Follow-Ups', description: 'A download or webinar sign-up triggers emails related to that topic.' },
      { title: 'Post-Purchase Emails', description: 'Onboarding tips and review requests follow a purchase at sensible intervals.' },
      { title: 'Quiet-Contact Nudges', description: 'Contacts who stop engaging get a different message instead of more of the same.' },
      { title: 'Sales Hand-Off', description: 'Engaged contacts are flagged in the CRM so a rep can take over.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Email Reporting',
      heading: 'Email Performance Reporting Without the Export Day',
      accentWords: 3,
      paragraphs: [
        'Email platforms collect plenty of data, but turning it into a weekly view usually means exports and spreadsheets. Instead, dashboards build themselves from the data your sequences already produce. They show how each sequence and segment is doing.',
        'AI-written summaries sit on top of the numbers and point out what changed since last time. If you run email as part of larger launches, the same reporting feeds into [AI campaign management software](/products/ai-marketing-automation/ai-campaign-management-software) that tracks every channel in one place.',
      ],
      points: [
        { title: 'Sequence Dashboards', description: 'Each automated sequence has its own live view of performance.' },
        { title: 'Segment Comparison', description: 'See which groups respond and which need different messaging.' },
        { title: 'Readable Summaries', description: 'Short AI summaries explain the changes worth a closer look.' },
        { title: 'Linked to CRM Data', description: 'Email activity sits beside CRM records for a fuller view of each contact.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Where Email Automation Pays Off',
    items: [
      { title: 'Online Stores', description: 'Abandoned cart reminders, post-purchase onboarding, review requests and win-back emails tied to store events.' },
      { title: 'SaaS Products', description: 'Trial welcome series, activation nudges and check-ins when product usage drops.' },
      { title: 'Service Businesses', description: 'Inquiry follow-ups, appointment reminders and seasonal re-engagement for past clients.' },
      { title: 'Education Providers', description: 'Application follow-ups, event emails and re-enrollment sequences for students.' },
      { title: 'Real Estate Teams', description: 'Long-term nurture for buyers and sellers, plus follow-ups after viewings.' },
      { title: 'B2B Sales Teams', description: 'Content follow-ups that warm up leads before the first sales call.' },
    ],
  },

  integrations: {
    eyebrow: 'Platforms',
    heading: 'Email Platforms We Build On',
    paragraphs: [
      'We do not ask you to switch email tools. Sequences are built in the platform you already run, including ActiveCampaign, Klaviyo, Mailchimp, Marketo and HubSpot. If HubSpot holds your contacts, see how we approach [email automation built on HubSpot](/solutions/marketing-automation/with-hubspot).',
      'Where email needs data from elsewhere, such as your store or CRM, we connect it through n8n, Make, Zapier or the tool’s API. Exactly what can be connected is confirmed during the audit rather than promised in advance.',
    ],
    groups: [
      { label: 'Email Platforms', items: ['ActiveCampaign', 'Klaviyo', 'Mailchimp', 'Marketo', 'HubSpot'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'Zoho CRM', 'GoHighLevel'] },
      { label: 'Stores & Websites', items: ['Shopify', 'WordPress', 'Webflow'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Email Automation With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. For email, we design sequences around your list and offers, then build them in the tools you already pay for.',
    items: [
      { title: 'Sequences Designed for Your List', description: 'Triggers, branches and timing are planned around your customers, not copied from a template.' },
      { title: 'Drafts in Your Voice', description: 'AI writes from your messaging and product facts, and your team approves each email.' },
      { title: 'No New Email Platform', description: 'We work inside the email and CRM tools you already use.' },
      { title: 'Straight Answers', description: 'We tell you which emails are worth automating and which are better written by hand.' },
      { title: 'Tested Before Launch', description: 'Every sequence is tested end to end before real contacts enter it.' },
      { title: 'Yours to Keep', description: 'Every email workflow, template and the documentation behind them belong to you once we finish.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up AI Email Automation',
    intro:
      'We start by reviewing the emails you send today and the moments where a follow-up is missing. You approve the plan before anything is built.',
    steps: [
      { title: 'Email Audit', description: 'A free review of your list, current sequences and the gaps in your follow-up.' },
      { title: 'Sequence Map', description: 'Triggers, segments, branches, timing and approval points are agreed in writing.' },
      { title: 'Build & Draft', description: 'Workflows are built in your platform and AI drafts the first emails for review.' },
      { title: 'Test', description: 'Each path is tested with sample contacts before going live.' },
      { title: 'Launch in Stages', description: 'Sequences go live one at a time, with your team watching the first runs.' },
      { title: 'Review', description: 'Reports are checked after launch, and sequences are adjusted based on the results.' },
    ],
    note: 'Your written quote lists the sequences in scope, the platforms involved, deliverables, usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find out which emails you can automate',
    heading: 'Make Every Email Arrive at the Right Moment',
    description:
      'Book a free, no-obligation email automation audit. We will review your list, sequences and platform, show you where automated email would save the most time, and be honest about where it would not.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Email Automation: Common Questions',
  faqSideText: 'Want to know which of your emails could run on their own? Book a free audit and we will map it out with you.',
  faqs: [
    {
      question: 'What is AI email automation?',
      answer:
        'It is email marketing where workflows send messages based on triggers and behavior, and AI helps draft, personalize and time them. Clickmasters builds it inside your existing email platform, with your team approving the content.',
    },
    {
      question: 'How is it different from regular email marketing automation?',
      answer:
        'Regular automation follows fixed sequences that someone writes and maintains by hand. AI adds drafting, segment-level wording and send-time suggestions, so sequences take less effort to produce and fit each group better.',
    },
    {
      question: 'Which emails can be automated?',
      answer:
        'Common examples include welcome and onboarding series, content follow-ups, nurture sequences, abandoned cart reminders, post-purchase emails, review requests and re-engagement series.',
    },
    {
      question: 'Will AI write all of our emails?',
      answer:
        'No. AI produces first drafts from your messaging and product information. Your team edits and approves every email before a workflow uses it.',
    },
    {
      question: 'How does email personalization work?',
      answer:
        'Contacts are grouped by source, interests, behavior and lifecycle stage. Each segment then receives wording and timing suited to it, rather than one version for the whole list.',
    },
    {
      question: 'Can automated follow-up emails react to what a contact does?',
      answer:
        'Yes. Opens, clicks, site visits and periods of silence can each send a contact down a different branch of the sequence.',
    },
    {
      question: 'Which email platforms do you work with?',
      answer:
        'We build on platforms such as ActiveCampaign, Klaviyo, Mailchimp, Marketo and HubSpot, and connect CRMs like Salesforce, Zoho CRM and GoHighLevel. What can be connected is confirmed during the audit.',
    },
    {
      question: 'Do you guarantee higher open rates?',
      answer:
        'No. We do not promise specific open rates, click rates or inbox placement. We build sequences that are timely and relevant, and the reports show you how they perform.',
    },
    {
      question: 'How do we measure email automation performance?',
      answer:
        'Dashboards report on each sequence and segment from live data, and AI summaries highlight what changed. Email activity can also be viewed alongside your CRM records.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your list and current emails, agree the first sequences to automate and send a written quote with scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
