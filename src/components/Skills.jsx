import React from "react";
import { Code2, Database, Layers, GitBranch } from "lucide-react";
import { SKILLS } from "../constants/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="container" style={{ padding: "80px 24px" }}>
      <div className="section-label">02 // TECH STACK</div>
      <h2 className="section-title">Skills</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 24 }}>
        {Object.entries(SKILLS).map(([category, items]) => (
          <div className="card" key={category}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background: "var(--bg)",
                  boxShadow: "var(--shadow-inset-sm)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {category === "Frontend" && <Code2 size={18} color="var(--accent-2)" />}
                {category === "Backend" && <Layers size={18} color="var(--accent)" />}
                {category === "Mobile" && <Code2 size={18} color="var(--accent-3)" />}
                {category === "Database" && <Database size={18} color="var(--accent-3)" />}
                {category === "UI Libraries" && <Code2 size={18} color="var(--accent-2)" />}
                {category === "Tools & DevOps" && <GitBranch size={18} color="var(--accent)" />}
              </span>
              <span style={{ fontWeight: 700, fontSize: 16 }}>{category}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {items.map((skill) => (
                <span className="pill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
