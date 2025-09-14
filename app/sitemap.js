// app/sitemap.js
export default function sitemap() {
  const base = "https://www.kotharivakil.in";

  // IMPORTANT: absolute URLs only, and only URLs you actually serve (200)
  // Start simple with just the homepage; we can add sections later.
  return [
    {
      url: `${base}/`,
      lastModified: new Date().toISOString(), // ISO 8601 is valid
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
