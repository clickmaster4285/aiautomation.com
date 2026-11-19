// content/products/ai-finance-accounting/ai-accounting-automation.ts
// Copy + SEO for /products/ai-finance-accounting/ai-accounting-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the accounting cycle: transaction categorization / coding against the chart of accounts,
//   journal-entry preparation for review, reconciliation matching with exceptions flagged to a person,
//   accounting data processing, month-end close checklists and record organization.
//   Day-to-day recording and keeping records complete belong to AI Bookkeeping Software; the whole finance
//   function (cross-system data flow, AR follow-ups, reporting, cash visibility) to AI Financial Automation;
//   supplier invoice intake to AI Invoice Processing Software; receipts and claims to AI Expense Management.
// - Verified capabilities only: AI / OCR extraction, validation against expected values, approval routing,
//   transaction matching with exceptions to a person, recurring reports from live data, syncing CRM, billing
//   and accounting data, spreadsheet-heavy workflow automation, human-in-the-loop at every costly step, data
//   kept in the client’s environment where sensitivity requires.
// - Finance systems named: QuickBooks, Xero, NetSuite, Bill.com, Stripe, spreadsheets — always "where they offer
//   access; confirmed in the audit". Journal entries are PREPARED for review, never posted without approval.
// - NOT Clickmasters features: bank feeds / bank synchronization, sending payments, tax filing, audit or
//   compliance certification, guaranteed error-free books. Never say AI replaces accountants or staff.
// - No statistics, percentages, hours-saved figures, prices, customer names, testimonials, guarantees,
//   certifications or ongoing-support promises.
// - Clickmasters builds automation on platforms the client owns — it is not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_ACCOUNTING_AUTOMATION_PATH = '/products/ai-finance-accounting/ai-accounting-automation';

export const aiAccountingAutomationSeo: HubSeo = {
  name: 'AI Accounting Automation',
  path: AI_ACCOUNTING_AUTOMATION_PATH,
  title: 'AI Accounting Automation for Coding and Close | Clickmasters',
  description:
    'AI accounting automation for transaction coding, reconciliation matching, journal-entry prep and month-end close checklists, all reviewed by your accountants.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Finance & Accounting', path: '/products/ai-finance-accounting' },
    { name: 'AI Accounting Automation', path: AI_ACCOUNTING_AUTOMATION_PATH },
  ],
};

export const aiAccountingAutomationKeywords = [
  'AI accounting automation',
  'accounting automation',
  'automated transaction categorization',
  'transaction coding automation',
  'automated reconciliation matching',
  'journal entry automation',
  'month-end close automation',
  'close checklist automation',
  'accounting automation for small business',
  'accounting automation for accounting firms',
  'QuickBooks and Xero accounting automation',
  'how to automate reconciliation',
  'can AI do accounting',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI finance and accounting automation', href: '/products/ai-finance-accounting', section: 'What Is AI Accounting Automation?' },
  { anchor: 'AI invoice processing software', href: '/products/ai-finance-accounting/ai-invoice-processing-software', section: 'Where the Accounting Cycle Slows Down (explainer)' },
  { anchor: 'AI workflow automation for accounting firms', href: '/solutions/ai-workflow-automation/for-accounting-firms', section: 'Where AI Helps and Where Accountants Decide' },
  { anchor: 'AI bookkeeping software', href: '/products/ai-finance-accounting/ai-bookkeeping-software', section: 'Accounting Automation vs Bookkeeping vs Financial Automation (extras)' },
  { anchor: 'AI financial automation', href: '/products/ai-finance-accounting/ai-financial-automation', section: 'Accounting Automation vs Bookkeeping vs Financial Automation (extras)' },
] as const;

