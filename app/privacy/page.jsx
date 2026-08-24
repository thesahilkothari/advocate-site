import { ADVOCATE, createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Notice | Kothari Vakil",
  description: "Privacy information for enquiries submitted through kotharivakil.in.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <a href="/" className="text-sm text-white/60 hover:text-white">← Home</a>
        <h1 className="mt-8 text-4xl font-semibold">Privacy notice</h1>
        <p className="mt-3 text-sm text-white/55">Last updated: 24 August 2026</p>
        <p className="mt-6 leading-8 text-white/75">This notice explains how information submitted through kotharivakil.in is handled. Please do not send privileged communications, identity documents, medical records, financial credentials, settlement offers or other highly sensitive material through an initial website form.</p>

        <section className="mt-10 space-y-8 text-sm leading-7 text-white/72">
          <div><h2 className="text-xl font-semibold text-white">Information collected</h2><p className="mt-3">Enquiry forms may collect your name, email, phone number, selected service, a short matter description, mediation process preferences and the consent recorded with the submission. Basic technical information may also be processed by the website host and form provider for security, delivery and abuse prevention.</p></div>
          <div><h2 className="text-xl font-semibold text-white">How it is used</h2><p className="mt-3">Information is used to review and respond to your enquiry, carry out a preliminary identity or conflict check where appropriate, arrange an appointment, protect the website and maintain professional or administrative records. It is not sold.</p></div>
          <div><h2 className="text-xl font-semibold text-white">Form and hosting providers</h2><p className="mt-3">The contact and mediation forms are transmitted through Formspree and then delivered to the practice inbox. Hosting and security providers may process request information needed to serve the website. Their own terms and privacy practices apply. See <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noreferrer" className="underline hover:text-white">Formspree's privacy policy</a>.</p></div>
          <div><h2 className="text-xl font-semibold text-white">Local storage and cookies</h2><p className="mt-3">The website stores your acceptance of the professional disclaimer in your browser's local storage so the notice does not appear on every visit. The public website does not intentionally use advertising or analytics tracking. Infrastructure providers may use essential security or delivery technologies.</p></div>
          <div><h2 className="text-xl font-semibold text-white">Retention and disclosure</h2><p className="mt-3">Enquiries may be retained in email, form-delivery and professional record systems for response, conflict checking, security and applicable legal or professional obligations. Information may be disclosed where required by law, professional duties, security needs or service providers acting for these limited purposes.</p></div>
          <div><h2 className="text-xl font-semibold text-white">No professional relationship from submission</h2><p className="mt-3">Submitting an enquiry does not create an advocate-client relationship, appoint a mediator or make the information privileged. An engagement or mediator appointment begins only after required checks, acceptance and written terms.</p></div>
          <div><h2 className="text-xl font-semibold text-white">Access, correction or deletion requests</h2><p className="mt-3">You may request access, correction or deletion by emailing <a href={`mailto:${ADVOCATE.email}`} className="underline hover:text-white">{ADVOCATE.email}</a>. A request may be limited where retention is required for legal, professional, conflict-checking, security or record-integrity reasons.</p></div>
        </section>

        <div className="mt-12 flex flex-wrap gap-4 text-sm"><a href="/professional-notice" className="underline hover:text-white">Professional notice</a><a href="/#contact" className="underline hover:text-white">Contact</a><a href="/mediation" className="underline hover:text-white">Mediation</a></div>
      </main>
    </div>
  );
}
