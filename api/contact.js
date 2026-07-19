import connectDB from "./lib/db.js";
import Contact from "./lib/ContactModel.js";
import sendContactNotification from "./lib/sendEmail.js";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.error("DB connection error:", err.message);
    return res.status(500).json({ success: false, error: "Database connection failed" });
  }

  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body || {};

      if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: "All fields are required" });
      }

      const newContact = await Contact.create({ name, email, message });

      try {
        await sendContactNotification({ name, email, message });
      } catch (emailErr) {
        // Message is already saved in MongoDB, so don't fail the request
        // just because the email notification didn't go out.
        console.error("Email notification failed:", emailErr.message);
      }

      return res.status(201).json({
        success: true,
        message: "Message received. Thanks for reaching out!",
        data: newContact,
      });
    } catch (err) {
      if (err.name === "ValidationError") {
        const firstError = Object.values(err.errors)[0].message;
        return res.status(400).json({ success: false, error: firstError });
      }
      console.error("Contact route error:", err.message);
      return res.status(500).json({ success: false, error: "Server error. Please try again later." });
    }
  }

  if (req.method === "GET") {
    try {
      const messages = await Contact.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: messages.length, data: messages });
    } catch (err) {
      console.error("Contact fetch error:", err.message);
      return res.status(500).json({ success: false, error: "Server error. Please try again later." });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ success: false, error: `Method ${req.method} not allowed` });
}
