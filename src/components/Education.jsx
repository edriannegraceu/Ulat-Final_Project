import React from 'react';

const Education = () => {
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
        }}>education</h2>
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
          }}>Bachelor of Science in Information Technology and Computer Sciences</h3>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20,
            fontWeight: 400,
            color: "#e8dcc8",
            margin: "0 0 6px",
            lineHeight: 1.25,
            fontWeight: "bold",
          }}>University of the Cordilleras</h2>

          <h2 style={{
            fontFamily: "serif",
            fontSize: 14,
            color: "#e8dcc8",
            margin: "0 0 28px",
            lineHeight: 1.9,
          }}>Focused on software development, UI/UX design, and web technologies. 
            Engaged in various academic projects involving design and programming.</h2>
          </div>
    </div>
    </section>
  );
};

export default Education;