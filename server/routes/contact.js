import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact  -> save a new message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    const newContact = await Contact.create({ name, email, message });

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
});

// GET /api/contact -> list all messages (useful for you to check submissions, e.g. via Postman)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    console.error("Contact fetch error:", err.message);
    return res.status(500).json({ success: false, error: "Server error. Please try again later." });
  }
});

export default router;
