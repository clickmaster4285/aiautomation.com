# Main Navigation: Route Map and Test Results

**Date:** 26 November 2026. **Branch:** `seo-improved` (uncommitted).

- **Menu content:** `components/landingPage/navConfig.ts`
- **Markup:** `components/landingPage/Nav.tsx`
- **Behaviour:** `components/landingPage/useNav.tsx`
- **Link check:** `node scripts/check-nav-links.mjs <origin>`

**Intent rule.** The menus are split by what the visitor is looking for, and each URL belongs to one of them:

| Menu | Answers | Links to |
|---|---|---|
| AI Services | What we build | `/services/*` |
| Automation Solutions | Which business problem we solve | `/solutions/*` hubs, plus product pages that cover one problem |
| Industries | Who it's for | `/industries/*` |
| AI & Automation Technologies | What we build on | `/platforms/*`, plus the agent technology pages |

**Never linked from the menu:** the `/solutions/<type>/for-<industry>` pages. They are noindexed; see `lib/solution-indexing.ts`.

---

## 1. Route map: existing pages, now in the menu

**Header CTA:** "Get an Automation Consultation" links to `/free-automation-audit`. This is the same destination as the previous "Book a Call" button. The `data-cta-position="header"` tracking attribute is kept.

### AI Services (hub: `/services`)

| Group | Label | URL | Note |
|---|---|---|---|
| AI Automation | AI Workflow Automation | `/services/ai-workflow-automation` | |
| | Business Process Automation | `/services/business-process-automation` | |
| | Robotic Process Automation (RPA) | `/services/robotic-process-automation` | |
| | AI Reporting Automation | `/services/ai-reporting-automation` | |
| | Custom AI Development | `/services/custom-ai-development` | |
| | AI Strategy & Advisory | `/services/ai-strategy-advisory` | **Added.** A live service page that wasn't in the brief; kept so it isn't dropped from the menu |
| AI Agents & Assistants | AI Agent Development | `/services/ai-agent-development` | |
| | AI Voice Agent Development | `/services/ai-voice-agents` | |
| | AI Chatbot Development | `/services/ai-chatbots` | |
| | AI Knowledge Assistants | `/services/ai-knowledge-assistants` | |
| | Customer Support Automation | `/solutions/customer-support-automation` | No service page exists, so this links to the solution hub |
| Business Growth Automation | AI Lead Generation | `/services/ai-lead-generation` | |
| | Sales Automation | `/solutions/sales-automation` | Solution hub (no service page) |
| | Marketing Automation | `/solutions/marketing-automation` | Solution hub (no service page) |
| | CRM Automation | `/solutions/crm-automation` | Solution hub (no service page) |
| | Appointment Automation | `/solutions/appointment-booking-automation` | Solution hub (no service page) |
| Data & Integration | Document Automation | `/solutions/document-automation` | Solution hub (no service page) |
| | AI Integration Services | `/products/general-ai-automation/ai-integration-services` | The page titled "AI Integration Services" |
| Panel footer | AI software products | `/products` | Keeps every product page 2 clicks from any page (see §4) |

### Automation Solutions (hub: `/solutions`)

| Label | URL |
|---|---|
| Customer Support Automation | `/solutions/customer-support-automation` |
| Lead Generation Automation | `/solutions/lead-generation-automation` |
| Appointment Scheduling Automation | `/solutions/appointment-booking-automation` |
| Sales Pipeline Automation | `/solutions/sales-automation` |
| Email Automation | `/products/ai-marketing-automation/ai-email-automation` |
| E-commerce Automation | `/products/ai-ecommerce-automation` |
| Invoice Processing Automation | `/solutions/invoice-automation` |
| HR & Recruitment Automation | `/products/ai-hr-recruitment` |
| Data Entry Automation | `/products/ai-document-data-intelligence/ai-data-extraction-software` |
| Reporting & Analytics Automation | `/solutions/reporting-automation` |
| Enterprise Workflow Automation | `/products/ai-workflow-business-process-automation/enterprise-workflow-automation` |

