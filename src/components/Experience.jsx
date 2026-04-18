import React from 'react';


const Experience = () => {
  return (
    <section className="my-12">
      <div style={{ display: "flex", justifyContent: "right", marginBottom: 32 }}>
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
        }}>experience</h2>
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
            color: "#c8b89a",
            textTransform: "uppercase",
            marginBottom: 14,
          }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 28,
            fontWeight: 400,
            color: "#e8dcc8",
            margin: "0 0 6px",
            lineHeight: 1.25,
            fontStyle: "italic",
          }}>UI/UX Designer & Developer</h3>

          <h2 style={{
            fontFamily: "serif",
            fontSize: 17,
            color: "#e8dcc8",
            margin: "0 0 28px",
            lineHeight: 1.9,
          }}>Designed and developed responsive web interfaces for various clients. 
            Focused on clean, user-centered design and seamless front-end implementation.</h2>

            <ol style={{
            display: "flex", alignItems: "flex-start", gap: 12,
                marginBottom: 10,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 14,
                color: "white",
                lineHeight: 1.5,
          }}><li>Designed UI mockups and prototypes in Figma</li>
            <li>Created wireframes and high-fidelity mockups</li>
            <li>Converted designs to responsive HTML/CSS/JS</li></ol>
        </div>
    </div>
    </section>
  );
};

export default Experience;