export const metadata = {
  title: "Drafting & Advisory | Kothari Vakil",
  description:
    "Pleadings, agreements, notices and opinions with precise drafting and practical advice.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-semibold">Drafting & Advisory</h1>
      <p className="mt-4 text-white/80">
        Precise pleadings, agreements, notices, due diligence and opinions focused on practical outcomes.
      </p>
      <div className="mt-10 flex gap-4">
        <a className="underline" href="/civil-litigation">Civil Litigation</a>
        <a className="underline" href="/rera-real-estate">RERA & Real Estate</a>
        <a className="underline" href="/#contact">Contact</a>
      </div>
    </main>
  );
}
