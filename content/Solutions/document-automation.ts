// content/Solutions/document-automation.ts
export const documentAutomation = {
  url: '/solutions/document-automation',
  titleTag: 'Document Automation for Operations Teams | Clickmasters',
  metaDescription: 'Document automation that extracts, checks, and routes data from invoices, forms, and files into the systems you use. Book a free audit. Ask today.',
  primaryKeyword: 'document automation',
  bookingLink: '/free-automation-audit',

  heroBadge: 'Document & Data Automation',
  heroHeading: 'Document Automation Solutions for Faster Document Processing',
  heroSubheading:
    'Document automation from Clickmasters turns repetitive document handling into a structured digital workflow. Our document automation software workflows are designed for contracts, forms, PDFs, reports, employee documents, customer files, and other document-heavy business processes.',

  sections: {
    'AI Document Automation for Extraction and Classification': [
      'AI document automation helps when documents contain different layouts, unstructured text or information that is difficult to process with simple field rules. It can support understanding before standard workflow logic takes over. Clickmasters uses AI where it improves accuracy, classification or extraction while keeping human review available for important exceptions.',
      '**AI document data extraction and field recognition** Names, dates, totals and reference numbers are pulled from varied layouts and mapped to the fields your systems expect.',
      '**Document classification and unstructured data processing** Each incoming file is identified as a contract, form, report or letter, even when free text lacks a fixed structure.',
      '**Summarization and validation support** Long files are condensed into key points, and captured values are checked against your rules before anyone relies on them.',
      '**Intelligent routing and exception identification** Files go to the right team based on content, while unclear, incomplete or unusual documents are flagged for a person.',
    ],
    'Document Management and Workflow Automation Integrations': [
      'Document management and workflow automation create more value when processed information reaches the system where teams actually use it. Integrations prevent employees from retyping approved document data into several platforms. Clickmasters connects supported document workflows with business applications through available integrations and APIs.',
      '**CRM Systems** Customer and lead records',
      '**ERP & Accounting** Operational and finance data',
      '**Email & Cloud Storage** Document libraries and file shares',
      '**Databases & APIs** Custom business applications',
    ],
    'Problems Solved by Intelligent Document Automation': [
      'Manual document handling creates slow approvals, repeated data entry, and inconsistent filing. Intelligent document automation helps create a predictable process from intake to storage.',
      '**Reduce manual reading, copying, and rekeying of document data** Key fields are captured from each file automatically, so staff no longer type the same details into several screens.',
      '**Prevent files from being lost or routed to the wrong team** Every incoming file is logged, labeled by type and sent to its owner, leaving a clear record of where it went.',
      '**Speed up approval and document review workflows** Reviewers receive the file with extracted details and a reminder, and signoffs move to the next step without email chasing.',
      '**Keep approved document data consistent across connected systems** Once a record is signed off, the same values flow into your CRM, ERP and storage, avoiding conflicting versions.',
    ],
    'Business Benefits of Document Process Automation': [
      'Document process automation software helps teams process higher document volumes without adding the same amount of repetitive administration. It also improves visibility because each document follows a defined path.',
      '**Faster document processing and approvals** Files start moving the moment they arrive, with intake, checks and reviewer handoffs running without someone pushing each step.',
      '**Less manual data entry and filing work** Captured fields populate your systems and files are saved to the correct folder with consistent naming, freeing staff for review.',
      '**Better data consistency across systems** Approved values reach every connected application from one source, so records in finance, sales and operations match.',
      '**Easier scaling for growing document volumes** Additional files follow the same defined path, letting your team handle busier periods without adding repetitive administration.',
    ],
    'Why Choose Clickmasters for AI Document Automation?': [
      'Businesses need AI document automation that can work with existing processes and keep human review where needed. Clickmasters combines extraction, workflow design, and system integration into one practical solution.',
      '**Custom document workflows for your actual file types** We design around the contracts, forms and reports your team really handles instead of applying a generic template.',
      '**OCR, AI extraction and classification where useful** We choose text recognition or AI only for files that need it and keep simpler documents on straightforward rules.',
      '**Human approval and exception handling** Sensitive files and low-confidence results pause for a reviewer, who can correct values before the workflow continues.',
      '**CRM, ERP, cloud storage and API integrations** We link processed files and approved data to the platforms your team already uses, so nothing needs retyping.',
    ],
  },

  features: [
    {
      icon: 'Zap',
      title: 'Document Capture & Automated Document Processing',
      description:
        'Collect files from email, forms, uploads, or cloud folders, and start automated document processing as soon as a new document arrives.',
    },
    {
      icon: 'FileText',
      title: 'OCR, AI Document Processing & Data Extraction',
      description:
        'Use OCR automation, AI document processing, and document data extraction to capture relevant fields from supported files.',
    },
    {
      icon: 'GitBranch',
      title: 'Document Classification, Validation & Routing',
      description:
        'Apply intelligent document processing to identify document types, validate extracted information and route files to the right workflow.',
    },
    {
      icon: 'Database',
      title: 'Approval, Filing & Data Synchronization',
      description:
        'Use automated document workflow rules for approvals, storage, document updates and synchronization with connected business systems.',
    },
  ],

  processSteps: [
    { number: '01', title: 'Audit', description: 'Audit document sources, types, and manual processing steps' },
    { number: '02', title: 'Map', description: 'Map extraction fields, validation rules, approvals, and destinations' },
    { number: '03', title: 'Build', description: 'Build OCR/AI processing, workflow logic, and integrations' },
    { number: '04', title: 'Test, Launch & Optimize', description: 'Test document variations, launch, and optimize exceptions' },
  ],

  faqQuestions: [
    {
      question: 'What is document automation?',
      answer:
        'Document automation uses workflows, software, OCR and AI to capture, process, route, approve, generate or store business documents.',
    },
    {
      question: 'What is document workflow automation?',
      answer:
        'Document workflow automation moves documents through defined processing, validation, approval and storage stages automatically.',
    },
    {
      question: 'What is intelligent document automation?',
      answer:
        'Intelligent document automation uses AI or machine learning to understand, classify or extract information from documents before workflow rules continue.',
    },
    {
      question: 'Can AI process PDFs and scanned documents?',
      answer:
        'Yes, supported PDFs and scans can use OCR and AI document processing, although extraction quality depends on document quality and structure.',
    },
    {
      question: 'Can document data update our CRM or ERP?',
      answer:
        'Yes, if the required integrations or APIs are available, approved data can update connected business systems.',
    },
    {
      question: 'What affects document automation cost?',
      answer:
        'Cost depends on document types, volume, extraction complexity, integrations, AI requirements and approval logic.',
    },
  ],

  relatedSolutions: [
    {
      slug: 'invoice-automation',
      title: 'Invoice Automation',
      description: 'Capture, validate, and route invoice data into your accounting and ERP systems.',
    },
    {
      slug: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Multi-step processes that run automatically across your tools.',
    },
    {
      slug: 'crm-automation',
      title: 'CRM Automation',
      description: 'Keep customer and lead records updated automatically across your CRM.',
    },
  ],

  cta: 'Talk to an Expert About Document Automation',

  // Page layout for app/solutions/[service]: section order, titles and page-specific props.
  page: {
    schema: { name: 'Document Automation', serviceType: 'Document Automation' },
    blocks: [
      {
        type: 'HeroSection',
        props: {
          primaryCta: { text: 'Book a Free Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'View All Solutions', href: '/solutions' },
        },
      },
      {
        type: 'FeatureGrid',
        props: {
          title: 'Document Workflow Automation From Capture to System Update',
          eyebrow: 'Document Workflow Automation',
          subtitle:
            'With business document automation, a document can trigger classification, validation, routing, approval, and storage based on its content and business rules.',
        },
      },
      {
        type: 'AutomationSection',
        section: 'AI Document Automation for Extraction and Classification',
        props: { title: 'AI Document Automation for Extraction and Classification' },
      },
      {
        type: 'ContentSection',
        section: 'Document Management and Workflow Automation Integrations',
        props: { title: 'Document Management and Workflow Automation Integrations', eyebrow: 'Integrations' },
      },
      {
        type: 'ProblemsSection',
        section: 'Problems Solved by Intelligent Document Automation',
        props: { title: 'Problems Solved by Intelligent Document Automation' },
      },
      {
        type: 'ContentSection',
        section: 'Business Benefits of Document Process Automation',
        props: { title: 'Business Benefits of Document Process Automation', eyebrow: 'Benefits' },
      },
      {
        type: 'ProcessSteps',
        props: {
          title: 'How Clickmasters Builds Document Automation Solutions',
          subtitle:
            'A reliable document automation solution starts with understanding document types, required fields, exceptions, and approval rules. Clickmasters maps the complete process before selecting OCR, AI, or integration tools.',
        },
      },
      {
        type: 'WhyUsSection',
        section: 'Why Choose Clickmasters for AI Document Automation?',
        props: { title: 'Why Choose Clickmasters for AI Document Automation?' },
      },
      { type: 'FAQSection', props: { title: 'Frequently Asked Questions', subtitle: 'Common questions about document automation' } },
      { type: 'RelatedSolutions', props: { title: 'Explore Other Solutions', subtitle: 'More ways we can help you automate' } },
      {
        type: 'CTASection',
        props: {
          subtitle: 'Book a free automation audit — 30 minutes, no obligation, and an honest read on where document automation pays off for your business.',
          primaryCta: { text: 'Book a Free Automation Audit', href: { $ref: 'bookingLink' } },
        },
      },
    ],
  },
};
