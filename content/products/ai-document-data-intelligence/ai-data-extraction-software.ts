// content/products/ai-document-data-intelligence/ai-data-extraction-software.ts
// Copy + SEO for /products/ai-document-data-intelligence/ai-data-extraction-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the DATA: getting fields, tables and line items out of PDFs, emails, forms and spreadsheets into
//   structured, normalized, validated records, plus spreadsheet data cleaning between systems. Reading images
//   and scans belongs to AI OCR Software; the end-to-end workflow per document type (classify, route, approve,
//   file) to AI Document Processing Software; the methodology to Intelligent Document Processing; agreements
//   to AI Contract Analysis.
// - Verified capabilities only: capture from inboxes, web forms, uploads and cloud folders; OCR plus language
//   models that find fields by meaning across layouts; validation against formats, expected values, POs and
//   existing records; low-confidence or mismatched values to a person with the field flagged; data cleaning
//   and transformation of messy spreadsheets; delivery into CRM, ERP, accounting, databases and cloud storage
//   where integrations/APIs exist. Extraction quality depends on document quality and structure.
// - NO web scraping. No statistics, accuracy percentages, time saved, prices, testimonials, customer names,
//   certifications or ongoing-support promises.
// - Clickmasters builds on platforms the client owns — not a standalone SaaS app. The client pays platform and
//   AI usage costs directly and owns the workflows and documentation.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_DATA_EXTRACTION_SOFTWARE_PATH = '/products/ai-document-data-intelligence/ai-data-extraction-software';

export const aiDataExtractionSoftwareSeo: HubSeo = {
  name: 'AI Data Extraction Software',
  path: AI_DATA_EXTRACTION_SOFTWARE_PATH,
  title: 'AI Data Extraction Software for PDFs & Forms | Clickmasters',
  description:
    'AI data extraction software that pulls fields, tables and line items from PDFs, emails, forms and spreadsheets, validates them and loads your systems.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Document & Data Intelligence', path: '/products/ai-document-data-intelligence' },
    { name: 'AI Data Extraction Software', path: AI_DATA_EXTRACTION_SOFTWARE_PATH },
  ],
};

export const aiDataExtractionSoftwareKeywords = [
  'AI data extraction software',
  'automated data entry software',
  'intelligent data extraction',
  'unstructured data extraction',
  'extract data from PDFs',
  'PDF table extraction',
  'line item extraction',
  'email data extraction',
  'spreadsheet data cleaning',
  'data extraction automation services',
  'replace manual data entry with AI',
  'how does AI data extraction work',
  'what is intelligent data extraction',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI document and data intelligence', href: '/products/ai-document-data-intelligence', section: 'What Is AI Data Extraction Software?' },
  { anchor: 'AI OCR software', href: '/products/ai-document-data-intelligence/ai-ocr-software', section: 'From Document to Data Model: What Gets Extracted (explainer)' },
  { anchor: 'supplier invoice processing workflow', href: '/products/ai-finance-accounting/ai-invoice-processing-software', section: 'Where the Model Reads and Where Rules Check' },
  { anchor: 'document automation with Airtable', href: '/solutions/document-automation/with-airtable', section: 'Cleaning the Spreadsheets That Move Between Systems (spotlight)' },
  { anchor: 'AI document processing software', href: '/products/ai-document-data-intelligence/ai-document-processing-software', section: 'Data Extraction vs OCR vs Document Processing (extras)' },
] as const;

