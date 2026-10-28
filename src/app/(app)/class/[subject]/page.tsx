import { SubjectView } from "@/components/class/ClassViews";

// Rendered on first visit, then served from the cache (no per-request server render).
export function generateStaticParams() {
  return [];
}

export const metadata = { title: "My subject" };

export default async function Page({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  return <SubjectView subjectId={subject} />;
}
