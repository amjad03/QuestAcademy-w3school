"use client";

import { setLessonIndex, type LiteSubject } from "@/lib/lesson-lite";

/** Registers the slim lesson index before its children render. */
export function LessonIndex({ data, children }: { data: LiteSubject[]; children: React.ReactNode }) {
  setLessonIndex(data);
  return <>{children}</>;
}
