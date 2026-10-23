import type { MetadataRoute } from "next";
import { subjects, flatLessons } from "@/content";

import { SITE_URL as BASE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/courses", "/library", "/explain", "/exam", "/pathways", "/worksheets", "/competitions", "/about", "/for-schools", "/privacy", "/terms"].map((p) => ({ url: `${BASE}${p}`, lastModified: now }));
  const courses = subjects.map((s) => ({ url: `${BASE}/course/${s.slug}`, lastModified: now }));
  const lessons = subjects.flatMap((s) => flatLessons(s).map((l) => ({ url: `${BASE}${l.href}`, lastModified: now })));
  return [...pages, ...courses, ...lessons];
}
