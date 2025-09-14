'use client';
import React, { useState, useEffect } from "react";
import { Calendar, Gavel, Scale, Phone, Mail, MapPin, ChevronRight, Shield, Users, MessageSquare, FileText, Building2, Landmark, CheckCircle, Star, Infinity } from "lucide-react";

// NOTE: Using plain <img> tags instead of next/image to avoid sandbox/runtime issues.
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

// --- Config (edit these) ---
// If using Formspree, set your form ID here (e.g., "f/abcdwxyz")
const FORMSPREE_ID = "f/xblaejln";

const ADVOCATE = {
  name: "Adv. Sahil S. Kothari",
  enrollment: "MAH/3210/2024",
  phone: "+91 9673931166",
  email: "thesahilkothari@gmail.com",
  address: "Shop No. 14, Vardhaman Capital, Suryanagari, Baramati - 413133, Dist- Pune",
  practice: "District & Sessions Courts, Tribunals across Maharashtra, and Bombay High Court",
  whatsapp: "919673931166", // numeric international format without +
  logo: "/logo-mark.svg", // place your logo in /public/logo-mark.svg
  photo: "/ssk-photo.png", // place your portrait in /public/ssk-photo.png
  domain: "https://www.kotharivakil.in",
  ogImage: "/og.png" // optional: add a 1200x630 image at /public/og.png
};

