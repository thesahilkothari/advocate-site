import { ADVOCATE, PRIMARY_NAV, SITE_URL } from "../../lib/site";

export default function PracticePage({ data }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.description,
    url: `${SITE_URL}${data.path}`,
    areaServed: data.areaServed || "Maharashtra, India",
    provider: { "@id": `${SITE_URL}/#practice` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbItems = [
    { name: "Home", item: SITE_URL },
    ...(data.parent
      ? [{ name: data.parent.label, item: `${SITE_URL}${data.parent.href}` }]
      : []),
    { name: data.shortTitle || data.title, item: `${SITE_URL}${data.path}` },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <header className="border-b border-white/10 bg-[#0B0F14]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-5">
          <a href="/" className="font-semibold">
            {ADVOCATE.name}
            <span className="block text-xs font-normal text-white/55">
              Enrl. {ADVOCATE.enrollment}
            </span>
          </a>
          <nav aria-label="Primary navigation" className="hidden flex-wrap gap-5 text-sm text-white/75 md:flex">
            {PRIMARY_NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:${ADVOCATE.phoneHref}`}
            className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/10"
          >
            Call
          </a>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-white/55">
          <a href="/" className="hover:text-white">Home</a>
          <span aria-hidden="true"> / </span>
          {data.parent ? (
            <>
              <a href={data.parent.href} className="hover:text-white">{data.parent.label}</a>
              <span aria-hidden="true"> / </span>
            </>
          ) : null}
          <span aria-current="page">{data.shortTitle || data.title}</span>
        </nav>

        <section className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            {data.eyebrow || "Legal services in Maharashtra"}
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">{data.title}</h1>
          {data.intro.map((paragraph) => (
            <p key={paragraph} className="mt-5 leading-8 text-white/75">{paragraph}</p>
          ))}
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/#contact" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B0F14] hover:bg-white/90">
              Request an initial consultation
            </a>
            <a href={`tel:${ADVOCATE.phoneHref}`} className="rounded-xl border border-white/15 px-5 py-3 text-sm hover:bg-white/10">
              Call {ADVOCATE.phone}
            </a>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="assistance-heading">
          <h2 id="assistance-heading" className="text-2xl font-semibold">How assistance may be structured</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {data.services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-medium">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <section aria-labelledby="issues-heading">
            <h2 id="issues-heading" className="text-2xl font-semibold">Matters commonly assessed</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">
              {data.matters.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </section>
          <section aria-labelledby="documents-heading">
            <h2 id="documents-heading" className="text-2xl font-semibold">Documents commonly useful</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">
              {data.documents.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </section>
        </div>

        <section className="mt-14" aria-labelledby="process-heading">
          <h2 id="process-heading" className="text-2xl font-semibold">Working process</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-4">
            {data.process.map((step, index) => (
              <li key={step} className="rounded-2xl border border-white/10 p-5 text-sm leading-6 text-white/70">
                <span className="mb-3 block text-xs font-semibold text-amber-200/80">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <aside className="mt-12 rounded-2xl border border-amber-200/15 bg-amber-200/5 p-6 text-sm leading-7 text-white/70">
          <h2 className="font-medium text-white">Scope note</h2>
          <p className="mt-2">{data.scopeNote}</p>
        </aside>

        {data.sources?.length ? (
          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-semibold">Official references</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {data.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer" className="underline hover:text-white">{source.label}</a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-14" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="mt-5 space-y-3">
            {data.faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <summary className="cursor-pointer font-medium">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-white/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9">
          <h2 className="text-2xl font-semibold">Prepare for an initial consultation</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
            Share a short chronology, the present stage, the next known deadline and a document list. Avoid sending privileged or highly sensitive material until the engagement and secure document-sharing arrangements are confirmed.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a href="/#contact" className="underline hover:text-white">Use the consultation form</a>
            <a href="/privacy" className="underline hover:text-white">Privacy notice</a>
            <a href="/professional-notice" className="underline hover:text-white">Professional notice</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <span>{ADVOCATE.name} · Enrl. {ADVOCATE.enrollment}</span>
          <div className="flex flex-wrap gap-4">
            <a href="/mediation" className="hover:text-white">Mediation</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/professional-notice" className="hover:text-white">Professional notice</a>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
