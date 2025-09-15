export const metadata = {
  title: "Lawyer in Pune | Kothari Vakil",
  description:
    "Appearances in Pune courts and across Maharashtra, incl. Bombay High Court. Civil, criminal, real estate/RERA, trusts & societies.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-semibold">Lawyer in Pune</h1>
      <p className="mt-4 text-white/80">
        Matters in Pune courts and other forums as applicable, with drafting-first strategy and clear timelines.
      </p>
      <div className="mt-10 flex gap-4">
        <a className="underline" href="/rera-real-estate">RERA & Real Estate</a>
        <a className="underline" href="/trusts-societies">Trusts & Societies</a>
        <a className="underline" href="/#contact">Contact</a>
      </div>
    </main>
  );
}
