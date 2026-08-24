import PracticePage from "../../_components/PracticePage";
import { createPageMetadata } from "../../../lib/site";

const data = {
  path: "/mediation/commercial-business",
  parent: { href: "/mediation", label: "Mediation" },
  shortTitle: "Commercial & business",
  eyebrow: "Neutral commercial dispute resolution",
  title: "Commercial & business mediation",
  description: "Neutral mediation for contract, payment, partnership, shareholder, vendor and continuing-business disputes in Maharashtra or online.",
  intro: [
    "Commercial mediation can create a confidential setting in which decision-makers examine legal risk, cash flow, performance obligations and future business needs together. It may be useful before proceedings, while a court or arbitration is pending, or when the parties need a narrow issue resolved without ending the relationship.",
    "The mediator does not decide liability or advise either side. The process is designed around informed participation, authority to negotiate and a realistic understanding of the documents, people and implementation steps behind any proposed settlement.",
  ],
  services: [
    { title: "Contract and payment disputes", text: "Map the disputed obligations, invoices, performance history, notices and available commercial options before testing proposals in joint and private meetings." },
    { title: "Partnership and shareholder issues", text: "Structure discussions about governance, information rights, valuation assumptions, exit, buy-out, future control or an agreed operating protocol." },
    { title: "Vendor and supply relationships", text: "Address quality, delivery, pricing, credits, replacement performance and future safeguards where preserving supply continuity has value." },
    { title: "Multi-party or document-heavy matters", text: "Use issue lists, document bundles and sequenced sessions so participants can focus on decisions instead of repeating the entire dispute history." },
  ],
  matters: ["Unpaid invoices, retention amounts and account reconciliation", "Termination, delay, quality and service-level disputes", "Partnership, shareholder and management deadlock", "Distribution, franchise, vendor and supply-chain disagreements", "Confidentiality, intellectual property and non-solicitation issues", "Disputes where proceedings are pending but settlement remains possible"],
  documents: ["Signed contracts, amendments, purchase orders and standard terms", "Invoices, payment ledger and reconciliation statement", "Notices, material email chains and meeting records", "A short chronology identifying decision points and deadlines", "Existing pleadings, orders or arbitration documents, if applicable", "A list of persons with authority to approve settlement terms"],
  process: ["Preliminary suitability, participant and conflict screening.", "Written process, confidentiality, authority and fee terms.", "Focused summaries and a proportionate document set.", "Joint/private sessions followed by careful recording of any agreement."],
  scopeNote: "Commercial mediation does not suspend limitation, court, arbitration or contractual deadlines unless the applicable law or a valid order or agreement provides otherwise. Participants should take independent advice on legal, tax, accounting and implementation consequences before signing settlement terms.",
  faqs: [
    { question: "Can mediation happen while a case or arbitration is pending?", answer: "Often yes, subject to the applicable procedure, orders and deadlines. The parties and their advisers should ensure that mediation scheduling does not cause a missed filing, hearing or limitation requirement." },
    { question: "Who should attend?", answer: "People with sufficient knowledge and genuine settlement authority should attend. For an entity, authority and any internal approval conditions should be clarified before the session." },
    { question: "Can counsel participate?", answer: "Yes. The participants may agree how counsel, accountants, technical experts or support persons will take part. The mediator remains neutral and does not replace independent advice." },
  ],
};

export const metadata = createPageMetadata({ title: "Commercial & Business Mediation | Maharashtra & Online", description: data.description, path: data.path });
export default function Page() { return <PracticePage data={data} />; }
