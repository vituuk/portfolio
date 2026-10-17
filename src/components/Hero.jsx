import React from "react";
import { Github, Gitlab, Linkedin, Mail, ChevronRight, Triangle, FileText } from "lucide-react";
import useTypewriter from "../hooks/useTypewriter";
import { TYPEWRITER_WORDS } from "../constants/portfolioData";

export default function Hero({ scrollTo }) {
  const typed = useTypewriter(TYPEWRITER_WORDS);

  return (
    <section
      id="home"
      className="container hero-section"
      style={{
        minHeight: "86vh",
        display: "flex",
        alignItems: "center",
        gap: 48,
        paddingTop: 48,
        paddingBottom: 48,
      }}
    >
      <div style={{ flex: "1 1 520px" }}>
        <div className="fade-up section-label" style={{ marginBottom: 18 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
            }}
          />
          Available for Software Engineering Opportunities
        </div>

        <h1
          className="fade-up"
          style={{
            fontSize: "clamp(32px, 5.5vw, 54px)",
            lineHeight: 1.12,
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          Hi, I'm <span style={{ color: "var(--accent)" }}>VITU UK</span>.
          <br />
          I build for the <span style={{ color: "var(--accent-2)" }}>web</span>.
        </h1>

        <div
          className="fade-up soft-inset"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "clamp(15px, 2.2vw, 19px)",
            color: "var(--text)",
            marginTop: 22,
            padding: "12px 18px",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            minWidth: 280,
          }}
        >
          <span style={{ color: "var(--accent-3)", fontWeight: 700 }}>&gt;</span>
          <span>{typed}</span>
          <span className="blink" style={{ color: "var(--accent)", fontWeight: 700 }}>
            |
          </span>
        </div>

        <p
          className="fade-up"
          style={{
            maxWidth: 560,
            color: "var(--text-dim)",
            lineHeight: 1.75,
            marginTop: 22,
            fontSize: 15.5,
          }}
        >
          Computer Science student at Royal University of Phnom Penh, passionate about
          full-stack development, clean architecture, and shipping reliable software
          with modern CI/CD workflows. I also build cross-platform apps with Flutter
          and pair them with Laravel APIs.
        </p>

        <div
          className="fade-up hero-actions"
          style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}
        >
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            View Projects <ChevronRight size={16} />
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("contact")}>
            Get in Touch <Mail size={16} />
          </button>
          <a
            href="/resume/VITU_UK_CV%20and%20Cover%20Letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ textDecoration: "none" }}
          >
            View Resume <FileText size={16} />
          </a>
        </div>

        <div
          className="fade-up hero-socials"
          style={{ display: "flex", gap: 12, marginTop: 32 }}
        >
          {[
            { Icon: Github, href: "https://github.com/vituuk", label: "GitHub" },
            { Icon: Gitlab, href: "https://gitlab.com/users/vitu_ltng/projects", label: "GitLab" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/vitu-uk-b21877342/", label: "LinkedIn" },
            { Icon: Triangle, href: "https://vercel.com/ukvitu9999-7456s-projects", label: "Vercel" },
            { Icon: Mail, href: "#contact", label: "Contact" },
          ].map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              aria-label={label}
              title={label}
              className="soft-icon-btn"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div
        className="fade-up hero-photo-wrap"
        style={{ flex: "0 0 310px", display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            padding: 16,
            borderRadius: "34px",
            background: "var(--bg-elev)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <div
            style={{
              width: 278,
              height: 348,
              borderRadius: "24px",
              boxShadow: "var(--shadow-inset)",
              padding: 6,
              background: "var(--bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="./imgs/profile.jpg"
              alt="VITU UK profile photo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
