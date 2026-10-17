import React from "react";
import { Terminal, Sun, Moon } from "lucide-react";
import { NAV_ITEMS } from "../constants/portfolioData";

export default function Header({ active, scrollTo, isDark, setTheme }) {
  return (
    <header
      style={{
        position: "sticky",
        top: "18px",
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
          height: "64px",
          padding: "0 22px",
          borderRadius: "20px",
          border: "1px solid var(--border)",
          background: isDark ? "rgba(32, 38, 50, 0.88)" : "rgba(244, 247, 251, 0.88)",
          backdropFilter: "blur(16px)",
          boxShadow: "var(--shadow-soft)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          onClick={() => scrollTo("home")}
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 800,
            fontSize: 17,
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
            letterSpacing: "-0.02em",
          }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "var(--bg)",
              boxShadow: "var(--shadow-inset-sm)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent)",
            }}
          >
            <Terminal size={16} />
          </span>
          <span>
            VITU<span style={{ color: "var(--accent)" }}>.dev</span>
          </span>
        </div>

        <nav
          className="navlinks"
          style={{
            display: "flex",
            gap: 6,
            padding: "5px",
            borderRadius: "16px",
            background: "var(--bg-elev-2)",
            boxShadow: "var(--shadow-inset-sm)",
          }}
        >
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
          className="soft-icon-btn"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Toggle theme"
          title={isDark ? "Switch to Light Soft UI" : "Switch to Dark Soft UI"}
        >
          {isDark ? <Sun size={17} color="var(--accent-3)" /> : <Moon size={17} color="var(--accent-2)" />}
        </button>
      </div>
    </header>
  );
}
