# Internal Linking Strategy

## 1. Architecture

```
Home (/)
├── /services ─────────────┐   existing: function-level services
├── /solutions ────────────┤   existing: function × industry pages
├── /industries ───────────┤   existing: sector overviews
├── /platforms ────────────┤   existing: tool implementation pages
└── /products/  (no hub page yet; see content gap analysis)
    ├── industry-specific-ai-automation          (P1 parent)
    │   ├── ai-healthcare-automation             (C1)
    │   ├── ai-real-estate-automation            (C2)
    │   ├── ai-logistics-automation              (C3)
    │   ├── ai-education-automation              (C4)
    │   └── ai-legal-automation                  (C5)
    └── general-ai-automation                    (P2 parent)
        ├── ai-automation-solutions              (G1)
        ├── ai-automation-tools-for-businesses   (G2)
        ├── custom-ai-automation-software        (G3)
        ├── enterprise-ai-automation-solutions   (G4)
        ├── ai-powered-business-software         (G5)
        ├── intelligent-business-automation      (G6)
        ├── ai-integration-services              (G7)
        ├── end-to-end-ai-automation             (G8)
        └── ai-process-optimization              (G9)
```

## 2. Rules applied

1. **Every child links to its parent** in the first third of the page. Every parent links to all of its children, each from a dedicated section.
2. **Both parents link to each other** (P1 ↔ P2), joining the two categories.
3. **Each industry child links to one general child, and each general child links to one industry child or another general child.** This builds a cross-category mesh without over-linking (pairs: C1→G7, C2→G2, C3→G3, C4→G5, C5→G9; G1→C2, G3→C3, G5→C4, G6→C1, G7→C1, G9→C5).
4. **Industry children link down to the matching `/solutions/<type>/for-<sector>` pages** (4–5 each) and up or across to the `/industries/...` overview where one exists.
5. **General children link to the matching `/services`, `/platforms` and product pages.**
6. **7–10 contextual links per child page, 11–14 per parent page.** No link appears twice on a page, except the CTA to `/free-automation-audit` (mid-page and final).
7. **Anchor text is unique across all 16 pages**, checked automatically. CTA anchors to `/free-automation-audit` vary per page.
8. **No links to unverified URLs.** Every target is either in the live sitemap (`verified-urls.md`) or a `/products/...` route on the `product-pages` branch. The case study is not linked because it still contains unapproved placeholders.

**Deployment note:** the 16 new pages and the existing product pages they link to (e.g., `ai-contract-analysis`, `enterprise-workflow-automation`) must ship together on the `product-pages` branch. Otherwise these links return 404.

## 3. Outbound links from the new pages (complete plan)

