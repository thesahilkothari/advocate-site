// app/api/contact/route.js
export async function POST(req) {
  try {
    const form = await req.formData();
    const name = form.get("name");
    const contact = form.get("contact");
    const message = form.get("message");

    // TODO: send email/notification here (Resend / Nodemailer+SMTP / Slack webhook, etc.)
    // Example with Resend shown below.

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Error", { status: 500 });
  }
}
