import PracticePage from "../../_components/PracticePage";
import { createPageMetadata } from "../../../lib/site";

const data = {
  path: "/mediation/cross-border",
  parent: { href: "/mediation", label: "Mediation" },
  shortTitle: "Cross-border mediation",
  eyebrow: "International and multi-jurisdiction process planning",
  title: "Cross-border mediation involving India",
  description: "Cross-border mediation process planning for commercial, family, property and payment disputes involving India, different countries or multiple legal systems.",
  areaServed: "India and cross-border matters",
  intro: [
    "Cross-border mediation adds practical and legal layers to the ordinary process: time zones, language, currency, authority, sanctions or payment restrictions, data transfer, tax, governing law and enforceability. These issues should be identified before participants spend a full session negotiating terms that may be difficult to implement.",
    "The mediator remains neutral and does not give country-specific advice to either participant. Independent counsel may be needed in each relevant jurisdiction, particularly before settlement language is finalised or assets, companies, property or court proceedings are affected.",
  ],
  services: [
    { title: "Process and participant mapping", text: "Identify parties, beneficial interests, advisers, decision-makers, languages, time zones and countries whose law or public policy may matter." },
    { title: "Document and interpretation planning", text: "Agree working language, translated or bilingual documents, interpreter role, version control and how meaning differences will be resolved." },
    { title: "Settlement implementation planning", text: "Test payment currency, banking route, approvals, tax, releases, court steps, asset transfers and realistic completion dates before terms are signed." },
    { title: "Counsel coordination", text: "Create defined windows for participants to take independent advice without converting the neutral process into adversarial correspondence." },
  ],
  matters: ["International supply, service and payment disputes", "Business owners, partners or shareholders in different countries", "Family, inheritance or property issues involving overseas participants", "Remote performance, technology and professional service disputes", "Disputes with parallel court, arbitration or regulatory steps", "Settlement implementation involving foreign currency, assets or entities"],
  documents: ["Full legal names, entity details and countries of residence/incorporation", "Contracts, governing-law and dispute-resolution clauses", "A procedural list of pending cases, arbitrations or deadlines", "Payment, currency, asset and implementation information", "Authority documents and internal approval conditions", "Translation, interpretation and accessibility requirements"],
  process: ["Map jurisdictions, participants, deadlines and implementation risks.", "Complete enhanced identity, conflict and independence checks.", "Agree language, technology, confidentiality, fee and adviser protocols.", "Mediate with planned independent review of any settlement text."],
  scopeNote: "India signed the United Nations Convention on International Settlement Agreements Resulting from Mediation (Singapore Convention) on 7 August 2019, but UNCITRAL's current status table does not list India as having ratified it. Treaty status is not a substitute for country-specific enforcement analysis. The Mediation Act, 2023 must also be read with the provisions and commencement notifications in force at the relevant time.",
  sources: [
    { label: "UNCITRAL: Singapore Convention status", href: "https://uncitral.un.org/en/texts/mediation/conventions/international_settlement_agreements/status" },
    { label: "India Code: Mediation Act, 2023", href: "https://www.indiacode.nic.in/indiacode/handle/123456789/19637?col=123456789%2F1362&view_type=search" },
    { label: "Department of Legal Affairs: commencement notification dated 9 October 2023", href: "https://legalaffairs.gov.in/actsrulespolicies/notification-enforcement-dated-09102023-under-mediation-act-2023" },
  ],
  faqs: [
    { question: "Will a cross-border settlement automatically be enforceable everywhere?", answer: "No. Enforceability depends on the settlement form, applicable domestic law, treaty status, forum, subject matter and country where enforcement may be needed. Independent advice should be obtained before signing." },
    { question: "Can the process be bilingual?", answer: "Yes, if the working languages, interpreter role, document versions and authoritative settlement language are agreed in advance. Translation time and cost should be included in the process plan." },
    { question: "How are fees handled across countries?", answer: "The written terms can address currency, taxes, bank charges, payment allocation, session blocks and cancellation. Payment arrangements must comply with applicable banking and regulatory requirements." },
  ],
};

export const metadata = createPageMetadata({ title: "Cross-Border Mediation Involving India | Kothari Vakil", description: data.description, path: data.path });
export default function Page() { return <PracticePage data={data} />; }
