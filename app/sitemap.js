export default async function sitemap() {
  const base = "https://YOURDOMAIN";
  return [
    { url: `${base}/`, lastModified: new Date().toISOString() },
  ];
}
