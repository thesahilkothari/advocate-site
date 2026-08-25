'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, Clock3, Gavel, Scale, Phone, Mail, MapPin, ChevronRight, Shield, Users, MessageSquare, FileText, Building2, Landmark, CheckCircle, Handshake, Globe2, Languages, MoveRight } from "lucide-react";
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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleConsent = () => {
    localStorage.setItem("bci_disclaimer_ok", "yes");
    setConsented(true);
  };

  return (
    <div className="site-shell min-h-screen overflow-hidden bg-[#071218] text-[#f7f2e8]">
      {!consented && <Disclaimer onAccept={handleConsent} />}
      <Header sticky={sticky} />
      <main id="main-content" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ThankYou />
        <Hero />
        <PriorityJourneys />
        <USPStrip />
        <MediationFocus />
        <EmployerHealthCheck />
        <PracticeAreas />
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
    <header className={`top-0 z-40 w-full border-b transition-all duration-300 ${sticky ? "sticky border-white/10 bg-[#071218]/90 shadow-[0_20px_50px_rgba(0,0,0,.22)] backdrop-blur-xl" : "border-transparent bg-[#071218]/40"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="group flex min-w-0 items-center gap-3">
          <Image src={ADVOCATE.logo} alt="Kothari Vakil logo" width={42} height={42} className="h-10 w-10 rounded-xl border border-[#d9b96e]/30 bg-[#f7f2e8] p-1 shadow-lg transition group-hover:border-[#d9b96e]/60" />
          <div>
            <div className="truncate font-serif text-[15px] font-semibold leading-tight tracking-wide text-[#fffaf0] sm:text-base"><span className="sm:hidden">Kothari Vakil</span><span className="hidden sm:inline">{ADVOCATE.name}</span></div>
            <div className="mt-0.5 hidden text-[10px] uppercase tracking-[.16em] text-[#c9bfae] sm:block">Advocate · Accredited Mediator</div>
          </div>
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 text-[13px] text-[#d8d1c5] lg:flex">
          {PRIMARY_NAV.map((item) => {
            const featured = item.href === "/mediation" || item.href === "/employment-health-check";
            return <a key={item.href} href={item.href} className={`rounded-full px-3 py-2 transition ${featured ? "bg-white/[.06] text-[#fff6e3] hover:bg-white/[.11]" : "hover:bg-white/[.05] hover:text-white"}`}>{item.label}</a>;
          })}
        </nav>
        <a href="/#contact" className="shrink-0 rounded-full bg-[#f3e7cd] px-4 py-2.5 text-xs font-semibold text-[#17232a] shadow-[0_8px_30px_rgba(224,196,135,.16)] transition hover:bg-white sm:text-sm"><span className="sm:hidden">Consult</span><span className="hidden sm:inline">Request consultation</span></a>
      </div>
      <nav aria-label="Priority navigation" className="no-scrollbar flex gap-2 overflow-x-auto border-t border-white/[.06] px-4 py-2 text-xs lg:hidden">
        <a href="/mediation" className="shrink-0 rounded-full border border-[#d9b96e]/30 bg-[#d9b96e]/10 px-3 py-2 text-[#f6d991]">Mediation</a>
        <a href="/employment-health-check" className="shrink-0 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-emerald-200">Employer Check</a>
        <a href="/#practice" className="shrink-0 rounded-full border border-white/10 px-3 py-2 text-white/70">Legal practice</a>
        <a href="/about" className="shrink-0 rounded-full border border-white/10 px-3 py-2 text-white/70">Profile</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pb-14 pt-16 sm:pt-20 lg:min-h-[720px] lg:pb-20 lg:pt-24">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="relative grid gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="section-kicker flex items-center gap-2"><span className="h-px w-8 bg-[#d9b96e]" /> Maharashtra legal practice</p>
          <h1 className="mt-7 font-serif text-[clamp(3.15rem,7vw,6.6rem)] font-medium leading-[.92] tracking-[-.045em] text-[#fffaf0]">
            A clearer path through <span className="text-[#d9b96e]">disputes,</span> work and risk.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#c9c2b7] sm:text-lg">Legal counsel, courtroom representation and accredited mediation support from Baramati for clients across Maharashtra—with online and cross-border mediation pathways where suitable.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/mediation" className="group inline-flex items-center rounded-full bg-[#ead8ad] px-5 py-3 text-sm font-semibold text-[#15232a] transition hover:bg-[#fff4d9]">Explore mediation <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
            <a href="/employment-health-check" className="group inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/15">Run employer check <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/[.06] hover:text-white">Legal consultation</a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#a9a297]">
            <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[#d9b96e]" /> Accredited mediation training</span>
            <span className="flex items-center gap-2"><Languages className="h-4 w-4 text-[#d9b96e]" /> English · मराठी · हिन्दी</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#d9b96e]" /> Baramati, Maharashtra</span>
          </div>
        </div>

        <aside className="relative mx-auto w-full max-w-xl lg:ml-auto" aria-label="Ways to begin">
          <div className="portrait-frame">
            <Image src={ADVOCATE.photo} alt={`${ADVOCATE.name}, advocate and accredited mediator`} width={800} height={800} priority sizes="(max-width: 1024px) 100vw, 520px" className="aspect-[1.08/1] w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071218] via-[#071218]/70 to-transparent px-6 pb-6 pt-24">
              <p className="font-serif text-2xl text-[#fffaf0]">{ADVOCATE.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[.15em] text-[#c7bca8]">Enrl. {ADVOCATE.enrollment}</p>
            </div>
          </div>
          <div className="relative -mt-3 grid gap-2 rounded-2xl border border-white/10 bg-[#0d1c22]/95 p-2 shadow-2xl backdrop-blur sm:mx-6 sm:grid-cols-3">
            <HeroPath href="/mediation" icon={<Handshake className="h-5 w-5" />} label="Resolve a dispute" meta="Mediation" tone="gold" />
            <HeroPath href="/employment-health-check" icon={<BriefcaseBusiness className="h-5 w-5" />} label="Review a workplace" meta="Employer Check" tone="green" />
            <HeroPath href="/#contact" icon={<Gavel className="h-5 w-5" />} label="Discuss a matter" meta="Consultation" />
          </div>
        </aside>
      </div>
    </section>
  );
}

function HeroPath({ href, icon, label, meta, tone = "neutral" }) {
  const toneClass = tone === "gold" ? "text-[#e8ca83]" : tone === "green" ? "text-emerald-300" : "text-sky-200";
  return (
    <a href={href} className="group rounded-xl px-3 py-3 transition hover:bg-white/[.06]">
      <span className={`flex items-center justify-between ${toneClass}`}>{icon}<ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" /></span>
      <span className="mt-4 block text-[10px] uppercase tracking-[.16em] text-white/45">{meta}</span>
      <span className="mt-1 block text-sm font-medium text-[#f8f3e9]">{label}</span>
    </a>
  );
}

function PriorityJourneys() {
  return (
    <section className="section-pad pt-4" aria-labelledby="priority-journeys-title">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="section-kicker">Start with the right route</p>
          <h2 id="priority-journeys-title" className="section-title mt-3">Two focused ways to move forward.</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-white/55">Choose a neutral resolution process for a dispute, or assess the legal and operational foundations of your workforce.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.12fr_.88fr]">
        <article className="feature-card feature-card--mediation group">
          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <span className="feature-icon bg-[#d9b96e]/15 text-[#e6c677]"><Handshake className="h-6 w-6" /></span>
              <span className="rounded-full border border-[#d9b96e]/20 px-3 py-1.5 text-[10px] uppercase tracking-[.16em] text-[#e6c677]">Neutral process</span>
            </div>
            <div className="mt-16 max-w-2xl sm:mt-24">
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#e6c677]">Mediation</p>
              <h3 className="mt-3 font-serif text-4xl leading-[1.02] tracking-tight text-[#fff8e8] sm:text-5xl">Resolve the problem without surrendering the decision.</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#d3c6af]">Confidential, structured sessions for commercial, property, family, online and cross-border disputes. Process, preparation and time-based fee terms are documented before appointment.</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/mediation" className="group/link inline-flex items-center rounded-full bg-[#f0dfb9] px-5 py-3 text-sm font-semibold text-[#1c261f] transition hover:bg-white">View mediation options <MoveRight className="ml-2 h-4 w-4 transition group-hover/link:translate-x-1" /></a>
              <span className="flex items-center gap-2 text-xs text-white/55"><Globe2 className="h-4 w-4" /> In person · online · cross-border</span>
            </div>
          </div>
        </article>

        <article className="feature-card feature-card--employer group">
          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <span className="feature-icon bg-emerald-300/10 text-emerald-300"><BriefcaseBusiness className="h-6 w-6" /></span>
              <span className="rounded-full border border-emerald-300/20 px-3 py-1.5 text-[10px] uppercase tracking-[.16em] text-emerald-200">Interactive tool</span>
            </div>
            <div className="mt-16 sm:mt-24">
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-emerald-300">Employer Health Check</p>
              <h3 className="mt-3 font-serif text-4xl leading-[1.02] tracking-tight text-[#ecfff7] sm:text-5xl">See where your people systems are exposed.</h3>
              <p className="mt-5 text-sm leading-7 text-emerald-50/65">A Maharashtra-focused preliminary assessment of documentation, compliance, retention, performance and business continuity—with an immediate Green, Orange or Red readiness report.</p>
            </div>
            <div className="mt-8">
              <a href="/employment-health-check" className="group/link inline-flex items-center rounded-full bg-emerald-200 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-white">Start the assessment <MoveRight className="ml-2 h-4 w-4 transition group-hover/link:translate-x-1" /></a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function USPStrip() {
  return (
    <section className="py-8" aria-label="Professional credentials and availability">
      <div className="grid overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.025] sm:grid-cols-2 lg:grid-cols-4">
        <USP icon={<BadgeCheck className="h-5 w-5" />} eyebrow="Mediation training" text="60-hour accredited foundation programme" />
        <USP icon={<Gavel className="h-5 w-5" />} eyebrow="Court practice" text="Maharashtra courts and Bombay High Court" />
        <USP icon={<Globe2 className="h-5 w-5" />} eyebrow="Flexible process" text="In-person and online appointments" />
        <USP icon={<Clock3 className="h-5 w-5" />} eyebrow="Clear scope" text="Written role, process and fee terms" />
      </div>
    </section>
  );
}

function USP({ icon, eyebrow, text }) {
  return (
    <div className="flex items-start gap-3 border-white/[.08] p-5 sm:[&:nth-child(even)]:border-l lg:[&:not(:first-child)]:border-l">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#d9b96e]/10 text-[#e0c078]">{icon}</div>
      <div><p className="text-[10px] uppercase tracking-[.16em] text-white/40">{eyebrow}</p><p className="mt-1 text-sm leading-5 text-white/75">{text}</p></div>
    </div>
  );
}

function PracticeAreas() {
  return (
    <section id="practice" className="section-pad">
      <div className="grid gap-5 border-b border-white/10 pb-8 md:grid-cols-[.7fr_1.3fr] md:items-end">
        <div><p className="section-kicker">Legal practice</p><h2 className="section-title mt-3">Courtroom and advisory work.</h2></div>
        <p className="max-w-2xl text-sm leading-7 text-white/55 md:justify-self-end">Litigation strategy, drafting and advisory work begin with limitation, forum, evidence and a realistic assessment of the relief available.</p>
      </div>
      <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-white/[.08] bg-white/[.08] md:grid-cols-2 lg:grid-cols-3">
        {PRACTICE_AREAS.map((p, i) => (
          <a key={p.href} href={p.href} className="group flex min-h-72 flex-col bg-[#0a171d] p-6 transition hover:bg-[#102129] sm:p-7">
            <div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-[#d9b96e]">{p.icon}</span><span className="text-xs tabular-nums text-white/25">0{i + 1}</span></div>
            <h3 className="mt-8 font-serif text-2xl text-[#fff8eb]">{p.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">{p.intro}</p>
            <div className="mt-auto flex items-center justify-between pt-7 text-xs text-white/45"><span>{p.points.join(" · ")}</span><ArrowUpRight className="h-4 w-4 shrink-0 text-[#d9b96e] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
          </a>
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
    <section className="section-pad" aria-labelledby="mediation-focus-title">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#eee6d6] p-7 text-[#17242a] shadow-[0_40px_100px_rgba(0,0,0,.18)] md:p-12 lg:p-14">
        <div className="mediation-seal" aria-hidden="true"><Scale className="h-16 w-16" /></div>
        <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#8f692a]">Focused dispute resolution</p>
        <div className="relative mt-4 grid gap-8 md:grid-cols-[1.1fr_.7fr] md:items-end">
          <div>
            <h2 id="mediation-focus-title" className="max-w-3xl font-serif text-4xl leading-[1.02] tracking-tight md:text-6xl">A defined process. A neutral room. Decisions remain with the participants.</h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#4e5b5f]">Mediation is distinct from representing one side as an advocate. Appointment follows identity, conflict and independence checks, and participants receive written process and fee terms before substantive sessions begin.</p>
          </div>
          <div className="rounded-2xl border border-[#8f692a]/20 bg-white/35 p-5 text-sm leading-7 text-[#4a5356]">
            <div className="mb-3 flex items-center gap-2 font-semibold text-[#75531d]"><Clock3 className="h-4 w-4" /> Time-based fee structure</div>
            Preparation, session time and agreed administration may be separately structured. The rate, booking block, cancellation terms and allocation are confirmed in writing.
          </div>
        </div>
        <div className="relative mt-10 grid gap-px overflow-hidden rounded-2xl border border-[#17242a]/10 bg-[#17242a]/10 md:grid-cols-2">
          {pathways.map((pathway, index) => (
            <a key={pathway.href} href={pathway.href} className="group bg-[#f6f0e4] p-5 transition hover:bg-white md:p-6">
              <span className="text-[10px] tabular-nums text-[#9b7a43]">0{index + 1}</span>
              <h3 className="mt-3 font-serif text-xl">{pathway.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5d686a]">{pathway.text}</p>
              <span className="mt-4 flex items-center text-xs font-semibold text-[#7c5a23]">Explore pathway <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </a>
          ))}
        </div>
        <a href="/mediation#mediation-enquiry" className="relative mt-7 inline-flex items-center rounded-full bg-[#18272b] px-5 py-3 text-sm font-semibold text-[#fff8ea] transition hover:bg-[#26393f]">Check mediation suitability <ChevronRight className="ml-1 h-4 w-4" /></a>
      </div>
    </section>
  );
}

function EmployerHealthCheck() {
  return (
    <section className="section-pad" aria-labelledby="employment-health-check-title">
      <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-[#092720] p-7 shadow-[0_35px_90px_rgba(0,0,0,.2)] md:p-12 lg:p-14">
        <div className="employer-grid" aria-hidden="true" />
        <div className="relative grid gap-10 md:grid-cols-[1.15fr_.85fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">For Maharashtra employers</p>
            <h2 id="employment-health-check-title" className="mt-4 max-w-3xl font-serif text-4xl leading-[1.02] tracking-tight text-[#edfff7] md:text-6xl">Turn workplace uncertainty into a visible risk map.</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-emerald-50/65">The structured preliminary assessment reviews employment documents, statutory readiness, retention, performance management and continuity. It generates a Green, Orange or Red readiness report with priority areas.</p>
            <div className="mt-7 flex flex-wrap items-center gap-4"><a href="/employment-health-check" className="inline-flex items-center rounded-full bg-emerald-200 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-white">Start the preliminary assessment <ChevronRight className="ml-1 h-4 w-4" /></a><span className="text-xs text-emerald-100/45">No assessment answers are saved</span></div>
          </div>
          <div className="rounded-3xl border border-emerald-200/15 bg-black/15 p-3 backdrop-blur">
            <div className="grid grid-cols-3 gap-2 border-b border-white/10 p-3 text-center">
              <div><span className="mx-auto block h-2 w-2 rounded-full bg-emerald-400" /><strong className="mt-2 block text-xs text-emerald-100">Green</strong></div>
              <div><span className="mx-auto block h-2 w-2 rounded-full bg-amber-400" /><strong className="mt-2 block text-xs text-amber-100">Orange</strong></div>
              <div><span className="mx-auto block h-2 w-2 rounded-full bg-red-400" /><strong className="mt-2 block text-xs text-red-100">Red</strong></div>
            </div>
            <div className="grid gap-2 p-2 text-sm">
            {[
              "Employment foundation",
              "Statutory readiness",
              "Retention and performance",
              "Team resilience",
            ].map((item) => (
              <div key={item} className="flex items-center justify-between gap-3 rounded-xl bg-white/[.045] px-4 py-3 text-emerald-50/70">
                <span>{item}</span><CheckCircle className="h-4 w-4 shrink-0 text-emerald-300" />
              </div>
            ))}
            </div>
          </div>
        </div>
        <p className="relative mt-7 border-t border-emerald-100/10 pt-5 text-xs leading-5 text-emerald-50/40">This tool provides general preliminary information only. It is not a legal opinion, certification or substitute for advice based on the facts of a particular establishment.</p>
      </div>
    </section>
  );
}

function CourtsWeAppear() {
  return (
    <section id="courts" className="section-pad border-y border-white/[.08]">
      <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr]">
        <div><p className="section-kicker">Where we appear</p><h2 className="section-title mt-3">Courts & forums.</h2><p className="mt-5 text-sm leading-7 text-white/50">Forum and jurisdiction are assessed for each matter; this list describes the current practice footprint.</p></div>
        <div className="grid gap-2 sm:grid-cols-2">
        {COURTS.map((c, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border border-white/[.07] bg-white/[.025] px-4 py-3 text-sm text-white/65"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9b96e]" />{c}</div>
        ))}
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[.07] pt-6 text-xs text-white/50">
        <a className="transition hover:text-white" href="/civil-litigation">Civil Litigation</a>
        <span className="text-white/40">•</span>
        <a className="transition hover:text-white" href="/criminal-bail">Criminal & Bail</a>
        <span className="text-white/40">•</span>
        <a className="transition hover:text-white" href="/rera-real-estate">RERA & Real Estate</a>
        <span className="text-white/40">•</span>
        <a className="transition hover:text-white" href="/trusts-societies">Trusts & Societies</a>
        <span className="text-white/40">•</span>
        <a className="transition hover:text-white" href="/drafting-advisory">Drafting & Advisory</a>
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
    <section className="section-pad">
      <p className="section-kicker">How work is approached</p>
      <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="section-title max-w-2xl">Clarity before action.</h2><p className="max-w-lg text-sm leading-7 text-white/50">The useful first question is not “what can be filed?” but “what outcome is available, on what evidence, in which forum, and at what procedural cost?”</p></div>
      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <div key={i} className="rounded-2xl border border-white/[.08] bg-gradient-to-b from-white/[.045] to-transparent p-6">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-[#d9b96e]/25 text-[#d9b96e]">{it.icon}</div>
              <span className="font-serif text-3xl text-white/10">0{i + 1}</span>
            </div>
            <h3 className="mt-7 font-serif text-xl text-[#fff8eb]">{it.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/55">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InsightsTeaser() {
  const posts = [...POSTS].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 2);
  return (
    <section className="section-pad">
      <div className="flex items-end justify-between gap-4"><div><p className="section-kicker">Legal resources</p><h2 className="section-title mt-3">Recent insights.</h2></div><a className="hidden items-center text-sm text-white/55 transition hover:text-white sm:flex" href="/insights">View all <ArrowUpRight className="ml-2 h-4 w-4" /></a></div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.map((p, i) => (
          <a key={p.slug} href={`/insights/${p.slug}`} className="group rounded-2xl border border-white/[.08] bg-white/[.025] p-6 transition hover:-translate-y-1 hover:bg-white/[.05]">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[.14em] text-white/35"><span>Legal insight 0{i + 1}</span><span>Reviewed {new Date(p.updated).toLocaleDateString("en-IN", { dateStyle: "medium" })}</span></div>
            <h3 className="mt-8 max-w-xl font-serif text-2xl leading-tight text-[#fff8eb]">{p.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">{p.description}</p>
            <span className="mt-7 flex items-center text-xs font-semibold text-[#d9b96e]">Read the resource <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
          </a>
        ))}
      </div>
      <a className="mt-5 flex items-center text-sm text-white/55 sm:hidden" href="/insights">View all <ArrowUpRight className="ml-2 h-4 w-4" /></a>
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
    <section className="section-pad">
      <div className="grid gap-7 lg:grid-cols-[.65fr_1.35fr]">
        <div><p className="section-kicker">Before you enquire</p><h2 className="section-title mt-3">Frequently asked questions.</h2></div>
        <div className="divide-y divide-white/[.08] border-y border-white/[.08]">
        {faqs.map((f, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-lg text-[#fff8eb]"><span>{f.q}</span><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-sm text-[#d9b96e] transition group-open:rotate-45">+</span></summary>
            <p className="max-w-3xl pb-1 pr-10 pt-3 text-sm leading-7 text-white/55">{f.a}</p>
          </details>
        ))}
        </div>
      </div>
    </section>
  );
}

function LinksCloud() {
  return (
    <section className="border-t border-white/[.08] py-8">
      <h2 className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/35">Explore the practice</h2>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/50">
        {SITE_LINKS.map((l, i) => (
          <a key={i} className="transition hover:text-white" href={l.href}>{l.label}</a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="grid overflow-hidden rounded-[2rem] border border-white/[.08] bg-[#0b1a20] lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="p-7 sm:p-10 lg:p-12">
          <p className="section-kicker">Professional profile</p>
          <h2 className="section-title mt-3">About the Advocate.</h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60">
  Adv. {ADVOCATE.fullName} (Enrl. {ADVOCATE.enrollment}) practices across Maharashtra with appearances before
  District Courts, Tribunals, and the Bombay High Court. The practice blends courtroom advocacy with
  robust drafting—focusing on litigation strategy, precise pleadings, and practical, risk-aware advice.
  As an advocate/lawyer (vakil) based in Baramati and appearing before the Bombay High Court, I assist clients
  across Maharashtra in civil, criminal, real estate/RERA, and trust & society matters.
</p>

          <div className="mt-8 grid gap-3 text-sm text-white/70">
            <div className="rounded-2xl border border-white/[.08] bg-white/[.03] p-5">
              <div className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#d9b96e]">Education</div>
              <ul className="mt-3 space-y-2 text-white/65">
                {ADVOCATE.qualifications.map((qualification) => (
                  <li key={qualification.degree}>
                    {qualification.degree}
                    {qualification.institution ? ` — ${qualification.institution}` : ""}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#d9b96e]/15 bg-[#d9b96e]/[.05] p-5">
              <div className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#d9b96e]">Accredited mediator training</div>
              <p className="mt-3 text-sm leading-6 text-white/65">{ADVOCATE.mediationCredential.programme} by {ADVOCATE.mediationCredential.institution}; {ADVOCATE.mediationCredential.qualityAssurance.toLowerCase()}; {ADVOCATE.mediationCredential.period}.</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/55"><a href={ADVOCATE.linkedIn} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn profile ↗</a><a href={ADVOCATE.googleBusinessProfile} target="_blank" rel="noreferrer" className="transition hover:text-white">Google Business Profile ↗</a><a href="/about" className="transition hover:text-white">Full profile →</a></div>
          </div>
          </div>
        </div>

        <div className="relative min-h-[480px] overflow-hidden border-t border-white/[.08] bg-[#10262c] lg:border-l lg:border-t-0">
          <Image src={ADVOCATE.photo} alt={ADVOCATE.name} width={900} height={1100} sizes="(max-width: 1024px) 100vw, 45vw" className="absolute inset-0 h-full w-full object-cover object-top opacity-80 saturate-[.75]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081419] via-[#081419]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
            <p className="text-[10px] uppercase tracking-[.16em] text-[#e0c078]">Practice base</p>
            <p className="mt-2 max-w-md font-serif text-2xl leading-tight text-white">Baramati, with appearances before courts and tribunals across Maharashtra.</p>
            <div className="mt-5 grid gap-2 text-xs text-white/65"><span className="flex gap-2"><Phone className="h-4 w-4 text-[#d9b96e]" />{ADVOCATE.phone}</span><span className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-[#d9b96e]" />{ADVOCATE.address}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (

    <section id="contact" className="section-pad pb-10">
      <div className="overflow-hidden rounded-[2rem] border border-white/[.08] bg-gradient-to-br from-[#11242a] to-[#081419] p-6 sm:p-9 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-12">
        <div>
          <p className="section-kicker">Consultation</p>
          <h2 className="section-title mt-3">Tell us what requires attention.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/55">Share a short, non-confidential outline, the current stage and any known deadline. An enquiry does not create a professional relationship.</p>
          <div className="mt-8 space-y-3 text-sm text-white/65"><a href={`tel:${ADVOCATE.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition hover:text-white"><span className="grid h-9 w-9 place-items-center rounded-full border border-white/10"><Phone className="h-4 w-4 text-[#d9b96e]" /></span>{ADVOCATE.phone}</a><a href={`mailto:${ADVOCATE.email}`} className="flex items-center gap-3 transition hover:text-white"><span className="grid h-9 w-9 place-items-center rounded-full border border-white/10"><Mail className="h-4 w-4 text-[#d9b96e]" /></span>{ADVOCATE.email}</a></div>
          <div className="mt-8 rounded-2xl border border-white/[.07] bg-white/[.025] p-5 text-xs leading-6 text-white/45"><Shield className="mb-3 h-5 w-5 text-[#d9b96e]" />Please do not send privileged communications, original documents, identity documents or sensitive evidence before conflict and engagement checks.</div>
        </div>
        <Card className="rounded-3xl border-white/[.09] bg-white/[.04] shadow-2xl">
          <CardContent className="p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4"><h3 className="font-serif text-2xl text-[#fff8eb]">Request a consultation</h3><MessageSquare className="h-5 w-5 text-[#d9b96e]" /></div>
            <p className="mt-2 text-xs leading-5 text-white/50">Fields marked by the browser as required must be completed.</p>
            <form className="mt-4 grid gap-3" method="POST" action={FORM_ACTION}>
              {/* Honeypot field to reduce spam */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Do not fill this out:
                  <input type="text" name="company" tabIndex="-1" autoComplete="off" />
                </label>
              </div>

              <label className="text-xs text-white/65">Full name
                <Input required name="name" autoComplete="name" className="mt-2 w-full rounded-xl border-white/10 bg-black/15 px-4 py-3" />
              </label>
              <label className="text-xs text-white/65">Email
                <Input required type="email" name="email" autoComplete="email" className="mt-2 w-full rounded-xl border-white/10 bg-black/15 px-4 py-3" />
              </label>
              <label className="text-xs text-white/65">Phone (optional)
                <Input name="phone" type="tel" autoComplete="tel" className="mt-2 w-full rounded-xl border-white/10 bg-black/15 px-4 py-3" />
              </label>
              <label className="text-xs text-white/65">Type of assistance
                <select required name="service" defaultValue="" className="mt-2 w-full rounded-xl border border-white/10 bg-black/15 px-4 py-3 text-white">
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
              <label className="text-xs text-white/65">Short, non-confidential outline
                <Textarea required name="message" rows={4} className="mt-2 w-full rounded-xl border-white/10 bg-black/15 px-4 py-3" placeholder="Current stage, city or forum, and next known deadline" />
              </label>
              <label className="flex items-start gap-3 text-xs leading-5 text-white/65">
                <input required type="checkbox" name="privacy_consent" value="yes" className="mt-1" />
                <span>I have read the <a href="/privacy" className="underline hover:text-white">privacy notice</a> and understand the limits of an initial enquiry.</span>
              </label>

              {/* Optional metadata */}
              <input type="hidden" name="_subject" value="New website enquiry" />
              <input type="hidden" name="_format" value="plain" />
              <input type="hidden" name="_next" value={`${SITE_URL}/#thank-you`} />

              <Button type="submit" className="mt-1 rounded-full border-[#ead8ad] bg-[#ead8ad] px-5 py-3 font-semibold text-[#15232a] transition hover:bg-white">Send consultation request</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="mt-7 flex flex-col justify-between gap-4 border-t border-white/[.08] pt-6 text-xs text-white/40 sm:flex-row"><p>As per Bar Council of India rules, this website provides general information and does not solicit work or advertise.</p><div className="flex flex-wrap gap-4"><a href={ADVOCATE.googleBusinessProfile} target="_blank" rel="noreferrer" className="hover:text-white">Google Business Profile ↗</a><a href="/professional-notice" className="hover:text-white">Professional notice →</a></div></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[.08] bg-[#051014]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-9 text-sm text-white/45 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-[#fff8eb]">
            <Image src={ADVOCATE.logo} alt="" width={32} height={32} className="h-8 w-8 rounded-lg border border-[#d9b96e]/20 bg-[#f7f2e8] p-1" />
            <span className="font-serif">{ADVOCATE.name}</span>
          </div>
          <div className="mt-2 max-w-xl text-xs leading-5">Enrl. {ADVOCATE.enrollment} · {ADVOCATE.practice}</div>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
          <a href="/mediation" className="transition hover:text-white">Mediation</a>
          <a href="/employment-health-check" className="transition hover:text-white">Employer Check</a>
          <a href="/about" className="transition hover:text-white">About</a>
          <a href="/privacy" className="transition hover:text-white">Privacy</a>
          <a href="/professional-notice" className="transition hover:text-white">Professional Notice</a>
          <a href={`tel:${ADVOCATE.phone.replace(/\s/g, "")}`} className="flex items-center gap-1 transition hover:text-white"><Phone className="h-3.5 w-3.5" /> Call</a>
        </nav>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${ADVOCATE.whatsapp}`}
      className="fixed bottom-5 right-5 z-30 grid h-[52px] w-[52px] place-items-center rounded-full border border-[#d9b96e]/30 bg-[#f3e7cd] p-3.5 text-[#17232a] shadow-2xl transition hover:scale-105 hover:bg-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </a>
  );
}

function Disclaimer({ onAccept }) {
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="disclaimer-title" className="fixed inset-0 z-50 grid place-items-center bg-[#03080b]/85 p-4 backdrop-blur-lg">
      <Card className="w-full max-w-xl rounded-[2rem] border-[#d9b96e]/15 bg-[#0c1a20] shadow-[0_30px_100px_rgba(0,0,0,.55)]">
        <CardContent className="p-7 text-sm sm:p-9">
          <div className="flex items-center gap-3 text-[#d9b96e]"><Scale className="h-5 w-5" /><span className="text-[10px] font-semibold uppercase tracking-[.18em]">Professional notice</span></div>
          <h2 id="disclaimer-title" className="mt-5 font-serif text-3xl text-[#fff8eb]">Voluntary access to legal information.</h2>
          <p className="mt-4 leading-7 text-white/65">By clicking “I Agree”, you acknowledge that you wish to access this website to obtain information at your own volition and there has been no solicitation, advertisement, or inducement by the advocate or the chambers.</p>
          <ul className="mt-4 space-y-2 text-xs leading-6 text-white/50">
            <li>This site is for general information only and does not constitute legal advice.</li>
            <li>No lawyer–client relationship is created by accessing or using this site.</li>
            <li>No guarantees of outcomes are made.</li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button onClick={onAccept} className="rounded-full border-[#ead8ad] bg-[#ead8ad] px-5 py-3 font-semibold text-[#15232a] hover:bg-white">I Agree & Continue</Button>
            <a href="https://www.barcouncilofindia.org/info/bci-rules" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-white/65 transition hover:bg-white/[.06] hover:text-white">Read BCI rules</a>
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
