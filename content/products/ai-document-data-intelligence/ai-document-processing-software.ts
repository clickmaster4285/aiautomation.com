// content/products/ai-document-data-intelligence/ai-document-processing-software.ts
// Copy + SEO for /products/ai-document-data-intelligence/ai-document-processing-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the practical, end-to-end operational workflow per document type: intake, classify, extract,
//   validate, route, approve, file and deliver to systems. Worked builds: invoices, forms, onboarding packs,
//   logistics paperwork. Field-level extraction depth belongs to AI Data Extraction Software; reading scans
//   to AI OCR Software; the IDP methodology, comparisons and evaluation to Intelligent Document Processing;
//   contracts to AI Contract Analysis.
// - Verified capabilities only: capture from email inboxes, web forms, uploads and cloud folders; OCR plus
//   language models; classification; validation against formats, expected values, POs and existing records;
//   human review with the uncertain field flagged; routing, approvals, filing, template-based document
//   generation; delivery to CRM, ERP, accounting (QuickBooks, Xero, NetSuite), databases and cloud storage
//   where APIs exist; access controls, audit trails, self-hosted n8n.
// - Extraction quality depends on document quality. No accuracy guarantees, handwriting guarantees,
//   compliance certifications, statistics, prices, testimonials, customer names or support promises beyond
//   monitoring and iteration scoped in the quote. Not identity verification or legal review.
// - Clickmasters builds on platforms the client owns — it is not a standalone SaaS product.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_DOCUMENT_PROCESSING_SOFTWARE_PATH = '/products/ai-document-data-intelligence/ai-document-processing-software';

export const aiDocumentProcessingSoftwareSeo: HubSeo = {
  name: 'AI Document Processing Software',
  path: AI_DOCUMENT_PROCESSING_SOFTWARE_PATH,
  title: 'AI Document Processing Software & Workflows | Clickmasters',
  description:
    'AI document processing software built in your tools: documents captured, classified, read, checked, approved, filed and sent to your systems, with human review.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Document & Data Intelligence', path: '/products/ai-document-data-intelligence' },
    { name: 'AI Document Processing Software', path: AI_DOCUMENT_PROCESSING_SOFTWARE_PATH },
  ],
};

export const aiDocumentProcessingSoftwareKeywords = [
  'AI document processing software',
  'automated document processing',
  'document workflow automation',
  'document processing automation',
  'document intake automation',
  'document classification and routing',
  'document approval workflow',
  'automated onboarding document processing',
  'form processing automation',
  'document processing automation agency',
  'custom document processing workflows',
  'how to automate document processing',
  'what does document processing software do',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI document and data intelligence range', href: '/products/ai-document-data-intelligence', section: 'What Is AI Document Processing Software?' },
  { anchor: 'AI invoice processing software', href: '/products/ai-finance-accounting/ai-invoice-processing-software', section: 'Document Processing Automation by Document Type (spotlight)' },
  { anchor: 'focused data extraction builds', href: '/products/ai-document-data-intelligence/ai-data-extraction-software', section: 'Document Processing vs Data Extraction vs IDP (extras)' },
  { anchor: 'intelligent document processing (IDP)', href: '/products/ai-document-data-intelligence/intelligent-document-processing', section: 'Document Processing vs Data Extraction vs IDP (extras)' },
  { anchor: 'self-hosted document automation with n8n', href: '/solutions/document-automation/with-n8n', section: 'Systems Your Document Workflows Connect' },
] as const;

