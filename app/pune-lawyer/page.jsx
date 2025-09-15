// app/pune-lawyer/page.jsx
export const metadata = {
  title: "Lawyer in Pune | Kothari Vakil",
  description:
    "Appearances in Pune courts and across Maharashtra, including the Bombay High Court. Civil, criminal, real estate/RERA, trusts & societies.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      {/* Hero / Intro */}
      <h1 className="text-3xl font-semibold">Lawyer in Pune</h1>
      <p className="mt-4 text-white/80">
        Matters before Pune courts and other forums as applicable, with a drafting-first approach,
        clear timelines, and appearances across Maharashtra including the Bombay High Court.
      </p>

      {/* Services snapshot */}
      <h2 className="mt-8 text-xl font-semibold">Key Matters</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Civil: property, tenancy/possession, contracts &amp; recovery</li>
        <li>Criminal: anticipatory/regular bail, revisions, quashing</li>
        <li>Real estate &amp; RERA: development documentation &amp; MAHARERA</li>
        <li>Trusts &amp; societies: governance, compliance &amp; disputes</li>
      </ul>

      {/* Page-specific FAQs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

        <details className="mt-4">
          <summary className="cursor-pointer">Do you handle Pune matters and also appear in the Bombay High Court?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes. I appear before Pune courts and, when required, before the Bombay High Court.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">How do I initiate a consultation from Pune?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Share a brief outline and documents. We assess limitation/jurisdiction and suggest the next steps,
            including drafting and filing where appropriate.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Do you assist with MAHARERA or real-estate documentation in Pune?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes — documentation, MAHARERA complaints/compliance, municipal/MRTP, and due diligence.
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
                  name:
                    "Do you handle Pune matters and also appear in the Bombay High Court?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes. I appear before Pune courts and, when required, before the Bombay High Court.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I initiate a consultation from Pune?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Share a brief outline and documents. We assess limitation/jurisdiction and suggest the next steps, including drafting and filing where appropriate.",
                  },
                },
                {
                  "@type": "Question",
                  name:
                    "Do you assist with MAHARERA or real-estate documentation in Pune?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes — documentation, MAHARERA complaints/compliance, municipal/MRTP, and due diligence.",
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
          <a className="underline hover:text-white" href="/criminal-bail">Criminal &amp; Bail</a>
          <a className="underline hover:text-white" href="/rera-real-estate">RERA &amp; Real Estate</a>
          <a className="underline hover:text-white" href="/trusts-societies">Trusts &amp; Societies</a>
          <a className="underline hover:text-white" href="/family-law">Family &amp; Matrimonial</a>
          <a className="underline hover:text-white" href="/drafting-advisory">Drafting &amp; Advisory</a>
          <a className="underline hover:text-white" href="/baramati-lawyer">Baramati Lawyer</a>
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
