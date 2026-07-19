// Sends an email notification whenever someone submits the contact form.
// Uses Resend (https://resend.com) — free tier covers this easily.
// If RESEND_API_KEY or NOTIFY_EMAIL isn't set, this silently no-ops so the
// form still works (message is still saved to MongoDB either way).
export default async function sendContactNotification({ name, email, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.NOTIFY_EMAIL;

  if (!apiKey || !notifyTo) return;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Resend's shared test sender. Once you verify your own domain on
      // Resend, switch this to something like "Portfolio <contact@yourdomain.com>".
      from: "Portfolio <onboarding@resend.dev>",
      to: notifyTo,
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error (${res.status}): ${body}`);
  }
}
