import { catalog } from "@/content";
import { Dashboard } from "@/components/dashboard/Dashboard";

export const metadata = { title: "My Quest" };

export default function Page() {
  return <Dashboard catalog={catalog()} />;
}
