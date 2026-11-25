// content/products/ai-marketing-automation/ai-social-media-automation.ts
// Copy + SEO for /products/ai-marketing-automation/ai-social-media-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Verified on the site: social media automation = scheduling, repurposing and content workflows;
//   AI drafting of social copy grounded in brand voice with human approval; approval routing;
//   self-updating dashboards and AI campaign summaries; "ad and social platforms for content distribution".
// - Do NOT name any social network (no LinkedIn, Instagram, Facebook, X, TikTok, etc.) — none are named on the site.
// - Do NOT promise auto-replies, community management, sentiment analysis, follower growth, reach or
//   engagement numbers. Engagement workflows are only framed as possibilities scoped in the audit.
// - No statistics, prices, testimonials, guarantees, or ongoing-support promises.
// - Clickmasters builds this on the client's existing tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_SOCIAL_MEDIA_AUTOMATION_PATH = '/products/ai-marketing-automation/ai-social-media-automation';

export const aiSocialMediaAutomationSeo: HubSeo = {
  name: 'AI Social Media Automation',
  path: AI_SOCIAL_MEDIA_AUTOMATION_PATH,
  title: 'AI Social Media Automation for Content Teams | Clickmasters',
  description:
    'AI social media automation that plans, drafts, repurposes and schedules on-brand posts, with your team approving each one before it posts. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Marketing Automation', path: '/products/ai-marketing-automation' },
    { name: 'AI Social Media Automation', path: AI_SOCIAL_MEDIA_AUTOMATION_PATH },
  ],
};

export const aiSocialMediaAutomationKeywords = [
  'AI social media automation',
  'social media automation',
  'AI social media content creation',
  'social media scheduling automation',
  'social media content planning',
  'repurpose blog posts for social media',
  'social media approval workflow',
  'automated social media posting',
  'AI social media management',
  'social media workflow automation',
  'how to automate social media posts with AI',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI Marketing Automation system', href: '/products/ai-marketing-automation', section: 'What Is AI Social Media Automation?' },
  { anchor: 'campaign planning and tracking', href: '/products/ai-marketing-automation/ai-campaign-management-software', section: 'Planning a Content Calendar That Fills Itself (explainer)' },
  { anchor: 'marketing automation inside HubSpot', href: '/solutions/marketing-automation/with-hubspot', section: 'Connecting Social Workflows to Your Stack' },
  { anchor: 'automated reporting', href: '/solutions/reporting-automation', section: 'Seeing What Your Social Content Does (extras)' },
  { anchor: 'search-focused blog content', href: '/products/ai-marketing-automation/ai-seo-automation-tools', section: 'Turning One Piece of Content Into Many (spotlight)' },
] as const;

