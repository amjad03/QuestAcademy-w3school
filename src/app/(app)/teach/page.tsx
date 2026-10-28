import { SchoolGate } from "@/components/school/ui";
import { TeachDashboard } from "@/components/school/TeachDashboard";

export const metadata = { title: "Teach", robots: { index: false } };

export default function Page() {
  return (
    <SchoolGate roles={["teacher", "principal"]} title="Teacher dashboard">
      <TeachDashboard />
    </SchoolGate>
  );
}
