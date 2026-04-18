import React from "react";

const Skills = () => {
  return (
    <section className="my-12">
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#c8b89a", opacity: 0.8 }} />
      </div>
 
      <div style={{ display: "flex", alignItems: "center", marginBottom: 52 }}>
        <div style={{ width: 60, height: 1, background: "#c8b89a" }} />
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 44,
          fontWeight: 400,
          color: "#e8dcc8",
          margin: 0,
        }}>skills</h2>
      </div>

         <div style={{
          flex: 1,
          background: "rgba(200,184,154,0.07)",
          border: "1px solid rgba(200,184,154,0.18)",
          borderRadius: 20,
          padding: "40px 44px",
          minWidth: 280,
        }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 11,
          letterSpacing: 5,
          color: "rgba(200,184,154,0.4)",
          textTransform: "uppercase",
          marginBottom: 20,
        }}>Tools & Software</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {["HTML", "CSS", "JavaScript", "React", "Figma", "Git", "VS Code", "Tailwind", "Canva", "Notion", "PHP", "MySQL"].map((t) => (
            <span key={t} style={{
              background: "rgba(200,184,154,0.08)",
              border: "1px solid rgba(200,184,154,0.2)",
              borderRadius: 100,
              padding: "7px 20px",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 14,
              color: "#c8b89a",
              letterSpacing: 1.5,
            }}>{t}</span>
          ))}
        </div>
    </div>
    </section>
  );
};

export default Skills;