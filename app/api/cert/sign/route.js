// app/api/cert/sign/route.js
import crypto from "crypto";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // don't cache
export const runtime = "nodejs";

function b64url(buf) {
  return Buffer.from(buf)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

export async function POST(req) {
  try {
    const adminKey = req.headers.get("x-admin-key") || "";
    if (!process.env.ADMIN_PASSCODE || adminKey !== process.env.ADMIN_PASSCODE) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const {
      name,
      from,
      to,
      mode,
      hours = "—",
      issued, // optional, defaults below
      id,     // optional, defaults below
      mentor = "Adv. Sahil S. Kothari",
      role = "Legal Intern",
      ttlDays = 180, // link expiry in days
    } = body || {};

    if (!name || !from || !to || !mode) {
      return NextResponse.json({ error: "name, from, to, mode are required" }, { status: 400 });
    }

    const now = Date.now();
    const exp = now + Number(ttlDays) * 24 * 60 * 60 * 1000;
    const payload = {
      name,
      from,
      to,
      mode,
      hours,
      issued: issued || new Date().toLocaleDateString("en-IN"),
      id: id || `KLC/INT/${new Date().getFullYear()}/${Math.floor(Math.random() * 900 + 100)}`,
      mentor,
      role,
      exp, // ms timestamp
      iat: now,
    };

    const secret = process.env.CERT_SECRET;
    if (!secret) {
      return NextResponse.json({ error: "CERT_SECRET not set" }, { status: 500 });
    }

    const json = JSON.stringify(payload);
    const sig = crypto.createHmac("sha256", secret).update(json).digest();
    const token = `${b64url(json)}.${b64url(sig)}`;

    const base = process.env.SITE_URL || "https://www.kotharivakil.in";
    const url = `${base}/internship-certificate?token=${encodeURIComponent(token)}`;

    return NextResponse.json({ url, token, payload });
  } catch (e) {
    return NextResponse.json({ error: e?.message || "Internal error" }, { status: 500 });
  }
}
