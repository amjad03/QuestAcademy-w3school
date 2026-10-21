import { PageColumns } from "@/components/shell/AppShell";
import { QuestsCard, RailFooter } from "@/components/shell/RailCards";
import { PlanView } from "@/components/plan/PlanView";

export const metadata = { title: "Study plan" };

export default function Page() {
  return (
    <PageColumns rail={<><QuestsCard limit={2} /><RailFooter /></>}>
      <PlanView />
    </PageColumns>
  );
}
