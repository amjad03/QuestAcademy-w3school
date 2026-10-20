import { Suspense } from "react";
import { AuthForm } from "@/components/profile/AuthForm";

export const metadata = { title: "Log in" };

export default function Page() {
  return (
    <Suspense>
      <AuthForm />
    </Suspense>
  );
}
