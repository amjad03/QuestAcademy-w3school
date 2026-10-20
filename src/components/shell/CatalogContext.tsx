"use client";

import { createContext, useContext } from "react";
import type { CourseCard } from "@/content/course";

const Ctx = createContext<CourseCard[]>([]);

/** Lightweight course list (titles, ids, lesson ids) available to every client component in the app shell. */
export function CatalogProvider({ courses, children }: { courses: CourseCard[]; children: React.ReactNode }) {
  return <Ctx.Provider value={courses}>{children}</Ctx.Provider>;
}

export function useCatalog() {
  return useContext(Ctx);
}

export function useCourse(slug: string | null | undefined) {
  const all = useContext(Ctx);
  return all.find((c) => c.slug === slug);
}
