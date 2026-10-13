// content/services/ai-reporting-automation.ts
import { ServiceContent } from '../type';

export const aiReportingAutomation: ServiceContent = {
  slug: 'ai-reporting-automation',
  title: 'AI Reporting Automation Services | Automated Business Reports',
  metaDescription: 'Automate reports, dashboards, and data summaries with AI reporting automation services. Save time and get faster business insights with Clickmasters.',
  keywords: 'reporting automation, ai reporting automation',

  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Reporting Automation Services for Faster and Smarter Reporting',
      subheading:
        'Save hours of manual reporting with AI reporting automation services from Clickmasters. We help businesses collect data, update dashboards, generate reports, and create easy-to-understand AI summaries automatically.',
      content: [
        'Save hours of manual reporting with AI reporting automation services from Clickmasters. We help businesses collect data, update dashboards, generate reports, and create easy-to-understand AI summaries automatically.',
      ],
      stats: [
        { label: 'REPORTS', value: 'Automate recurring business reports' },
        { label: 'DATA', value: 'Combine data from multiple platforms' },
        { label: 'DASHBOARDS', value: 'Create automatic KPI dashboards' },
        { label: 'AI SUMMARIES', value: 'Generate AI-powered report summaries' },
        { label: 'EFFICIENCY', value: 'Reduce manual spreadsheet work' },
      ],
      ctas: [
        { text: 'Automate Your Business Reports', link: '/free-automation-audit', primary: true },
      ],
      image: {
        src: '/images/ai-reporting.webp',
        alt: 'AI Reporting Automation illustration',
        width: 2560,
        height: 1350,
      },
    },

    // ========== TEXT: The Hidden Tax of Manual Reporting ==========
 {
  type: 'text',
  heading: 'Get Business Reports Without Manual Data Work',
  content: [
    'Creating reports manually can take hours, especially when data comes from several different platforms. AI reporting automation can collect, organise, and present your business data automatically.',
    'Clickmasters builds reporting systems that can update dashboards, prepare scheduled reports, and highlight important performance changes. Your team gets faster access to useful information without spending unnecessary time copying numbers between spreadsheets.',
  ],
},

    // ========== GRID: What We Build for Reporting ==========
    {
      type: 'grid',
      heading: 'What We Build for Reporting',
      subheading:
        'The full reporting stack, built once and running forever.',
      items: [
        {
          title: 'Scheduled Report Generation',
          description: 'Your recurring reports — pipeline, financial, operational, client-facing — built from live sources and delivered on schedule to the right people, in the format they actually read (email, Slack, PDF, dashboard).',
          icon: 'Clock',
        },
        {
          title: 'Live Dashboards',
          description: 'Current numbers, always — no refresh ritual, no "as of last Tuesday" caveats for the metrics your team checks daily.',
          icon: 'BarChart3',
        },
        {
          title: 'Multi-Source Aggregation',
          description: 'The real work of reporting is joining data across systems: CRM plus billing plus support plus marketing. We build the pipelines that pull, clean, and combine automatically, with validation so silent breakages get caught instead of shipped.',
          icon: 'Database',
        },
        {
          title: 'AI Summaries and Narratives',
          description: 'The layer that changes who reads reports: plain-language summaries generated on top of the data — what moved, what\'s anomalous, what deserves attention — so the report communicates instead of merely displaying. Numbers stay authoritative; the narrative makes them legible at a glance.',
          icon: 'Brain',
        },
        {
          title: 'Client Reporting for Agencies',
          description: 'Recurring client reports assembled and branded automatically — a category of its own because for agencies, reporting hours scale with every client won.',
          icon: 'Users',
        },
        {
          title: 'Alerting on Thresholds',
          description: 'The inversion of reporting: instead of checking numbers on schedule, the numbers tell you when they need attention — a metric crossing a threshold triggers a notification with context.',
          icon: 'Bell',
        },
      ],
    },

    // ========== FEATURES: Accuracy ==========
    {
      type: 'features',
      heading: 'Accuracy, Honestly Handled',
      items: [
        {
          title: 'Validation on Source Data',
          description: 'A wrong automated report is worse than a late manual one, so accuracy engineering is most of the build.',
          icon: 'Shield',
        },
        {
          title: 'Checks on Joins and Totals',
          description: 'Every join, sum, and aggregation is verified — not assumed.',
          icon: 'CheckCircle2',
        },
        {
          title: 'Anomaly Flags',
          description: 'When inputs look broken, the report flags it instead of shipping wrong numbers.',
          icon: 'AlertTriangle',
        },
        {
          title: 'Clear Provenance',
          description: 'Any number can be traced to its source. The AI narrative summarizes verified data — it never invents figures.',
          icon: 'FileCheck',
        },
      ],
    },

    // ========== TEXT: What It Replaces ==========
    {
      type: 'text',
      heading: 'What It Replaces',
      content: [
        'The Monday-morning assembly ritual. The month-end scramble. The spreadsheet only one person understands. The dashboard that\'s technically live but wrong since the API changed. The client report that eats the first three days of every month. And the meeting where twenty minutes go to establishing whose numbers are right.',
      ],
    },

    // ========== STEPS: How We Deliver ==========
    {
      type: 'steps',
      heading: 'How We Deliver Reporting Automation',
      items: [
        {
          title: 'Map Your Reports',
          description: 'We identify all recurring reports, dashboards, and data sources.',
        },
        {
          title: 'Build Data Pipelines',
          description: 'We connect to your systems and build validation into every join.',
        },
        {
          title: 'Create Reports',
          description: 'We build the reports and dashboards in the format your team actually reads.',
        },
        {
          title: 'Add AI Summaries',
          description: 'We add the AI narrative layer on top of the verified data.',
        },
      ],
    },

    // ========== STATS: Results ==========
    {
      type: 'stats',
      heading: 'What Results Clients Get',
      subheading: 'Built on real client outcomes, not marketing estimates:',
      items: [
        { title: 'Hours Saved', value: '2,500+' },
        { title: 'Errors Reduced', value: '99%' },
      ],
    },

    // ========== FAQ ==========
{
  type: 'faq',
  heading: 'AI Reporting Automation FAQs',
  items: [
    {
      title: 'What is AI reporting automation?',
      description:
        'AI reporting automation uses software and artificial intelligence to automatically collect, organise, summarise, and present business data.',
    },
    {
      title: 'Which reports can be automated?',
      description:
        'Sales reports, marketing reports, financial reports, customer service reports, operations reports, and KPI dashboards can be automated.',
    },
    {
      title: 'Can AI reporting automation use data from multiple platforms?',
      description:
        'Yes. Data can be collected from different systems and combined into one report or dashboard.',
    },
    {
      title: 'Can reports be sent automatically?',
      description:
        'Yes. Reports can be scheduled and automatically sent to employees, managers, or clients.',
    },
    {
      title: 'Can AI summarise report data?',
      description:
        'Yes. AI can create simple summaries of key changes, trends, and important metrics.',
    },
  ],
},

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Still assembling reports by hand?',
      subheading:
        'Book a free audit — we\'ll count what manual reporting costs you and scope the system that ends it.',
      cta: {
        text: 'Automate Your Business Reports',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};