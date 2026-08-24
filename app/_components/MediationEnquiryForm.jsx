import { FORM_ACTION, SITE_URL } from "../../lib/site";

export default function MediationEnquiryForm() {
  const inputClass = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-amber-200/60 focus:outline-none";

  return (
    <form method="POST" action={FORM_ACTION} className="mt-6 grid gap-4" aria-label="Mediation suitability enquiry">
      <div className="hidden" aria-hidden="true">
        <label>Do not fill this field<input type="text" name="company" tabIndex="-1" autoComplete="off" /></label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-white/75">Full name
          <input required name="name" autoComplete="name" className={`${inputClass} mt-2`} />
        </label>
        <label className="text-sm text-white/75">Email
          <input required type="email" name="email" autoComplete="email" className={`${inputClass} mt-2`} />
        </label>
        <label className="text-sm text-white/75">Phone
          <input name="phone" type="tel" autoComplete="tel" className={`${inputClass} mt-2`} />
        </label>
        <label className="text-sm text-white/75">Dispute type
          <select required name="dispute_type" defaultValue="" className={`${inputClass} mt-2`}>
            <option value="" disabled className="text-black">Select one</option>
            <option value="commercial" className="text-black">Commercial / business</option>
            <option value="property" className="text-black">Property / real estate</option>
            <option value="family" className="text-black">Family / inheritance</option>
            <option value="workplace" className="text-black">Workplace</option>
            <option value="cross-border" className="text-black">Cross-border</option>
            <option value="other" className="text-black">Other</option>
          </select>
        </label>
        <label className="text-sm text-white/75">Preferred format
          <select name="preferred_format" defaultValue="online" className={`${inputClass} mt-2`}>
            <option value="online" className="text-black">Online</option>
            <option value="in-person" className="text-black">In person</option>
            <option value="hybrid" className="text-black">Hybrid / undecided</option>
          </select>
        </label>
        <label className="text-sm text-white/75">Are the other participants aware?
          <select name="other_parties_aware" defaultValue="" className={`${inputClass} mt-2`}>
            <option value="" disabled className="text-black">Select one</option>
            <option value="yes" className="text-black">Yes</option>
            <option value="partly" className="text-black">Some are aware</option>
            <option value="no" className="text-black">Not yet</option>
          </select>
        </label>
      </div>
      <label className="text-sm text-white/75">Short, non-confidential outline
        <textarea required name="message" rows={5} className={`${inputClass} mt-2`} placeholder="Parties involved, broad issue, location or countries, and any urgent date. Do not include settlement offers or sensitive evidence." />
      </label>
      <label className="flex items-start gap-3 text-xs leading-5 text-white/65">
        <input required type="checkbox" name="privacy_consent" value="yes" className="mt-1" />
        <span>I have read the <a href="/privacy" className="underline hover:text-white">privacy notice</a> and understand that submitting this form does not appoint a mediator, create an advocate-client relationship, or guarantee that the matter is suitable for mediation.</span>
      </label>
      <input type="hidden" name="_subject" value="New mediation suitability enquiry" />
      <input type="hidden" name="_format" value="plain" />
      <input type="hidden" name="_next" value={`${SITE_URL}/mediation#thank-you`} />
      <button type="submit" className="w-fit rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B0F14] hover:bg-white/90">
        Submit suitability enquiry
      </button>
      <p className="text-xs leading-5 text-white/50">A preliminary identity, conflict and independence check is required before any appointment or substantive discussion.</p>
    </form>
  );
}
