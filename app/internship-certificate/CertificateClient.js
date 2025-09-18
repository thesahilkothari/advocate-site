"use client";

import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";

// Helper to read a param with a default
function get(sp, key, fallback = "") {
  const val = sp.get(key);
  return (val && val.trim()) || fallback;
}

export default function CertificateClient() {
  const sp = useSearchParams();

  const data = useMemo(() => {
    const today = new Date().toLocaleDateString("en-IN");
    return {
      name: get(sp, "name", "Student Name"),
      from: get(sp, "from", "DD-MM-YYYY"),
      to: get(sp, "to", "DD-MM-YYYY"),
      mode: get(sp, "mode", "Remote"),
      hours: get(sp, "hours", "—"),
      issued: get(sp, "issued", today),
      id: get(sp, "id", "KLC/INT/2025/001"),
      mentor: get(sp, "mentor", "Adv. Sahil S. Kothari"),
      role: get(sp, "role", "Legal Intern"),
    };
  }, [sp]);

  const printPage = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div className="mt-6 print:mt-0">
      <div className="print:hidden mb-4 flex gap-3">
        <button
          onClick={printPage}
          className="px-4 py-2 rounded-md border border-white/10 bg-white/10 hover:bg-white/20"
        >
          Print / Save as PDF
        </button>
        <a
          className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/10"
          href="/"
        >
          Back to home
        </a>
      </div>

      {/* Certificate */}
      <div className="bg-white text-black rounded-2xl p-8 md:p-12 shadow-2xl border border-black/10 print:shadow-none">
        <div className="text-center">
          <div className="text-xs tracking-wider text-black/70">Adv. Sahil S Kothari Law Chambers</div>
          <h2 className="text-2xl md:text-3xl font-semibold mt-1">Certificate of Internship</h2>
          <div className="text-sm text-black/60 mt-1">Certificate ID: {data.id}</div>
        </div>

        <div className="mt-8 text-base leading-7">
          <p>
            This is to certify that <strong>{data.name}</strong> successfully completed an
            internship as a <strong>{data.role}</strong> with Adv. Sahil S Kothari Law Chambers in the{" "}
            <strong>{data.mode}</strong> mode from <strong>{data.from}</strong> to{" "}
            <strong>{data.to}</strong>.
          </p>
          <p className="mt-4">
            During the tenure, the intern engaged in legal research, drafting, and
            case-preparation tasks, demonstrating diligence, professionalism, and
            an aptitude for learning. Total indicative hours: <strong>{data.hours}</strong>.
          </p>
          <p className="mt-4">
            We wish {data.name.split(" ")[0]} success in future endeavours.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <div className="border-t border-black/20 pt-3 text-sm">
              {data.mentor}
              <div className="text-black/60">Advocate</div>
            </div>
          </div>
          <div className="md:text-right">
            <div className="border-t border-black/20 pt-3 text-sm">
              Issued on: {data.issued}
              <div className="text-black/60">Baramati, Maharashtra</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-black/60">
          Note: This certificate is for acknowledgment of internship and does not serve as a
          license or accreditation. It is issued by Kothari Law Chambers based on completion
          of the internship period and assigned tasks.
        </div>
      </div>
    </div>
  );
}