**Four URLs appear in both AI Services and Automation Solutions,** because the brief lists them in both and no separate service page exists:
- customer support
- sales
- appointments (both labels link to the same solution page)
- document automation, where Services → "Document Automation" and Solutions shows "Data Entry Automation", which links to a different, product page

This is two links to one page, not two competing pages. When dedicated service pages are built (§2), point the AI Services entries at them.

### Industries (hub: `/industries`)

| Label | URL |
|---|---|
| Healthcare | `/industries/ai-automation-for-healthcare` |
| Finance & Accounting | `/industries/ai-automation-for-finance-accounting` |
| Legal Services | `/industries/ai-automation-for-law-firms` |
| Professional Services | `/industries/ai-automation-for-professional-services` |
| Education | `/products/industry-specific-ai-automation/ai-education-automation` |
| Real Estate | `/industries/ai-automation-for-real-estate` |
| E-commerce | `/industries/ai-automation-for-ecommerce` |
| SaaS & Technology | `/industries/ai-automation-for-saas` |
| Marketing Agencies | `/industries/ai-automation-for-marketing-agencies` (**added:** live page, not in the brief) |
| Logistics | `/products/industry-specific-ai-automation/ai-logistics-automation` |

### AI & Automation Technologies (hub: `/platforms`)

| Group | Label | URL |
|---|---|---|
| Artificial Intelligence | AI Agents | `/solutions/ai-agents` |
| | Multi-Agent Systems | `/products/ai-agents-platforms/multi-agent-systems` |
| | AI Agent Platforms | `/products/ai-agents-platforms` |
| Automation Platforms | n8n Automation | `/platforms/n8n-automation-services` |
| | Make Automation | `/platforms/make-automation-services` |
| | Zapier Automation | `/platforms/zapier-automation-services` |
| CRM & Data Platforms | HubSpot Automation | `/platforms/hubspot-automation-services` |
| | GoHighLevel Automation | `/platforms/gohighlevel-automation-services` |
| | Airtable Automation | `/platforms/airtable-automation-services` |

**Two departures from the brief in this menu:**
- The HubSpot, GoHighLevel and Airtable pages are live commercial pages, so they're kept in the menu.
- Multi-Agent Systems and AI Agent Platforms replace AI technology entries that have no page (see §2).

### Case Studies (hub: `/case-studies`)

| Label | URL |
|---|---|
| AI Receptionist & Lead Response | `/case-studies/ai-receptionist-lead-response-automation` (the only published case study) |

### Resources (hub: `/blog`)

| Label | URL |
|---|---|
| AI Automation Blog | `/blog` |
| n8n vs Zapier vs Make (covers "AI Tools & Comparisons" and "Make & Zapier Guides") | `/blog/n8n-vs-zapier-vs-make` |
| AI Agents vs Workflow Automation (covers "AI Agent Tutorials") | `/blog/ai-agents-vs-workflow-automation` |
| Free Automation Audit | `/free-automation-audit` |

### About Us (hub: `/about`)

| Label | URL | Note |
|---|---|---|
| About ClickMasters | `/about` | |
| Our Approach | `/about#our-approach` | `id` added to the existing section |
| Our Development Process | `/#process` | Existing homepage section; `scroll-mt-24` added so it lands below the header |
| Why Choose ClickMasters | `/about#why-clickmasters` | `id` added to the existing "Why It Matters" section |
| Contact Us | `/contact` | |

---

## 2. Missing pages: in the brief, but no page exists

None of these is linked. Each needs a real page first. Then add it to `navConfig.ts`, check that it doesn't overlap an existing page's search intent, and run the link check.

