// app/api/contact/route.js
// Ensure this file does NOT include "use client"

export const runtime = "nodejs"; // enforce Node runtime (safer for email libs)

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// CHANGE THESE:
const TO_EMAIL = "thesahilkotharigmail@gmail.com".replace("gmail", "gmail."); // <-- replace with your real inbox (example obfuscated)
const FROM_EMAIL = "web@kotharivakil.in"; // must be a verified sender in Resend (or use a Resend-provided test sender)

// Basic validation helper
function badRequest(msg) {
  return new Response(msg, { status: 400, headers: { "content-type": "text/plain" } });
}

export async function POST(req) {
  try {
    const data = await req.formData();
    const name = (data.get("name") || "").toString().trim();
    const contact = (data.get("contact") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !contact || !message) {
      return badRequest("Missing required fields");
    }

    // Send email with Resend
    if (!process.env.RESEND_API_KEY) {
      console.warn("[contact] RESEND_API_KEY is not set; skipping email send.");
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
