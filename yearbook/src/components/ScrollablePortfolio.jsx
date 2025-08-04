import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ScrollablePortfolio.css';

import Header from './Header';

function ScrollablePortfolio() {
  return (
    
    <section className="scroll-container">
      <Header />

      <div style={{height: '155vh'}}></div>

      <div className="scroll-section intro">
        <h2 className="intro-text">Mayokun Lawal</h2>
        <h3 className="intro-subtext">Developer • Designer • Life-long Learner</h3>
        <p className="scroll-hint">Scroll down ↧</p>
      </div>

      <div className="section-boxes">
        <div className="info-box experience-box">Experience</div>
        <div className="info-box projects-box">Projects</div>
        <div className="info-box about-box">About</div>
      </div>

      <div style={{height: '10vh'}}></div>


       <Link className="go-back-link" to="/">
        Go back to FlipBook
      </Link>

        <div style={{height: '5vh'}}></div>


    </section>
  );
}

export default ScrollablePortfolio;



        
    

