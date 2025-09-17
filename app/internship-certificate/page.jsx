// app/internship-certificate/page.jsx
"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

// --- Organisation / Issuer Details ---
const ORG = {
  chamber: "Kothari Law Chambers",
  advocateName: "Adv. Sahil S. Kothari",
  enrollment: "MAH/3210/2024",
  address:
    "Shop No. 14, Vardhaman Capital, Suryanagari, Baramati - 413133, Dist- Pune",
  phone: "+91 9673931166",
  email: "thesahilkothari@gmail.com",
  domain: "https://www.kotharivakil.in",
  logo: "/logo-mark.svg", // ensure this exists in /public
  seal: "/seal.png", // optional: add a round seal image in /public/seal.png
};

// Read a query param with a fallback
function useQP(sp, key, fallback = "") {
  return sp.get(key) || fallback;
}

export default function Page() {
  const sp = useSearchParams();
  const [editing, setEditing] = useState(false);

  // Prefill from query string (or use editor to override)
  const dataFromQS = useMemo(
    () => ({
      recipient: useQP(sp, "name", "[Full Name]"),
      institution: useQP(sp, "institution", "[Law School / University]"),
      mode: useQP(sp, "mode", "Remote / Online / Office"),
      start: useQP(sp, "start", "[Start Date]"),
      end: useQP(sp, "end", "[End Date]"),
      duration: useQP(sp, "duration", "[3–8 weeks]"),
      work: useQP(
        sp,
        "work",
        "Legal research, drafting of pleadings/agreements, case summaries, and compliance checklists."
      ),
      issueDate: useQP(sp, "issued", new Date().toLocaleDateString()),
      place: useQP(sp, "place", "Baramati, Maharashtra"),
      certificateId: useQP(sp, "cid", "KLC-INT-YYYYMM-001"),
      supervisor: useQP(sp, "supervisor", ORG.advocateName),
    }),
    [sp]
  );

  const [form, setForm] = useState(dataFromQS);

  const onChange = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#0B0F14] py-10 px-4 print:bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Internship Certificate — Preview</h1>
          <div className="flex gap-2 print:hidden">
            <button
              onClick={() => window.print()}
              className="px-3 py-2 rounded-md border border-black/10 bg-white hover:bg-black/5"
            >
              Print / Save PDF
            </button>
            <button
              onClick={() => setEditing((e) => !e)}
              className="px-3 py-2 rounded-md border border-black/10 bg-white hover:bg-black/5"
            >
              {editing ? "Hide Editor" : "Edit Details"}
            </button>
          </div>
        </div>

        {/* Editor (optional) */}
        {editing && (
          <div className="grid md:grid-cols-2 gap-3 p-4 rounded-xl border border-black/10 bg-white print:hidden">
            {[
              ["recipient", "Recipient Full Name"],
              ["institution", "Institution"],
              ["mode", "Mode (Remote/Online/Office)"],
              ["start", "Start Date"],
              ["end", "End Date"],
              ["duration", "Duration (e.g., 6 weeks)"],
              ["work", "Work Undertaken (short)"],
              ["issueDate", "Issue Date"],
              ["place", "Place"],
              ["certificateId", "Certificate ID"],
              ["supervisor", "Supervisor / Signatory"],
            ].map(([k, label]) => (
              <label key={k} className="text-sm">
                <div className="text-black/70 mb-1">{label}</div>
                <input
                  value={form[k]}
                  onChange={(e) => onChange(k, e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-black/10 bg-white"
                />
              </label>
            ))}
          </div>
        )}

        {/* Certificate canvas */}
        <div className="mt-6 bg-white rounded-[24px] shadow-xl shadow-black/5 border border-black/10 overflow-hidden print:shadow-none print:rounded-none print:border-0">
          {/* Ornamental border */}
          <div className="m-4 rounded-[18px] border-4" style={{ borderColor: "#0B0F14" }}>
            <div className="m-2 rounded-[14px] border-2 border-black/20">
              <div className="p-10">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={`${ORG.logo}`}
                      alt="Logo"
                      className="w-12 h-12 rounded-xl border border-black/10"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div>
                      <div className="text-sm uppercase tracking-widest text-black/60">
                        {ORG.chamber}
                      </div>
                      <div className="text-lg font-semibold">{ORG.advocateName}</div>
                      <div className="text-xs text-black/60">Enrl. {ORG.enrollment}</div>
                    </div>
                  </div>
                  <div className="text-right text-xs text-black/60">
                    <div>{ORG.address}</div>
                    <div>
                      {ORG.phone} • {ORG.email}
                    </div>
                    <div>{ORG.domain.replace(/^https?:\/\//, "")}</div>
                  </div>
                </div>

                {/* Title */}
                <div className="mt-10 text-center">
                  <div className="text-xs tracking-[0.35em] text-black/50 uppercase">
                    Certificate of Completion
                  </div>
                  <div className="mt-2 text-3xl font-bold">Legal Internship</div>
                </div>

                {/* Body */}
                <div className="mt-8 text-[15px] leading-7 text-black/80">
                  <p>
                    This is to certify that{" "}
                    <span className="font-semibold text-black">{form.recipient}</span> from{" "}
                    <span className="font-medium">{form.institution}</span> has successfully
                    completed a{" "}
                    <span className="font-medium">{form.duration}</span> internship in the mode of{" "}
                    <span className="font-medium">{form.mode}</span> under the supervision of{" "}
                    <span className="font-medium">{form.supervisor}</span>.
                  </p>
                  <p className="mt-4">
                    The internship was undertaken from{" "}
                    <span className="font-medium">{form.start}</span> to{" "}
                    <span className="font-medium">{form.end}</span>. During this period, the intern
                    worked on <span className="font-medium">{form.work}</span> (as appropriate),
                    adhering to confidentiality and professional standards.
                  </p>
                  <p className="mt-4">
                    This certificate is issued on{" "}
                    <span className="font-medium">{form.issueDate}</span> at{" "}
                    <span className="font-medium">{form.place}</span> in recognition of
                    satisfactory completion and professional conduct.
                  </p>
                </div>

                {/* Footer: sign / seal / id */}
                <div className="mt-12 grid grid-cols-3 gap-6 items-end">
                  <div className="text-sm text-black/70">
                    <div className="h-16"></div>
                    <div className="border-t border-black/30 pt-2 font-medium">
                      {ORG.advocateName}
                    </div>
                    <div className="text-xs">Enrl. {ORG.enrollment}</div>
                    <div className="text-xs">{ORG.chamber}</div>
                  </div>
                  <div className="flex items-center justify-center">
                    {ORG.seal ? (
                      <img
                        src={ORG.seal}
                        alt="Seal"
                        className="w-24 h-24 opacity-80"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full border-2 border-black/30 grid place-items-center text-[10px] text-black/60">
                        (Seal)
                      </div>
                    )}
                  </div>
                  <div className="text-right text-sm text-black/70">
                    <div>
                      <span className="text-black/60">Certificate ID:</span>{" "}
                      <span className="font-medium">{form.certificateId}</span>
                    </div>
                    <div className="text-xs mt-1 text-black/60">
                      Verify at {ORG.domain.replace(/^https?:\/\//, "")}
                    </div>
                  </div>
                </div>

                {/* Footer line */}
                <div className="mt-10 text-[11px] text-black/50">
                  Note: This certificate confirms completion of an internship and does not imply
                  employer–employee relationship or confer any right of engagement. Issued for bona
                  fide purposes.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6 text-xs text-black/60 print:hidden">
          <div className="font-medium mb-1">Usage tips</div>
          <ul className="list-disc list-inside">
            <li>
              Use the <strong>Edit Details</strong> panel or pass query params, e.g.:{" "}
              <code>
                /internship-certificate?name=Jane%20Doe&institution=XYZ%20Law&mode=Remote&start=01%20Aug%202025&end=30%20Aug%202025&duration=4%20weeks&cid=KLC-INT-2025-008
              </code>
            </li>
            <li>
              Click <strong>Print / Save PDF</strong> and choose “Save as PDF” for a high-quality
              export.
            </li>
            <li>
              Add <code>/public/seal.png</code> to display a seal. The logo is pulled from{" "}
              <code>/public/logo-mark.svg</code>.
            </li>
          </ul>
        </div>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          header,
          footer,
          nav,
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
