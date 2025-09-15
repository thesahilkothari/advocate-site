export const metadata = {
  title: "Civil Litigation Lawyer in Maharashtra | Kothari Vakil",
  description:
    "Civil disputes incl. property, tenancy, contracts & recovery. Appearances across Maharashtra incl. Bombay High Court. Consult now.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-semibold">Civil Litigation in Maharashtra</h1>
      <p className="mt-4 text-white/80">
        Matters including property & tenancy, contracts & recovery, injunctions, appeals & revisions.
        Appearances across District & Sessions Courts and the Bombay High Court.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Key Areas</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Property & Tenancy (possession, injunctions, mesne profits)</li>
        <li>Contracts & Recovery (specific performance, damages)</li>
        <li>Interim Reliefs (Order XXXIX, arrests/attachments)</li>
        <li>Appeals & Revisions (incl. second appeals)</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">FAQs</h2>
      <details className="mt-3">
        <summary className="cursor-pointer">How do I start a civil case?</summary>
        <div className="mt-2 text-white/80">We review facts, documents and limitation, then draft pleadings and file in the appropriate forum.</div>
      </details>
      <details className="mt-3">
        <summary className="cursor-pointer">Do you appear in the Bombay High Court?</summary>
        <div className="mt-2 text-white/80">Yes—writs, appeals/revisions and other matters, as applicable.</div>
      </details>

      <div className="mt-10 flex gap-4">
        <a className="underline" href="/drafting-advisory">Drafting & Advisory</a>
        <a className="underline" href="/baramati-lawyer">Baramati Lawyer</a>
        <a className="underline" href="/#contact">Contact</a>
      </div>

      {/* Simple JSON-LD FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"FAQPage",
          "mainEntity":[
            {"@type":"Question","name":"How do I start a civil case?","acceptedAnswer":{"@type":"Answer","text":"We review facts, documents and limitation, then draft pleadings and file in the appropriate forum."}},
            {"@type":"Question","name":"Do you appear in the Bombay High Court?","acceptedAnswer":{"@type":"Answer","text":"Yes—writs, appeals/revisions and other matters, as applicable."}}
          ]
        })
      }} />
    </main>
  );
}
