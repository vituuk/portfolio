import React from "react";

export default function About() {
  return (
    <section id="about" className="container" style={{ padding: "80px 24px" }}>
      <h2 className="section-title">About Me</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 40, alignItems: "start" }}>
        <div>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: 15.5 }}>
            I'm a Computer Science student at the <strong style={{ color: "var(--text)" }}>Royal University of Phnom Penh</strong>,
            and I'm also studying English Language at <strong style={{ color: "var(--text)" }}>Panhasas University of Cambodia</strong>.
            I'm driven by curiosity for full-stack development and a steady habit of leveling up
            my software engineering skills, from frontend interfaces to backend systems and the
            pipelines that ship them.
          </p>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: 15.5, marginTop: 14 }}>
            Outside of coursework, I work on real projects through internships and training programs,
            building hands-on experience with version control, collaborative workflows, and CI/CD —
            the practices that turn code into reliable products.
          </p>
        </div>
        <div className="card">
          <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--text-dim)", marginBottom: 14 }}>education.json</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>Computer Science</div>
              <div style={{ color: "var(--accent-2)", fontFamily: "var(--mono)", fontSize: 13, marginTop: 4 }}>Royal University of Phnom Penh</div>
            </div>
            <div style={{ height: 1, background: "var(--border)" }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>English Language</div>
              <div style={{ color: "var(--accent-2)", fontFamily: "var(--mono)", fontSize: 13, marginTop: 4 }}>Panhasas University of Cambodia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
