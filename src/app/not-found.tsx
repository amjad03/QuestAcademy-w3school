import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-4 text-center">
      <div>
        <div className="animate-float text-8xl">🧭</div>
        <h1 className="mt-6 font-display text-4xl font-bold">This path isn’t on the map</h1>
        <p className="mt-2 text-muted">Even great explorers take a wrong turn. Let’s get you back on the quest.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/dashboard" className="btn-primary">
            My quest
          </Link>
          <Link href="/explore" className="btn-ghost">
            Explore subjects
          </Link>
        </div>
      </div>
    </div>
  );
}
