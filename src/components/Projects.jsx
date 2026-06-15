import React from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../constants/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="container" style={{ padding: "80px 24px" }}>
  
      <h2 className="section-title">Projects</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {PROJECTS.map((p) => {
          const CardContent = (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent)" }}># {p.name}</div>
                {p.link && <ExternalLink size={16} color="var(--text-dim)" />}
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, marginTop: 10 }}>{p.title}</div>
              <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.7, marginTop: 8, flex: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
                {p.stack.map((s) => <span className="pill" key={s}>{s}</span>)}
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
                  cursor: "pointer"
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