| Source page | Target page | Anchor text | Linking context (section) |
|---|---|---|---|
| /products/industry-specific-ai-automation | / | AI automation agency | Intro |
| /products/industry-specific-ai-automation | /products/industry-specific-ai-automation/ai-healthcare-automation | AI healthcare automation for practices and clinics | The sectors we build for: Healthcare |
| /products/industry-specific-ai-automation | /products/industry-specific-ai-automation/ai-real-estate-automation | real estate automation built on your CRM | The sectors we build for: Real estate |
| /products/industry-specific-ai-automation | /products/industry-specific-ai-automation/ai-logistics-automation | AI logistics automation for freight and 3PL teams | The sectors we build for: Logistics |
| /products/industry-specific-ai-automation | /products/industry-specific-ai-automation/ai-education-automation | education administration automation | The sectors we build for: Education |
| /products/industry-specific-ai-automation | /products/industry-specific-ai-automation/ai-legal-automation | legal workflow automation for firms and in-house teams | The sectors we build for: Legal |
| /products/industry-specific-ai-automation | /industries | all the sectors we work with | Other sectors |
| /products/industry-specific-ai-automation | /products/general-ai-automation | general AI automation for business | Other sectors |
| /products/industry-specific-ai-automation | /solutions | browse solutions by business function | What stays the same in every sector |
| /products/industry-specific-ai-automation | /free-automation-audit | Book a Free Industry Automation Audit | Mid-page CTA (after The sectors we build for) |
| /products/industry-specific-ai-automation | /free-automation-audit | Book a Free Automation Audit | Final CTA |
| /products/industry-specific-ai-automation/ai-healthcare-automation | /products/industry-specific-ai-automation | AI solutions for specific industries | Intro |
| /products/industry-specific-ai-automation/ai-healthcare-automation | /industries/ai-automation-for-healthcare | our healthcare sector overview | Intro |
| /products/industry-specific-ai-automation/ai-healthcare-automation | /solutions/appointment-booking-automation/for-healthcare | appointment booking automation for healthcare | What we automate: Scheduling, reminders and rescheduling |
| /products/industry-specific-ai-automation/ai-healthcare-automation | /solutions/document-automation/for-healthcare | document workflows for healthcare practices | What we automate: Patient intake and practice documents |
| /products/industry-specific-ai-automation/ai-healthcare-automation | /solutions/ai-voice-agents/for-healthcare | AI voice agents for clinics | What we automate: After-hours and overflow calls |
| /products/industry-specific-ai-automation/ai-healthcare-automation | /solutions/customer-support-automation/for-healthcare | patient support inbox automation | What we automate: The patient message inbox |
| /products/industry-specific-ai-automation/ai-healthcare-automation | /free-automation-audit | Book a Free Healthcare Automation Audit | Mid-page CTA (after Example projects) |
| /products/industry-specific-ai-automation/ai-healthcare-automation | /products/industry-specific-ai-automation/ai-legal-automation | legal workflow automation | Patient data, privacy and human oversight |
| /products/industry-specific-ai-automation/ai-healthcare-automation | /products/general-ai-automation/ai-integration-services | connecting AI to EHR and practice systems | Technologies and integrations |
| /products/industry-specific-ai-automation/ai-healthcare-automation | /free-automation-audit | Book a Free Automation Audit | Final CTA |
| /products/industry-specific-ai-automation/ai-real-estate-automation | /products/industry-specific-ai-automation | automation tailored to specific sectors | Intro |
| /products/industry-specific-ai-automation/ai-real-estate-automation | /industries/ai-automation-for-real-estate | real estate industry overview | Intro |
| /products/industry-specific-ai-automation/ai-real-estate-automation | /products/general-ai-automation/ai-automation-tools-for-businesses | how to choose AI automation tools for your business | You probably don't need another app |
| /products/industry-specific-ai-automation/ai-real-estate-automation | /solutions/lead-generation-automation/for-real-estate | real estate lead generation automation | What we automate: Lead response and qualification |
| /products/industry-specific-ai-automation/ai-real-estate-automation | /solutions/ai-chatbots/for-real-estate | AI chatbots for property enquiries | What we automate: Property enquiries on your website |
| /products/industry-specific-ai-automation/ai-real-estate-automation | /solutions/appointment-booking-automation/for-real-estate | showing and appointment booking automation | What we automate: Showing scheduling |
| /products/industry-specific-ai-automation/ai-real-estate-automation | /solutions/crm-automation/for-real-estate | CRM automation for real estate teams | What we automate: CRM updates and pipeline hygiene |
| /products/industry-specific-ai-automation/ai-real-estate-automation | /platforms/hubspot-automation-services | HubSpot automation work for brokerages | Example projects, scoped per brokerage |
| /products/industry-specific-ai-automation/ai-real-estate-automation | /free-automation-audit | Book a Free Real Estate Automation Audit | Mid-page CTA (after Example projects) |
| /products/industry-specific-ai-automation/ai-real-estate-automation | /free-automation-audit | Book a Free Automation Audit | Final CTA |
| /products/industry-specific-ai-automation/ai-logistics-automation | /products/industry-specific-ai-automation | sector-specific AI automation | Intro |
| /products/industry-specific-ai-automation/ai-logistics-automation | /products/ai-document-data-intelligence/ai-data-extraction-software | AI data extraction software | How it works (AI reads and extracts) |
| /products/industry-specific-ai-automation/ai-logistics-automation | /solutions/ai-workflow-automation/for-logistics | logistics workflow automation | Use cases (Freight forwarders) |
| /products/industry-specific-ai-automation/ai-logistics-automation | /solutions/document-automation/for-logistics | document automation for logistics teams | Use cases (3PLs) |
| /products/industry-specific-ai-automation/ai-logistics-automation | /solutions/ai-voice-agents/for-logistics | AI voice agent set up for logistics calls | Use cases (Carriers) |
| /products/industry-specific-ai-automation/ai-logistics-automation | /solutions/customer-support-automation/for-logistics | customer support automation for logistics | Use cases (Customer service) |
| /products/industry-specific-ai-automation/ai-logistics-automation | /solutions/invoice-automation/for-logistics | invoice automation for freight and logistics | Use cases (Billing) |
| /products/industry-specific-ai-automation/ai-logistics-automation | /free-automation-audit | Book a free automation audit | Mid-page CTA |
| /products/industry-specific-ai-automation/ai-logistics-automation | /products/general-ai-automation/custom-ai-automation-software | custom automation software for older systems and portals | Technologies and integrations |
| /products/industry-specific-ai-automation/ai-logistics-automation | /free-automation-audit | Book a Free Logistics Automation Audit | Final CTA |
| /products/industry-specific-ai-automation/ai-education-automation | /products/industry-specific-ai-automation | industry-specific AI automation category | Intro |
| /products/industry-specific-ai-automation/ai-education-automation | /solutions/ai-chatbots/for-education | chatbot built for education enquiries | How it works (assistant answers) |
| /products/industry-specific-ai-automation/ai-education-automation | /solutions/crm-automation/for-education | CRM automation for schools and colleges | How it works (record created) |
| /products/industry-specific-ai-automation/ai-education-automation | /solutions/appointment-booking-automation/for-education | appointment booking automation for education | How it works (visit booking) |
| /products/industry-specific-ai-automation/ai-education-automation | /solutions/business-process-automation/for-education | business process automation for education | Use cases (Colleges and universities) |
| /products/industry-specific-ai-automation/ai-education-automation | /solutions/reporting-automation/for-education | education reporting automation | Use cases (Operations and leadership) |
| /products/industry-specific-ai-automation/ai-education-automation | /services/ai-knowledge-assistants | AI knowledge assistant | Use cases (Operations and leadership) |
| /products/industry-specific-ai-automation/ai-education-automation | /free-automation-audit | Book a free automation audit | Mid-page CTA |
| /products/industry-specific-ai-automation/ai-education-automation | /products/general-ai-automation/ai-powered-business-software | adding AI to the business software you already run | Technologies and integrations |
| /products/industry-specific-ai-automation/ai-education-automation | /free-automation-audit | Book a Free Education Automation Audit | Final CTA |
| /products/industry-specific-ai-automation/ai-legal-automation | /products/industry-specific-ai-automation | industry-specific AI automation | Intro |
| /products/industry-specific-ai-automation/ai-legal-automation | /industries/ai-automation-for-law-firms | AI automation for law firms | Intro |
| /products/industry-specific-ai-automation/ai-legal-automation | /solutions/ai-chatbots/for-law-firms | legal intake chatbot | How it works (Enquiry) |
| /products/industry-specific-ai-automation/ai-legal-automation | /solutions/crm-automation/for-law-firms | CRM automation built for law firms | How it works (Intake) |
| /products/industry-specific-ai-automation/ai-legal-automation | /solutions/document-automation/for-law-firms | document automation for law firms | How it works (Matter opening and document assembly) |
| /products/industry-specific-ai-automation/ai-legal-automation | /products/ai-document-data-intelligence/ai-contract-analysis | AI contract analysis | Use cases (In-house legal teams) |
| /products/industry-specific-ai-automation/ai-legal-automation | /services/ai-knowledge-assistants | knowledge assistant that draws on your firm's precedents and procedures | Key capabilities |
| /products/industry-specific-ai-automation/ai-legal-automation | /free-automation-audit | Book a free automation audit | Mid-page CTA |
| /products/industry-specific-ai-automation/ai-legal-automation | /products/general-ai-automation/ai-process-optimization | process optimization before automation | How we implement (Strategy and mapping) |
| /products/industry-specific-ai-automation/ai-legal-automation | /free-automation-audit | Book a Free Legal Automation Audit | Final CTA |
| /products/general-ai-automation | / | Clickmasters, an AI automation agency | Intro |
| /products/general-ai-automation | /products/general-ai-automation/ai-automation-solutions | AI automation solutions for small and growing businesses | Find the right starting point |
| /products/general-ai-automation | /products/general-ai-automation/ai-automation-tools-for-businesses | guide to AI automation tools | Find the right starting point |
| /products/general-ai-automation | /products/general-ai-automation/custom-ai-automation-software | custom AI automation software | Find the right starting point |
| /products/general-ai-automation | /products/general-ai-automation/enterprise-ai-automation-solutions | enterprise AI automation with governance | Find the right starting point |
| /products/general-ai-automation | /products/general-ai-automation/ai-powered-business-software | AI-powered business software | Find the right starting point |
| /products/general-ai-automation | /products/general-ai-automation/intelligent-business-automation | Intelligent business automation | Find the right starting point |
| /products/general-ai-automation | /products/general-ai-automation/ai-integration-services | AI integration services | Find the right starting point |
| /products/general-ai-automation | /products/general-ai-automation/end-to-end-ai-automation | end-to-end AI automation | Find the right starting point |
| /products/general-ai-automation | /products/general-ai-automation/ai-process-optimization | AI process optimization | Find the right starting point |
| /products/general-ai-automation | /free-automation-audit | Book a free automation audit | Mid-page CTA |
| /products/general-ai-automation | /services | full list of our services | Technologies we work with |
| /products/general-ai-automation | /products/industry-specific-ai-automation | industry-specific AI solutions | Working in a specific industry? |
| /products/general-ai-automation | /free-automation-audit | Request your free audit | Final CTA |
| /products/general-ai-automation/ai-automation-solutions | /products/general-ai-automation | our overview of AI automation for business | Intro |
| /products/general-ai-automation/ai-automation-solutions | /solutions/lead-generation-automation | lead generation automation | What a small business can automate |
| /products/general-ai-automation/ai-automation-solutions | /solutions/appointment-booking-automation | appointment booking automation | What a small business can automate |
| /products/general-ai-automation/ai-automation-solutions | /services/ai-chatbots | AI chatbots for customer questions | What a small business can automate |
| /products/general-ai-automation/ai-automation-solutions | /solutions | compare every solution by business function | What a small business can automate |
| /products/general-ai-automation/ai-automation-solutions | /free-automation-audit | Book a free automation audit | Mid-page CTA |
| /products/general-ai-automation/ai-automation-solutions | /products/general-ai-automation/ai-automation-tools-for-businesses | how to compare automation tools | Tools and integrations |
| /products/general-ai-automation/ai-automation-solutions | /services/ai-workflow-automation | AI workflow automation service | Why small businesses work with Clickmasters |
| /products/general-ai-automation/ai-automation-solutions | /products/industry-specific-ai-automation/ai-real-estate-automation | real estate automation for brokerages | Why small businesses work with Clickmasters |
| /products/general-ai-automation/ai-automation-solutions | /free-automation-audit | Get your free audit | Final CTA |
| /products/general-ai-automation/ai-automation-tools-for-businesses | /products/general-ai-automation | AI automation for business overview | Intro |
| /products/general-ai-automation/ai-automation-tools-for-businesses | /platforms | platforms we build on | The four categories of tools |
| /products/general-ai-automation/ai-automation-tools-for-businesses | /platforms/zapier-automation-services | Zapier automation services | Zapier, Make, n8n and HubSpot workflows compared |
| /products/general-ai-automation/ai-automation-tools-for-businesses | /platforms/make-automation-services | Make automation work | Zapier, Make, n8n and HubSpot workflows compared |
| /products/general-ai-automation/ai-automation-tools-for-businesses | /platforms/n8n-automation-services | self-hosted n8n builds | Zapier, Make, n8n and HubSpot workflows compared |
| /products/general-ai-automation/ai-automation-tools-for-businesses | /platforms/hubspot-automation-services | HubSpot automation services | Zapier, Make, n8n and HubSpot workflows compared |
| /products/general-ai-automation/ai-automation-tools-for-businesses | /free-automation-audit | Book a free automation audit | Mid-page CTA |
| /products/general-ai-automation/ai-automation-tools-for-businesses | /platforms/airtable-automation-services | Airtable as an operational database | Common use cases by tool combination |
| /products/general-ai-automation/ai-automation-tools-for-businesses | /products/general-ai-automation/custom-ai-automation-software | when custom automation software makes sense | Selection criteria that matter |
| /products/general-ai-automation/ai-automation-tools-for-businesses | /free-automation-audit | Ask for a free audit | Final CTA |
| /products/general-ai-automation/custom-ai-automation-software | /products/general-ai-automation | general AI automation options | Intro |
| /products/general-ai-automation/custom-ai-automation-software | /products/general-ai-automation/ai-automation-tools-for-businesses | compare off-the-shelf automation tools | Build vs buy |
| /products/general-ai-automation/custom-ai-automation-software | /services/robotic-process-automation | robotic process automation | What custom looks like in practice |
| /products/general-ai-automation/custom-ai-automation-software | /products/general-ai-automation/ai-integration-services | connecting AI models to your business systems | What custom looks like in practice |
| /products/general-ai-automation/custom-ai-automation-software | /platforms/n8n-automation-services | n8n automation services | What custom looks like in practice |
| /products/general-ai-automation/custom-ai-automation-software | /products/ai-agents-platforms/ai-agent-development | AI agent development | What custom looks like in practice |
| /products/general-ai-automation/custom-ai-automation-software | /free-automation-audit | Book a free automation audit | Mid-page CTA |
| /products/general-ai-automation/custom-ai-automation-software | /products/industry-specific-ai-automation/ai-logistics-automation | logistics teams with older TMS platforms | Use cases |
| /products/general-ai-automation/custom-ai-automation-software | /services/custom-ai-development | custom AI development service | Why Clickmasters for custom builds |
| /products/general-ai-automation/custom-ai-automation-software | /free-automation-audit | Request a free audit of your process | Final CTA |
| /products/general-ai-automation/enterprise-ai-automation-solutions | /products/general-ai-automation | AI automation for business, from first workflow to company-wide | Intro |
| /products/general-ai-automation/enterprise-ai-automation-solutions | /services/ai-strategy-advisory | our AI strategy advisory service | Portfolio prioritization |
| /products/general-ai-automation/enterprise-ai-automation-solutions | /products/general-ai-automation/ai-process-optimization | process-level optimization | Portfolio prioritization |
| /products/general-ai-automation/enterprise-ai-automation-solutions | /services/ai-reporting-automation | reporting automation for leadership | Governance controls |
| /products/general-ai-automation/enterprise-ai-automation-solutions | /free-automation-audit | Book a free automation audit | Mid-page CTA |
| /products/general-ai-automation/enterprise-ai-automation-solutions | /products/ai-workflow-business-process-automation/enterprise-workflow-automation | enterprise workflow automation | Enterprise use cases |
| /products/general-ai-automation/enterprise-ai-automation-solutions | /products/ai-agents-platforms/enterprise-ai-agents | enterprise AI agents | Enterprise use cases |
| /products/general-ai-automation/enterprise-ai-automation-solutions | /products/general-ai-automation/ai-integration-services | integration layer between AI and your systems | Technologies and integrations |
| /products/general-ai-automation/enterprise-ai-automation-solutions | /free-automation-audit | Schedule a free audit | Final CTA |
| /products/general-ai-automation/ai-powered-business-software | /products/general-ai-automation | our general AI automation guide | What AI-powered business software means here |
| /products/general-ai-automation/ai-powered-business-software | /products/ai-sales-crm/ai-crm-software | AI features designed for CRM workflows | AI features we add: Record summaries |
| /products/general-ai-automation/ai-powered-business-software | /services/ai-knowledge-assistants | an AI knowledge assistant | AI features we add: Answers from your own documents |
| /products/general-ai-automation/ai-powered-business-software | /services/ai-chatbots | customer-facing AI chatbots | AI features we add: Answers from your own documents |
| /products/general-ai-automation/ai-powered-business-software | /services/custom-ai-development | custom AI development | AI features we add: Small internal AI tools |
| /products/general-ai-automation/ai-powered-business-software | /products/industry-specific-ai-automation/ai-education-automation | how admissions and enrollment teams apply this | Example use cases |
| /products/general-ai-automation/ai-powered-business-software | /products/general-ai-automation/ai-integration-services | connecting AI models to your systems | Technologies and integrations |
| /products/general-ai-automation/ai-powered-business-software | /free-automation-audit | Book a free automation audit | Mid-page CTA (after "What changes for your team") |
| /products/general-ai-automation/ai-powered-business-software | /free-automation-audit | Book a Free Automation Audit | Final CTA |
| /products/general-ai-automation/intelligent-business-automation | /products/general-ai-automation | the wider set of AI automation approaches | A working definition |
| /products/general-ai-automation/intelligent-business-automation | /services/business-process-automation | rule-based business process automation | Where plain automation breaks down |
| /products/general-ai-automation/intelligent-business-automation | /services/robotic-process-automation | robotic process automation for screen-based tasks | Where plain automation breaks down |
| /products/general-ai-automation/intelligent-business-automation | /products/ai-workflow-business-process-automation/intelligent-process-automation | our intelligent process automation page | The three-way split |
| /products/general-ai-automation/intelligent-business-automation | /products/ai-document-data-intelligence/intelligent-document-processing | intelligent document processing | Use cases |
| /products/general-ai-automation/intelligent-business-automation | /products/industry-specific-ai-automation/ai-healthcare-automation | administrative automation for medical practices | Use cases |
| /products/general-ai-automation/intelligent-business-automation | /free-automation-audit | Book a free audit of your exception-heavy processes | Mid-page CTA (after "What you gain") |
| /products/general-ai-automation/intelligent-business-automation | /products/general-ai-automation/ai-process-optimization | clean up the process first | How a project runs |
| /products/general-ai-automation/intelligent-business-automation | /free-automation-audit | Book a Free Automation Audit | Final CTA |
| /products/general-ai-automation/ai-integration-services | /products/general-ai-automation | broader AI automation for business | What AI integration covers |
| /products/general-ai-automation/ai-integration-services | /products/general-ai-automation/ai-powered-business-software | AI features that appear inside your existing apps | What AI integration covers |
| /products/general-ai-automation/ai-integration-services | /services/ai-knowledge-assistants | an internal knowledge assistant | What a solid AI integration includes: Retrieval |
| /products/general-ai-automation/ai-integration-services | /solutions/crm-automation | CRM automation solutions | Common integration projects |
| /products/general-ai-automation/ai-integration-services | /platforms/hubspot-automation-services | HubSpot workflow and integration builds | Common integration projects |
| /products/general-ai-automation/ai-integration-services | /products/industry-specific-ai-automation/ai-healthcare-automation | AI integration for clinics and medical offices | Data handling and privacy |
| /products/general-ai-automation/ai-integration-services | /free-automation-audit | Book a free audit of your systems | Mid-page CTA (after "What a well-built integration gives you") |
| /products/general-ai-automation/ai-integration-services | /platforms/n8n-automation-services | n8n workflow builds | Systems, models and connection methods |
| /products/general-ai-automation/ai-integration-services | /services/custom-ai-development | custom AI development work | Systems, models and connection methods |
| /products/general-ai-automation/ai-integration-services | /free-automation-audit | Book a Free Automation Audit | Final CTA |
| /products/general-ai-automation/end-to-end-ai-automation | /products/general-ai-automation | the main ways to apply AI automation | What end-to-end means in practice |
| /products/general-ai-automation/end-to-end-ai-automation | / | Clickmasters | What end-to-end means in practice |
| /products/general-ai-automation/end-to-end-ai-automation | /services/ai-strategy-advisory | company-level AI strategy and roadmaps | Why split delivery breaks at the handoffs |
| /products/general-ai-automation/end-to-end-ai-automation | /products/general-ai-automation/ai-process-optimization | process optimization work | Step two: Strategy and mapping |
| /products/general-ai-automation/end-to-end-ai-automation | /products/general-ai-automation/custom-ai-automation-software | custom automation software | Step three: Development |
| /products/general-ai-automation/end-to-end-ai-automation | /free-automation-audit | Book a free automation audit | Mid-page CTA (after "The decision gates at a glance") |
| /products/general-ai-automation/end-to-end-ai-automation | /services/ai-workflow-automation | workflow automation that connects your tools | What we build end to end |
| /products/general-ai-automation/end-to-end-ai-automation | /services/ai-agent-development | AI agents that carry out multi-step tasks | What we build end to end |
| /products/general-ai-automation/end-to-end-ai-automation | /about | who we are and how we work | Why Clickmasters |
| /products/general-ai-automation/end-to-end-ai-automation | /free-automation-audit | Book a Free Automation Audit | Final CTA |
| /products/general-ai-automation/ai-process-optimization | /products/general-ai-automation | the full range of AI automation options | What AI process optimization is |
| /products/general-ai-automation/ai-process-optimization | /free-automation-audit | the free automation audit | What AI process optimization is |
| /products/general-ai-automation/ai-process-optimization | /products/general-ai-automation/intelligent-business-automation | splitting the work between rules, AI and people | From redesign to automation |
| /products/general-ai-automation/ai-process-optimization | /services/business-process-automation | automating the redesigned operational process | From redesign to automation |
| /products/general-ai-automation/ai-process-optimization | /services/ai-strategy-advisory | AI strategy and advisory | How this differs from AI strategy |
| /products/general-ai-automation/ai-process-optimization | /services/ai-reporting-automation | reporting automation | Processes that benefit |
| /products/general-ai-automation/ai-process-optimization | /products/industry-specific-ai-automation/ai-legal-automation | matter intake and legal workflow redesign | Processes that benefit |
| /products/general-ai-automation/ai-process-optimization | /free-automation-audit | Book a free automation audit | Mid-page CTA (after "What you gain") |
| /products/general-ai-automation/ai-process-optimization | /products/general-ai-automation/end-to-end-ai-automation | one team carrying it through to launch | How the work runs |
| /products/general-ai-automation/ai-process-optimization | /free-automation-audit | Book a Free Automation Audit | Final CTA |

