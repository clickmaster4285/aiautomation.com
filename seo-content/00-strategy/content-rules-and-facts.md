# Content Rules and Verified Company Facts

Every page in this project must follow these rules. They mirror the accuracy rules already used across clickmastersaiautomation.com (see `content/services/homepage.ts` and the `content/products/*` page headers).

## Brand and voice

- Brand name in copy: **Clickmasters** (formal: "Clickmasters AI Automation"). Never "ClickMasters AI" or other variants.
- Positioning: an AI automation **agency** that designs, builds and maintains AI agents, workflow automations and system integrations for growing businesses (sales, support and operations teams). It is **not** a SaaS vendor and does not license its own software platform. Automations are built inside the client's tools and accounts.
- Tone: plain, specific, calm, for business owners and operations leaders. Short sentences. No hype.
- Banned words and claims: "best", "leading", "trusted", "world-class", "cutting-edge", "revolutionary", "seamless", "unlock", "supercharge", "game-changer", "expert" as a self-label.

## Hard accuracy rules (do not break)

1. **No statistics, percentages, time-saved figures, ROI numbers, prices, client counts, ratings, testimonials, client names, or case-study results.** Third-party statistics are also out unless already used on the site.
2. **No certifications or compliance claims.** No "HIPAA-compliant", "SOC 2", "GDPR-certified", "FERPA-compliant". The approved phrasing (from the healthcare industry page): *we design with privacy in mind; formal compliance such as HIPAA is a shared responsibility that depends on your specific setup and is confirmed for your project.* Use the same pattern for FERPA, legal confidentiality rules and similar.
3. **No guarantees, uptime figures, SLAs or ongoing-support promises.** Monitoring and improvement after launch is step 6 of the published process. Phrase it as "monitoring and improvement after launch is part of our process; scope and terms are agreed per project."
4. **Integrations are always conditional:** "where the system offers an API or integration, confirmed during discovery". Never promise a named EHR, TMS, SIS or practice-management integration as standard.
5. **Clinical, legal, financial and safety decisions stay with people.** Automation handles administration and preparation. People approve, sign off and own decisions.
6. **Industry use cases are examples that are "scoped per project"**, not packaged features.
7. **Do not claim** route optimization engines, warehouse robotics, predictive maintenance, process-mining software, model training from scratch, medical diagnosis, legal advice, or grading/teaching tools. If relevant, say clearly that the page is about administrative and operational workflows.
8. **Ownership:** you may say the client owns the automations, accounts and documentation, and pays platform and AI usage costs directly. This phrasing is already used on published product pages.
9. **Do not link to the case study** (`/case-studies/ai-receptionist-lead-response-automation`). It still contains unapproved placeholders.

## Verified capabilities (safe to state)

- Services: AI workflow automation, business process automation, robotic process automation (RPA), AI reporting automation, AI agent development, AI chatbots, AI voice agents, AI knowledge assistants (answers drawn from the client's documents, with sources), AI lead generation, AI strategy and advisory, custom AI development and integration through APIs.
- Typical starting points (from the homepage): lead capture and qualification; CRM and database updates; email and follow-up sequences; customer enquiries and support tickets; appointment scheduling; data entry and validation; document and invoice processing; reporting and dashboards; internal approvals and onboarding; proposal and content drafts.
- Rule of thumb from the homepage: "If a task is repetitive and follows rules, it is usually a good candidate."
- Human in the loop: a person approves wherever a decision needs judgment. Exceptions are passed to a person with context.
- **Published 6-step process:** 1 Discovery, 2 Strategy and mapping (triggers, decision points, actions, integrations, approval points), 3 Development, 4 Testing (including edge cases and failure scenarios), 5 Deployment (into the live environment, with documentation and access handed over), 6 Monitoring and improvement. The client approves the plan before anything is built.
- **Free automation audit:** reviews current processes and tools, then says which tasks are worth automating first and which are not. No obligation to proceed. URL: `/free-automation-audit`.
- **Platforms and tools named on the site:** automation platforms Zapier, Make, n8n (n8n can be self-hosted); CRMs HubSpot, Salesforce, Zoho, Pipedrive, GoHighLevel; data Airtable, custom APIs, SQL databases, cloud data platforms; AI models OpenAI (GPT), Anthropic Claude, Google Gemini, open-source models; communication Slack, Gmail, Outlook, Microsoft Teams, Twilio; e-commerce Shopify, WooCommerce; support Zendesk, Intercom, Freshdesk; ERPs referenced on product pages SAP, NetSuite, Oracle; agent frameworks LangChain, LlamaIndex; connection methods REST APIs, webhooks, MCP connectors; clouds AWS, Azure, GCP. Real-estate CRMs named on the site: Follow Up Boss, HubSpot, Salesforce.
- Integration categories: CRM, ERP, API/SaaS, databases and internal systems.

## Formatting conventions for page files

- Inline links use Markdown: `[anchor text](/path)`, always with **root-relative paths** taken from `verified-urls.md` or the planned `/products/...` URLs in `keyword-map.md`.
- Each child page: about 1,200 to 2,000 words of page copy (excluding the SEO brief). Each parent page: about 1,000 to 1,500 words.
- Main call to action: "Book a Free Automation Audit" → `/free-automation-audit`. A page-specific variant is fine, e.g. "Book a Free Healthcare Automation Audit".
