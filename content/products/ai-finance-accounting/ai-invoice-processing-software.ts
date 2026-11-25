// content/products/ai-finance-accounting/ai-invoice-processing-software.ts
// Copy + SEO for /products/ai-finance-accounting/ai-invoice-processing-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is supplier (AP) invoices: intake from inbox/uploads, AI and OCR extraction of header and
//   line items, classification (invoice / credit note / statement), duplicate checks, PO and receipt
//   matching, approval routing, an exception queue and posting to the accounting system after approval.
//   Employee expenses belong to the AI Expense Management sibling; coding, journals and reconciliation to
//   AI Accounting Automation; cross-system finance operations to AI Financial Automation.
// - Payment execution is OUT of scope: paying suppliers stays with the client’s team and existing payment
//   process. Do not add bank feeds, automatic payments, tax filing or compliance/audit certification claims.
// - Finance systems named here are the ones named in site sources: QuickBooks, Xero, NetSuite, Bill.com,
//   plus spreadsheets. Connections are always phrased as "where they offer access; confirmed in the audit".
// - Platforms: n8n, Make, Zapier, Airtable; AI layer OpenAI / Claude / Gemini; APIs, webhooks, custom code, RPA.
// - No statistics, percentages, hours-saved figures, prices, testimonials, customer names, guarantees or
//   ongoing-support promises. AI supports the AP team; it does not replace it.
// - Clickmasters builds on platforms the client owns — it is not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_INVOICE_PROCESSING_SOFTWARE_PATH = '/products/ai-finance-accounting/ai-invoice-processing-software';

export const aiInvoiceProcessingSoftwareSeo: HubSeo = {
  name: 'AI Invoice Processing Software',
  path: AI_INVOICE_PROCESSING_SOFTWARE_PATH,
  title: 'AI Invoice Processing Software for AP Teams | Clickmasters',
  description:
    'AI invoice processing software for supplier invoices: inbox intake, line-item extraction, duplicate checks, PO matching and approval routing before posting.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Finance & Accounting', path: '/products/ai-finance-accounting' },
    { name: 'AI Invoice Processing Software', path: AI_INVOICE_PROCESSING_SOFTWARE_PATH },
  ],
};

export const aiInvoiceProcessingSoftwareKeywords = [
  'AI invoice processing software',
  'invoice processing automation',
  'accounts payable automation',
  'AP invoice automation',
  'invoice data extraction',
  'OCR invoice processing',
  'purchase order invoice matching',
  'three-way matching automation',
  'duplicate invoice detection',
  'invoice approval workflow',
  'automated invoice processing for small business',
  'how to automate supplier invoice processing',
  'what is AI invoice processing',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI finance and accounting automation', href: '/products/ai-finance-accounting', section: 'What Is AI Invoice Processing Software?' },
  { anchor: 'invoice automation solutions', href: '/solutions/invoice-automation', section: 'What the Software Reads From Each Supplier Invoice (explainer)' },
  { anchor: 'document automation', href: '/solutions/document-automation', section: 'Where AI Reads and Where Your Team Decides' },
  { anchor: 'AI expense management software', href: '/products/ai-finance-accounting/ai-expense-management-software', section: 'Invoice Processing vs Expense Management vs Accounting Automation (extras)' },
  { anchor: 'AI accounting automation', href: '/products/ai-finance-accounting/ai-accounting-automation', section: 'Invoice Processing vs Expense Management vs Accounting Automation (extras)' },
] as const;

