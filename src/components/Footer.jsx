import React from "react";

export default function Footer() {
  return (
    <footer className="container" style={{ padding: "0 24px 40px", textAlign: "center" }}>
      <div
        className="soft-inset"
        style={{
          padding: "18px 24px",
          fontFamily: "var(--mono)",
          fontSize: 12.5,
          color: "var(--text-dim)",
          borderRadius: "18px",
        }}
      >
        © 2026 Vitu — built with React, deployed with CI/CD
      </div>
    </footer>
  );
}
