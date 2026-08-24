'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Gavel, Scale, Phone, Mail, MapPin, ChevronRight, Shield, Users, MessageSquare, FileText, Building2, Landmark, CheckCircle, Infinity, Handshake } from "lucide-react";
import { ADVOCATE, FORM_ACTION, PRIMARY_NAV, SITE_URL } from "../lib/site";
import { POSTS } from "../lib/insights";

// Lightweight UI shims (remove if you later add shadcn/ui)
const Button = ({ className = "", children, ...props }) => (
  <button className={`px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-md ${className}`} {...props}>{children}</button>
);
const Input = ({ className = "", ...props }) => (
  <input className={`px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60 ${className}`} {...props} />
);
const Textarea = ({ className = "", ...props }) => (
  <textarea className={`px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60 ${className}`} {...props} />
);
const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-white/10 ${className}`}>{children}</div>
);
const CardContent = ({ className = "", children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const PRACTICE_AREAS = [
  {
    icon: <Gavel className="w-5 h-5" />,
    title: "Civil Litigation",
    href: "/civil-litigation",
    intro: "Property and commercial disputes, tenancy/possession, injunctions, contracts and recovery across Maharashtra courts and the Bombay High Court.",
    points: ["Property & Tenancy", "Contracts & Recovery", "Injunctions"]
  },
  {
    icon: <Scale className="w-5 h-5" />,
    title: "Criminal Matters",
    href: "/criminal-bail",
    intro: "Anticipatory and regular bail, revisions, quashing and trial support under the BNS, BNSS and BSA framework.",
    points: ["Bail & Anticipatory Bail", "Quashing & Revisions", "Trials"]
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Real Estate & Development",
    href: "/rera-real-estate",
    intro: "Development agreements, MAHARERA, municipal/MRTP compliance, and project due diligence.",
    points: ["Development Agreements", "RERA/MAHARERA", "Municipal & MRTP"]
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    title: "Trusts & Societies",
    href: "/trusts-societies",
    intro: "Maharashtra Public Trusts Act and Societies Registration compliance, governance frameworks, and dispute resolution.",
    points: ["Public Trusts Compliance", "Societies Act", "Governance & Disputes"]
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Family & Matrimonial",
    href: "/family-law",
    intro: "Divorce, custody/visitation, maintenance and domestic violence matters with documentation-first approach.",
    points: ["Divorce & Custody", "Maintenance", "Domestic Violence"]
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Drafting & Advisory",
    href: "/drafting-advisory",
    intro: "Pleadings, agreements, notices, due diligence and practical legal opinions.",
    points: ["Agreements & Notices", "Due Diligence", "Opinions"]
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: "Mediation",
    href: "/mediation",
    intro: "Structured, confidential dispute-resolution support for commercial, property, family, online and cross-border matters.",
    points: ["Neutral process", "Online or in person", "Time-based fee options"]
  },
];

const COURTS = [
  "Bombay High Court",
  "District & Sessions Courts (Pune, Baramati, Satara, Ahmednagar, etc.)",
  "Civil & Criminal Appellate Courts",
  "Family Court",
  "Criminal Courts (BNSS)",
  "MAHARERA / Consumer Commissions",
  "Co-operative Courts & Authorities",
  "Tribunals under State & Central statutes",
];

// Site-wide links (used for cross-link blocks)
const SITE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About the Advocate' },
  { href: '/civil-litigation', label: 'Civil Litigation' },
  { href: '/criminal-bail', label: 'Criminal & Bail' },
  { href: '/rera-real-estate', label: 'RERA & Real Estate' },
  { href: '/trusts-societies', label: 'Trusts & Societies' },
  { href: '/family-law', label: 'Family & Matrimonial' },
  { href: '/drafting-advisory', label: 'Drafting & Advisory' },
  { href: '/mediation', label: 'Mediation' },
  { href: '/employment-health-check', label: 'Employer Health Check' },
  { href: '/baramati-lawyer', label: 'Baramati Lawyer' },
  { href: '/pune-lawyer', label: 'Pune Lawyer' },
  { href: '/internships', label: 'Internships' },
];

export default function Site() {
  const [consented, setConsented] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const ok = localStorage.getItem("bci_disclaimer_ok");
    setConsented(!!ok);
    const onScroll = () => setSticky(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleConsent = () => {
    localStorage.setItem("bci_disclaimer_ok", "yes");
    setConsented(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      {!consented && <Disclaimer onAccept={handleConsent} />}
      <Header sticky={sticky} />
      <main id="main-content" className="mx-auto max-w-6xl px-4">
        <ThankYou />
        <Hero />
        <USPStrip />
        <PracticeAreas />
        <MediationFocus />
        <EmployerHealthCheck />
        <CourtsWeAppear />
        <WhyUs />
        <InsightsTeaser />
        <About />
        {/* Internships moved to dedicated page at /internships */}
        <GlobalFAQ />
        <LinksCloud />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Header({ sticky }) {
  return (
    <header className={`w-full top-0 z-40 transition-all ${sticky ? "sticky bg-[#0B0F14]/80 backdrop-blur border-b border-white/10" : "bg-transparent"}`}>
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Image src={ADVOCATE.logo} alt="Kothari Vakil logo" width={36} height={36} className="w-9 h-9 rounded-2xl object-cover border border-white/10" />
          <div>
            <div className="font-semibold leading-tight">{ADVOCATE.name}</div>
            <div className="text-xs text-white/60">Enr. {ADVOCATE.enrollment}</div>
          </div>
        </a>
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {PRIMARY_NAV.map((item) => <a key={item.href} href={item.href} className="hover:text-white">{item.label}</a>)}
        </nav>
        <a href={`tel:${ADVOCATE.phoneHref}`} className="ml-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/20">Call Now</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-20 md:pt-28 pb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Legal counsel and accredited mediation support in Maharashtra.</h1>
          <p className="mt-4 text-white/80">Information on litigation, drafting, advisory and accredited mediation work from Baramati, with appearances before District Courts, tribunals across Maharashtra and the Bombay High Court.</p>
          <p className="mt-2 text-white/70 text-sm">Also known locally as <strong>Kothari Vakil</strong> — English / Marathi (मराठी) / Hindi (हिन्दी).</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-2xl border border-white/10 bg-white/10 px-4 py-2 hover:bg-white/20">Consult Now <ChevronRight className="ml-1 w-4 h-4" /></a>
            <a href={`mailto:${ADVOCATE.email}`} className="inline-flex items-center rounded-2xl border border-white/30 bg-white/10 px-4 py-2 hover:bg-white/20">Email</a>
          </div>
          <div className="mt-6 flex items-center gap-5 text-white/70 text-sm">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Ethical, confidential advice</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Quick scheduling</div>
          </div>
        </div>
        <div className="relative">
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <Image src={ADVOCATE.photo} alt={ADVOCATE.name} width={448} height={448} priority sizes="(max-width: 768px) 192px, 224px" className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl border border-white/10 shadow-2xl bg-gradient-to-br from-white/10 to-white/0" />
              <Image src={ADVOCATE.logo} alt="" width={40} height={40} className="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl border border-white/10 bg-white/90 p-1" />
            </div>
          </div>
          <Card className="bg-white/5 border-white/10 rounded-3xl shadow-2xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <MiniStat label="Courts Covered" value="Statewide" />
                <MiniStat label="Focus" value="Litigation & Drafting" />
                <MiniStat label="Turnaround" value="Timely & Diligent" />
                <MiniStat label="Consultation" value="By Appointment" />
              </div>
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5">
                <h2 className="text-white/70 text-xs">Quick Enquiry</h2>
                <form method="POST" action={FORM_ACTION} className="mt-2 grid gap-2" aria-label="Quick consultation enquiry">
                  <label className="sr-only" htmlFor="quick-name">Your name</label>
                  <Input id="quick-name" required name="name" autoComplete="name" placeholder="Your Name" className="bg-white/10 border-white/10" />
                  <label className="sr-only" htmlFor="quick-contact">Phone or email</label>
                  <Input id="quick-contact" required name="contact" autoComplete="email" placeholder="Phone / Email" className="bg-white/10 border-white/10" />
                  <label className="sr-only" htmlFor="quick-service">Type of assistance</label>
                  <select id="quick-service" required name="service" defaultValue="" className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white">
                    <option value="" disabled className="text-black">Select assistance</option>
                    <option value="legal-consultation" className="text-black">Legal consultation</option>
                    <option value="mediation" className="text-black">Mediation</option>
                    <option value="document-review" className="text-black">Document review / drafting</option>
                  </select>
                  <label className="sr-only" htmlFor="quick-message">Brief outline</label>
                  <Textarea id="quick-message" required name="message" placeholder="Brief about your matter (no confidential details here)" className="bg-white/10 border-white/10" rows={3} />
                  <label className="flex items-start gap-2 text-[11px] leading-4 text-white/60">
                    <input required type="checkbox" name="privacy_consent" value="yes" className="mt-0.5" />
                    <span>I agree to the <a href="/privacy" className="underline">privacy notice</a> and understand that no professional relationship is created by this enquiry.</span>
                  </label>
                  <input type="hidden" name="_subject" value="New quick website enquiry" />
                  <input type="hidden" name="_format" value="plain" />
                  <input type="hidden" name="_next" value={`${SITE_URL}/#thank-you`} />
                  <Button type="submit" className="rounded-2xl w-full">Send Enquiry</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 p-3">
      <div className="text-xs text-white/60">{label}</div>
      <div className="text-base mt-1">{value}</div>
    </div>
  );
}

