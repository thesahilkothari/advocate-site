import EmploymentHealthCheckClient from "./EmploymentHealthCheckClient";

export const metadata = {
  title: "Maharashtra Employment Health Check | Adv. Sahil S. Kothari",
  description:
    "A preliminary self-assessment for Maharashtra employers covering employment foundations, statutory readiness, retention and team performance systems.",
  alternates: {
    canonical: "https://www.kotharivakil.in/employment-health-check",
  },
};

export default function EmploymentHealthCheckPage() {
  return <EmploymentHealthCheckClient />;
}
