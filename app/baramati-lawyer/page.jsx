// app/baramati-lawyer/page.jsx
export const metadata = {
  title: "Baramati Lawyer | Kothari Vakil",
  description:
    "Advocate (vakil) & lawyer from Baramati. Appearances across Maharashtra including the Bombay High Court.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      {/* Hero / Intro */}
      <h1 className="text-3xl font-semibold">Lawyer in Baramati</h1>
      <p className="mt-4 text-white/80">
        Based in Baramati, appearing before District &amp; Sessions Courts, Tribunals across Maharashtra,
        and the Bombay High Court. Focus on clear strategy, precise drafting, and diligent follow-through.
      </p>

      {/* Services snapshot */}
      <h2 className="mt-8 text-xl font-semibold">Key Matters</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Civil litigation: property, tenancy/possession, contracts &amp; recovery</li>
        <li>Criminal matters: anticipatory/regular bail, revisions, quashing</li>
        <li>Real estate &amp; RERA: development documentation &amp; MAHARERA</li>
        <li>Trusts &amp; societies: governance, compliance &amp; disputes</li>
      </ul>

      {/* Page-specific FAQs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <details className="mt-4">
          <summary className="cursor-pointer">Do you take matters outside Baramati?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes. Appearances across Maharashtra (as appropriate) including the Bombay High Court.
          </div>
        </details>
        <details className="mt-3">
          <summary className="cursor-pointer">How do I start a consultation?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Share a brief outline and documents; we assess limitation/jurisdiction and propose the next steps.
          </div>
        </details>
        <details className="mt-3">
          <summary className="cursor-pointer">Do you assist with RERA/real-estate issues?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—development agreements, MAHARERA complaints/compliance, and due diligence.
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
                  name: "Do you take matters outside Baramati?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes. Appearances across Maharashtra (as appropriate) including the Bombay High Court.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I start a consultation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Share a brief outline and documents; we assess limitation/jurisdiction and propose the next steps.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you assist with RERA/real-estate issues?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—development agreements, MAHARERA complaints/compliance, and due diligence.",
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
          <a className="underline hover:text-white" href="/pune-lawyer">Pune Lawyer</a>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="mt-10">
        <a className="underline hover:text-white" href="/#contact">Contact &amp; Consultation →</a>
      </div>
    </main>
  );
}
