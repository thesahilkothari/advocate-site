// app/drafting-advisory/page.jsx
export const metadata = {
  title: "Drafting & Advisory | Kothari Vakil",
  description:
    "Pleadings, agreements, notices, due diligence and practical legal opinions focused on clear outcomes.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      {/* Hero / Intro */}
      <h1 className="text-3xl font-semibold">Drafting & Advisory</h1>
      <p className="mt-4 text-white/80">
        Precise pleadings, agreements, notices, due diligence and opinions with a documentation-first
        approach aligned to forum requirements and timelines.
      </p>

      {/* What we do */}
      <h2 className="mt-8 text-xl font-semibold">What We Do</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Pleadings (plaint/written statement, applications, appeals/revisions)</li>
        <li>Agreements, notices and transaction documentation</li>
        <li>Due diligence and practical, written legal opinions</li>
      </ul>

      {/* Page-specific FAQs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

        <details className="mt-4">
          <summary className="cursor-pointer">Do you review and refine existing drafts?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—line edits for clarity, law alignment, forum formatting and supporting annexures.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Can you assist with pre-litigation notices?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—fact-checking, legal grounds, reliefs and service/limitation considerations.
          </div>
        </details>

        <details className="mt-3">
          <summary className="cursor-pointer">Do you provide written legal opinions?</summary>
          <div className="mt-2 text-white/80 text-sm">
            Yes—document-backed opinions outlining facts, issues, applicable law and practical options.
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
                  name: "Do you review and refine existing drafts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—line edits for clarity, law alignment, forum formatting and supporting annexures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you assist with pre-litigation notices?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—fact-checking, legal grounds, reliefs and service/limitation considerations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide written legal opinions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—document-backed opinions outlining facts, issues, applicable law and practical options.",
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
