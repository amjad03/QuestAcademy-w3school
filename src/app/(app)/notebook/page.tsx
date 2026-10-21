import { PageColumns } from "@/components/shell/AppShell";
import { RailFooter } from "@/components/shell/RailCards";
import { NotebookView } from "@/components/notebook/NotebookView";
import { NotebookRail } from "@/components/notebook/NotebookRail";

export const metadata = { title: "Notebook" };

export default function Page() {
  return (
    <PageColumns
      rail={
        <>
          <NotebookRail />
          <RailFooter />
        </>
      }
    >
      <NotebookView />
    </PageColumns>
  );
}
