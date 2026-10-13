// content/services/ai-strategy-advisory.ts
import { ServiceContent } from '../type';

export const aiStrategyAdvisory: ServiceContent = {
  slug: 'ai-strategy-advisory',
title: 'AI Strategy Consulting & Advisory | Clickmasters',
metaDescription:
  'Get AI strategy consulting services for business automation, AI implementation, technology selection, and development roadmaps. Book an AI consultation.',
keywords: 'ai strategy advisory, ai consulting services, ai consulting companies/firms, ai consultant',

sections: [
  // ========== HERO ==========
  {
    type: 'hero',
    heading: 'AI Strategy Consulting & Advisory Services for Businesses',
    subheading:
      'Our AI strategy consulting services help businesses identify opportunities, select suitable technologies, and plan successful AI implementation. Clickmasters provides practical AI advisory services, automation assessments, and development roadmaps to help companies adopt AI solutions that support their business goals.',
    content: [
      'Our AI strategy consulting services help businesses identify opportunities, select suitable technologies, and plan successful AI implementation. Clickmasters provides practical AI advisory services, automation assessments, and development roadmaps to help companies adopt AI solutions that support their business goals.',
    ],
    stats: [
      { label: 'OPPORTUNITY', value: 'Identify where AI pays off in your business' },
      { label: 'TOOLS', value: 'Select suitable technologies and platforms' },
      { label: 'ROADMAP', value: 'Plan successful AI implementation' },
      { label: 'ASSESSMENT', value: 'Practical automation assessments' },
      { label: 'ADVISORY', value: 'Ongoing AI advisory and guidance' },
    ],
    ctas: [
      { text: 'Book a Free AI Strategy Consultation', link: '/free-automation-audit', primary: true },
    ],
    image: {
      src: '/images/ai-strategy.webp',
      alt: 'AI Strategy & Advisory illustration',
      width: 2560,
      height: 1350,
    },
  },

    // ========== TEXT: The Problem with Most AI Consulting ==========
 {
  type: 'text',
  heading: 'Professional AI Strategy Consulting for Business Growth',
  content: [
    'Our AI strategy and advisory services help organizations identify where AI can support productivity, reduce manual work, and improve business processes. Our AI consulting approach connects planning with real implementation.',
    'From evaluating AI tools to developing custom automation strategies, we help businesses make informed technology decisions and prepare for long-term AI adoption.',
  ],
},

    // ========== GRID: What Our AI Strategy Covers ==========
    {
      type: 'grid',
      heading: 'What Our AI Strategy Covers',
      subheading: 'Every engagement produces something you can act on — not a maturity model.',
      items: [
        {
          title: 'AI Opportunity Audit',
          description: 'We map your actual operations — where hours go, where errors happen, where growth strains — and identify where AI and automation genuinely pay off, ranked by return and feasibility. Not a maturity model; a prioritized list with numbers.',
          icon: 'Target',
        },
        {
          title: 'Roadmap with Sequencing',
          description: 'What to automate first, second, third, and why — sequenced so early wins fund and de-risk later ones, with dependencies and prerequisites made explicit.',
          icon: 'Map',
        },
        {
          title: 'Tool and Platform Selection',
          description: 'The AI and automation landscape is noisy and heavily marketed. We evaluate against your actual requirements — capability, cost at your volume, data control, maintainability — and we\'re vendor-neutral: we don\'t resell tools, so recommendations have no commission behind them.',
          icon: 'Scale',
        },
        {
          title: 'Build-vs-Buy Decisions',
          description: 'Whether your problem needs custom development, an integration of existing tools, or an off-the-shelf product — decided honestly, including when the answer makes the project smaller.',
          icon: 'GitBranch',
        },
        {
          title: 'Data Readiness and Security Review',
          description: 'Where your data lives, what shape it\'s in, what an AI system can safely access, and what needs fixing first — including self-hosting and data-control options where sensitivity demands them.',
          icon: 'Shield',
        },
        {
          title: 'Team Enablement',
          description: 'Your people learn how the systems work and how to think about automation, so capability compounds internally instead of accruing to a vendor.',
          icon: 'Users',
        },
      ],
    },

    // ========== STEPS: How Engagements Work ==========
    {
      type: 'steps',
      heading: 'How Engagements Work',
      subheading: 'Assess, build, measure, repeat. Every step produces either a working system or evidence — never just documents.',
      items: [
        {
          title: 'Free Initial Audit',
          description: 'A working session on your operation, producing an honest read on whether meaningful AI opportunity exists — and if it doesn\'t, we say so.',
        },
        {
          title: 'Opportunity Assessment',
          description: 'For engagements that proceed: process mapping, opportunity ranking, and a roadmap with concrete scopes and expected returns.',
        },
        {
          title: 'First Implementation',
          description: 'The top-priority item gets built by us or alongside your team — proving the roadmap against reality.',
        },
        {
          title: 'Iterate',
          description: 'Results reviewed against the projections, the roadmap adjusted with evidence, and the next item scoped.',
        },
      ],
    },

    // ========== TEXT: Who This Is For ==========
    {
      type: 'text',
      heading: 'Who This Is For',
      content: [
        'Our advisory fits businesses that suspect AI could remove real cost or unlock real capacity but need clarity before committing: SMBs and mid-market companies without in-house AI expertise, operations leaders who\'ve seen automation demos but not roadmaps grounded in their process, and teams that tried a tool or two and got noise instead of results.',
        'If you already know exactly what to build, you may not need advisory at all — go straight to our audit and we\'ll scope the build.',
      ],
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters for AI Strategy & Advisory',
      items: [
        {
          title: 'Builders, Not Just Consultants',
          description: 'We deliver working systems, not slide decks. Every recommendation is backed by real implementation experience — the team that maps your AI opportunity is the team that implements it.',
          icon: 'Code',
        },
        {
          title: 'Honest Scoping',
          description: 'We tell you when AI isn\'t the right solution and when simpler automation will do. No upselling for the sake of it.',
          icon: 'Scale',
        },
        {
          title: 'Full Ownership',
          description: 'You own everything we build. We provide full source code, documentation, and deployment instructions.',
          icon: 'FileCheck',
        },
        {
          title: 'Ongoing Support',
          description: 'We don\'t just build and leave. We offer ongoing management and support options so your system stays healthy.',
          icon: 'Heart',
        },
      ],
    },

    // ========== TEXT: What It Costs ==========
    {
      type: 'text',
      heading: 'What It Costs',
      content: [
        'The initial audit is free — genuinely, as a working session rather than a sales call. Structured engagements are scoped to your operation\'s size and complexity, and every proposal ties fees to concrete deliverables: the assessment, the roadmap, the first implementation.',
        'What we don\'t do is open-ended advisory retainers that bill monthly and ship nothing.',
      ],
    },

    // ========== STATS: Results ==========
    {
      type: 'stats',
      heading: 'What Results Clients Get',
      subheading: 'Built on real client outcomes, not marketing estimates:',
      items: [
        { title: 'Projects Delivered', value: '500+' },
        { title: 'Active Clients', value: '120+' },
      ],
    },

    // ========== FAQ ==========
{
  type: 'faq',
  heading: 'AI Strategy & Advisory FAQs',
  items: [
    {
      title: 'What do AI strategy consulting services include?',
      description:
        'AI strategy consulting services include business assessments, AI opportunities, technology selection, implementation planning, and automation roadmaps.',
    },
    {
      title: 'Why should I hire an AI strategy consultant?',
      description:
        'An AI strategy consultant helps identify automation opportunities, select suitable technologies, and plan effective AI implementation.',
    },
    {
      title: 'Do you provide AI consulting for small businesses?',
      description:
        'Yes. Clickmasters provides AI consulting services for small and medium-sized businesses based on their goals, needs, and budgets.',
    },
    {
      title: 'Can you develop and implement our AI strategy?',
      description:
        'Yes. Clickmasters provides AI strategy development, automation planning, custom AI solutions, and system integration services.',
    },
    {
      title: 'How much do AI strategy consulting services cost?',
      description:
        'AI strategy consulting costs depend on business requirements, project complexity, and implementation scope. Contact Clickmasters for a consultation.',
    },
  ],
},

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Want an honest read on where AI pays off in your business?',
      subheading:
        'Book the free audit — a working session, not a pitch, and you\'ll leave with real answers either way.',
      cta: {
        text: 'Book a Free Automation Audit',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};