// content/products/ai-marketing-automation/ai-seo-automation-tools.ts
// Copy + SEO for /products/ai-marketing-automation/ai-seo-automation-tools.
//
// Accuracy rules for this page (keep them when editing):
// - Verified on the site: AI content drafting (incl. blog) grounded in brand voice with human approval,
//   content flowing into WordPress / Webflow / Shopify, custom workflows via n8n / Make / Zapier / APIs,
//   self-updating dashboards with AI-written summaries.
// - Keyword research, content briefs, on-page checks, technical monitoring, internal-linking suggestions
//   and SEO reporting are CUSTOM WORKFLOWS we scope around the client's existing SEO tools and data,
//   confirmed in the audit. Never present them as built-in features.
// - Name NO SEO tools (no Ahrefs, Semrush, Search Console, Google Analytics).
// - Never promise rankings, traffic, indexing or any result. No stats, prices, testimonials,
//   guarantees or ongoing-support promises.
// - Clickmasters builds this on the client's stack — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_SEO_AUTOMATION_TOOLS_PATH = '/products/ai-marketing-automation/ai-seo-automation-tools';

export const aiSeoAutomationToolsSeo: HubSeo = {
  name: 'AI SEO Automation Tools',
  path: AI_SEO_AUTOMATION_TOOLS_PATH,
  title: 'AI SEO Automation Tools for Content Teams | Clickmasters',
  description:
    'AI SEO automation tools for your stack: keyword and brief workflows, AI-drafted content you approve, CMS publishing and SEO reports. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Marketing Automation', path: '/products/ai-marketing-automation' },
    { name: 'AI SEO Automation Tools', path: AI_SEO_AUTOMATION_TOOLS_PATH },
  ],
};

export const aiSeoAutomationToolsKeywords = [
  'AI SEO automation tools',
  'SEO automation',
  'AI SEO tools',
  'SEO workflow automation',
  'automated SEO reporting',
  'AI content optimization',
  'AI content briefs',
  'keyword research automation',
  'on-page SEO automation',
  'technical SEO monitoring',
  'internal linking automation',
  'can AI automate SEO',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI Marketing Automation', href: '/products/ai-marketing-automation', section: 'What Are AI SEO Automation Tools?' },
  { anchor: 'custom AI workflow automation', href: '/services/ai-workflow-automation', section: 'How the Pieces Connect (explainer)' },
  { anchor: 'automated reporting', href: '/solutions/reporting-automation', section: 'SEO Reporting That Builds Itself (spotlight)' },
  { anchor: 'AI social media automation', href: '/products/ai-marketing-automation/ai-social-media-automation', section: 'What AI Should and Should Not Do in SEO' },
  { anchor: 'AI campaign management software', href: '/products/ai-marketing-automation/ai-campaign-management-software', section: 'Where SEO Fits in Your Wider Marketing (extras)' },
] as const;

