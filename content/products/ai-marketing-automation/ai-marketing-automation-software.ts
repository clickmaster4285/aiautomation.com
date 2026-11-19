// content/products/ai-marketing-automation/ai-marketing-automation-software.ts
// Copy + SEO for /products/ai-marketing-automation/ai-marketing-automation-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the software layer as a whole: connected workflows across email, social and website,
//   built on the client's existing stack, plus reporting that supports decisions.
// - Only capabilities stated on the site (AI marketing automation service + parent product page):
//   AI drafting (blog, email, social, ad copy) with human approval, segmentation, behavior-based
//   journeys, triggers (actions, stages, dates, rules), social scheduling/repurposing, CMS publishing
//   (WordPress, Webflow, Shopify), self-updating dashboards, AI campaign summaries, CRM sync.
// - Do NOT add SMS, WhatsApp, named ad or social networks, A/B testing, attribution, predictive
//   analytics, budget optimization, statistics, prices, testimonials, guarantees or support promises.
// - Clickmasters builds this on the client's existing tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_MARKETING_AUTOMATION_SOFTWARE_PATH = '/products/ai-marketing-automation/ai-marketing-automation-software';

export const aiMarketingAutomationSoftwareSeo: HubSeo = {
  name: 'AI Marketing Automation Software',
  path: AI_MARKETING_AUTOMATION_SOFTWARE_PATH,
  title: 'AI Marketing Automation Software, Built In | Clickmasters',
  description:
    'AI marketing automation software built on the CRM, email and website tools you already use. Connected workflows, AI drafts you approve, live reports.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Marketing Automation', path: '/products/ai-marketing-automation' },
    { name: 'AI Marketing Automation Software', path: AI_MARKETING_AUTOMATION_SOFTWARE_PATH },
  ],
};

export const aiMarketingAutomationSoftwareKeywords = [
  'AI marketing automation software',
  'AI-powered marketing workflows',
  'marketing automation system',
  'marketing process automation',
  'marketing operations automation',
  'cross-channel marketing automation',
  'marketing team productivity tools',
  'data-driven marketing automation',
  'custom marketing automation software',
  'marketing automation for existing CRM',
  'what does marketing automation software do',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI marketing automation', href: '/products/ai-marketing-automation', section: 'What Is AI Marketing Automation Software?' },
  { anchor: 'AI workflow automation services', href: '/services/ai-workflow-automation', section: 'One System Across Your Marketing Stack (explainer)' },
  { anchor: 'AI email automation', href: '/products/ai-marketing-automation/ai-email-automation', section: 'Software Capabilities' },
  { anchor: 'automated reporting', href: '/solutions/reporting-automation', section: 'Data-Driven Marketing Decisions (extras)' },
  { anchor: 'AI campaign management software', href: '/products/ai-marketing-automation/ai-campaign-management-software', section: 'Data-Driven Marketing Decisions (extras)' },
] as const;

