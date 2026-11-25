// content/products/ai-finance-accounting/ai-bookkeeping-software.ts
// Copy + SEO for /products/ai-finance-accounting/ai-bookkeeping-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is day-to-day recording for small businesses: gathering source documents, categorizing transactions,
//   keeping records organized and complete, flagging uncategorized or unclear items, linking supporting
//   documents to entries, and keeping books ready for the accountant. Coding against the chart of accounts in
//   depth, reconciliation matching, journals and the close belong to AI Accounting Automation; supplier invoice
//   intake to AI Invoice Processing Software; receipts and claims to AI Expense Management Software; the whole
//   finance function to AI Financial Automation.
// - The page must explain bookkeeping vs accounting, say AI SUPPORTS bookkeepers and accountants (never replaces
//   them), and say clearly that automation does not guarantee error-free records.
// - Verified capabilities only: AI / OCR extraction of receipts, invoices and forms; categorization and routing;
//   validation against expected values; spreadsheet-heavy workflow automation; human-in-the-loop at costly steps;
//   data kept in the client’s environment where sensitivity requires.
// - Finance systems named: QuickBooks, Xero, NetSuite, Bill.com, Stripe, spreadsheets — always "where they offer
//   access; confirmed in the audit".
// - NOT Clickmasters features: bank feeds / bank synchronization, corporate card feeds, sending payments,
//   reimbursement, tax filing, audit or compliance certification, guaranteed error-free books.
// - No statistics, percentages, hours-saved figures, prices, customer names, testimonials, guarantees,
//   certifications or ongoing-support promises.
// - Clickmasters builds automation on platforms the client owns — it is not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_BOOKKEEPING_SOFTWARE_PATH = '/products/ai-finance-accounting/ai-bookkeeping-software';

export const aiBookkeepingSoftwareSeo: HubSeo = {
  name: 'AI Bookkeeping Software',
  path: AI_BOOKKEEPING_SOFTWARE_PATH,
  title: 'AI Bookkeeping Software for Small Business | Clickmasters',
  description:
    'AI bookkeeping software built in QuickBooks, Xero or spreadsheets: source documents gathered, transactions categorized and unclear items flagged for review.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Finance & Accounting', path: '/products/ai-finance-accounting' },
    { name: 'AI Bookkeeping Software', path: AI_BOOKKEEPING_SOFTWARE_PATH },
  ],
};

export const aiBookkeepingSoftwareKeywords = [
  'AI bookkeeping software',
  'bookkeeping automation',
  'automated bookkeeping for small business',
  'AI bookkeeping for small business',
  'automatic transaction categorization',
  'receipt and document organization',
  'bookkeeping with QuickBooks and Xero',
  'bookkeeping automation services',
  'keep books ready for your accountant',
  'bookkeeping vs accounting',
  'can AI do bookkeeping',
  'how to automate bookkeeping',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI finance and accounting', href: '/products/ai-finance-accounting', section: 'What Is AI Bookkeeping Software?' },
  { anchor: 'AI accounting automation', href: '/products/ai-finance-accounting/ai-accounting-automation', section: 'Bookkeeping vs Accounting: Where Each Starts and Stops (extras)' },
  { anchor: 'AI expense management software', href: '/products/ai-finance-accounting/ai-expense-management-software', section: 'Gathering Source Documents Before They Go Missing (spotlight)' },
  { anchor: 'document automation for accounting firms', href: '/solutions/document-automation/for-accounting-firms', section: 'Gathering Source Documents Before They Go Missing (spotlight)' },
  { anchor: 'business process automation for accounting firms', href: '/solutions/business-process-automation/for-accounting-firms', section: 'Bookkeeping Automation for Firms With Many Clients (extras)' },
] as const;

