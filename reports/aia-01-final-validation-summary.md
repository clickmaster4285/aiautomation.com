# AIA-01 canonical and redirect validation

Preferred URL policy, taken from production: `https://clickmastersaiautomation.com` with no trailing slash. A trailing-slash request returns HTTP 308 to that URL. That 308 is Next.js (`trailingSlash: false`), proxied by nginx. Nginx was not changed.

The original audit list of 242 URLs is not in this repository. Counts below are the URLs actually requested.

## Production, before this change

Source: `reports/aia-01-before-report.csv`  
Host: `https://clickmastersaiautomation.com`  
URLs checked: 255 (production sitemap plus app routes)

| Check | Result |
| --- | --- |
| Indexable responses | 252 |
| Canonical URL returned HTTP 200 with no redirect | 51 |
| Canonical pointed at a redirect | 201 |
| Trailing-slash canonical | 201 |
| Cross-canonical | 4 |
| Missing canonical on an indexable URL | 0 |
| Duplicate canonical tags | 0 |
| Redirect loops | 0 |
| Redirect chains (more than one hop) | 0 |

The 201 conflicts are the same class as the audit's 201 non-indexable URLs. Example: `/solutions/sales-automation/for-healthcare` returned 200 and its canonical was `https://clickmastersaiautomation.com/solutions/sales-automation/for-healthcare/`, which returned 308.

The four cross-canonicals are documented in `reports/aia-01-industry-canonical-decisions.csv`.

## Local production build, after this change

Source: `reports/aia-01-after-report.csv`  
Host: `http://127.0.0.1:3456` (`next build` then `next start`)  
URLs checked: 253, all indexable

| Check | Result |
| --- | --- |
| Canonical URL returned HTTP 200 with no redirect | 253 / 253 |
| Canonical-to-redirect conflicts | 0 |
| Missing canonicals | 0 |
| Duplicate canonical tags | 0 |
| HTTP canonicals | 0 |
| Hostname mismatches | 0 |
| Trailing-slash canonicals | 0 |
| Cross-canonicals | 0 |
| Redirect loops | 0 |
| Redirect chains | 0 |
| Sitemap URLs that are not HTTP 200 | 0 |
| Sitemap URLs whose canonical differs | 0 |

Spot checks of the initial HTML (not client-rendered):

- `/solutions/sales-automation/for-healthcare` canonical `https://clickmastersaiautomation.com/solutions/sales-automation/for-healthcare`
- `/solutions/ai-voice-agents/for-law-firms` title "AI Voice Agents for Law Firms", self canonical, law-firm section present
- `/solutions/document-automation/for-manufacturing` title "Document & Data Automation for Manufacturing", self canonical
- `/solutions/document-automation/for-restaurants` and `/solutions/customer-support-automation/for-accounting-firms` self canonical, HTTP 200
- `/industries/ai-automation-for-healthcare` self canonical
- `/` canonical `https://clickmastersaiautomation.com`
- `sitemap_solutions.xml`: 216 locs, none with a trailing slash

Redirects confirmed on the local server, one hop, HTTP 308 (Next.js `permanent: true`):

- `/services/` → `/services`
- `/solutions/document-automation/for-restaurants.ts` → `/solutions/document-automation/for-restaurants`
- `/solutions/customer-support-automation/for-accounting-firm` → `/solutions/customer-support-automation/for-accounting-firms`
- `/case-studies/ai-lead-response-revenue-recovery` → `/case-studies/ai-receptionist-lead-response-automation`

## Not deployed

Production still serves the old canonicals until this branch is deployed. No DNS, nginx, or domain change was made.
