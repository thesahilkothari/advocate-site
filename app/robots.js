// app/robots.js
export default function robots() {
  const base = "https://www.kotharivakil.in";
  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
