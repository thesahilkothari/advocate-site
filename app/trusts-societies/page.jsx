export const metadata = {
  title: "Trusts & Societies | Kothari Vakil",
  description:
    "BPT Act & Societies Registration Act compliance, governance, and disputes for trusts and societies in Maharashtra.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-semibold">Trusts & Societies</h1>
      <p className="mt-4 text-white/80">Governance, compliance and dispute resolution across Maharashtra.</p>
      <h2 className="mt-8 text-xl font-semibold">Services</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Registration & alterations</li>
        <li>Governance frameworks</li>
        <li>Dispute resolution and filings</li>
      </ul>
      <div className="mt-10 flex gap-4">
        <a className="underline" href="/civil-litigation">Civil Litigation</a>
        <a className="underline" href="/#contact">Contact</a>
      </div>
    </main>
  );
}
