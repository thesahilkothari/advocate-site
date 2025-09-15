// app/family-law/page.jsx
export const metadata = {
  title: "Family & Matrimonial | Kothari Vakil",
  description:
    "Divorce, custody/visitation, maintenance, and domestic violence matters with documentation-first strategy.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      {/* Hero / Intro */}
      <h1 className="text-3xl font-semibold">Family & Matrimonial</h1>
      <p className="mt-4 text-white/80">
        Assistance with divorce, custody/visitation, maintenance, domestic violence, and allied proceedings
        with clear timelines and documentation-focused strategy.
      </p>

      {/* Scope */}
      <h2 className="mt-8 text-xl font-semibold">Scope</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Divorce (contested/consent)</li>
        <li>Custody &amp; visitation</li>
        <li>Maintenance &amp; allied reliefs</li>
        <li>Domestic violence proceedings</li>
      </ul>

      {/* Page-specific FAQs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

        <details className="mt-4">
          <summary className="cursor-pointer">How do I start a family matter?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Share a brief outline and documents. We assess jurisdiction/limitation, then plan filing and next steps.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Is mediation an option?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Mediation is often encouraged; we can advise on timing, documentation, and terms if appropriate.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Can interim reliefs be sought?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Depending on facts and law, interim maintenance/custody/visitation or protective orders may be sought.
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
                  name: "How do I start a family matter?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Share a brief outline and documents. We assess jurisdiction/limitation, then plan filing and next steps.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is mediation an option?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Mediation is often encouraged; we can advise on timing, documentation, and terms if appropriate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can interim reliefs be sought?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Depending on facts and law, interim maintenance/custody/visitation or protective orders may be sought.",
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
