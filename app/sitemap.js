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
    "/baramati-lawyer",
    "/pune-lawyer",
    "/insights",
    ...POSTS.map((p) => `/insights/${p.slug}`),
  ];
  const lastModified = new Date().toISOString();
  return routes.map((p) => ({
    url: base + p,
    lastModified,
    changeFrequency: "weekly",
    priority: p === "/" ? 1.0 : 0.7,
  }));
}
