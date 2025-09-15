// app/insights/[slug]/page.jsx
import { POSTS } from "../../../lib/insights";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not found | Insights" };
  return {
    title: `${post.title} | Insights`,
    description: post.description,
  };
}

export default function Page({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 text-white">
        <h1 className="text-3xl font-semibold">Not found</h1>
        <p className="mt-3 text-white/80">This article does not exist.</p>
        <p className="mt-2"><a className="underline hover:text-white" href="/insights">Back to Insights</a></p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      <div className="text-xs text-white/50">{new Date(post.date).toLocaleDateString()}</div>
      <h1 className="mt-1 text-3xl font-semibold">{post.title}</h1>
      <p className="mt-2 text-white/80">{post.description}</p>

      <article className="prose prose-invert mt-6 max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>

      {/* Inline disclaimer per BCI guidelines */}
      <p className="mt-8 text-xs text-white/60">
        Informational note only. Not legal advice or solicitation. For case-specific guidance, please{" "}
        <a className="underline hover:text-white" href="/#contact">contact</a>.
      </p>

      {/* Explore */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Explore</h2>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <a className="underline hover:text-white" href="/">Home</a>
          <a className="underline hover:text-white" href="/insights">Insights</a>
          <a className="underline hover:text-white" href="/civil-litigation">Civil Litigation</a>
          <a className="underline hover:text-white" href="/criminal-bail">Criminal &amp; Bail</a>
          <a className="underline hover:text-white" href="/rera-real-estate">RERA &amp; Real Estate</a>
          <a className="underline hover:text-white" href="/trusts-societies">Trusts &amp; Societies</a>
          <a className="underline hover:text-white" href="/family-law">Family &amp; Matrimonial</a>
          <a className="underline hover:text-white" href="/drafting-advisory">Drafting &amp; Advisory</a>
          <a className="underline hover:text-white" href="/baramati-lawyer">Baramati Lawyer</a>
          <a className="underline hover:text-white" href="/pune-lawyer">Pune Lawyer</a>
        </div>
      </section>
    </main>
  );
}
