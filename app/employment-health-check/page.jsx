import EmploymentHealthCheckClient from "./EmploymentHealthCheckClient";
import { createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Maharashtra Employment Health Check | Adv. Sahil S. Kothari",
  description:
    "A preliminary self-assessment for Maharashtra employers covering employment foundations, statutory readiness, retention and team performance systems.",
  path: "/employment-health-check",
});

export default function EmploymentHealthCheckPage() {
  return <EmploymentHealthCheckClient />;
}
