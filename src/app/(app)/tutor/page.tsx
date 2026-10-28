import { Suspense } from "react";
import { PageColumns } from "@/components/shell/AppShell";
import { PlanGate } from "@/components/tutor/live/PlanGate";

export const metadata = { title: "Live AI tutor" };

export default function Page() {
  return (
    <PageColumns wide>
      <Suspense>
        <PlanGate />
      </Suspense>
    </PageColumns>
  );
}