export const aiDocumentProcessingSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Document Processing Software',
    heading: 'AI Document Processing Software That Takes Each Document From Inbox to System',
    accentWords: 3,
    subheading:
      'We build document workflows inside the tools you already use. Each document is collected, identified, read, checked, sent for approval where needed, filed and delivered to the system that needs its data. Your team sees only the documents that need a decision.',
    primaryCta: { text: 'Book a Free Document Processing Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'A hand pressing a glowing Automation control surrounded by icons for people, analytics and charts, representing documents moving automatically through a processing workflow',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Intake', 'Classify', 'Extract', 'Validate', 'Route and approve', 'File and deliver'],
  },

  intro: {
    eyebrow: 'The Whole Workflow',
    heading: 'What Is AI Document Processing Software?',
    paragraphs: [
      'AI document processing software runs the full journey of a business document, from the moment it arrives to the moment its information is in the right system and the file is stored where it belongs. It is not only about reading. A completed form still has to be checked for missing fields, sent to the person who approves it, filed under the right customer and turned into a record in your CRM. Document processing automation handles that whole chain.',
      'Each document type gets its own path. Supplier invoices need matching and approval. Application forms need completeness checks. A new client’s onboarding pack needs every required document present before the account can be opened. AI does the reading and sorting; workflow rules handle the checks, routing and delivery; and a person steps in wherever the document is unclear or a decision is needed.',
      'This page is about building those workflows in practice. It is part of our [AI document and data intelligence range](/products/ai-document-data-intelligence), which also covers data extraction, OCR, intelligent document processing as a category and contract analysis.',
    ],
    problems: [
      'Documents are read in one place, approved by email in another and filed somewhere else again.',
      'Incomplete forms are only noticed after work has started, so customers are chased twice.',
      'Mixed attachments arrive in one email and someone has to split and sort them by hand.',
      'Nobody can say which documents are waiting, who has them or how long they have been there.',
      'Approved documents never quite make it into the CRM or ERP, so systems disagree with the paperwork.',
    ],
  },

  explainer: {
    eyebrow: 'Six Stages',
    heading: 'The Stages of Automated Document Processing',
    paragraphs: [
      'A document workflow is a sequence of small jobs, each of which used to be done by a person. Breaking it into stages makes it easier to decide where AI is needed, where a fixed rule is enough and where a human must stay in the loop.',
      'Not every document needs every stage. A delivery note may need no approval at all; a contract may need two. The design work is choosing the right stages for each document type and agreeing what happens when a stage fails.',
    ],
    points: [
      { title: 'Intake', description: 'Documents are collected from inboxes, web forms, uploads and cloud folders, and the workflow starts as each one arrives.' },
      { title: 'Classification', description: 'The workflow identifies what each file is and splits mixed batches, so every document follows the correct path.' },
      { title: 'Extraction', description: 'OCR and language models read the fields the process needs, across the different layouts you receive.' },
      { title: 'Validation', description: 'Values are checked against formats, expected amounts, purchase orders and existing records.' },
      { title: 'Routing and Approval', description: 'Documents go to the right person by type, value, department or customer, with reminders when they wait.' },
      { title: 'Filing and Delivery', description: 'Approved data is written to your systems, and the original file is stored in a consistent structure with a link back.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'Document Workflow Automation We Build',
    intro:
      'Each build is shaped around one or more document types and the systems they feed. These are the components we combine, used only where your process needs them.',
    items: [
      { title: 'Multi-Channel Intake', description: 'One flow collects documents from a shared mailbox, a web form, an upload page and a cloud folder.' },
      { title: 'Attachment Splitting', description: 'An email carrying several documents is separated, and each file is classified and processed on its own.' },
      { title: 'Type-Specific Paths', description: 'Invoices, forms, onboarding documents and delivery paperwork each follow rules written for them.' },
      { title: 'Completeness Checks', description: 'Required fields and required documents are checked, and missing items are listed by name.' },
      { title: 'Cross-Document Checks', description: 'Details that should agree across a pack, such as a company name or reference number, are compared.' },
      { title: 'Approval Routing', description: 'Documents reach the right approver with the extracted data and the original file side by side.' },
      { title: 'Review Queue', description: 'Flagged documents wait in one queue, each showing the specific field or check that stopped it.' },
      { title: 'Consistent Filing', description: 'Files are renamed and stored by customer, supplier, date or case, so anyone can find them later.' },
      { title: 'Template Documents', description: 'Where the process ends with an outgoing document, a draft is generated from your template for a person to check.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Client Onboarding Pack, Processed End to End',
    intro:
      'A worked example: a professional services firm asks every new client to send a signed engagement form, a company registration certificate, a completed details form and a bank letter. Here is how the pack moves through an automated workflow.',
    steps: [
      { title: 'Collect', description: 'The client uploads four files through the onboarding form. The workflow starts immediately and saves the originals with a reference.' },
      { title: 'Identify', description: 'Each file is classified. The workflow confirms it has an engagement form, a registration certificate and a bank letter, but the details form is missing.' },
      { title: 'Read', description: 'Company name, registration number, registered address, signatory and bank details are extracted from the documents that did arrive.' },
      { title: 'Check', description: 'The company name on the certificate and the engagement form are compared. They match. The signature field is present and dated.' },
      { title: 'Follow Up', description: 'The client receives a message naming the one missing form. When it arrives, the pack is complete and moves on.' },
      { title: 'Approve and Deliver', description: 'The account manager reviews the summary and approves. The client record is created in the CRM and the pack is filed in the client folder.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Document Processing Automation Changes Day to Day',
    intro:
      'The difference shows up in the handoffs. Documents stop waiting between steps, and the people who handle them see a short list of decisions instead of a full inbox.',
    items: [
      { title: 'Documents Keep Moving', description: 'Each stage starts as soon as the previous one finishes, rather than when someone next checks the inbox.' },
      { title: 'Problems Found at Intake', description: 'Missing fields and missing documents are raised on arrival, not halfway through the work.' },
      { title: 'A Visible Pipeline', description: 'Anyone can see which documents are in progress, which are waiting for approval and which are done.' },
      { title: 'Systems Match the Paperwork', description: 'Approved data reaches the CRM, ERP or accounting system automatically, so records stay current.' },
      { title: 'Files You Can Find', description: 'Consistent naming and folder rules mean documents are stored where people expect them.' },
      { title: 'A Record of Every Step', description: 'Who reviewed, approved or corrected each document, and when, is logged.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI Plus Workflow Rules',
    heading: 'What the AI Handles and What Stays With Your Team',
    paragraphs: [
      'AI earns its place at the reading and sorting stages: recognizing that a scanned page is a registration certificate, finding the signatory’s name on a form with an unfamiliar layout, or noticing that an email contains three unrelated attachments. Everything after that runs on rules you agree in advance, because routing, approvals and filing should behave the same way every time.',
      'Your team stays responsible for the outcomes. Low-confidence fields and failed checks go to a person with the specific value highlighted. Approvals stay with the people who hold them today. And the workflow only gets the system access it needs, with every action recorded.',
    ],
    aiDoes: [
      'Identifies each document and splits mixed batches',
      'Reads the fields each document type needs',
      'Compares details across documents in a pack',
      'Lists missing fields and missing documents',
      'Summarizes a pack for the approver',
      'Drafts outgoing documents from templates',
    ],
    peopleDo: [
      'Decide which documents and fields matter',
      'Review flagged fields and failed checks',
      'Approve documents before they take effect',
      'Check generated documents before they are sent',
    ],
  },

  spotlight: {
    eyebrow: 'By Document Type',
    heading: 'Document Processing Automation by Document Type',
    paragraphs: [
      'The workflow pattern stays the same, but the details change with the document. Forms need completeness checks. Packs need every document present. Invoices need matching and approval limits. Logistics paperwork needs references checked against bookings. We design each path around the decisions your team actually makes with that document.',
      'Supplier invoices are the most common starting point because the volume is visible and the rules are usually clear. If invoices are your main problem, our page on [AI invoice processing software](/products/ai-finance-accounting/ai-invoice-processing-software) covers duplicate checks, purchase order matching and posting in detail.',
    ],
    points: [
      { title: 'Invoices', description: 'Captured from the AP inbox, read, checked against purchase orders and routed for approval before posting.' },
      { title: 'Application and Intake Forms', description: 'Checked for required fields and formats, with incomplete submissions returned to the sender with the gaps listed.' },
      { title: 'Onboarding Packs', description: 'Each required document is confirmed present, key details are compared across the pack, and the result is filed.' },
      { title: 'Logistics Paperwork', description: 'Shipping manifests, bills of lading and inventory reports read and matched against the booking or order.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Designing for Real Documents',
      heading: 'What Happens When a Document Does Not Fit',
      accentWords: 3,
      paragraphs: [
        'Every document process has awkward cases: a form submitted twice, a scan with a page missing, a supplier who changes layout, a PDF that turns out to be a photo of a screen. A workflow that only handles the tidy cases simply moves the mess somewhere else. Most of the design effort goes into deciding what happens when something does not fit.',
        'We agree those paths before building. Each failure has a destination, an owner and a message that explains what went wrong. Once a document has been fixed, it re-enters the flow at the stage it left, keeping its history, instead of starting again.',
      ],
      points: [
        { title: 'Unrecognized Documents', description: 'Files the workflow cannot classify are held for a person to label, not forced down the nearest path.' },
        { title: 'Duplicate Submissions', description: 'Documents that look like ones already received are paused for confirmation before they are processed again.' },
        { title: 'Poor-Quality Scans', description: 'Pages that cannot be read reliably are flagged, and the sender can be asked for a better copy.' },
        { title: 'Resume After Correction', description: 'Corrected documents continue from where they stopped, with the change recorded.' },
      ],
    },
    {
      eyebrow: 'Where This Fits',
      heading: 'Document Processing vs Data Extraction vs IDP',
      accentWords: 2,
      paragraphs: [
        'These terms overlap, so it helps to separate them by the question you are asking. Document processing software answers “how does this document get from arrival to done?” It is the full operational workflow. If your process already works and you only need fields, tables and line items pulled reliably out of files into clean data, our [focused data extraction builds](/products/ai-document-data-intelligence/ai-data-extraction-software) are the narrower fit.',
        'If you are still evaluating the approach itself, for example comparing vendors, deciding between OCR, RPA and AI, or judging whether the full method is worth it for your volume, the page on [intelligent document processing (IDP)](/products/ai-document-data-intelligence/intelligent-document-processing) covers the methodology and how to assess it.',
      ],
      points: [
        { title: 'Choose Document Processing When', description: 'You want a specific document type handled end to end, including approvals, filing and delivery.' },
        { title: 'Choose Data Extraction When', description: 'The main pain is keying data out of files, and the rest of the process can stay as it is.' },
        { title: 'Read About IDP When', description: 'You are comparing approaches or tools and want to understand how the components fit together.' },
        { title: 'Often Combined', description: 'Many builds start as extraction for one document and grow into a full workflow once the data is trusted.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Document Workflow Automation Is For',
    items: [
      { title: 'Operations Teams', description: 'Teams that receive the same kinds of documents every day and move them through several steps by hand.' },
      { title: 'Client Onboarding Teams', description: 'Service businesses that need complete, consistent paperwork from every new client before work starts.' },
      { title: 'HR and People Teams', description: 'Teams collecting new-starter document packs that must be checked, filed and recorded.' },
      { title: 'Finance Teams', description: 'AP teams processing supplier invoices and the supporting documents that come with them.' },
      { title: 'Logistics Coordinators', description: 'Staff reading manifests, bills of lading and inventory reports and updating systems from them.' },
      { title: 'Office Managers', description: 'People in smaller businesses who handle every document type themselves and need the sorting done for them.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Systems Your Document Workflows Connect',
    paragraphs: [
      'A document workflow is only finished when the data lands in a system. We connect to CRMs such as Salesforce and HubSpot, accounting tools such as QuickBooks, Xero and NetSuite, ERPs, databases, Airtable and cloud storage, through APIs and webhooks where they are available. What can be connected in your stack is confirmed in the audit. For systems with no API, an RPA bot can enter the data through the screen.',
      'Workflows are built on n8n, Make or Zapier, with OpenAI, Claude or Gemini handling the reading steps. When documents contain sensitive information, [self-hosted document automation with n8n](/solutions/document-automation/with-n8n) keeps files and data within your own environment.',
    ],
    groups: [
      { label: 'Intake', items: ['Shared mailboxes', 'Web forms', 'Upload pages', 'Cloud folders'] },
      { label: 'Destinations', items: ['Salesforce', 'HubSpot', 'QuickBooks', 'Xero', 'NetSuite', 'Databases', 'Cloud storage'] },
      { label: 'Workflow Platforms', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Connections', items: ['APIs', 'Webhooks', 'RPA bots'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Document Workflows With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We build document workflows on platforms you own, around the approvals and filing rules you already use, and hand them over fully documented.',
    items: [
      { title: 'Designed Per Document Type', description: 'Each document gets the stages and checks it needs, not a single generic pipeline.' },
      { title: 'Failure Paths Agreed First', description: 'What happens to unclear, incomplete or duplicate documents is decided before anything is built.' },
      { title: 'Real Samples, Real Tests', description: 'We test with your own documents, including the difficult ones, before going live.' },
      { title: 'Approvals Where You Want Them', description: 'Approvers work in email, chat or the tools they already use, at the points you choose.' },
      { title: 'Access Kept Narrow', description: 'Workflows get only the permissions they need, and their actions are logged.' },
      { title: 'You Own the Result', description: 'Workflows and documentation are yours. You pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Automate Your First Document Workflow',
    intro:
      'We start with one document type, usually the one with the most volume or the most handoffs, and extend to others once it is working. You approve the design before we build.',
    steps: [
      { title: 'Free Audit', description: 'We map where your documents come from, what types arrive and every manual step that follows.' },
      { title: 'Workflow Design', description: 'Fields, validation rules, approvers, filing structure and destination systems are agreed in writing.' },
      { title: 'Sample Collection', description: 'We gather real documents, including incomplete and poor-quality ones, to build and test against.' },
      { title: 'Build', description: 'Intake, OCR and AI reading, workflow logic and integrations are built on the agreed platform.' },
      { title: 'Test and Launch', description: 'Every path is run with document variations, then the first live documents are reviewed closely.' },
      { title: 'Refine', description: 'Exceptions from early runs are used to adjust rules and prompts, within the monitoring scoped in your quote.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline, including which document types are in the first phase.',
  },

  cta: {
    bandHeading: 'See where your documents wait',
    heading: 'Let Your Documents Move Without Being Carried',
    description:
      'Book a free, no-obligation document processing audit. We will trace how one of your document types moves today, show which stages could run automatically, and be clear about where a person should stay in control.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Document Processing Software: Common Questions',
  faqSideText: 'Have a document type that always causes delays? Bring a few examples to a free audit and we will map its workflow with you.',
  faqs: [
    {
      question: 'What is AI document processing software?',
      answer:
        'It is software that runs the full workflow for a business document: collecting it, identifying its type, reading its contents, checking them, routing it for approval, filing it and sending its data to your systems. Clickmasters builds it inside the platforms you already use rather than selling a separate app.',
    },
    {
      question: 'How is automated document processing different from data extraction?',
      answer:
        'Data extraction gets the information out of a document. Automated document processing covers everything around that as well, including completeness checks, approvals, filing and delivery to other systems. Extraction is one stage inside a processing workflow.',
    },
    {
      question: 'Which document types work best?',
      answer:
        'Documents you receive regularly, with a known set of fields and a clear next step: supplier invoices, application and intake forms, onboarding packs, delivery and shipping paperwork. Rare, one-off documents are usually better left to a person.',
    },
    {
      question: 'Can one workflow handle different layouts of the same document?',
      answer:
        'Yes. AI reads fields by meaning rather than fixed position, so one workflow can process forms or invoices from different senders. We test with samples from your main sources, and fields the AI is unsure about are flagged for review.',
    },
    {
      question: 'What happens if a document is incomplete?',
      answer:
        'The workflow lists exactly what is missing, whether a field or a whole document, and either holds the item for your team or sends the sender a request naming the gap. Once the missing item arrives, processing resumes.',
    },
    {
      question: 'Can documents be approved inside the workflow?',
      answer:
        'Yes. Documents can be routed to approvers by type, value, department or customer, with the extracted data and original file together. Approvers can work from email, chat or another tool you already use, and every decision is logged.',
    },
    {
      question: 'Can it generate documents as well as process them?',
      answer:
        'Where a process ends with an outgoing document, such as a confirmation or a draft agreement, the workflow can fill your template with the approved data. A person checks the draft before it is sent.',
    },
    {
      question: 'Do we need to change the systems we use?',
      answer:
        'Usually not. We connect to tools such as Salesforce, HubSpot, QuickBooks, Xero, NetSuite, databases and cloud storage where they offer API access, and confirm what is possible during the audit.',
    },
    {
      question: 'Can sensitive documents stay in our environment?',
      answer:
        'Yes. Workflows can run on a self-hosted platform such as n8n, with access controls and audit trails, so documents and data stay within your environment. Specific security requirements are agreed during scoping.',
    },
    {
      question: 'What does document processing automation cost to run?',
      answer:
        'You pay the platform and AI usage costs directly to the providers, so running costs depend on your document volume and the tools chosen. Your written quote sets out the build scope and the expected usage costs before you commit.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review one or two of your document workflows, agree which to automate first and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
