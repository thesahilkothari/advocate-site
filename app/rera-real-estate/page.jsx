export const metadata = {
  title: "RERA & Real Estate | Kothari Vakil",
  description:
    "Development agreements, MAHARERA filings, municipal/MRTP compliance and due diligence across Maharashtra.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-semibold">RERA & Real Estate</h1>
      <p className="mt-4 text-white/80">Contracts, MAHARERA, municipal permissions, and project documentation.</p>
      <h2 className="mt-8 text-xl font-semibold">Work Highlights</h2>
      <ul className="mt-3 list-disc list-inside text-white/80">
        <li>Development agreements & documentation</li>
        <li>MAHARERA complaints and compliance</li>
        <li>Municipal / MRTP compliance</li>
        <li>Property due diligence</li>
      </ul>
      <div className="mt-10 flex gap-4">
        <a className="underline" href="/drafting-advisory">Drafting & Advisory</a>
        <a className="underline" href="/#contact">Contact</a>
      </div>
    </main>
  );
}
