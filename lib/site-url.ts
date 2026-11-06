const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() || process.env.VERCEL_URL?.trim();

function withProtocol(value: string) {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

/**
 * Single source for the canonical site origin.
 * Vercel sets VERCEL_URL automatically, so previews still get correct metadata
 * instead of silently shipping `voelectrical.example` URLs.
 */
export const siteUrl = (() => {
  if (configured) return withProtocol(configured).replace(/\/+$/, "");
  if (vercel) return withProtocol(vercel).replace(/\/+$/, "");
  return "http://localhost:3000";
})();

export const isProductionUrlConfigured = Boolean(configured);
