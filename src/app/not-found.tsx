import Link from "next/link";
import { Mascot } from "@/components/brand/Mascot";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-bg px-4 text-center">
      <div>
        <div className="flex justify-center">
          <Mascot pose="think" size={150} />
        </div>
        <h1 className="mt-6 text-3xl font-black">We couldn’t find that page</h1>
        <p className="mt-2 font-semibold text-muted">It may have moved. Let’s get you back to learning.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/learn" className="btn-primary">
            Go to Learn
          </Link>
          <Link href="/courses" className="btn-ghost">
            Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
