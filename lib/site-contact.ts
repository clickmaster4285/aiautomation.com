// One published contact record for the site.
// Phones and the sales mailbox are the ones already printed on the contact
// form, footer, privacy policy, and terms. No street address is published.

export const SITE_NAME = "Clickmasters AI Automation";
export const SITE_URL = "https://clickmastersaiautomation.com";

export const SALES_EMAIL = "sales@clickmastersdigitalmarketing.com";

export const PHONES = [
  { region: "US", schemaArea: "US", label: "United States", tel: "+13252024074", display: "+1 325 202 4074" },
  { region: "UK", schemaArea: "GB", label: "United Kingdom", tel: "+447988576086", display: "+44 7988 576086" },
  { region: "PK", schemaArea: "PK", label: "Pakistan", tel: "+923325394285", display: "+92 332 5394285" },
] as const;

export const SERVICE_AREA =
  "the United States, the United Kingdom, and Pakistan";

export const LOCATION_STATEMENT =
  "Clickmasters serves businesses in the United States, the United Kingdom, and Pakistan. The sales email and the three phone numbers on this page are the published contact details. No street address is listed.";
