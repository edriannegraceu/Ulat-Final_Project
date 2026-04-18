import React from 'react';
import './index.css'; 
import pic from "./assets/pic no. 2.jpeg";

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#1a1a14] font-serif">
        <nav class="#1a1a14 p-4">
    <div class="flex justify-between items-center text-[#c8b89a]">
    <h1 class="text-xl font-bold">MyPortfolio</h1>
    <div class="space-x-6">
      <a href="#" class="hover:text-gray-300">Home</a>
      <a href="#" class="hover:text-gray-300">About Me</a>
      <a href="#" class="hover:text-gray-300">Education</a>
      <a href="#" class="hover:text-gray-300">Experience</a>
      <a href="#" class="hover:text-gray-300">Skills</a>
      <a href="#" class="hover:text-gray-300">Contact</a>
    </div>
  </div>
</nav>
      <div style={{ paddingTop: "100px" }}>
  
  {/* MAIN FLEX CONTAINER */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center", // 👈 IMPORTANT: vertical alignment
      gap: "60px",
    }}
  >

    {/* LEFT TEXT SECTION */}
    <div style={{ flex: 1 }}>

      <div style={{ marginBottom: 24 }}>
        {[
          { text: "designer", line: "left" },
        ].map(({ text, line }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>

            {line === "left" && (
              <div
                style={{
                  width: "clamp(24px, 4vw, 44px)",
                  height: 1,
                  background: "#c8b89a",
                }}
              />
            )}

            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(52px, 12vw, 100px)",
                fontWeight: 400,
                color: "#c8b89a",
                lineHeight: 1.05,
                fontStyle: "italic",
                letterSpacing: -1,
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(14px, 2vw, 17px)",
          color: "rgba(232,220,200,0.65)",
          lineHeight: 1.8,
          margin: "0 0 36px",
          letterSpacing: 0.3,
          maxWidth: "420px",
        }}
      >
        I design interfaces from any concepts.
      </p>

    </div>

    {/* RIGHT IMAGE SECTION */}
    <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>

      <img
        src={pic}
        alt="profile"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "20px",
          objectFit: "cover",
          boxShadow: "0 20px 60px #c8b89a",
        }}
      />
    </div>

  </div>
</div>
      
      <main className="max-w-6xl mx-auto p-6">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
    );
}

export default App;