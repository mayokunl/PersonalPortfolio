import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



export default function Projects() {
    const [spacerHeight, setSpacerHeight] = useState(64); // default desktop
    
      useEffect(() => {
        function handleResize() {
          const width = window.innerWidth;
    
          if (width <= 768) { 
          setSpacerHeight(130); // Mobile
        } else if (width > 768 && width < 850) { 
          setSpacerHeight(140); // Small desktop
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
            <div style={{ height: `${spacerHeight}vh` }} />


      <div className="scroll-section intro">
        <h2 className="intro-text">Projects</h2>

        <div className="section-boxes">
          {/* Project 1 */}
          <div className="info-box projects-box">
            <div className="box-content">
              <h4 className="label">Spice-Boyz Website — Freelance Project</h4>
              <p className="description">Team Lead / Project Manager</p>
              <ul className="WorkDescription">
                <li>Responsive multi-page React site for an event planning org with ticketing & email subscriptions.</li>
                <li>Eventbrite API for events; Email.js for signups and notifications.</li>
                <li>Firebase used to collect user input and enable updates.</li>
                <li>Agile simulation with Trello tasks and weekly standups.</li>
              </ul>
              <button
                className="github-button"
                onClick={() => window.open('https://github.com/Spice-Boyz/Hosting-Website', '_blank')}
              >
                CODE BASE
              </button>
              <div style={{ height: "0.75rem" }} />
              <img src="/assets/SPICEBOYZCHROME.png" alt="Spice-Boyz" style={{ width: "30%", borderRadius: 12 }} />
            </div>
          </div>

          {/* Project 2 */}
          <div className="info-box projects-box">
            <div className="box-content">
              <h4 className="label">SentiStock — AI-Powered Stock Analyzer</h4>
              <p className="description">Team Lead</p>
              <ul className="WorkDescription">
                <li>Python CLI that fetches real-time data via Alpha Vantage and generates comparison + sentiment using Gemini API.</li>
                <li>ETL with Pandas → SQLite to persist & query historical data.</li>
                <li>Unit tests for reliability and maintainability.</li>
              </ul>
              <button
                className="github-button"
                onClick={() => window.open('https://github.com/mayokunl/StockTrackerApi', '_blank')}
              >
                CODE BASE
              </button>
              <div style={{ height: "0.75rem" }} />
              <img src="/assets/stocktracker.png" alt="SentiStock" style={{ width: "30%", borderRadius: 12 }} />
            </div>
          </div>

          {/* Project 3 */}
          <div className="info-box projects-box">
            <div className="box-content">
              <h4 className="label">StyleCast — AI-Powered Outfit Planner</h4>
              <p className="description">Team Member</p>
              <ul className="WorkDescription">
                <li>Flask app recommending outfits using real-time weather, trip details, and user preferences.</li>
                <li>Implemented Visual Crossing Weather API for accurate date-range forecasts.</li>
                <li>Designed pipeline to feed user inputs into OpenAI API.</li>
                <li>Auto-generated search queries to pull relevant images via SERP API.</li>
              </ul>
              <button
                className="github-button"
                onClick={() => window.open('https://github.com/mayokunl/Weather-Based-Outfit-Planner', '_blank')}
              >
                CODE BASE
              </button>
              <div style={{ height: "0.75rem" }} />
              <img src="/assets/weatherlogo.png" alt="StyleCast" style={{ width: 70, borderRadius: 12 }} />
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
