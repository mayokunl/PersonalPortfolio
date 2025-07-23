import HTMLFlipBook from "react-pageflip";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';



function Book() {
  return (
    <div> 
    <HTMLFlipBook 
      width={400} 
      height={500}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
    >
      {/* Cover Page */}
      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover">
          <img 
            src="/assets/Portfoliologo.png" 
            alt="Yearbook Logo" 
            className="yearbook-logo"
          />
          <h3 style={{ fontFamily: 'Courier New, cursive', color: 'lightgrey' }}> Click to View &rarr; </h3>
        </div>
      </div>

      <div className="Page">
        <h2 className='page-title'>About Me:</h2>

        <div style={{height: '2vh'}}></div>
        <h4 className="label">Name :</h4>
        <p className="description">Oluwamayokun Lawal</p>

        <div style={{height: '2vh'}}></div>
        <h4 className="label" >Major :</h4>
        <p className="description">Computer Science</p>


        <div style={{height: '2vh'}}></div>
        <h4 className="label">School :</h4>
        <p className="description">Saint Louis University (2023 - 2027) </p>

        <div style={{height: '2.2vh'}}></div>
        <h4 className="label" style={{textAlign: 'center'}}>Who am I ? :</h4>
        <div style={{height: '2.2vh'}}></div>
        <p className="description-aboutme"> I'm a creative and driven developer with a passion for Machine Learning and building user-focused, visually engaging web experiences. I enjoy blending clean code with thoughtful design to create digital tools that are both functional and beautiful. Always eager to learn and contribute to impactful projects.</p>

        <img 
            src="/assets/IMG_6428.jpg" 
            alt="Profile"
            className="profile-logo"
          />
      </div>

      <div className="Page">
        <h2 className='page-title'>Work Experience :</h2>
        
        <div style={{height: '7vh'}}></div>
        <h4 className="label">Sponsors of Education and Opportunity(SEO)</h4>
        <p className="description">Tech Developer Intern</p>
         <p><i>(May – Aug 2025)</i></p>
        <div style={{height: '2vh'}}></div>

        <ul className='WorkDescription'>
            <li>1 out of 200 students nationwide, chosen to be a part of this lucrative and competitive program</li>
            <li>Completed 35+ hours a week building software products in agile/SCRUM like teams, Incorporating Web Development, Artificial Intelligence, Data Analysis, API integration and more using Python, HTML, CSS, Java, JavaScript, SQL.</li>
            <li>Completing 10+ hours a week participating in comprehensive and intensive lessons on Data Structures and Algorithms</li>
            <li>Participating in long – term one on one career mentoring and coaching from industry professionals to improve professional skills.</li>

        </ul>
        <img 
            src="/assets/suitandtie.png" 
            alt="Profile"
            className="suit-logo"
          />

      </div>

      <div className="Page">
        <h2 className='page-title'>Work Experience :</h2>
        
        <div style={{height: '5vh'}}></div>
        <h4 className="label">Premier Business Brokers</h4>
        <p className="description">Marketing Tech / Web Developer Intern</p>
        <p><i>(Jan – May 2025)</i></p>
        <div style={{height: '2vh'}}></div>

        <ul className='WorkDescription'>
            <li>Designed, developed, and deployed a Business evaluation Calculator using HTML, CSS, JavaScript, which was implemented as part of a website sales funnel to drive customers to the website. Used the Email.js API to collect user input to be sent to company Email. In the process I gained practical knowledge on M&A Advisory</li>
            <li>Applied SEO techniques and monitored keyword performance using SEMrush, driving a 20% increase in website traffic.</li>
            <li>Used the Monday CRM to collaborate with teams to execute data-driven improvements to get more potential clients (leads) </li>
        </ul>
        <img 
            src="/assets/suitandtie.png" 
            alt="Profile"
            className="suit-logo"
          />
      </div>

      <div className='Page'>
        <h2 className='page-title'>Project #1:</h2>
        
        <div style={{height: '5vh'}}></div>
        <h4 className="label">Spice-Boyz Website - Freelance Project</h4>
        <p className="description">Team Lead / Project Manager </p>
    
        <div style={{height: '2vh'}}></div>

        <ul className='WorkDescription'>
            <li>Used React.js to Develop and designand deploy a responsive, full-stack, multi-page website for an Event Planning organization, that handles ticketing, and email subbscriptions.</li>
            <li>Used Rest APIs such as the Eventbrite API to handle ticketing and Event Description and Email.js for Email Signup notifications, Event hosting and more</li>
            <li>Created a Firebase database to collect user input and allow user to sign up for updates</li>
            <li>Simmulated an agile work environment by assigning tasks using Trello and conducting weekly stand ups</li>
        </ul>

        <div style={{height: '2vh'}}></div>

        <button 
            className="github-button" 
            onClick={() => window.open('https://github.com/Spice-Boyz/Hosting-Website', '_blank')}
            >
            CODE BASE
        </button>



        <img 
            src="/assets/SPICEBOYZCHROME.png" 
            alt="Profile"
            className="spiceboyz-logo"
          />
      </div>

      <div className='Page'>
        <h2 className='page-title'>Project #2:</h2>
      </div>

      <div className='Page'>
        <h2 className='page-title'>Project #3:</h2>
      </div>

      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover">
          <img 
            src="/assets/theend.png"  
            className="yearbook-logo"
          />
      </div>

      </div>
    </HTMLFlipBook>


   <Link
        to="/scrollable"
        className="scrollable-link"
        style={{
            fontFamily: 'Courier New, cursive',
            color: 'blue',
            textAlign: 'center',
            display: 'block',
            width: '100%',
            marginTop: '10px' // optional if you want it pushed to bottom
        }}
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
