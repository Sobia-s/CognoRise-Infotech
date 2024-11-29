import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from './img.png';
import "./nav.css";

export function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
        }
    };

    const closeMenu = () => {
        if (isMobile) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="nav-container">
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
            </div>
            <Link to="/" onClick={closeMenu}>
                <img src={logo} alt="Logo" width={130} height={90} className="logo-img" />
            </Link>
            <ul className={`nav-items ${isOpen ? "open" : ""}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/projects" onClick={closeMenu}>Portfolio</Link></li>
                <li><Link to="/certificates" onClick={closeMenu}>Certificates</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
}

