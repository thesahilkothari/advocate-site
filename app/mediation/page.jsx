import MediationEnquiryForm from "../_components/MediationEnquiryForm";
import { ADVOCATE, PRIMARY_NAV, SITE_URL } from "../../lib/site";
import { createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Accredited Mediator in Maharashtra & Online | Kothari Vakil",
  description:
    "Accredited mediator offering structured neutral processes for commercial, property, family, online and cross-border disputes from Maharashtra.",
  path: "/mediation",
});

const faqItems = [
  {
    question: "Is the mediator acting as my advocate?",
    answer:
      "No. A mediator is neutral and does not represent either participant. If Adv. Sahil S. Kothari has represented or advised a participant in the same or a related matter, that history must be disclosed and may prevent a neutral appointment.",
  },
  {
    question: "How are mediation fees structured?",
    answer:
      "Fees may be based on preparation time, session time and agreed administration. Written terms should identify the rate or session block, any minimum booking period, cancellation terms, taxes and how the participants will share payment before the appointment begins.",
  },
  {
    question: "Can the mediation be conducted online?",
    answer:
      "Yes, where the participants, documents, confidentiality arrangements and technology are suitable. A short technology and attendance protocol is agreed before the first substantive session.",
  },
  {
    question: "Does submitting the form start mediation?",
    answer:
      "No. The form starts only a preliminary suitability and conflict-check process. Mediation begins only after all required participants agree, the mediator accepts the appointment and written process and fee terms are completed.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function MediationPage() {
  const pathways = [
    {
      href: "/mediation/commercial-business",
      title: "Commercial & business mediation",
      text: "Contracts, unpaid invoices, partnership, shareholder, vendor, supply and continuing-business disputes.",
    },
    {
      href: "/mediation/property-real-estate",
      title: "Property & real-estate mediation",
      text: "Co-owner, family property, possession, development, construction, society and project-related disputes.",
    },
    {
      href: "/mediation/online",
      title: "Online mediation",
      text: "Remote sessions for participants in different cities, with document, identity, attendance and technology protocols.",
    },
    {
      href: "/mediation/cross-border",
      title: "Cross-border mediation",
      text: "Process design for participants, counsel or assets in different countries, including time zones and enforcement planning.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-5">
          <a href="/" className="font-semibold">{ADVOCATE.name}<span className="block text-xs font-normal text-white/55">Enrl. {ADVOCATE.enrollment}</span></a>
          <nav aria-label="Primary navigation" className="hidden gap-5 text-sm text-white/75 md:flex">
            {PRIMARY_NAV.map((item) => <a key={item.href} href={item.href} className="hover:text-white">{item.label}</a>)}
          </nav>
          <a href={`tel:${ADVOCATE.phoneHref}`} className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/10">Call</a>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <section className="grid gap-10 md:grid-cols-[1.15fr_.85fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">Accredited mediator · Neutral dispute-resolution process</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">Mediation in Maharashtra, online and across borders.</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">A structured process for participants who want to explore resolution without transferring decision-making to a court or tribunal. The mediator manages the process impartially; the participants decide whether and on what terms to settle.</p>
          </div>
          <aside className="rounded-2xl border border-amber-200/15 bg-amber-200/5 p-6 text-sm leading-7 text-white/70">
            <h2 className="font-medium text-white">Training and role separation</h2>
            <p className="mt-2">{ADVOCATE.mediationCredential.programme} by {ADVOCATE.mediationCredential.institution}; {ADVOCATE.mediationCredential.qualityAssurance.toLowerCase()}; {ADVOCATE.mediationCredential.period}.</p>
            <p className="mt-3">Mediator and advocate are different roles. In a neutral appointment, no participant receives individual legal advice from the mediator. Participants may take independent advice before, during or after sessions.</p>
          </aside>
        </section>

        <section className="mt-16" aria-labelledby="pathways-heading">
          <h2 id="pathways-heading" className="text-3xl font-semibold">Mediation pathways</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {pathways.map((item) => (
              <a key={item.href} href={item.href} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                <span className="mt-4 inline-block text-sm underline">View process details</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">A five-stage process</h2>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-white/72">
              <li><strong className="text-white">1. Suitability screening:</strong> broad issues, participant capacity, urgency, safety and whether mediation can usefully address the dispute.</li>
              <li><strong className="text-white">2. Identity and conflict check:</strong> names of participants, related entities and advisers are checked before confidential substance is received.</li>
              <li><strong className="text-white">3. Written appointment:</strong> neutrality, confidentiality, attendance, authority, fees, cancellation and technology arrangements are documented.</li>
              <li><strong className="text-white">4. Preparation and sessions:</strong> issue lists, short position summaries, joint meetings and private meetings are used as appropriate.</li>
              <li><strong className="text-white">5. Closure:</strong> any agreed terms are recorded with appropriate legal and tax advice, or the mediation closes without settlement.</li>
            </ol>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-semibold">Fees and scheduling</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">Time-based fees can match the actual work required. A proposal may separate intake and conflict checks, preparation, substantive session time, additional document review and agreed administration.</p>
            <p className="mt-4 text-sm leading-7 text-white/70">Before appointment, participants should receive the fee basis, booking block, overrun treatment, cancellation policy, tax treatment and payment allocation. No fee information should imply that settlement is guaranteed.</p>
            <h3 className="mt-7 font-medium">Typical formats</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Focused two-hour online session</li>
              <li>• Half-day or full-day mediation</li>
              <li>• Multi-session process for document-heavy disputes</li>
              <li>• Cross-border scheduling across time zones</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 p-7 md:p-9">
          <h2 className="text-2xl font-semibold">Current-law note</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/70">The legal treatment of a settlement depends on the dispute, parties, applicable law, forum and the provisions currently in force. The Mediation Act, 2023 should be read with its commencement notifications; not every provision was brought into force by the notification dated 9 October 2023. For cross-border settlements, treaty status and the proposed enforcement country require separate analysis. India is presently listed by UNCITRAL as a signatory, but not a party by ratification, to the Singapore Convention on Mediation.</p>
          <p className="mt-3 text-xs text-white/50">Legal status last reviewed: 24 August 2026.</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a href="https://legalaffairs.gov.in/actsrulespolicies/notification-enforcement-dated-09102023-under-mediation-act-2023" target="_blank" rel="noreferrer" className="underline hover:text-white">Official commencement notification</a>
            <a href="https://uncitral.un.org/en/texts/mediation/conventions/international_settlement_agreements/status" target="_blank" rel="noreferrer" className="underline hover:text-white">UNCITRAL convention status</a>
          </div>
        </section>

        <section id="mediation-enquiry" className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-7 md:grid-cols-[.75fr_1.25fr] md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/80">Preliminary intake</p>
            <h2 className="mt-3 text-3xl font-semibold">Check whether mediation may be suitable.</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">Provide only a broad, non-confidential outline. Do not send settlement offers, privileged communications, identity documents or sensitive evidence at this stage.</p>
            <div id="thank-you" className="mt-5 hidden rounded-xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-100 target:block">Thank you. The preliminary enquiry has been received for screening.</div>
          </div>
          <MediationEnquiryForm />
        </section>

        <section className="mt-16" aria-labelledby="mediation-faq-heading">
          <h2 id="mediation-faq-heading" className="text-3xl font-semibold">Frequently asked questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <summary className="cursor-pointer font-medium">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-white/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <span>{ADVOCATE.name} · Enrl. {ADVOCATE.enrollment}</span>
          <div className="flex flex-wrap gap-4"><a href="/privacy">Privacy</a><a href="/professional-notice">Professional notice</a><a href="/#contact">General consultation</a></div>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Mediation", url: `${SITE_URL}/mediation`, provider: { "@id": `${SITE_URL}/#practice` }, areaServed: ["Maharashtra, India", "Online"] }) }} />
    </div>
  );
}
