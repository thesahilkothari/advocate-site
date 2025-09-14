export async function POST(req) {
  const data = await req.formData();
  const name = data.get("name");
  const contact = data.get("contact");
  const message = data.get("message");

  // TODO: send email via a service (Resend, Nodemailer + SMTP)
  // Example with Resend (vercel.com/integrations/resend):
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from:"web@sskotharilaw.in", to:"thesahilkothari@gmail.com", subject:"New enquiry", text:`Name:${name}\nContact:${contact}\n${message}` });

  return new Response("OK", { status: 200 });
}
