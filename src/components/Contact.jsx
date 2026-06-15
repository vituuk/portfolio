import React, { useState } from "react";
import { Mail, Github, Gitlab, Linkedin, Send, Triangle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    
    const text = `✉️ *New Message from Portfolio*\n\n` +
                 `👤 *Name:* ${formState.name}\n` +
                 `📧 *Email:* ${formState.email}\n\n` +
                 `💬 *Message:*\n${formState.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3500);
        setFormState({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Failed to send message via Telegram Bot. Please check the credentials.");
      }
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      alert("Oops! A network error occurred while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container" style={{ padding: "80px 24px 100px" }}>
    
      <h2 className="section-title">Contact</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40 }}>
        <div>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: 15 }}>
            Have an opportunity, project, or just want to talk about full-stack development?
            My inbox is open.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
         
            <a href="https://github.com/vituuk" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-dim)", fontSize: 14 }}>
              <Github size={16} color="var(--accent)" /> github.com/vituuk
            </a>
            <a href="https://gitlab.com/users/vitu_ltng/projects" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-dim)", fontSize: 14 }}>
              <Gitlab size={16} color="var(--accent)" /> gitlab.com/users/vitu_ltng/projects
            </a>
            <a href="https://www.linkedin.com/in/vitu-uk-b21877342/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-dim)", fontSize: 14 }}>
              <Linkedin size={16} color="var(--accent)" /> linkedin.com/in/vitu-uk
            </a>
            <a href="https://vercel.com/ukvitu9999-7456s-projects" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-dim)", fontSize: 14 }}>
              <Triangle size={16} color="var(--accent)" /> vercel.com/ukvitu
            </a>
          </div>
        </div>
        <form className="card" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={{ fontSize: 12, fontFamily: "var(--mono)", color: "var(--text-dim)", display: "block", marginBottom: 6 }}>Name</label>
            <input value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} placeholder="Your name" required />
          </div>
          <div>
            <label style={{ fontSize: 12, fontFamily: "var(--mono)", color: "var(--text-dim)", display: "block", marginBottom: 6 }}>Email</label>
            <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} placeholder="you@example.com" required />
          </div>
          <div>
            <label style={{ fontSize: 12, fontFamily: "var(--mono)", color: "var(--text-dim)", display: "block", marginBottom: 6 }}>Message</label>
            <textarea rows={4} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} placeholder="Tell me about your project..." required />
          </div>
          <button type="submit" className="btn-primary" style={{ justifyContent: "center" }} disabled={loading}>
            {loading ? "Sending..." : submitted ? "Message Sent ✓" : "Send Message"} <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
