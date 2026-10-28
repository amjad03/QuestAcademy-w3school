import { Insights } from "@/components/insights/Insights";
import { LessonIndex } from "@/components/shell/LessonIndex";
import { lessonIndex } from "@/lib/lesson-lite-server";

export const metadata = { title: "Insights" };

export default function Page() {
  return (
    <LessonIndex data={lessonIndex()}>
      <Insights />
    </LessonIndex>
  );
}
