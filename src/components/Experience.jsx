import React from "react";
import { EXPERIENCE, tagColors } from "../constants/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="container" style={{ padding: "80px 24px" }}>
      <div className="section-label"><span>03</span> // commit-history</div>
      <h2 className="section-title">Experience &amp; Training</h2>
      <div style={{ position: "relative", paddingLeft: 28 }}>
        <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: "var(--border)" }} />
        {EXPERIENCE.map((item, i) => (
          <div key={i} style={{ position: "relative", marginBottom: 28 }}>
            <div style={{
              position: "absolute", left: -28, top: 4, width: 16, height: 16,
              borderRadius: "50%", background: "var(--bg)", border: `3px solid ${tagColors[item.tag]}`,
            }} />
            <div className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{item.role}</div>
                  <div style={{ color: "var(--accent-2)", fontSize: 14, marginTop: 2 }}>{item.org}</div>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span className="pill" style={{ color: tagColors[item.tag], borderColor: tagColors[item.tag] }}>{item.tag}</span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--text-dim)" }}>{item.period}</span>
                </div>
              </div>
              <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.7, marginTop: 10 }}>{item.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                {item.stack.map((s) => <span className="pill" key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
