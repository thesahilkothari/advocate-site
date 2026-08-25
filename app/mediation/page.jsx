import MediationEnquiryForm from "../_components/MediationEnquiryForm";
import { ADVOCATE, PRIMARY_NAV, SITE_URL } from "../../lib/site";
import { createPageMetadata } from "../../lib/site";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Clock3, Globe2, Handshake, ShieldCheck } from "lucide-react";

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
    <div className="site-shell min-h-screen overflow-hidden bg-[#071218] text-[#f7f2e8]">
      <header className="relative z-20 border-b border-white/[.08] bg-[#071218]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3"><Image src={ADVOCATE.logo} alt="Kothari Vakil" width={40} height={40} className="h-10 w-10 rounded-xl border border-[#d9b96e]/25 bg-[#f7f2e8] p-1" /><span className="font-serif text-sm font-semibold sm:text-base"><span className="sm:hidden">Kothari Vakil</span><span className="hidden sm:inline">{ADVOCATE.name}</span><small className="mt-0.5 hidden font-sans text-[9px] font-normal uppercase tracking-[.15em] text-white/45 sm:block">Advocate · Accredited Mediator</small></span></a>
          <nav aria-label="Primary navigation" className="hidden gap-1 text-xs text-white/60 lg:flex">
            {PRIMARY_NAV.map((item) => <a key={item.href} href={item.href} className={`rounded-full px-3 py-2 transition hover:bg-white/[.05] hover:text-white ${item.href === "/mediation" ? "bg-[#d9b96e]/10 text-[#e8ca83]" : ""}`}>{item.label}</a>)}
          </nav>
          <a href="#mediation-enquiry" className="rounded-full bg-[#ead8ad] px-4 py-2.5 text-xs font-semibold text-[#17232a] transition hover:bg-white sm:text-sm"><span className="sm:hidden">Enquire</span><span className="hidden sm:inline">Check suitability</span></a>
        </div>
      </header>

      <main id="main-content" className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <section className="relative grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div className="hero-orbit" aria-hidden="true" />
          <div>
            <p className="section-kicker flex items-center gap-2"><Handshake className="h-4 w-4" /> Neutral dispute resolution</p>
            <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.3rem,7vw,6.6rem)] font-medium leading-[.93] tracking-[-.045em] text-[#fff8eb]">Resolve the dispute. <span className="text-[#d9b96e]">Keep the decision.</span></h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">A structured process for participants who want to explore resolution without transferring decision-making to a court or tribunal—available in Maharashtra, online and for suitable cross-border matters.</p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs text-white/55"><span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2"><Globe2 className="h-4 w-4 text-[#d9b96e]" /> Online & cross-border</span><span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2"><Clock3 className="h-4 w-4 text-[#d9b96e]" /> Time-based fee options</span><span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2"><ShieldCheck className="h-4 w-4 text-[#d9b96e]" /> Written process terms</span></div>
          </div>
          <aside className="relative rounded-[2rem] bg-[#eee6d6] p-7 text-[#263238] shadow-[0_35px_90px_rgba(0,0,0,.22)] sm:p-8">
            <BadgeCheck className="h-8 w-8 text-[#8f692a]" />
            <p className="mt-8 text-[10px] font-bold uppercase tracking-[.18em] text-[#8f692a]">Training credential</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight">Accredited mediator training with documented role separation.</h2>
            <p className="mt-5 text-sm leading-7 text-[#536065]">{ADVOCATE.mediationCredential.programme} by {ADVOCATE.mediationCredential.institution}; {ADVOCATE.mediationCredential.qualityAssurance.toLowerCase()}; {ADVOCATE.mediationCredential.period}.</p>
            <p className="mt-4 border-t border-[#263238]/10 pt-4 text-xs leading-6 text-[#667174]">In a neutral appointment, the mediator does not give individual legal advice to either participant.</p>
          </aside>
        </section>

        <section className="mt-24" aria-labelledby="pathways-heading">
          <p className="section-kicker">Choose a pathway</p><h2 id="pathways-heading" className="section-title mt-3">Mediation pathways.</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-white/[.08] bg-white/[.08] md:grid-cols-2">
            {pathways.map((item, index) => (
              <a key={item.href} href={item.href} className="group bg-[#0a171d] p-6 transition hover:bg-[#102129] sm:p-8">
                <div className="flex items-center justify-between"><span className="text-[10px] text-[#d9b96e]">0{index + 1}</span><ArrowUpRight className="h-4 w-4 text-[#d9b96e] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
                <h3 className="mt-9 font-serif text-2xl text-[#fff8eb]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{item.text}</p>
                <span className="mt-5 inline-block text-xs font-semibold text-[#d9b96e]">View process details</span>
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
