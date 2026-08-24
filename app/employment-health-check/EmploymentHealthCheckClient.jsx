"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowLeft, Check, ChevronRight, FileDown, Scale, ShieldCheck } from "lucide-react";

const dimensions = {
  foundation: { label: "Employment foundation", short: "foundation" },
  compliance: { label: "Statutory readiness", short: "compliance" },
  retention: { label: "Retention health", short: "retention" },
  performance: { label: "Performance system", short: "performance" },
  resilience: { label: "Team resilience", short: "resilience" },
};

const documented = [
  ["Not documented", 0], ["Mostly verbal", 1], ["Partly documented", 2],
  ["Fully documented and used", 3], ["Documented, reviewed and updated", 4],
];
const implementation = [
  ["Not in place", 0], ["Initial steps only", 1], ["Partly implemented", 2],
  ["Implemented consistently", 3], ["Implemented and periodically audited", 4],
];
const clarity = [
  ["Completely unclear", 0], ["Mostly unclear", 1], ["Partly clear", 2],
  ["Clear to most employees", 3], ["Completely clear and acknowledged", 4],
];
const frequency = [
  ["Never", 0], ["Rarely", 1], ["Sometimes", 2], ["Usually", 3], ["Always, with records", 4],
];
const assessment = [
  ["Not assessed", 0], ["Informally considered", 1], ["Partly assessed", 2],
  ["Assessed and substantially compliant", 3], ["Assessed, documented and reviewed", 4],
];
const insight = [
  ["No reliable information", 0], ["Anecdotal understanding", 1], ["Some exit feedback", 2],
  ["Reasons recorded and reviewed", 3], ["Trends measured and acted upon", 4],
];
const capability = [
  ["Very low", 0], ["Low", 1], ["Moderate", 2], ["High", 3], ["Very high and demonstrated", 4],
];
const continuity = [
  ["Operations would stop", 0], ["Severe disruption", 1], ["Manageable with difficulty", 2],
  ["Reliable backup exists", 3], ["Continuity is documented and tested", 4],
];

const questions = [
  { id: "terms", dimension: "foundation", critical: true, prompt: "Current status of role-specific written employment terms", help: "Appointment, probation, fixed-term, part-time and managerial roles should not all use one generic format.", options: documented },
  { id: "roles", dimension: "foundation", prompt: "Clarity of duties, authority, reporting lines and expected results", help: "Clear role ownership reduces conflict, duplication and dependence on verbal instructions.", options: clarity },
  { id: "policies", dimension: "foundation", prompt: "Extent to which workplace rules are documented and communicated", help: "This includes leave, attendance, conduct, confidentiality and grievance rules acknowledged by employees.", options: documented },
  { id: "records", dimension: "foundation", prompt: "Ability to produce complete attendance, wage, leave and employment records", help: "Reliable records protect both the employer and employees when questions arise.", options: capability },
  { id: "registrations", dimension: "compliance", prompt: "Status of Maharashtra establishment registrations and mandatory displays", help: "The applicable requirements depend on activity, location, establishment type and employee count.", options: assessment },
  { id: "wages", dimension: "compliance", critical: true, prompt: "Level of compliance review for wages, hours, weekly rest, leave and overtime", help: "In Maharashtra, the wage floor may depend on zone, scheduled employment, occupation and skill level.", options: assessment },
  { id: "benefits", dimension: "compliance", critical: true, prompt: "Status of PF, ESI, gratuity and bonus applicability assessment", help: "Coverage cannot be decided safely from salary or headcount alone.", options: assessment },
  { id: "posh", dimension: "compliance", poshCritical: true, prompt: "Maturity of the confidential workplace-harassment complaint process", help: "Where the statutory threshold is met, this includes a properly constituted and functioning Internal Committee.", options: implementation },
  { id: "turnover", dimension: "retention", prompt: "Quality of information about why capable employees leave", help: "A useful system records tenure, role, manager, stated reason and preventable causes.", options: insight },
  { id: "pay", dimension: "retention", prompt: "Employee clarity about salary, increments and incentives", help: "Fair, explainable decisions are often more valuable than ad-hoc increases.", options: clarity },
  { id: "growth", dimension: "retention", prompt: "Visibility of learning, added responsibility and career progression", help: "A credible growth path should be visible before resignation becomes likely.", options: clarity },
  { id: "recognition", dimension: "retention", prompt: "Frequency and consistency of employee recognition", help: "Recognition should be timely, fair and connected to the behaviour the business wants repeated.", options: frequency },
  { id: "goals", dimension: "performance", prompt: "Clarity of measurable priorities for each role", help: "Employees cannot perform confidently when success is defined only after something goes wrong.", options: clarity },
  { id: "feedback", dimension: "performance", prompt: "Frequency of meaningful, recorded performance conversations", help: "Regular coaching is safer and more effective than one sudden warning at the end.", options: frequency },
  { id: "managers", dimension: "performance", prompt: "Supervisor capability to allocate work, document issues and handle conflict", help: "Many retention problems are management-system problems, not employee-attitude problems.", options: capability },
  { id: "fairness", dimension: "performance", prompt: "Consistency of separate and fair processes for performance and misconduct", help: "Mixing performance, misconduct and personality conflict creates unnecessary legal and team risk.", options: implementation },
  { id: "keyperson", dimension: "resilience", prompt: "Expected disruption if one key employee suddenly becomes unavailable", help: "Critical work should have documented processes, access control and a trained backup.", options: continuity },
  { id: "onboarding", dimension: "resilience", prompt: "Maturity of the new-employee onboarding process", help: "Good onboarding reduces early exits and dependence on a single trainer.", options: implementation },
  { id: "voice", dimension: "resilience", prompt: "Employee confidence in raising genuine concerns internally", help: "A trusted escalation path helps owners identify small problems early.", options: capability },
  { id: "review", dimension: "resilience", critical: true, prompt: "Frequency of review before acting on notices, complaints, accidents or separation", help: "Early review preserves options; retrospective paperwork rarely cures a flawed process.", options: frequency },
];

