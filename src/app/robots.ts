import type { MetadataRoute } from "next";

import { SITE_URL as BASE } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/session/", "/settings", "/parent", "/notebook", "/insights", "/auth", "/api/"] }, sitemap: `${BASE}/sitemap.xml` };
}
