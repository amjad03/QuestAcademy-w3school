import { Suspense } from "react";
import { AuthForm } from "@/components/profile/AuthForm";

export const metadata = { title: "Log in or sign up", robots: { index: false } };

export default function Page() {
  return (
    <Suspense>
      <AuthForm />
    </Suspense>
  );
}
