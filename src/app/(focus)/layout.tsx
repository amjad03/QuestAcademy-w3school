import { subjects } from "@/content";
import { courseCard } from "@/content/course";
import { CatalogProvider } from "@/components/shell/CatalogContext";

/** Distraction-free screens: sessions, onboarding, auth, mock tests. */
export default function FocusLayout({ children }: { children: React.ReactNode }) {
  return <CatalogProvider courses={subjects.map((s) => courseCard(s.slug))}>{children}</CatalogProvider>;
}
