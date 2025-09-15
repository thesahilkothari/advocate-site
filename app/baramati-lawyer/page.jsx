export const metadata = {
  title: "Baramati Lawyer | Kothari Vakil",
  description:
    "Advocate (vakil) & lawyer from Baramati. Appearances across Maharashtra incl. Bombay High Court.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-semibold">Lawyer in Baramati</h1>
      <p className="mt-4 text-white/80">
        Based in Baramati, appearing before District & Sessions Courts, Tribunals across Maharashtra, and the Bombay High Court.
      </p>
      <ul className="mt-4 list-disc list-inside text-white/80">
        <li>Civil litigation: property, tenancy, contracts & recovery</li>
        <li>Criminal matters: anticipatory/regular bail, revisions</li>
        <li>Real estate & RERA: documentation & compliance</li>
        <li>Trusts & societies: governance & disputes</li>
      </ul>
      <div className="mt-10 flex gap-4">
        <a className="underline" href="/civil-litigation">Civil Litigation</a>
        <a className="underline" href="/criminal-bail">Criminal & Bail</a>
        <a className="underline" href="/#contact">Contact</a>
      </div>
    </main>
  );
}
