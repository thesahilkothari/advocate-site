// app/civil-litigation/page.jsx
export const metadata = {
  title: "Civil Litigation Lawyer in Maharashtra | Kothari Vakil",
  description:
    "Property & tenancy, contracts & recovery, injunctions, appeals & revisions. Appearances across Maharashtra including the Bombay High Court.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      {/* Hero / Intro */}
      <h1 className="text-3xl font-semibold">Civil Litigation in Maharashtra</h1>
      <p className="mt-4 text-white/80">
        Matters including property &amp; tenancy, contracts &amp; recovery, injunctions, appeals &amp; revisions.
        Appearances before District &amp; Sessions Courts and, where applicable, the Bombay High Court.
      </p>

      {/* Key Areas */}
      <h2 className="mt-8 text-xl font-semibold">Key Areas</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Property &amp; Tenancy (possession, injunctions, mesne profits)</li>
        <li>Contracts &amp; Recovery (specific performance, damages)</li>
        <li>Interim Reliefs (temporary injunctions, attachments, receivers)</li>
        <li>Appeals &amp; Revisions (including second appeals)</li>
      </ul>

      {/* Page-specific FAQs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

        <details className="mt-4">
          <summary className="cursor-pointer">How do I start a civil case?</summary>
          <div className="mt-2 text-white/80 text-sm">
            We review your facts and documents, check limitation/jurisdiction, then draft pleadings and file in the appropriate forum.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Do you appear in the Bombay High Court?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—writs, appeals/revisions and other matters, as applicable to the case.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Can I seek interim reliefs (injunctions)?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Where the facts and law support it, we can move for urgent ad-interim/temporary reliefs to protect your rights pending trial.
          </div>
        </details>

        {/* JSON-LD FAQ for this page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I start a civil case?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "We review your facts and documents, check limitation/jurisdiction, then draft pleadings and file in the appropriate forum.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you appear in the Bombay High Court?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—writs, appeals/revisions and other matters, as applicable to the case.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I seek interim reliefs (injunctions)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Where the facts and law support it, we can move for urgent ad-interim/temporary reliefs to protect your rights pending trial.",
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* Cross-links to all pages + Home */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Explore</h2>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <a className="underline hover:text-white" href="/">Home</a>
          <a className="underline hover:text-white" href="/criminal-bail">Criminal &amp; Bail</a>
          <a className="underline hover:text-white" href="/rera-real-estate">RERA &amp; Real Estate</a>
          <a className="underline hover:text-white" href="/trusts-societies">Trusts &amp; Societies</a>
          <a className="underline hover:text-white" href="/family-law">Family &amp; Matrimonial</a>
          <a className="underline hover:text-white" href="/drafting-advisory">Drafting &amp; Advisory</a>
          <a className="underline hover:text-white" href="/baramati-lawyer">Baramati Lawyer</a>
          <a className="underline hover:text-white" href="/pune-lawyer">Pune Lawyer</a>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="mt-10">
        <a className="underline hover:text-white" href="/#contact">
          Contact &amp; Consultation →
        </a>
      </div>
    </main>
  );
}
