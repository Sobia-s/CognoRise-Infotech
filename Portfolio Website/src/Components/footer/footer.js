import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import img from './img-logo.png';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className='footer-container'>
               <div className='img-container'>
                 <Link to="/" onClick={scrollToTop}>
                    <img src={img} alt="Sobia Soomro" className='footer-image' />
                 </Link>
               </div>
               <div className='links-container'>
                  <Link to="/about" className="page-link" onClick={scrollToTop}>About</Link>
                  <Link to="/projects" className='page-link' onClick={scrollToTop}>Portfolio</Link>
                  <Link to="/certificates" className='page-link' onClick={scrollToTop}>Certifications</Link>
                  <Link to="/contact" className='page-link' onClick={scrollToTop}>Contact</Link>
               </div>
               <div className='footer-icons'>
                  <a href="https://github.com/Sobia-s" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/sobiasoomro/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href="https://g.dev/sobiasoomro" target='_blank' rel='noopener noreferrer'><FaGlobe /></a>
                  <a href="mailto:sobiasoomro97@gmail.com" target='_blank' rel='noopener noreferrer'><FaEnvelope /></a>
               </div>
               <div className='footer-last-container'>
                  <span>© Copyright {new Date().getFullYear()} Made by </span>
                  <a href="https://sobia-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="footer-name">
                     Sobia Soomro
                  </a>
               </div>
            </div>
        </footer>
    );
}
