// content/products/routes.ts
// Single source of truth for which product pages exist.
// - Lightweight (no page copy), so the client navbar can import it.
// - app/products/[service] and app/products/[service]/[slug] generate exactly these pages.
// - content/products/registry.ts must provide content for every entry (enforced by its types).
//
// To publish a new product page: add its slug here, then add its content to registry.ts.

export const PRODUCT_ROUTES = {
  'ai-sales-crm': [
    'ai-sales-automation-software',
    'ai-crm-software',
    'ai-lead-generation-tools',
    'ai-lead-management-software',
    'ai-sales-assistant',
  ],
  'ai-customer-support': [
    'ai-customer-support-software',
    'ai-chatbot-software',
    'ai-virtual-assistant',
    'ai-customer-service-automation',
    'ai-voice-agent',
  ],
  'ai-marketing-automation': [
    'ai-marketing-automation-software',
    'ai-email-automation',
    'ai-social-media-automation',
    'ai-seo-automation-tools',
    'ai-campaign-management-software',
  ],
} as const satisfies Record<string, readonly string[]>;

export type ProductService = keyof typeof PRODUCT_ROUTES;
export type ProductSlug<S extends ProductService> = (typeof PRODUCT_ROUTES)[S][number];

export const PRODUCTS_BASE = '/products';

/** Every built product URL: /products, /products/<service>, /products/<service>/<slug>. */
export const LIVE_PRODUCT_PATH_LIST: string[] = [
  PRODUCTS_BASE,
  ...Object.entries(PRODUCT_ROUTES).flatMap(([service, slugs]) => [
    `${PRODUCTS_BASE}/${service}`,
    ...slugs.map((slug) => `${PRODUCTS_BASE}/${service}/${slug}`),
  ]),
];
