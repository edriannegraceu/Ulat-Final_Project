import React from 'react';


const Contact = () => {
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
        }}>contact</h2>
      </div>
        <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            maxWidth: 1000,
            margin: "0 auto",
            padding: "40px 20px",
            flexWrap: "wrap", // 👈 makes it responsive
        }}>
        <a
            href="mailto:edriannegraceu@gmail.com"
            style={{
            flex: 1,
            minWidth: 280,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#252318",
            border: "1px solid rgba(200,184,154,0.15)",
            borderRadius: 16,
            padding: "30px",
            textDecoration: "none",
            }}>
            <span
            style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 17,
            color: "#e8dcc8",
            }}>
            gmail: edriannegraceu@gmail.com
            </span>
            </a>
        <a
            href="tel:09761821292"
            style={{
            flex: 1,
            minWidth: 280,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#c8b89a",
            borderRadius: 16,
            padding: "30px",
            textDecoration: "none",
            }}>
            <span
            style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                color: "#1a1a14",
                fontWeight: 500,
            }}>
            tel: 09761821292
            </span>
        </a>
        <a
            href="https://linkedin.com"
            style={{
            flex: 1,
            minWidth: 280,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#252318",
            border: "1px solid rgba(200,184,154,0.15)",
            borderRadius: 16,
            padding: "30px",
            textDecoration: "none",
            }}>
            <span
            style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 17,
                color: "#e8dcc8",
            }}>
            Linkedin: Edrianne Grace Briones Ulat
            </span>
        </a>
        </div>
    </section>
  );
};

export default Contact;