export const aiAccountingAutomation: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'AI Accounting Automation',
    heading: 'AI Accounting Automation for Coding, Reconciliation and a Steadier Month-End Close',
    accentWords: 4,
    subheading:
      'We automate the repeatable work of the accounting cycle: suggesting account codes for transactions, matching payments to invoices, preparing journal entries for review and running the close checklist. It is built in your own accounting system and spreadsheets, and nothing is posted until a person approves it.',
    primaryCta: { text: 'Book a Free Accounting Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'Hand pressing a glowing Automation button surrounded by analytics, chart and dollar payment icons, illustrating AI accounting automation for coding and reconciliation',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Transaction coding', 'Reconciliation matching', 'Journal-entry prep', 'Close checklists', 'Exception queues', 'Reviewer sign-off'],
  },

  intro: {
    eyebrow: 'The Accounting Cycle',
    heading: 'What Is AI Accounting Automation?',
    paragraphs: [
      'AI accounting automation applies workflows and AI to the processing work that turns raw transactions into accounts you can rely on. It suggests which account in your chart of accounts each transaction belongs to, proposes matches between payments and the invoices they settle, prepares recurring and adjusting journal entries for a reviewer, and keeps the month-end checklist moving.',
      'The difference from simple rules is how it copes with ambiguity. A rule can code every payment to a known software supplier as subscriptions. It struggles with a card transaction described only as “AMZN MKTP”, or a customer payment that covers three invoices minus a small deduction. AI can read the description, compare it with past coding and open items, and offer a suggestion with its reasoning. An accountant accepts it, corrects it or sends it back.',
      'This page sits within our [AI finance and accounting automation](/products/ai-finance-accounting) range and focuses on the accounting cycle itself: coding, matching, journals and the close. It suits small and growing businesses with an in-house finance person, as well as accounting firms processing the same work for many clients.',
    ],
    problems: [
      'Hundreds of transactions a month are coded one by one, often by memory.',
      'Reconciliation means exporting two lists and matching them by eye.',
      'The same accruals and prepayment releases are typed in every month.',
      'The close checklist lives in a spreadsheet that someone has to chase by hand.',
      'Miscoded items are only spotted when the management accounts look wrong.',
    ],
  },

  explainer: {
    eyebrow: 'Bottlenecks',
    heading: 'Where the Accounting Cycle Slows Down',
    paragraphs: [
      'Most of the delay in accounting is not in the hard judgments. It is in the volume of small, similar decisions that come before them. Each transaction needs a code, each payment needs a match, each recurring journal needs entering again. None of these steps is difficult on its own, but together they push the review work, where an accountant adds real value, to the last few days of the month.',
      'Automation works best when it is applied to the right stage. Supplier invoices, for example, are better handled at the point they arrive, before they ever reach the ledger, which is what [AI invoice processing software](/products/ai-finance-accounting/ai-invoice-processing-software) is for. Accounting automation picks up from there: the transactions, balances and entries already in your system that need coding, matching and checking.',
    ],
    points: [
      { title: 'Coding Volume', description: 'Many low-value transactions need a code, and each one interrupts more useful work.' },
      { title: 'Partial and Combined Payments', description: 'Payments that cover several invoices, or arrive short, are slow to match by hand.' },
      { title: 'Repeated Journals', description: 'Accruals, prepayment releases and allocations follow the same pattern each month.' },
      { title: 'Checklist Chasing', description: 'Close tasks depend on several people, and progress is tracked by asking around.' },
      { title: 'Late Discovery', description: 'Errors made early in the month are found during review, when time is shortest.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our Accounting Automation Handles',
    intro:
      'Each capability is configured around your chart of accounts, coding conventions, materiality levels and close calendar. The workflow prepares the work; your team reviews and posts it.',
    items: [
      { title: 'Transaction Categorization', description: 'Each transaction gets a suggested account, tax treatment and, where you use them, a department or project code.' },
      { title: 'Coding From History', description: 'Suggestions draw on how similar transactions were coded before, so your own conventions carry forward.' },
      { title: 'Reconciliation Matching', description: 'Payments and records are matched to invoices and statements, including one-to-many and partial matches.' },
      { title: 'Exception Queue', description: 'Unmatched items, low-confidence suggestions and unusual amounts go to a person with the evidence attached.' },
      { title: 'Journal-Entry Preparation', description: 'Recurring accruals, releases and allocations are drafted from your schedules and sent for review.' },
      { title: 'Close Checklist Tracking', description: 'Month-end tasks are assigned to owners, reminders are sent and progress is visible in one place.' },
      { title: 'Balance and Variance Checks', description: 'Account balances are compared with expected values or prior periods, and large movements are flagged.' },
      { title: 'Record Organization', description: 'Workpapers, schedules and support files are saved and named consistently for each period.' },
      { title: 'Audit Trail', description: 'Every suggestion, approval and change is logged, so a reviewer can see who accepted what and when.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'A Reconciliation Run, Step by Step',
    intro:
      'Here is a common example: matching customer payments recorded in your accounting system against open sales invoices at the end of each week.',
    steps: [
      { title: 'Collect', description: 'The workflow pulls the week’s recorded receipts and the list of open invoices from your accounting system or exports.' },
      { title: 'Exact Matches', description: 'Rules match payments whose amount and invoice reference line up exactly with one open invoice.' },
      { title: 'Suggested Matches', description: 'AI reviews the rest, reading remittance notes and references to propose one-to-many, partial or near matches.' },
      { title: 'Checks', description: 'Each suggestion is tested against your tolerances. Differences above the limit are never matched automatically.' },
      { title: 'Review', description: 'Your accountant sees proposed matches and exceptions side by side and approves, corrects or rejects each one.' },
      { title: 'Record and Report', description: 'Approved matches are recorded where access allows, and a short summary lists anything still open.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Teams Automate Accounting Workflows',
    intro:
      'The aim is not to make accountants faster at typing. It is to move their time from preparing the work to reviewing it.',
    items: [
      { title: 'Review Instead of Re-Key', description: 'Accountants confirm prepared codes, matches and journals rather than building each one from scratch.' },
      { title: 'Consistent Coding', description: 'Similar transactions are coded the same way, whoever is processing them that month.' },
      { title: 'Earlier Exceptions', description: 'Unmatched and unusual items surface during the month, not on the last day of the close.' },
      { title: 'A Visible Close', description: 'Everyone can see which close tasks are done, waiting or blocked, without a status meeting.' },
      { title: 'Clear Evidence', description: 'Each entry links to the documents and reasoning behind it, which makes later questions easier to answer.' },
      { title: 'Capacity for More Clients', description: 'For firms, more client files can be processed by the same team without lowering the review standard.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Review and Control',
    heading: 'Where AI Helps and Where Accountants Decide',
    paragraphs: [
      'AI is well suited to the pattern-matching side of accounting: reading a vague transaction description, recognizing a supplier from a slightly different name, or spotting that three invoices add up to one payment. It is not a substitute for professional judgment on treatment, materiality or anything unusual, and it can be wrong. So every suggestion carries the evidence behind it, and nothing is posted to the ledger without a person approving it.',
      'For practices, the same approach can run across many client files with different charts of accounts. Our page on [AI workflow automation for accounting firms](/solutions/ai-workflow-automation/for-accounting-firms) explains how firms structure that work so each client’s rules stay separate.',
    ],
    aiDoes: [
      'Suggests account and tax codes for transactions',
      'Reads remittance notes and payment references',
      'Proposes one-to-many and partial matches',
      'Drafts recurring journal entries from schedules',
      'Flags unusual balances and movements',
      'Summarizes open items before the close',
    ],
    peopleDo: [
      'Set the chart of accounts, rules and tolerances',
      'Approve every journal before it is posted',
      'Decide the treatment of unusual items',
      'Review and sign off each period',
    ],
  },

  spotlight: {
    eyebrow: 'Month-End Close',
    heading: 'Month-End Close Automation Without Losing Control',
    paragraphs: [
      'A typical small-business close might run like this. On the first working day, the workflow opens the period checklist and assigns tasks: receipts matched, payroll journal posted, depreciation run, prepayments released, intercompany balances agreed. Each owner gets a reminder with a link to what they need, and the checklist updates as items are ticked off.',
      'Meanwhile, the routine entries are prepared. The monthly release of a twelve-month insurance prepayment is drafted from the schedule, the accrual for an unbilled utility is estimated from recent bills, and both sit in a review queue with their workings attached. The finance manager reviews, adjusts if needed and approves. By the time the close meeting happens, the conversation is about the exceptions, not the routine.',
    ],
    points: [
      { title: 'Checklist Kick-Off', description: 'The close starts on schedule with tasks, owners and due dates already in place.' },
      { title: 'Prepared Journals', description: 'Recurring entries are drafted with workings and wait for a reviewer’s approval.' },
      { title: 'Open-Item Summary', description: 'Unmatched payments and uncoded transactions are listed so nothing is forgotten.' },
      { title: 'Sign-Off Record', description: 'Each step records who completed or approved it, building a clear trail for the period.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Where This Fits',
      heading: 'Accounting Automation vs Bookkeeping vs Financial Automation',
      accentWords: 3,
      paragraphs: [
        'These areas overlap, so it helps to separate them by stage. Bookkeeping is the daily recording: gathering documents, entering transactions and keeping records complete. That is the focus of [AI bookkeeping software](/products/ai-finance-accounting/ai-bookkeeping-software). Accounting automation, this page, works on those records afterwards, coding them properly, reconciling them and preparing the entries and checks that make up the close.',
        'Wider still is the whole finance function: data flowing between CRM, billing and accounting, customer payment follow-ups, approvals and recurring reporting. If your problem spans several systems and teams rather than the ledger itself, [AI financial automation](/products/ai-finance-accounting/ai-financial-automation) is the better fit.',
      ],
      points: [
        { title: 'Bookkeeping', description: 'Recording transactions day to day, attaching documents and keeping the books complete and organized.' },
        { title: 'Accounting Automation', description: 'Coding against the chart of accounts, reconciliation matching, journal-entry preparation and the month-end close.' },
        { title: 'Financial Automation', description: 'The finance function end to end: cross-system data, AR follow-ups, approvals, reporting and visibility.' },
        { title: 'Invoices and Expenses', description: 'Document intake at the point of arrival, handled by the invoice processing and expense management pages.' },
      ],
    },
    {
      eyebrow: 'Accounting Data Processing',
      heading: 'Turning Messy Accounting Data Into Usable Records',
      accentWords: 3,
      paragraphs: [
        'A lot of accounting effort goes into preparing data before it can be used: cleaning an export from a payment platform, splitting a payout into fees and sales, or reshaping a payroll summary into the lines the ledger expects. These jobs are usually done in spreadsheets, and they are often repeated with minor changes every month.',
        'Automated, the workflow receives the file or pulls the data, applies the same transformation each time, checks the totals still agree, and produces a ready-to-review import or journal. When the format changes or the totals do not tie, it stops and tells someone instead of guessing.',
      ],
      points: [
        { title: 'Payout Breakdowns', description: 'Platform payouts, such as from Stripe, split into gross sales, fees and refunds for review.' },
        { title: 'Payroll Summaries', description: 'Provider reports reshaped into the journal lines and cost centres your ledger uses.' },
        { title: 'Spreadsheet Schedules', description: 'Prepayment, accrual and depreciation schedules updated and turned into draft entries.' },
        { title: 'Control Totals', description: 'Every transformation is checked against source totals, and differences stop the run.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Accounting Automation Is For',
    items: [
      { title: 'Small Businesses', description: 'Businesses with a part-time or single finance person who spends most of the month coding and matching.' },
      { title: 'Growing Companies', description: 'Companies whose transaction volume has outgrown a manual close but not yet justified a larger team.' },
      { title: 'Finance Managers and Controllers', description: 'Leads who want routine entries prepared so their time goes on review and analysis.' },
      { title: 'Accounting Firms', description: 'Practices processing coding, reconciliations and closes across many client files.' },
      { title: 'Multi-Entity Businesses', description: 'Groups that repeat the same close steps for several companies each month.' },
      { title: 'Spreadsheet-Heavy Teams', description: 'Teams whose schedules and reconciliations live in workbooks updated by hand.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Accounting Systems and Tools We Connect',
    paragraphs: [
      'We connect to accounting systems such as QuickBooks, Xero and NetSuite where they offer access, along with billing and payment tools such as Bill.com and Stripe, and the Excel or Google Sheets workbooks that hold your schedules. What can be connected in your setup, and whether entries can be posted directly or prepared as imports, is confirmed in the audit.',
      'Workflows run on n8n, Make or Zapier, with OpenAI, Claude or Gemini handling the reading and suggestion steps. Where financial data is sensitive, the workflow can be designed so it stays within your own environment.',
    ],
    groups: [
      { label: 'Accounting Systems', items: ['QuickBooks', 'Xero', 'NetSuite'] },
      { label: 'Billing and Payments', items: ['Bill.com', 'Stripe'] },
      { label: 'Spreadsheets', items: ['Excel', 'Google Sheets', 'Airtable'] },
      { label: 'Automation Platforms', items: ['n8n', 'Make', 'Zapier'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Automate Your Accounting With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We build accounting workflows inside your systems, around the review steps your accountants already rely on.',
    items: [
      { title: 'Review Built In', description: 'Every workflow prepares work for approval. Nothing reaches the ledger unseen.' },
      { title: 'Your Coding Conventions', description: 'Suggestions follow your chart of accounts and past decisions, not a generic template.' },
      { title: 'Tolerances You Set', description: 'Matching limits and variance thresholds are agreed with you and written into the design.' },
      { title: 'Stops When Unsure', description: 'Failed totals, unknown formats and low-confidence suggestions halt and alert a person.' },
      { title: 'Tested on Real Periods', description: 'Workflows are run against a past month’s data and compared with what your team actually did.' },
      { title: 'Yours to Keep', description: 'You own the workflows and documentation, and pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Automate Your First Accounting Workflow',
    intro:
      'We usually start with the step that takes your team the most time each month, often coding or reconciliation, and prove it on a past period before it touches live books.',
    steps: [
      { title: 'Free Audit', description: 'We review your chart of accounts, coding habits, reconciliations and close checklist.' },
      { title: 'Workflow Design', description: 'Rules, tolerances, review steps and exception handling are written down and agreed.' },
      { title: 'Build', description: 'The workflow is built on your chosen platform and connected to your accounting tools.' },
      { title: 'Back-Test', description: 'It is run on a closed period, and its suggestions are compared with your actual entries.' },
      { title: 'Supervised Live Run', description: 'Your team reviews every suggestion closely through the first live close.' },
      { title: 'Handover', description: 'You receive the workflow, account access and documentation of how it works.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline.',
  },

  cta: {
    bandHeading: 'Find the accounting step worth automating first',
    heading: 'Spend the Close Reviewing, Not Re-Keying',
    description:
      'Book a free, no-obligation accounting automation audit. We will look at how your team codes, reconciles and closes today, and show you which steps can be prepared automatically for review.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Accounting Automation: Common Questions',
  faqSideText: 'Wondering which parts of your close could be prepared automatically? Book a free audit and we will walk through it with you.',
  faqs: [
    {
      question: 'What is AI accounting automation?',
      answer:
        'It is the use of workflows and AI to prepare the repetitive work of the accounting cycle, such as coding transactions, matching payments to invoices, drafting recurring journals and running the close checklist. Your accountants review and approve the results before anything is posted.',
    },
    {
      question: 'Can AI do accounting on its own?',
      answer:
        'No, and we do not build it to. AI can suggest codes and matches and draft routine entries, but it can make mistakes and has no professional responsibility for the accounts. A qualified person reviews its work and makes the final decisions.',
    },
    {
      question: 'How is accounting automation different from bookkeeping automation?',
      answer:
        'Bookkeeping automation focuses on daily recording and keeping records complete and organized. Accounting automation works on those records afterwards, coding them against the chart of accounts, reconciling them and preparing the entries and checks for the period close.',
    },
    {
      question: 'Will the automation post journal entries automatically?',
      answer:
        'Journal entries are prepared as drafts for review. Whether an approved entry is then posted directly or imported by your team depends on what your accounting system allows, which we confirm during the audit.',
    },
    {
      question: 'How does automated reconciliation matching handle partial payments?',
      answer:
        'Exact matches are handled by rules. For partial, combined or near matches, AI proposes a match using references and remittance details, the difference is checked against your tolerance, and a person approves or rejects it. Anything outside tolerance stays open.',
    },
    {
      question: 'Does this connect to our bank?',
      answer:
        'We do not provide bank feeds. Many accounting systems already import bank transactions through their own features, and our workflows work with the transactions and statements that are already in your system or exported from it.',
    },
    {
      question: 'Can it learn our coding rules?',
      answer:
        'Suggestions are based on your chart of accounts, the rules you agree with us and how similar transactions were coded before. When your team corrects a suggestion, that correction can be fed back into the rules or examples the workflow uses.',
    },
    {
      question: 'Is this suitable for accounting firms with many clients?',
      answer:
        'Yes. The same workflow pattern can be set up for many client files, each with its own chart of accounts, rules and reviewers, so one client’s conventions never leak into another’s.',
    },
    {
      question: 'Is this accounting software we have to switch to?',
      answer:
        'No. We build on your existing accounting system and an automation platform you own. You keep your current tools, pay platform and AI usage costs directly and own the workflows.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your coding, reconciliation and close process, agree the first workflow and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
