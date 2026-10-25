import { SubjectView } from "@/components/class/ClassViews";

export const metadata = { title: "My subject" };

export default async function Page({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  return <SubjectView subjectId={subject} />;
}
