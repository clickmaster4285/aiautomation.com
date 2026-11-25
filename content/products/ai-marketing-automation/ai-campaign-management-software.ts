// content/products/ai-marketing-automation/ai-campaign-management-software.ts
// Copy + SEO for /products/ai-marketing-automation/ai-campaign-management-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is managing campaigns end to end: planning, workflow, multi-channel execution, monitoring, reporting, refinement.
// - Channels named on the site: email, social, website. "Ad and social platforms" are stated only generically;
//   do NOT name ad networks, and do NOT claim budget automation, bid control, real-time ad controls,
//   A/B testing, attribution or predictive analytics.
// - No statistics, prices, testimonials, guarantees, or ongoing-support promises.
// - Clickmasters builds this on the client's existing marketing stack — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_CAMPAIGN_MANAGEMENT_SOFTWARE_PATH = '/products/ai-marketing-automation/ai-campaign-management-software';

export const aiCampaignManagementSoftwareSeo: HubSeo = {
  name: 'AI Campaign Management Software',
  path: AI_CAMPAIGN_MANAGEMENT_SOFTWARE_PATH,
  title: 'AI Campaign Management Software | Clickmasters',
  description:
    'AI campaign management software that plans, runs and reports on email, social and website campaigns inside your stack, with your team approving.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Marketing Automation', path: '/products/ai-marketing-automation' },
    { name: 'AI Campaign Management Software', path: AI_CAMPAIGN_MANAGEMENT_SOFTWARE_PATH },
  ],
};

export const aiCampaignManagementSoftwareKeywords = [
  'AI campaign management software',
  'marketing campaign management',
  'campaign management platform',
  'AI campaign planning',
  'campaign workflow management',
  'multi-channel campaign management',
  'campaign performance monitoring',
  'marketing campaign reporting',
  'campaign calendar automation',
  'how to manage marketing campaigns with AI',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI marketing automation system', href: '/products/ai-marketing-automation', section: 'What Is AI Campaign Management Software?' },
  { anchor: 'AI email automation', href: '/products/ai-marketing-automation/ai-email-automation', section: 'Running One Campaign Across Email, Social and Website (spotlight)' },
  { anchor: 'AI social media automation', href: '/products/ai-marketing-automation/ai-social-media-automation', section: 'Running One Campaign Across Email, Social and Website (spotlight)' },
  { anchor: 'automated reporting solutions', href: '/solutions/reporting-automation', section: 'Campaign Monitoring and Reporting (extras)' },
  { anchor: 'campaign hand-offs into the AI Sales CRM', href: '/products/ai-sales-crm', section: 'Campaign Monitoring and Reporting (extras)' },
] as const;

