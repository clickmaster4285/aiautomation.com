# AI Automation Content Architecture: Industry-Specific and General AI Automation

SEO content for 2 parent pages and 14 child pages under `/products/`, for clickmastersaiautomation.com. Content only: no website code was created or changed for this deliverable.

## Page hierarchy

| Category | Page | Planned URL | File |
|---|---|---|---|
| **Industry-Specific AI Automation** | Parent | `/products/industry-specific-ai-automation` | [parent-pages/industry-specific-ai-automation.md](parent-pages/industry-specific-ai-automation.md) |
| | AI Healthcare Automation | `.../ai-healthcare-automation` | [child-pages/industry-specific-ai-automation/ai-healthcare-automation.md](child-pages/industry-specific-ai-automation/ai-healthcare-automation.md) |
| | AI Real Estate Automation | `.../ai-real-estate-automation` | [ai-real-estate-automation.md](child-pages/industry-specific-ai-automation/ai-real-estate-automation.md) |
| | AI Logistics Automation | `.../ai-logistics-automation` | [ai-logistics-automation.md](child-pages/industry-specific-ai-automation/ai-logistics-automation.md) |
| | AI Education Automation | `.../ai-education-automation` | [ai-education-automation.md](child-pages/industry-specific-ai-automation/ai-education-automation.md) |
| | AI Legal Automation | `.../ai-legal-automation` | [ai-legal-automation.md](child-pages/industry-specific-ai-automation/ai-legal-automation.md) |
| **General AI Automation** | Parent | `/products/general-ai-automation` | [parent-pages/general-ai-automation.md](parent-pages/general-ai-automation.md) |
| | AI Automation Solutions | `.../ai-automation-solutions` | [ai-automation-solutions.md](child-pages/general-ai-automation/ai-automation-solutions.md) |
| | AI Automation Tools for Businesses | `.../ai-automation-tools-for-businesses` | [ai-automation-tools-for-businesses.md](child-pages/general-ai-automation/ai-automation-tools-for-businesses.md) |
| | Custom AI Automation Software | `.../custom-ai-automation-software` | [custom-ai-automation-software.md](child-pages/general-ai-automation/custom-ai-automation-software.md) |
| | Enterprise AI Automation Solutions | `.../enterprise-ai-automation-solutions` | [enterprise-ai-automation-solutions.md](child-pages/general-ai-automation/enterprise-ai-automation-solutions.md) |
| | AI-Powered Business Software | `.../ai-powered-business-software` | [ai-powered-business-software.md](child-pages/general-ai-automation/ai-powered-business-software.md) |
| | Intelligent Business Automation | `.../intelligent-business-automation` | [intelligent-business-automation.md](child-pages/general-ai-automation/intelligent-business-automation.md) |
| | AI Integration Services | `.../ai-integration-services` | [ai-integration-services.md](child-pages/general-ai-automation/ai-integration-services.md) |
| | End-to-End AI Automation | `.../end-to-end-ai-automation` | [end-to-end-ai-automation.md](child-pages/general-ai-automation/end-to-end-ai-automation.md) |
| | AI Process Optimization | `.../ai-process-optimization` | [ai-process-optimization.md](child-pages/general-ai-automation/ai-process-optimization.md) |

The slugs match the navbar entries already defined in `content/products/index.ts`.

## Each page file contains

SEO brief (primary, secondary, long-tail and question keywords; entities; search intent; title; meta; H1; schema type; word count) → heading outline → image SEO (file names and alt text) → internal-link table → **full page copy** (with FAQ and CTAs) → JSON-LD (Service + BreadcrumbList + FAQPage).

## Strategy documents (`00-strategy/`)

| File | Contents |
|---|---|
| [site-and-competitor-analysis.md](00-strategy/site-and-competitor-analysis.md) | What the site covers today, structural observations, competitor SERP review with sources |
| [keyword-map.md](00-strategy/keyword-map.md) | Keyword mapping table (one primary keyword per page), keywords owned by existing pages, a brief per page |
| [seo-metadata.md](00-strategy/seo-metadata.md) | Titles, metas, H1s, slugs, keywords, schema and image SEO for all 16 pages, with measured lengths |
| [internal-linking-strategy.md](00-strategy/internal-linking-strategy.md) | Architecture, linking rules, every outbound link (Source / Target / Anchor / Context), recommended inbound links from existing pages |
| [cannibalization-report.md](00-strategy/cannibalization-report.md) | Overlap risks with existing pages and how each is resolved |
| [content-gap-analysis.md](00-strategy/content-gap-analysis.md) | Gaps these pages close and recommended next content |
| [content-rules-and-facts.md](00-strategy/content-rules-and-facts.md) | Accuracy rules and verified company facts the copy was written against |
| [verified-urls.md](00-strategy/verified-urls.md) | Every live URL taken from the sitemaps (used to validate links) |

## Quality checks run on all 16 pages

- All internal links resolve to a live sitemap URL or a `/products/...` route on the `product-pages` branch.
- No banned claims or words ("best", "leading", "guarantee", "compliant", "certified", "expert", and others). No statistics, prices or percentages.
- Compliance wording (HIPAA, FERPA) uses the approved shared-responsibility phrasing from the existing healthcare page.
- One H1 per page. SEO titles are 50–60 characters and meta descriptions 151–160 characters.
- Anchor text is unique across pages. JSON-LD is valid JSON, and each FAQPage mirrors its page's FAQ.
- Word counts: child pages about 1,550–1,980 words, parents about 1,330 and 1,490.

## Before publishing

1. **Keyword volumes are not verified.** No keyword tool was connected, so validate each primary keyword in Search Console or a keyword tool and swap in a secondary if volume is negligible.
2. Have the business owner confirm the tool and platform names used (the homepage notes that the tool list is "pending owner confirmation").
3. Decide what happens to the unpublished `/services/ai-integration-services` content (cannibalization report, row 11).
4. Deploy together with the rest of the `product-pages` branch, because the pages link to existing product pages on that branch.
5. FAQPage rich results are currently shown by Google mainly for authoritative government and health sites. The markup is still valid and helps AI-search extraction, but don't expect FAQ snippets.
