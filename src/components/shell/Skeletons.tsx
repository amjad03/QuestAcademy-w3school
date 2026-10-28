/** Route-level loading placeholders (used by loading.tsx files). Server components: no client JS. */

function Bar({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} />;
}

function Columns({ children, rail = true, wide }: { children: React.ReactNode; rail?: boolean; wide?: boolean }) {
  return (
    <div role="status" aria-busy="true" aria-label="Loading" className={`mx-auto flex gap-12 px-4 py-6 sm:px-6 lg:py-8 ${wide ? "max-w-[1180px]" : "max-w-[1060px]"}`}>
      <div className="min-w-0 flex-1">{children}</div>
      {rail && (
        <aside className="hidden w-[340px] shrink-0 space-y-5 lg:block">
          <Bar className="h-40" />
          <Bar className="h-56" />
        </aside>
      )}
    </div>
  );
}

function Header() {
  return (
    <div className="mb-6 space-y-3">
      <Bar className="h-4 w-32" />
      <Bar className="h-8 w-2/3" />
      <Bar className="h-4 w-1/2" />
    </div>
  );
}

/** Learn / My class home: greeting, continue card, course path. */
export function HomeSkeleton() {
  return (
    <Columns>
      <Header />
      <Bar className="mb-6 h-36 rounded-2xl" />
      <div className="space-y-3">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="flex items-center gap-4 rounded-2xl border border-line/60 p-4">
            <Bar className="h-12 w-12 shrink-0 rounded-full" />
            <div className="flex-1 space-y-2">
              <Bar className="h-4 w-1/2" />
              <Bar className="h-3 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </Columns>
  );
}

/** Course or unit page: title block, then units with lesson rows. */
export function CourseSkeleton() {
  return (
    <Columns>
      <Header />
      <div className="space-y-5">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="space-y-3 rounded-2xl border border-line/60 p-5">
            <Bar className="h-5 w-1/3" />
            {Array.from({ length: 3 }, (_, j) => (
              <div key={j} className="flex items-center gap-3">
                <Bar className="h-9 w-9 shrink-0 rounded-lg" />
                <Bar className="h-4 flex-1" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Columns>
  );
}

/** Lesson page: breadcrumb, title, video/article body, unit outline rail. */
export function LessonSkeleton() {
  return (
    <Columns wide>
      <Bar className="mb-3 h-3 w-48" />
      <Bar className="mb-2 h-9 w-3/4" />
      <Bar className="mb-6 h-4 w-1/2" />
      <div className="mb-6 flex gap-2">
        {Array.from({ length: 4 }, (_, i) => (
          <Bar key={i} className="h-9 w-24 rounded-full" />
        ))}
      </div>
      <Bar className="mb-6 aspect-video w-full rounded-2xl" />
      <div className="space-y-3">
        {["w-full", "w-11/12", "w-full", "w-4/5", "w-11/12", "w-3/5"].map((w, i) => (
          <Bar key={i} className={`h-4 ${w}`} />
        ))}
      </div>
    </Columns>
  );
}

/** Practice, quiz and test sessions: full-screen focus layout. */
export function SessionSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading" className="flex min-h-screen flex-col bg-bg">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-4 px-4 py-5">
        <Bar className="h-8 w-8 shrink-0 rounded-full" />
        <Bar className="h-3 flex-1 rounded-full" />
        <Bar className="h-6 w-14" />
      </div>
      <div className="mx-auto w-full max-w-2xl flex-1 space-y-4 px-4 pt-8">
        <Bar className="h-4 w-28" />
        <Bar className="h-7 w-5/6" />
        <Bar className="mb-4 h-7 w-2/3" />
        {Array.from({ length: 4 }, (_, i) => (
          <Bar key={i} className="h-14 rounded-2xl" />
        ))}
      </div>
      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-3xl justify-end px-4 py-5">
          <Bar className="h-12 w-36 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

/** Card grid pages: practice, plan, explain, notebook. */
export function GridSkeleton({ rail = true }: { rail?: boolean }) {
  return (
    <Columns rail={rail} wide={!rail}>
      <Header />
      <div className="mb-6 flex gap-2">
        {Array.from({ length: 3 }, (_, i) => (
          <Bar key={i} className="h-9 w-24 rounded-full" />
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="space-y-3 rounded-2xl border border-line/60 p-5">
            <Bar className="h-10 w-10 rounded-xl" />
            <Bar className="h-4 w-2/3" />
            <Bar className="h-3 w-full" />
          </div>
        ))}
      </div>
    </Columns>
  );
}

/** Settings: stacked form sections. */
export function SettingsSkeleton() {
  return (
    <Columns rail={false}>
      <Header />
      <div className="max-w-2xl space-y-5">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="space-y-3 rounded-2xl border border-line/60 p-5">
            <Bar className="h-5 w-40" />
            <Bar className="h-10" />
            <Bar className="h-10" />
          </div>
        ))}
      </div>
    </Columns>
  );
}

/** Live tutor: board area and chat column. */
export function TutorSkeleton() {
  return (
    <Columns rail={false} wide>
      <Header />
      <div className="grid gap-4 lg:grid-cols-[1fr_340px]">
        <Bar className="h-[60vh] rounded-2xl" />
        <div className="space-y-3">
          <Bar className="h-16 rounded-2xl" />
          <Bar className="h-16 rounded-2xl" />
          <Bar className="h-12 rounded-2xl" />
        </div>
      </div>
    </Columns>
  );
}
