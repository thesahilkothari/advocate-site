export const metadata = {
  title: "Criminal Matters & Bail | Kothari Vakil",
  description:
    "Bail & anticipatory bail, revisions, quashing. Appearances across Maharashtra including filings aligned with BNSS/BNSA.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-semibold">Criminal Matters & Bail</h1>
      <p className="mt-4 text-white/80">
        Anticipatory/regular bail, revisions, quashing, and trial strategy with clear documentation and timelines.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Scope</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Anticipatory / Regular Bail</li>
        <li>Revisions & Quashing</li>
        <li>Trial assistance and documentation</li>
      </ul>

      <div className="mt-10 flex gap-4">
        <a className="underline" href="/civil-litigation">Civil Litigation</a>
        <a className="underline" href="/#contact">Contact</a>
      </div>
    </main>
  );
}
