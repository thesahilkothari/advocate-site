export async function POST(req) {
  const data = await req.formData();
  const name = data.get("name");
  const contact = data.get("contact");
  const message = data.get("message");

  export async function POST(req) {
  try {
    const form = await req.formData();
    const name = form.get("name");
    const contact = form.get("contact");
    const message = form.get("message");

    // TODO: send the email/notification here (Resend, Nodemailer+SMTP, Slack, etc.)
    // Example: await sendEmail({ name, contact, message });

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Error", { status: 500 });
  }
}

  // Example with Resend (vercel.com/integrations/resend):
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from:"web@sskotharilaw.in", to:"thesahilkothari@gmail.com", subject:"New enquiry", text:`Name:${name}\nContact:${contact}\n${message}` });

  return new Response("OK", { status: 200 });
}
