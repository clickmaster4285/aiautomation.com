// content/products/ai-finance-accounting.ts
// Copy + SEO for /products/ai-finance-accounting (category parent).
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities stated elsewhere on the site: AI and OCR extraction of invoice, receipt and form data;
//   validation against purchase orders and expected values; approval routing by amount, department or vendor;
//   payment reminders and AP/AR status tracking; transaction matching for reconciliation with exceptions flagged
//   to a person; recurring reports from live data; capture, categorization and routing of expenses and receipts;
//   syncing CRM, billing and accounting data; spreadsheet-heavy workflow automation; human-in-the-loop at every
//   costly step; data kept in the client’s environment where sensitivity requires.
// - Finance systems named here are the ones named on the site: QuickBooks, Xero, NetSuite, Bill.com, Stripe and
//   spreadsheets. Connections are always phrased as "where they offer access; confirmed in the audit".
// - NOT Clickmasters features (general industry context only, clearly framed): sending or executing payments,
//   automatic reimbursement, bank feeds or bank synchronization, corporate card integrations, tax filing, audit or
//   compliance certification, guaranteed error-free books. Never say AI replaces accountants, bookkeepers or staff.
// - No statistics, percentages, hours-saved figures, prices, customer names, testimonials, case results,
//   guarantees, uptime, certifications or ongoing-support promises.
// - Clickmasters designs and builds automation inside the client’s existing tools — not a standalone SaaS app.
//   The client pays platform and AI usage costs directly and owns the workflows and documentation.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.
// The five child pages are linked from the `related` grid, separately from those five.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_FINANCE_ACCOUNTING_PATH = '/products/ai-finance-accounting';

export const aiFinanceAccountingSeo: HubSeo = {
  name: 'AI Finance & Accounting',
  path: AI_FINANCE_ACCOUNTING_PATH,
  title: 'AI Finance and Accounting Automation | Clickmasters',
  description:
    'AI finance and accounting automation built in the tools you use: invoice capture, expense routing, reconciliation matching and reports, with people approving.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Finance & Accounting', path: AI_FINANCE_ACCOUNTING_PATH },
  ],
};

export const aiFinanceAccountingKeywords = [
  'AI finance and accounting automation',
  'finance automation',
  'accounting automation software',
  'AI for finance teams',
  'AP automation',
  'month-end close automation',
  'automated reconciliation matching',
  'finance workflow automation',
  'AI accounting tools for small business',
  'finance automation agency',
  'QuickBooks and Xero automation',
  'how to automate finance processes',
  'what finance tasks can AI automate',
];

// The five contextual internal links used in the copy below (all verified to resolve).
export const internalLinks = [
  { anchor: 'automation for finance and accounting teams', href: '/industries/finance-accounting', section: 'What Is AI Finance and Accounting Automation?' },
  { anchor: 'invoice automation solutions', href: '/solutions/invoice-automation', section: 'Invoices, Expenses and the Paper Trail (spotlight)' },
  { anchor: 'document automation', href: '/solutions/document-automation', section: 'Invoices, Expenses and the Paper Trail (spotlight)' },
  { anchor: 'recurring financial reporting automation', href: '/solutions/reporting-automation', section: 'Financial Workflow Automation Beyond Data Entry (extras)' },
  { anchor: 'robotic process automation', href: '/services/robotic-process-automation', section: 'Finance Systems We Connect' },
] as const;

