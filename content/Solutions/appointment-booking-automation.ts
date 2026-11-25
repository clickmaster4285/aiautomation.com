// content/Solutions/appointment-booking-automation.ts
export const appointmentBookingAutomation = {
  url: '/solutions/appointment-booking-automation',
  titleTag: 'Appointment Booking Automation for Busy Teams | Clickmasters',
  metaDescription: 'Appointment booking automation that schedules, confirms, and reminds so the calendar stays full without a manual chase. Book a free audit. Ask today.',
  primaryKeyword: 'appointment booking automation',
  bookingLink: '/free-automation-audit',

  heroBadge: 'Appointment & Booking Automation',
  heroHeading: 'Appointment & Booking Automation Solutions',
  heroSubheading:
    'Appointment booking automation that books, confirms, and reminds, so no request is left waiting and no booking slips through.',

  sections: {
    'Why Businesses Need Appointment Booking Automation': [
      'For many service businesses, bookings arrive through phone calls, emails, web forms, and messages, and each one needs a staff member to check availability, confirm the slot, send reminders, and update the calendar. When that work is manual, requests wait in inboxes, double bookings slip through, and missed appointments leave gaps in the schedule.',
      'Appointment booking automation handles that routine work consistently. Availability is checked in real time, confirmations and reminders go out on schedule, clients can reschedule on their own, and every booking is logged in the calendar and CRM, so your team spends less time coordinating and more time serving the people who booked.',
    ],
    'What Our Appointment & Booking Automation Can Do': [
      'Every booking automation we build comes with these core capabilities, tailored to your specific needs.',
      '**Real-Time Scheduling** Availability checked and booked instantly across all channels — never miss a booking opportunity.',
      '**Confirmation & Reminders** No-shows reduced systematically with automated confirmation and reminder sequences.',
      '**Self-Service Rescheduling** Changes handled without staff involvement — clients reschedule on their own.',
      '**Calendar & CRM Sync** Every booking logged where it belongs — your calendar and CRM stay in perfect sync.',
      '**Intake at Booking** The information you need collected up front — no more chasing for details after the booking.',
      '**Production-Ready** Staged rollout, comprehensive documentation, and reliability engineering ensure your booking automation performs at scale.',
    ],
  },

  faqQuestions: [
    {
      question: 'What is appointment booking automation?',
      answer:
        'Appointment booking automation is software that handles the routine steps of scheduling: checking availability, booking the slot, sending confirmations and reminders, handling reschedules and cancellations, and recording the booking in your calendar and CRM, without a staff member doing each step by hand.',
    },
    {
      question: 'Can booking automation connect to our existing calendar and CRM?',
      answer:
        'Yes, where integrations or APIs exist. Booking automation is typically connected to calendar tools such as Google Calendar or Outlook and to your CRM, so availability stays accurate and every booking is logged in the right place.',
    },
    {
      question: 'How does booking automation help with no-shows?',
      answer:
        'Automated confirmation and reminder sequences make sure clients are reminded of their appointment ahead of time, and give them an easy way to reschedule or cancel. When an appointment is missed, an automated follow-up can invite the client to rebook.',
    },
    {
      question: 'Can clients reschedule or cancel without contacting our team?',
      answer:
        'Yes. Self-service rescheduling lets clients pick a new time from your live availability, and the change is reflected in your calendar and CRM automatically. You set the rules, such as how close to the appointment changes are allowed.',
    },
    {
      question: 'Can we collect intake information at the time of booking?',
      answer:
        'Yes. Intake questions can be built into the booking flow, so the details you need are collected up front and attached to the appointment record instead of being chased afterwards.',
    },
  ],

  relatedSolutions: [
    {
      slug: 'ai-voice-agents',
      title: 'AI Voice Agents',
      description:
        'AI voice agents that answer calls, handle common requests, and book appointments over the phone.',
    },
    {
      slug: 'crm-automation',
      title: 'CRM Automation',
      description:
        'CRM automation that keeps contact records, pipelines, and follow-ups up to date without manual data entry.',
    },
    {
      slug: 'customer-support-automation',
      title: 'Customer Support Automation',
      description:
        'Customer support automation that triages requests, answers common questions, and routes the rest to your team.',
    },
  ],

  cta: 'Ready to Automate Your Bookings?',

  // Page layout for app/solutions/[service]: section order, titles and page-specific props.
  page: {
    schema: { name: 'Appointment Booking Automation', serviceType: 'Appointment Booking Automation' },
    blocks: [
      {
        type: 'HeroSection',
        props: {
          primaryCta: { text: 'Book a Free Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'View All Solutions', href: '/solutions' },
        },
      },
      {
        type: 'WhySection',
        section: 'Why Businesses Need Appointment Booking Automation',
        props: { title: 'Why Businesses Need Appointment Booking Automation' },
      },
      {
        type: 'AutomationSection',
        section: 'What Our Appointment & Booking Automation Can Do',
        props: { title: 'What Our Appointment & Booking Automation Can Do' },
      },
      { type: 'FAQSection', props: { title: 'Frequently Asked Questions', subtitle: 'Common questions about appointment booking automation' } },
      { type: 'RelatedSolutions', props: { title: 'Explore Other Solutions', subtitle: 'More ways we can help you automate' } },
      {
        type: 'CTASection',
        props: {
          subtitle: 'Book a free consultation and let\'s discuss how appointment & booking automation can transform your business.',
          primaryCta: { text: 'Book a Free Automation Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'View All Solutions', href: '/solutions' },
          background: 'light',
          showForm: true,
        },
      },
    ],
  },
};
