import React, { useEffect } from 'react';
import { useLocation, Link} from 'react-router-dom';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa';
import './banner1.css';
import './banner2.css';
import img1 from '../Project/images/luckyshrub.jpg';
import img2 from '../Project/images/capstone.jpg';
import img3 from '../Project/images/react.jpg';

export default function Banner() {
    const location = useLocation();

    useEffect(() => {
        document.title = "Sobia Soomro | Frontend Developer";
    }, [location]);

    return (
        <>
          <div class="banner-container">
          <div class="banner-content">
           <h1 id="banner-heading">Hello, I'm Sobia</h1>
            <p class="banner-para">
            Excited to Develop Responsive, Intuitive, and User-Focused Websites as a Front-End Developer
            </p>
            <Link to="/projects" className="skills-btn">See My Work</Link>
        <div class="social-icons">
            <a href="https://github.com/Sobia-s" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                <FaGithub class="icon" />
                <span class="icon-label">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sobiasoomro/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                <FaLinkedin class="icon" />
                <span class="icon-label">LinkedIn</span>
            </a>
            <a href="https://g.dev/sobiasoomro" target="_blank" rel="noreferrer" aria-label="Google Developer Profile">
                <FaGlobe class="icon" />
                <span class="icon-label">Google Developer Profile</span>
            </a>
            <a href="mailto:sobiasoomro97@gmail.com" target="_blank" rel="noreferrer" aria-label="Send Email">
               <FaEnvelope className="icon" />
                <span className="icon-label">Email</span>
            </a>
          </div>
        </div>
       </div>
            <section className="featured-projects-section">
                <div className="projects-intro-section">
                    <div className="line-container">
                        <div className="line"></div>
                        <span className="projects-intro-text">SOME OF MY LATEST WORK</span>
                        <div className="line"></div>
                    </div>
                </div>
              <div className="projects-container">
               <a href="https://lucky-shrub-garden-firm.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="cards">
              <img src={img1} alt="E-Commerce Website project" className="card-img" />
               <div className="card-content">
                 <h3 className="project-title">E-Commerce Website</h3>
                 <p className="project-description">
                   A fully functional E-Commerce platform built with React, showcasing a stunning design and an integrated checkout process
                 </p>
               </div>
              </div>
             </a>
            <a href="https://my-capstone.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
             <div className="cards">
              <img src={img2} alt="Restaurant website project" className="card-img" />
               <div className="card-content">
                 <h3 className="project-title">Restaurant Website</h3>
                 <p className="project-description">
                   A responsive React-based platform for table reservations, featuring dynamic booking and an appealing, user-friendly layout
                </p>
            </div>
           </div>
         </a>
        <a href="https://myreact-projects.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
           <div className="cards">
             <img src={img3} alt="Portfolio website project" className="card-img" />
              <div className="card-content">
                 <h3 className="project-title">Portfolio Website</h3>
                 <p className="project-description">
                    A modern React-based portfolio featuring functional form submission, a stunning responsive design, and intuitive navigation
                 </p>
            </div>
          </div>
        </a>
     </div>
    </section>
  </>
 )
}
