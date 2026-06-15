import React from "react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "24px", textAlign: "center", fontFamily: "var(--mono)", fontSize: 12, color: "var(--text-dim)" }}>
      © 2026 Vitu — built with React, deployed with CI/CD
    </footer>
  );
}