export const aiSocialMediaAutomation: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Social Media Automation',
    heading: 'AI Social Media Automation That Keeps Your Channels On Brand',
    accentWords: 5,
    subheading:
      'We build social media workflows that plan your content calendar, draft posts in your brand voice, turn existing content into new posts and schedule them once your team approves. Your channels stay active without someone writing and posting by hand every day.',
    primaryCta: { text: 'Book a Free Social Media Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-marketing-automation-ai-humanoid-profile.webp',
    imageAlt: 'AI humanoid profile representing AI social media automation for planning, drafting and scheduling posts',
    imageWidth: 666,
    imageHeight: 375,
    marquee: ['Content calendar planning', 'On-brand post drafts', 'Blog-to-social repurposing', 'Approval before publishing', 'Scheduled posting'],
  },

  intro: {
    eyebrow: 'Social Workflows',
    heading: 'What Is AI Social Media Automation?',
    paragraphs: [
      'AI social media automation is a set of workflows that takes the routine work out of running social channels. AI drafts posts and suggests variations. The workflows handle the calendar, the approvals and the scheduling. Your team decides what gets published.',
      'Most social media work is not strategy. It is rewriting the same announcement five ways, chasing sign-off and remembering to post on time. We automate that layer and keep the creative calls with your people. It sits within the wider [AI Marketing Automation system](/products/ai-marketing-automation) we build for email, website and campaign work.',
      'The aim is a steady, consistent presence. Your feeds keep moving even in weeks when the team is busy with launches, events or client work.',
    ],
    problems: [
      'Posting stops whenever the person who owns social gets busy.',
      'Every new blog post or launch has to be rewritten by hand for each channel.',
      'Drafts wait in chat threads and inboxes for approval, so posts go out late.',
      'Nobody has time to pull together what last month’s posts actually achieved.',
    ],
  },

  explainer: {
    eyebrow: 'Content Planning',
    heading: 'Planning a Content Calendar That Fills Itself',
    paragraphs: [
      'A content calendar only works if it gets filled. In most teams it starts strong and then thins out. With automation, the calendar is fed by what your business already produces: new blog posts, product updates, events and campaign themes. Each becomes a set of draft posts ready for review.',
      'Social content rarely stands alone. It supports launches, offers and seasonal pushes. When those are planned as campaigns, the social posts can follow the same schedule as your emails and landing pages. That is where social workflows meet [campaign planning and tracking](/products/ai-marketing-automation/ai-campaign-management-software).',
    ],
    points: [
      { title: 'Themes and Cadence', description: 'You set the topics, posting rhythm and channel mix. The workflow keeps the calendar stocked against that plan.' },
      { title: 'Triggered by New Content', description: 'A published blog post or product update can start a fresh batch of social drafts automatically.' },
      { title: 'Linked to Campaigns', description: 'Posts for a launch or offer are planned alongside the emails and pages for the same campaign.' },
      { title: 'One Shared View', description: 'Everyone can see what is drafted, waiting for approval and scheduled.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'Social Media Automation Capabilities We Build',
    intro:
      'Each capability is set up around your brand voice, approval process and existing tools. Nothing is published without the sign-off rules you choose.',
    items: [
      { title: 'AI Post Drafting', description: 'First drafts of social posts written from your messaging, product details and past content.' },
      { title: 'Channel-Specific Variations', description: 'One idea rewritten in different lengths and tones to suit each of your channels.' },
      { title: 'Content Repurposing', description: 'Blog posts, announcements and longer content turned into a series of shorter posts.' },
      { title: 'Approval Routing', description: 'Drafts are sent to the right reviewer and move forward only once approved.' },
      { title: 'Scheduling Workflows', description: 'Approved posts are queued and scheduled to go out at the planned time.' },
      { title: 'Brand Voice Guidelines', description: 'Your tone, phrases to use and phrases to avoid are built into every draft.' },
      { title: 'Content Library', description: 'Approved posts and source material are stored so good content can be reused later.' },
      { title: 'Performance Dashboards', description: 'Social results appear in dashboards that update themselves, alongside your other marketing data.' },
      { title: 'AI Summaries', description: 'Short written summaries point out which posts and themes did better or worse than usual.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How AI Social Media Automation Works, Step by Step',
    intro:
      'Each post follows the same path from idea to schedule. AI speeds up the writing. Your team keeps control of what goes live.',
    steps: [
      { title: 'Plan', description: 'Themes, cadence and campaigns are set in the calendar, together with the source content each post should draw on.' },
      { title: 'Draft', description: 'AI writes post drafts and variations from your brand guidelines and source material.' },
      { title: 'Review', description: 'Drafts go to the right person for edits and approval, with reminders if they sit too long.' },
      { title: 'Schedule', description: 'Approved posts are queued for their planned date and time through your publishing tools.' },
      { title: 'Report', description: 'Results flow into dashboards, and AI summaries highlight what stood out.' },
      { title: 'Refine', description: 'Your team adjusts themes, tone and timing based on what the reports show.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Automate Social Media Content Creation?',
    intro:
      'The gain is mostly time and consistency. Your marketers stop doing the repetitive parts of social and spend more time on ideas and conversations.',
    items: [
      { title: 'A Consistent Posting Rhythm', description: 'Your channels stay active through busy weeks, holidays and staff changes.' },
      { title: 'Less Rewriting', description: 'One piece of content becomes many posts without starting from a blank page each time.' },
      { title: 'Faster Sign-Off', description: 'Clear approval steps replace long chat threads and lost email attachments.' },
      { title: 'A Recognizable Voice', description: 'Shared guidelines keep posts sounding like your brand, whoever reviews them.' },
      { title: 'More Value From Existing Content', description: 'Blog posts and announcements keep working long after the day they were published.' },
      { title: 'Reporting Without the Export', description: 'Performance is visible without someone building a monthly spreadsheet.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and Your Team',
    heading: 'What AI Drafts and What Your Social Team Decides',
    paragraphs: [
      'Social media is public and fast, so a person should always have the final word. AI is useful for the volume work: first drafts, variations and summaries. Judgment stays with your team, especially on timing, sensitive topics and replies to real people.',
      'We do not set up bots that post unchecked or talk to your followers on your behalf. If you want help with comments or messages, we can look at the options during the audit. Any such workflow would route items to a person rather than reply on its own.',
    ],
    aiDoes: [
      'Drafts posts from your brief and source content',
      'Writes variations for different channels and lengths',
      'Turns long content into a series of short posts',
      'Suggests posting slots based on your calendar',
      'Summarizes how recent posts performed',
      'Flags drafts that are waiting too long for review',
    ],
    peopleDo: [
      'Set the social strategy, themes and goals',
      'Edit and approve every post before it is scheduled',
      'Reply to comments and messages from real people',
      'Decide how to handle sensitive or trending topics',
    ],
  },

  spotlight: {
    eyebrow: 'Content Repurposing',
    heading: 'Turning One Piece of Content Into Many',
    paragraphs: [
      'Your best social material often already exists. It sits in blog posts, guides, product pages and announcements. Repurposing workflows pull the key points from that content and turn them into a run of posts: a teaser, a few key takeaways, a quote and a reminder a week later.',
      'This works well alongside [search-focused blog content](/products/ai-marketing-automation/ai-seo-automation-tools). Each article you publish for search can feed several social posts, so one piece of writing serves two channels. Every repurposed draft still goes through your approval step.',
    ],
    points: [
      { title: 'Blog to Social', description: 'New articles become a short series of posts that link back to the full piece.' },
      { title: 'Announcements to Posts', description: 'Product updates and news are reworded for each channel you use.' },
      { title: 'Evergreen Reuse', description: 'Approved posts from the library can be refreshed and scheduled again.' },
      { title: 'Source Links Kept', description: 'Each post keeps a link to the original content it came from.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Social Reporting',
      heading: 'Seeing What Your Social Content Does',
      accentWords: 3,
      paragraphs: [
        'Social numbers are easy to collect and hard to read. Dashboards that update on their own show how posts, themes and campaigns perform over time, without anyone exporting data each week. You can read more about our approach to [automated reporting](/solutions/reporting-automation).',
        'AI summaries add a plain-language layer on top. They point out what changed and which themes are worth more attention. The decisions about what to post next stay with your team.',
      ],
      points: [
        { title: 'Self-Updating Dashboards', description: 'Post and campaign results refresh automatically from your connected tools.' },
        { title: 'Theme-Level View', description: 'Results grouped by topic show which kinds of content your audience responds to.' },
        { title: 'Written Summaries', description: 'Short AI-written notes explain what moved since the last report.' },
        { title: 'Shared With Marketing Data', description: 'Social results sit next to email and campaign reporting rather than in a separate tool.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Who Uses Social Media Workflow Automation',
    items: [
      { title: 'Lean Marketing Teams', description: 'One or two marketers who need channels to stay active while they handle everything else.' },
      { title: 'E-commerce Brands', description: 'Product launches, restocks and seasonal offers turned into scheduled posts.' },
      { title: 'SaaS Companies', description: 'Feature releases, blog posts and guides repurposed into steady social content.' },
      { title: 'Marketing Agencies', description: 'Repeatable drafting and approval workflows that can be set up for each client account.' },
      { title: 'Professional Services', description: 'Articles and insights shared regularly without pulling experts away from client work.' },
      { title: 'Education Providers', description: 'Event, open day and enrollment content planned and scheduled ahead of time.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Connecting Social Workflows to Your Stack',
    paragraphs: [
      'Social workflows connect to the tools you already use. Source content can come from WordPress, Webflow or Shopify. Planning and reporting can link to CRM and marketing platforms such as HubSpot, Salesforce, Zoho CRM and GoHighLevel. If HubSpot is your main platform, see how we approach [marketing automation inside HubSpot](/solutions/marketing-automation/with-hubspot).',
      'The workflows themselves run on automation platforms like n8n, Make and Zapier, or through direct APIs. Which social and scheduling tools can be connected depends on their integrations. We confirm that during the audit rather than promising it up front.',
    ],
    groups: [
      { label: 'Content Sources', items: ['WordPress', 'Webflow', 'Shopify'] },
      { label: 'CRM & Marketing Platforms', items: ['HubSpot', 'Salesforce', 'Zoho CRM', 'GoHighLevel'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Teams Choose Clickmasters for Social Media Automation',
    intro:
      'Clickmasters is an AI automation agency that builds workflows for marketing, sales and support teams. For social media, that means a process designed around your voice and approvals, not a generic posting tool.',
    items: [
      { title: 'Your Voice, Written Down', description: 'Brand guidelines are captured and built into every draft the AI writes.' },
      { title: 'Approval Is Built In', description: 'Nothing is published without the sign-off steps you choose.' },
      { title: 'Works With Your Tools', description: 'We connect what you already use instead of adding another platform to learn.' },
      { title: 'Honest Scope', description: 'We tell you which parts of social media are worth automating and which are not.' },
      { title: 'Tested Before Launch', description: 'Drafting, approval and scheduling run end to end on sample content first.' },
      { title: 'Handed Over to You', description: 'Workflows, accounts and documentation are yours when the project ends.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'From Audit to Automated Social Workflows',
    intro:
      'Each project follows clear stages. You see and approve the plan before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We look at how social content is planned, written, approved and posted today.' },
      { title: 'Workflow Design', description: 'Calendar rules, source content, approval steps and brand guidelines are agreed with you.' },
      { title: 'Build', description: 'Drafting, repurposing, approval and scheduling workflows are set up in your tools.' },
      { title: 'Test', description: 'Sample posts run through the full workflow so tone and timing can be checked.' },
      { title: 'Staged Launch', description: 'The workflows go live with close review of the first batches of posts.' },
      { title: 'Review', description: 'We go through early results with you, and your written quote sets out any support terms.' },
    ],
    note: 'After the audit you receive a written quote covering scope, tools, deliverables, usage costs and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find out which social tasks you can automate',
    heading: 'Keep Your Social Channels Active Without Posting by Hand',
    description:
      'Book a free, no-obligation audit. We will review how your team plans and posts today, show which steps AI and automation can take over, and be clear about the ones that should stay with people.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Social Media Automation: Common Questions',
  faqSideText: 'Want to know which parts of your social workflow could run on their own? Book a free audit and we will map it with you.',
  faqs: [
    {
      question: 'What is AI social media automation?',
      answer:
        'It is a set of workflows that plans, drafts, repurposes and schedules social posts. AI writes the first drafts, and your team reviews and approves each post before it is scheduled.',
    },
    {
      question: 'Will AI post to our channels without anyone checking?',
      answer:
        'No. Every post passes through the approval steps you choose before it is scheduled. We do not set up workflows that publish unchecked content.',
    },
    {
      question: 'How does AI keep posts in our brand voice?',
      answer:
        'We capture your tone, key messages and phrases to avoid in written guidelines. The AI drafts from those guidelines and your own content, and your reviewers correct anything that is off.',
    },
    {
      question: 'Can you turn our blog posts into social media posts?',
      answer:
        'Yes. Repurposing workflows pull key points from articles and other long content and turn them into a short series of draft posts that link back to the original.',
    },
    {
      question: 'Which social media platforms do you support?',
      answer:
        'It depends on the scheduling and publishing tools you use and what they allow through their integrations. We check which of your channels can be connected during the free audit.',
    },
    {
      question: 'Can the automation reply to comments and messages?',
      answer:
        'We do not offer automatic replies to your followers. If you want help managing comments or messages, we can explore workflows in the audit that route them to the right person.',
    },
    {
      question: 'How do we see how our social content is performing?',
      answer:
        'Results feed into dashboards that update on their own, next to your other marketing data. Short AI-written summaries point out what changed since the last report.',
    },
    {
      question: 'Is social media automation worth it for a small team?',
      answer:
        'Often, yes. Small teams feel gaps in posting the most. A first workflow can be as simple as turning each new blog post into a set of approved, scheduled posts.',
    },
    {
      question: 'Do we need to switch to a new social media tool?',
      answer:
        'Usually not. We build on the content, CRM and automation tools you already use, using platforms such as n8n, Make or Zapier to connect them.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your current social process, agree which steps to automate first and send a written quote with scope, tools, deliverables, usage costs and timeline.',
    },
  ],
};
