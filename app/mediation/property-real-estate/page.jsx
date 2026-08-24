import PracticePage from "../../_components/PracticePage";
import { createPageMetadata } from "../../../lib/site";

const data = {
  path: "/mediation/property-real-estate",
  parent: { href: "/mediation", label: "Mediation" },
  shortTitle: "Property & real estate",
  eyebrow: "Neutral property dispute resolution",
  title: "Property & real-estate mediation",
  description: "Mediation for co-owner, family property, possession, development, construction, society and project disputes in Maharashtra or online.",
  intro: [
    "Property disputes often combine legal rights with possession, access, valuation, financing, approvals, family history or ongoing project relationships. Mediation can separate these issues and help participants test arrangements that a single court order may not be able to design in detail.",
    "A useful process begins with an agreed property description, participant list and document set. Neutrality and role clarity are especially important where the mediator is also an advocate: a neutral mediator cannot advise one participant against another in the same matter.",
  ],
  services: [
    { title: "Co-owner and family property", text: "Structure discussions on use, access, expenses, valuation, partition options, sale, release, occupation and staged implementation." },
    { title: "Development and construction", text: "Address milestones, approvals, specifications, delay, payment, handover, defects and workable completion or exit arrangements." },
    { title: "Possession and boundary issues", text: "Clarify maps, title records, physical use, access and interim conduct while participants explore a durable resolution." },
    { title: "Project and society disputes", text: "Organise multiple interests, statutory constraints, common-area issues, redevelopment terms or documented compliance steps." },
  ],
  matters: ["Co-ownership, partition, inheritance and occupation", "Development agreements and landowner-developer issues", "Construction delay, variation, defects and payment", "Possession, access, easement and boundary disagreements", "Housing society, redevelopment and member-related issues", "Flat purchaser, promoter and project implementation disputes"],
  documents: ["Property card, 7/12 extract, mutation entries and title documents", "Registered agreements, development documents and powers of attorney", "Sanctioned plans, permissions and relevant project disclosures", "Valuation material, payment records and tax receipts", "Site photographs, measurements and a clear property description", "Pleadings, notices and orders if proceedings are pending"],
  process: ["Identify the property, participants and immediate protective issues.", "Complete conflicts, authority and process documentation.", "Agree a focused title, project and financial document set.", "Test settlement options and record implementation steps precisely."],
  scopeNote: "Mediation does not itself cure title defects, replace compulsory registration, bind a non-participant or substitute for statutory permissions. Any settlement involving transfer, release, development rights, tax, stamp duty or registration should be documented with independent legal and financial advice.",
  faqs: [
    { question: "Can a property settlement be oral?", answer: "Property settlements often require careful written instruments and may require stamping, registration, consent or authority approvals. Participants should obtain independent advice on the correct form before treating terms as complete." },
    { question: "What if not every co-owner joins?", answer: "The process may be limited if a person whose rights are directly affected does not participate. Suitability screening should identify all necessary participants before substantive sessions." },
    { question: "Can site visits or experts be used?", answer: "Where useful and agreed, the process can incorporate joint measurements, valuation input, technical experts or site visits with clear terms about cost and use of the information." },
  ],
};

export const metadata = createPageMetadata({ title: "Property & Real-Estate Mediation | Maharashtra", description: data.description, path: data.path });
export default function Page() { return <PracticePage data={data} />; }
