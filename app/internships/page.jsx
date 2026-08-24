import { FORM_ACTION, SITE_URL, createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Legal Internships | Adv. Sahil S. Kothari",
  description:
    "Information and application form for remote, online or Baramati office legal internships with Adv. Sahil S. Kothari.",
  path: "/internships",
});

export default function Page() {
  return (
    <main id="main-content" className="min-h-screen bg-[#0B0F14] text-white">
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
              <a className="underline hover:text-white" href="/mediation">Mediation</a>
            </nav>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-medium text-lg">Apply for Internship</h2>
            <form className="mt-4 grid gap-3" method="POST" action={FORM_ACTION}>
              <label className="text-xs text-white/70">Full name<input required name="name" autoComplete="name" className="mt-1 w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white" /></label>
              <label className="text-xs text-white/70">Email<input required type="email" name="email" autoComplete="email" className="mt-1 w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white" /></label>
              <label className="text-xs text-white/70">Phone<input name="phone" type="tel" autoComplete="tel" className="mt-1 w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white" /></label>

              <label className="block text-xs text-white/60">
                Mode
                <select
                  name="mode"
                  className="mt-1 w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white"
                >
                  <option value="Remote" className="text-black">Remote</option>
                  <option value="Online" className="text-black">Online</option>
                  <option value="Office (Baramati)" className="text-black">Office (Baramati)</option>
                </select>
              </label>

              <label className="text-xs text-white/70">Law school / university<input name="institution" className="mt-1 w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white" /></label>
              <label className="text-xs text-white/70">Current year or graduate<input name="year" className="mt-1 w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white" /></label>
              <label className="text-xs text-white/70">Preferred dates<input name="window" placeholder="For example: 4 weeks from 1 October" className="mt-1 w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60" /></label>
              <label className="text-xs text-white/70">Brief statement of interest<textarea required name="statement" rows={4} className="mt-1 w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white" /></label>
              <label className="flex items-start gap-3 text-xs leading-5 text-white/65"><input required type="checkbox" name="privacy_consent" value="yes" className="mt-1" /><span>I have read the <a href="/privacy" className="underline">privacy notice</a> and consent to use of this information for the internship application.</span></label>

              {/* Optional metadata */}
              <input type="hidden" name="_subject" value="Internship Application" />
              <input type="hidden" name="_format" value="plain" />
              <input type="hidden" name="_next" value={`${SITE_URL}/#thank-you`} />

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
