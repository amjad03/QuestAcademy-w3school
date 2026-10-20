import { Suspense } from "react";
import { Onboarding } from "./Onboarding";

export const metadata = { title: "Start your quest" };

export default function Page() {
  return (
    <Suspense>
      <Onboarding />
    </Suspense>
  );
}
