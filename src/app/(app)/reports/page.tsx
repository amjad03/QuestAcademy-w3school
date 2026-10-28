import { SchoolGate } from "@/components/school/ui";
import { Reports } from "@/components/school/Reports";

export const metadata = { title: "Weekly reports", robots: { index: false } };

export default function Page() {
  return (
    <SchoolGate roles={["parent", "student", "teacher", "principal"]} title="Weekly reports">
      <Reports />
    </SchoolGate>
  );
}
