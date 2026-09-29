// content/Industries/real-estate.ts
import { ServiceContent } from '../type';

export const realEstate: ServiceContent = {
  slug: 'real-estate',
  title: 'AI Automation for Real Estate | Clickmasters',
  metaDescription:
    'Clickmasters builds AI automation for real estate teams: lead follow-up, appointment scheduling, listing enquiries, and document workflows so agents respond faster.',
  keywords: 'ai automation for real estate, real estate automation',
  sections: [
    {
      type: 'hero',
      heading: 'AI Automation for Real Estate',
      subheading:
        'Automate lead follow-up, tour scheduling, and property enquiries so agents respond in minutes, not hours.',
      content: [
        'Clickmasters builds AI automation for real estate teams. Leads arrive from portals, ads, and your website at all hours, and the agent who replies first usually wins the conversation. We automate first response, qualification, appointment scheduling, and the document handoffs around a listing or a lease, so your team spends time with serious buyers and renters instead of chasing inboxes.',
        'This page covers where real estate work stalls, what we automate, and how it connects to the CRM and tools you already use.',
      ],
      stats: [
        { label: 'FIRST RESPONSE', value: 'Under 2 min' },
        { label: 'FOLLOW-UPS HANDLED', value: '24/7' },
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Solutions', link: '/solutions', primary: false },
      ],
      image: {
        src: '/images/business.jpg',
        alt: 'AI automation for real estate teams',
        width: 1200,
        height: 1000,
        fadeEdges: true,
      },
    },
    {
      type: 'text',
      heading: 'Where Real Estate Work Stalls',
      content: [
        'A busy brokerage loses deals in the gap between an enquiry and a reply. Portal leads, website forms, and after-hours calls pile up while agents are on showings. Follow-up depends on whoever remembers, listing questions get answered differently by each person, and paperwork moves by email instead of a tracked workflow.',
        'The work is repetitive and time-sensitive: qualify the lead, answer the property question, book the tour, send the documents, and update the CRM. Automation takes that sequence off the agent’s memory and runs it the same way every time.',
      ],
    },
    {
      type: 'features',
      heading: 'What We Automate for Real Estate',
      items: [
        {
          title: 'Lead follow-up',
          description:
            'Instant replies and sequenced follow-ups for portal, ad, and website leads so no enquiry sits overnight.',
          icon: 'MessageSquare',
        },
        {
          title: 'Tour scheduling',
          description:
            'Buyers and renters book showings against real availability, with reminders that cut no-shows.',
          icon: 'Calendar',
        },
        {
          title: 'Listing enquiries',
          description:
            'AI answers common property questions from your listings and routes serious buyers to the right agent.',
          icon: 'Home',
        },
        {
          title: 'Document workflows',
          description:
            'Disclosures, applications, and offer packets move through a tracked process instead of scattered email.',
          icon: 'FileText',
        },
        {
          title: 'CRM updates',
          description:
            'Every enquiry, tour, and status change is written back to your CRM so the pipeline stays current.',
          icon: 'Database',
        },
        {
          title: 'After-hours coverage',
          description:
            'Voice and chat agents handle calls and messages when the office is closed, then hand off a qualified lead.',
          icon: 'Phone',
        },
      ],
    },
    {
      type: 'grid',
      heading: 'A Worked Example: Portal Lead to Booked Tour',
      subheading:
        'A lead comes in from a listing portal while the agent is on a showing. Automation keeps the conversation moving.',
      items: [
        {
          title: 'Instant acknowledgement',
          description: 'The lead gets a reply in minutes with the property details and a next step.',
          icon: 'Zap',
        },
        {
          title: 'Qualification',
          description: 'A short set of questions captures timeline, budget, and whether they want to tour.',
          icon: 'ClipboardList',
        },
        {
          title: 'Booked showing',
          description: 'Qualified buyers pick a time. The agent gets a calendar hold and a CRM note.',
          icon: 'Calendar',
        },
        {
          title: 'Agent time on closings',
          description: 'The team spends the day with people who are ready, not on first-response admin.',
          icon: 'Users',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Connected tools',
      content: [
        'We connect the tools brokerages already run: CRMs such as Follow Up Boss, HubSpot, or Salesforce, listing sites and website forms, calendar tools, e-signature, and the phone or chat channel your leads actually use. The automation sits on top of that stack. You do not replace the systems your agents know.',
      ],
    },
    {
      type: 'features',
      heading: 'Why Clickmasters for Real Estate',
      items: [
        {
          title: 'Mapped to brokerage workflows',
          description: 'We automate lead response, tours, and paperwork, not the judgment of pricing or negotiation.',
          icon: 'Target',
        },
        {
          title: 'Human-in-the-loop where it matters',
          description: 'Agents take over as soon as a lead is qualified or a question needs a person.',
          icon: 'Users',
        },
        {
          title: 'Integrated, not rip-and-replace',
          description: 'We connect to your CRM, listings, calendar, and inbox.',
          icon: 'Link2',
        },
        {
          title: 'You own it',
          description: 'Documented workflows your team can run and change without a black box.',
          icon: 'Award',
        },
      ],
    },
    {
      type: 'text',
      heading: 'The first workflow',
      content: [
        'Most teams should start with lead response. Speed-to-lead is the clearest leak: enquiries that wait an hour are often already talking to someone else. Once first response is reliable, scheduling and document handoffs are the next layer.',
        'A free audit looks at where your leads enter, how long they wait, and which follow-ups depend on an agent remembering. That is the first workflow we build.',
      ],
    },
    {
      type: 'faq',
      heading: 'Real estate automation questions',
      items: [
        {
          title: 'How do real estate teams use AI automation?',
          description:
            'Teams use it for instant lead follow-up, tour scheduling, listing questions, CRM updates, and document routing so agents respond faster without living in their inbox.',
        },
        {
          title: 'Will this replace my agents?',
          description:
            'No. Automation handles the repetitive first response and admin. Agents still advise, negotiate, and close.',
        },
        {
          title: 'Can it work with our CRM and listing leads?',
          description:
            'Yes. We connect portal and website leads to your CRM and calendar so every enquiry is logged and followed up.',
        },
        {
          title: 'What should we automate first?',
          description:
            'Speed-to-lead. Answering and qualifying new enquiries within minutes is usually the highest-return starting point.',
        },
      ],
    },
    {
      type: 'cta',
      heading: 'Reply first. Book the tour.',
      subheading: 'Book a free automation audit tailored to your brokerage.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};
