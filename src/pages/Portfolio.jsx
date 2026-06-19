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
  const [theme, setTheme] = useState("dark");
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
        "--bg": isDark ? "#0d1117" : "#f6f8fa",
        "--bg-elev": isDark ? "#161b22" : "#ffffff",
        "--bg-elev-2": isDark ? "#1c2128" : "#eef1f4",
        "--border": isDark ? "#30363d" : "#d0d7de",
        "--text": isDark ? "#e6edf3" : "#1b1f24",
        "--text-dim": isDark ? "#8b949e" : "#57606a",
        "--accent": "#3fb950",
        "--accent-2": "#58a6ff",
        "--accent-3": "#d29922",
        "--mono": "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace",
        "--sans": "'Inter Tight', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--sans)",
        minHeight: "100vh",
        transition: "background 0.3s ease, color 0.3s ease",
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
          font-size: 15px;
          color: var(--text);
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 8px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          position: relative;
        }
        .navlink:hover {
          color: var(--accent-2);
          background: var(--bg-elev-2);
          transform: translateY(-1px);
        }
        .navlink.active {
          color: var(--accent-2);
          background: var(--bg-elev-2);
          font-weight: 700;
        }
        .navlink.active::after {
          content: "";
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent-2);
          box-shadow: 0 0 6px var(--accent-2);
        }
        .section-label {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--accent);
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          margin: 0 0 32px 0;
          letter-spacing: -0.02em;
        }
        .card {
          background: var(--bg-elev);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 24px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-2);
          box-shadow: 0 12px 24px -12px rgba(0,0,0,0.4);
        }
        .pill {
          font-family: var(--mono);
          font-size: 11px;
          padding: 3px 9px;
          border-radius: 999px;
          border: 1px solid var(--border);
          color: var(--text-dim);
          background: var(--bg-elev-2);
        }
        .btn-primary {
          font-family: var(--mono);
          font-size: 14px;
          background: var(--accent);
          color: #04150a;
          border: none;
          padding: 12px 22px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 18px -8px var(--accent); }
        .btn-secondary {
          font-family: var(--mono);
          font-size: 14px;
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          padding: 12px 22px;
          border-radius: 8px;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-secondary:hover { border-color: var(--accent-2); color: var(--accent-2); }
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
          background: var(--bg-elev-2);
          border: 1px solid var(--border);
          color: var(--text);
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 14px;
          width: 100%;
          transition: border-color 0.2s ease;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent-2);
        }
        .skill-bar-track {
          height: 6px;
          background: var(--bg-elev-2);
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
          .navlinks { display: none; }
          .hero-section { flex-direction: column-reverse; text-align: center; }
          .hero-photo-wrap { flex: 0 0 auto !important; }
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