export const aiSeoAutomationTools: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI SEO Automation',
    heading: 'AI SEO Automation Tools That Free Your Team for the Work That Ranks',
    accentWords: 6,
    subheading:
      'We build AI SEO automation tools around the platforms and data you already use. Research, briefs, first drafts, publishing steps and reporting become repeatable workflows, while your team keeps every editorial and strategic decision.',
    primaryCta: { text: 'Book a Free SEO Workflow Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-marketing-automation-ai-humanoid-profile.webp',
    imageAlt: 'AI humanoid profile representing AI SEO automation tools for content and search workflows',
    imageWidth: 666,
    imageHeight: 375,
    marquee: ['Keyword workflows', 'Content briefs', 'AI first drafts', 'CMS publishing', 'Self-updating SEO reports'],
  },

  intro: {
    eyebrow: 'SEO Automation',
    heading: 'What Are AI SEO Automation Tools?',
    paragraphs: [
      'AI SEO automation tools take the repeatable parts of search work and run them as workflows. Think of pulling keyword data into one place, turning it into a brief, drafting a first version, checking it before publishing and reporting on results. Each step still follows your SEO strategy. The tools just stop it from depending on someone’s spare afternoon.',
      'We do not sell an off-the-shelf SEO platform. Instead, we connect the tools and data you already rely on and add AI only where it saves real effort. It is one part of our [AI Marketing Automation](/products/ai-marketing-automation) work, focused on organic search.',
      'The goal is a steady, reviewable content and SEO process. Your specialists set direction. The workflows handle the copying, formatting, checking and chasing.',
    ],
    problems: [
      'Keyword research lives in scattered exports that nobody updates.',
      'Writers wait days for briefs, so the content calendar slips.',
      'Every published page needs the same manual checklist, and steps get skipped.',
      'Monthly SEO reports take hours to assemble from several sources.',
    ],
  },

  explainer: {
    eyebrow: 'How the Pieces Connect',
    heading: 'SEO Workflow Automation Built on Your Existing Tools',
    paragraphs: [
      'SEO teams usually already pay for good tools. The gap is the handoffs between them. Data sits in one place, briefs in another, drafts in a document and the final page in your CMS. SEO workflow automation joins those steps so information moves without retyping.',
      'We build these connections with automation platforms such as n8n, Make and Zapier, or directly through APIs where a tool offers one. It is the same approach as our [custom AI workflow automation](/services/ai-workflow-automation) service, applied to search. Which tools can be connected, and how, is confirmed during the audit rather than assumed.',
    ],
    points: [
      { title: 'Your Data Sources', description: 'Workflows read from the SEO and analytics tools you already use, where their integrations allow.' },
      { title: 'Shared Workspace', description: 'Keywords, briefs and drafts are tracked in one place instead of loose files.' },
      { title: 'CMS Hand-Off', description: 'Approved content can flow into WordPress, Webflow or Shopify as a draft for final review.' },
      { title: 'Clear Approval Points', description: 'Nothing is published or changed on your site without a person signing it off.' },
    ],
  },

  features: {
    eyebrow: 'What We Can Build',
    heading: 'SEO Workflows We Scope and Build for You',
    intro:
      'These are common workflows, not fixed product features. Each one is designed around your site, your tools and your process, and we agree the scope with you before building anything.',
    items: [
      { title: 'Keyword Research Workflows', description: 'Keyword data from your existing tools is gathered, grouped by topic and queued for review.' },
      { title: 'AI Content Briefs', description: 'Approved topics become structured briefs with headings, questions to answer and notes for writers.' },
      { title: 'On-Brand First Drafts', description: 'AI drafts blog content from your brand voice and product information, ready for an editor.' },
      { title: 'AI Content Optimization Checks', description: 'Before publishing, drafts are checked against your on-page rules, such as title length, heading order, meta descriptions and alt text.' },
      { title: 'Internal Linking Suggestions', description: 'Related pages on your site are suggested as link candidates for an editor to accept or reject.' },
      { title: 'CMS Publishing Steps', description: 'Approved drafts move into your CMS with fields filled in, so publishing is a final check, not a rebuild.' },
      { title: 'Technical SEO Monitoring', description: 'Where your tools expose the data, scheduled checks flag issues for your team to investigate.' },
      { title: 'Content Refresh Queues', description: 'Older pages that may need an update are listed for an editor to review, based on rules you set.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an Automated SEO Content Workflow Runs',
    intro:
      'A typical flow moves a topic from idea to published page. Your team approves at each point that matters.',
    steps: [
      { title: 'Gather', description: 'Keyword and performance data is collected from your tools on a schedule you choose.' },
      { title: 'Prioritize', description: 'Topics are grouped and listed for your SEO lead, who decides what gets written next.' },
      { title: 'Brief', description: 'Each approved topic gets a structured brief based on your template and guidelines.' },
      { title: 'Draft', description: 'AI writes a first draft grounded in your brand material, and an editor reviews and improves it.' },
      { title: 'Check & Publish', description: 'The draft is checked against your on-page rules, then sent to your CMS for final sign-off.' },
      { title: 'Report', description: 'Results feed a self-updating report, so the next round of priorities starts from current data.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Benefits of Automating SEO Workflows',
    intro:
      'Automation does not make a site rank on its own. What it does is remove the slow, repetitive work around good SEO, so your specialists can do more of the work that matters.',
    items: [
      { title: 'More Time for Strategy', description: 'Specialists spend less time on exports and formatting, and more on analysis and planning.' },
      { title: 'A Steadier Publishing Rhythm', description: 'Briefs and drafts arrive on time, so the content calendar holds.' },
      { title: 'Fewer Missed Checks', description: 'The same on-page checklist runs on every draft, not only when someone remembers.' },
      { title: 'Consistent Brand Voice', description: 'Drafts start from your voice and messaging, so editing is lighter and more consistent.' },
      { title: 'Reports Without the Busywork', description: 'Dashboards refresh themselves, with written summaries of what changed.' },
      { title: 'Room to Grow', description: 'More topics and pages can move through the process without the same rise in manual effort.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'An Honest View',
    heading: 'What AI Should and Should Not Do in SEO',
    paragraphs: [
      'AI is useful in SEO when it handles volume and structure. It can sort keyword lists, outline briefs, write a solid first draft and spot missing on-page elements. It is not a substitute for expertise, original insight or editorial judgment, and search engines reward pages that are genuinely helpful to readers.',
      'So every workflow we build keeps a person in charge of what is published. The same principle runs through our [AI social media automation](/products/ai-marketing-automation/ai-social-media-automation), where AI drafts and schedules but people approve.',
    ],
    aiDoes: [
      'Groups and organizes keyword data for review',
      'Turns approved topics into structured briefs',
      'Writes first drafts from your brand material',
      'Checks drafts against your on-page rules',
      'Suggests internal link candidates',
      'Summarizes SEO performance in plain language',
    ],
    peopleDo: [
      'Set the SEO strategy and choose target topics',
      'Add expertise, examples and original insight',
      'Edit, fact-check and approve every page',
      'Decide which technical fixes to make and when',
    ],
  },

  spotlight: {
    eyebrow: 'Automated SEO Reporting',
    heading: 'SEO Reporting That Builds Itself',
    paragraphs: [
      'Many SEO teams lose a day each month to reporting. They export numbers, paste them into slides and write the same commentary again. Automated SEO reporting replaces that with a dashboard that refreshes from your data sources on its own.',
      'AI then adds a short written summary that points out what changed and where to look next. It draws on our wider [automated reporting](/solutions/reporting-automation) work, shaped around the metrics your SEO team actually tracks. Which sources can feed the report is confirmed in the audit.',
    ],
    points: [
      { title: 'One Dashboard', description: 'Search and content metrics are brought together instead of spread across tools.' },
      { title: 'Scheduled Refresh', description: 'Reports update on their own, so the numbers are current when you open them.' },
      { title: 'Written Summaries', description: 'AI-written notes explain notable changes in plain language.' },
      { title: 'Stakeholder Ready', description: 'Leaders get a clear view without anyone rebuilding slides each month.' },
    ],
  },

  extras: [
    {
      eyebrow: 'The Bigger Picture',
      heading: 'Where SEO Fits in Your Wider Marketing',
      accentWords: 3,
      paragraphs: [
        'Search content rarely works alone. A new article can feed your newsletter, your social posts and your nurture journeys. When the SEO workflow connects to the rest of your marketing stack, one approved piece can support several channels.',
        'If you plan launches and promotions across channels, our [AI campaign management software](/products/ai-marketing-automation/ai-campaign-management-software) shows how campaign work is organized and reported. SEO content can slot into that plan as one more stream.',
      ],
      points: [
        { title: 'Repurposed Content', description: 'Approved articles can become drafts for email and social, reviewed by your team.' },
        { title: 'Connected Data', description: 'Content performance can sit next to marketing and CRM data where your tools allow.' },
        { title: 'Shared Calendar', description: 'SEO content is planned alongside campaigns instead of in isolation.' },
        { title: 'One Approval Habit', description: 'The same review steps apply across content, whatever channel it is for.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Teams That Get the Most From SEO Automation',
    items: [
      { title: 'In-House Content Teams', description: 'Small teams with a big content calendar and too much manual production work.' },
      { title: 'Marketing Agencies', description: 'Agencies that repeat the same research, brief and reporting steps across client accounts.' },
      { title: 'E-commerce Brands', description: 'Stores on Shopify or similar platforms with many category and product pages to maintain.' },
      { title: 'SaaS Companies', description: 'Software teams publishing guides and comparison content alongside product updates.' },
      { title: 'Professional Services', description: 'Firms that need steady, expert-reviewed articles without a full-time writing team.' },
      { title: 'Multi-Site Businesses', description: 'Organizations that run several websites and want one consistent SEO process.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Built on the Platforms You Already Use',
    paragraphs: [
      'SEO workflows connect to your website platform and to the marketing tools around it. We work with content management systems such as WordPress, Webflow and Shopify, and with automation platforms including n8n, Make and Zapier.',
      'Your SEO and analytics tools can feed these workflows where they offer an integration or API. We check exactly what each of your tools allows during the audit, and we only promise what we have confirmed.',
    ],
    groups: [
      { label: 'Websites & CMS', items: ['WordPress', 'Webflow', 'Shopify'] },
      { label: 'Marketing & CRM', items: ['HubSpot', 'Salesforce', 'Zoho CRM', 'GoHighLevel'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
      { label: 'SEO & Analytics Data', items: ['Your existing tools, confirmed in the audit'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Work With Clickmasters on SEO Automation?',
    intro:
      'We are an automation agency, not an SEO tool vendor. That means we build around your process and tools rather than asking you to switch platforms.',
    items: [
      { title: 'No New Platform to Learn', description: 'Workflows run inside the tools your team already knows.' },
      { title: 'Honest Scoping', description: 'We say up front which steps are worth automating and which are better left to people.' },
      { title: 'No Ranking Promises', description: 'We automate the work around SEO and never claim the automation alone will lift rankings.' },
      { title: 'Human Review Built In', description: 'Every workflow includes approval points before anything reaches your site.' },
      { title: 'Grounded AI Drafts', description: 'Content is drafted from your brand voice and product information, not generic defaults.' },
      { title: 'You Own the Workflows', description: 'Workflows and documentation are handed over to you when the project ends.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up Your SEO Automation',
    intro:
      'We start by mapping your current SEO process step by step. Then we agree which parts to automate first.',
    steps: [
      { title: 'Free Audit', description: 'We review your SEO workflow, tools and content process, and where time is being lost.' },
      { title: 'Scope & Plan', description: 'We agree the workflows, data sources, approval points and on-page rules.' },
      { title: 'Build', description: 'Workflows, briefs, drafting steps and reports are built around your tools.' },
      { title: 'Test', description: 'Each workflow runs on real topics with your team reviewing every output.' },
      { title: 'Launch in Stages', description: 'Workflows go live one at a time, starting with the one that saves the most effort.' },
      { title: 'Review & Adjust', description: 'We check how the workflows perform after launch, and any support terms are set out in your quote.' },
    ],
    note: 'Your written quote lists the scope, connected tools, deliverables, usage costs and timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find the SEO tasks worth automating',
    heading: 'Spend Less Time on SEO Busywork and More on Strategy',
    description:
      'Book a free, no-obligation SEO workflow audit. We will map your process, show you which steps automation can take over and be clear about the ones that should stay with your team.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI SEO Automation Tools: Frequently Asked Questions',
  faqSideText: 'Have a question about your own SEO process or tools? Book a free audit and we will answer it for your site.',
  faqs: [
    {
      question: 'What are AI SEO automation tools?',
      answer:
        'They are workflows that use AI and automation to handle repeatable SEO tasks, such as organizing keyword data, creating briefs, drafting content, running pre-publish checks and building reports. We build them around the tools you already use.',
    },
    {
      question: 'Can AI automate SEO completely?',
      answer:
        'No. AI can take on research admin, first drafts, checks and reporting, but strategy, expertise and final editorial decisions need people. Every workflow we build includes human approval before anything is published.',
    },
    {
      question: 'Will SEO automation improve our rankings?',
      answer:
        'We do not promise rankings or traffic. Automation removes repetitive work so your team can produce and maintain quality content more consistently. Results still depend on your strategy, content quality and competition.',
    },
    {
      question: 'Do you replace our current SEO tools?',
      answer:
        'No. We connect the tools you already use where they offer an integration or API. We confirm what each tool allows during the audit.',
    },
    {
      question: 'Is AI-written content bad for SEO?',
      answer:
        'Unedited, generic content is a risk. Our drafts are grounded in your brand voice and product information, then edited and approved by your team, who add the expertise and original insight readers need.',
    },
    {
      question: 'Can the workflows publish straight to our website?',
      answer:
        'Approved content can be sent to WordPress, Webflow or Shopify, usually as a draft for a final check. Nothing goes live without a person signing it off.',
    },
    {
      question: 'Can you automate technical SEO monitoring?',
      answer:
        'Where your tools expose the data, we can build scheduled checks that flag issues for your team. The scope depends on your stack and is confirmed in the audit. Fixes stay with your team.',
    },
    {
      question: 'How does automated SEO reporting work?',
      answer:
        'Metrics are pulled from your connected sources into a dashboard that refreshes on its own, and AI adds a short written summary of what changed. The exact sources are agreed during the audit.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We map your SEO process, agree the first workflows to automate and send a written quote covering scope, tools, deliverables, usage costs and timeline.',
    },
  ],
};
