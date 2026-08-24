// app/robots.js
export default function robots() {
  const base = "https://www.kotharivakil.in";
  return {
    rules: [{
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/internship-certificate"],
    }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
