import { ChapterView } from "@/components/class/ClassViews";
import { examChapterIndex } from "@/content/exam/chapter-index";

export const metadata = { title: "Chapter" };

export default async function Page({ params }: { params: Promise<{ subject: string; chapter: string }> }) {
  const { subject, chapter } = await params;
  return <ChapterView subjectId={subject} chapterSlug={chapter} examIndex={examChapterIndex()} />;
}
