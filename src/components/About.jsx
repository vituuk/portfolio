import React from "react";

export default function About() {
  return (
    <section id="about" className="container" style={{ padding: "80px 24px" }}>
      <div className="section-label">01 // PROFILE</div>
      <h2 className="section-title">About Me</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32, alignItems: "stretch" }}>
        <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: 15.5 }}>
            I'm a Computer Science student at the <strong style={{ color: "var(--text)" }}>Royal University of Phnom Penh</strong>,
            and I'm also studying English Language at <strong style={{ color: "var(--text)" }}>Panhasas University of Cambodia</strong>.
            I'm driven by curiosity for full-stack development and a steady habit of leveling up
            my software engineering skills, from frontend interfaces to backend systems and the
            pipelines that ship them.
          </p>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: 15.5, marginTop: 16 }}>
            Outside of coursework, I work on real projects through internships and training programs,
            building hands-on experience with version control, collaborative workflows, and CI/CD —
            the practices that turn code into reliable products.
          </p>
        </div>

        <div className="card">
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 12.5,
              color: "var(--accent)",
              marginBottom: 16,
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 999,
              background: "var(--bg)",
              boxShadow: "var(--shadow-inset-sm)",
            }}
          >
            education.json
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="soft-inset" style={{ padding: "16px 18px" }}>
              <div style={{ fontWeight: 700, fontSize: 15.5 }}>Computer Science</div>
              <div style={{ color: "var(--accent-2)", fontFamily: "var(--mono)", fontSize: 13, marginTop: 4 }}>
                Royal University of Phnom Penh
              </div>
            </div>
            <div className="soft-inset" style={{ padding: "16px 18px" }}>
              <div style={{ fontWeight: 700, fontSize: 15.5 }}>English Language</div>
              <div style={{ color: "var(--accent-2)", fontFamily: "var(--mono)", fontSize: 13, marginTop: 4 }}>
                Panhasas University of Cambodia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
