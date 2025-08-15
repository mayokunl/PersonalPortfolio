import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



export default function Experience() {
    const [spacerHeight, setSpacerHeight] = useState(64); // default desktop
    
      useEffect(() => {
        function handleResize() {
          const width = window.innerWidth;
    
          if (width <= 768) { 
          setSpacerHeight(80); // Mobile
        } else if (width > 768 && width < 850) { 
          setSpacerHeight(90); // Small desktop
        }else { 
          setSpacerHeight(20); // Full desktop
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
        <h2 className="intro-text">Work Experience</h2>

        <div className="section-boxes">
          {/* SEO */}
          <div className="info-box experience-box">
            <div className="box-content">
              <h4 className="newlabel">Sponsors of Education and Opportunity (SEO)</h4>
              <p className="description">Tech Developer Intern</p>
              <p><i>(May – Aug 2025)</i></p>
              <ul className="WorkDescription">
                <li>Selected as 1 of 200 students nationwide for a competitive program.</li>
                <li>35+ hrs/week building software in agile/SCRUM-like teams using Python, HTML, CSS, Java, JavaScript, SQL, AI, APIs, and data analysis.</li>
                <li>10+ hrs/week of intensive Data Structures & Algorithms training.</li>
                <li>Long-term 1:1 mentoring to sharpen professional skills.</li>
              </ul>
            </div>
          </div>

          {/* PBB */}
          <div className="info-box experience-box">
            <div className="box-content">
              <h4 className="newlabel"><b>Premier Business Brokers</b></h4>
              <p className="description">Marketing Tech / Web Developer Intern</p>
              <p><i>(Jan – May 2025)</i></p>
              <ul className="WorkDescription">
                <li>Built & deployed a Business Evaluation Calculator (HTML/CSS/JS) as a website funnel; integrated Email.js to send submissions to company email.</li>
                <li>Applied SEO with SEMrush; increased website traffic by ~20%.</li>
                <li>Collaborated via Monday CRM to drive data-backed lead generation.</li>
              </ul>
            </div>
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
