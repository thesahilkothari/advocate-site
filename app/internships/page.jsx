import React, { Suspense } from "react";
import InternshipsClient from "./InternshipsClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Internships | Kothari Law Chambers",
  description:
    "Apply for remote, online, or office internships with Kothari Law Chambers. Open to law undergraduates and graduates.",
};

function LoadingBox() {
  return (
    <div className="min-h-[40vh] grid place-items-center text-white/70">
      Loading…
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Internships</h1>
        <p className="mt-3 text-white/80 text-sm leading-relaxed">
          Opportunities for <strong>law undergraduates</strong> and <strong>law graduates</strong> in three modes:
          <br />• Remote (research &amp; drafting)
          <br />• Online (hybrid calls + document work)
          <br />• Office (Baramati, in-person)
        </p>

        <Suspense fallback={<LoadingBox />}>
          <InternshipsClient />
        </Suspense>
      </div>
    </main>
  );
}
