import PracticePage from "../_components/PracticePage";
import { PRACTICE_PAGES } from "../../lib/practice-pages";
import { createPageMetadata } from "../../lib/site";

const data = PRACTICE_PAGES.family;
export const metadata = createPageMetadata({ title: "Family & Matrimonial Matters | Kothari Vakil", description: data.description, path: data.path });
export default function Page() { return <PracticePage data={data} />; }
