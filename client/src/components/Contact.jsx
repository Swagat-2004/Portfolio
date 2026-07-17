import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", text: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", text: "Sending..." });

    try {
      const res = await axios.post(`${API_URL}/api/contact`, form);
      setStatus({ state: "success", text: res.data.message || "Message sent!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Something went wrong. Please try again.";
      setStatus({ state: "error", text: errorMsg });
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-mono text-sm text-muted">// contact.jsx</p>
      <h2 className="mt-2 font-mono text-2xl font-bold text-ink sm:text-3xl">Get In Touch</h2>
      <p className="mt-2 max-w-xl text-muted">
        Have an opening or just want to connect? Send a message below — it goes straight to my inbox.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-xl rounded-lg border border-border bg-surface p-6">
        <div>
          <label htmlFor="name" className="font-mono text-xs text-muted">
            name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="mt-1 w-full rounded-md border border-border bg-surfacehi px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-keyword"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="font-mono text-xs text-muted">
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="mt-1 w-full rounded-md border border-border bg-surfacehi px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-keyword"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="font-mono text-xs text-muted">
            message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to say?"
            className="mt-1 w-full rounded-md border border-border bg-surfacehi px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-keyword"
          />
        </div>

        <button
          type="submit"
          disabled={status.state === "loading"}
          className="mt-5 rounded-md bg-keyword px-5 py-2.5 font-mono text-sm font-semibold text-base transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status.state === "loading" ? "$ sending..." : "$ send --message"}
        </button>

        {status.state === "success" && (
          <p className="mt-3 font-mono text-sm text-string">✓ {status.text}</p>
        )}
        {status.state === "error" && (
          <p className="mt-3 font-mono text-sm text-tag">✗ {status.text}</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
