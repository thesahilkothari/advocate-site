// app/rera-real-estate/page.jsx
export const metadata = {
  title: "RERA & Real Estate | Kothari Vakil",
  description:
    "Development agreements, MAHARERA filings, municipal/MRTP compliance and due diligence across Maharashtra.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      {/* Hero / Intro */}
      <h1 className="text-3xl font-semibold">RERA & Real Estate (Maharashtra)</h1>
      <p className="mt-4 text-white/80">
        Contracts, development documentation, MAHARERA complaints/compliance, municipal/MRTP permissions,
        and property due diligence with a drafting-first approach.
      </p>

      {/* Work Highlights */}
      <h2 className="mt-8 text-xl font-semibold">Work Highlights</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Development agreements &amp; allied documentation</li>
        <li>MAHARERA complaints, replies &amp; compliance</li>
        <li>Municipal / MRTP permissions &amp; coordination</li>
        <li>Title checks and property due diligence</li>
      </ul>

      {/* Page-specific FAQs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

        <details className="mt-4">
          <summary className="cursor-pointer">Can you draft or review development agreements?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—end-to-end assistance including drafts, negotiations and final documentation.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Do you handle MAHARERA filings and responses?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—complaints, replies, and compliance, depending on the facts and applicable law.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Can you help with municipal/MRTP processes?</summary>
          <div className="mt-2 text-white/80 text-sm">
            We advise on documentation, coordination, and compliance steps with the concerned authorities.
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
                  name: "Can you draft or review development agreements?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—end-to-end assistance including drafts, negotiations and final documentation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle MAHARERA filings and responses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—complaints, replies, and compliance, depending on the facts and applicable law.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you help with municipal/MRTP processes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "We advise on documentation, coordination, and compliance steps with the concerned authorities.",
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
