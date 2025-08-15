import { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./ScrollablePortfolio.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ScrollablePortfolio() {
  const [spacerHeight, setSpacerHeight] = useState(64); // default desktop

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width <= 768) { 
      setSpacerHeight(137); // Mobile
    } else if (width > 768 && width < 850) { 
      setSpacerHeight(137); // Small desktop
    }else { 
      setSpacerHeight(2); // Full desktop
    }

    }
    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="scroll-container">
      <Header />

      {/* <-- use the state here */}
      <div style={{ height: `${spacerHeight}vh` }} />

      <div className="scroll-section intro">
        <h2 className="intro-text">Mayokun Lawal</h2>
        <h3 className="intro-subtext">Developer • Designer • Life-long Learner</h3>
        <p className="scroll-hint">Scroll down ↧</p>

      </div>

      

      <div className="section-boxes">
  <Link className="info-box experience-box" to="/experience">
    Experience
  </Link>
  <Link className="info-box projects-box" to="/projects">
    Projects
  </Link>
  <Link className="info-box about-box" to="/about">
    About
  </Link>
</div>


      <div style={{ height: '2vh' }} />

      <div className="social-icons">
    <a href="https://github.com/mayokunl" target="_blank" rel="noopener noreferrer">
      <FaGithub size={30}/>
    </a>
    <a href="https://www.linkedin.com/in/oluwamayokun-lawal/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={30}/>
    </a>
    
    <a href="mailto:lawaloluwamayokun@gmail.com">
    <FaEnvelope size={30} />
  </a>
    
  </div>

      <Link className="go-back-link" to="/">
        Go back to FlipBook
      </Link>
      <div style={{ height: '3vh' }} />
    </section>
  );
}

export default ScrollablePortfolio;



        
    





        
    

