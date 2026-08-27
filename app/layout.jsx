// app/layout.jsx
import "./globals.css";
import { ADVOCATE, SITE_URL, SOCIAL_PREVIEW } from "../lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adv. Sahil S. Kothari | Advocate & Accredited Mediator",
  description:
    "Litigation, drafting, advisory and accredited mediation information from Adv. Sahil S. Kothari in Baramati, Maharashtra.",
  applicationName: "Kothari Vakil",
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Kothari Vakil",
    title: "Adv. Sahil S. Kothari | Advocate & Accredited Mediator",
    description:
      "Litigation, drafting, advisory and accredited mediation information from Baramati for individuals and businesses in Maharashtra.",
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
    title: "Adv. Sahil S. Kothari | Advocate & Accredited Mediator",
    description:
      "Litigation, drafting, advisory and accredited mediation information from Baramati for individuals and businesses in Maharashtra.",
    images: [{ url: SOCIAL_PREVIEW.url, alt: SOCIAL_PREVIEW.alt }],
  },
  icons: {
    icon: [
      { url: "/kothari-vakil-icon.svg", type: "image/svg+xml" },
      { url: "/kothari-vakil-icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F14",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#advocate`,
      name: ADVOCATE.fullName,
      alternateName: ADVOCATE.alternateNames,
      honorificPrefix: "Adv.",
      identifier: ADVOCATE.enrollment,
      url: SITE_URL,
      image: `${SITE_URL}/ssk-photo.png`,
      jobTitle: "Advocate and Accredited Mediator",
      mainEntityOfPage: `${SITE_URL}/about`,
      knowsLanguage: ["English", "Marathi", "Hindi"],
      knowsAbout: [
        "Civil litigation",
        "Criminal procedure and bail",
        "Real estate and MAHARERA",
        "Maharashtra public trusts and societies",
        "Family and matrimonial matters",
        "Legal drafting and advisory",
        "Mediation",
      ],
      alumniOf: ADVOCATE.qualifications
        .filter((qualification) => qualification.institution)
        .map((qualification) => ({
          "@type": "EducationalOrganization",
          name: qualification.institution,
        })),
      hasCredential: [
        ...ADVOCATE.qualifications.map((qualification) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: qualification.degree,
          ...(qualification.institution
            ? {
                recognizedBy: {
                  "@type": "EducationalOrganization",
                  name: qualification.institution,
                },
              }
            : {}),
        })),
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: ADVOCATE.mediationCredential.title,
          name: ADVOCATE.mediationCredential.programme,
          description: `${ADVOCATE.mediationCredential.qualityAssurance}; conducted ${ADVOCATE.mediationCredential.period}.`,
          recognizedBy: [
            { "@type": "Organization", name: ADVOCATE.mediationCredential.institution },
            { "@type": "Organization", name: "ADR Register, Global Network Group, Amsterdam" },
          ],
        },
      ],
      sameAs: [ADVOCATE.linkedIn, ADVOCATE.googleBusinessProfile],
    },
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#practice`,
      name: ADVOCATE.name,
      alternateName: ADVOCATE.alternateNames,
      url: SITE_URL,
      image: SOCIAL_PREVIEW.url,
      telephone: ADVOCATE.phoneHref,
      email: ADVOCATE.email,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: ADVOCATE.phoneHref,
        email: ADVOCATE.email,
        contactType: "appointments and enquiries",
        availableLanguage: ["English", "Marathi", "Hindi"],
      },
      founder: { "@id": `${SITE_URL}/#advocate` },
      employee: { "@id": `${SITE_URL}/#advocate` },
      sameAs: [ADVOCATE.googleBusinessProfile, ADVOCATE.linkedIn],
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Maharashtra, India",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop No. 14, Vardhaman Capital, Suryanagari",
        addressLocality: ADVOCATE.city,
        addressRegion: ADVOCATE.region,
        postalCode: ADVOCATE.postalCode,
        addressCountry: "IN",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Practice information",
        itemListElement: [
          "Civil litigation",
          "Criminal matters and bail",
          "Real estate and MAHARERA",
          "Trusts and societies",
          "Family and matrimonial matters",
          "Drafting and advisory",
          "Mediation",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Kothari Vakil",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#advocate` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded bg-white px-4 py-2 text-black focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
