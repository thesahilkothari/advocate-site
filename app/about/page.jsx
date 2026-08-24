import { ADVOCATE, PRIMARY_NAV, SITE_URL, createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "About Adv. Sahil Shekhar Kothari | Education & Practice",
  description:
    "Professional profile, education, enrolment, languages and practice information for Adv. Sahil Shekhar Kothari in Baramati, Maharashtra.",
  path: "/about",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about#profile`,
  url: `${SITE_URL}/about`,
  name: "Professional profile of Adv. Sahil Shekhar Kothari",
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#advocate`,
    name: ADVOCATE.fullName,
    alternateName: ADVOCATE.alternateNames,
    honorificPrefix: "Adv.",
    identifier: ADVOCATE.enrollment,
    image: `${SITE_URL}${ADVOCATE.photo}`,
    url: SITE_URL,
    jobTitle: "Advocate and Mediator",
    knowsLanguage: ["English", "Marathi", "Hindi"],
    alumniOf: ADVOCATE.qualifications
      .filter((qualification) => qualification.institution)
      .map((qualification) => ({
        "@type": "EducationalOrganization",
        name: qualification.institution,
      })),
    hasCredential: ADVOCATE.qualifications.map((qualification) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: qualification.degree,
    })),
    sameAs: [ADVOCATE.linkedIn],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <header className="border-b border-white/10 bg-[#0B0F14]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-5">
          <a href="/" className="font-semibold">
            {ADVOCATE.name}
            <span className="block text-xs font-normal text-white/55">Enrl. {ADVOCATE.enrollment}</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden flex-wrap gap-5 text-sm text-white/75 md:flex">
            {PRIMARY_NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">{item.label}</a>
            ))}
          </nav>
          <a href={`tel:${ADVOCATE.phoneHref}`} className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/10">Call</a>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-white/55">
          <a href="/" className="hover:text-white">Home</a><span aria-hidden="true"> / </span><span aria-current="page">About</span>
        </nav>

        <section className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">Professional profile</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">About Adv. Sahil Shekhar Kothari</h1>
          <p className="mt-5 leading-8 text-white/75">
            Adv. Sahil Shekhar Kothari is enrolled with the Bar Council of Maharashtra and Goa under enrolment number {ADVOCATE.enrollment}. He is based in Baramati and undertakes accepted matters before District Courts, tribunals across Maharashtra and the Bombay High Court, subject to forum, scope and engagement requirements.
          </p>
          <p className="mt-5 leading-8 text-white/75">
            The practice combines litigation strategy, legal drafting, document-led advisory work and neutral mediation process design. The information-technology background also supports a structured approach to electronic records, digital workflows and technology-assisted legal work without replacing matter-specific legal or technical verification.
          </p>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6" aria-labelledby="education-heading">
            <h2 id="education-heading" className="text-2xl font-semibold">Education</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/75">
              {ADVOCATE.qualifications.map((qualification) => (
                <li key={qualification.degree}>
                  <strong className="block text-white">{qualification.degree}</strong>
                  {qualification.institution ? qualification.institution : "Engineering qualification in Information Technology"}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6" aria-labelledby="identity-heading">
            <h2 id="identity-heading" className="text-2xl font-semibold">Professional identity</h2>
            <dl className="mt-5 grid gap-4 text-sm leading-7">
              <div><dt className="text-white/50">Name</dt><dd>{ADVOCATE.name}</dd></div>
              <div><dt className="text-white/50">Enrolment</dt><dd>{ADVOCATE.enrollment}</dd></div>
              <div><dt className="text-white/50">Office</dt><dd>{ADVOCATE.address}</dd></div>
              <div><dt className="text-white/50">Languages</dt><dd>English, Marathi and Hindi</dd></div>
            </dl>
          </section>
        </div>

        <section className="mt-12" aria-labelledby="work-heading">
          <h2 id="work-heading" className="text-2xl font-semibold">Practice information</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Litigation", "Civil, criminal, property, family and related procedural matters, with emphasis on forum, limitation, evidence and available relief."],
              ["Drafting and advisory", "Pleadings, notices, agreements, due diligence and written advisory work based on a defined fact and document set."],
              ["Property and institutions", "Real estate, MAHARERA, development documentation, Maharashtra public trusts and society-governance matters."],
              ["Mediation", "Neutral process design for suitable commercial, property, family, online and cross-border disputes, separate from representation of either side."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/10 p-6">
                <h3 className="font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-amber-200/15 bg-amber-200/5 p-6 text-sm leading-7 text-white/70">
          <h2 className="font-medium text-white">Verification and scope note</h2>
          <p className="mt-2">Education, enrolment and professional links are provided for identification and transparency. They do not imply specialisation, guarantee an outcome or create a professional relationship. Acceptance of any matter or neutral appointment follows the required identity, conflict, scope and independence checks.</p>
        </section>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <a href={ADVOCATE.linkedIn} target="_blank" rel="noreferrer" className="underline hover:text-white">LinkedIn profile</a>
          <a href="/#practice" className="underline hover:text-white">Practice areas</a>
          <a href="/mediation" className="underline hover:text-white">Mediation information</a>
          <a href="/professional-notice" className="underline hover:text-white">Professional notice</a>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