export const aiDataExtractionSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'AI Data Extraction Software',
    heading: 'AI Data Extraction Software for Clean, Validated Records',
    accentWords: 3,
    subheading:
      'We build AI data extraction inside the systems you already run. Fields, tables and line items are pulled from PDFs, emails, forms and spreadsheets, put into the format each system expects, checked against your records and delivered to your CRM, ERP, accounting tool or database. Anything the AI is unsure about goes to a person first.',
    primaryCta: { text: 'Book a Free Data Extraction Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'A hand pressing a glowing Automation control surrounded by icons for people, analytics and charts, representing data extracted from business documents and loaded into connected systems',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Field extraction', 'Table and line-item capture', 'Normalization', 'Validation rules', 'Spreadsheet clean-up', 'Delivery to your systems'],
  },

  intro: {
    eyebrow: 'Data Out of Documents',
    heading: 'What Is AI Data Extraction Software?',
    paragraphs: [
      'AI data extraction software takes information locked inside documents and messages and turns it into structured data a system can use. A purchase order arrives as a PDF, a customer completes a web form, a carrier emails a rate confirmation, a branch sends its weekly stock count as a spreadsheet. Instead of someone reading each one and retyping it, the extraction workflow finds the fields you need, puts them into a consistent shape and checks them before they reach your records.',
      'The difference from older template tools is how fields are found. A language model reads the document for meaning, so “Ship to”, “Deliver to” and “Consignee” can all land in the same delivery address field, wherever they sit on the page. Rules then do the checking: formats, totals, required fields and matches against data you already hold. Results still depend on the quality and structure of the source, which is why every build is tested on your real documents.',
      'This page is about the data itself: which fields, in what format, validated how and delivered where. It sits within our [AI document and data intelligence](/products/ai-document-data-intelligence) range, alongside pages on reading scans, running full document workflows and analysing contracts.',
    ],
    problems: [
      'Staff retype order numbers, quantities and addresses from PDFs into the ERP, one field at a time.',
      'The same customer appears three different ways across systems because names and codes are never formatted the same.',
      'Tables in supplier documents are copied cell by cell into spreadsheets, and a missed row goes unnoticed.',
      'Requests from web forms and emails arrive as free text that does not fit the fields in your CRM.',
      'Monthly spreadsheets from branches or partners each use their own columns, so merging them takes a full day.',
    ],
  },

  explainer: {
    eyebrow: 'Defining the Output',
    heading: 'From Document to Data Model: What Gets Extracted',
    paragraphs: [
      'Good extraction starts with the destination, not the document. Before building anything we agree a target schema with you: the fields your system needs, their formats, which ones are mandatory and what counts as a valid value. A field that is extracted but never checked is just faster retyping, with the same errors.',
      'Most business documents mix three kinds of content: single values such as dates and reference numbers, repeating tables such as line items, and free text such as special instructions. Each is handled differently and mapped to the schema in its own way. Sources can be digital PDFs, email bodies, form submissions or spreadsheets. When the source is a scan or photo, [AI OCR software](/products/ai-document-data-intelligence/ai-ocr-software) makes the page readable before extraction begins.',
    ],
    points: [
      { title: 'Header Fields', description: 'Reference numbers, dates, parties, totals and other single values, each mapped to a named field in your schema.' },
      { title: 'Tables and Line Items', description: 'Rows of products, quantities, prices or shipments, captured as repeating records with their columns kept intact.' },
      { title: 'Free-Text Details', description: 'Delivery instructions, request descriptions and notes, tagged or summarized so they can be filtered and routed.' },
      { title: 'Normalized Formats', description: 'Dates, currencies, units, phone numbers and country names converted to the single format each destination expects.' },
      { title: 'Lookups and Matches', description: 'Customer, supplier and product names matched to the IDs already held in your CRM, ERP or database.' },
      { title: 'Source and Confidence', description: 'Every value keeps a link to the document it came from, and low-confidence values are marked for review.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our AI Data Extraction Software Does',
    intro:
      'Each build is shaped around the documents you receive and the systems the data has to reach. These are the capabilities we combine, depending on where your data starts and where it needs to end up.',
    items: [
      { title: 'Multi-Source Capture', description: 'Documents and messages are picked up from email inboxes, web forms, uploads and cloud folders as soon as they arrive.' },
      { title: 'Field Extraction by Meaning', description: 'A language model finds fields by what they mean rather than where they sit, across varied layouts from different senders.' },
      { title: 'Table and Line-Item Capture', description: 'Multi-row tables, including ones that continue across pages, come out as structured rows rather than blocks of text.' },
      { title: 'Email and Form Parsing', description: 'Requests written in an email body or a free-text form box are turned into the specific fields your system needs.' },
      { title: 'Normalization', description: 'Values are cleaned and standardized: date formats, decimal separators, units of measure, codes and naming conventions.' },
      { title: 'Validation Rules', description: 'Required fields, formats, totals and expected values are checked, along with matches against purchase orders and existing records.' },
      { title: 'Spreadsheet Clean-Up', description: 'Messy exports and partner spreadsheets are mapped, de-duplicated and transformed before they move between systems.' },
      { title: 'Review Queue', description: 'Values that fail a check or carry low confidence go to a person, with the exact field flagged and the source document beside it.' },
      { title: 'System Delivery', description: 'Approved data is written into your CRM, ERP, accounting software, database or cloud storage where an integration or API exists.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Customer Purchase Order, From PDF to Sales Order',
    intro:
      'Here is a typical example: a distributor receives customer purchase orders as PDFs in a sales inbox, each in the customer’s own layout. This is how one eighteen-line order becomes a sales order without being retyped.',
    steps: [
      { title: 'Capture', description: 'The PDF arrives in orders@ and the workflow picks it up, storing the email and attachment together as the source record.' },
      { title: 'Extract', description: 'The model reads the customer name, PO number, requested delivery date, ship-to address and all eighteen lines, including two that run onto page two.' },
      { title: 'Normalize', description: 'The date is converted to your ERP’s format, case quantities are converted to units, and the customer’s part numbers are mapped to your SKUs from your cross-reference list.' },
      { title: 'Validate', description: 'Line totals are recalculated, the customer is matched to its account and each SKU is checked against the product list. One part number has no match.' },
      { title: 'Review', description: 'A sales administrator sees the order with that single line highlighted, selects the correct SKU and confirms. Everything else was already checked.' },
      { title: 'Deliver', description: 'The sales order is created in the ERP through its API, and the PDF is filed against it so the record can always be traced to the original.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes When Data Stops Being Retyped',
    intro:
      'The goal is data you can trust in your systems: captured once, checked on the way in and traceable afterward.',
    items: [
      { title: 'Typing Becomes Checking', description: 'People confirm flagged fields instead of keying every value, so manual effort is spent on the cases that need judgment.' },
      { title: 'Consistent Records', description: 'Names, codes and formats follow one standard, which makes reporting and matching between systems far simpler.' },
      { title: 'Errors Stopped at Entry', description: 'Validation catches missing fields and totals that do not add up before bad data reaches the CRM or ERP.' },
      { title: 'Tables Kept Whole', description: 'Line items arrive as rows rather than pasted text, ready to be summed, filtered and matched.' },
      { title: 'Traceable Values', description: 'Any value in your system can be traced back to the document it came from.' },
      { title: 'New Senders Handled', description: 'Documents from a new customer or supplier are read by the same logic, without building a template for each layout.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI Plus Rules',
    heading: 'Where the Model Reads and Where Rules Check',
    paragraphs: [
      'The model handles what fixed rules cannot: working out that “12 x 6” on an order line means twelve cases of six, that the delivery change you need is buried in the third paragraph of an email, or that “Acme Ltd” and “ACME Limited” are the same customer. Interpretation like this varies from one document to the next, which is exactly where a template breaks.',
      'Rules then apply the checks that should behave the same way every time: required fields, value ranges, totals, duplicates and matches against your records. Where extracted data feeds an approval step, as in a [supplier invoice processing workflow](/products/ai-finance-accounting/ai-invoice-processing-software), the checked values are handed to the people who sign them off rather than posted straight through.',
    ],
    aiDoes: [
      'Finds fields by meaning across different layouts',
      'Captures tables and line items as rows',
      'Turns free-text requests into structured fields',
      'Suggests matches to existing customers, suppliers and products',
      'Converts formats, units and codes to your standard',
      'Flags values it could not read with confidence',
    ],
    peopleDo: [
      'Define target fields and validation rules',
      'Confirm flagged values and unmatched items',
      'Approve records that commit money or stock',
      'Decide when new document types are added',
    ],
  },

  spotlight: {
    eyebrow: 'Spreadsheet Data',
    heading: 'Cleaning the Spreadsheets That Move Between Systems',
    paragraphs: [
      'Not all extraction starts with a PDF. Many teams receive their data as spreadsheets: a weekly stock count from each warehouse, a price list from a supplier, a partner’s monthly sales export. Every file uses its own column names, date formats and spellings, and someone spends hours reshaping them before they can be imported anywhere.',
      'We build workflows that map each incoming layout to your standard, clean the values, remove duplicates and flag rows that fail validation, then load the result into the destination system. Where a team prefers to check records in a shared base before they move on, [document automation with Airtable](/solutions/document-automation/with-airtable) gives them a structured place to review and approve them.',
    ],
    points: [
      { title: 'Column Mapping', description: '“Qty on hand”, “Stock” and “Units” from different senders are mapped to one field, and unfamiliar columns are flagged.' },
      { title: 'Value Clean-Up', description: 'Stray spaces, mixed date formats, text in number columns and inconsistent product names are corrected or flagged.' },
      { title: 'Duplicate Handling', description: 'Repeated rows, and records that already exist in the destination, are identified before anything is imported.' },
      { title: 'Rejected Rows Listed', description: 'Rows that fail validation are listed with the reason, so the sender can be asked to correct them.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Where This Fits',
      heading: 'Data Extraction vs OCR vs Document Processing',
      accentWords: 2,
      paragraphs: [
        'These three are easy to confuse because they often run in the same workflow. OCR turns an image of a page into text. Data extraction decides which pieces of that text, or of an email or spreadsheet, belong in which field, and checks them. Document processing is the wider workflow around a document type: classification, approvals, filing and hand-offs between people.',
        'If your documents are already digital and the main problem is retyping and inconsistent data, extraction is the right place to start. If each document type also needs routing, sign-off and filing, [AI document processing software](/products/ai-document-data-intelligence/ai-document-processing-software) covers that full workflow, with extraction as one of its steps.',
      ],
      points: [
        { title: 'Choose Data Extraction When', description: 'You need specific fields and tables in a system, normalized and validated, from documents, emails or spreadsheets.' },
        { title: 'Choose OCR When', description: 'The first challenge is reading scans, photos or image-only PDFs that have no usable text layer.' },
        { title: 'Choose Document Processing When', description: 'Each document type needs an end-to-end workflow with classification, approvals and filing.' },
        { title: 'Often All Three', description: 'A scanned delivery note can be read by OCR, have its fields extracted and then be routed for approval in one flow.' },
      ],
    },
    {
      eyebrow: 'Is It a Good Fit?',
      heading: 'Signs Your Data Is Ready for Automated Extraction',
      accentWords: 2,
      paragraphs: [
        'Extraction pays off when the same kinds of data arrive repeatedly and end up in the same systems. It struggles when every document is unique, when nobody can say which fields are needed, or when the source is so poor that a person would have to guess too.',
        'We assess fit during the audit using samples of your actual documents. Sometimes the honest answer is that a simpler change, such as a web form that captures structured data at the source, is worth more than extraction.',
      ],
      points: [
        { title: 'Repeating Document Types', description: 'Orders, applications, delivery paperwork or reports that arrive regularly, often from many different senders.' },
        { title: 'A Known Destination', description: 'The data ends up in a specific system, table or spreadsheet with defined fields.' },
        { title: 'Rules You Can Write Down', description: 'You can describe what a valid record looks like, even if checking it is a manual job today.' },
        { title: 'Readable Sources', description: 'Digital files or reasonably clear scans. Very poor images are flagged for a person rather than forced through.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Data Extraction Is Built For',
    items: [
      { title: 'Order and Operations Teams', description: 'Teams entering orders, bookings or service requests from customer documents into an ERP or order system.' },
      { title: 'Finance Back Offices', description: 'Teams keying amounts, references and line items from statements, remittances and supporting paperwork.' },
      { title: 'Logistics Coordinators', description: 'People copying shipment details from manifests, bills of lading and inventory reports into their systems.' },
      { title: 'Data and Systems Owners', description: 'Managers responsible for keeping CRM, ERP and database records clean and consistent.' },
      { title: 'Onboarding Teams', description: 'Teams collecting client or employee details from document packs and entering them into several systems.' },
      { title: 'Businesses Merging Partner Data', description: 'Companies receiving spreadsheets from branches, franchisees or partners that never share a format.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Where Extracted Data Can Be Delivered',
    paragraphs: [
      'Extraction only matters if the data lands somewhere useful. We deliver validated records into CRMs such as Salesforce and HubSpot, accounting systems such as QuickBooks, Xero and NetSuite, ERPs, databases and cloud storage, wherever they offer an integration or API. Which connections are possible in your stack is confirmed during the audit.',
      'Workflows run on n8n, Make, Zapier or Airtable, with models from OpenAI, Claude or Gemini doing the reading. Systems without an API can be reached with RPA bots. Where documents are sensitive, the workflow can be self-hosted, for example on n8n, so data stays in your environment, with access controls and an audit trail of what was extracted and changed.',
    ],
    groups: [
      { label: 'Destinations', items: ['Salesforce', 'HubSpot', 'QuickBooks', 'Xero', 'NetSuite', 'Databases', 'Cloud storage'] },
      { label: 'Sources', items: ['Email inboxes', 'Web forms', 'Uploads', 'Cloud folders', 'Spreadsheets'] },
      { label: 'Workflow Platforms', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Connections', items: ['APIs', 'Webhooks', 'RPA bots'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Data Extraction With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We build extraction workflows on platforms you own and connect them to the systems your business already depends on.',
    items: [
      { title: 'Schema First', description: 'Fields, formats and validation rules are agreed in writing before a model reads a single document.' },
      { title: 'Tested on Your Samples', description: 'Results are checked against your real documents, including the awkward ones, not a tidy demo set.' },
      { title: 'Uncertainty Shown', description: 'Low-confidence values go to a person with the field flagged, instead of slipping quietly into your records.' },
      { title: 'No New Portal', description: 'Data goes into your existing systems, and reviewers work in tools they already use.' },
      { title: 'The Right Model for the Job', description: 'We choose between models such as OpenAI, Claude or Gemini based on your documents and usage costs.' },
      { title: 'You Own It', description: 'Workflows, accounts and documentation stay with you, and you pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up Your Data Extraction',
    intro:
      'We start with one document type and one destination, prove it on real samples, then add more. You approve the field mapping before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We review where your data comes from, who retypes it today and which systems it has to reach.' },
      { title: 'Sample Collection', description: 'You share a representative set of documents, including unusual layouts and poor copies.' },
      { title: 'Field Mapping', description: 'Target fields, formats, validation rules, review owners and destinations are agreed in writing.' },
      { title: 'Build', description: 'Capture, extraction, normalization, checks and delivery are built on the chosen platform and connected to your systems.' },
      { title: 'Test and Launch', description: 'The workflow is tested across document variations, then switched on with your team watching the early results.' },
      { title: 'Refine and Hand Over', description: 'Recurring review items are studied and rules adjusted, then the workflows and documentation are handed to your team.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline, including which document types and destinations are in the first phase.',
  },

  cta: {
    bandHeading: 'See what your documents could feed',
    heading: 'Stop Retyping Data Your Documents Already Contain',
    description:
      'Book a free, no-obligation data extraction audit. Bring a few sample documents and we will show which fields can be extracted, how they would be checked and where they would land.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Data Extraction Software: Common Questions',
  faqSideText: 'Wondering which fields could come out of your own documents automatically? Book a free audit and bring a few samples.',
  faqs: [
    {
      question: 'What is AI data extraction software?',
      answer:
        'It is software that pulls specific fields, tables and line items out of documents, emails, forms and spreadsheets, converts them into a consistent structure, checks them and delivers them into your systems. Clickmasters builds it as workflows inside tools you already use, not as a separate app.',
    },
    {
      question: 'How is AI data extraction different from template-based extraction?',
      answer:
        'Template tools rely on fixed positions for each layout, so a new supplier format means a new template. AI extraction finds fields by meaning, so it copes with varied layouts. Rules still validate the results, and any field the model is unsure about goes to a person.',
    },
    {
      question: 'Can it extract data from PDFs?',
      answer:
        'Yes. Digital PDFs are read directly, while scanned or image-only PDFs pass through OCR first. Clean digital files extract most reliably; poor scans are more likely to have fields flagged for review.',
    },
    {
      question: 'Can it handle tables and line items that run across several pages?',
      answer:
        'Yes. Tables are captured as structured rows with their columns kept, including tables that continue onto later pages. Totals can be recalculated from the rows to confirm nothing was missed.',
    },
    {
      question: 'Does it remove manual data entry completely?',
      answer:
        'It removes most of the typing, not the checking. Values that fail validation or carry low confidence still go to a person, who confirms the flagged field rather than keying the whole document.',
    },
    {
      question: 'Is this automated data entry software we install or subscribe to?',
      answer:
        'No. Clickmasters is an agency. We build the extraction workflows on platforms your business owns, such as n8n, Make, Zapier or Airtable. You pay platform and AI usage costs directly and own the workflows and documentation.',
    },
    {
      question: 'Can it extract data from emails and web forms?',
      answer:
        'Yes. Email bodies, attachments and free-text form fields can be parsed into structured fields, for example turning a written delivery change request into an order reference, a new date and an address.',
    },
    {
      question: 'Can you clean up messy spreadsheets as well?',
      answer:
        'Yes. We map differing column layouts to one standard, correct inconsistent values, remove duplicates and flag invalid rows before the data moves between systems.',
    },
    {
      question: 'Do you scrape data from websites?',
      answer:
        'No. This work covers documents, emails, forms and spreadsheets that your business receives or already holds. Web scraping is not part of the service.',
    },
    {
      question: 'Where can extracted data be sent?',
      answer:
        'Into CRMs such as Salesforce and HubSpot, accounting systems such as QuickBooks, Xero and NetSuite, ERPs, databases and cloud storage, wherever an integration or API exists. RPA bots can cover systems without one. Exact connections are confirmed in the audit.',
    },
    {
      question: 'How is sensitive data protected?',
      answer:
        'Workflows can include access controls and an audit trail, and can be self-hosted, for example on n8n, so sensitive documents stay within your own environment. Specific security requirements are agreed during scoping.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit and share a few sample documents. We review your current data entry and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
