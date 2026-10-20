import { subjects } from "@/content";
import { courseCard } from "@/content/course";
import { AppShell } from "@/components/shell/AppShell";
import { CatalogProvider } from "@/components/shell/CatalogContext";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <CatalogProvider courses={subjects.map((s) => courseCard(s.slug))}>
      <AppShell>{children}</AppShell>
    </CatalogProvider>
  );
}
