// content/products/ai-document-data-intelligence.ts
// Copy + SEO for /products/ai-document-data-intelligence (category parent).
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities stated elsewhere on the site: capture from email inboxes, web forms, uploads and cloud
//   folders; OCR plus language models that find fields by meaning across varied layouts; document
//   classification and routing; validation against expected values, formats, purchase orders and existing
//   records; human review with the uncertain field flagged; approvals, filing, template-based document
//   generation; pushing approved data into CRM, ERP, accounting, databases and cloud storage where APIs exist;
//   cleaning messy spreadsheets between systems; extracting key terms, dates and figures from contracts;
//   AI search across a law firm’s document system; logistics documents (manifests, bills of lading, inventory
//   reports); onboarding document packs; access controls, audit trails and self-hosted options such as n8n.
// - Extraction quality depends on document quality and structure. Never promise accuracy, handwriting
//   recognition, compliance certifications, named EHR or legal software, legal advice or web scraping.
// - No statistics, percentages, time-saved figures, prices, testimonials, customer names, case results,
//   uptime or ongoing-support promises beyond monitoring and iteration scoped in the quote.
// - Clickmasters builds on platforms the client owns — it is not a standalone SaaS product. The client pays
//   platform and AI usage costs directly and owns the workflows and documentation.
// - Keyword map: this page targets "AI document and data intelligence". "AI document processing software"
//   belongs to the child page of that name; do not target it here.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links,
// one to each of the five child pages. There is no `related` grid on this page.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_DOCUMENT_DATA_INTELLIGENCE_PATH = '/products/ai-document-data-intelligence';

export const aiDocumentDataIntelligenceSeo: HubSeo = {
  name: 'AI Document & Data Intelligence',
  path: AI_DOCUMENT_DATA_INTELLIGENCE_PATH,
  title: 'AI Document and Data Intelligence Solutions | Clickmasters',
  description:
    'AI document and data intelligence built in your tools: documents captured, classified and read, data checked and sent to your systems, with people reviewing.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Document & Data Intelligence', path: AI_DOCUMENT_DATA_INTELLIGENCE_PATH },
  ],
};

export const aiDocumentDataIntelligenceKeywords = [
  'AI document and data intelligence',
  'document AI solutions',
  'document and data automation',
  'enterprise document automation',
  'turning unstructured documents into data',
  'unstructured document automation',
  'document classification and routing',
  'AI document validation with human review',
  'document automation agency',
  'document AI for small and mid-sized businesses',
  'how to automate document-heavy processes',
  'what can AI do with business documents',
];

// The five contextual internal links used in the copy below (one per child page).
export const internalLinks = [
  { anchor: 'AI OCR software', href: '/products/ai-document-data-intelligence/ai-ocr-software', section: 'Why Documents Still Slow Down Operations (explainer)' },
  { anchor: 'AI data extraction software', href: '/products/ai-document-data-intelligence/ai-data-extraction-software', section: 'What Document AI Solutions Can Do in Your Workflow' },
  { anchor: 'end-to-end document processing workflows', href: '/products/ai-document-data-intelligence/ai-document-processing-software', section: 'From Unstructured Documents to Structured Data (spotlight)' },
  { anchor: 'AI contract analysis', href: '/products/ai-document-data-intelligence/ai-contract-analysis', section: 'Document and Data Automation by Industry (extras)' },
  { anchor: 'what intelligent document processing involves', href: '/products/ai-document-data-intelligence/intelligent-document-processing', section: 'Match Your Document Problem to the Right Page (extras)' },
] as const;