export const aiFinanceAccounting: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'AI Finance & Accounting',
    heading: 'AI Finance and Accounting Automation That Keeps People in Control of the Numbers',
    accentWords: 4,
    subheading:
      'Clickmasters builds finance automation inside the accounting, billing and spreadsheet tools you already use. AI reads the invoices, receipts and emails, workflows move the data and chase the approvals, and your team signs off on every step that touches money.',
    primaryCta: { text: 'Book a Free Finance Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'Hand pressing a glowing Automation control surrounded by icons for people, analytics, charts and a dollar payment screen, representing AI finance and accounting automation',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Invoice capture', 'Expense routing', 'Reconciliation matching', 'Approval workflows', 'AP and AR tracking', 'Recurring finance reports'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is AI Finance and Accounting Automation?',
    paragraphs: [
      'AI finance and accounting automation uses software to handle the repeatable work that sits between source documents and finished numbers. A supplier invoice arrives as a PDF in accounts@, a receipt is forwarded from a phone, a customer payment lands in Stripe. Instead of someone opening, reading and retyping each one, a workflow captures the details, checks them against your rules and puts them where they belong.',
      'Rules cover the predictable parts, such as routing any invoice over a set amount to the finance director. AI covers the parts rules cannot, such as reading a scanned invoice in an unfamiliar layout, suggesting the right expense category for a vague receipt, or spotting that a payment reference almost matches an open invoice. Your team still reviews, approves and owns the books.',
      'This page is the overview of our finance and accounting range. It explains where automation helps a finance function, where people must stay involved, and which of the five pages below fits your problem. For a view of how we work with finance businesses specifically, see our page on [automation for finance and accounting teams](/industries/finance-accounting).',
    ],
    problems: [
      'Invoices and receipts are keyed into the accounting system by hand, one at a time.',
      'Approvals sit in someone’s inbox while suppliers ask when they will be paid.',
      'Reconciliation means scrolling two lists side by side looking for matches.',
      'The month-end close depends on a spreadsheet checklist only one person understands.',
      'Customer, billing and accounting records disagree, and nobody is sure which is right.',
    ],
  },

  explainer: {
    eyebrow: 'Traditional Finance Operations',
    heading: 'Why Finance Teams Spend So Much Time Moving Data',
    paragraphs: [
      'Most finance teams are not short of skill. They are short of time, because a large share of the week goes on work that feeds the numbers rather than interpreting them: opening attachments, copying invoice totals, chasing a manager for a signature, matching a payment to the invoice it settles, and rebuilding last month’s report with this month’s figures.',
      'That work is also where errors creep in. A transposed digit on an invoice, a receipt coded to the wrong account, a payment matched to the wrong customer. Each mistake is small, but finding it later during the close costs far more than avoiding it at entry. And when volume grows, the manual load grows with it, so the team is hiring for data handling rather than for analysis.',
    ],
    points: [
      { title: 'Manual Entry', description: 'Totals, dates, VAT or tax amounts and supplier details are retyped from documents into the ledger.' },
      { title: 'Approval Chasing', description: 'Invoices and expenses wait for sign-off, with reminders sent by hand or not at all.' },
      { title: 'Side-by-Side Matching', description: 'Payments, invoices and statements are reconciled by eye, line by line.' },
      { title: 'Late Surprises', description: 'Missing receipts and miscoded items surface during the close, when they are hardest to fix.' },
      { title: 'Disconnected Systems', description: 'CRM, billing, payment and accounting tools each hold part of the picture.' },
    ],
  },

  features: {
    eyebrow: 'AI-Assisted Accounting Workflows',
    heading: 'What Finance Automation Can Handle',
    intro:
      'Every capability is built in your existing finance stack and configured around your chart of accounts, approval limits and policies. Most projects combine several of them, with AI added only where documents or free text need reading.',
    items: [
      { title: 'Document Capture', description: 'Invoices, receipts and forms are collected from shared inboxes, upload folders and web forms in one place.' },
      { title: 'AI and OCR Extraction', description: 'Supplier, date, totals, tax and line items are read from PDFs, scans and photos across different layouts.' },
      { title: 'Validation Checks', description: 'Extracted values are compared with purchase orders, expected amounts and supplier records before anything moves on.' },
      { title: 'Approval Routing', description: 'Items go to the right approver by amount, department or vendor, with reminders when they stall.' },
      { title: 'Categorization', description: 'Expenses and transactions get a suggested account or category, ready for a person to confirm.' },
      { title: 'Reconciliation Matching', description: 'Payments and records are matched against invoices and statements, with mismatches flagged to a person.' },
      { title: 'AP and AR Tracking', description: 'Invoice statuses are tracked, and payment reminders go to customers on the schedule you set.' },
      { title: 'Recurring Reports', description: 'Weekly and monthly finance reports are built from live data instead of fresh exports each time.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How a Finance Workflow Runs From Document to Ledger',
    intro:
      'Whether the input is a supplier invoice, an employee receipt or a customer payment, most finance automations follow the same controlled path.',
    steps: [
      { title: 'Capture', description: 'A document or transaction arrives through an inbox, upload folder, form or connected system, and the workflow picks it up.' },
      { title: 'Read', description: 'AI and OCR extraction pull the key fields out of the document, whatever its layout, and attach the original file.' },
      { title: 'Check', description: 'Values are validated against purchase orders, supplier records, policies and expected amounts. Anything odd is flagged.' },
      { title: 'Route for Approval', description: 'The item goes to the right person based on your rules. Nothing that affects money moves on without a decision.' },
      { title: 'Record', description: 'Once approved, the data is posted to the accounting system or spreadsheet where access allows, with the source document linked.' },
      { title: 'Track and Report', description: 'Statuses stay visible, exceptions sit in a review queue, and the figures feed your recurring reports.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Finance Teams and Business Owners Gain',
    intro:
      'The value is different depending on where you sit. Finance teams get their time back from data handling; owners get clearer, earlier answers about the business.',
    items: [
      { title: 'Less Retyping for the Team', description: 'Invoice and receipt details are captured once and reused, so staff check data instead of entering it.' },
      { title: 'Problems Caught at Entry', description: 'Validation runs as documents arrive, so mismatches are handled the same day rather than at month-end.' },
      { title: 'Faster, Visible Approvals', description: 'Approvers get the request with the document attached, and everyone can see what is still waiting.' },
      { title: 'A Calmer Close', description: 'With items captured, coded and matched through the month, the close starts from a cleaner position.' },
      { title: 'Clearer Numbers for Owners', description: 'Recurring reports arrive on schedule from live data, so decisions rest on current figures.' },
      { title: 'Growth Without Matching Admin', description: 'More invoices and transactions are absorbed by the workflow rather than by extra manual hours.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Accuracy, Controls and Oversight',
    heading: 'Where AI Helps Finance and Where People Decide',
    paragraphs: [
      'In finance, the question is not whether AI can read an invoice. It usually can. The question is what happens when it reads one wrongly, or when a figure looks right but should not be paid. That is why every workflow we build pairs AI with validation rules, approval steps and a review queue, so a person sees anything uncertain, unusual or costly before it reaches the books.',
      'AI is treated as a fast, well-organized assistant that prepares the work. Your team keeps the authority: they set the thresholds, approve payments through their existing process, decide on exceptions and sign off the close. Where data is sensitive, workflows can be designed to keep it inside your own environment.',
    ],
    aiDoes: [
      'Reads invoices, receipts and forms across layouts',
      'Suggests accounts and categories for transactions',
      'Proposes matches between payments and invoices',
      'Flags duplicates, mismatches and missing fields',
      'Drafts payment reminders and report commentary',
      'Summarizes what is waiting for review',
    ],
    peopleDo: [
      'Set approval limits, policies and coding rules',
      'Approve invoices, expenses and payments',
      'Resolve exceptions and unmatched items',
      'Review and sign off the period close',
    ],
  },

  spotlight: {
    eyebrow: 'Invoices and Expenses',
    heading: 'Invoices, Expenses and the Paper Trail',
    paragraphs: [
      'Supplier invoices and employee expenses are where most finance teams feel the manual load first. Picture a supplier invoice for packaging arriving as a PDF. Automated, the workflow reads the supplier, amounts and line items, checks them against the matching purchase order, and sends it to the operations manager because it is over their sign-off limit. The approved invoice is recorded with the PDF attached. Our [invoice automation solutions](/solutions/invoice-automation) page covers this flow in more depth.',
      'Expenses follow a similar pattern with a different starting point: a photo of a taxi receipt, or a forwarded hotel confirmation. The receipt is read, categorized and routed to the employee’s manager, and missing receipts are chased automatically. Contracts, statements and other finance paperwork can be handled the same way through [document automation](/solutions/document-automation).',
    ],
    points: [
      { title: 'Supplier Invoices', description: 'Captured from the inbox, read, checked against purchase orders and routed for approval before posting.' },
      { title: 'Employee Expenses', description: 'Receipts submitted by photo, email or form, categorized and sent to the right manager.' },
      { title: 'Duplicate Checks', description: 'Invoices with a familiar supplier, amount and reference are held for a person to confirm.' },
      { title: 'Linked Source Files', description: 'Each approved record keeps its original document attached, ready for questions later.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Bookkeeping and Records',
      heading: 'Keeping Books Complete Between Closes',
      accentWords: 3,
      paragraphs: [
        'Good accounting depends on good records. Day to day, that means every transaction has a category, every entry has its supporting document, and anything unclear is raised before it piles up. Much of that is routine sorting and filing, which is exactly the kind of work automation handles well.',
        'An automated routine can gather documents from inboxes and folders, suggest categories, attach receipts to entries and produce a short list of items that still need an answer. Your bookkeeper or accountant works through that list instead of hunting for gaps at the end of the quarter. The records are better prepared, but the judgment stays with them.',
      ],
      points: [
        { title: 'Source Documents Gathered', description: 'Receipts, invoices and statements are collected from the places they arrive and filed consistently.' },
        { title: 'Uncategorized Items Flagged', description: 'Transactions without a clear category land in a review list rather than a suspense account.' },
        { title: 'Supporting Files Linked', description: 'Entries carry the document that explains them, so queries are quick to answer.' },
        { title: 'Ready for the Accountant', description: 'Records are organized so the year-end or quarter-end review starts from a tidy position.' },
      ],
    },
    {
      eyebrow: 'Financial Workflow Automation',
      heading: 'Financial Workflow Automation Beyond Data Entry',
      accentWords: 3,
      paragraphs: [
        'Finance does not stop at the ledger. Data also has to flow between the CRM where deals close, the billing tool that raises invoices and the accounting system that records them. When those systems drift apart, someone ends up reconciling them by hand. Syncing them keeps customer, invoice and payment details consistent across the stack.',
        'On top of that sit the recurring jobs: customer payment reminders, AP and AR status updates, close checklists and the management pack. For teams whose main pain is reporting, our page on [recurring financial reporting automation](/solutions/reporting-automation) explains how reports are rebuilt from live data on a schedule.',
      ],
      points: [
        { title: 'CRM to Billing to Accounting', description: 'A closed deal or signed order produces consistent records in each system that needs them.' },
        { title: 'Payment Reminders', description: 'Customers with overdue invoices receive polite reminders on your schedule, with replies routed to the team.' },
        { title: 'Close Coordination', description: 'Month-end tasks are assigned, tracked and chased, so the checklist is not held in one person’s head.' },
        { title: 'Spreadsheet-Heavy Processes', description: 'Workbooks that are updated by hand each week are filled and checked by a workflow instead.' },
      ],
    },
    {
      eyebrow: 'Which Page Fits',
      heading: 'Match Your Finance Problem to the Right Page',
      accentWords: 3,
      paragraphs: [
        'Finance automation covers a lot of ground, so the five pages in this range are split by problem. If you know where the time goes, start with the page that matches it. If the pain is spread across the function, the broader financial automation page is the better starting point.',
        'Most businesses end up using more than one of these. A common order is invoices or expenses first, because the volume is visible, followed by reconciliation and reporting once the data is flowing cleanly.',
      ],
      points: [
        { title: '“We type invoices in by hand”', description: 'AI Invoice Processing Software: supplier invoice intake, extraction, matching, approvals and posting.' },
        { title: '“Receipts and expense claims are chaos”', description: 'AI Expense Management Software: receipt capture, categorization, policy flags and manager approval.' },
        { title: '“Coding and reconciliation take days”', description: 'AI Accounting Automation: categorization against the chart of accounts, matching, journal prep and the close.' },
        { title: '“Our records are never complete”', description: 'AI Bookkeeping Software: day-to-day recording, organized documents and books ready for the accountant.' },
        { title: '“Finance data lives in five systems”', description: 'AI Financial Automation: data flow across CRM, billing and accounting, AR follow-ups, approvals and reporting.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Who Uses AI for Finance Teams and Accounting Work',
    items: [
      { title: 'Small Businesses', description: 'Owners and office managers who handle the books alongside everything else and want the admin to shrink.' },
      { title: 'Growing Companies', description: 'Businesses whose invoice and transaction volume is rising faster than the finance team.' },
      { title: 'In-House Finance Teams', description: 'Controllers and finance managers who want AP, expenses and reconciliation to run with fewer manual steps.' },
      { title: 'Accounting Firms', description: 'Practices that gather documents from many clients and want them organized before the work begins.' },
      { title: 'Operations-Led Businesses', description: 'Companies where purchase approvals and supplier invoices cross between operations and finance.' },
      { title: 'Subscription and Service Firms', description: 'Businesses whose CRM, billing and accounting records need to stay in step every month.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Finance Systems We Connect',
    paragraphs: [
      'We connect to accounting, billing and payment tools such as QuickBooks, Xero, NetSuite, Bill.com and Stripe where they offer access, along with the spreadsheets most finance teams still rely on. What can be connected in your stack, and how, is confirmed in the audit rather than promised up front.',
      'Workflows are built on platforms such as n8n, Make or Zapier, with OpenAI, Claude or Gemini handling the reading steps. For older desktop systems with no usable integration, [robotic process automation](/services/robotic-process-automation) bots can sometimes enter or extract data through the screen instead.',
    ],
    groups: [
      { label: 'Accounting and Billing', items: ['QuickBooks', 'Xero', 'NetSuite', 'Bill.com', 'Stripe'] },
      { label: 'Spreadsheets and Data', items: ['Excel', 'Google Sheets', 'Airtable'] },
      { label: 'Automation Platforms', items: ['n8n', 'Make', 'Zapier'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Custom', items: ['APIs', 'Webhooks', 'Custom code', 'RPA bots'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Finance Automation With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency, not a finance software vendor. We design and build automation inside the finance tools you already pay for, around the controls you already trust.',
    items: [
      { title: 'Controls Designed In', description: 'Approval steps, validation rules and review queues are part of the first design, not added later.' },
      { title: 'Your Stack, Not Ours', description: 'We build in your accounting system, spreadsheets and automation platform, so there is no new tool to adopt.' },
      { title: 'Honest About Limits', description: 'We tell you which steps AI handles reliably and which should stay with a person.' },
      { title: 'Exceptions Handled Properly', description: 'Unclear documents and failed matches are sent to a person with context, never skipped quietly.' },
      { title: 'Tested With Your Documents', description: 'Workflows are checked against your real invoices, receipts and edge cases before going live.' },
      { title: 'You Own Everything', description: 'Workflows, accounts and documentation are handed over, and you pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Automate Your First Finance Process',
    intro:
      'We start with the finance process that takes the most manual time, prove it with your own documents, and expand from there. Nothing is built until you approve the plan.',
    steps: [
      { title: 'Free Audit', description: 'We review how invoices, expenses, transactions and reports move through your team today.' },
      { title: 'Process Map', description: 'Sources, approval limits, coding rules, exceptions and owners are written down and agreed.' },
      { title: 'Build', description: 'Workflows are built in your tools, with AI steps only where documents or text need reading.' },
      { title: 'Test', description: 'Every path is run with real samples, including blurry scans, duplicates and unusual amounts.' },
      { title: 'Supervised Go-Live', description: 'Your team reviews the first live runs closely before the workflow handles full volume.' },
      { title: 'Handover', description: 'You receive the workflows, account access and documentation, ready for your team to own.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find the finance task worth automating first',
    heading: 'Spend Less Time Moving Numbers and More Time Using Them',
    description:
      'Book a free, no-obligation finance automation audit. We will look at how documents and transactions reach your books today, show you where automation would help most, and be clear about where people should stay in the loop.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  related: {
    eyebrow: 'Finance & Accounting Automation',
    heading: 'Five Ways to Automate Finance Work',
    intro:
      'Each page focuses on one part of the finance function, from supplier invoices to the whole flow of financial data.',
    items: [
      {
        title: 'AI Accounting Automation',
        description: 'Transaction coding, reconciliation matching, journal-entry preparation and month-end close checklists, all reviewed by your team.',
        href: '/products/ai-finance-accounting/ai-accounting-automation',
      },
      {
        title: 'AI Invoice Processing Software',
        description: 'Supplier invoices captured, read, checked against purchase orders and routed for approval before posting.',
        href: '/products/ai-finance-accounting/ai-invoice-processing-software',
      },
      {
        title: 'AI Expense Management Software',
        description: 'Receipts captured and categorized, policy issues flagged and expense claims routed to the right manager.',
        href: '/products/ai-finance-accounting/ai-expense-management-software',
      },
      {
        title: 'AI Bookkeeping Software',
        description: 'Day-to-day records kept organized and complete, with documents linked and unclear items flagged early.',
        href: '/products/ai-finance-accounting/ai-bookkeeping-software',
      },
      {
        title: 'AI Financial Automation',
        description: 'Financial operations end to end: data flowing between CRM, billing and accounting, follow-ups, approvals and reporting.',
        href: '/products/ai-finance-accounting/ai-financial-automation',
      },
    ],
  },

  faqHeading: 'AI Finance and Accounting Automation: Common Questions',
  faqSideText: 'Not sure which part of your finance work to automate first? Book a free audit and we will map it with you.',
  faqs: [
    {
      question: 'What is AI finance and accounting automation?',
      answer:
        'It is the use of workflows and AI to handle the repetitive parts of finance work, such as capturing invoices and receipts, routing approvals, suggesting categories, matching transactions and building recurring reports. Clickmasters builds it inside the accounting and spreadsheet tools you already use, with people approving anything that affects money.',
    },
    {
      question: 'Which finance tasks can AI automate?',
      answer:
        'The best candidates are high-volume, rule-based tasks with a document or data trail: supplier invoice capture, expense receipts, approval routing, payment reminders, reconciliation matching, data syncing between systems and recurring reports. Decisions about what to pay, how to treat unusual items and when to close a period stay with your team.',
    },
    {
      question: 'Will AI replace our accountant or bookkeeper?',
      answer:
        'No. Automation takes over the sorting, reading, retyping and chasing so your accountant or bookkeeper can spend their time reviewing, advising and resolving the items that need a professional view. Their judgment remains the final check on the books.',
    },
    {
      question: 'Does the automation send payments?',
      answer:
        'We do not build workflows that execute payments on their own. Invoices are captured, checked and approved, and the payment itself stays with your team and your existing payment process. Many businesses prefer to keep that final step manual as a control.',
    },
    {
      question: 'How accurate is AI at reading invoices and receipts?',
      answer:
        'Modern AI and OCR extraction handle most clear documents well, but no system reads every scan perfectly. That is why extracted values are validated against purchase orders and expected amounts, and anything uncertain or inconsistent is sent to a person before it is recorded.',
    },
    {
      question: 'Which accounting systems can you connect to?',
      answer:
        'We connect to tools such as QuickBooks, Xero, NetSuite, Bill.com and Stripe where they offer access, as well as Excel and Google Sheets. What can be connected in your setup, and how, is confirmed during the audit.',
    },
    {
      question: 'Is our financial data kept secure?',
      answer:
        'Workflows run in accounts you control, use only the access they need, and log what they do. Where sensitivity requires it, they can be designed so financial data stays within your own environment. We agree these requirements with you during scoping.',
    },
    {
      question: 'Is this accounting automation software we subscribe to?',
      answer:
        'No. Clickmasters is an agency that builds automation on platforms you own, such as n8n, Make or Zapier, connected to your finance tools. You pay platform and AI usage costs directly, and the workflows and documentation belong to you.',
    },
    {
      question: 'Where should a small business start?',
      answer:
        'Usually with whichever document causes the most retyping, often supplier invoices or expense receipts. A single well-built workflow there tends to show quickly whether automation suits the rest of your finance work.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your finance processes, agree the first one to automate and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