export const aiMarketingAutomationSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Marketing Automation Software',
    heading: 'AI Marketing Automation Software Built Into the Tools You Already Pay For',
    accentWords: 7,
    subheading:
      'Instead of adding another platform, we build AI marketing automation software on top of your CRM, email tools and website. Workflows connect them, AI drafts the content your team approves and reports update on their own.',
    primaryCta: { text: 'Book a Free Marketing Systems Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-marketing-automation-ai-humanoid-profile.webp',
    imageAlt: 'AI humanoid profile illustrating AI marketing automation software connected to an existing marketing stack',
    imageWidth: 666,
    imageHeight: 375,
    marquee: ['Built on your stack', 'Connected workflows', 'Email, social & website', 'Drafts you approve', 'Reports that update'],
  },

  intro: {
    eyebrow: 'The Software Layer',
    heading: 'What Is AI Marketing Automation Software?',
    paragraphs: [
      'AI marketing automation software is the layer that runs your repeatable marketing work for you. It moves data between tools, starts the right workflow when something happens and uses AI for tasks that need reading or writing, such as sorting contacts or drafting copy.',
      'Most teams already own the pieces: a CRM, an email platform, a website and a few social accounts. The trouble is that those pieces rarely talk to each other. Our version of the software is not a new subscription. It is a set of connected workflows built inside the tools you already run, as part of our wider [AI marketing automation](/products/ai-marketing-automation) product.',
      'The aim is simple. Fewer manual hand-offs between tools, less copy-and-paste work for your marketers, and clearer numbers for the people making decisions.',
    ],
    problems: [
      'Leads, lists and reports live in different tools that never sync.',
      'Marketers spend hours moving data by hand between platforms.',
      'Each new tool adds another login and another place to check.',
      'Nobody can say quickly which campaigns are actually working.',
    ],
  },

  explainer: {
    eyebrow: 'Connected Stack',
    heading: 'One System Across Your Marketing Stack',
    paragraphs: [
      'Buying an all-in-one platform often means migrating contacts, rebuilding campaigns and retraining the team. Building on your existing stack skips most of that. Your CRM stays the system of record, your email tool keeps sending, and the automation layer links them together.',
      'That layer is built with automation platforms such as n8n, Make or Zapier, or with direct API connections where a tool supports them. It follows the same engineering approach as our [AI workflow automation services](/services/ai-workflow-automation), applied to marketing processes.',
    ],
    points: [
      { title: 'No Platform Migration', description: 'Your contacts, templates and history stay where they are today.' },
      { title: 'Shared Lead Data', description: 'Forms, email, CRM and website read from the same up-to-date records.' },
      { title: 'Event Triggers', description: 'Actions, lifecycle stages, dates and business rules start each workflow.' },
      { title: 'Error Handling', description: 'Failed steps are caught and flagged, rather than silently skipped.' },
    ],
  },

  features: {
    eyebrow: 'Software Capabilities',
    heading: 'What the Software Does Across Email, Social and Your Website',
    intro:
      'Each capability is a workflow configured for your funnel and brand. Channel-specific depth lives on sibling pages, such as [AI email automation](/products/ai-marketing-automation/ai-email-automation) for sequences, personalization and send timing.',
    items: [
      { title: 'Workflow Orchestration', description: 'Multi-step marketing processes run on triggers instead of reminders and checklists.' },
      { title: 'Contact Segmentation', description: 'AI helps classify contacts by profile, source and behavior so each group gets relevant messages.' },
      { title: 'Behavior-Based Journeys', description: 'Journeys branch on what people open, click and do, and update as they engage or go quiet.' },
      { title: 'AI Content Drafting', description: 'Blog, email, social and ad copy is drafted from your messaging, then reviewed by your team.' },
      { title: 'Social Content Workflows', description: 'Posts are scheduled, repurposed and routed for approval through one process.' },
      { title: 'Website Publishing', description: 'Approved content can flow into WordPress, Webflow or Shopify pages and landing pages.' },
      { title: 'CRM Sync', description: 'Lifecycle stages and marketing activity update in your CRM as contacts progress.' },
      { title: 'Self-Updating Dashboards', description: 'Performance views refresh from live workflow data, not weekly exports.' },
      { title: 'AI Campaign Summaries', description: 'Short written summaries point out what changed and where to look next.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How AI Marketing Automation Software Runs Day to Day',
    intro:
      'Behind every campaign is the same loop: data comes in, rules decide what happens, AI assists with the reading and writing, and people approve anything customers will see.',
    steps: [
      { title: 'Connect', description: 'Your CRM, email platform, website and forms are linked through the automation layer.' },
      { title: 'Listen', description: 'The system watches for triggers such as a form fill, a purchase, a stage change or a date.' },
      { title: 'Decide', description: 'Rules and segments determine which workflow a contact enters and which branch they follow.' },
      { title: 'Draft', description: 'Where content is needed, AI prepares a draft in your brand voice for review.' },
      { title: 'Deliver', description: 'Approved messages go out through email, social or your website on schedule.' },
      { title: 'Report', description: 'Results feed dashboards and summaries, so the team can adjust the next round.' },
    ],
  },

  benefits: {
    eyebrow: 'Productivity',
    heading: 'How the Software Improves Marketing Team Productivity',
    intro:
      'The gains are practical. Marketers get back the hours they spent on mechanics and use them for planning, creative work and customer insight.',
    items: [
      { title: 'Fewer Manual Hand-Offs', description: 'Data moves between tools automatically, so nobody re-keys a lead.' },
      { title: 'No Extra Platform to Learn', description: 'The team keeps working in the tools it already knows.' },
      { title: 'Faster First Drafts', description: 'Reviewing a draft replaces starting from a blank page.' },
      { title: 'Steady Execution', description: 'Workflows run on time even when the team is busy elsewhere.' },
      { title: 'One Version of the Numbers', description: 'Dashboards draw from the same data the workflows use.' },
      { title: 'Room to Grow', description: 'New segments and journeys can be added without rebuilding the stack.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Software and Team',
    heading: 'Where the Software Works and Where Marketers Decide',
    paragraphs: [
      'Good marketing software takes over the mechanics, not the thinking. The automation layer handles timing, routing and drafting, while strategy, positioning and final approval stay with your team.',
      'That split is deliberate. AI can produce a useful first draft, but it cannot know which message fits this quarter’s priorities. Your marketers set direction, and the software carries it out consistently.',
    ],
    aiDoes: [
      'Moves lead and campaign data between your tools',
      'Starts workflows from actions, stages, dates and rules',
      'Classifies contacts into segments',
      'Drafts on-brand copy for review',
      'Schedules approved content across channels',
      'Builds dashboards and writes performance summaries',
    ],
    peopleDo: [
      'Choose goals, audiences and offers',
      'Approve every piece of customer-facing content',
      'Decide which journeys to build or retire',
      'Interpret results and set the next priorities',
    ],
  },

  spotlight: {
    eyebrow: 'Process Efficiency',
    heading: 'Marketing Process Automation Without the Busywork',
    paragraphs: [
      'Many marketing processes look small on their own: tag the new lead, add it to a list, notify sales, log the campaign result. Together they eat entire days. Marketing process automation maps each of these chains once and then runs it the same way every time.',
      'We start with the processes your team repeats most often, because those return the most time. Less frequent or highly judgment-based work usually stays manual, and we will tell you when that is the better choice.',
    ],
    points: [
      { title: 'Lead Intake', description: 'New leads are captured, tagged by source and placed in the right segment.' },
      { title: 'List Hygiene', description: 'Records are cleaned and updated on arrival instead of in quarterly clean-ups.' },
      { title: 'Content Routing', description: 'Drafts move to the right reviewer and on to publishing once approved.' },
      { title: 'Sales Notifications', description: 'Sales-ready contacts are flagged to sales with their activity history.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Data-Driven Decisions',
      heading: 'Data-Driven Marketing Decisions From Live Numbers',
      accentWords: 3,
      paragraphs: [
        'Decisions improve when the numbers are current. Because the workflows already produce the data, dashboards can build themselves from it. This follows the same approach as our [automated reporting](/solutions/reporting-automation) work, focused on marketing activity and connected to CRM records.',
        'Reporting is one part of running campaigns well. For planning, execution and monitoring of individual campaigns, see our [AI campaign management software](/products/ai-marketing-automation/ai-campaign-management-software), which builds on the same data.',
      ],
      points: [
        { title: 'Live Dashboards', description: 'Campaign, segment and journey views that refresh automatically.' },
        { title: 'Written Summaries', description: 'AI-written notes highlight notable changes in plain language.' },
        { title: 'Marketing Plus CRM', description: 'Marketing activity sits next to sales data for a fuller funnel picture.' },
        { title: 'Decisions Stay Human', description: 'The reports inform your choices; they do not make them.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Suits',
    heading: 'Teams That Get the Most From Marketing Automation Software',
    items: [
      { title: 'Lean Marketing Teams', description: 'Small teams with more follow-up and production work than hours in the week.' },
      { title: 'Growing B2B Companies', description: 'Businesses whose lead volume has outgrown spreadsheets and manual sends.' },
      { title: 'E-commerce Brands', description: 'Stores that want store events to trigger lifecycle email and content workflows.' },
      { title: 'SaaS Companies', description: 'Product teams running trial, onboarding and activation journeys.' },
      { title: 'Multi-Tool Stacks', description: 'Companies whose CRM, email and website tools never quite sync.' },
      { title: 'Agencies', description: 'Agencies that repeat intake and nurture workflows across client accounts.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'The Stack the Software Runs On',
    paragraphs: [
      'We build on CRM and marketing platforms such as HubSpot, Salesforce, Zoho CRM and GoHighLevel, and on email tools including ActiveCampaign, Klaviyo, Mailchimp and Marketo. Websites and stores on WordPress, Webflow and Shopify can receive approved content and send events back.',
      'Ad and social platforms can be connected for campaign execution and content distribution where their integrations allow. Exactly which connections are possible depends on each tool’s APIs, and we confirm that during the audit rather than promising it up front.',
    ],
    groups: [
      { label: 'CRM & Marketing Platforms', items: ['HubSpot', 'Salesforce', 'Zoho CRM', 'GoHighLevel'] },
      { label: 'Email Tools', items: ['ActiveCampaign', 'Klaviyo', 'Mailchimp', 'Marketo'] },
      { label: 'Websites & Stores', items: ['WordPress', 'Webflow', 'Shopify'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Marketing Automation Software With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We design the workflows, connect the systems and hand the finished software over to your team.',
    items: [
      { title: 'Stack-First Approach', description: 'We extend the tools you already pay for before suggesting anything new.' },
      { title: 'Designed Around Your Funnel', description: 'Triggers, segments and journeys follow how your customers actually buy.' },
      { title: 'Brand-Grounded AI', description: 'Drafts come from your messaging and product information, with human approval.' },
      { title: 'Plain Advice', description: 'We say where AI helps and where a simple rule or a person does better.' },
      { title: 'Supervised Launch', description: 'Workflows run on real campaigns under oversight before they run alone.' },
      { title: 'Full Hand-Over', description: 'You own the workflows, accounts and documentation at the end of the project.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'From Scattered Tools to One Working System',
    intro:
      'We map your current stack and processes before connecting anything, and you approve the plan before the build begins.',
    steps: [
      { title: 'Stack Audit', description: 'A free review of your marketing tools, data flows and the processes that take the most time.' },
      { title: 'System Design', description: 'Triggers, segments, workflows, approval points and dashboards are mapped and agreed.' },
      { title: 'Build', description: 'Workflows, AI drafting steps and reporting are built inside your existing platforms.' },
      { title: 'Test', description: 'Each workflow is tested end to end with sample data before real contacts enter it.' },
      { title: 'Staged Go-Live', description: 'Workflows switch on in stages, with your team watching the first runs.' },
      { title: 'Review', description: 'We review early results with you; any support terms are written into your quote.' },
    ],
    note: 'Your written quote covers the scope, platforms, deliverables, usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'See how your tools could work as one system',
    heading: 'Turn Your Marketing Stack Into Working Software',
    description:
      'Book a free, no-obligation audit. We will map your tools and processes, show where AI marketing automation software would remove manual work and tell you plainly where it would not.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Marketing Automation Software: Common Questions',
  faqSideText: 'Want to know how your own tools would fit together? Book a free audit and we will map it with you.',
  faqs: [
    {
      question: 'What does AI marketing automation software do?',
      answer:
        'It connects your marketing tools, runs repeatable workflows from triggers and uses AI for tasks such as segmenting contacts, drafting copy and summarizing results. Your team approves anything customers will see.',
    },
    {
      question: 'Do we need to buy a new marketing platform?',
      answer:
        'Usually not. We build on the CRM, email and website tools you already use, such as HubSpot, Salesforce, Klaviyo or Mailchimp, and add an automation layer to connect them.',
    },
    {
      question: 'Which channels does the software cover?',
      answer:
        'Email, social content workflows and your website. Ad and social platforms can be connected for content distribution where their integrations allow, confirmed during the audit.',
    },
    {
      question: 'How is this different from the automation built into our email tool?',
      answer:
        'Built-in tools cover workflows inside that one product. Our software connects workflows across your stack and adds AI drafting, classification and reporting on top of the native features.',
    },
    {
      question: 'Will AI publish content without our approval?',
      answer:
        'No. AI prepares drafts from your messaging and product information, and your team reviews and approves them before anything is sent or published.',
    },
    {
      question: 'How does the software support data-driven decisions?',
      answer:
        'Dashboards refresh from the data your workflows produce, and AI-written summaries highlight what changed. Marketing activity can sit next to CRM data, so the team sees more of the funnel.',
    },
    {
      question: 'Is this suitable for a small marketing team?',
      answer:
        'Yes. Small teams often benefit most, because they have the least spare time. Most start with one or two high-volume processes and add more later.',
    },
    {
      question: 'What happens if one of our tools has no integration?',
      answer:
        'A custom connection may be possible through the tool’s API. If it is not, we explain the alternatives during the audit rather than promising a connection we cannot build.',
    },
    {
      question: 'Who owns the workflows once they are built?',
      answer:
        'You do. Workflows, accounts and documentation are handed over at the end of the project.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your tools and processes, agree what to automate first and send a written quote with scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
