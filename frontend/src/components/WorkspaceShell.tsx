import { HealthCard } from "./HealthCard";

const placeholders = [
  ["Case workspace", "A product-style workspace for investigation context and operator review."],
  ["Evidence timeline", "Trace GUI, CLI, API, and tool evidence without mixing it with references."],
  ["Report review", "Prepare human-reviewed audit narratives, findings, and reviewer/admin UI."],
];

export function WorkspaceShell() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-8 text-white shadow-2xl shadow-slate-300/60 dark:shadow-black/40 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Evidence-driven workspace</p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">Vericus</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Initial runnable scaffold for a Next.js workspace connected to a Django REST Framework backend.
          </p>
        </section>

        <HealthCard />

        <section className="grid gap-5 md:grid-cols-3">
          {placeholders.map(([title, description]) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
