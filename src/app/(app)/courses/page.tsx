import { Suspense } from "react";
import { subjects } from "@/content";
import { courseCard } from "@/content/course";
import { CourseCatalog } from "@/components/course/CourseCatalog";

export const metadata = { title: "Courses" };

export default function Page() {
  const courses = subjects.map((s) => ({ ...courseCard(s.slug), description: s.description }));
  return (
    <Suspense>
      <CourseCatalog courses={courses} />
    </Suspense>
  );
}
