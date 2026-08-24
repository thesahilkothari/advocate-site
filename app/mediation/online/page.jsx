import PracticePage from "../../_components/PracticePage";
import { createPageMetadata } from "../../../lib/site";

const data = {
  path: "/mediation/online",
  parent: { href: "/mediation", label: "Mediation" },
  shortTitle: "Online mediation",
  eyebrow: "Remote dispute resolution",
  title: "Online mediation for participants in different locations",
  description: "Online mediation with identity, attendance, privacy, document and technology protocols for participants in Maharashtra, India or abroad.",
  areaServed: "India and online",
  intro: [
    "Online mediation can reduce travel and make scheduling easier when participants, counsel or decision-makers are in different cities. Convenience alone is not enough: identity, privacy, attendance, document access, interpretation and technology failures need a written protocol.",
    "The platform should support joint meetings and private rooms. Participants should join from a private location, use their own device where possible and disclose every person present. Recording is not permitted unless the participants and applicable law expressly allow it under agreed terms.",
  ],
  services: [
    { title: "Technology and attendance protocol", text: "Confirm platform, access links, identity checks, private rooms, backup contact, authorised attendees and what happens if the connection fails." },
    { title: "Digital document bundle", text: "Use a proportionate, indexed set with agreed naming and access so everyone works from the same version during the session." },
    { title: "Time-zone scheduling", text: "Plan session blocks, breaks and follow-up windows around participants' locations and decision-making authority." },
    { title: "Remote settlement workflow", text: "Allow time for independent advice, accurate drafting, verification of signatories and any required electronic or physical execution steps." },
  ],
  matters: ["Commercial and payment disputes across cities", "Property or family matters where participants live elsewhere", "Workplace and professional relationship disputes", "Pre-litigation matters requiring quick scheduling", "Pending disputes suitable for focused settlement sessions", "Cross-border matters requiring a remote first stage"],
  documents: ["Participant names, locations, roles and contact details", "A short chronology and agreed issue list", "Indexed PDF documents with confidential data minimised", "Authority documents for company or institutional representatives", "Interpreter or accessibility requirements", "Backup telephone and secure document-sharing arrangements"],
  process: ["Assess safety, privacy, capacity and technology suitability.", "Complete identity, conflict and attendance checks.", "Run a short platform test and agree the online protocol.", "Conduct sessions and verify any settlement documentation carefully."],
  scopeNote: "Online participation does not determine the legal seat, governing law, jurisdiction or enforceability of any settlement. Those questions should be addressed expressly where relevant. Participants remain responsible for a private environment and for complying with the agreed confidentiality and attendance protocol.",
  faqs: [
    { question: "Which video platform is used?", answer: "The platform is selected for the particular matter based on access, private-room capability, participant needs and agreed security arrangements. Access details are shared only after appointment." },
    { question: "Can someone record the session?", answer: "Recording should not occur unless expressly permitted by all participants, the mediator, applicable law and the written protocol. The default process expectation is no recording." },
    { question: "What happens if the connection fails?", answer: "The protocol should provide a backup contact method, a pause procedure and a rule that no substantive discussion continues without the affected participant unless everyone has agreed otherwise." },
  ],
};

export const metadata = createPageMetadata({ title: "Online Mediation | Maharashtra, India & Cross-Border", description: data.description, path: data.path });
export default function Page() { return <PracticePage data={data} />; }
