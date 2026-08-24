export const SITE_URL = "https://www.kotharivakil.in";

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
  practice:
    "District and Sessions Courts, tribunals across Maharashtra, and the Bombay High Court",
  logo: "/logo-mark.svg",
  photo: "/ssk-photo.png",
  ogImage: `${SITE_URL}/og.png`,
  domain: SITE_URL,
};

export const FORM_ACTION = "https://formspree.io/f/xblaejln";

export const PRIMARY_NAV = [
  { href: "/#practice", label: "Practice" },
  { href: "/mediation", label: "Mediation" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/employment-health-check", label: "Employer Check" },
  { href: "/internships", label: "Internships" },
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
          url: `${SITE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: "Adv. Sahil S. Kothari - Kothari Vakil",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og.png`],
    },
  };
}