## 4. Inbound links to add from existing pages

These are recommended edits to existing pages, which **have not been made**. Add one link per row in the section named. Anchors are varied on purpose.

| Source page (live) | Target page (new) | Suggested anchor text | Linking context |
|---|---|---|---|
| `/industries` | `/products/industry-specific-ai-automation` | industry-specific AI solutions we build | Hub intro, after the sector list |
| `/industries/ai-automation-for-healthcare` | `/products/industry-specific-ai-automation/ai-healthcare-automation` | how we build medical practice automation | "What We Automate in Healthcare" section |
| `/industries/ai-automation-for-real-estate` | `/products/industry-specific-ai-automation/ai-real-estate-automation` | real estate automation software on your existing CRM | Paragraph naming Follow Up Boss, HubSpot and Salesforce |
| `/industries/ai-automation-for-law-firms` | `/products/industry-specific-ai-automation/ai-legal-automation` | the full legal workflow, from intake to billing | "What We Automate for Law Firms" section |
| `/solutions/ai-workflow-automation/for-logistics` | `/products/industry-specific-ai-automation/ai-logistics-automation` | AI logistics automation for freight and 3PL teams | Intro or closing paragraph |
| `/solutions/document-automation/for-logistics` | `/products/industry-specific-ai-automation/ai-logistics-automation` | automating shipping documents and status updates | Use-case section |
| `/solutions/ai-chatbots/for-education` | `/products/industry-specific-ai-automation/ai-education-automation` | admissions and enrollment automation | Intro or closing paragraph |
| `/solutions/crm-automation/for-education` | `/products/industry-specific-ai-automation/ai-education-automation` | AI automation for school and college administration | Closing paragraph |
| `/services` | `/products/general-ai-automation` | where to start with AI automation for business | Hub intro |
| `/solutions` | `/products/general-ai-automation/ai-automation-solutions` | AI automation for small business teams | Hub intro or FAQ |
| `/platforms` | `/products/general-ai-automation/ai-automation-tools-for-businesses` | compare automation tools before you choose | Hub intro |
| `/platforms/zapier-automation-services` | `/products/general-ai-automation/ai-automation-tools-for-businesses` | how Zapier compares with Make and n8n | FAQ section |
| `/services/custom-ai-development` | `/products/general-ai-automation/custom-ai-automation-software` | when custom automation software beats off-the-shelf tools | "What We Build" section |
| `/services/ai-strategy-advisory` | `/products/general-ai-automation/ai-process-optimization` | process-level optimization before automation | Section on roadmaps |
| `/services/ai-strategy-advisory` | `/products/general-ai-automation/enterprise-ai-automation-solutions` | running automation as an enterprise program | Section on operating model |
| `/services/business-process-automation` | `/products/general-ai-automation/intelligent-business-automation` | automation for work that needs judgment | Section on exceptions or AI |
| `/services/ai-knowledge-assistants` | `/products/general-ai-automation/ai-powered-business-software` | adding AI to the software your team already uses | Related services area |
| `/services/ai-workflow-automation` | `/products/general-ai-automation/end-to-end-ai-automation` | one team from audit to launch | Process section |
| `/about` | `/products/general-ai-automation/end-to-end-ai-automation` | how a project runs end to end | "How we work" paragraph |
| `/free-automation-audit` | `/products/general-ai-automation/ai-process-optimization` | what happens to a process before it is automated | Below the form or in the FAQ |
| `/products/ai-workflow-business-process-automation/enterprise-workflow-automation` | `/products/general-ai-automation/enterprise-ai-automation-solutions` | governance across the whole automation program | Governance section |
| `/products/ai-workflow-business-process-automation/intelligent-process-automation` | `/products/general-ai-automation/intelligent-business-automation` | the rules, AI and people design approach | Intro |
| `/products/ai-document-data-intelligence/ai-data-extraction-software` | `/products/industry-specific-ai-automation/ai-logistics-automation` | bills of lading and proof-of-delivery workflows | Use-case section |
| `/products/ai-document-data-intelligence/ai-contract-analysis` | `/products/industry-specific-ai-automation/ai-legal-automation` | legal workflow automation around contract review | Closing section |
| Homepage `/`, industries section | `/products/industry-specific-ai-automation` | see all industry solutions | **Needs owner sign-off.** Homepage copy is locked to the approved handover document |

**Priority order:** the four `/solutions` rows for logistics and education first (these give C3 and C4 sector-level inbound links), then `/solutions` → G1 and `/services/ai-strategy-advisory` → G4. G1 and G4 currently receive inbound links only from their parent.

## 5. Navigation and breadcrumbs

- The navbar Products menu already lists every page in this hierarchy (`content/products/index.ts`). The pages become clickable once their routes are added to `content/products/routes.ts` and `registry.ts`.
- Breadcrumbs: Home › [Parent] › [Child], matching the `BreadcrumbList` JSON-LD in each page file.
- Consider renaming the navbar label "AI Automation Solutions" to "AI Automation for Small Business" to match G1's title and H1 (see cannibalization report, row 6).
