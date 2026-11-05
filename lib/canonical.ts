// Single canonical URL policy for clickmastersaiautomation.com.
// Preferred URLs are HTTPS, host-only (no www), and have no trailing slash.
// Next.js `trailingSlash` stays false, so a trailing-slash request 308s to this form.
// Every canonical tag must use this helper so it never points at that redirect.

export const SITE_ORIGIN = "https://clickmastersaiautomation.com";
export const SITE_HOSTNAME = "clickmastersaiautomation.com";

export function canonicalUrl(input: string): string {
  const trimmed = (input || "").trim();
  if (!trimmed) return SITE_ORIGIN;

  let url: URL;
  if (/^https?:\/\//i.test(trimmed)) {
    url = new URL(trimmed);
  } else {
    const path = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
    url = new URL(path, SITE_ORIGIN);
  }

  url.protocol = "https:";
  url.hostname = SITE_HOSTNAME;
  url.port = "";
  url.search = "";
  url.hash = "";

  let pathname = url.pathname.replace(/\/{2,}/g, "/");
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }
  if (!pathname.startsWith("/")) pathname = `/${pathname}`;

  if (pathname === "/") return SITE_ORIGIN;
  return `${SITE_ORIGIN}${pathname}`;
}

/** Pathname form for in-app links. Homepage is "/". */
export function canonicalPath(input: string): string {
  const absolute = canonicalUrl(input);
  if (absolute === SITE_ORIGIN) return "/";
  return absolute.slice(SITE_ORIGIN.length);
}
