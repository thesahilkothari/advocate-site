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
      // At the end of each service/location page's <main>:
<section className="mt-12">
  <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
  <details className="mt-4">
    <summary className="cursor-pointer">[Add a page-specific question here]</summary>
    <div className="mt-2 text-white/80 text-sm">[Short, precise answer.]</div>
  </details>
  <details className="mt-3">
    <summary className="cursor-pointer">Do you appear in the Bombay High Court?</summary>
    <div className="mt-2 text-white/80 text-sm">Yes—matters as applicable.</div>
  </details>
</section>

<section className="mt-10">
  <h2 className="text-2xl font-semibold">Explore</h2>
  <div className="mt-3 flex flex-wrap gap-3 text-sm">
    <a className="underline hover:text-white" href="/">Home</a>
    <a className="underline hover:text-white" href="/civil-litigation">Civil Litigation</a>
    <a className="underline hover:text-white" href="/criminal-bail">Criminal & Bail</a>
    <a className="underline hover:text-white" href="/rera-real-estate">RERA & Real Estate</a>
    <a className="underline hover:text-white" href="/trusts-societies">Trusts & Societies</a>
    <a className="underline hover:text-white" href="/family-law">Family & Matrimonial</a>
    <a className="underline hover:text-white" href="/drafting-advisory">Drafting & Advisory</a>
    <a className="underline hover:text-white" href="/baramati-lawyer">Baramati Lawyer</a>
    <a className="underline hover:text-white" href="/pune-lawyer">Pune Lawyer</a>
  </div>
</section>
</main>
  );
}