const PRACTICE_AREAS = [
  { icon: <Gavel className="w-5 h-5" />, title: "Civil Litigation", points: ["Property & Tenancy", "Contracts & Recovery", "Injunctions"] },
  { icon: <Scale className="w-5 h-5" />, title: "Criminal Matters", points: ["Bail & Anticipatory Bail", "Quashing & Revisions", "Trials"] },
  { icon: <Building2 className="w-5 h-5" />, title: "Real Estate & Development", points: ["Development Agreements", "RERA/MAHARERA", "Municipal & MRTP"] },
  { icon: <Landmark className="w-5 h-5" />, title: "Trusts & Societies", points: ["BPT Act Compliance", "Societies Act", "Governance & Disputes"] },
  { icon: <Users className="w-5 h-5" />, title: "Family & Matrimonial", points: ["Divorce & Custody", "Maintenance", "Domestic Violence"] },
  { icon: <FileText className="w-5 h-5" />, title: "Drafting & Advisory", points: ["Agreements & Notices", "Due Diligence", "Opinions"] },
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

const TESTIMONIALS = [
  { name: "Client from Pune", text: "Clear strategy, timely updates, and a professional approach. Highly recommended.", rating: 5 },
  { name: "Entrepreneur, Baramati", text: "Drafted and negotiated our development documentation impeccably.", rating: 5 },
  { name: "Litigant, Ahmednagar", text: "Transparent advice and strong courtroom representation.", rating: 5 },
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

  // simple runtime checks ("tests") to help validate asset paths in different envs
  useEffect(() => {
    const img = new window.Image();
    img.onload = () => console.info("[check] portrait loaded:", ADVOCATE.photo);
    img.onerror = () => console.warn("[check] portrait NOT found at:", ADVOCATE.photo);
    img.src = ADVOCATE.photo + "?v=2"; // cache-bust
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <HeadMeta />
      {!consented && <Disclaimer onAccept={handleConsent} />}
      <Header sticky={sticky} />
      <main className="mx-auto max-w-6xl px-4">
        <Hero />
        <USPStrip />
        <PracticeAreas />
        <CourtsWeAppear />
        <WhyUs />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <SchemaOrg />
      <CookieHint />
    </div>
  );
}

function HeadMeta() {
  useEffect(() => {
    const base = ADVOCATE.domain || (typeof window !== 'undefined' ? window.location.origin : '');
    const currentUrl = typeof window !== 'undefined' ? (base + window.location.pathname) : base;

    // Title
    document.title = `Kothari Vakil | ${ADVOCATE.name} — ${ADVOCATE.practice}`;

    // Helper to add/update tags uniquely
    const upsert = (selector, tag, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) { el = document.createElement(tag); document.head.appendChild(el); }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    };

    // Canonical & hreflang
    upsert('link[rel="canonical"]', 'link', { rel: 'canonical', href: currentUrl });
    upsert('link[rel="alternate"][hreflang="x-default"]', 'link', { rel: 'alternate', href: currentUrl, hreflang: 'x-default' });
    upsert('link[rel="alternate"][hreflang="en-IN"]', 'link', { rel: 'alternate', href: currentUrl, hreflang: 'en-IN' });

    // Basic meta
    upsert('meta[name="viewport"]', 'meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' });
    upsert('meta[name="robots"]', 'meta', { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' });
    upsert('meta[name="description"]', 'meta', { name: 'description', content: `${ADVOCATE.name} — ${ADVOCATE.practice}. Strategic litigation, precise drafting, and practical advice.` });
    upsert('meta[name="theme-color"]', 'meta', { name: 'theme-color', content: '#0B0F14' });
    upsert('meta[name="keywords"]', 'meta', { name: 'keywords', content: 'advocate, lawyer, vakil, lawyer from Baramati, Baramati advocate, high court advocate, Bombay High Court lawyer, Maharashtra lawyer, legal services, civil litigation, criminal law, real estate, RERA, trusts and societies, mediation, accredited mediator' });


    // Open Graph
    upsert('meta[property="og:site_name"]', 'meta', { property: 'og:site_name', content: 'Kothari Law Chambers' });
    upsert('meta[property="og:title"]', 'meta', { property: 'og:title', content: `Kothari Vakil | ${ADVOCATE.name} — Law Chambers` });
    upsert('meta[property="og:description"]', 'meta', { property: 'og:description', content: `Advocate in Maharashtra & Bombay High Court. Call ${ADVOCATE.phone}.` });
    upsert('meta[property="og:type"]', 'meta', { property: 'og:type', content: 'website' });
    upsert('meta[property="og:url"]', 'meta', { property: 'og:url', content: currentUrl });
    if (ADVOCATE.ogImage) {
      upsert('meta[property="og:image"]', 'meta', { property: 'og:image', content: ADVOCATE.ogImage });
    }

    // Twitter Card
    upsert('meta[name="twitter:card"]', 'meta', { name: 'twitter:card', content: 'summary_large_image' });
    upsert('meta[name="twitter:title"]', 'meta', { name: 'twitter:title', content: `Kothari Vakil | ${ADVOCATE.name} — Law Chambers` });
    upsert('meta[name="twitter:description"]', 'meta', { name: 'twitter:description', content: `Advocate in Maharashtra & Bombay High Court. Call ${ADVOCATE.phone}.` });
    if (ADVOCATE.ogImage) {
      upsert('meta[name="twitter:image"]', 'meta', { name: 'twitter:image', content: ADVOCATE.ogImage });
    }

    // Favicons (assumes you will add these in /public)
    upsert('link[rel="icon"]', 'link', { rel: 'icon', href: '/favicon.ico' });
  }, []);
  return null;
}

function Header({ sticky }) {
  return (
    <header className={`w-full top-0 z-40 transition-all ${sticky ? "sticky bg-[#0B0F14]/80 backdrop-blur border-b border-white/10" : "bg-transparent"}`}>
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={`${ADVOCATE.logo}?v=2`} alt="Logo" width={36} height={36} className="w-9 h-9 rounded-2xl object-cover border border-white/10" onError={(e)=>{e.currentTarget.style.display='none'}} />
          <div>
            <div className="font-semibold leading-tight">{ADVOCATE.name}</div>
            <div className="text-xs text-white/60">Enr. {ADVOCATE.enrollment}</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#practice" className="hover:text-white">Practice</a>
          <a href="#courts" className="hover:text-white">Courts</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a href={`tel:${ADVOCATE.phone.replace(/\s/g, "")}`} className="ml-4"><Button className="rounded-2xl">Call Now</Button></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-20 md:pt-28 pb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Practical, precise and proactive legal counsel.</h1>
          <p className="mt-4 text-white/80">Representing clients before District Courts, Tribunals across Maharashtra, and the Bombay High Court. Focused on clear strategy, meticulous drafting, and effective advocacy.</p>
          <p className="mt-2 text-white/70 text-sm">Also known locally as <strong>Kothari Vakil</strong> — English / Marathi (मराठी) / Hindi (हिन्दी).</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact"><Button className="rounded-2xl">Consult Now <ChevronRight className="ml-1 w-4 h-4" /></Button></a>
            <a href={`mailto:${ADVOCATE.email}`} className="inline-block"><Button className="rounded-2xl border-white/30">Email</Button></a>
          </div>
          <div className="mt-6 flex items-center gap-5 text-white/70 text-sm">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Ethical, confidential advice</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Quick scheduling</div>
          </div>
        </div>
        <div className="relative">
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <img src={`${ADVOCATE.photo}?v=2`} alt={`${ADVOCATE.name}`} width={448} height={448} className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl border border-white/10 shadow-2xl bg-gradient-to-br from-white/10 to-white/0" onError={(e)=>{e.currentTarget.style.display='none'}} />
              <img src={`${ADVOCATE.logo}?v=2`} alt="Logo" width={40} height={40} className="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl border border-white/10 bg-white/90 p-1" onError={(e)=>{e.currentTarget.style.display='none'}} />
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
                <div className="text-white/70 text-xs">Quick Enquiry</div>
                <div className="mt-2 grid gap-2">
                  <Input placeholder="Your Name" className="bg-white/10 border-white/10" />
                  <Input placeholder="Phone / Email" className="bg-white/10 border-white/10" />
                  <Textarea placeholder="Brief about your matter (no confidential details here)" className="bg-white/10 border-white/10" rows={3} />
                  <a href="#contact"><Button className="rounded-2xl w-full">Send Enquiry</Button></a>
                </div>
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
                <div className="font-medium">{p.title}</div>
              </div>
              <ul className="mt-3 text-sm text-white/80 list-disc list-inside">
                {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
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
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: <Gavel className="w-5 h-5" />, title: "Litigation-first mindset", desc: "Strategy tailored to facts, law, and forum." },
    { icon: <FileText className="w-5 h-5" />, title: "Strong drafting", desc: "Clear pleadings, precise agreements, and persuasive submissions." },
    { icon: <Shield className="w-5 h-5" />, title: "Integrity", desc: "Candid advice with confidentiality and client interest foremost." },
  ];
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold">Why Clients Choose Us</h2>
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

function StarRow({ n }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < n ? '' : 'opacity-30'}`} />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold">Client Feedback</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <Card key={i} className="bg-white/5 border-white/10 rounded-2xl">
            <CardContent className="p-5">
              <StarRow n={t.rating} />
              <p className="mt-3 text-white/90 text-sm">“{t.text}”</p>
              <div className="mt-4 text-xs text-white/60">— {t.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-xs text-white/50 mt-3">Disclaimer: Testimonials do not constitute a guarantee of specific outcomes.</p>
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
  {ADVOCATE.name} (Enrl. {ADVOCATE.enrollment}) practices across Maharashtra with appearances before
  District Courts, Tribunals, and the Bombay High Court. The practice blends courtroom advocacy with
  robust drafting—focusing on litigation strategy, precise pleadings, and pragmatic, results-oriented advice.
  As an advocate/lawyer (vakil) based in Baramati and appearing before the Bombay High Court, I assist clients
  across Maharashtra in civil, criminal, real estate/RERA, and trust & society matters.
</p>

          <div className="mt-6 grid gap-3 text-sm text-white/80">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href={`tel:${ADVOCATE.phone.split(' ').join('')}`} className="hover:underline">{ADVOCATE.phone}</a></div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href={`mailto:${ADVOCATE.email}`} className="hover:underline">{ADVOCATE.email}</a></div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{ADVOCATE.address}</div>
            <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-sm bg-white/20" />Languages: English • Marathi (मराठी) • Hindi (हिन्दी)</div>
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
                <li>Trusts & Societies governance, BPT Act & Societies Registration Act</li>
                <li>Family & criminal matters with BNSS/BNSA & Bharatiya Sakshya Adhiniyam alignment</li>
              </ul>
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
            <p className="text-sm text-white/70 mt-1">This form sends via Formspree to your inbox.</p>
            <form className="mt-4 grid gap-3" method="POST" action={`https://formspree.io/${FORMSPREE_ID}`}>
              {/* Honeypot field to reduce spam */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Do not fill this out:
                  <input type="text" name="company" tabIndex="-1" autoComplete="off" />
                </label>
              </div>

              {/* Real fields */}
              <Input required name="name" placeholder="Full Name" className="bg-white/10 border-white/10" />
              <Input required type="email" name="email" placeholder="Email" className="bg-white/10 border-white/10" />
              <Input name="phone" placeholder="Phone (optional)" className="bg-white/10 border-white/10" />
              <Textarea required name="message" rows={4} placeholder="Briefly describe your matter (avoid confidential info)" className="bg-white/10 border-white/10" />

              {/* Optional metadata */}
              <input type="hidden" name="_subject" value="New website enquiry" />
              <input type="hidden" name="_format" value="plain" />
              <input type="hidden" name="_next" value={`${ADVOCATE.domain}/#thank-you`} />

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
              <div className="mt-3 text-white/60 text-xs">Consultations by prior appointment. Video consultations available.</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 rounded-2xl overflow-hidden">

            <CardContent className="p-0">

              <div className="w-full aspect-[16/10]">

                <iframe

                  title="Map to office"

                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDcFvWL-7q6FTZcFJiKJEipqFs5ZKtK-jw&q=${encodeURIComponent(ADVOCATE.address)}`}

                  loading="lazy"

                  referrerPolicy="no-referrer-when-downgrade"

                  className="w-full h-full border-0"

                />

              </div>

              <div className="p-3 text-xs text-white/70 flex items-center justify-between">

                <span>Find us on Google Maps</span>

                <a className="underline hover:text-white" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADVOCATE.address)}`}>Open in Google Maps</a>

              </div>

            </CardContent>

          </Card>

          <Card className="bg-white/5 border-white/10 rounded-2xl">

            <CardContent className="p-5 text-xs text-white/60 leading-relaxed">
              <div className="text-white">Professional Notice</div>
              <p className="mt-2">As per Bar Council of India rules, this website provides general information and does not solicit work or advertise. Visiting or contacting does not create a lawyer–client relationship. No guarantees of outcomes are made.</p>
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
            <img src={`${ADVOCATE.logo}?v=2`} alt="Logo" width={20} height={20} className="w-5 h-5 rounded-md border border-white/10" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <span>{ADVOCATE.name}</span>
          </div>
          <div>Enrl. {ADVOCATE.enrollment} • {ADVOCATE.practice}</div>
        </div>
        <div className="flex gap-4 items-center">
          <a href={`tel:${ADVOCATE.phone.replace(/\s/g, "")}`} className="hover:underline flex items-center gap-1"><Phone className="w-4 h-4" /> Call</a>
          <a href={`mailto:${ADVOCATE.email}`} className="hover:underline flex items-center gap-1"><Mail className="w-4 h-4" /> Email</a>
        </div>
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

function CookieHint() {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const s = localStorage.getItem("cookie_hint_seen");
    setSeen(!!s);
  }, []);
  if (seen) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl m-3 rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-4 flex items-center justify-between">
        <div className="text-xs text-white/80">We use basic cookies for site functionality. <span className="text-white/60">No tracking without consent.</span></div>
        <Button className="rounded-xl" onClick={() => { localStorage.setItem("cookie_hint_seen", "yes"); setSeen(true); }}>OK</Button>
      </div>
    </div>
  );
}

