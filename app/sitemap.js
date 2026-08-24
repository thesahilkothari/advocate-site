// app/sitemap.js
import { POSTS } from "../lib/insights";

export default function sitemap() {
  const base = "https://www.kotharivakil.in";
  const routes = [
    "/",
    "/civil-litigation",
    "/criminal-bail",
    "/rera-real-estate",
    "/trusts-societies",
    "/family-law",
    "/drafting-advisory",
    "/mediation",
    "/mediation/commercial-business",
    "/mediation/property-real-estate",
    "/mediation/online",
    "/mediation/cross-border",
    "/employment-health-check",
    "/about",
    "/baramati-lawyer",
    "/pune-lawyer",
    "/insights",
    "/internships",
    "/privacy",
    "/professional-notice",
    ...POSTS.map((p) => `/insights/${p.slug}`),
  ];
  const lastModified = "2026-08-24T00:00:00.000Z";
  return routes.map((p) => ({
    url: base + p,
    lastModified,
    changeFrequency: "monthly",
    priority: p === "/" ? 1.0 : p === "/mediation" ? 0.9 : 0.7,
  }));
}