function USPStrip() {
  return (
    <section className="py-6">
      <div className="grid md:grid-cols-4 gap-4">
        <USP icon={<CheckCircle className="w-5 h-5" />} text="Clear strategy & documentation" />
        <USP icon={<MessageSquare className="w-5 h-5" />} text="Responsive communication" />
        <USP icon={<Shield className="w-5 h-5" />} text="Ethical & transparent" />
        <USP icon={<Infinity className="w-5 h-5" />} text="End-to-end support" />
      </div>
    </section>
  );
}

function USP({ icon, text }) {
  return (
    <div className="rounded-2xl border border-white/10 p-4 flex items-center gap-3 bg-white/5">
      <div className="w-8 h-8 rounded-xl bg-white/10 grid place-items-center">{icon}</div>
      <div className="text-sm">{text}</div>
    </div>
  );
}

function PracticeAreas() {
  return (
    <section id="practice" className="py-12">
      <h2 className="text-2xl font-semibold">Practice Areas</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {PRACTICE_AREAS.map((p, i) => (
          <Card key={i} className="bg-white/5 border-white/10 rounded-2xl hover:bg-white/10 transition">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center">{p.icon}</div>
                <div className="font-medium">{p.href ? <a className="underline hover:text-white" href={p.href}>{p.title}</a> : p.title}</div>
              </div>
              {p.intro && <p className="mt-2 text-white/70 text-sm">{p.intro}</p>}
              <ul className="mt-3 text-sm text-white/80 list-disc list-inside">
                {p.points.map((pt, j) => (<li key={j}>{pt}</li>))}
              </ul>
              {p.href && (
                <div className="mt-4">
                  <a href={p.href} className="text-sm underline hover:text-white inline-flex items-center">Learn more <ChevronRight className="w-4 h-4 ml-1" /></a>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function MediationFocus() {
  const pathways = [
    { href: "/mediation/commercial-business", title: "Commercial & business", text: "Contracts, payments, partnerships, shareholder and vendor disputes." },
    { href: "/mediation/property-real-estate", title: "Property & real estate", text: "Development, co-owner, possession, boundary and project disputes." },
    { href: "/mediation/online", title: "Online mediation", text: "Structured sessions for participants in different cities, with pre-session technology checks." },
    { href: "/mediation/cross-border", title: "Cross-border mediation", text: "Process planning across countries, time zones, languages and legal systems." },
  ];

  return (
    <section className="py-8" aria-labelledby="mediation-focus-title">
      <div className="rounded-3xl border border-amber-200/15 bg-gradient-to-br from-[#332615] via-[#201b14] to-[#0B0F14] p-7 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/80">Focused dispute resolution</p>
        <div className="mt-3 grid gap-8 md:grid-cols-[1fr_.8fr] md:items-end">
          <div>
            <h2 id="mediation-focus-title" className="text-3xl font-semibold leading-tight md:text-4xl">Mediation with a defined process, written terms and role clarity.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">Mediation is a neutral process. It is distinct from representing one side as an advocate. Appointment follows identity, conflict and independence checks, and all participants receive process and fee terms before substantive sessions begin.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/70">
            Fees may be structured by preparation time, session time and agreed administration. The basis, minimum booking period, cancellation terms and allocation between participants are confirmed in writing before appointment.
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pathways.map((pathway) => (
            <a key={pathway.href} href={pathway.href} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <h3 className="font-medium">{pathway.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{pathway.text}</p>
            </a>
          ))}
        </div>
        <a href="/mediation#mediation-enquiry" className="mt-7 inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B0F14] hover:bg-white/90">Check mediation suitability <ChevronRight className="ml-1 h-4 w-4" /></a>
      </div>
    </section>
  );
}

function EmployerHealthCheck() {
  return (
    <section className="py-8" aria-labelledby="employment-health-check-title">
      <div className="overflow-hidden rounded-3xl border border-emerald-300/15 bg-gradient-to-br from-[#12352f] via-[#102923] to-[#0B0F14] p-7 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.3fr_.7fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">For Maharashtra employers</p>
            <h2 id="employment-health-check-title" className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Check the health of your employment and team systems.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">Complete a structured preliminary assessment covering employment documents, statutory readiness, retention, performance management and continuity. Receive an immediate Green, Orange or Red readiness report with priority areas.</p>
            <a href="/employment-health-check" className="mt-6 inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#0B0F14] transition hover:bg-emerald-50">Start the preliminary assessment <ChevronRight className="ml-1 h-4 w-4" /></a>
          </div>
          <div className="grid gap-3 text-sm">
            {[
              "Question-specific five-point scales",
              "Maharashtra-focused screening",
              "Immediate readiness report",
              "No information saved by the assessment",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                <CheckCircle className="h-5 w-5 shrink-0 text-emerald-300" /> {item}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-5 text-white/50">This tool provides general preliminary information only. It is not a legal opinion, certification or substitute for advice based on the facts of a particular establishment.</p>
      </div>
    </section>
  );
}

function CourtsWeAppear() {
  return (
    <section id="courts" className="py-12">
      <h2 className="text-2xl font-semibold">Courts & Forums</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {COURTS.map((c, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-4 bg-white/5 text-white/80">{c}</div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a className="underline hover:text-white" href="/civil-litigation">Civil Litigation</a>
        <span className="text-white/40">•</span>
        <a className="underline hover:text-white" href="/criminal-bail">Criminal & Bail</a>
        <span className="text-white/40">•</span>
        <a className="underline hover:text-white" href="/rera-real-estate">RERA & Real Estate</a>
        <span className="text-white/40">•</span>
        <a className="underline hover:text-white" href="/trusts-societies">Trusts & Societies</a>
        <span className="text-white/40">•</span>
        <a className="underline hover:text-white" href="/drafting-advisory">Drafting & Advisory</a>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: <Gavel className="w-5 h-5" />, title: "Forum and remedy assessment", desc: "Strategy begins with facts, limitation, jurisdiction and the relief actually available." },
    { icon: <FileText className="w-5 h-5" />, title: "Documentation discipline", desc: "Chronologies, document sets and drafts are organised around the issues that require decision." },
    { icon: <Shield className="w-5 h-5" />, title: "Candid scope and risk", desc: "Advice identifies material assumptions, procedural risk and the limits of any preliminary view." },
  ];
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold">Practice approach</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center">{it.icon}</div>
              <div className="font-medium">{it.title}</div>
            </div>
            <p className="mt-3 text-sm text-white/80">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InsightsTeaser() {
  const posts = [...POSTS].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 2);
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold">Insights</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {posts.map((p, i) => (
          <Card key={i} className="bg-white/5 border-white/10 rounded-2xl hover:bg-white/10 transition">
            <CardContent className="p-5">
              <div className="text-xs text-white/50">Reviewed {new Date(p.updated).toLocaleDateString("en-IN", { dateStyle: "medium" })}</div>
              <a href={`/insights/${p.slug}`} className="block mt-1 text-lg font-medium underline hover:text-white">{p.title}</a>
              <p className="mt-2 text-sm text-white/80">{p.description}</p>
              <div className="mt-3 text-sm">
                <a href={`/insights/${p.slug}`} className="underline hover:text-white inline-flex items-center">Read more <ChevronRight className="w-4 h-4 ml-1" /></a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4 text-sm"><a className="underline hover:text-white" href="/insights">View all →</a></div>
    </section>
  );
}

function GlobalFAQ() {
  const faqs = [
    { q: 'Do you appear in the Bombay High Court?', a: 'Yes. Appearances include matters before the Bombay High Court along with District & Sessions Courts and Tribunals across Maharashtra.' },
    { q: 'How do I start a case or seek an opinion?', a: 'Share facts and documents in the consultation; we assess limitation, jurisdiction, strategy and draft the required pleadings or notices.' },
    { q: 'Do you handle property/RERA documentation?', a: 'Yes. We assist with development agreements, MAHARERA complaints/compliance, municipal/MRTP and due diligence.' },
    { q: 'Are video consultations available?', a: 'Yes—by prior appointment. Use the form or call to schedule.' },
    { q: 'Can I enquire about mediation?', a: 'Yes. Use the mediation suitability form for a preliminary process assessment. A mediator appointment is separate from advocate-client representation and requires identity, conflict and independence checks.' },
  ];
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {faqs.map((f, i) => (
          <Card key={i} className="bg-white/5 border-white/10 rounded-2xl">
            <CardContent className="p-5">
              <details>
                <summary className="cursor-pointer font-medium text-white">{f.q}</summary>
                <p className="mt-2 text-sm text-white/80">{f.a}</p>
              </details>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function LinksCloud() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold">Explore</h2>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {SITE_LINKS.map((l, i) => (
          <a key={i} className="underline hover:text-white" href={l.href}>{l.label}</a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left column */}
        <div>
          <h2 className="text-2xl font-semibold">About the Advocate</h2>
          <p className="mt-4 text-white/80 text-sm leading-relaxed">
  Adv. {ADVOCATE.fullName} (Enrl. {ADVOCATE.enrollment}) practices across Maharashtra with appearances before
  District Courts, Tribunals, and the Bombay High Court. The practice blends courtroom advocacy with
  robust drafting—focusing on litigation strategy, precise pleadings, and practical, risk-aware advice.
  As an advocate/lawyer (vakil) based in Baramati and appearing before the Bombay High Court, I assist clients
  across Maharashtra in civil, criminal, real estate/RERA, and trust & society matters.
</p>

          <div className="mt-6 grid gap-3 text-sm text-white/80">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-medium text-white">Education</div>
              <ul className="mt-2 space-y-1 text-white/75">
                {ADVOCATE.qualifications.map((qualification) => (
                  <li key={qualification.degree}>
                    {qualification.degree}
                    {qualification.institution ? ` — ${qualification.institution}` : ""}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-amber-200/15 bg-amber-200/5 p-4">
              <div className="font-medium text-white">Accredited mediator training</div>
              <p className="mt-2 text-sm leading-6 text-white/75">{ADVOCATE.mediationCredential.programme} by {ADVOCATE.mediationCredential.institution}; {ADVOCATE.mediationCredential.qualityAssurance.toLowerCase()}; {ADVOCATE.mediationCredential.period}.</p>
            </div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href={`tel:${ADVOCATE.phone.split(' ').join('')}`} className="hover:underline">{ADVOCATE.phone}</a></div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href={`mailto:${ADVOCATE.email}`} className="hover:underline">{ADVOCATE.email}</a></div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{ADVOCATE.address}</div>
            <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-sm bg-white/20" />Languages: English • Marathi (मराठी) • Hindi (हिन्दी)</div>
            <div><a href={ADVOCATE.linkedIn} target="_blank" rel="noreferrer" className="underline hover:text-white">LinkedIn professional profile</a> <span className="text-white/40">•</span> <a href={ADVOCATE.googleBusinessProfile} target="_blank" rel="noreferrer" className="underline hover:text-white">Google Business Profile</a> <span className="text-white/40">•</span> <a href="/about" className="underline hover:text-white">Full professional profile</a></div>
          </div>
        </div>

        {/* Right column */}
        <div>
          <Card className="bg-white/5 border-white/10 rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-medium">Core Capabilities</h3>
              <ul className="mt-3 list-disc list-inside text-sm text-white/80">
                <li>Case strategy, drafting, filings and arguments</li>
                <li>Second Appeals (Bombay HC practical format), Writs, Revisions</li>
                <li>Real estate transactions, development documentation, and municipal compliance</li>
                <li>Trusts & Societies governance under the Maharashtra Public Trusts Act and Societies Registration Act</li>
                <li>Family & criminal matters with BNS, BNSS and Bharatiya Sakshya Adhiniyam alignment</li>
                <li>Neutral mediation process design for suitable disputes</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a className="underline hover:text-white" href="/drafting-advisory">Drafting & Advisory</a>
                <span className="text-white/40">•</span>
                <a className="underline hover:text-white" href="/civil-litigation">Civil Litigation</a>
                <span className="text-white/40">•</span>
                <a className="underline hover:text-white" href="/rera-real-estate">RERA & Real Estate</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (

    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold">Contact & Consultation</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        <Card className="bg-white/5 border-white/10 rounded-2xl">
          <CardContent className="p-6">
            <h3 className="font-medium">Send a Message</h3>
            <p className="text-sm text-white/70 mt-1">Share only a short, non-confidential outline. A response or enquiry does not by itself create a professional relationship.</p>
            <form className="mt-4 grid gap-3" method="POST" action={FORM_ACTION}>
              {/* Honeypot field to reduce spam */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Do not fill this out:
                  <input type="text" name="company" tabIndex="-1" autoComplete="off" />
                </label>
              </div>

              <label className="text-sm text-white/75">Full name
                <Input required name="name" autoComplete="name" className="mt-2 w-full bg-white/10 border-white/10" />
              </label>
              <label className="text-sm text-white/75">Email
                <Input required type="email" name="email" autoComplete="email" className="mt-2 w-full bg-white/10 border-white/10" />
              </label>
              <label className="text-sm text-white/75">Phone (optional)
                <Input name="phone" type="tel" autoComplete="tel" className="mt-2 w-full bg-white/10 border-white/10" />
              </label>
              <label className="text-sm text-white/75">Type of assistance
                <select required name="service" defaultValue="" className="mt-2 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white">
                  <option value="" disabled className="text-black">Select one</option>
                  <option value="civil" className="text-black">Civil litigation</option>
                  <option value="criminal" className="text-black">Criminal matter / bail</option>
                  <option value="property" className="text-black">Property / MAHARERA</option>
                  <option value="family" className="text-black">Family / matrimonial</option>
                  <option value="trust" className="text-black">Trust / society</option>
                  <option value="drafting" className="text-black">Drafting / advisory</option>
                  <option value="mediation" className="text-black">Mediation</option>
                  <option value="other" className="text-black">Other</option>
                </select>
              </label>
              <label className="text-sm text-white/75">Short, non-confidential outline
                <Textarea required name="message" rows={4} className="mt-2 w-full bg-white/10 border-white/10" placeholder="Current stage, city or forum, and next known deadline" />
              </label>
              <label className="flex items-start gap-3 text-xs leading-5 text-white/65">
                <input required type="checkbox" name="privacy_consent" value="yes" className="mt-1" />
                <span>I have read the <a href="/privacy" className="underline hover:text-white">privacy notice</a> and understand the limits of an initial enquiry.</span>
              </label>

              {/* Optional metadata */}
              <input type="hidden" name="_subject" value="New website enquiry" />
              <input type="hidden" name="_format" value="plain" />
              <input type="hidden" name="_next" value={`${SITE_URL}/#thank-you`} />

              <Button type="submit" className="rounded-2xl">Submit</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <Card className="bg-white/5 border-white/10 rounded-2xl">
            <CardContent className="p-5 text-sm text-white/80">
              <div className="font-medium text-white">Office</div>
              <div className="mt-1">{ADVOCATE.address}</div>
              <div className="mt-3"><span className="text-white/60">Phone:</span> <a className="hover:underline" href={`tel:${ADVOCATE.phone.replace(/\s/g, "")}`}>{ADVOCATE.phone}</a></div>
              <div><span className="text-white/60">Email:</span> <a className="hover:underline" href={`mailto:${ADVOCATE.email}`}>{ADVOCATE.email}</a></div>
              <div className="mt-3"><a className="underline hover:text-white" target="_blank" rel="noreferrer" href={ADVOCATE.googleBusinessProfile}>View Google Business Profile and directions</a></div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 rounded-2xl">

            <CardContent className="p-5 text-xs text-white/60 leading-relaxed">
              <div className="text-white">Professional Notice</div>
              <p className="mt-2">As per Bar Council of India rules, this website provides general information and does not solicit work or advertise. Visiting or contacting does not create a lawyer–client relationship. No guarantees of outcomes are made.</p>
              <p className="mt-2"><a href="/professional-notice" className="underline hover:text-white">Read the full professional notice</a></p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-white">
            <Image src={ADVOCATE.logo} alt="" width={20} height={20} className="w-5 h-5 rounded-md border border-white/10" />
            <span>{ADVOCATE.name}</span>
          </div>
          <div>Enrl. {ADVOCATE.enrollment} • {ADVOCATE.practice}</div>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 items-center">
          <a href="/mediation" className="hover:underline">Mediation</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/professional-notice" className="hover:underline">Professional Notice</a>
          <a href={`tel:${ADVOCATE.phone.replace(/\s/g, "")}`} className="hover:underline flex items-center gap-1"><Phone className="w-4 h-4" /> Call</a>
          <a href={`mailto:${ADVOCATE.email}`} className="hover:underline flex items-center gap-1"><Mail className="w-4 h-4" /> Email</a>
        </nav>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${ADVOCATE.whatsapp}`}
      className="fixed bottom-5 right-5 rounded-full shadow-xl p-4 bg-white text-black hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </a>
  );
}

function Disclaimer({ onAccept }) {
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="disclaimer-title" className="fixed inset-0 z-50 bg-black/70 backdrop-blur grid place-items-center p-4">
      <Card className="max-w-xl w-full rounded-3xl bg-[#0B0F14] border-white/10">
        <CardContent className="p-6 text-sm">
          <h2 id="disclaimer-title" className="text-lg font-semibold">Disclaimer (Bar Council of India)</h2>
          <p className="mt-3 text-white/80">By clicking “I Agree”, you acknowledge that you wish to access this website to obtain information at your own volition and there has been no solicitation, advertisement, or inducement by the advocate or the chambers.</p>
          <ul className="list-disc list-inside text-white/70 mt-3">
            <li>This site is for general information only and does not constitute legal advice.</li>
            <li>No lawyer–client relationship is created by accessing or using this site.</li>
            <li>No guarantees of outcomes are made.</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Button onClick={onAccept} className="rounded-2xl">I Agree</Button>
            <a href="https://www.barcouncilofindia.org/info/bci-rules" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/30 bg-white/10 px-4 py-2 hover:bg-white/20">Learn More</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ThankYou() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const check = () => {
      const hash = window.location.hash || '';
      // show if redirected back with #thank-you
      setShow(hash.includes('thank-you'));
    };
    check();
    window.addEventListener('hashchange', check);
    return () => window.removeEventListener('hashchange', check);
  }, []);
  if (!show) return null;
  return (
    <div aria-live="polite" className="my-4 rounded-2xl border border-green-400/30 bg-green-500/10 p-4 text-sm text-green-200 flex items-start gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mt-0.5"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.59a.75.75 0 1 0-1.06-1.06L10.5 12.44 9.03 10.97a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.58-4.62Z" clipRule="evenodd"/></svg>
      <div className="flex-1">
        <div className="font-medium text-green-200">Thank you! Your submission has been received.</div>
        <div className="text-green-100/80 mt-1">We’ll review it and get back to you soon.</div>
      </div>
      <button onClick={() => setShow(false)} className="ml-2 px-2 py-1 text-green-100/80 hover:text-white">Dismiss</button>
    </div>
  );
}

export { PRACTICE_AREAS, SITE_LINKS };
