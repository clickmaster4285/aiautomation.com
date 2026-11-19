// content/products/ai-marketing-automation.ts
// Copy + SEO for /products/ai-marketing-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities already stated elsewhere on the site (AI marketing automation service,
//   marketing automation hub, HubSpot / Salesforce marketing pages, industry marketing pages, GoHighLevel).
// - Channels named on the site: email, social (scheduling + content), website forms/personalization,
//   ad copy drafting. Do NOT add SMS, WhatsApp, named ad networks (Google/Meta/LinkedIn),
//   A/B testing, attribution or predictive analytics — not stated.
// - No statistics, prices, testimonials, guarantees, or ongoing-optimization promises.
// - It is a system Clickmasters builds on the client's marketing stack — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page must contain EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from './types';

export const AI_MARKETING_AUTOMATION_PATH = '/products/ai-marketing-automation';

export const aiMarketingAutomationSeo: HubSeo = {
  name: 'AI Marketing Automation',
  path: AI_MARKETING_AUTOMATION_PATH,
  title: 'AI Marketing Automation for Lead Nurture | Clickmasters',
  description:
    'AI marketing automation built on your stack: segmentation, behavior-based nurture, AI-drafted content you approve and live campaign reports. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Marketing Automation', path: AI_MARKETING_AUTOMATION_PATH },
  ],
};

export const aiMarketingAutomationKeywords = [
  'AI marketing automation',
  'AI-powered marketing automation',
  'marketing automation platform',
  'automated marketing software',
  'marketing workflow automation',
  'AI campaign automation',
  'AI lead nurturing',
  'customer journey automation',
  'personalized marketing automation',
  'marketing automation solutions',
];

// The five contextual internal links used in the copy below (verified to resolve).
export const internalLinks = [
  { anchor: 'marketing automation solutions', href: '/solutions/marketing-automation', section: 'What Is AI Marketing Automation?' },
  { anchor: 'AI lead generation', href: '/services/ai-lead-generation', section: 'AI-Powered Lead Nurturing (spotlight)' },
  { anchor: 'AI Sales CRM', href: '/products/ai-sales-crm', section: 'AI-Powered Lead Nurturing (spotlight)' },
  { anchor: 'AI Customer Support', href: '/products/ai-customer-support', section: 'Campaign Management & Personalization' },
  { anchor: 'marketing automation built on HubSpot', href: '/solutions/marketing-automation/with-hubspot', section: 'Marketing Platform Integrations' },
] as const;

