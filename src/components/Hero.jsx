import React from "react";
import { Github, Gitlab, Linkedin, Mail, ChevronRight, Triangle, FileText } from "lucide-react";
import useTypewriter from "../hooks/useTypewriter";
import { TYPEWRITER_WORDS } from "../constants/portfolioData";

export default function Hero({ scrollTo }) {
  const typed = useTypewriter(TYPEWRITER_WORDS);

  return (
    <section id="home" className="container hero-section" style={{ minHeight: "88vh", display: "flex", alignItems: "center", gap: 48, paddingTop: 40, paddingBottom: 40 }}>
      <div style={{ flex: "1 1 520px" }}>
        <div className="fade-up" style={{ fontFamily: "var(--mono)", color: "var(--text-dim)", fontSize: 14, marginBottom: 18 }}>
          $ whoami
        </div>
        <h1 className="fade-up" style={{ fontSize: "clamp(36px, 7vw, 72px)", lineHeight: 1.1, fontWeight: 800, margin: 0, letterSpacing: "-0.03em" }}>
          Hi, I'm <span style={{ color: "var(--accent)" }}>UK VITU</span>.
          <br />
          I build for the <span style={{ color: "var(--accent-2)" }}>web</span>.
        </h1>
        <div className="fade-up" style={{ fontFamily: "var(--mono)", fontSize: "clamp(16px, 2.5vw, 22px)", color: "var(--text-dim)", marginTop: 18, minHeight: 32 }}>
          <span style={{ color: "var(--accent-3)" }}>&gt;</span> {typed}
          <span className="blink" style={{ color: "var(--accent)" }}>|</span>
        </div>
        <p className="fade-up" style={{ maxWidth: 560, color: "var(--text-dim)", lineHeight: 1.7, marginTop: 22, fontSize: 15 }}>
          Computer Science student at Royal University of Phnom Penh, passionate about
          full-stack development, clean architecture, and shipping reliable software
          with modern CI/CD workflows. I also build cross-platform apps with Flutter
          and pair them with Laravel APIs.
        </p>
        <div className="fade-up" style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            View Projects <ChevronRight size={16} />
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("contact")}>
            Get in Touch <Mail size={16} />
          </button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            View Resume <FileText size={16} />
          </a>
        </div>
        <div className="fade-up" style={{ display: "flex", gap: 14, marginTop: 32 }}>
          {[
            { Icon: Github, href: "https://github.com/vituuk" },
            { Icon: Gitlab, href: "https://gitlab.com/users/vitu_ltng/projects" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/vitu-uk-b21877342/" },
            { Icon: Triangle, href: "https://vercel.com/ukvitu9999-7456s-projects" },
            { Icon: Mail, href: "#contact" }
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} style={{ color: "var(--text-dim)", transition: "color 0.2s" }}
               onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-2)"}
               onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-dim)"}>
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
      <div className="fade-up hero-photo-wrap" style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
        <div style={{
          width: 280, height: 350, borderRadius: "24px",
          border: "1px solid var(--border)", background: "var(--bg-elev)",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden", position: "relative",
          boxShadow: "0 20px 60px -20px rgba(63,185,80,0.25)",
        }}>
      
          <img
            src="./imgs/profile.jpg"
            alt="Profile photo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
