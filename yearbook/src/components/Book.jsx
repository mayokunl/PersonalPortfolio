import HTMLFlipBook from "react-pageflip";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';





function Book() {
  return (
    <div className="book-container" > 
      <HTMLFlipBook 
        width={370} 
        height={530}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size='fixed'
      >
        {/* Cover Page */}
        <div className="page" style={{ background: 'transparent' }}>
          <div className="page-content cover" >
            <img 
              src="/assets/Portfoliologo.png" 
              alt="Yearbook Logo" 
              className="yearbook-logo page-animate-zoom"
            />
            <h3 className="page-animate-zoom" style={{ fontFamily: 'Courier New, cursive', color: 'lightgrey' }}> Click to View &rarr; </h3>
          </div>
        </div>

        <div className="Page">
            <h2 className='page-title page-animate-fade'>About Me:</h2>
            <div style={{height: '3vh'}}></div>
            <h4 className="label page-animate-fade">Name :</h4>
            <p className="description page-animate-fade">Oluwamayokun Lawal</p>

            <div style={{height: '2vh'}}></div>
            <h4 className="label page-animate-fade" >Major :</h4>
            <p className="description page-animate-fade">Computer Science</p>


            <div style={{height: '2vh'}}></div>
            <h4 className="label page-animate-fade">School :</h4>
            <p className="description page-animate-fade">Saint Louis University (2023 - 2027) </p>

            <div style={{height: '2.2vh'}}></div>
            <h4 className="label page-animate-fade" style={{textAlign: 'center'}}>Who am I ? :</h4>
            <div style={{height: '2.2vh'}}></div>
            <p className="description-aboutme page-animate-fade"> I'm a creative and driven developer with a passion for Machine Learning and building user-focused, visually engaging web experiences. I enjoy blending clean code with thoughtful design to create digital tools that are both functional and beautiful. Always eager to learn and contribute to impactful projects.</p>

            <img 
                src="/assets/IMG_6428.jpg" 
                alt="Profile"
                className="profile-logo page-animate-fade"
              />
        </div>

        <div className="Page">
            <h2 className='page-title page-animate-fade'>Work Experience :</h2>
            
            <div style={{height: '7vh'}}></div>
            <h4 className="label page-animate-fade">Sponsors of Education and Opportunity(SEO)</h4>
            <p className="description page-animate-fade">Tech Developer Intern</p>
            <p className="page-animate-fade"><i>(May – Aug 2025)</i></p>
            <div style={{height: '2vh'}}></div>

            <ul className='WorkDescription page-animate-fade'>
                <li>1 out of 200 students nationwide, chosen to be a part of this lucrative and competitive program</li>
                <li>Completed 35+ hours a week building software products in agile/SCRUM like teams, Incorporating Web Development, Artificial Intelligence, Data Analysis, API integration and more using Python, HTML, CSS, Java, JavaScript, SQL.</li>
                <li>Completing 10+ hours a week participating in comprehensive and intensive lessons on Data Structures and Algorithms</li>
                <li>Participating in long – term one on one career mentoring and coaching from industry professionals to improve professional skills.</li>

            </ul>
            <img 
                src="/assets/suitandtie.png" 
                alt="Profile"
                className="suit-logo page-animate-fade"
              />

        </div>

        <div className="Page">
            <h2 className='page-title page-animate-fade'>Work Experience :</h2>
            
            <div style={{height: '5vh'}}></div>
            <h4 className="label page-animate-fade">Premier Business Brokers</h4>
            <p className="description page-animate-fade">Marketing Tech / Web Developer Intern</p>
            <p className="page-animate-fade"><i>(Jan – May 2025)</i></p>
            <div style={{height: '2vh'}}></div>

            <ul className='WorkDescription page-animate-fade'>
                <li>Designed, developed, and deployed a Business evaluation Calculator using HTML, CSS, JavaScript, which was implemented as part of a website sales funnel to drive customers to the website. Used the Email.js API to collect user input to be sent to company Email. In the process I gained practical knowledge on M&A Advisory</li>
                <li>Applied SEO techniques and monitored keyword performance using SEMrush, driving a 20% increase in website traffic.</li>
                <li>Used the Monday CRM to collaborate with teams to execute data-driven improvements to get more potential clients (leads) </li>
            </ul>
            <img 
                src="/assets/suitandtie.png" 
                alt="Profile"
                className="suit-logo page-animate-fade"
              />
        </div>

        <div className='Page'>
            <h2 className='page-title page-animate-fade'>Project #1:</h2>
            
            <div style={{height: '5vh'}}></div>
            <h4 className="label page-animate-fade">Spice-Boyz Website - Freelance Project</h4>
            <p className="description page-animate-fade">Team Lead / Project Manager </p>
        
            <div style={{height: '2vh'}}></div>

            <ul className='WorkDescription page-animate-fade'>
                <li>Used React.js to Develop, design and deploy a responsive, full-stack, multi-page website for an Event Planning organization, that handles ticketing, and email subbscriptions.</li>
                <li>Used Rest APIs such as the Eventbrite API to handle ticketing and Event Description and Email.js for Email Signup notifications, Event hosting and more</li>
                <li>Created a Firebase database to collect user input and allow user to sign up for updates</li>
                <li>Simmulated an agile work environment by assigning tasks using Trello and conducting weekly stand ups</li>
            </ul>

            <div style={{height: '2vh'}}></div>

            <button 
                className="github-button page-animate-fade" 
                onClick={() => window.open('https://github.com/Spice-Boyz/Hosting-Website', '_blank')}
                >
                CODE BASE
            </button>
            <button style={{marginLeft: 10}}
                className="github-button page-animate-fade" 
                onClick={() => window.open('https://hosting-website-gamma.vercel.app/', '_blank')}
                >
                Link
            </button>
            
            <img 
                src="/assets/SPICEBOYZCHROME.png" 
                alt="Profile"
                className="spiceboyz-logo page-animate-fade"
              />
        </div>

        <div className='Page'>
            <h2 className='page-title page-animate-fade'>Project #2:</h2>
            <div style={{height: '5vh'}}></div>
            <h4 className="label page-animate-fade">SentiStock - AI Powered Stock analyzer</h4>
            <p className="description page-animate-fade">Team Lead</p>
        
            <div style={{height: '2vh'}}></div>

            <ul className='WorkDescription page-animate-fade'>
                <li>Used Python to develop a command-line stock analysis app that fetches real time stock data via the Alpha Vantage API and generates a comparison and sentiment analysis of each stock using Google Gemini AI API.</li>
                <li>Worked closely with a team-mate to develop a data pipeline that extracted data from the Restful API, transformed it with Pandas, and loaded it into an SQLite database, this allowed for historical tracking and persistent querying.</li>
                <li>Incorporated Unit testing for key functions to ensure reliability and maintainability of the codebase.</li>
        
            </ul>

            <div style={{height: '2vh'}}></div>

            <button 
                className="github-button page-animate-fade" 
                onClick={() => window.open('https://github.com/mayokunl/StockTrackerApi', '_blank')}
                >
                CODE BASE
            </button>


            
            <img 
                src="/assets/stocktracker.png" 
                alt="Profile"
                className="suit-logo page-animate-fade"
              />
        </div>

        <div className='Page'>
            <h2 className='page-title page-animate-fade'>Project #3:</h2>
            <div style={{height: '5vh'}}></div>
            <h4 className="label page-animate-fade">StyleCast - AI Powered Outfit Planner</h4>
            <p className="description page-animate-fade">Team Member</p>
        
            <div style={{height: '2vh'}}></div>

            <ul className='WorkDescription page-animate-fade'>
                <li>Developed a Web Application using Flask, HTML and CSS that generates outfit recommendations for vacations by analyzing real time weather data, trip details, and User preferences.</li>
                <li>Led front-end design coordination and Spearheaded the implementation and testing of the Visual Crossing Weather API integration, ensuring accurate forecasts tailored to specific travel timelines. </li>
                <li> Designed and implemented the data pipeline that feeds user inputs into OpenAI API . </li> 
                <li>Enabled automated search query generation from OpenAI outputs to retrieve relevant images via the SERP API</li>
        
            </ul>

            <div style={{height: '2vh'}}></div>

            <button 
                className="github-button page-animate-fade" 
                onClick={() => window.open('https://github.com/mayokunl/Weather-Based-Outfit-Planner', '_blank')}
                >
                CODE BASE
            </button>

             <button style={{marginLeft: 10}}
                className="github-button page-animate-fade" 
                onClick={() => window.open('https://weather-based-outfit-planner.onrender.com/', '_blank')}
                >
                Link
            </button>
            
            <img 
                src="/assets/weatherlogo.png" 
                alt="Profile"
                className="suit-logo page-animate-fade"
              />
        </div>

        <div className="page" style={{ background: 'transparent' }}>
          <div className="page-content cover">
            <img 
              alt = "nuttindey"
              src="/assets/theend.png"  
              className="yearbook-logo page-animate-zoom"
            />
        </div>

        </div>
      </HTMLFlipBook>


      <Link
            to="/scrollable"
            className="scrollable-link"

            >
            View a Scrollable Website
        </Link>

        <div className="contact-icons">
            <a href="mailto:lawaloluwamayokun@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={24} />
            </a>
            <a href="https://github.com/mayokunl" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/oluwamayokun-lawal" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
            </a>
        </div>


    </div>
  );
}

export default Book;
