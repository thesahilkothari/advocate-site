// app/sitemap.js
export default function sitemap() {
  const base = "https://www.kotharivakil.in";

  // Only include real pages (no #anchors). Your site is a single page right now.
  return [
    {
      url: `${base}/`,
      lastModified: new Date().toISOString(), // ISO 8601 string
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
