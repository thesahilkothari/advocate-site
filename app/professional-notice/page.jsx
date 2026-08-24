import { ADVOCATE, createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Professional Notice & Website Disclaimer | Kothari Vakil",
  description: "Professional, informational and mediation-role notices for kotharivakil.in.",
  path: "/professional-notice",
});

export default function ProfessionalNoticePage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <a href="/" className="text-sm text-white/60 hover:text-white">← Home</a>
        <h1 className="mt-8 text-4xl font-semibold">Professional notice</h1>
        <p className="mt-3 text-sm text-white/55">Last updated: 24 August 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-7 text-white/72">
          <section><h2 className="text-xl font-semibold text-white">General information; no solicitation</h2><p className="mt-3">This website is intended to provide general information that a visitor chooses to access voluntarily. It is not intended as advertising, solicitation, inducement or a promise of professional results. Access is subject to the standards governing advocates in India, including the Bar Council of India Rules.</p></section>
          <section><h2 className="text-xl font-semibold text-white">Not legal advice</h2><p className="mt-3">Website content is general and may not reflect later legal developments or the facts of your matter. It is not a legal opinion and should not be relied on as a substitute for advice based on complete instructions and documents.</p></section>
          <section><h2 className="text-xl font-semibold text-white">No relationship from access or enquiry</h2><p className="mt-3">Viewing the site, calling, messaging or submitting a form does not create an advocate-client relationship or mediator appointment. No such relationship begins until identity and conflict checks are completed, the matter is accepted and written terms are agreed where required.</p></section>
          <section><h2 className="text-xl font-semibold text-white">Confidentiality at the enquiry stage</h2><p className="mt-3">Do not send confidential, privileged or sensitive documents through an initial enquiry. Information submitted before acceptance may be used for a conflict check and may not have the protections that attach to a formal engagement or mediation process.</p></section>
          <section><h2 className="text-xl font-semibold text-white">Mediation neutrality</h2><p className="mt-3">When acting as mediator, {ADVOCATE.name} acts neutrally and does not represent or give individual legal advice to any participant in that mediation. A prior or current professional relationship, conflict or circumstance affecting independence must be disclosed and may prevent appointment. Participants may obtain independent advice.</p></section>
          <section><h2 className="text-xl font-semibold text-white">No guarantee of outcome</h2><p className="mt-3">Litigation, advisory and mediation outcomes depend on facts, evidence, law, procedure, decision-makers and participant choices. No content, estimate, consultation or mediation process guarantees a result.</p></section>
          <section><h2 className="text-xl font-semibold text-white">External links</h2><p className="mt-3">Links to courts, regulators, legislation, service providers or other websites are provided for reference. Their content, availability, security and later changes are outside this website's control.</p></section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <a href="https://www.barcouncilofindia.org/info/bci-rules" target="_blank" rel="noreferrer" className="underline hover:text-white">Bar Council of India Rules</a>
          <a href="/privacy" className="underline hover:text-white">Privacy notice</a>
          <a href="/#contact" className="underline hover:text-white">Contact</a>
        </div>
      </main>
    </div>
  );
}
