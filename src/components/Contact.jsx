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
      <div className="section-label">05 // CONNECT</div>
      <h2 className="section-title">Contact</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 36, alignItems: "start" }}>
        <div className="card">
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: 15 }}>
            Have an opportunity, project, or just want to talk about full-stack development?
            My inbox is open.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
            {[
              { Icon: Github, href: "https://github.com/vituuk", text: "github.com/vituuk" },
              { Icon: Gitlab, href: "https://gitlab.com/users/vitu_ltng/projects", text: "gitlab.com/users/vitu_ltng/projects" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vitu-uk-b21877342/", text: "linkedin.com/in/vitu-uk" },
              { Icon: Triangle, href: "https://vercel.com/ukvitu9999-7456s-projects", text: "vercel.com/ukvitu" },
            ].map(({ Icon, href, text }) => (
              <a
                key={text}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-inset"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "var(--text)",
                  fontSize: 14,
                  padding: "12px 16px",
                  textDecoration: "none",
                  transition: "color 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent-2)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <Icon size={17} color="var(--accent)" />
                <span style={{ fontFamily: "var(--mono)", fontSize: 13 }}>{text}</span>
              </a>
            ))}
          </div>
        </div>
        <form className="card" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label style={{ fontSize: 12.5, fontFamily: "var(--mono)", color: "var(--text-dim)", display: "block", marginBottom: 8 }}>Name</label>
            <input value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} placeholder="Your name" required />
          </div>
          <div>
            <label style={{ fontSize: 12.5, fontFamily: "var(--mono)", color: "var(--text-dim)", display: "block", marginBottom: 8 }}>Email</label>
            <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} placeholder="you@example.com" required />
          </div>
          <div>
            <label style={{ fontSize: 12.5, fontFamily: "var(--mono)", color: "var(--text-dim)", display: "block", marginBottom: 8 }}>Message</label>
            <textarea rows={4} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} placeholder="Tell me about your project..." required />
          </div>
          <button type="submit" className="btn-primary" style={{ justifyContent: "center", marginTop: 4 }} disabled={loading}>
            {loading ? "Sending..." : submitted ? "Message Sent ✓" : "Send Message"} <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
