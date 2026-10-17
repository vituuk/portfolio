import React from "react";
import { EXPERIENCE, tagColors } from "../constants/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="container" style={{ padding: "80px 24px" }}>
      <div className="section-label">03 // JOURNEY</div>
      <h2 className="section-title">Experience &amp; Training</h2>
      <div style={{ position: "relative", paddingLeft: 36 }}>
        <div
          style={{
            position: "absolute",
            left: 9,
            top: 8,
            bottom: 8,
            width: 6,
            borderRadius: 999,
            background: "var(--bg)",
            boxShadow: "var(--shadow-inset-sm)",
          }}
        />
        {EXPERIENCE.map((item, i) => (
          <div key={i} style={{ position: "relative", marginBottom: 28 }}>
            <div
              style={{
                position: "absolute",
                left: -34,
                top: 18,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "var(--bg-elev)",
                boxShadow: "var(--shadow-soft-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: tagColors[item.tag],
                }}
              />
            </div>
            <div className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17 }}>{item.role}</div>
                  <div style={{ color: "var(--accent-2)", fontWeight: 600, fontSize: 14, marginTop: 3 }}>{item.org}</div>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span
                    className="pill"
                    style={{
                      color: tagColors[item.tag],
                      boxShadow: "var(--shadow-inset-sm)",
                      background: "var(--bg)",
                    }}
                  >
                    {item.tag}
                  </span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--text-dim)" }}>{item.period}</span>
                </div>
              </div>
              <p style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.75, marginTop: 12 }}>{item.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {item.stack.map((s) => (
                  <span className="pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
