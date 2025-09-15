// app/trusts-societies/page.jsx
export const metadata = {
  title: "Trusts & Societies | Kothari Vakil",
  description:
    "BPT Act & Societies Registration Act compliance, governance, and disputes for trusts and societies in Maharashtra.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      {/* Hero / Intro */}
      <h1 className="text-3xl font-semibold">Trusts & Societies (Maharashtra)</h1>
      <p className="mt-4 text-white/80">
        Governance, compliance and dispute resolution under the Bombay Public Trusts (BPT) Act and
        Societies Registration framework. Focus on clear procedures, documentation and pragmatic outcomes.
      </p>

      {/* Services */}
      <h2 className="mt-8 text-xl font-semibold">Services</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Registration, changes, and record updates</li>
        <li>Governance frameworks &amp; compliance calendars</li>
        <li>Dispute resolution and filings before appropriate forums</li>
        <li>Advisory on documentation, meetings, and regulatory interactions</li>
      </ul>

      {/* Page-specific FAQs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

        <details className="mt-4">
          <summary className="cursor-pointer">Can you help register a new trust or society?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—end-to-end assistance from documentation to filing and follow-ups.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Do you handle governance and compliance matters?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—drafting by-laws, minutes, resolutions, and creating compliance calendars.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">What about disputes or inquiries before authorities?</summary>
          <div className="mt-2 text-white/80 text-sm">
            We assist with filings, responses, and representation before appropriate forums, as applicable.
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
                  name: "Can you help register a new trust or society?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—end-to-end assistance from documentation to filing and follow-ups.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle governance and compliance matters?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—drafting by-laws, minutes, resolutions, and creating compliance calendars.",
                  },
                },
                {
                  "@type": "Question",
                  name:
                    "What about disputes or inquiries before authorities?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "We assist with filings, responses, and representation before appropriate forums, as applicable.",
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
