// content/Industries/marketing-agencies.ts
import { ServiceContent } from '../type';

export const marketingAgencies: ServiceContent = {
  slug: 'marketing-agencies',
  title: 'AI Automation for Marketing Agencies | Clickmasters',
  metaDescription:
    'Clickmasters builds AI automation for marketing and creative agencies: campaign reporting, client updates, content workflows, and lead handoffs.',
  keywords: 'ai automation for marketing agencies, agency automation',
  sections: [
    {
      type: 'hero',
      heading: 'AI Automation for Marketing Agencies',
      subheading:
        'Automate reporting, client updates, and content handoffs so the team spends the week on the work clients can see.',
      content: [
        'Clickmasters builds AI automation for marketing and creative agencies. Reporting, status emails, asset chases, and lead handoffs eat the hours that should go to strategy and creative. We automate that operational layer so account and creative teams produce client work instead of assembling the same spreadsheets and update emails every week.',
        'This page covers where agency operations stall, what we automate, and how it connects to the ad, CRM, and project tools you already run.',
      ],
      stats: [
        { label: 'REPORTING TIME SAVED', value: 'Hours / week' },
        { label: 'CLIENT UPDATES', value: 'On schedule' },
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Solutions', link: '/solutions', primary: false },
      ],
      image: {
        src: '/images/marketing.png',
        alt: 'AI automation for marketing agencies',
        width: 1200,
        height: 1000,
        fadeEdges: true,
      },
    },
    {
      type: 'text',
      heading: 'Where Agency Work Piles Up',
      content: [
        'The campaign is not the bottleneck. The week around it is. Someone pulls numbers from three ad accounts into a deck. Someone else chases the client for assets. Leads from a landing page sit until an account manager copies them into the CRM. Status updates are written from scratch even when the project tool already has the status.',
        'That work repeats for every client, every week. Automation pulls the numbers, drafts the update, routes the assets, and hands leads off, while people still approve anything a client will see.',
      ],
    },
    {
      type: 'features',
      heading: 'What We Automate for Agencies',
      items: [
        {
          title: 'Campaign reporting',
          description:
            'Scheduled reports pulled from ad, analytics, and CRM data, drafted for review before they go to the client.',
          icon: 'BarChart',
        },
        {
          title: 'Client communications',
          description:
            'Status updates and approval reminders generated from the project system, not rewritten by hand.',
          icon: 'Mail',
        },
        {
          title: 'Content workflows',
          description:
            'Briefs, drafts, and review steps move through a tracked path so assets do not stall in inboxes.',
          icon: 'PenTool',
        },
        {
          title: 'Lead handoff',
          description:
            'Form and ad leads land in the CRM, get qualified, and notify the right person without a copy-paste step.',
          icon: 'UserPlus',
        },
        {
          title: 'Onboarding a new client',
          description:
            'Access requests, brand files, and kickoff tasks start from a checklist the moment a client signs.',
          icon: 'ClipboardList',
        },
        {
          title: 'Internal knowledge',
          description:
            'An assistant over past campaigns, briefs, and process docs so the team reuses what already worked.',
          icon: 'Brain',
        },
      ],
    },
    {
      type: 'grid',
      heading: 'A Worked Example: Monday Reporting',
      subheading:
        'Five clients expect a performance update. Nobody should spend Monday morning exporting the same three dashboards.',
      items: [
        {
          title: 'Numbers collected',
          description: 'Spend, results, and pipeline data are pulled from the accounts on a schedule.',
          icon: 'Database',
        },
        {
          title: 'Draft written',
          description: 'A first draft of the client update is ready for the account lead to edit.',
          icon: 'FileText',
        },
        {
          title: 'Review, then send',
          description: 'A person approves the note. Nothing goes out unreviewed.',
          icon: 'CheckCircle',
        },
        {
          title: 'The week stays on creative',
          description: 'The team uses the reclaimed hours on the campaigns, not the spreadsheet.',
          icon: 'Sparkles',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Connected tools',
      content: [
        'We connect the agency stack: ad platforms, analytics, CRM, project tools, email, and the forms your campaigns already use. Reporting and handoffs run across those systems. You keep the tools your clients and team already know.',
      ],
    },
    {
      type: 'features',
      heading: 'Why Clickmasters for Agencies',
      items: [
        {
          title: 'Mapped to agency operations',
          description: 'We automate reporting, updates, and handoffs. Strategy and creative stay with your team.',
          icon: 'Target',
        },
        {
          title: 'Human-in-the-loop where it matters',
          description: 'Client-facing reports and messages are reviewed before they are sent.',
          icon: 'Users',
        },
        {
          title: 'Integrated, not rip-and-replace',
          description: 'We connect the ad, project, and CRM tools you already pay for.',
          icon: 'Link2',
        },
        {
          title: 'You own it',
          description: 'Documented workflows the agency can run without us in the middle.',
          icon: 'Award',
        },
      ],
    },
    {
      type: 'text',
      heading: 'The first workflow',
      content: [
        'Reporting is usually the first win. It is weekly, it is the same shape every time, and everyone can feel the hours it takes. Client update emails and lead handoff are the natural next steps.',
        'A free audit looks at one client’s week and marks every step that is copy-paste. That is the workflow we build first.',
      ],
    },
    {
      type: 'faq',
      heading: 'Agency automation questions',
      items: [
        {
          title: 'What can a marketing agency automate?',
          description:
            'Campaign reporting, client status updates, content review steps, new-client onboarding, and lead handoff into the CRM. Creative and strategy stay with the team.',
        },
        {
          title: 'Will reports go to clients without a person checking them?',
          description:
            'No. Automation drafts the report or update. An account lead reviews it before it is sent.',
        },
        {
          title: 'Which tools can you connect?',
          description:
            'Ad platforms, analytics, CRM, project management, email, and the forms your campaigns already use.',
        },
        {
          title: 'What should we automate first?',
          description:
            'Weekly reporting. It is repetitive, visible, and easy to measure in hours saved.',
        },
      ],
    },
    {
      type: 'cta',
      heading: 'Give the week back to the work.',
      subheading: 'Book a free automation audit tailored to your agency.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};
