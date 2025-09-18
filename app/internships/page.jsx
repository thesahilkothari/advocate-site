export const metadata = {
  title: "Internships | Kothari Law Chambers",
  description:
    "Apply for remote, online, or office internships with Kothari Law Chambers. Open to law undergraduates and graduates.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Internships</h1>
        <p className="mt-3 text-white/80 text-sm leading-relaxed">
          Opportunities for <strong>law undergraduates</strong> and <strong>law graduates</strong> in three modes:
          <br />• Remote (research &amp; drafting)
          <br />• Online (hybrid calls + document work)
          <br />• Office (Baramati, in-person)
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <ul className="text-white/80 text-sm list-disc list-inside">
              <li>
                Areas: civil &amp; criminal procedure, drafting, property/real estate (RERA),
                trusts &amp; societies, writs/appeals.
              </li>
              <li>Eligibility: LL.B. / LL.M. students or recent graduates.</li>
              <li>Duration: 3–8 weeks (flexible).</li>
            </ul>
            <p className="mt-4 text-xs text-white/60">
              Note: Informational only; not a solicitation. Selection is merit- and availability-based.
            </p>

            <nav className="mt-6 text-sm flex flex-wrap gap-3">
              <a className="underline hover:text-white" href="/">Home</a>
              <a className="underline hover:text-white" href="/civil-litigation">Civil Litigation</a>
              <a className="underline hover:text-white" href="/criminal-bail">Criminal &amp; Bail</a>
              <a className="underline hover:text-white" href="/rera-real-estate">RERA &amp; Real Estate</a>
              <a className="underline hover:text-white" href="/trusts-societies">Trusts &amp; Societies</a>
              <a className="underline hover:text-white" href="/family-law">Family &amp; Matrimonial</a>
              <a className="underline hover:text-white" href="/drafting-advisory">Drafting &amp; Advisory</a>
              <a className="underline hover:text-white" href="/insights">Insights</a>
            </nav>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-medium text-lg">Apply for Internship</h2>
            <form className="mt-4 grid gap-3" method="POST" action="https://formspree.io/f/xblaejln">
              <input
                required
                name="name"
                placeholder="Full Name"
                className="px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60"
              />
              <input
                name="phone"
                placeholder="Phone"
                className="px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60"
              />

              <div>
                <label className="block text-xs text-white/60 mb-1">Mode</label>
                <select
                  name="mode"
                  className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white"
                >
                  <option value="Remote">Remote</option>
                  <option value="Online">Online</option>
                  <option value="Office (Baramati)">Office (Baramati)</option>
                </select>
              </div>

              <input
                name="institution"
                placeholder="Law School / University"
                className="px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60"
              />
              <input
                name="year"
                placeholder="Current Year or Graduate"
                className="px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60"
              />
              <input
                name="window"
                placeholder="Preferred Dates (e.g., Oct–Nov 2025)"
                className="px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60"
              />
              <textarea
                required
                name="statement"
                rows={4}
                placeholder="Brief Statement of Interest"
                className="px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60"
              />

              {/* Optional metadata */}
              <input type="hidden" name="_subject" value="Internship Application" />
              <input type="hidden" name="_format" value="plain" />
              <input type="hidden" name="_next" value="/#thank-you" />

              <button
                type="submit"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-2xl"
              >
                Submit Application
              </button>
            </form>

            <details className="mt-6">
              <summary className="cursor-pointer font-medium">FAQs</summary>
              <div className="mt-2 text-sm text-white/80 space-y-3">
                <p><strong>Who can apply?</strong> LL.B./LL.M. students or recent graduates.</p>
                <p><strong>What will I work on?</strong> Research, drafting, and case-prep tasks.</p>
                <p><strong>Is there a stipend?</strong> Based on mode and availability; details shared upon selection.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </main>
  );
}