export const aiDocumentDataIntelligence: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'AI Document & Data Intelligence',
    heading: 'AI Document and Data Intelligence That Turns Paperwork Into Usable Data',
    accentWords: 3,
    subheading:
      'Clickmasters builds document automation inside the systems you already run. Documents are collected as they arrive, read by OCR and language models, checked against your records and sent where they belong. Anything the AI is unsure about goes to a person with the doubtful field marked.',
    primaryCta: { text: 'Book a Free Document Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'A hand pressing a glowing Automation control surrounded by icons for people, analytics and charts, representing business documents being turned into structured data',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Document capture', 'Classification', 'Field extraction', 'Validation', 'Human review', 'Delivery to your systems'],
  },

  intro: {
    eyebrow: 'From Documents to Decisions',
    heading: 'What Is AI Document and Data Intelligence?',
    paragraphs: [
      'AI document and data intelligence is the work of turning the documents your business receives into data your systems can use. A scanned delivery note, a PDF supplier invoice, a completed application form, a spreadsheet exported from a partner’s system: each holds information somebody currently reads and retypes. Automation collects the document, works out what it is, pulls out the details that matter and checks them before they reach your CRM, ERP, accounting system or database.',
      'Two kinds of technology do the reading. OCR turns scans and image-based PDFs into text. Language models then find the fields by meaning, so a “Consignee” box on one bill of lading and a “Deliver to” line on another are both recognized as the delivery address. Around that sit ordinary workflow rules: validation, routing, approvals and filing. How well extraction performs depends on the quality and structure of the documents, which is why every build includes a review step for anything uncertain.',
      'This page is the overview of our document and data range. It explains what the technology can and cannot do, how a document moves from arrival to a finished record, and which of the five specialist pages fits the problem in front of you.',
    ],
    problems: [
      'Staff spend hours each week copying details from PDFs and scans into other systems.',
      'Documents arrive through inboxes, forms, uploads and shared folders, and nobody has a single view of them.',
      'Every supplier, client or partner uses a different layout, so templates keep breaking.',
      'Errors from retyping are found weeks later, when they are harder and more expensive to fix.',
      'Spreadsheets passed between teams are inconsistent, so the same data is cleaned by hand every time.',
    ],
  },

  explainer: {
    eyebrow: 'The Manual Baseline',
    heading: 'Why Documents Still Slow Down Operations',
    paragraphs: [
      'Most businesses already store their documents digitally. The problem is that a PDF in a folder is not data. Until someone opens it and types the order number into the right system, nothing downstream can use it. That reading-and-retyping step is often invisible in process maps, yet it sits in front of approvals, invoicing, onboarding, shipping and reporting.',
      'The documents themselves make it harder. Some are clean digital files, others are phone photos or second-generation scans with stamps across the text. Scanned pages have to be turned into text before anything else can happen, which is the job covered by our page on [AI OCR software](/products/ai-document-data-intelligence/ai-ocr-software). After that, the challenge is understanding: which number is the total, which date is the due date, and whether this file is the document you expected at all.',
    ],
    points: [
      { title: 'Retyping', description: 'Details are copied by hand from documents into CRMs, ERPs, accounting tools and spreadsheets.' },
      { title: 'Scattered Intake', description: 'Files arrive by email, web form, upload and shared drive, each checked on a different schedule.' },
      { title: 'Layout Variety', description: 'The same type of document looks different from every sender, so fixed templates fail.' },
      { title: 'Late Error Discovery', description: 'A mistyped figure or wrong reference surfaces only when a later process breaks.' },
      { title: 'Lost Context', description: 'The source file and the data typed from it end up in separate places, so questions take time to answer.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Document AI Solutions Can Do in Your Workflow',
    intro:
      'Every capability is configured around your documents, rules and destination systems. Most projects combine several. Where the main need is getting fields, tables and line items out of files into clean, structured records, our page on [AI data extraction software](/products/ai-document-data-intelligence/ai-data-extraction-software) goes into more depth.',
    items: [
      { title: 'Capture From Every Channel', description: 'Documents are collected from email inboxes, web forms, uploads and cloud folders, and processing starts the moment one arrives.' },
      { title: 'OCR for Scans and Images', description: 'Scanned pages, photos and image-only PDFs are converted into machine-readable text before anything else runs.' },
      { title: 'Classification', description: 'Each file is identified as an invoice, form, contract, delivery note or something else, and sent to the matching workflow.' },
      { title: 'Extraction by Meaning', description: 'Language models locate the fields you need by what they mean, not where they sit, across layouts from different senders.' },
      { title: 'Validation', description: 'Values are checked against expected formats, purchase orders and the records you already hold before they move on.' },
      { title: 'Human Review', description: 'Low-confidence or mismatched items go to a person, with the exact field in doubt highlighted next to the source page.' },
      { title: 'Routing, Approval and Filing', description: 'Documents reach the right approver, then are stored in a consistent folder structure with the data linked.' },
      { title: 'Data Cleaning and Transformation', description: 'Messy spreadsheets and exports are standardized so they can move between systems without manual tidying.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How a Document Becomes a Record in Your System',
    intro:
      'The document types differ, but almost every build follows the same controlled route from arrival to a finished, checked record.',
    steps: [
      { title: 'Arrive', description: 'A file lands in a monitored inbox, form, upload page or cloud folder, and the workflow starts automatically.' },
      { title: 'Identify', description: 'The document is classified by type, so a delivery note and a credit note do not go down the same path.' },
      { title: 'Read', description: 'OCR handles any scanned pages, then AI extracts the fields, tables and line items your process needs.' },
      { title: 'Check', description: 'Extracted values are compared with your rules and records. Anything inconsistent or uncertain is flagged.' },
      { title: 'Review and Approve', description: 'A person confirms flagged fields and approves where your process requires it. Clean documents carry straight on.' },
      { title: 'Deliver', description: 'The approved data is written to your CRM, ERP, accounting tool or database, and the original file is stored alongside it.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Document and Data Automation Changes',
    intro:
      'The gain is not only speed. It is that information from documents becomes reliable, traceable and available to the next process without someone having to carry it there.',
    items: [
      { title: 'Less Retyping', description: 'Details are captured once from the document and reused, so staff check data instead of entering it.' },
      { title: 'Errors Caught at the Door', description: 'Validation runs as each document arrives, before a wrong figure reaches another system.' },
      { title: 'One Intake, Not Five', description: 'Every channel feeds one flow, so documents stop waiting in an inbox nobody checked today.' },
      { title: 'Traceable Records', description: 'Each record keeps a link to its source file, which makes queries and audits faster to answer.' },
      { title: 'Reviewers Focus on Exceptions', description: 'People spend their time on the documents that need judgment rather than the ones that do not.' },
      { title: 'Volume Without Extra Admin', description: 'More documents are absorbed by the workflow rather than by additional manual hours.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI Plus Oversight',
    heading: 'What AI Reads and What People Decide',
    paragraphs: [
      'Language models are good at reading. They can find a policy number on a page they have never seen, tell a quote from an invoice, or summarize a long attachment into the five details a team needs. They are not infallible, and a confident-looking wrong answer is worse than an empty field. That is why every workflow we build checks AI output against rules and records, and sends anything doubtful to a person.',
      'People keep the decisions. They set the rules, review flagged fields, approve where approval matters and own the records that result. Access is limited to what each workflow needs, actions are logged, and where documents are sensitive the processing can run on self-hosted infrastructure so the data stays within your environment.',
    ],
    aiDoes: [
      'Reads scans, PDFs, forms and emails',
      'Identifies the type of each document',
      'Finds fields and tables by meaning',
      'Flags values that fail validation',
      'Summarizes long documents for reviewers',
      'Drafts documents from approved templates',
    ],
    peopleDo: [
      'Define fields, rules and approval steps',
      'Confirm flagged or low-confidence values',
      'Approve documents that commit the business',
      'Own the final records and outgoing documents',
    ],
  },

  spotlight: {
    eyebrow: 'Worked Example',
    heading: 'From Unstructured Documents to Structured Data',
    paragraphs: [
      'Take a distribution business that receives bills of lading and shipping manifests from a dozen carriers, each in its own format. Today, a coordinator opens every PDF, finds the shipment reference, consignee, container numbers and item counts, and types them into the inventory system. When a scan is faint, they phone the carrier. When they are on leave, the backlog grows.',
      'Automated, the documents are collected from the shared inbox as they arrive. Scanned pages are converted to text, the document is classified, and the fields are extracted whatever the carrier’s layout. Item counts are compared with the expected order. A manifest whose container number does not match the booking goes to the coordinator with that one field highlighted; the rest are recorded with the PDF attached. Our page on [end-to-end document processing workflows](/products/ai-document-data-intelligence/ai-document-processing-software) covers how builds like this are set up for each document type.',
    ],
    points: [
      { title: 'Format-Independent Reading', description: 'Fields are found by meaning, so a new carrier layout does not require a new template.' },
      { title: 'Checks Against Expectations', description: 'Counts, references and dates are compared with the order or booking the document relates to.' },
      { title: 'Narrow Exceptions', description: 'Reviewers see the single field in question, not the whole document to re-check from scratch.' },
      { title: 'Source File Attached', description: 'Every record keeps its original document, so anyone can see where a value came from.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Industry Applications',
      heading: 'Document and Data Automation by Industry',
      accentWords: 2,
      paragraphs: [
        'Every sector has its own document load, but the pattern repeats: a document arrives, someone reads it, and the information is needed somewhere else. In law firms, that might mean finding a clause across years of case files, or pulling key terms, dates and figures out of a stack of agreements into a register. Our page on [AI contract analysis](/products/ai-document-data-intelligence/ai-contract-analysis) covers that work, with every legal judgment staying with an attorney.',
        'Finance teams deal with invoices, receipts and statements. Logistics teams handle manifests, bills of lading and inventory reports. Service businesses collect onboarding packs from every new client or employee. Healthcare providers handle intake and referral paperwork, where data-handling requirements are agreed per project before anything is built.',
      ],
      points: [
        { title: 'Law Firms', description: 'AI search across the firm’s document system, key-term extraction and draft documents generated from templates for attorney review.' },
        { title: 'Finance and Accounting', description: 'Invoices, receipts and statements captured, read, validated and posted to tools such as QuickBooks, Xero or NetSuite.' },
        { title: 'Logistics and Distribution', description: 'Shipping manifests, bills of lading and inventory reports turned into records without retyping.' },
        { title: 'Professional Services', description: 'Client and employee onboarding packs checked for completeness and filed with the details captured.' },
        { title: 'Healthcare', description: 'Intake and referral paperwork, scoped per project with access controls and hosting agreed up front.' },
      ],
    },
    {
      eyebrow: 'Data, Not Just Documents',
      heading: 'Cleaning the Data That Moves Between Systems',
      accentWords: 3,
      paragraphs: [
        'Not every problem starts with a PDF. Many teams receive spreadsheets and exports that are technically structured but practically unusable: dates in three formats, customer names spelled differently in every row, product codes with stray spaces, and columns that change order from one week to the next. Someone cleans them by hand before importing, every time.',
        'The same approach applies. A workflow picks up the file, standardizes formats, maps columns to the destination system, flags rows that fail your rules and imports the rest. AI helps where the mess is semantic, such as matching “Acme Ltd” and “ACME Limited” to the same account, while fixed rules handle formats and required fields.',
      ],
      points: [
        { title: 'Format Standardization', description: 'Dates, currencies, phone numbers and codes are converted to the format your system expects.' },
        { title: 'Column Mapping', description: 'Incoming columns are matched to destination fields, even when a sender renames or reorders them.' },
        { title: 'Record Matching', description: 'Rows are matched to existing customers, suppliers or products, with uncertain matches held for review.' },
        { title: 'Rejected Rows Reported', description: 'Rows that fail validation are returned with the reason, instead of silently dropped.' },
      ],
    },
    {
      eyebrow: 'Which Page Fits',
      heading: 'Match Your Document Problem to the Right Page',
      accentWords: 3,
      paragraphs: [
        'The five pages in this range are split by problem. Start with the one that matches where your time goes. If you are comparing vendors or approaches and want to understand [what intelligent document processing involves](/products/ai-document-data-intelligence/intelligent-document-processing) as a category, that page explains how the components fit and when the full approach is more than you need.',
        'Many projects touch several of these at once. A common sequence is to automate one high-volume document type end to end, then extend the same intake and validation to the next.',
      ],
      points: [
        { title: '“We need a whole document workflow automated”', description: 'AI Document Processing Software: intake, classification, extraction, validation, approval, filing and delivery per document type.' },
        { title: '“We just need the data out of these files”', description: 'AI Data Extraction Software: fields, tables and line items from PDFs, emails, forms and spreadsheets into clean, structured data.' },
        { title: '“Our documents are scans and photos”', description: 'AI OCR Software: reading image-based documents into searchable text as the first step before extraction.' },
        { title: '“We are evaluating IDP”', description: 'Intelligent Document Processing: the methodology, how it compares with OCR and RPA, and how to evaluate it.' },
        { title: '“We have stacks of contracts to review”', description: 'AI Contract Analysis: key terms, dates and figures pulled into a register, with legal judgment kept with your lawyers.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Uses Enterprise Document Automation',
    items: [
      { title: 'Operations Managers', description: 'Leaders whose teams spend a visible part of the week reading documents and typing their contents elsewhere.' },
      { title: 'Finance Teams', description: 'AP and AR teams processing invoices, receipts and statements from many senders in many formats.' },
      { title: 'Law Firms', description: 'Firms that need to search, summarize and extract from large collections of case files and agreements.' },
      { title: 'Logistics Companies', description: 'Carriers, forwarders and distributors handling manifests, bills of lading and inventory reports daily.' },
      { title: 'Growing Service Businesses', description: 'Companies onboarding clients or staff whose paperwork must be complete before work can begin.' },
      { title: 'Enterprise Departments', description: 'Teams in larger organizations that need document workflows with access controls, audit trails and approvals.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Where Your Document Data Goes',
    paragraphs: [
      'Extracted and approved data is written to the systems your team already works in: CRMs such as Salesforce and HubSpot, ERPs, accounting tools such as QuickBooks, Xero and NetSuite, databases, Airtable and cloud storage. Connections are made through APIs and webhooks where the system offers them, and what can be connected in your stack is confirmed in the audit.',
      'Workflows run on platforms such as n8n, Make or Zapier, with OpenAI, Claude or Gemini doing the reading. For older systems with no usable API, RPA bots can enter the data through the screen. Where documents are sensitive, n8n can be self-hosted so files and data stay inside your environment.',
    ],
    groups: [
      { label: 'Intake Channels', items: ['Email inboxes', 'Web forms', 'Upload pages', 'Cloud folders'] },
      { label: 'Business Systems', items: ['Salesforce', 'HubSpot', 'QuickBooks', 'Xero', 'NetSuite', 'Databases'] },
      { label: 'Workflow Platforms', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Connections', items: ['APIs', 'Webhooks', 'RPA bots'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Document Automation With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency, not a document software vendor. We design and build document workflows inside the platforms you own, and we are direct about what the technology can and cannot read reliably.',
    items: [
      { title: 'Tested on Your Documents', description: 'We build and test with real samples, including the faint scans, odd layouts and incomplete forms.' },
      { title: 'Review Built In', description: 'Confidence checks and a human review step are part of the first design, not an afterthought.' },
      { title: 'Your Systems, Your Data', description: 'Workflows run on your platforms, with self-hosted options where documents must stay in your environment.' },
      { title: 'Access and Audit Trails', description: 'Each workflow gets only the access it needs, and what it does is logged.' },
      { title: 'Honest About Limits', description: 'If a document type is too poor in quality or too varied to automate well, we will say so.' },
      { title: 'You Own Everything', description: 'Workflows and documentation are handed over, and you pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Automate Your First Document Process',
    intro:
      'We start with one document type that costs the most manual time, prove the approach on your own files and extend from there. Nothing is built until you approve the plan.',
    steps: [
      { title: 'Free Audit', description: 'We review where documents come from, what types you receive and which manual steps follow.' },
      { title: 'Field and Rule Map', description: 'The fields to capture, validation rules, approvals and destination systems are written down and agreed.' },
      { title: 'Sample Set', description: 'We gather real documents, including difficult ones, to test reading and classification against.' },
      { title: 'Build', description: 'OCR and AI processing, workflow logic and integrations are built on the platform agreed in the quote.' },
      { title: 'Test and Launch', description: 'Every path is run with document variations before go-live, and early live runs are reviewed closely.' },
      { title: 'Refine Exceptions', description: 'Patterns in flagged documents are used to adjust prompts and rules, within the monitoring scoped in your quote.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find the document worth automating first',
    heading: 'Stop Retyping What Your Documents Already Say',
    description:
      'Book a free, no-obligation document automation audit. We will look at the documents your team handles, show where reading, checking and routing could be automated, and be clear about where a person should stay involved.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Document and Data Intelligence: Common Questions',
  faqSideText: 'Not sure which of your documents to automate first? Bring a few samples to a free audit and we will look at them with you.',
  faqs: [
    {
      question: 'What is AI document and data intelligence?',
      answer:
        'It is the use of OCR, language models and workflow automation to turn incoming documents into checked, structured data. Documents are collected, classified, read, validated against your records and delivered to your systems, with people reviewing anything uncertain. Clickmasters builds it inside the tools you already use.',
    },
    {
      question: 'Which documents can be automated?',
      answer:
        'Typical candidates include invoices, receipts, application and intake forms, onboarding packs, contracts, shipping manifests, bills of lading, inventory reports and spreadsheets from partners. The best starting point is a document you receive often, in reasonable quality, with a clear set of fields someone currently retypes.',
    },
    {
      question: 'How accurate is AI at reading documents?',
      answer:
        'It depends on the quality and structure of the documents. Clean digital PDFs are usually read well; faint scans, heavy stamps and handwriting are harder. We do not promise a fixed accuracy. Instead, every value is checked against rules and records, and low-confidence fields go to a person before they are used.',
    },
    {
      question: 'Do we need a template for each supplier or client?',
      answer:
        'No. Language models find fields by meaning rather than position, so different layouts of the same document type can be handled by one workflow. We still test with samples from your main senders, because some layouts are harder than others.',
    },
    {
      question: 'Can it handle scanned paper documents?',
      answer:
        'Yes. Scans and photos are converted to text with OCR first, then processed like any other document. Poor-quality scans and handwriting are flagged for review rather than guessed.',
    },
    {
      question: 'Where does the extracted data go?',
      answer:
        'Into the systems you already use, such as Salesforce, HubSpot, QuickBooks, Xero, NetSuite, databases, Airtable or cloud storage, where they offer API access. Older systems without an API can sometimes be updated by an RPA bot. What can be connected is confirmed in the audit.',
    },
    {
      question: 'How is sensitive information protected?',
      answer:
        'Workflows run in accounts you control, use only the access they need and log what they do. Where documents are sensitive, processing can run on a self-hosted platform such as n8n so data stays in your environment. Specific security requirements are agreed with you during scoping.',
    },
    {
      question: 'Is this document AI software we subscribe to?',
      answer:
        'No. Clickmasters is an agency that builds document workflows on platforms you own, such as n8n, Make or Zapier, connected to your systems. You pay platform and AI usage costs directly, and the workflows and documentation belong to you.',
    },
    {
      question: 'What is the difference between OCR and document AI?',
      answer:
        'OCR turns an image of text into text. Document AI goes further: it works out what kind of document it is, which values matter and what they mean, then checks them. OCR is usually the first step inside a larger document AI workflow.',
    },
    {
      question: 'Will this replace the people who handle our documents?',
      answer:
        'It replaces the retyping, not the judgment. Your team still sets the rules, reviews flagged items, approves what needs approval and owns the final records. Most teams find their time moves from data entry to handling the exceptions that actually need a person.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your document sources and manual steps, agree the first document type to automate and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
