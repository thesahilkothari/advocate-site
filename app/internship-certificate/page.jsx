// app/internship-certificate/page.jsx
import crypto from "crypto";

export const dynamic = "force-dynamic";

function toUtf8(str) {
  return Buffer.from(str, "base64").toString("utf8");
}
function fromB64url(s) {
  return Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8");
}
function toB64url(buf) {
  return Buffer.from(buf)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function verifyToken(token) {
  if (!token) return { ok: false, reason: "missing token" };
  const secret = process.env.CERT_SECRET;
  if (!secret) return { ok: false, reason: "missing secret" };

  const parts = token.split(".");
  if (parts.length !== 2) return { ok: false, reason: "bad format" };

  const [payloadB64u, sigB64u] = parts;
  const payloadJson = fromB64url(payloadB64u);
  let payload;
  try {
    payload = JSON.parse(payloadJson);
  } catch {
    return { ok: false, reason: "bad payload" };
  }

  const expectSig = toB64url(crypto.createHmac("sha256", secret).update(payloadJson).digest());
  if (sigB64u !== expectSig) return { ok: false, reason: "bad signature" };

  if (!payload.exp || Date.now() > Number(payload.exp)) {
    return { ok: false, reason: "expired" };
  }

  return { ok: true, payload };
}

export default function Page({ searchParams }) {
  const token = searchParams?.token || "";
  const result = verifyToken(token);

  if (!result.ok) {
    return (
      <main className="min-h-screen bg-[#0B0F14] text-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="text-2xl md:text-3xl font-semibold">Certificate link invalid</h1>
          <p className="mt-3 text-white/70">
            This certificate link is {result.reason || "not valid"}. If you believe this is an error,
            please contact the chambers for assistance.
          </p>
          <a href="/" className="mt-6 inline-block underline">Back to home</a>
        </div>
      </main>
    );
  }

  const d = result.payload;

  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="print:hidden">
          <h1 className="text-2xl md:text-3xl font-semibold">Internship Certificate</h1>
          <p className="mt-2 text-white/70 text-sm">This page is accessible only via a valid signed link.</p>
          <div className="mt-4 flex gap-3">
            <PrintButton />
            <a className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/10" href="/">
              Home
            </a>
          </div>
        </div>

        {/* Certificate */}
        <div className="mt-6 bg-white text-black rounded-2xl p-8 md:p-12 shadow-2xl border border-black/10 print:shadow-none">
          <div className="text-center">
            <div className="text-xs tracking-wider text-black/70">Kothari Law Chambers</div>
            <h2 className="text-2xl md:text-3xl font-semibold mt-1">Certificate of Internship</h2>
            <div className="text-sm text-black/60 mt-1">Certificate ID: {d.id}</div>
          </div>

          <div className="mt-8 text-base leading-7">
            <p>
              This is to certify that <strong>{d.name}</strong> successfully completed an
              internship as a <strong>{d.role}</strong> with Kothari Law Chambers in the{" "}
              <strong>{d.mode}</strong> mode from <strong>{d.from}</strong> to{" "}
              <strong>{d.to}</strong>.
            </p>
            <p className="mt-4">
              During the tenure, the intern engaged in legal research, drafting, and case-preparation
              tasks, demonstrating diligence, professionalism, and an aptitude for learning.
              Total indicative hours: <strong>{d.hours}</strong>.
            </p>
            <p className="mt-4">We wish {d.name.split(" ")[0]} success in future endeavours.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <div className="border-t border-black/20 pt-3 text-sm">
                {d.mentor}
                <div className="text-black/60">Advocate</div>
              </div>
            </div>
            <div className="md:text-right">
              <div className="border-t border-black/20 pt-3 text-sm">
                Issued on: {d.issued}
                <div className="text-black/60">Baramati, Maharashtra</div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-xs text-black/60">
            Note: This certificate acknowledges internship completion and is not a license or accreditation.
          </div>
        </div>
      </div>
    </main>
  );
}

// tiny client button just for print
function PrintButton() {
  return (
    <button
      onClick={() => typeof window !== "undefined" && window.print()}
      className="px-4 py-2 rounded-md border border-white/10 bg-white/10 hover:bg-white/20 print:hidden"
    >
      Print / Save as PDF
    </button>
  );
}
