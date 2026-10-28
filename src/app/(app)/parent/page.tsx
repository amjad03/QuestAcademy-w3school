import { ParentDashboard } from "@/components/parent/ParentDashboard";
import { LessonIndex } from "@/components/shell/LessonIndex";
import { lessonIndex } from "@/lib/lesson-lite-server";

export const metadata = { title: "Parent dashboard" };

export default function Page() {
  return (
    <LessonIndex data={lessonIndex()}>
      <ParentDashboard />
    </LessonIndex>
  );
}
