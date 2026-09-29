// components/cms/cmsContent.ts
// Helpers for reading untrusted CMS section content.

export type Content = Record<string, unknown>;

/** First non-empty string among the given keys (the CMS has legacy aliases). */
export function pick(c: Content, ...keys: string[]): string {
  for (const k of keys) {
    const v = c[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return "";
}

export function items(c: Content): Content[] {
  const v = c.items;
  return Array.isArray(v) ? v.filter((i): i is Content => !!i && typeof i === "object" && !Array.isArray(i)) : [];
}

/** Only allow same-site paths, anchors and http(s)/mailto/tel links. */
export function safeHref(url: string): string {
  if (!url) return "";
  if (url.startsWith("/") && !url.startsWith("//") && !url.includes("\\")) return url;
  if (url.startsWith("#")) return url;
  return /^(https?:|mailto:|tel:)/i.test(url) ? url : "";
}

/** Images must be absolute http(s) URLs or site-relative paths. */
export function safeImage(url: string): string {
  if (url.startsWith("/") && !url.startsWith("//")) return url;
  return /^https?:\/\//i.test(url) ? url : "";
}

export function button(c: Content, prefix: "primary" | "secondary") {
  const text = pick(c, `${prefix}Label`, `${prefix}Button`);
  const link = safeHref(pick(c, `${prefix}Url`, `${prefix}Link`));
  return text && link ? { text, link } : undefined;
}