export const aiBookkeepingSoftware: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'AI Bookkeeping Software',
    heading: 'AI Bookkeeping Software That Keeps Records Accountant-Ready',
    accentWords: 3,
    subheading:
      'We automate the daily recording work that small businesses fall behind on: collecting receipts and invoices, suggesting categories, attaching documents to entries and flagging anything unclear. It runs in the bookkeeping tools you already use, and your bookkeeper or accountant still reviews the books.',
    primaryCta: { text: 'Book a Free Bookkeeping Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'Hand pressing a glowing Automation control among icons for people, charts and a dollar payment screen, representing AI bookkeeping software for small business records',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Source documents gathered', 'Transactions categorized', 'Receipts linked to entries', 'Unclear items flagged', 'Organized records', 'Books ready for review'],
  },

  intro: {
    eyebrow: 'Day-to-Day Records',
    heading: 'What Is AI Bookkeeping Software?',
    paragraphs: [
      'AI bookkeeping software automates the routine recording that keeps a business’s books up to date. Receipts are collected from the places they arrive, transactions get a suggested category, supporting documents are attached to the entries they explain, and anything the system cannot place is put on a short list for a person to answer. The result is a set of records that stays organized through the month instead of being rebuilt in a rush at year-end.',
      'For a small business, the problem is rarely knowing how to keep books. It is finding the time. A café owner has a shoebox of supplier receipts, a trades business has fuel receipts in three vans, a consultancy has subscription invoices scattered across four inboxes. Automation takes over the gathering, sorting and filing, so the owner or bookkeeper spends their time answering the few questions that really need them.',
      'This page is part of our [AI finance and accounting](/products/ai-finance-accounting) range and focuses on bookkeeping: daily recording and complete, well-organized records. It supports bookkeepers and accountants rather than replacing them, and like any process it can still make mistakes, which is why review stays part of the routine.',
    ],
    problems: [
      'Receipts are lost, faded or still sitting in someone’s wallet at quarter-end.',
      'Transactions build up uncategorized until the accountant asks about them.',
      'Invoices and receipts live in email, phones, drawers and shared drives.',
      'The accountant spends the first week of every engagement chasing missing paperwork.',
    ],
  },

  explainer: {
    eyebrow: 'Why Books Fall Behind',
    heading: 'Why Small Business Bookkeeping Slips',
    paragraphs: [
      'Bookkeeping usually falls behind for practical reasons rather than a lack of care. Documents arrive in too many places, the owner is busy doing the work that earns the money, and the books feel like something that can wait until the weekend. A few weeks later there are dozens of unexplained transactions and a pile of receipts with no obvious owner.',
      'The cost shows up later. Missing documents mean expenses that cannot be supported, uncategorized items end up in a catch-all account, and the accountant’s time goes on chasing rather than advising. Keeping up a little every day is far easier than catching up once a quarter, and that daily rhythm is exactly what automation can maintain.',
    ],
    points: [
      { title: 'Too Many Inboxes', description: 'Receipts and invoices arrive by email, text, post and photo, with no single place to collect them.' },
      { title: 'Vague Descriptions', description: 'Transactions such as “POS 4471” or “Card payment” are hard to categorize weeks later.' },
      { title: 'Missing Support', description: 'Entries exist without the receipt or invoice that explains them.' },
      { title: 'Catch-Up Sessions', description: 'Books are updated in occasional long sessions, when memory of each purchase has faded.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our Bookkeeping Automation Takes Care Of',
    intro:
      'Each capability is set up around your bookkeeping tool, your categories and the way documents actually reach your business. The aim is complete, organized records, with a person reviewing anything uncertain.',
    items: [
      { title: 'One Collection Point', description: 'A dedicated email address, upload folder or simple form becomes the place every receipt and bill is sent.' },
      { title: 'Document Reading', description: 'AI and OCR read the supplier, date, amount and tax from receipts and invoices, even phone photos.' },
      { title: 'Suggested Categories', description: 'Each transaction gets a suggested category based on the supplier, description and past entries.' },
      { title: 'Documents Linked to Entries', description: 'Receipts and invoices are attached to the transaction they support, so each entry has its evidence.' },
      { title: 'Uncategorized Item Flags', description: 'Transactions the workflow cannot place confidently go on a review list instead of a catch-all account.' },
      { title: 'Missing-Document Prompts', description: 'Entries without a receipt trigger a reminder to the person who made the purchase.' },
      { title: 'Consistent Filing', description: 'Source documents are renamed and stored by month, supplier or category in your own cloud storage.' },
      { title: 'Duplicate Spotting', description: 'Receipts or bills that look like ones already recorded are held for a person to confirm.' },
      { title: 'Period Readiness Summary', description: 'A short summary shows what is complete and what is still open before the accountant’s review.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'A Week of Automated Bookkeeping, Step by Step',
    intro:
      'Here is how a small design studio’s bookkeeping might run once automated. The same pattern suits most small businesses using a mainstream bookkeeping tool.',
    steps: [
      { title: 'Documents Arrive', description: 'A software subscription invoice lands in email, and a director photographs a lunch receipt and sends it to the receipts address.' },
      { title: 'Read and File', description: 'Both documents are read, renamed consistently and saved in the right month’s folder.' },
      { title: 'Match to Transactions', description: 'Each document is paired with the corresponding transaction already in the bookkeeping system, where access allows.' },
      { title: 'Suggest Categories', description: 'The subscription is suggested as software, the lunch as client entertainment, based on your rules and past entries.' },
      { title: 'Flag the Unclear', description: 'A card payment with no receipt and no clear supplier is added to the review list, and the cardholder is asked about it.' },
      { title: 'Weekly Review', description: 'The bookkeeper works through the short list, confirms or corrects suggestions, and the books stay current.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes When Bookkeeping Keeps Up by Itself',
    intro:
      'The main change is rhythm. Records are kept current in small daily steps, rather than rebuilt in long catch-up sessions.',
    items: [
      { title: 'Books That Stay Current', description: 'Documents are filed and transactions categorized as they happen, not weeks later.' },
      { title: 'Fewer Lost Receipts', description: 'Prompts go out while the purchase is still fresh in the buyer’s mind.' },
      { title: 'Evidence on Every Entry', description: 'Supporting documents sit with the transactions they explain, ready for any question.' },
      { title: 'Shorter Review Lists', description: 'Owners and bookkeepers answer a handful of flagged items instead of sorting everything.' },
      { title: 'Better Use of Your Accountant', description: 'Their time goes on advice and review rather than chasing paperwork.' },
      { title: 'Less Weekend Admin', description: 'Owners stop spending evenings and weekends catching up on the books.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Support, Not Replacement',
    heading: 'Where AI Helps Bookkeepers and Where They Stay in Charge',
    paragraphs: [
      'AI is useful for the reading and sorting side of bookkeeping. It can make sense of a crumpled receipt photo, recognize that “SQ *BLUE DOOR CAFE” on a statement and “Blue Door Café” on a receipt are the same supplier, and suggest a sensible category from past entries. It does not know your business the way your bookkeeper does, and it will sometimes get things wrong.',
      'So the workflow is designed as support for the people responsible for the books. Suggestions are visible and easy to correct, uncertain items are flagged rather than guessed, and your bookkeeper or accountant reviews the records before they are relied on. Automation makes good bookkeeping easier to keep up; it does not guarantee error-free records.',
    ],
    aiDoes: [
      'Reads receipts, bills and invoices from photos and PDFs',
      'Recognizes suppliers across different spellings',
      'Suggests categories from your rules and history',
      'Links documents to the right transactions',
      'Flags missing receipts and unclear entries',
      'Prepares a summary of open items',
    ],
    peopleDo: [
      'Agree the categories and rules to follow',
      'Confirm or correct flagged suggestions',
      'Answer questions about unclear purchases',
      'Review the books before they are relied on',
    ],
  },

  spotlight: {
    eyebrow: 'Source Documents',
    heading: 'Gathering Source Documents Before They Go Missing',
    paragraphs: [
      'Complete books start with complete paperwork. The simplest change is giving every document one destination: staff forward bills to a receipts address, or snap a photo into a shared folder, and the workflow does the rest. It reads each document, files it under the right month and supplier, and connects it to the matching transaction. Employee expense claims with approval steps are a separate topic, covered by [AI expense management software](/products/ai-finance-accounting/ai-expense-management-software).',
      'When a transaction appears with no document, the workflow asks the person most likely to have it, while they still remember the purchase. Over time, the gaps shrink and the review list gets shorter. Firms that collect paperwork from many clients use the same idea at a larger scale, as described in our page on [document automation for accounting firms](/solutions/document-automation/for-accounting-firms).',
    ],
    points: [
      { title: 'One Address for Receipts', description: 'Everyone knows where to send a receipt or bill, so nothing waits in a wallet or inbox.' },
      { title: 'Read and Renamed', description: 'Files get consistent names showing date, supplier and amount, so they are easy to find.' },
      { title: 'Attached to the Entry', description: 'Each document is linked to its transaction, giving every line in the books its evidence.' },
      { title: 'Gentle Chasing', description: 'Missing receipts prompt a short reminder to the right person, not a month-end hunt.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Know the Difference',
      heading: 'Bookkeeping vs Accounting: Where Each Starts and Stops',
      accentWords: 3,
      paragraphs: [
        'Bookkeeping is the recording side: capturing every transaction, categorizing it, keeping the documents that support it and making sure nothing is missing. Accounting builds on those records. It involves reconciling accounts, adjusting entries, closing periods, interpreting the numbers and preparing the accounts people rely on. Good accounting depends on good bookkeeping, but they are different jobs.',
        'This page covers the bookkeeping side. If your main challenge is coding against the chart of accounts, reconciliation matching, journal preparation or the month-end close, our page on [AI accounting automation](/products/ai-finance-accounting/ai-accounting-automation) covers that stage of the work.',
      ],
      points: [
        { title: 'Bookkeeping', description: 'Daily recording, categorizing transactions, collecting documents and keeping records complete.' },
        { title: 'Accounting', description: 'Reconciliation, adjustments, the period close, interpretation and the accounts that result.' },
        { title: 'Where They Meet', description: 'Well-kept books make the accountant’s review faster, clearer and less dependent on chasing.' },
        { title: 'Who Does What', description: 'Automation prepares records; bookkeepers and accountants review, correct and take responsibility for them.' },
      ],
    },
    {
      eyebrow: 'Accounting Firms',
      heading: 'Bookkeeping Automation for Firms With Many Clients',
      accentWords: 3,
      paragraphs: [
        'Bookkeeping practices and accounting firms face the same problem at scale. Each client sends documents differently, uses slightly different categories and responds to questions at their own pace. Automation can give each client a consistent way to submit paperwork, apply that client’s own rules, and give the firm one view of which books are ready and which are waiting.',
        'Firms often pair this with automation of the wider client workflow, from requesting documents to scheduling reviews. Our page on [business process automation for accounting firms](/solutions/business-process-automation/for-accounting-firms) explains how practices connect those steps.',
      ],
      points: [
        { title: 'Per-Client Rules', description: 'Each client’s categories and conventions are kept separate and applied only to their records.' },
        { title: 'Consistent Submission', description: 'Every client gets the same simple way to send receipts and bills.' },
        { title: 'Readiness View', description: 'The firm sees which clients’ books are complete and which still have open items.' },
        { title: 'Client Prompts', description: 'Questions about unclear transactions go to the client in plain language, with the item attached.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Bookkeeping Software Is For',
    items: [
      { title: 'Small Business Owners', description: 'Owners who do their own books and want the recording to happen without weekend catch-up sessions.' },
      { title: 'Office and Admin Managers', description: 'People who look after the books alongside other duties and need a dependable routine.' },
      { title: 'Freelance Bookkeepers', description: 'Bookkeepers who want clients’ documents arriving organized so they can focus on review.' },
      { title: 'Bookkeeping Practices', description: 'Firms managing many small-business clients, each with their own habits and categories.' },
      { title: 'Field and Trade Businesses', description: 'Teams whose receipts are generated on the road, on site and in vans.' },
      { title: 'Businesses Preparing to Grow', description: 'Companies that want clean, complete records in place before volume rises.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Bookkeeping Tools We Connect',
    paragraphs: [
      'We connect to bookkeeping and accounting tools such as QuickBooks and Xero where they offer access, along with billing and payment platforms such as Stripe and the spreadsheets many small businesses still keep their records in. What can be connected in your setup, and how, is confirmed in the audit.',
      'Workflows run on n8n, Make or Zapier, using email, cloud storage and simple forms for document collection, with OpenAI, Claude or Gemini reading the documents. Many bookkeeping tools import bank transactions through their own features; our workflows work alongside those, using the transactions already in your system.',
    ],
    groups: [
      { label: 'Bookkeeping and Accounting', items: ['QuickBooks', 'Xero', 'NetSuite'] },
      { label: 'Billing and Payments', items: ['Stripe', 'Bill.com'] },
      { label: 'Spreadsheets and Records', items: ['Excel', 'Google Sheets', 'Airtable'] },
      { label: 'Automation Platforms', items: ['n8n', 'Make', 'Zapier'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Automate Your Bookkeeping With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We set up bookkeeping workflows inside the tools you already use, designed to make your bookkeeper’s or accountant’s job easier.',
    items: [
      { title: 'Built for Small Businesses', description: 'We design routines that fit how a small team actually works, not how a large finance department works.' },
      { title: 'Your Tools Stay', description: 'Everything runs in your existing bookkeeping software, email and storage.' },
      { title: 'Uncertain Means Flagged', description: 'Anything the workflow cannot place confidently goes to a person instead of being guessed.' },
      { title: 'Works With Your Accountant', description: 'Categories and filing are agreed with whoever reviews your books, so the output suits them.' },
      { title: 'Tested on Your Paperwork', description: 'We test with your real receipts and bills, including the blurry and handwritten ones.' },
      { title: 'You Own It', description: 'The workflows, accounts and documentation are yours, and you pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up Your Bookkeeping Automation',
    intro:
      'We begin with how documents reach your business today and the categories your accountant expects. You approve the routine before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We look at where receipts and bills arrive, how books are kept and where they fall behind.' },
      { title: 'Routine Design', description: 'Collection points, categories, filing rules and review steps are agreed in writing.' },
      { title: 'Build', description: 'The workflow is set up on your chosen platform and connected to your bookkeeping tool.' },
      { title: 'Test', description: 'It is run on a recent month of real documents and transactions, including awkward ones.' },
      { title: 'Go Live', description: 'Your team starts sending documents to the new collection point and reviews the first results.' },
      { title: 'Handover', description: 'You receive access, a short guide for staff and documentation of how the routine works.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline.',
  },

  cta: {
    bandHeading: 'Find out where your books fall behind',
    heading: 'Keep Your Books Current Without the Weekend Catch-Up',
    description:
      'Book a free, no-obligation bookkeeping automation audit. We will look at how documents and transactions reach your books today and show you which recording steps can run by themselves.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Bookkeeping Software: Common Questions',
  faqSideText: 'Not sure how much of your bookkeeping could run on its own? Book a free audit and we will look at it with you.',
  faqs: [
    {
      question: 'What is AI bookkeeping software?',
      answer:
        'It is automation that handles the routine recording work of bookkeeping: collecting receipts and invoices, reading them, suggesting categories, linking documents to transactions and flagging anything unclear. Clickmasters builds it inside the bookkeeping tools you already use.',
    },
    {
      question: 'What is the difference between bookkeeping and accounting?',
      answer:
        'Bookkeeping is the day-to-day recording and organizing of transactions and documents. Accounting uses those records to reconcile accounts, make adjustments, close periods and produce and interpret the accounts. Bookkeeping comes first and makes accounting possible.',
    },
    {
      question: 'Can AI do my bookkeeping for me?',
      answer:
        'It can do much of the gathering, reading and sorting, but not the responsibility. A person still needs to confirm flagged items, answer questions only they can answer and review the records. Automation supports your bookkeeper or accountant; it does not replace them.',
    },
    {
      question: 'Will automated bookkeeping make my records error-free?',
      answer:
        'No system can promise that. Automation reduces common slips such as lost receipts and inconsistent categories, and it flags what it is unsure about, but suggestions can still be wrong. Regular review by a person is part of every routine we build.',
    },
    {
      question: 'Do I need to change my bookkeeping software?',
      answer:
        'No. We build around tools such as QuickBooks and Xero, or your spreadsheets, where they offer access. What can be connected in your setup is confirmed during the audit.',
    },
    {
      question: 'Does it connect to my bank account?',
      answer:
        'We do not provide bank connections. Many bookkeeping tools already import bank transactions through their own features, and our workflows work with the transactions that are already in your system.',
    },
    {
      question: 'How do receipts get into the system?',
      answer:
        'Usually through one collection point, such as a dedicated email address, a shared upload folder or a simple form. Staff forward or photograph receipts, and the workflow reads, files and links them.',
    },
    {
      question: 'Is AI bookkeeping software suitable for a very small business?',
      answer:
        'Often, yes. Small businesses tend to benefit most, because the owner usually does the books personally. A simple routine for collecting and categorizing documents can remove a lot of catch-up work. We will tell you during the audit if your volume is too low to justify it.',
    },
    {
      question: 'Is this a subscription product?',
      answer:
        'No. We build the routine on platforms you own, such as n8n, Make or Zapier, connected to your bookkeeping tool. You pay platform and AI usage costs directly, and the workflows belong to you.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review how your books are kept today, agree the routine to automate and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
