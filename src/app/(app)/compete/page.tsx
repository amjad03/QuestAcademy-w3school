import { SchoolGate } from "@/components/school/ui";
import { Compete } from "@/components/school/Compete";

export const metadata = { title: "Class league", robots: { index: false } };

export default function Page() {
  return (
    <SchoolGate roles={["student"]} title="Class league">
      <Compete />
    </SchoolGate>
  );
}
