import React from 'react';

const AboutMe = () => {
  return (
    <section className="my-12">
        <div style={{ display: "flex", justifyContent: "left", marginBottom: 32 }}>
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
          letterSpacing: 3,
        }}>about me</h2>
      </div>
      <div
        style={{
            background: "#c8b89a",
            width: "100%",
            maxWidth: "900px",
            height: "300px",
            margin: "40px auto",
            borderRadius: 12, 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px black",
        }}
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 19,
            color: "#1a1a14",
            lineHeight: 2,
            margin: 10,
            letterSpacing: 0.4,
          }}>
            I'm Edrianne Grace Briones Ulat — a designer and developer.
             A great design involves not just appearance, but user experience.
          </p>
        </div>
    </section>
  );
};

export default AboutMe;