// Render a metric only when it contains a positive number.
// Empty strings, "0", "0+", and "0%" are omitted so server HTML never shows a fake zero.

export function metricDisplay(value: unknown): string | null {
  if (typeof value === "number") {
    if (!Number.isFinite(value) || value <= 0) return null;
    return String(value);
  }
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  const match = trimmed.match(/\d+(?:\.\d+)?/);
  if (!match) return null;
  const num = Number(match[0]);
  if (!Number.isFinite(num) || num <= 0) return null;
  return trimmed;
}