export const aiInvoiceProcessingSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'AI Invoice Processing Software',
    heading: 'AI Invoice Processing Software: Checked, Approved and Posted',
    accentWords: 3,
    subheading:
      'We build AI invoice processing inside the tools your finance team already uses. Supplier invoices are collected from the inbox, read line by line, checked for duplicates, matched to purchase orders and routed for approval, then posted to your accounting system once someone signs them off. Paying the supplier stays with your team.',
    primaryCta: { text: 'Book a Free Invoice Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'A hand pressing a glowing Automation control surrounded by icons for people, analytics, charts and a dollar payment screen, representing automated supplier invoice processing',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Inbox intake', 'Header and line-item extraction', 'Duplicate checks', 'PO matching', 'Approval routing', 'Exception queue'],
  },

  intro: {
    eyebrow: 'Accounts Payable Without the Retyping',
    heading: 'What Is AI Invoice Processing Software?',
    paragraphs: [
      'AI invoice processing software handles everything between a supplier invoice arriving and that invoice being approved and recorded. A PDF lands in accounts@yourcompany.com, a scanned paper invoice is uploaded by the office manager, or a contractor sends a file through an upload form. The system reads it, pulls out the supplier, invoice number, dates, totals, tax and line items, and checks them before anyone types a thing.',
      'The AI matters because supplier invoices do not share a layout. One vendor prints the PO number in the header, another tucks it into a footnote, and a third sends a two-page statement that looks like an invoice but is not one. AI and OCR extraction read each document as it is, rather than relying on a fixed template per supplier, and any field the model is unsure about is shown to a person instead of guessed.',
      'This page covers supplier invoices on the accounts payable side. It is one part of our wider [AI finance and accounting automation](/products/ai-finance-accounting) work, which also covers employee expenses, bookkeeping, accounting tasks and the finance function as a whole.',
    ],
    problems: [
      'Invoices arrive in a shared inbox and are keyed into the accounting system one field at a time.',
      'The same invoice is entered twice because the supplier emailed it and then sent a reminder copy.',
      'Approvers get forwarded PDFs and reply “OK” in an email thread nobody can find later.',
      'Matching an invoice to its purchase order means opening three systems and a spreadsheet.',
      'Month-end arrives with invoices still sitting unread in someone’s inbox.',
    ],
  },

  explainer: {
    eyebrow: 'Anatomy of an Invoice',
    heading: 'What the Software Reads From Each Supplier Invoice',
    paragraphs: [
      'Accurate processing starts with knowing which details matter and where they tend to go wrong. Header fields tell you who is billing you and for how much. Line items tell you what you are actually paying for, and they are where most differences from the purchase order show up.',
      'Extraction is only useful when the output is checked. Every field the AI reads is validated against your rules and existing records before the invoice moves on. Our [invoice automation solutions](/solutions/invoice-automation) page explains the wider approach, including how documents from different sources are brought into a single flow.',
    ],
    points: [
      { title: 'Supplier Details', description: 'Supplier name, address and tax or registration number, matched to the vendor record you already hold.' },
      { title: 'Invoice Identifiers', description: 'Invoice number, invoice date, due date and any PO or contract reference printed on the document.' },
      { title: 'Amounts and Tax', description: 'Net amount, tax lines and total, recalculated so the figures add up before anything is approved.' },
      { title: 'Line Items', description: 'Description, quantity, unit price and line total for each item, ready to compare against the order.' },
      { title: 'Document Type', description: 'Whether the file is an invoice, a credit note, a statement or a remittance, so each goes to the right place.' },
      { title: 'Payment Terms and Details', description: 'Terms and bank details as printed, captured for your records and flagged for review if they differ from what you hold.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our AI Invoice Processing Software Handles',
    intro:
      'Each build is configured around your suppliers, approval rules and accounting system. These are the capabilities we set up, used as much or as little as your invoice volume needs.',
    items: [
      { title: 'Inbox and Upload Intake', description: 'Invoices are collected from a dedicated mailbox, a shared folder or an upload form, so nothing depends on someone checking email.' },
      { title: 'AI and OCR Extraction', description: 'Header fields and line items are read from PDFs, scans and photos across supplier layouts, including multi-page invoices.' },
      { title: 'Document Classification', description: 'Invoices, credit notes, statements and unrelated attachments are told apart and sent down separate paths.' },
      { title: 'Duplicate Checks', description: 'Supplier, invoice number, amount and date are compared with what has already been received or posted, and likely repeats are held.' },
      { title: 'PO and Receipt Matching', description: 'Invoice lines are compared with the purchase order and, where you record deliveries, goods received, within tolerances you set.' },
      { title: 'Vendor Validation', description: 'Each invoice is matched to an existing vendor record. Unknown suppliers and changed details are flagged before approval.' },
      { title: 'Approval Routing', description: 'Invoices go to the right approver by amount, department, cost center or vendor, with reminders when they wait too long.' },
      { title: 'Exception Queue', description: 'Mismatches, low-confidence reads and missing references collect in one queue, each showing why it was stopped.' },
      { title: 'Posting After Approval', description: 'Approved invoices are created as bills in your accounting system with the agreed coding, ready for your normal payment run.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Supplier Invoice, From Inbox to Approved Bill',
    intro:
      'Here is a typical example: a packaging supplier emails a two-page invoice against an open purchase order. Most supplier invoices follow the same route, with fewer steps when no PO is involved.',
    steps: [
      { title: 'Arrive', description: 'The PDF lands in accounts@ and the workflow picks it up, saving the original file with a reference so it can always be traced.' },
      { title: 'Read', description: 'AI and OCR extraction pull out the supplier, invoice number, PO reference, totals, tax and all twelve line items.' },
      { title: 'Check', description: 'The invoice number is compared with earlier invoices from that supplier, and the total is recalculated from the lines.' },
      { title: 'Match', description: 'Lines are compared with the purchase order. Eleven agree; one shows a higher unit price than ordered, beyond your tolerance.' },
      { title: 'Route', description: 'The invoice goes to the operations manager who raised the PO, with the price difference highlighted and the PDF attached.' },
      { title: 'Post', description: 'Once she approves it, the bill is created in your accounting system with the agreed coding. Payment then follows your usual process.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes for Your Accounts Payable Team',
    intro:
      'The aim is fewer touches per invoice and tighter control over what gets approved, not a faster way to pay invoices nobody has checked.',
    items: [
      { title: 'Less Keying', description: 'Invoice details are captured once from the document instead of typed in by hand.' },
      { title: 'Duplicates Caught Early', description: 'Repeat submissions are held before approval rather than discovered after payment.' },
      { title: 'Approvals With Context', description: 'Approvers see the invoice, the matching PO and the reason it reached them in one place.' },
      { title: 'A Visible Backlog', description: 'Anyone in finance can see which invoices are waiting, with whom and for how long.' },
      { title: 'A Calmer Month-End', description: 'Fewer invoices are still unprocessed when the books are being closed.' },
      { title: 'A Decision Trail', description: 'Who approved what, when and against which document is recorded for later reference.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI Plus Controls',
    heading: 'Where AI Reads and Where Your Team Decides',
    paragraphs: [
      'AI is useful for the reading: turning a cluttered PDF into structured fields, recognizing that a document is a credit note rather than an invoice, or seeing that a line described as “corrugated cartons 400mm” is the same item the purchase order calls “box, large”. Fixed rules then do the checking, because tolerances, approval limits and duplicate logic should behave the same way every time.',
      'Decisions that commit money stay with people. Nothing is approved or posted without the sign-off you define, and low-confidence reads go to a person rather than passing through. Where invoices are part of a wider flow of contracts, delivery notes and forms, [document automation](/solutions/document-automation) can capture those supporting documents in the same way.',
    ],
    aiDoes: [
      'Reads header fields and line items across layouts',
      'Tells invoices from credit notes and statements',
      'Suggests the vendor match and expense coding',
      'Highlights differences from the purchase order',
      'Summarizes why an invoice was held',
      'Flags fields it could not read confidently',
    ],
    peopleDo: [
      'Set approval limits and matching tolerances',
      'Approve invoices and resolve exceptions',
      'Confirm new suppliers and changed bank details',
      'Release payments through your existing process',
    ],
  },

  spotlight: {
    eyebrow: 'Exception Handling',
    heading: 'An Exception Queue Instead of a Flagged Inbox',
    paragraphs: [
      'Most invoices are routine. The ones that cost time are the exceptions: an invoice with no PO reference, a quantity that does not match what was delivered, a supplier who has switched to a new template, or a total that does not add up. In a manual process these sit in someone’s inbox with a flag on them, and the context lives in that person’s head.',
      'We send every exception to a single queue, which can live in your accounting tool, a shared spreadsheet, Airtable or your team chat, depending on how your team works. Each item shows what was read, what it was checked against and why it stopped. Once someone resolves it, the invoice rejoins the normal flow at the right step instead of starting again.',
    ],
    points: [
      { title: 'Reason Attached', description: 'Every held invoice names the specific check that failed, such as a price variance or a missing PO.' },
      { title: 'Original Document Linked', description: 'The source PDF sits next to the extracted data, so nobody has to dig through email to find it.' },
      { title: 'Owner Assigned', description: 'Exceptions go to the person who can resolve them, chosen by supplier, department or exception type.' },
      { title: 'Resume, Not Restart', description: 'Corrected invoices continue from where they stopped and keep their full history.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Matching',
      heading: 'Two-Way and Three-Way Matching, Explained',
      accentWords: 2,
      paragraphs: [
        'Matching is how you confirm that you are being billed for what you ordered and received. Two-way matching compares the invoice with the purchase order. Three-way matching adds the goods received record, so you only approve what has actually arrived. Which one fits depends on whether your business records deliveries somewhere the workflow can read.',
        'Not every invoice has a PO. Utilities, software subscriptions and professional services are often approved against a budget owner instead. We design separate paths for PO-backed and non-PO invoices, so neither is forced through rules meant for the other.',
      ],
      points: [
        { title: 'Two-Way Match', description: 'Invoice against purchase order: supplier, items, quantities and prices, within the tolerances you set.' },
        { title: 'Three-Way Match', description: 'Invoice against purchase order and goods received, where delivery records exist in a system we can connect to.' },
        { title: 'Non-PO Invoices', description: 'Routed to the budget owner or department head by supplier or category, with suggested coding for them to confirm.' },
        { title: 'Tolerances', description: 'Small rounding or freight differences can pass under a limit you choose. Anything beyond it is held for a person.' },
      ],
    },
    {
      eyebrow: 'Where This Fits',
      heading: 'Invoice Processing vs Expense Management vs Accounting Automation',
      accentWords: 2,
      paragraphs: [
        'Supplier invoices and employee expenses can look alike, since both start as a document showing money spent or owed. The difference is who incurred the cost. An invoice is a bill from a supplier to your business, usually tied to an order and paid on terms. An expense is something an employee has already paid for, backed by a receipt and checked against policy. That second case is covered by [AI expense management software](/products/ai-finance-accounting/ai-expense-management-software).',
        'Once an invoice is approved and posted, it becomes part of your accounting records. Coding transactions against the chart of accounts, preparing journal entries for review and matching records during reconciliation belong to [AI accounting automation](/products/ai-finance-accounting/ai-accounting-automation). Many finance teams start with supplier invoices because the documents are clear and the volume is predictable.',
      ],
      points: [
        { title: 'Choose Invoice Processing When', description: 'Supplier bills arrive by email or upload, often against purchase orders, and need checking and approval.' },
        { title: 'Choose Expense Management When', description: 'Employees submit receipts for things they bought, and each needs a policy check and manager sign-off.' },
        { title: 'Choose Accounting Automation When', description: 'The pain is coding, reconciliation and month-end tasks after documents are already recorded.' },
        { title: 'Payment Stays Separate', description: 'In every case, releasing supplier payments remains with your team and your existing payment process.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Invoice Processing Is Built For',
    items: [
      { title: 'AP Teams With Rising Volume', description: 'Teams whose supplier invoice count is growing faster than the hours available to key them in.' },
      { title: 'Finance Managers', description: 'Managers who want to see the AP backlog and approval status without chasing people for updates.' },
      { title: 'Businesses That Buy on POs', description: 'Distributors, manufacturers and contractors whose invoices should match what was ordered and delivered.' },
      { title: 'Multi-Site Organizations', description: 'Companies where invoices must reach different approvers by site, department or cost center.' },
      { title: 'Owners Who Approve Every Bill', description: 'Smaller businesses where the owner signs off invoices and wants each one presented clearly with its PO.' },
      { title: 'Accounting Firms', description: 'Firms processing supplier invoices for several clients, each with its own suppliers, coding and approvers.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Accounting Systems and Intake Channels We Connect',
    paragraphs: [
      'Invoice workflows connect your intake channels, your accounting system and the places approvers already work. We connect to QuickBooks, Xero, NetSuite and Bill.com where they offer access, and to spreadsheets where purchase orders or vendor lists are still kept. What can be connected in your stack, and how, is confirmed in the audit.',
      'Workflows run on platforms such as n8n, Make or Zapier, with models such as OpenAI, Claude or Gemini handling extraction and classification. Where invoices contain sensitive data, the workflow can be set up so that data stays within your own environment.',
    ],
    groups: [
      { label: 'Accounting Systems', items: ['QuickBooks', 'Xero', 'NetSuite', 'Bill.com'] },
      { label: 'Intake Channels', items: ['Shared mailbox', 'Upload forms', 'Cloud storage folders', 'Spreadsheets'] },
      { label: 'Workflow Platforms', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Connections', items: ['APIs', 'Webhooks', 'Custom code', 'RPA bots'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Automate Invoice Processing With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We build invoice workflows inside the accounting and automation tools you own, then hand them over with full documentation.',
    items: [
      { title: 'Your Rules, Written Down', description: 'Approval limits, tolerances and exception paths are agreed in writing before anything is built.' },
      { title: 'Controls Before Speed', description: 'Nothing is approved or posted without the human sign-off you define.' },
      { title: 'Tested on Your Invoices', description: 'We test with real samples from your suppliers, including the awkward layouts and the credit notes.' },
      { title: 'No Portal to Learn', description: 'Approvers work in email, chat or the tools they already use, not a separate system.' },
      { title: 'Honest About Fit', description: 'If your invoice volume is too low for automation to pay off, we will tell you.' },
      { title: 'You Own It', description: 'Workflows, accounts and documentation stay with you. You pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Automate Your Invoice Processing',
    intro:
      'We start with one invoice flow, usually the suppliers who send the most documents, and widen it once it is working. You approve the design before we build.',
    steps: [
      { title: 'Free Audit', description: 'We look at how invoices arrive, who approves them and where they get stuck today.' },
      { title: 'Sample Review', description: 'We gather a set of real invoices and credit notes to test extraction against your suppliers’ layouts.' },
      { title: 'Rules and Routing', description: 'Matching tolerances, approval limits, duplicate checks and exception owners are agreed in writing.' },
      { title: 'Build', description: 'Intake, extraction, checks, routing and posting are built on the chosen platform and connected to your accounting system.' },
      { title: 'Parallel Run', description: 'The workflow processes live invoices alongside your current method so your team can compare results before switching.' },
      { title: 'Handover', description: 'You receive the workflows, account access and documentation for your team to run.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline, including which suppliers and invoice types are in the first phase.',
  },

  cta: {
    bandHeading: 'See where your invoices get stuck',
    heading: 'Stop Keying Supplier Invoices by Hand',
    description:
      'Book a free, no-obligation invoice automation audit. We will review how invoices reach your team, show where extraction, matching and routing would help, and tell you plainly what should stay manual.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Invoice Processing Software: Common Questions',
  faqSideText: 'Want to see how your own supplier invoices would be read? Book a free audit and bring a few samples.',
  faqs: [
    {
      question: 'What is AI invoice processing software?',
      answer:
        'It is software that collects supplier invoices, reads their details with AI and OCR, checks them against your records and routes them for approval before they are posted to your accounting system. Clickmasters builds it inside the tools you already use rather than selling a separate app.',
    },
    {
      question: 'Can it read invoices from suppliers with different layouts?',
      answer:
        'Yes. AI extraction reads each document as it is instead of relying on one template per supplier. Fields it cannot read confidently are flagged for a person to confirm, and we test with samples from your own suppliers before going live.',
    },
    {
      question: 'Does it pay our suppliers?',
      answer:
        'No. Our workflows stop at approval and posting. Releasing payments stays with your team and your existing payment process, so control over money leaving the business does not change.',
    },
    {
      question: 'How does duplicate invoice detection work?',
      answer:
        'Each new invoice is compared with invoices already received or posted, using the supplier, invoice number, amount and date. Likely duplicates are held for review instead of being sent for approval a second time.',
    },
    {
      question: 'Can it match invoices to purchase orders?',
      answer:
        'Yes, where your purchase orders are held in a system or spreadsheet the workflow can read. Lines are compared within the tolerances you set, and any differences are highlighted for the approver.',
    },
    {
      question: 'What happens to invoices without a purchase order?',
      answer:
        'They follow their own path, usually to a budget owner or department head chosen by supplier or category, with suggested coding for that person to confirm or change.',
    },
    {
      question: 'How are credit notes and supplier statements handled?',
      answer:
        'They are classified separately from invoices. Credit notes can be routed for matching against the original invoice, and statements can be logged for reconciliation rather than entered as new bills.',
    },
    {
      question: 'Which accounting systems can approved invoices be posted to?',
      answer:
        'We connect to QuickBooks, Xero, NetSuite and Bill.com where they offer access, as well as spreadsheets. Exactly what can be connected in your setup is confirmed during the audit.',
    },
    {
      question: 'Is AI invoice processing software something we license from you?',
      answer:
        'No. Clickmasters is an agency, not a software vendor. We build the invoice workflows on platforms your business owns, you pay platform and AI usage costs directly, and the workflows and documentation are yours after handover.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit and share a few recent invoices. We review your current AP process and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