export const aiMarketingAutomation: ProductPageContent = {
  hero: {
    badge: 'AI Marketing Automation',
    heading: 'AI Marketing Automation That Nurtures Every Lead at the Right Moment',
    accentWords: 6,
    subheading:
      'Clickmasters AI Marketing Automation segments your audience, runs behavior-based nurture journeys, drafts on-brand campaign content for your team to approve and reports on what is working, all inside the marketing and CRM tools you already use.',
    primaryCta: { text: 'Book a Free Marketing Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-marketing-automation-ai-humanoid-profile.webp',
    imageAlt: 'AI humanoid profile representing AI marketing automation for campaigns and lead nurturing',
    imageWidth: 666,
    imageHeight: 375,
    marquee: ['Audience segmentation', 'Behavior-based nurture', 'AI-drafted content', 'Campaign workflows', 'Self-updating reports'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is AI Marketing Automation?',
    paragraphs: [
      'AI marketing automation combines rule-based marketing workflows with AI that can read, classify and write. The workflows handle the timing: who receives what, when, and what happens next. The AI handles the judgment-light work in between: sorting leads into segments, drafting copy in your brand voice and summarizing how campaigns performed.',
      'Traditional marketing automation sends the same sequence to everyone who fills in a form. AI-powered marketing automation adapts the journey to behavior, so engaged contacts move forward, quiet ones are re-engaged and sales-ready leads are handed over with context. It builds on our [marketing automation solutions](/solutions/marketing-automation) and adds AI only where it improves a real marketing task.',
      'For growing teams, the result is scale without the spreadsheet: more campaigns, more personalized follow-up and cleaner data, run by the same marketing team rather than a larger one.',
    ],
    problems: [
      'Every lead gets the same follow-up, whatever they actually did.',
      'Content production is the bottleneck for every campaign.',
      'Leads go cold between the form fill and the first sales conversation.',
      'Campaign reporting takes a day of exports and copy-pasting.',
    ],
  },

  explainer: {
    eyebrow: 'Marketing Workflow Automation',
    heading: 'Marketing Workflow Automation That Runs Without Supervision',
    paragraphs: [
      'Most marketing work is a chain of small, repeatable steps: capture the lead, tag it, add it to a list, send the welcome email, wait, check what it did, decide the next message. Marketing workflow automation turns those chains into triggers and rules that run every time, without someone remembering to run them.',
      'Workflows are triggered by customer actions, lifecycle stages, dates or business rules, and they connect the tools your team already uses, from forms and email to your CRM and website. Errors are handled at each step, so one failed action does not silently break the campaign.',
    ],
    points: [
      { title: 'Event-Triggered Campaigns', description: 'Form fills, purchases, sign-ups and lifecycle changes start the right workflow automatically.' },
      { title: 'Connected Marketing Tools', description: 'Forms, email platforms, CRM and website share the same lead data instead of separate lists.' },
      { title: 'Social Content Workflows', description: 'Social posts are scheduled, repurposed and routed for approval through one repeatable process.' },
      { title: 'Reliable by Design', description: 'Error handling, monitoring and documentation are built into each workflow from the start.' },
    ],
  },

  features: {
    eyebrow: 'Core Capabilities',
    heading: 'Core Capabilities of Clickmasters AI Marketing Automation',
    intro:
      'Each capability is configured around your audience, brand voice and existing marketing stack. Your team stays in control of strategy and approves every piece of content before it goes out.',
    items: [
      { title: 'Lead Capture & Scoring', description: 'Leads from forms and campaigns are captured, tagged by source and scored with rules you agree on.' },
      { title: 'AI-Assisted Segmentation', description: 'Contacts are classified and segmented by profile and behavior, so each group receives relevant messaging.' },
      { title: 'Behavior-Based Nurture', description: 'Personalized sequences move leads through the funnel based on what they open, click and do.' },
      { title: 'Automated Email Marketing', description: 'Email drafting, personalization and send-time optimization, triggered by actions, stages, dates or rules.' },
      { title: 'AI Content Drafting', description: 'On-brand blog, email, social and ad copy drafted from your messaging and product information, then reviewed by your team.' },
      { title: 'Multi-Channel Campaigns', description: 'Campaigns that trigger, segment and adapt across email, social and website touchpoints.' },
      { title: 'Re-Engagement & Lifecycle', description: 'Dormant contacts are re-engaged, and lifecycle stages update in your CRM as people progress.' },
      { title: 'Campaign Reporting', description: 'Performance dashboards update automatically, with campaign summaries that highlight what changed.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How AI Marketing Automation Works, From First Touch to Sales-Ready',
    intro:
      'Every stage is a workflow inside your marketing and CRM tools. Rules define the journey, AI assists along the way, and your team approves anything customer-facing.',
    steps: [
      { title: 'Collect', description: 'Lead and customer data arrives from forms, campaigns, website activity and your CRM, and is cleaned and tagged on arrival.' },
      { title: 'Segment', description: 'Contacts are grouped by profile, source, behavior and lifecycle stage, with AI assisting the classification.' },
      { title: 'Configure', description: 'Journeys are mapped as triggers, branches and timings, and content is drafted for each step and approved by your team.' },
      { title: 'Execute', description: 'Personalized campaigns run automatically across email and your other connected channels.' },
      { title: 'Follow Up', description: 'Behavior decides the next step: advance the engaged, re-engage the quiet and hand sales-ready leads to sales.' },
      { title: 'Measure & Refine', description: 'Dashboards and campaign summaries show performance, and journeys are adjusted based on what the data shows.' },
    ],
  },

  benefits: {
    eyebrow: 'Business Benefits',
    heading: 'Business Benefits of AI-Powered Marketing Automation',
    intro:
      'The payoff is operational: a marketing team that spends its time on strategy and creative work, not on lists, exports and manual sends.',
    items: [
      { title: 'Less Repetitive Work', description: 'List management, tagging, scheduled sends and report building run automatically.' },
      { title: 'Better Lead Nurturing', description: 'Every lead receives timely, relevant follow-up instead of waiting for the next manual campaign.' },
      { title: 'Consistent Communication', description: 'Messaging stays on brand and on schedule across every journey and channel.' },
      { title: 'Faster Content Production', description: 'AI drafts give your team a strong first version, so approval replaces writing from scratch.' },
      { title: 'Clearer Campaign Visibility', description: 'Live dashboards show which campaigns and segments are performing without a reporting day.' },
      { title: 'Scalable Marketing Operations', description: 'More segments, journeys and campaigns can run without a proportional increase in manual effort.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Campaign Management & Personalization',
    heading: 'Campaign Management and Personalization With People in Control',
    paragraphs: [
      'Personalized marketing automation uses what you know about each contact, such as their source, interests, behavior and lifecycle stage, to decide which message they receive and when. AI drafts the variations, workflows deliver them, and your team keeps the final say on everything customer-facing.',
      'Personalization does not stop at the sale. Post-purchase journeys such as review requests and onboarding sequences keep customers engaged, and when a customer needs help rather than another campaign, [AI Customer Support](/products/ai-customer-support) applies the same approach to service conversations.',
    ],
    aiDoes: [
      'Classifies and segments contacts by profile and behavior',
      'Drafts on-brand email, social, blog and ad copy',
      'Personalizes messages and send timing per segment',
      'Schedules and repurposes social content',
      'Summarizes campaign performance',
      'Flags sales-ready leads for hand-off',
    ],
    peopleDo: [
      'Set campaign strategy, positioning and offers',
      'Review and approve all content before it goes out',
      'Decide segments, journeys and budget priorities',
      'Make the creative and brand judgment calls',
    ],
  },

  spotlight: {
    eyebrow: 'AI-Powered Lead Nurturing',
    heading: 'AI-Powered Lead Nurturing That Moves Prospects Forward',
    paragraphs: [
      'Lead nurturing is where most marketing value is lost: a prospect shows interest, then hears nothing relevant for weeks. AI lead nurturing keeps each prospect in a journey that responds to what they do, from the first download to the moment they are ready to talk to sales.',
      'Nurture picks up where [AI lead generation](/services/ai-lead-generation) leaves off. When a lead shows buying intent, it is flagged and handed to sales with its history and context, ready for the [AI Sales CRM](/products/ai-sales-crm) to route, follow up and track through the pipeline.',
    ],
    points: [
      { title: 'Lead Engagement', description: 'Sequences branch on opens, clicks, visits and replies, so the next message fits what the lead just did.' },
      { title: 'Audience Targeting', description: 'Segments and scores decide which journey each lead enters and when they move on.' },
      { title: 'Lifecycle Management', description: 'Lifecycle stages update automatically in the CRM as leads progress, stall or re-engage.' },
      { title: 'Sales Hand-Off', description: 'Sales-ready leads reach a rep with context instead of as a bare name in a spreadsheet.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Marketing Analytics',
      heading: 'Marketing Analytics and AI-Assisted Insights',
      accentWords: 3,
      paragraphs: [
        'Good marketing decisions need current numbers. Instead of exporting data from several tools every week, performance dashboards build themselves from the data your workflows already produce, so the team sees what each campaign, segment and journey is doing.',
        'AI adds a readable layer on top: campaign summaries that explain what changed and where to look next. The decisions remain yours. The aim is to spend less time assembling reports and more time acting on them.',
      ],
      points: [
        { title: 'Self-Updating Dashboards', description: 'Campaign, segment and journey performance is reported automatically from live data.' },
        { title: 'Campaign Summaries', description: 'AI-written summaries highlight the changes worth a closer look.' },
        { title: 'Marketing + Sales Data', description: 'Marketing activity is connected with CRM and sales data for a fuller picture of the funnel.' },
        { title: 'Continuous Refinement', description: 'Journeys and content are adjusted based on what the reporting shows.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Industry Use Cases',
    heading: 'Industry Use Cases for AI Marketing Automation',
    items: [
      { title: 'E-commerce', description: 'Abandoned cart recovery, lifecycle email marketing, review requests and customer win-back campaigns tied to store events.' },
      { title: 'SaaS Companies', description: 'Trial nurture and conversion flows, user onboarding and activation sequences, and signals for at-risk accounts.' },
      { title: 'Healthcare', description: 'Appointment reminders and confirmations plus recall and reactivation outreach, with clinical decisions always staying with clinicians.' },
      { title: 'Real Estate', description: 'Listing inquiry handling, long-term nurture and reactivation sequences, review requests after closing and referral follow-up.' },
      { title: 'Education', description: 'Application follow-up, event communication and re-enrollment campaigns for prospective and returning students.' },
      { title: 'Marketing Agencies', description: 'Automated lead intake, nurture and pipeline stages that can be repeated across client accounts.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Marketing Platform Integrations',
    paragraphs: [
      'AI Marketing Automation is built on the platforms you already run. We work with CRM and marketing platforms such as HubSpot, Salesforce, Zoho CRM and GoHighLevel, and email tools including ActiveCampaign, Klaviyo, Mailchimp and Marketo. If HubSpot is your system of record, see how we approach [marketing automation built on HubSpot](/solutions/marketing-automation/with-hubspot).',
      'Workflows can also connect websites such as WordPress, Webflow and Shopify through automation platforms like n8n, Make and Zapier. Where a tool has no native integration, a custom connection may be possible through its API; what can be connected is confirmed during the audit rather than promised up front.',
    ],
    groups: [
      { label: 'CRM & Marketing Platforms', items: ['HubSpot', 'Salesforce', 'Zoho CRM', 'GoHighLevel'] },
      { label: 'Email Marketing', items: ['ActiveCampaign', 'Klaviyo', 'Mailchimp', 'Marketo'] },
      { label: 'Websites & Stores', items: ['WordPress', 'Webflow', 'Shopify'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Choose Clickmasters AI Marketing Automation?',
    intro:
      'Clickmasters is an AI automation agency for sales, support and operations teams. For marketing, that means automation built around your funnel and brand, with AI used only where it improves real marketing work.',
    items: [
      { title: 'Custom Marketing Workflows', description: 'Journeys, segments and triggers are designed around your funnel, not copied from a template library.' },
      { title: 'Your Brand Voice, Not a Generic One', description: 'AI drafting is grounded in your messaging and product information, and every piece is approved by your team.' },
      { title: 'Built on Your Existing Stack', description: 'We extend the CRM, email and website tools you already pay for instead of adding another platform.' },
      { title: 'Honest About AI', description: 'AI does not replace marketing judgment, and we will tell you where it adds value and where it does not.' },
      { title: 'Staged, Supervised Rollout', description: 'Automations prove themselves on real campaigns with human oversight before they run unattended.' },
      { title: 'You Keep What We Build', description: 'Workflows, accounts and documentation are handed over to you at the end of the project.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Implementation',
    heading: 'How We Implement AI Marketing Automation',
    intro:
      'Every project starts with understanding your funnel before connecting any tools. You see and approve the plan before anything is built.',
    steps: [
      { title: 'Discovery & Audit', description: 'A free, no-obligation review of your marketing workflows, tools and data, and where automation would help first.' },
      { title: 'Strategy & Journey Mapping', description: 'Segments, triggers, journeys, lifecycle stages and approval points are mapped and agreed.' },
      { title: 'Workflow Development', description: 'Campaign workflows, AI drafting steps and reporting are built inside your platforms.' },
      { title: 'Integration & Testing', description: 'Tools are connected and every journey is tested end to end before real contacts enter it.' },
      { title: 'Deployment', description: 'Automations go live in stages, running on real campaigns under human oversight first.' },
      { title: 'Monitoring & Refinement', description: 'Performance is reviewed after launch, and any support terms are set out in your written quote.' },
    ],
    note: 'Your written quote lists the scope, platforms, deliverables, usage costs and a timeline for each stage of the project.',
  },

  cta: {
    bandHeading: 'Find out which campaigns you can automate',
    heading: 'Put Your Marketing on Autopilot, With Your Team in Charge',
    description:
      'Book a free, no-obligation marketing automation audit. We will look at your funnel, tools and campaigns, show you where AI and automation would make the biggest difference, and be straight about where they would not.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  related: {
    eyebrow: 'The AI Marketing Automation Suite',
    heading: 'Five Ways to Put AI to Work in Your Marketing Team',
    intro:
      'Start with the marketing work that takes your team the most time. Each solution works on its own or alongside the others.',
    items: [
      {
        title: 'AI Marketing Automation Software',
        description: 'The complete marketing system on your existing stack: workflows, segments, content drafting and reporting in one place.',
        href: '/products/ai-marketing-automation/ai-marketing-automation-software',
      },
      {
        title: 'AI Email Automation',
        description: 'Triggered email workflows, AI-drafted personalized messages and follow-ups timed to what each contact does.',
        href: '/products/ai-marketing-automation/ai-email-automation',
      },
      {
        title: 'AI Social Media Automation',
        description: 'Social content planned, drafted, repurposed and scheduled through one approval workflow your team controls.',
        href: '/products/ai-marketing-automation/ai-social-media-automation',
      },
      {
        title: 'AI SEO Automation Tools',
        description: 'Custom SEO workflows for content drafting, publishing to your website and reporting, scoped around the tools you use.',
        href: '/products/ai-marketing-automation/ai-seo-automation-tools',
      },
      {
        title: 'AI Campaign Management Software',
        description: 'Plan, run and monitor multi-channel campaigns with self-updating dashboards and AI-written campaign summaries.',
        href: '/products/ai-marketing-automation/ai-campaign-management-software',
      },
    ],
  },

  faqHeading: 'AI Marketing Automation: Frequently Asked Questions',
  faqSideText: 'Have a question about your own funnel or marketing stack? Book a free audit and we will answer it for your business.',
  faqs: [
    {
      question: 'What is AI marketing automation?',
      answer:
        'AI marketing automation combines marketing workflows, such as nurture sequences and campaign triggers, with AI that segments contacts, drafts content and summarizes performance. Clickmasters builds it inside the marketing and CRM tools you already use.',
    },
    {
      question: 'How does AI marketing automation work?',
      answer:
        'Lead and customer data is collected and segmented, journeys are configured as triggers and rules, content is drafted and approved, and campaigns then run automatically. Behavior decides each next step, and dashboards report on performance so journeys can be refined.',
    },
    {
      question: 'What is the difference between AI marketing automation and traditional marketing automation?',
      answer:
        'Traditional marketing automation follows fixed sequences that someone has to write and maintain. AI-powered marketing automation adds classification, content drafting and performance summaries on top, so journeys adapt to behavior and the team spends less time producing and reporting.',
    },
    {
      question: 'What marketing tasks can be automated?',
      answer:
        'Lead capture and tagging, segmentation, nurture and re-engagement sequences, email sends, social scheduling, lifecycle stage updates, sales hand-offs, review requests and campaign reporting are all common candidates.',
    },
    {
      question: 'Can AI automate email marketing campaigns?',
      answer:
        'Yes. Emails can be triggered by actions, lifecycle stages, dates or rules, with AI-assisted drafting, personalization and send-time optimization. Your team reviews and approves the content before it is sent.',
    },
    {
      question: 'How does AI improve lead nurturing?',
      answer:
        'AI helps classify leads into relevant segments and personalize the messages each one receives, while workflows react to behavior. Engaged leads move forward, quiet leads are re-engaged, and sales-ready leads are handed to sales with context.',
    },
    {
      question: 'Will AI write all of our marketing content?',
      answer:
        'No. AI produces on-brand first drafts for emails, social posts, blogs and ads based on your messaging and product information. Strategy, creative judgment and final approval stay with your team.',
    },
    {
      question: 'Can AI marketing automation integrate with our CRM?',
      answer:
        'In most cases, yes. We work with CRMs including HubSpot, Salesforce, Zoho CRM and GoHighLevel, keeping lifecycle stages and marketing activity in sync. What can be connected depends on each platform’s integrations and APIs.',
    },
    {
      question: 'Which businesses benefit most from AI marketing automation?',
      answer:
        'Businesses with a steady flow of leads or customers and more follow-up than their team can handle by hand, including e-commerce stores, SaaS companies, healthcare practices, real estate teams, education providers and agencies.',
    },
    {
      question: 'Is AI marketing automation suitable for small businesses?',
      answer:
        'Yes. A small team can start with one journey, such as a welcome or re-engagement sequence, on the tools it already has, then add more once the first one proves itself.',
    },
    {
      question: 'How can we measure marketing automation performance?',
      answer:
        'Dashboards report on campaign, segment and journey performance from live data, and AI-written summaries highlight what changed. Connecting marketing activity to CRM data also shows how campaigns contribute to sales conversations.',
    },
    {
      question: 'How do we get started with marketing automation?',
      answer:
        'Book a free audit. We review your funnel, tools and campaigns, agree the first journeys to automate and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