function Disclaimer({ onAccept }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur grid place-items-center p-4">
      <Card className="max-w-xl w-full rounded-3xl bg-[#0B0F14] border-white/10">
        <CardContent className="p-6 text-sm">
          <h3 className="text-lg font-semibold">Disclaimer (Bar Council of India)</h3>
          <p className="mt-3 text-white/80">By clicking “I Agree”, you acknowledge that you wish to access this website to obtain information at your own volition and there has been no solicitation, advertisement, or inducement by the advocate or the chambers.</p>
          <ul className="list-disc list-inside text-white/70 mt-3">
            <li>This site is for general information only and does not constitute legal advice.</li>
            <li>No lawyer–client relationship is created by accessing or using this site.</li>
            <li>No guarantees of outcomes are made.</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Button onClick={onAccept} className="rounded-2xl">I Agree</Button>
            <a href="https://www.barcouncilofindia.org" target="_blank" rel="noreferrer">
              <Button className="rounded-2xl border-white/30">Learn More</Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SchemaOrg() {
  useEffect(() => {
    const base = ADVOCATE.domain || (typeof window !== 'undefined' ? window.location.origin : '');
    const url = typeof window !== 'undefined' ? (base + window.location.pathname) : base;

    const scripts = [];

    // LegalService schema
    scripts.push({
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: ADVOCATE.name,
      areaServed: "Maharashtra, India",
      address: {
        "@type": "PostalAddress",
        streetAddress: ADVOCATE.address,
        addressRegion: "Maharashtra",
        addressCountry: "IN"
      },
      email: ADVOCATE.email,
      telephone: ADVOCATE.phone,
      url,
      image: ADVOCATE.ogImage || undefined,
      alternateName: ["Kothari Vakil","Advocate Sahil Kothari","Lawyer from Baramati","High Court Advocate"],
      sameAs: [`https://wa.me/${ADVOCATE.whatsapp}`]
    });

    // WebSite schema (basic)
    scripts.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Kothari Law Chambers",
      url: base,
      publisher: { "@type": "Organization", name: ADVOCATE.name }
    });

    // Breadcrumbs (simple)
    scripts.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base }
      ]
    });

    // FAQ (enhanced visibility in SERP)
    scripts.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you appear in the Bombay High Court?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Appearances include matters before the Bombay High Court along with District & Sessions Courts and Tribunals across Maharashtra." }
        },
        {
          "@type": "Question",
          name: "How can I schedule a consultation?",
          acceptedAnswer: { "@type": "Answer", text: "Use the contact form or call the listed number to schedule an appointment. Video consultations are available by prior booking." }
        }
      ]
    });

    // Inject JSON-LD
    scripts.forEach(obj => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }, []);
  return null;
}
