// app/layout.jsx
import "./globals.css";
import { ADVOCATE, SITE_URL } from "../lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adv. Sahil S. Kothari | Advocate & Mediator in Maharashtra",
  description:
    "Information on litigation, drafting, advisory and mediation services provided by Adv. Sahil S. Kothari from Baramati, Maharashtra.",
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
    title: "Adv. Sahil S. Kothari | Advocate & Mediator in Maharashtra",
    description:
      "Litigation, drafting, advisory and mediation information for individuals and businesses in Maharashtra.",
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
    title: "Adv. Sahil S. Kothari | Advocate & Mediator in Maharashtra",
    description:
      "Litigation, drafting, advisory and mediation information for individuals and businesses in Maharashtra.",
    images: [`${SITE_URL}/og.png`],
  },
  icons: {
    icon: "/favicon.ico",
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
      name: "Sahil S. Kothari",
      honorificPrefix: "Adv.",
      identifier: ADVOCATE.enrollment,
      url: SITE_URL,
      image: `${SITE_URL}/ssk-photo.png`,
      jobTitle: "Advocate and Mediator",
      knowsLanguage: ["English", "Marathi", "Hindi"],
      sameAs: [ADVOCATE.linkedIn],
    },
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#practice`,
      name: "Adv. Sahil S. Kothari - Legal and Mediation Practice",
      alternateName: "Kothari Vakil",
      url: SITE_URL,
      image: `${SITE_URL}/og.png`,
      telephone: ADVOCATE.phoneHref,
      email: ADVOCATE.email,
      founder: { "@id": `${SITE_URL}/#advocate` },
      employee: { "@id": `${SITE_URL}/#advocate` },
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
