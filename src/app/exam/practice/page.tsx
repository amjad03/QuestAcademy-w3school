import { Suspense } from "react";
import { examQuestions } from "@/content/exam/questions";
import { ChapterDrill } from "@/components/exam/ChapterDrill";

export const metadata = { title: "Chapter drill" };

export default function Page() {
  return (
    <Suspense>
      <ChapterDrill pool={examQuestions} />
    </Suspense>
  );
}
