import React from "react";
import { Terminal, Sun, Moon } from "lucide-react";
import { NAV_ITEMS } from "../constants/portfolioData";

export default function Header({ active, scrollTo, isDark, setTheme }) {
  return (
    <header
      style={{
        position: "sticky",
        top: "16px",
        zIndex: 50,
        padding: "0 24px",
        margin: "0 auto",
        maxWidth: "1080px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
          padding: "0 20px",
          borderRadius: "16px",
          border: "1px solid var(--border)",
          background: isDark ? "rgba(22, 27, 34, 0.8)" : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(12px)",
          boxShadow: isDark
            ? "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)"
            : "0 8px 32px 0 rgba(31, 38, 135, 0.05)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ fontFamily: "var(--mono)", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}>
          <Terminal size={18} color="var(--accent)" />
          <span>vitu<span style={{ color: "var(--accent)" }}>.dev</span></span>
        </div>
        <nav className="navlinks" style={{ display: "flex", gap: 4 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`navlink ${active === item ? "active" : ""}`}
              onClick={() => scrollTo(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
        <button
          className="btn-secondary"
          style={{
            padding: 8,
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "transparent",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.borderColor = "var(--accent-2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.borderColor = "var(--border)";
          }}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
}
