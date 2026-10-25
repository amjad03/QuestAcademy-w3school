import { ChapterView } from "@/components/class/ClassViews";

export const metadata = { title: "Chapter" };

export default async function Page({ params }: { params: Promise<{ subject: string; chapter: string }> }) {
  const { subject, chapter } = await params;
  return <ChapterView subjectId={subject} chapterSlug={chapter} />;
}