| Menu | Item | Suggestion |
|---|---|---|
| AI Services | Data Processing Automation | Overlaps document automation and the data-extraction products. Decide on one page per intent before building |
| AI Services | ERP Integration | New service page |
| AI Services | API & SaaS Integration | New service page. `content/services/ai-integration-service.ts` exists but isn't published |
| AI Services | Sales / Marketing / Customer Support Automation **service** pages | `content/services/ai-sales-automation.ts`, `ai-marketing-automation.ts` and `ai-customer-support-automation.ts` exist but aren't published. If they are published, the Services menu entries should move to them, with distinct copy from the solution hubs |
| Industries | Manufacturing, Retail & Hospitality, Insurance | No industry page. The `/solutions/*/for-manufacturing|retail|restaurants|insurance` pages exist but are noindexed duplicates and must not be linked |
| Technologies | Generative AI, Large Language Models, Natural Language Processing, Machine Learning, Retrieval-Augmented Generation (RAG) | No pages |
| Technologies | API Integrations, CRM Integrations, ERP Integrations, SaaS Integrations | No pages; the whole "Integration Technologies" column is omitted until they exist |
| Case Studies | AI Automation Projects, AI Agent Implementations, Voice AI Projects, Workflow Automation Projects, CRM Automation Projects, Business Process Automation Results | Only one case study exists. Category pages need real, verifiable client projects first |
| Resources | AI Automation Guides, Workflow Automation Tutorials, n8n Guides, Business Automation Strategies, AI Automation Cost Guides, Industry Insights, FAQs, AI Automation Glossary, Research & Reports | Not created. Add them as articles are published. A glossary and a cost guide are the highest-value next pieces |
| About Us | Our Expertise | No page or section |

## 3. Broken or unavailable routes found

**None in the new menu.** All 62 unique header links return 200 with no redirect, none is noindexed, and every `#fragment` exists on its target page. Checked on the home page and on an article page.

The old menu had no broken links either. It did include "Soon" placeholders (rendered as non-links) for unpublished products; those are no longer shown.

## 4. Change in internal linking: product pages

The brief's seven menus have no Products menu. The old menu linked every product page from every page.

| | Before | After |
|---|---|---|
| Pages linking to each product page | 327 (every page) | 6–8 in-content links |
| Path from any page | 1 click | 2 clicks: AI Services → "AI software products" (`/products`, which links all 70 product URLs) |

Options, if site-wide links to products should be restored:
- **(a)** Add an "AI Products" column or link group to a menu.
- **(b)** Add the 11 product category hubs to the footer.

## 5. Test results (local production build)

| Test | Result |
|---|---|
| `next build` | Passes, 340 pages |
| `tsc --noEmit`; ESLint on changed files | Clean |
| Link check (`scripts/check-nav-links.mjs`) | 62 of 62 links: 200, indexable, fragments present |
| Headless Chrome, 1280 / 1366 / 1440 / 1920 px | Header on one line at every width, CTA at least 16 px inside the viewport. All 7 menus open on hover, stay open while moving into the panel, close on leave, stay on screen, one menu at a time |
| Keyboard | Enter on a chevron opens its panel. Tab moves into the panel. Escape closes it and returns focus to the chevron. Links in closed panels can't be focused |
| Pointer | Chevron click toggles; a click outside closes |
| Mobile (390 px) and tablet (820 px) | Hamburger shown, no horizontal overflow. 7 accordion sections, one open at a time. Tap targets at least 44 px. Page scroll locked while open. Escape closes and returns focus. Tapping a link navigates and closes the menu |
| CTA | Goes to `/free-automation-audit` |
| Anchors | `/about#our-approach`, `/about#why-clickmasters` and `/#process` land 96 px from the top, below the 80 px header |
| Console errors | None on the final run. One earlier run logged a single `Cannot read properties of null (reading 'sequence')` exception that did not reproduce in three later runs |
| SEO regression (full crawl before vs after, 328 URLs) | No change in status, indexability, sitemap membership, canonical, robots, title, description, H1, H2 count, main-content word count or structured data. 0 broken links |

**Breakpoints:**
- **Below 1280 px:** the full desktop bar doesn't fit (7 labels plus the CTA need about 1,200 px), so tablets and small laptops get the accordion menu.
- **1536 px and up:** the bar uses wider spacing.

## 6. Files changed

- `components/landingPage/Nav.tsx`: rewritten (desktop mega menu and mobile accordion)
- `components/landingPage/useNav.tsx`: rewritten (behaviour only; its old data maps are removed)
- `components/landingPage/navConfig.ts`: new, the menu content
- `scripts/check-nav-links.mjs`: new, the link checker
- `components/about/pageAbout.tsx`: `id` and `scroll-mt-24` on 3 sections. No content change
- `components/landingPage/Process.tsx`: `scroll-mt-24` on the existing `#process` section
