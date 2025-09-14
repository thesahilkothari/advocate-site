// app/api/contact/route.js
// Server-only route handler (no "use client")

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const data = await req.formData();
    const name = (data.get("name") || "").toString().trim();
    const contact = (data.get("contact") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !contact || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Log to Vercel Function logs so you can verify submissions
    console.log("[/api/contact] submission:", { name, contact, message });

    // If you later want to deliver email, wire Resend/Nodemailer here.
    return new Response("OK", { status: 200, headers: { "content-type": "text/plain" } });
  } catch (err) {
    console.error("[/api/contact] error:", err);
    return new Response("Error", { status: 500, headers: { "content-type": "text/plain" } });
  }
}
