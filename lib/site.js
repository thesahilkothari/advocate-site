export const SITE_URL = "https://www.kotharivakil.in";

export const SOCIAL_PREVIEW = {
  path: "/kothari-vakil-social-preview.png",
  url: `${SITE_URL}/kothari-vakil-social-preview.png`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Kothari Vakil — Adv. Sahil S. Kothari, Advocate and Accredited Mediator",
};

export const ADVOCATE = {
  name: "Adv. Sahil S. Kothari",
  fullName: "Sahil Shekhar Kothari",
  alternateNames: ["Adv Sahil S Kothari", "Kothari Vakil"],
  enrollment: "MAH/3210/2024",
  phone: "+91 9673931166",
  phoneHref: "+919673931166",
  email: "thesahilkothari@gmail.com",
  address:
    "Shop No. 14, Vardhaman Capital, Suryanagari, Baramati - 413133, Dist- Pune",
  city: "Baramati",
  region: "Maharashtra",
  postalCode: "413133",
  whatsapp: "919673931166",
  linkedIn: "https://in.linkedin.com/in/adv-sahil-kothari",
  googleBusinessProfile: "https://share.google/21QSRhZbCfyEBqEoC",
  qualifications: [
    {
      degree: "LL.M. (Business Law)",
      institution: "Savitribai Phule Pune University",
    },
    {
      degree: "LL.B.",
      institution: "Vidya Pratishthan's Vasantrao Pawar Law College",
    },
    {
      degree: "B.E. (Information Technology)",
    },
  ],
  mediationCredential: {
    title: "Certificate of Training as an Accredited Mediator",
    programme: "60-Hour Accredited Foundation Learning Program in Mediation",
    institution: "Accords International",
    qualityAssurance: "Audited and certified by ADR Register, Global Network Group, Amsterdam",
    period: "January–February 2023",
  },
  practice:
    "District and Sessions Courts, tribunals across Maharashtra, and the Bombay High Court",
  logo: "/logo-mark.svg",
  photo: "/ssk-photo.png",
  ogImage: SOCIAL_PREVIEW.url,
  domain: SITE_URL,
};

export const FORM_ACTION = "https://formspree.io/f/xblaejln";

export const PRIMARY_NAV = [
  { href: "/mediation", label: "Mediation" },
  { href: "/employment-health-check", label: "Employer Check" },
  { href: "/#practice", label: "Legal Practice" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function createPageMetadata({ title, description, path }) {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonical,
      siteName: "Kothari Vakil",
      title,
      description,
      images: [
        {
          url: SOCIAL_PREVIEW.url,
          width: SOCIAL_PREVIEW.width,
          height: SOCIAL_PREVIEW.height,
          type: SOCIAL_PREVIEW.type,
          alt: SOCIAL_PREVIEW.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: SOCIAL_PREVIEW.url, alt: SOCIAL_PREVIEW.alt }],
    },
  };
}