const concerns = [
  "Employees leave too quickly", "Difficulty finding reliable people", "Low ownership or accountability",
  "Attendance and discipline issues", "Salary and increment disputes", "Dependence on key employees",
  "Unclear legal compliance", "Need better employment documents",
];

const steps = [
  { label: "Business", dimensions: [] },
  { label: "Foundation", dimensions: ["foundation", "compliance"] },
  { label: "Team", dimensions: ["retention", "performance"] },
  { label: "Resilience", dimensions: ["resilience"] },
  { label: "Report", dimensions: [] },
];

function headcount(value) {
  return { "1–9": 5, "10–19": 14, "20–49": 30, "50–99": 70, "100+": 100 }[value] || 0;
}

export default function EmploymentHealthCheckClient() {
  const [consented, setConsented] = useState(false);
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState({ business: "", industry: "", district: "", headcount: "", contact: "" });
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => setConsented(Boolean(localStorage.getItem("bci_disclaimer_ok"))), []);

  const stepQuestions = useMemo(() => questions.filter((q) => steps[step].dimensions.includes(q.dimension)), [step]);
  const complete = Object.keys(answers).length;

  const report = useMemo(() => {
    const raw = Math.round((Object.values(answers).reduce((sum, value) => sum + value, 0) / (questions.length * 4)) * 100);
    const breakdown = Object.entries(dimensions).map(([key, meta]) => {
      const related = questions.filter((q) => q.dimension === key);
      const score = Math.round((related.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0) / (related.length * 4)) * 100);
      return { key, score, ...meta };
    });
    const critical = questions.filter((q) => q.poshCritical
      ? headcount(profile.headcount) >= 10 && (answers[q.id] ?? 0) <= 1
      : q.critical && (answers[q.id] ?? 0) === 0);
    let score = raw;
    if (critical.length >= 2) score = Math.min(score, 54);
    else if (critical.length === 1) score = Math.min(score, 79);
    const status = score >= 80 ? "Green" : score >= 55 ? "Orange" : "Red";
    return { score, status, critical, breakdown, priorities: [...breakdown].sort((a, b) => a.score - b.score).slice(0, 3) };
  }, [answers, profile.headcount]);

  const canContinue = step === 0
    ? profile.business && profile.industry && profile.district && profile.headcount && selectedConcerns.length
    : step < 4 && stepQuestions.every((q) => answers[q.id] !== undefined);

  const toggleConcern = (value) => setSelectedConcerns((current) => current.includes(value)
    ? current.filter((item) => item !== value)
    : current.length < 3 ? [...current, value] : current);

  const resultColors = report.status === "Green"
    ? "from-emerald-700 to-emerald-950 border-emerald-400/30"
    : report.status === "Orange"
      ? "from-amber-700 to-amber-950 border-amber-400/30"
      : "from-red-700 to-red-950 border-red-400/30";

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      {!consented && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="max-w-xl rounded-3xl border border-white/15 bg-[#111820] p-7 shadow-2xl">
            <div className="flex items-center gap-3"><Scale className="h-6 w-6" /><h2 className="text-xl font-semibold">Professional notice</h2></div>
            <p className="mt-4 text-sm leading-7 text-white/70">You are accessing this preliminary self-assessment voluntarily. It provides general information, does not constitute legal advice, creates no advocate–client relationship and makes no guarantee of any outcome.</p>
            <button className="mt-6 w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B0F14]" onClick={() => { localStorage.setItem("bci_disclaimer_ok", "yes"); setConsented(true); }}>I Agree & Continue</button>
          </div>
        </div>
      )}

      <header className="border-b border-white/10 bg-[#0B0F14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo-mark.svg" alt="Kothari Vakil" width={40} height={40} className="h-10 w-10 rounded-xl border border-white/10 bg-white/90 p-1" />
            <span><strong className="block text-sm">Adv. Sahil S. Kothari</strong><small className="text-xs text-white/55">MAH/3210/2024 · Kothari Vakil</small></span>
          </a>
          <a href="/" className="flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white"><ArrowLeft className="h-4 w-4" /> Advocate profile</a>
        </div>
      </header>

      <main id="main-content" className="mx-auto grid max-w-7xl gap-5 px-4 py-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:py-10">
        <aside className="h-fit rounded-3xl border border-emerald-300/15 bg-gradient-to-br from-emerald-950 to-[#102b27] p-7 lg:sticky lg:top-6">
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-emerald-300">Maharashtra Employment Health Check</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight">See what is helping—or weakening—your team.</h1>
          <p className="mt-4 text-sm leading-6 text-white/65">A preliminary self-assessment for Maharashtra employers covering legal foundations, retention, performance and continuity.</p>
          <ol className="mt-7 grid grid-cols-5 gap-2 lg:grid-cols-1">
            {steps.map((item, index) => (
              <li key={item.label} className={`flex items-center gap-3 rounded-xl p-2.5 ${index === step ? "bg-white/10" : "opacity-55"}`}>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border text-xs font-bold ${index < step ? "border-emerald-300 bg-emerald-300 text-emerald-950" : index === step ? "border-white bg-white text-emerald-950" : "border-white/25"}`}>{index < step ? <Check className="h-4 w-4" /> : index + 1}</span>
                <span className="hidden text-sm font-medium lg:block">{item.label}</span>
              </li>
            ))}
          </ol>
          <div className="mt-7 flex gap-3 border-t border-white/10 pt-5 text-xs leading-5 text-white/55"><ShieldCheck className="h-5 w-5 shrink-0 text-emerald-300" /> Preliminary screening—not a matter-specific legal opinion.</div>
        </aside>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-white text-slate-900 shadow-2xl">
          {step < 4 && (
            <div className="flex items-end justify-between gap-5 border-b border-slate-200 px-6 py-6 md:px-9">
              <div><p className="text-[11px] font-bold uppercase tracking-[.16em] text-emerald-700">Step {step + 1} of 4</p><h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{step === 0 ? "Tell us about your business" : steps[step].label}</h2></div>
              <span className="text-xs font-semibold text-slate-500">{complete}/{questions.length}</span>
            </div>
          )}

          {step === 0 && (
            <div className="p-6 md:p-9">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Business name"><input required value={profile.business} onChange={(e) => setProfile({ ...profile, business: e.target.value })} placeholder="Name of establishment" /></Field>
                <Field label="Nature of business"><select required value={profile.industry} onChange={(e) => setProfile({ ...profile, industry: e.target.value })}><option value="">Select industry</option><option>Retail or trading</option><option>Education or childcare</option><option>Professional services</option><option>IT or digital services</option><option>Manufacturing or factory</option><option>Hospitality or food</option><option>Healthcare</option><option>Construction or real estate</option><option>Security or manpower services</option><option>Other</option></select></Field>
                <Field label="Jurisdiction"><div className="flex min-h-12 items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4"><strong className="text-sm text-emerald-900">Maharashtra</strong><small className="text-xs text-emerald-700">Phase 1</small></div></Field>
                <Field label="City / district in Maharashtra"><input required value={profile.district} onChange={(e) => setProfile({ ...profile, district: e.target.value })} placeholder="e.g. Baramati, Pune" /></Field>
                <Field label="Total people engaged"><select required value={profile.headcount} onChange={(e) => setProfile({ ...profile, headcount: e.target.value })}><option value="">Select headcount</option><option>1–9</option><option>10–19</option><option>20–49</option><option>50–99</option><option>100+</option></select></Field>
                <Field label="Email or mobile" optional><input value={profile.contact} onChange={(e) => setProfile({ ...profile, contact: e.target.value })} placeholder="Optional for this assessment" /></Field>
              </div>
              <fieldset className="mt-8 border-t border-slate-200 pt-7"><legend className="text-sm font-semibold">What concerns you most? <small className="font-normal text-slate-500">Choose up to three</small></legend><div className="mt-3 flex flex-wrap gap-2">{concerns.map((value) => <button type="button" key={value} onClick={() => toggleConcern(value)} className={`rounded-xl border px-3 py-2 text-left text-xs font-medium ${selectedConcerns.includes(value) ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-white"}`}>{selectedConcerns.includes(value) ? "✓ " : "+ "}{value}</button>)}</div></fieldset>
            </div>
          )}

          {step > 0 && step < 4 && (
            <div className="space-y-4 p-5 md:p-8">
              <p className="rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-600">Choose the statement closest to current practice. The scale runs from the weakest position on the left to the strongest on the right.</p>
              {stepQuestions.map((question, index) => (
                <fieldset key={question.id} className="rounded-2xl border border-slate-200 p-5">
                  <legend className="flex items-center gap-2 text-sm font-semibold"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-emerald-50 text-[10px] text-emerald-800">{index + 1}</span>{question.prompt}</legend>
                  <p className="ml-8 mt-2 text-xs leading-5 text-slate-500">{question.help}</p>
                  <div className="ml-8 mt-4 grid gap-2 md:grid-cols-5">
                    {question.options.map(([label, value]) => (
                      <label key={value} className={`flex min-h-16 cursor-pointer items-center rounded-xl border p-2 text-center text-[10px] font-semibold leading-4 transition ${answers[question.id] === value ? "border-emerald-700 bg-emerald-700 text-white shadow-lg" : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300"}`}>
                        <input className="sr-only" type="radio" name={question.id} checked={answers[question.id] === value} onChange={() => setAnswers({ ...answers, [question.id]: value })} />
                        <span className="w-full">{label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
          )}

          {step === 4 && <Report profile={profile} selectedConcerns={selectedConcerns} report={report} resultColors={resultColors} onReset={() => { setStep(0); setAnswers({}); setSelectedConcerns([]); setProfile({ business: "", industry: "", district: "", headcount: "", contact: "" }); }} />}

          {step < 4 && (
            <div className="flex items-center justify-between border-t border-slate-200 px-6 py-5 md:px-9">
              <button type="button" disabled={step === 0} onClick={() => setStep(step - 1)} className="text-sm font-semibold text-slate-500 disabled:invisible">Back</button>
              <button type="button" disabled={!canContinue} onClick={() => { setStep(step + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-35">{step === 3 ? "Generate my report" : "Continue"}<ChevronRight className="h-4 w-4" /></button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function Field({ label, optional, children }) {
  return <label className="block"><span className="mb-2 block text-xs font-semibold text-slate-700">{label} {optional && <small className="font-normal text-slate-400">Optional</small>}</span><div className="[&_input]:min-h-12 [&_input]:w-full [&_input]:rounded-xl [&_input]:border [&_input]:border-slate-300 [&_input]:px-4 [&_input]:text-sm [&_input]:outline-none [&_input]:focus:border-emerald-600 [&_select]:min-h-12 [&_select]:w-full [&_select]:rounded-xl [&_select]:border [&_select]:border-slate-300 [&_select]:bg-white [&_select]:px-4 [&_select]:text-sm [&_select]:outline-none [&_select]:focus:border-emerald-600">{children}</div></label>;
}

function Report({ profile, selectedConcerns, report, resultColors, onReset }) {
  const programme = report.status === "Red" ? "90-Day Green Foundation" : report.status === "Orange" ? "60-Day Green Upgrade" : "Green Advantage Review";
  return (
    <div className="p-5 md:p-8">
      <div className={`flex items-center justify-between gap-5 rounded-3xl border bg-gradient-to-br p-6 text-white ${resultColors}`}>
        <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/65">Maharashtra Employment Health Report</p><h2 className="mt-2 text-3xl font-semibold">{profile.business}</h2><p className="mt-1 text-xs text-white/65">{profile.industry} · {profile.headcount} people · {profile.district}</p></div>
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border-8 border-white/20 bg-black/10"><span className="text-center text-xs"><strong className="block text-3xl leading-none">{report.score}</strong>/100</span></div>
      </div>
      <div className="mt-4 flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className={`h-fit rounded-lg px-3 py-2 text-xs font-black uppercase tracking-wider text-white ${report.status === "Green" ? "bg-emerald-600" : report.status === "Orange" ? "bg-amber-600" : "bg-red-600"}`}>{report.status}</span><div><h3 className="font-semibold">{report.status === "Green" ? "Strong systems—now preserve the advantage." : report.status === "Orange" ? "Important systems remain inconsistent." : "Immediate employment foundations are required."}</h3><p className="mt-1 text-xs leading-5 text-slate-600">This preliminary rating identifies where structured legal and people systems may reduce avoidable risk and employee loss.</p></div></div>
      {report.critical.length > 0 && <div className="mt-4 rounded-xl border-l-4 border-red-500 bg-red-50 p-4 text-xs text-red-900"><strong>{report.critical.length} critical control{report.critical.length > 1 ? "s" : ""} limited the rating.</strong> A high average cannot produce Green while a fundamental employment control is absent.</div>}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 p-5"><h3 className="text-sm font-semibold">Five-part readiness</h3><div className="mt-4 space-y-3">{report.breakdown.map((item) => <div key={item.key}><div className="flex justify-between text-xs"><span>{item.label}</span><strong>{item.score}</strong></div><div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100"><i className={`block h-full ${item.score >= 80 ? "bg-emerald-600" : item.score >= 55 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${item.score}%` }} /></div></div>)}</div></section>
        <section className="rounded-2xl border border-slate-200 p-5"><h3 className="text-sm font-semibold">Priority improvement areas</h3><ol className="mt-4 space-y-3">{report.priorities.map((item, index) => <li key={item.key} className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-xs font-bold text-emerald-800">{index + 1}</span><span className="text-xs"><strong className="block">{item.label}</strong><small className="text-slate-500">{item.score}/100 readiness</small></span></li>)}</ol></section>
      </div>
      <section className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"><p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Concerns selected</p><div className="mt-3 flex flex-wrap gap-2">{selectedConcerns.map((item) => <span key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-semibold">{item}</span>)}</div></section>
      <section className="mt-4 grid gap-5 rounded-3xl bg-emerald-950 p-6 text-white md:grid-cols-[1.35fr_.65fr]"><div><p className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Suggested advisory pathway</p><h3 className="mt-2 text-2xl font-semibold">{programme}</h3><p className="mt-2 text-xs leading-5 text-white/65">Subject to consultation and a separate professional engagement, the priority gaps may be addressed through a detailed Maharashtra compliance review, role-specific documents, salary and liability analysis, retention controls and manager guidance.</p></div><ul className="space-y-2 self-center text-xs">{report.priorities.map((item) => <li key={item.key} className="flex gap-2"><Check className="h-4 w-4 text-emerald-300" /> Strengthen {item.short}</li>)}<li className="flex gap-2"><Check className="h-4 w-4 text-emerald-300" /> Advocate-reviewed roadmap</li></ul></section>
      <div className="mt-4 grid gap-3 sm:grid-cols-2"><a href="/#contact" className="flex items-center justify-center rounded-xl bg-emerald-800 px-5 py-3 text-sm font-semibold text-white">Request a detailed consultation</a><button type="button" onClick={() => window.print()} className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold"><FileDown className="h-4 w-4" /> Print / save report</button></div>
      <div className="mt-5 flex flex-col justify-between gap-3 border-t border-slate-200 pt-5 text-[10px] text-slate-500 sm:flex-row"><button onClick={onReset} className="text-left font-semibold text-emerald-800">Start a new assessment</button><p>Readiness standard only; not a certification, legal opinion or comparative ranking.</p></div>
    </div>
  );
}