export const aiCampaignManagementSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Campaign Management',
    heading: 'AI Campaign Management Software That Keeps Every Launch on Track',
    accentWords: 5,
    subheading:
      'Plan campaigns, route content for approval, launch across email, social and your website, and watch results on dashboards that update themselves. Clickmasters builds it inside the marketing tools and CRM your team already runs.',
    primaryCta: { text: 'Book a Free Campaign Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-marketing-automation-ai-humanoid-profile.webp',
    imageAlt: 'AI humanoid profile illustrating AI campaign management software for planning and reporting on marketing campaigns',
    imageWidth: 666,
    imageHeight: 375,
    marquee: ['Campaign briefs', 'Approval routing', 'Email, social & web', 'Live dashboards', 'AI campaign summaries'],
  },

  intro: {
    eyebrow: 'Campaign Operations',
    heading: 'What Is AI Campaign Management Software?',
    paragraphs: [
      'AI campaign management software organizes the work that sits around a marketing campaign. It tracks the brief, the deadlines, the drafts waiting for sign-off, the launch steps on each channel and the numbers that come back afterwards. AI helps with the parts that slow teams down, such as first drafts and weekly summaries.',
      'Most teams already have the tools. What they lack is the glue between them. A campaign lives in a planning doc, a shared calendar, an email platform, a social scheduler and a reporting spreadsheet, and someone has to keep all five in step by hand.',
      'Clickmasters connects those steps into one managed flow. It is the campaign layer of the [AI marketing automation system](/products/ai-marketing-automation) we build on your stack, so each launch follows the same reliable process.',
    ],
    problems: [
      'Campaign plans live in documents that nobody updates once work starts.',
      'Drafts stall in inboxes because approvals depend on someone chasing them.',
      'Each channel launches on a different day because the steps are manual.',
      'Results arrive weeks later, after a long round of exports and spreadsheets.',
    ],
  },

  explainer: {
    eyebrow: 'Beyond a Calendar',
    heading: 'Why Campaign Management Needs More Than a Calendar',
    paragraphs: [
      'A content calendar shows what should happen. It does not make it happen. Campaign management is the chain of actions behind each calendar entry: write, review, adjust, schedule, publish, measure. When those actions depend on memory, small delays stack up and launches drift.',
      'Campaign workflow management turns that chain into steps that trigger each other. A finished draft goes straight to its reviewer. An approved asset is queued for its channel. A live campaign starts feeding its dashboard. Your team still decides what to say and when. The system handles the handovers.',
    ],
    points: [
      { title: 'Structured Briefs', description: 'Every campaign starts from the same brief format, so goals, audience and channels are clear from day one.' },
      { title: 'Clear Ownership', description: 'Each step has an owner and a due date, so nothing waits without anyone noticing.' },
      { title: 'Automatic Handovers', description: 'Finishing one step starts the next, from draft to review to scheduling.' },
      { title: 'One Source of Truth', description: 'Status, assets and results sit in one place instead of five separate tools.' },
    ],
  },

  features: {
    eyebrow: 'Core Capabilities',
    heading: 'Core Capabilities of AI Campaign Management',
    intro:
      'Each capability is set up around how your team already plans and approves work. We extend your current tools rather than asking everyone to learn a new platform.',
    items: [
      { title: 'Campaign Planning', description: 'Briefs, timelines and channel plans captured in a consistent format that feeds the rest of the workflow.' },
      { title: 'Approval Routing', description: 'Drafts move to the right reviewer automatically, with reminders when a sign-off is overdue.' },
      { title: 'AI Draft Assistance', description: 'First drafts of emails, social posts, blog content and ad copy, written from your messaging for your team to edit.' },
      { title: 'Multi-Channel Execution', description: 'Approved assets are scheduled and sent across email, social and your website from one campaign plan.' },
      { title: 'Audience Segments', description: 'Campaigns reach the right groups using segments built from CRM and behavioral data.' },
      { title: 'Triggered Campaign Steps', description: 'Follow-up messages start from customer actions, lifecycle stages, dates or rules you define.' },
      { title: 'Self-Updating Dashboards', description: 'Campaign results flow into dashboards automatically, without manual exports.' },
      { title: 'AI Campaign Summaries', description: 'Plain-language summaries explain what changed in a campaign and where to look next.' },
      { title: 'CRM-Linked Reporting', description: 'Campaign activity is connected to CRM records, so marketing and sales look at the same data.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How AI Campaign Management Works, From Brief to Review',
    intro:
      'Each stage is a workflow in the tools you already use. People make the decisions, and automation moves the work between them.',
    steps: [
      { title: 'Brief', description: 'The campaign goal, audience, channels and dates are captured in a shared brief that starts the workflow.' },
      { title: 'Plan', description: 'Tasks, owners and deadlines are created from the brief and added to your campaign calendar.' },
      { title: 'Draft', description: 'AI prepares first drafts for each channel from your brand messaging and product information.' },
      { title: 'Approve', description: 'Drafts are routed to reviewers in order, and nothing is scheduled until it is signed off.' },
      { title: 'Launch', description: 'Approved content is scheduled across email, social and website, with triggered follow-ups ready to run.' },
      { title: 'Monitor & Refine', description: 'Dashboards and AI summaries report on performance, and the team adjusts the next round based on what they show.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Better Campaign Management Gives Your Team',
    intro:
      'The gain is less coordination work. Your marketers spend their week on the campaign itself, not on chasing its moving parts.',
    items: [
      { title: 'Fewer Missed Deadlines', description: 'Owners and reminders keep each step moving, so launches happen on the planned date.' },
      { title: 'Faster Approvals', description: 'Reviewers receive drafts as soon as they are ready, instead of when someone remembers to send them.' },
      { title: 'Consistent Launches', description: 'Every campaign follows the same checked process, whoever is running it that month.' },
      { title: 'Less Manual Reporting', description: 'Results build up automatically, which frees the hours once spent on spreadsheets.' },
      { title: 'Shared Visibility', description: 'Marketing leads and sales see campaign status and results in one view.' },
      { title: 'Room to Run More Campaigns', description: 'With handovers and reporting automated, the same team can manage more launches.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'People and AI',
    heading: 'What the System Handles and What Your Team Decides',
    paragraphs: [
      'Good campaigns depend on judgment: the offer, the angle, the timing that suits your market. None of that is handed to AI. Instead, automation takes care of the repeatable work around each decision, and AI helps with drafting and summarizing.',
      'Every customer-facing asset passes a human review before it goes live. Content is drafted from your own brand voice and product material, so reviewers edit and approve rather than rewrite.',
    ],
    aiDoes: [
      'Creates tasks and deadlines from each campaign brief',
      'Routes drafts to reviewers and sends reminders',
      'Drafts email, social, blog and ad copy for editing',
      'Schedules approved assets across channels',
      'Updates campaign dashboards from live data',
      'Writes short summaries of campaign performance',
    ],
    peopleDo: [
      'Set campaign goals, offers and messaging',
      'Approve every asset before it is published',
      'Choose audiences, channels and timing',
      'Decide what to change based on the results',
    ],
  },

  spotlight: {
    eyebrow: 'Multi-Channel Execution',
    heading: 'Running One Campaign Across Email, Social and Website',
    paragraphs: [
      'A single campaign usually touches several channels. Without a shared plan, each one is set up separately, often by different people, and the message drifts. Multi-channel campaign management keeps them tied to one brief, one set of approved assets and one launch schedule.',
      'Channel-specific work still gets the attention it needs. Nurture sequences and send timing are handled by [AI email automation](/products/ai-marketing-automation/ai-email-automation), while posting and repurposing run through [AI social media automation](/products/ai-marketing-automation/ai-social-media-automation). Campaign management sits above both and keeps them in step.',
    ],
    points: [
      { title: 'Email', description: 'Campaign emails and follow-up sequences triggered by actions, stages, dates or rules.' },
      { title: 'Social', description: 'Approved posts scheduled and repurposed for each campaign through a repeatable workflow.' },
      { title: 'Website', description: 'Campaign content published to WordPress, Webflow or Shopify sites as part of the launch.' },
      { title: 'Ad Copy', description: 'Ad copy drafts prepared with the rest of the campaign assets for your team to review and place.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Monitoring & Reporting',
      heading: 'Campaign Monitoring and Reporting Without the Spreadsheets',
      accentWords: 3,
      paragraphs: [
        'Campaign performance monitoring only helps if the numbers are current. Dashboards here update from the data your campaign workflows already produce, so the team can see each campaign, segment and channel without rebuilding a report. The approach follows our [automated reporting solutions](/solutions/reporting-automation), applied to marketing.',
        'Results also connect to your CRM. When a campaign produces sales-ready leads, they can move through [campaign hand-offs into the AI Sales CRM](/products/ai-sales-crm), so both teams work from the same records. AI summaries then point out what changed, and your team decides what to adjust next time.',
      ],
      points: [
        { title: 'Per-Campaign Views', description: 'Each campaign has its own dashboard with results by channel and segment.' },
        { title: 'Readable Summaries', description: 'Short AI-written notes explain movements in the numbers in plain language.' },
        { title: 'CRM Connection', description: 'Marketing results are linked to lead and contact records in your CRM.' },
        { title: 'Review Rhythm', description: 'Regular reviews turn what the reports show into changes for the next campaign.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Who Uses AI Campaign Management',
    items: [
      { title: 'Lean Marketing Teams', description: 'A small team running several campaigns a month without a dedicated operations role.' },
      { title: 'Product Launches', description: 'Launches that need email, social and website content to go live together on one date.' },
      { title: 'Seasonal Promotions', description: 'Recurring campaigns that can reuse a proven brief, workflow and reporting setup each season.' },
      { title: 'Event Marketing', description: 'Invitations, reminders and follow-up messages tied to registration dates and attendee actions.' },
      { title: 'Marketing Agencies', description: 'A repeatable campaign process that can be copied across client accounts.' },
      { title: 'Sales-Led Companies', description: 'Campaigns that need to hand engaged leads to sales with context, not just a name.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Campaign Tools We Connect',
    paragraphs: [
      'Campaign management is built on the platforms you already pay for. That includes CRM and marketing platforms such as HubSpot, Salesforce, Zoho CRM and GoHighLevel, and email tools such as ActiveCampaign, Klaviyo, Mailchimp and Marketo. Website steps can publish to WordPress, Webflow and Shopify.',
      'Automation platforms like n8n, Make and Zapier tie the steps together. Ad and social platforms can be connected for execution and distribution where their integrations allow it. Which tools can be connected, and how, is confirmed in the audit rather than assumed.',
    ],
    groups: [
      { label: 'CRM & Marketing Platforms', items: ['HubSpot', 'Salesforce', 'Zoho CRM', 'GoHighLevel'] },
      { label: 'Email Platforms', items: ['ActiveCampaign', 'Klaviyo', 'Mailchimp', 'Marketo'] },
      { label: 'Websites & Stores', items: ['WordPress', 'Webflow', 'Shopify'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Campaign Management With Clickmasters?',
    intro:
      'We build automation for marketing, sales and support teams. For campaigns, that means a process shaped around how your team actually plans, approves and launches work.',
    items: [
      { title: 'Your Process, Automated', description: 'We map your current campaign steps first, then automate them instead of forcing a template.' },
      { title: 'No New Platform to Learn', description: 'Workflows run inside your existing CRM, email and website tools.' },
      { title: 'Approval Built In', description: 'Nothing customer-facing goes live without a person signing it off.' },
      { title: 'Plain About Limits', description: 'We say clearly which steps are worth automating and which are better left manual.' },
      { title: 'Tested Before Launch', description: 'Each workflow runs on a real campaign under supervision before it runs alone.' },
      { title: 'Yours to Keep', description: 'Workflows, accounts and documentation are handed over when the project ends.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How a Campaign Management Project Starts',
    intro:
      'We begin with one recent campaign and trace every step it took, from brief to report. That shows where the time actually went.',
    steps: [
      { title: 'Free Audit', description: 'We review your campaign process, tools and reporting, and point out the steps that slow launches down.' },
      { title: 'Workflow Design', description: 'Briefs, approval stages, channel steps and dashboards are mapped and agreed with your team.' },
      { title: 'Build & Connect', description: 'Workflows, AI drafting steps and reporting are set up inside your existing platforms.' },
      { title: 'Pilot Campaign', description: 'The system runs one live campaign with your team watching each step.' },
      { title: 'Roll Out', description: 'Once the pilot works as planned, the process is used for the campaigns that follow.' },
    ],
    note: 'Your written quote lists the scope, platforms, deliverables, usage costs and timeline before any work begins.',
  },

  cta: {
    bandHeading: 'See where your campaigns lose time',
    heading: 'Launch Campaigns on Schedule, With Your Team in Control',
    description:
      'Book a free campaign management audit. We will look at how your last few campaigns were planned, approved, launched and reported, and show you which steps automation can take over.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Campaign Management Software: FAQs',
  faqSideText: 'Want to know how this would fit your own campaign process? Book a free audit and we will walk through it with you.',
  faqs: [
    {
      question: 'What is AI campaign management software?',
      answer:
        'It is a set of connected workflows that manage a marketing campaign from brief to report. Automation moves the work between steps, AI drafts content and summarizes results, and your team makes the decisions and approves every asset.',
    },
    {
      question: 'Is this a separate platform we have to switch to?',
      answer:
        'No. Clickmasters builds campaign management inside the CRM, email, website and automation tools you already use, so your team keeps working where it works today.',
    },
    {
      question: 'Which channels can a campaign run on?',
      answer:
        'Email, social and your website are the core channels. Ad copy can be drafted with the other assets, and ad or social platforms can be connected for distribution where their integrations allow.',
    },
    {
      question: 'How does approval work?',
      answer:
        'Drafts are routed to the reviewers you choose, in the order you set. Reminders go out when a sign-off is overdue, and nothing is scheduled until it has been approved.',
    },
    {
      question: 'Does the AI decide what our campaigns say?',
      answer:
        'No. Your team sets the goals, offers and messaging. AI prepares first drafts from your brand material, and people edit and approve them before anything is published.',
    },
    {
      question: 'How is campaign performance reported?',
      answer:
        'Dashboards update automatically from the data your campaign workflows produce, with views by campaign, channel and segment. Short AI-written summaries explain what changed.',
    },
    {
      question: 'Can campaign results connect to our CRM?',
      answer:
        'In most cases, yes. We work with CRMs such as HubSpot, Salesforce, Zoho CRM and GoHighLevel, linking campaign activity to lead and contact records. What can be connected is confirmed during the audit.',
    },
    {
      question: 'Will it adjust ad budgets or bids automatically?',
      answer:
        'No, that is not part of what we build. Budget and bidding decisions stay with your team, informed by the reporting the system provides.',
    },
    {
      question: 'Is AI campaign management useful for a small team?',
      answer:
        'Yes. Small teams often feel coordination work the most. Many start by automating approvals and reporting for one recurring campaign, then extend the process from there.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We trace a recent campaign end to end, agree which steps to automate first and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
