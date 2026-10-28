import { SchoolGate } from "@/components/school/ui";
import { PrincipalDashboard } from "@/components/school/PrincipalDashboard";

export const metadata = { title: "My school", robots: { index: false } };

export default function Page() {
  return (
    <SchoolGate roles={["principal"]} title="School dashboard">
      <PrincipalDashboard />
    </SchoolGate>
  );
}
