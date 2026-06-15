import React from "react";
import { Code2, Database, Layers, GitBranch } from "lucide-react";
import { SKILLS } from "../constants/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="container" style={{ padding: "80px 24px" }}>
       
      <h2 className="section-title">Skills</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {Object.entries(SKILLS).map(([category, items]) => (
          <div className="card" key={category}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              {category === "Frontend" && <Code2 size={18} color="var(--accent-2)" />}
              {category === "Backend" && <Layers size={18} color="var(--accent)" />}
              {category === "Mobile" && <Code2 size={18} color="var(--accent-3)" />}
              {category === "Database" && <Database size={18} color="var(--accent-3)" />}
              {category === "UI Libraries" && <Code2 size={18} color="var(--accent-2)" />}
              {category === "Tools & DevOps" && <GitBranch size={18} color="var(--accent)" />}
              <span style={{ fontWeight: 600, fontSize: 15 }}>{category}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
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
