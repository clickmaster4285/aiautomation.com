// content/services/ai-lead-generation.ts
import { ServiceContent } from '../type';

export const aiLeadGeneration: ServiceContent = {
slug: 'ai-lead-generation',
title: 'AI Lead Generation Automation Services | Clickmasters',
metaDescription:
  'Automate lead qualification, scoring, follow-ups, and CRM updates with AI lead generation automation services. Improve your sales process with Clickmasters.',
keywords: 'ai lead generation, lead generator, ai sales automation, crm automation',

sections: [
  // ========== HERO ==========
  {
    type: 'hero',
    heading: 'AI Lead Generation & Qualification Automation Services',
    subheading:
      'Our AI lead generation automation services help businesses capture incoming leads, qualify prospects, and manage sales follow-ups automatically. Clickmasters builds AI-powered lead management systems that connect with your CRM, improve response times, and help sales teams focus on potential customers.',
    content: [
      'Our AI lead generation automation services help businesses capture incoming leads, qualify prospects, and manage sales follow-ups automatically. Clickmasters builds AI-powered lead management systems that connect with your CRM, improve response times, and help sales teams focus on potential customers.',
    ],
    stats: [
      { label: 'CAPTURE', value: 'Capture incoming leads automatically' },
      { label: 'QUALIFY', value: 'Qualify prospects on every inquiry' },
      { label: 'FOLLOW-UP', value: 'Manage sales follow-ups automatically' },
      { label: 'CRM', value: 'Connect with your CRM and systems' },
      { label: 'RESPONSE', value: 'Improve response times and pipeline' },
    ],
    ctas: [
      { text: 'Get a Free AI Lead Automation Audit', link: '/free-automation-audit', primary: true },
    ],
    image: {
      src: '/images/ai-lead-generation.webp',
      alt: 'AI Lead Generation illustration',
      width: 2560,
      height: 1350,
    },
  },

    // ========== TEXT: The Uncomfortable Math of Lead Response ==========
{
  type: 'text',
  heading: 'AI Lead Generation Automation for Better Sales Performance',
  content: [
    'Clickmasters develops custom systems for AI lead qualification, automated lead scoring, CRM updates, and personalized follow-ups. These solutions collect customer information, identify sales-ready prospects, and route qualified leads to the right team members.',
    'Our AI sales automation services integrate with compatible CRM platforms, websites, forms, and communication tools. This helps businesses manage incoming leads, maintain consistent follow-up, and improve visibility across their sales pipeline.',
  ],
},

    // ========== GRID: What We Build for Lead Generation ==========
    {
      type: 'grid',
      heading: 'What We Build for Lead Generation',
      subheading: 'The full pipeline behind every channel — response, qualification, enrichment, scoring, routing, nurture, and CRM capture — working together.',
      items: [
        {
          title: 'Instant Lead Response',
          description: 'The moment an inquiry arrives — form, chat, email, missed call — the lead gets a relevant, personalized engagement within seconds. Not an autoresponder that says "we got your message," but a real response that addresses what they asked and moves the conversation forward. At any hour, every time.',
          icon: 'Zap',
        },
        {
          title: 'Conversational Qualification',
          description: 'An AI agent (chat or voice) that establishes need, fit, budget signals, and timeline the way a good SDR would — naturally, in conversation, without making the prospect fill out a second form. Qualified leads route forward; poor-fit inquiries get a polite, useful answer that doesn\'t waste anyone\'s time.',
          icon: 'MessageSquare',
        },
        {
          title: 'Enrichment and Scoring',
          description: 'Every lead is automatically researched — company, role, size, signals — and scored against your actual ideal-customer profile, so your team\'s attention goes where the revenue is.',
          icon: 'Database',
        },
        {
          title: 'Routing with Context',
          description: 'Sales-ready leads land with the right rep, with the conversation history and enrichment attached. The rep\'s first touch starts informed instead of cold.',
          icon: 'Target',
        },
        {
          title: 'Nurture for Everyone Else',
          description: 'Most leads aren\'t ready now — they\'re ready in three months. The system keeps them warm with genuinely useful follow-up sequences that run for as long as it takes, which is precisely the work manual follow-up always drops.',
          icon: 'Clock',
        },
        {
          title: 'CRM Capture Throughout',
          description: 'Every touch is logged automatically. Your pipeline data reflects reality because no one has to remember to type it.',
          icon: 'FileCheck',
        },
      ],
    },

    // ========== FEATURES: Where the Return Shows Up ==========
    {
      type: 'features',
      heading: 'Where the Return Shows Up',
      subheading: 'Lead generation automation is one of the easiest automations to measure — the baseline is visible.',
      items: [
        {
          title: 'Leads Engaged in Seconds',
          description: 'Instant response captures interest while it\'s hot, dramatically improving conversion rates compared to hours-long delays.',
          icon: 'Zap',
        },
        {
          title: 'After-Hours Inquiries Captured',
          description: '24/7 engagement means you never miss a lead just because it arrived outside business hours.',
          icon: 'Moon',
        },
        {
          title: 'Reps Work Only Real Opportunities',
          description: 'Qualification means your sales team spends time on leads that are actually ready to buy, not tire-kickers.',
          icon: 'Target',
        },
        {
          title: 'Long-Tail Nurture Converts',
          description: 'Systematic follow-up captures leads that would otherwise go silent — the ones manual process always drops.',
          icon: 'TrendingUp',
        },
      ],
    },

    // ========== TEXT: What This Replaces ==========
    {
      type: 'text',
      heading: 'What This Replaces',
      content: [
        'The honest accounting matters. This system replaces: the shared inbox where leads wait their turn; the "speed to lead" standup reminders that work for a week; the spreadsheet of leads-to-call-back that goes stale; the nurture campaign that was set up once and never maintained; and the quiet loss of every after-hours inquiry.',
        'It does not replace your salespeople — it delivers them better conversations, earlier, with context. Closing remains human. The system\'s job is to make sure humans get the chance to close.',
      ],
    },

    // ========== TEXT: How It Fits Your Stack ==========
    {
      type: 'text',
      heading: 'How It Fits Your Stack',
      content: [
        'We build on the tools you already run — your CRM (HubSpot, GoHighLevel, Salesforce, or others), your forms and site, your calendar, your communication channels — connected by automation platforms (n8n, Make, Zapier) and AI models chosen for the job. Nothing rip-and-replace.',
        'If you already have lead sources producing, this system multiplies their yield; if your CRM is a mess, we clean the flow as part of the build (see our CRM Automation service — the two pair naturally).',
      ],
    },

    // ========== STEPS: How We Deliver ==========
    {
      type: 'steps',
      heading: 'How We Deliver Lead Generation Automation',
      items: [
        {
          title: 'Audit Your Lead Flow',
          description: 'We map where leads are coming from and where they\'re being lost.',
        },
        {
          title: 'Design the System',
          description: 'We design the automation flow based on your specific lead journey.',
        },
        {
          title: 'Build & Test',
          description: 'We build and test the system against your real leads.',
        },
        {
          title: 'Optimize & Scale',
          description: 'We monitor performance and expand to more channels.',
        },
      ],
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters for Lead Generation',
      items: [
        {
          title: 'We Build Systems, Not Campaigns',
          description: 'This is engineering, not a marketing retainer — a documented, owned system that runs.',
          icon: 'Code',
        },
        {
          title: 'Model- and Platform-Agnostic',
          description: 'The right AI and the right automation platform for your volume and stack, chosen honestly.',
          icon: 'Scale',
        },
        {
          title: 'Human Handoff Done Right',
          description: 'The AI qualifies and routes; your people close. The boundary is designed, not accidental.',
          icon: 'Users',
        },
        {
          title: 'You Own Everything',
          description: 'Documented builds in your accounts, no lock-in, no black boxes.',
          icon: 'FileCheck',
        },
      ],
    },

    // ========== STATS: Results ==========
    {
      type: 'stats',
      heading: 'What Results Clients Get',
      subheading: 'Built on real client outcomes, not marketing estimates:',
      items: [
        { title: 'Leads Processed', value: '1M+' },
        { title: 'Conversion Rate', value: '3.2x' },
      ],
    },

    // ========== FAQ ==========
  {
  type: 'faq',
  heading: 'AI Lead Generation FAQs',
  items: [
    {
      title: 'What are AI lead generation automation services?',
      description:
        'AI lead generation automation services use AI to capture leads, qualify prospects, score leads, and automate sales follow-ups.',
    },
    {
      title: 'Can AI automatically qualify leads for my sales team?',
      description:
        'Yes. AI lead qualification systems collect prospect details, evaluate leads, and assign qualified prospects to your sales team.',
    },
    {
      title: 'Can you integrate AI lead generation with HubSpot or GoHighLevel?',
      description:
        'Yes. Clickmasters integrates AI lead automation with compatible CRM platforms, including HubSpot, GoHighLevel, and Salesforce.',
    },
    {
      title: 'How does automated lead follow-up work?',
      description:
        'AI-powered workflows automatically respond to inquiries, send reminders, and follow up with prospects based on predefined conditions.',
    },
    {
      title: 'Can AI lead generation automation improve conversion rates?',
      description:
        'Yes. AI automation can improve conversion opportunities through faster responses, better lead qualification, and consistent follow-ups.',
    },
  ],
},

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Find out where your leads are leaking.',
      subheading:
        'Book a free automation audit — we\'ll map your current lead flow, show you where inquiries are being lost, and scope the system that stops it.',
      cta: {
        text: 'Find Out Where Your Leads Are Leaking',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};