import PracticePage from "../_components/PracticePage";
import { PRACTICE_PAGES } from "../../lib/practice-pages";
import { createPageMetadata } from "../../lib/site";

const data = PRACTICE_PAGES.baramati;
export const metadata = createPageMetadata({ title: "Advocate & Mediator in Baramati | Kothari Vakil", description: data.description, path: data.path });
export default function Page() { return <PracticePage data={data} />; }
