import { notFound } from "next/navigation";
import { POSTS } from "../../../lib/insights";
import { createPageMetadata, SITE_URL } from "../../../lib/site";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = POSTS.find((item) => item.slug === params.slug);
  if (!post) return { title: "Insight not found", robots: { index: false, follow: false } };
  return createPageMetadata({ title: `${post.title} | Kothari Vakil`, description: post.description, path: `/insights/${post.slug}` });
}

export default function InsightPage({ params }) {
  const post = POSTS.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    mainEntityOfPage: `${SITE_URL}/insights/${post.slug}`,
    author: { "@id": `${SITE_URL}/#advocate` },
    publisher: { "@id": `${SITE_URL}/#advocate` },
    inLanguage: "en-IN",
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-white/55"><a href="/" className="hover:text-white">Home</a><span aria-hidden="true"> / </span><a href="/insights" className="hover:text-white">Insights</a></nav>
        <article className="mt-8">
          <p className="text-xs text-white/50">Published {new Date(post.date).toLocaleDateString("en-IN", { dateStyle: "medium" })} · Reviewed {new Date(post.updated || post.date).toLocaleDateString("en-IN", { dateStyle: "medium" })}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-white/70">{post.description}</p>
          <div className="article-content mt-9 text-white/82" dangerouslySetInnerHTML={{ __html: post.body }} />
        </article>

        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6" aria-labelledby="official-sources-heading">
          <h2 id="official-sources-heading" className="text-xl font-semibold">Official sources</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {post.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer" className="underline hover:text-white">{source.label}</a></li>)}
          </ul>
        </section>

        <aside className="mt-8 rounded-2xl border border-amber-200/15 bg-amber-200/5 p-6 text-sm leading-7 text-white/65">General information only; not legal advice, solicitation or a prediction of outcome. Law and official processes change. Obtain advice on the current text, facts, forum, limitation and documents before acting.</aside>
        <div className="mt-10 flex flex-wrap gap-4 text-sm"><a href="/insights" className="underline hover:text-white">More insights</a><a href="/#contact" className="underline hover:text-white">Initial consultation</a><a href="/professional-notice" className="underline hover:text-white">Professional notice</a></div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </div>
  );
}
