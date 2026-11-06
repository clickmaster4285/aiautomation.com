import { PHONES, SALES_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-contact";

// One Organization entity for the whole site. Other JSON-LD nodes point at
// ORGANIZATION_ID instead of repeating a second Organization.
// No street address is published, so none is included.

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/logo.png`,
    },
    email: SALES_EMAIL,
    telephone: PHONES.map((phone) => phone.tel),
    contactPoint: PHONES.map((phone) => ({
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: phone.tel,
      email: SALES_EMAIL,
      areaServed: phone.label,
      availableLanguage: ["English"],
    })),
    areaServed: PHONES.map((phone) => phone.label),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": ORGANIZATION_ID },
  };
}
