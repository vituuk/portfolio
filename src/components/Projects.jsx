import React from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../constants/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="container" style={{ padding: "80px 24px" }}>
      <div className="section-label">04 // PORTFOLIO</div>
      <h2 className="section-title">Projects</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 24 }}>
        {PROJECTS.map((p) => {
          const CardContent = (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: "var(--bg)",
                    boxShadow: "var(--shadow-inset-sm)",
                  }}
                >
                  # {p.name}
                </div>
                {p.link && (
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: "var(--bg)",
                      boxShadow: "var(--shadow-soft-sm)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-2)",
                    }}
                  >
                    <ExternalLink size={15} />
                  </span>
                )}
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, marginTop: 16 }}>{p.title}</div>
              <p style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.75, marginTop: 8, flex: 1 }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
                {p.stack.map((s) => (
                  <span className="pill" key={s}>{s}</span>
                ))}
              </div>
            </>
          );

          if (p.link) {
            return (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                key={p.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                {CardContent}
              </a>
            );
          }

          return (
            <div className="card" key={p.name} style={{ display: "flex", flexDirection: "column" }}>
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
