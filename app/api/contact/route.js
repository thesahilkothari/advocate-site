// app/api/contact/route.js
// Server-only file. Do NOT add "use client" here.

export const runtime = "nodejs"; // Node runtime is required for most email libs

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Set these to your real addresses.
// FROM must be a verified sender in Resend (or a Resend test sender during dev).
const FROM_EMAIL = "web@kotharivakil.in";
const TO_EMAIL = "thesahilkothari@gmail.com";

function badRequest(msg) {
  return new Response(msg, { status: 400, headers: { "content-type": "text/plain" } });
}

export async function POST(req) {
  try {
    const data = await req.formData();
    const name = (data.get("name") || "").toString().trim();
    const contact = (data.get("contact") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !contact || !message) return badRequest("Missing required fields");

    if (!process.env.RESEND_API_KEY) {
      console.warn("[contact] RESEND_API_KEY missing — not sending email");
    } else {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `New enquiry from ${name}`,
        text: `Name: ${name}\nContact: ${contact}\n\n${message}`,
      });
    }

    return new Response("OK", { status: 200, headers: { "content-type": "text/plain" } });
  } catch (err) {
    console.error("[contact] error", err);
    return new Response("Error", { status: 500, headers: { "content-type": "text/plain" } });
  }
}
