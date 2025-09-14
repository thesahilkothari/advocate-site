// app/api/contact/route.js
export async function POST(req) {
  try {
    const form = await req.formData();
    const name = form.get("name");
    const contact = form.get("contact");
    const message = form.get("message");

    import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.formData();
    const name = data.get("name");
    const contact = data.get("contact");
    const message = data.get("message");

    await resend.emails.send({
      from: "web@your-sender.com", // must be a verified sender
      to: "thesahilkothari@gmail.com",
      subject: "New website enquiry",
      text: `Name: ${name}\nContact: ${contact}\n\n${message}`,
    });

    return new Response("OK", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Error", { status: 500 });
  }
}

    // Example with Resend shown below.

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Error", { status: 500 });
  }
}
