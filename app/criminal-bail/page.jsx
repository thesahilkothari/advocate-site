// app/criminal-bail/page.jsx
export const metadata = {
  title: "Criminal Matters & Bail | Kothari Vakil",
  description:
    "Anticipatory/regular bail, revisions, quashing, and trial strategy. Appearances across Maharashtra including the Bombay High Court.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      {/* Hero / Intro */}
      <h1 className="text-3xl font-semibold">Criminal Matters & Bail</h1>
      <p className="mt-4 text-white/80">
        Anticipatory/regular bail, revisions, quashing, and trial support with clear documentation,
        timelines, and strategy aligned to the applicable procedure and evidence rules.
      </p>

      {/* Scope */}
      <h2 className="mt-8 text-xl font-semibold">Scope</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Anticipatory / Regular Bail</li>
        <li>Revisions &amp; Quashing</li>
        <li>Trial assistance and documentation</li>
      </ul>

      {/* Page-specific FAQs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

        <details className="mt-4">
          <summary className="cursor-pointer">What do I need for anticipatory bail?</summary>
          <div className="mt-2 text-white/80 text-sm">
            A brief note of facts, FIR number (if any), relevant dates, and supporting documents. We assess
            grounds and prepare the application with annexures.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Do you handle revisions or quashing?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—subject to facts and law. We evaluate maintainability, limitation, and draft the petition/grounds.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Will you appear in the Bombay High Court if needed?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—where the matter requires High Court intervention, we appear and coordinate filings.
          </div>
        </details>

        {/* JSON-LD FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What do I need for anticipatory bail?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "A brief note of facts, FIR number (if any), relevant dates, and supporting documents. We assess grounds and prepare the application with annexures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle revisions or quashing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—subject to facts and law. We evaluate maintainability, limitation, and draft the petition/grounds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will you appear in the Bombay High Court if needed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—where the matter requires High Court intervention, we appear and coordinate filings.",
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
          <a className="underline hover:text-white" href="/civil-litigation">Civil Litigation</a>
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
