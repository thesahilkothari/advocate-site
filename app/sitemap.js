export default function sitemap() {
  const base = "https://www.kotharivakil.in";
  return [{ url: `${base}/`, lastModified: new Date().toISOString() }];
}
