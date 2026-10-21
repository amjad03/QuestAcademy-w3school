import { Suspense } from "react";
import { LearnHome } from "@/components/learn/LearnHome";

export const metadata = { title: "Learn" };

export default function Page() {
  return (
    <Suspense>
      <LearnHome />
    </Suspense>
  );
}
