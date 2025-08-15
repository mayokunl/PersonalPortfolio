import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



export default function About() {
    const [spacerHeight, setSpacerHeight] = useState(64); // default desktop
    
      useEffect(() => {
        function handleResize() {
          const width = window.innerWidth;
    
          if (width <= 768) { 
          setSpacerHeight(70); // Mobile
        } else if (width > 768 && width < 850) { 
          setSpacerHeight(100); // Small desktop
        }else { 
          setSpacerHeight(1); // Full desktop
        }
    
        }
        handleResize(); // on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
  return (
    <section className="scroll-container">
      <Header />
      <div style={{ height: `${spacerHeight}vh` }} />


      <div className="scroll-section intro">
        <h2 className="intro-text">Oluwamayokun Lawal</h2>
        <h3 className="intro-subtext">Computer Science • Saint Louis University (2023 – 2027)</h3>

        <div className="section-boxes">
          <div className="info-box about-box">
            <div className="box-content">
              <h4 className="label" style={{ textAlign: "center" }}>Who am I?</h4>
              <p className="description-aboutme">
                I'm a creative and driven developer with a passion for Machine Learning and building
                user-focused, visually engaging web experiences. I love blending clean code with thoughtful
                design to create tools that are both functional and beautiful. Always eager to learn and
                contribute to impactful projects.
              </p>

              <div style={{ height: "1rem" }} />
              <h4 className="label">Name</h4>
              <p className="description">Oluwamayokun Lawal</p>

              <h4 className="label">Major</h4>
              <p className="description">Computer Science</p>

              <h4 className="label">School</h4>
              <p className="description">Saint Louis University (2023 – 2027)</p>
            </div>
          </div>

          <div className="info-box about-box" style={{ display: "grid", placeItems: "center" }}>
            <img
              src="/assets/IMG_6428.jpg"
              alt="Profile"
              style={{ maxWidth: "85%", borderRadius: "16px", boxShadow: "0 6px 18px rgba(0,0,0,0.35)" }}
            />
          </div>
        </div>
         <Link
            to="/scrollable"
            className="go-back-link" 

            >
            Go Back To Home
        </Link>
      </div>
    </section>
  );
}
