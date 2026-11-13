import { PHONES, SALES_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-contact";

// One Organization entity for the whole site. Other JSON-LD nodes point at
// ORGANIZATION_ID instead of repeating a second Organization.
// No street address is published, so none is included.
// Do not add Review, AggregateRating or FAQPage markup: there are no verified reviews.

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Public profile URLs (LinkedIn company page, Clutch, GoodFirms...).
// Leave empty until each profile exists (owner sign-off S-6).
export const PROFILE_URLS: string[] = [];

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: "Clickmasters",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/images/logo.png`,
    },
    description:
      "Clickmasters AI Automation is an AI automation agency that designs, builds and maintains AI agents, workflow automations and system integrations for businesses.",
    email: SALES_EMAIL,
    founder: {
      "@type": "Person",
      name: "Amjad Khan",
      jobTitle: "Founder and CEO",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Clickmasters",
      url: "https://clickmasters.pk/",
    },
    contactPoint: PHONES.map((phone) => ({
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: phone.tel,
      areaServed: phone.schemaArea,
      availableLanguage: "en",
    })),
    areaServed: PHONES.map((phone) => phone.schemaArea),
    ...(PROFILE_URLS.length > 0 ? { sameAs: PROFILE_URLS } : {}),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: { "@id": ORGANIZATION_ID },
  };
}
