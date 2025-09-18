"use client";

import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    from: "",
    to: "",
    mode: "Remote",
    hours: "",
    id: "",
    issued: "",
    mentor: "Adv. Sahil S. Kothari",
    role: "Legal Intern",
    ttlDays: 180,
  });
  const [passcode, setPasscode] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/cert/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": passcode,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Issue Internship Certificate Link</h1>
        <p className="text-sm text-white/70 mt-1">
          Enter the intern’s details, your admin passcode, and generate the signed link.
        </p>

        <form onSubmit={submit} className="mt-6 grid gap-3">
          <input className="px-3 py-2 rounded-md bg-white/10 border border-white/10" placeholder="Admin passcode"
            type="password" value={passcode} onChange={(e) => setPasscode(e.target.value)} required />

          <input className="px-3 py-2 rounded-md bg-white/10 border border-white/10" name="name" placeholder="Name"
            value={form.name} onChange={onChange} required />
          <div className="grid grid-cols-2 gap-3">
            <input className="px-3 py-2 rounded-md bg-white/10 border border-white/10" name="from" placeholder="From (DD-MM-YYYY)"
              value={form.from} onChange={onChange} required />
            <input className="px-3 py-2 rounded-md bg-white/10 border border-white/10" name="to" placeholder="To (DD-MM-YYYY)"
              value={form.to} onChange={onChange} required />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <select className="px-3 py-2 rounded-md bg-white/10 border border-white/10" name="mode" value={form.mode} onChange={onChange}>
              <option>Remote</option>
              <option>Online</option>
              <option>Office (Baramati)</option>
            </select>
            <input className="px-3 py-2 rounded-md bg-white/10 border border-white/10" name="hours" placeholder="Total hours (optional)"
              value={form.hours} onChange={onChange} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input className="px-3 py-2 rounded-md bg-white/10 border border-white/10" name="id" placeholder="Certificate ID (optional)"
              value={form.id} onChange={onChange} />
            <input className="px-3 py-2 rounded-md bg-white/10 border border-white/10" name="issued" placeholder="Issued on (DD-MM-YYYY, optional)"
              value={form.issued} onChange={onChange} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input className="px-3 py-2 rounded-md bg-white/10 border border-white/10" name="mentor" placeholder="Mentor"
              value={form.mentor} onChange={onChange} />
            <input className="px-3 py-2 rounded-md bg-white/10 border border-white/10" name="role" placeholder="Role"
              value={form.role} onChange={onChange} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input className="px-3 py-2 rounded-md bg-white/10 border border-white/10" type="number" min="1" name="ttlDays"
              placeholder="Validity in days" value={form.ttlDays} onChange={onChange} />
            <button className="px-4 py-2 rounded-md border border-white/10 bg-white/10 hover:bg-white/20">Generate link</button>
          </div>
        </form>

        {error && <div className="mt-4 text-red-300 text-sm">Error: {error}</div>}
        {result && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
            <div className="text-white/80">Signed Link:</div>
            <a className="underline break-all" href={result.url} target="_blank" rel="noreferrer">{result.url}</a>
            <div className="mt-3 flex gap-3">
              <button
                className="px-3 py-1 rounded-md border border-white/10 hover:bg-white/10"
                onClick={() => navigator.clipboard.writeText(result.url)}
              >
                Copy Link
              </button>
              <a className="px-3 py-1 rounded-md border border-white/10 hover:bg-white/10" href={`mailto:?subject=Your Internship Certificate&body=${encodeURIComponent(result.url)}`}>
                Open in Email
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
