// app/insights/page.jsx
import { POSTS } from "../../lib/insights";

export const metadata = {
  title: "Insights | Kothari Vakil",
  description: "Informational legal notes and checklists. Not solicitation or legal advice.",
};

export default function Page() {
  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-semibold">Insights</h1>
      <p className="mt-3 text-white/80 text-sm">
        Informational notes only. Not legal advice or solicitation. For case-specific guidance, please{" "}
        <a className="underline hover:text-white" href="/#contact">contact</a>.
      </p>

      <div className="mt-8 grid gap-4">
        {sorted.map((p) => (
          <article key={p.slug} className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <div className="text-xs text-white/50">{new Date(p.date).toLocaleDateString()}</div>
            <a className="block mt-1 text-lg font-medium underline hover:text-white" href={`/insights/${p.slug}`}>
              {p.title}
            </a>
            <p className="mt-2 text-sm text-white/80">{p.description}</p>
            <div className="mt-3 text-sm">
              <a className="underline hover:text-white" href={`/insights/${p.slug}`}>Read more →</a>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Explore</h2>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <a className="underline hover:text-white" href="/">Home</a>
          <a className="underline hover:text-white" href="/civil-litigation">Civil Litigation</a>
          <a className="underline hover:text-white" href="/criminal-bail">Criminal &amp; Bail</a>
          <a className="underline hover:text-white" href="/rera-real-estate">RERA &amp; Real Estate</a>
          <a className="underline hover:text-white" href="/trusts-societies">Trusts &amp; Societies</a>
          <a className="underline hover:text-white" href="/family-law">Family &amp; Matrimonial</a>
          <a className="underline hover:text-white" href="/drafting-advisory">Drafting &amp; Advisory</a>
          <a className="underline hover:text-white" href="/baramati-lawyer">Baramati Lawyer</a>
          <a className="underline hover:text-white" href="/pune-lawyer">Pune Lawyer</a>
        </div>
      </section>
    </main>
  );
}
