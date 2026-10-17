import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "../constants/portfolioData";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
  const [theme, setTheme] = useState("light");
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = theme === "dark";

  return (
    <div
      style={{
        "--bg": isDark ? "#1a1f29" : "#eef2f6",
        "--bg-elev": isDark ? "#202632" : "#f4f7fb",
        "--bg-elev-2": isDark ? "#151922" : "#e5eaf1",
        "--border": isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.85)",
        "--border-subtle": isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(163, 177, 198, 0.28)",
        "--text": isDark ? "#f1f5f9" : "#1e293b",
        "--text-dim": isDark ? "#94a3b8" : "#64748b",
        "--accent": isDark ? "#34d399" : "#10b981",
        "--accent-2": isDark ? "#60a5fa" : "#3b82f6",
        "--accent-3": isDark ? "#fbbf24" : "#f59e0b",
        "--shadow-soft": isDark
          ? "8px 8px 18px rgba(10, 13, 18, 0.68), -6px -6px 16px rgba(38, 46, 62, 0.42)"
          : "9px 9px 20px rgba(163, 177, 198, 0.52), -9px -9px 20px rgba(255, 255, 255, 0.92)",
        "--shadow-soft-hover": isDark
          ? "12px 12px 26px rgba(8, 11, 16, 0.78), -8px -8px 20px rgba(44, 53, 71, 0.5)"
          : "14px 14px 28px rgba(163, 177, 198, 0.62), -12px -12px 26px rgba(255, 255, 255, 0.98)",
        "--shadow-soft-sm": isDark
          ? "4px 4px 10px rgba(10, 13, 18, 0.58), -3px -3px 8px rgba(38, 46, 62, 0.35)"
          : "4px 4px 10px rgba(163, 177, 198, 0.45), -4px -4px 10px rgba(255, 255, 255, 0.88)",
        "--shadow-inset": isDark
          ? "inset 4px 4px 9px rgba(10, 13, 18, 0.7), inset -3px -3px 8px rgba(38, 46, 62, 0.35)"
          : "inset 4px 4px 9px rgba(163, 177, 198, 0.48), inset -4px -4px 9px rgba(255, 255, 255, 0.88)",
        "--shadow-inset-sm": isDark
          ? "inset 2px 2px 5px rgba(10, 13, 18, 0.65), inset -2px -2px 5px rgba(38, 46, 62, 0.32)"
          : "inset 3px 3px 6px rgba(163, 177, 198, 0.45), inset -3px -3px 6px rgba(255, 255, 255, 0.85)",
        "--mono": "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace",
        "--sans": "'Inter Tight', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        "--heading": "'Inter Tight', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--sans)",
        minHeight: "100vh",
        transition: "background 0.35s ease, color 0.35s ease",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        a { color: inherit; }
        .container { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
        .navlink {
          font-family: var(--sans);
          font-weight: 500;
          font-size: 14.5px;
          color: var(--text-dim);
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          padding: 7px 16px;
          border-radius: 12px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          position: relative;
        }
        .navlink:hover {
          color: var(--text);
          background: var(--bg-elev);
          box-shadow: var(--shadow-soft-sm);
          border-color: var(--border);
          transform: translateY(-1px);
        }
        .navlink.active {
          color: var(--accent-2);
          background: var(--bg);
          box-shadow: var(--shadow-inset-sm);
          border-color: transparent;
          font-weight: 700;
          transform: translateY(0);
        }
        .section-label {
          font-family: var(--mono);
          font-size: 12.5px;
          color: var(--accent);
          letter-spacing: 0.06em;
          margin-bottom: 10px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border-radius: 999px;
          background: var(--bg);
          box-shadow: var(--shadow-inset-sm);
        }
        .section-title {
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 800;
          margin: 0 0 36px 0;
          letter-spacing: -0.025em;
          color: var(--text);
        }
        .card {
          background: var(--bg-elev);
          border: 1px solid var(--border);
          border-radius: 22px;
          padding: 28px;
          box-shadow: var(--shadow-soft);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-soft-hover);
        }
        .soft-inset {
          background: var(--bg);
          border-radius: 16px;
          box-shadow: var(--shadow-inset);
          border: 1px solid var(--border-subtle);
        }
        .pill {
          font-family: var(--mono);
          font-size: 11.5px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 999px;
          border: 1px solid var(--border);
          color: var(--text-dim);
          background: var(--bg-elev);
          box-shadow: var(--shadow-soft-sm);
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .pill:hover {
          color: var(--accent-2);
          transform: translateY(-1px);
        }
        .btn-primary {
          font-family: var(--sans);
          font-size: 14.5px;
          background: linear-gradient(135deg, var(--accent), #059669);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 12px 24px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: var(--shadow-soft-sm), 0 6px 16px -4px rgba(16, 185, 129, 0.4);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-soft), 0 10px 22px -4px rgba(16, 185, 129, 0.5);
        }
        .btn-primary:active {
          transform: translateY(0);
          box-shadow: var(--shadow-inset-sm);
        }
        .btn-secondary {
          font-family: var(--sans);
          font-size: 14.5px;
          font-weight: 600;
          background: var(--bg-elev);
          color: var(--text);
          border: 1px solid var(--border);
          padding: 12px 24px;
          border-radius: 14px;
          cursor: pointer;
          box-shadow: var(--shadow-soft-sm);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-secondary:hover {
          color: var(--accent-2);
          transform: translateY(-2px);
          box-shadow: var(--shadow-soft);
        }
        .btn-secondary:active {
          transform: translateY(0);
          box-shadow: var(--shadow-inset-sm);
        }
        .soft-icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          background: var(--bg-elev);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-soft-sm);
          color: var(--text-dim);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }
        .soft-icon-btn:hover {
          color: var(--accent-2);
          transform: translateY(-2px);
          box-shadow: var(--shadow-soft);
        }
        .soft-icon-btn:active {
          transform: translateY(0);
          box-shadow: var(--shadow-inset-sm);
        }
        .fade-up {
          animation: fadeUp 0.7s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .blink { animation: blink 1s steps(2) infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        input, textarea {
          font-family: var(--sans);
          background: var(--bg);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-inset);
          color: var(--text);
          border-radius: 14px;
          padding: 13px 16px;
          font-size: 14.5px;
          width: 100%;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-dim);
          opacity: 0.7;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent-2);
          box-shadow: var(--shadow-inset), 0 0 0 3px rgba(59, 130, 246, 0.15);
        }
        .skill-bar-track {
          height: 8px;
          background: var(--bg);
          box-shadow: var(--shadow-inset-sm);
          border-radius: 999px;
          overflow: hidden;
          flex: 1;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--accent-2), var(--accent));
          transition: width 1.2s ease;
        }
        @media (max-width: 720px) {
          .navlinks { display: none !important; }
          .hero-section { flex-direction: column-reverse; text-align: center; }
          .hero-photo-wrap { flex: 0 0 auto !important; }
          .hero-actions, .hero-socials { justify-content: center; }
        }
        @media (max-width: 860px) {
          section#about > div, section#contact > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Navigation Header */}
      <Header active={active} scrollTo={scrollTo} isDark={isDark} setTheme={setTheme} />

      {/* Main Sections */}
      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}