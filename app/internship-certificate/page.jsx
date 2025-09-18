import React, { Suspense } from "react";
import CertificateClient from "./CertificateClient";

// Force dynamic so the build doesn’t try to fully prerender this page
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Internship Certificate | Kothari Law Chambers",
  description:
    "Generate and print internship completion certificates for Kothari Law Chambers interns.",
};

function LoadingCert() {
  return (
    <div className="min-h-[50vh] grid place-items-center text-white/70">
      Loading certificate…
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold">Internship Certificate</h1>
        <p className="mt-2 text-white/70 text-sm">
          Use the URL parameters (e.g. <code>?name=Student+Name&amp;from=01-08-2025&amp;to=31-08-2025&amp;mode=Remote</code>) to fill the certificate and print.
        </p>

        <Suspense fallback={<LoadingCert />}>
          <CertificateClient />
        </Suspense>
      </div>
    </main>
  );
}
