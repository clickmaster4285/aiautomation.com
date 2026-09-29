// content/Industries/professional-services.ts
import { ServiceContent } from '../type';

export const professionalServices: ServiceContent = {
  slug: 'professional-services',
  title: 'AI Automation for Professional Services | Clickmasters',
  metaDescription:
    'Clickmasters builds AI automation for consulting and professional service firms: client onboarding, proposals, follow-ups, time tracking, and billing.',
  keywords: 'ai automation for professional services, consulting automation',
  sections: [
    {
      type: 'hero',
      heading: 'AI Automation for Professional Services',
      subheading:
        'Automate client onboarding, proposals, follow-ups, and billing so your team bills for expertise, not admin.',
      content: [
        'Clickmasters builds AI automation for consulting firms, agencies, and other professional service businesses. The work that pays the bills is client delivery. The work that eats the week is intake, proposals, status updates, time capture, and invoices. We automate that layer so partners and delivery teams spend their hours on the work clients hired them for.',
        'This page explains where professional-services admin piles up, what we automate, and how it fits the tools you already run.',
      ],
      stats: [
        { label: 'ADMIN TIME RECLAIMED', value: '10+ hrs/wk' },
        { label: 'ONBOARDING STEPS', value: 'Tracked' },
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Solutions', link: '/solutions', primary: false },
      ],
      image: {
        src: '/images/strategy.png',
        alt: 'AI automation for professional services',
        width: 1200,
        height: 1000,
        fadeEdges: true,
      },
    },
    {
      type: 'text',
      heading: 'Where Professional Services Work Piles Up',
      content: [
        'A new client should start cleanly: scope confirmed, documents collected, access granted, kickoff booked. In practice that sequence lives in email, and pieces fall through. Proposals are rewritten from the last one. Follow-ups depend on whoever owns the relationship. Time is entered late, so invoices go out late.',
        'None of that is the expertise you sell. It is repeatable process, and it is where automation pays for itself without touching the advice, design, or delivery your clients actually buy.',
      ],
    },
    {
      type: 'features',
      heading: 'What We Automate for Professional Services',
      items: [
        {
          title: 'Client onboarding',
          description:
            'A tracked intake that collects documents, assigns owners, and books the kickoff without a chase thread.',
          icon: 'ClipboardList',
        },
        {
          title: 'Proposals and scopes',
          description:
            'Draft proposals from your past work and pricing rules, then route them for review before anything is sent.',
          icon: 'FileText',
        },
        {
          title: 'Follow-ups',
          description:
            'Sequences that nudge unsigned proposals and quiet leads, and stop the moment someone replies.',
          icon: 'Mail',
        },
        {
          title: 'Time and billing',
          description:
            'Time capture and invoice drafts pulled from the work already logged, so billing does not wait on month-end memory.',
          icon: 'Receipt',
        },
        {
          title: 'Client reporting',
          description:
            'Status updates assembled from project tools and sent on a schedule your clients can rely on.',
          icon: 'BarChart',
        },
        {
          title: 'Internal knowledge',
          description:
            'An assistant over your playbooks and past engagements so the team finds the answer instead of asking around.',
          icon: 'Brain',
        },
      ],
    },
    {
      type: 'grid',
      heading: 'A Worked Example: Signed Proposal to Kickoff',
      subheading:
        'A proposal is accepted on a Friday. The kickoff should not wait until someone rebuilds the checklist on Monday.',
      items: [
        {
          title: 'Intake starts itself',
          description: 'The signed proposal triggers a checklist: documents, access, stakeholders, and dates.',
          icon: 'ListChecks',
        },
        {
          title: 'Clients know what to send',
          description: 'They get one clear request instead of five separate emails from different people.',
          icon: 'Mail',
        },
        {
          title: 'Kickoff is booked',
          description: 'Once the essentials are in, a kickoff is scheduled and the delivery team is notified.',
          icon: 'Calendar',
        },
        {
          title: 'Nothing sits in a inbox',
          description: 'Every step has an owner and a status, so onboarding does not depend on memory.',
          icon: 'CheckCircle',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Connected tools',
      content: [
        'We connect the stack professional firms already use: CRM and proposal tools, email, calendars, project management, time tracking, and accounting. The automation moves information between those systems. Your team keeps working where they already work.',
      ],
    },
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'Mapped to client delivery',
          description: 'We automate intake, follow-up, and billing. The advice stays with your people.',
          icon: 'Target',
        },
        {
          title: 'Human-in-the-loop where it matters',
          description: 'Proposals, scopes, and client commitments are reviewed before they go out.',
          icon: 'Users',
        },
        {
          title: 'Integrated, not rip-and-replace',
          description: 'We connect your CRM, project tools, and finance stack.',
          icon: 'Link2',
        },
        {
          title: 'You own it',
          description: 'Documented workflows you can run in-house.',
          icon: 'Award',
        },
      ],
    },
    {
      type: 'text',
      heading: 'The first workflow',
      content: [
        'Most firms should start with whichever handoff is currently dropped: proposal follow-up, client onboarding, or billing. Those are visible, measurable, and they do not require automating the actual delivery work.',
        'A free audit maps one client journey from first conversation to first invoice and shows the steps that are still manual. That is the first build.',
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What can professional service firms automate?',
          description:
            'Client onboarding, proposal drafts, follow-ups, status reporting, time capture, and invoicing. Delivery and advice stay with your team.',
        },
        {
          title: 'Will clients notice a bot instead of us?',
          description:
            'Routine updates and intake can be automated. Anything that commits scope, price, or advice is reviewed by a person before it is sent.',
        },
        {
          title: 'Does this replace our project tools?',
          description:
            'No. We connect the CRM, project system, calendar, and accounting tools you already use.',
        },
        {
          title: 'What is the best first workflow?',
          description:
            'Usually the handoff you already know is leaking: unsigned proposals, messy onboarding, or late invoices.',
        },
      ],
    },
    {
      type: 'cta',
      heading: 'Bill for the work. Automate the rest.',
      subheading: 'Book a free automation audit tailored to your firm.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};
