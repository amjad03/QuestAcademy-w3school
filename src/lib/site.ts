/**
 * Public address of the site, for canonical links, the sitemap and social previews.
 * Set NEXT_PUBLIC_SITE_URL in production; on Vercel the production domain is used
 * when it is missing, and local development falls back to localhost.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");
