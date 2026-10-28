import { OfflineList } from "@/components/offline/OfflineList";

export const metadata = { title: "Offline lessons", robots: { index: false } };

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-bg px-4 py-10">
      <p className="eyebrow">Quest Academy</p>
      <h1 className="mt-1 text-2xl font-black sm:text-3xl">Offline lessons</h1>
      <p className="mt-1 font-semibold text-muted">Lessons you saved, and pages you opened recently, open here without internet.</p>
      <OfflineList />
    </main>
  );
}
