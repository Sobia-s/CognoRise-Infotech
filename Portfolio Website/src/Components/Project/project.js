import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./project.css";
import img from './images/luckyshrub.jpg';
import img1 from "./images/capstone.jpg";
import img2 from "./images/html.jpg";
import img3 from "./images/react.jpg";
import img4 from "./images/banner.jpg";
import img5 from "./images/banner2.jpg";
import img4_1 from "./images/Blog/blog1.png";
import img4_2 from "./images/Blog/blog2.png";
import img4_3 from "./images/Blog/blog3.png";
import img5_1 from "./images/photography/photo1.jpg";
import img5_2 from "./images/photography/photo2.png";
import img5_3 from "./images/photography/photo3.png";
import img6 from './images/game.jpg';
import img7 from './images/calculator.jpg';
import img8 from './images/todo.jpg';

function Projects() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Portfolio of Sobia Soomro | Frontend Developer";
  }, [location]);

  const projects = [
    {
      image: img,
      title: "E-Commerce Website",
      description: "A fully functional E-Commerce platform built with React, showcasing a stunning design and a fully integrated checkout process",
      button: "https://lucky-shrub-garden-firm.netlify.app/",
    },
    {
      image: img1,
      title:"Restaurant Website",
      description: "A responsive React-based platform for table reservations, featuring dynamic booking and an appealing, user-friendly layout",
      button: "https://my-capstone.netlify.app/",
    },
    {
      image: img3,
      title:"Portfolio Website",
      description: "A modern React-based portfolio featuring functional form submission, a stunning responsive design, and intuitive navigation",
      button: "https://myreact-projects.netlify.app/",
    },
    {
      image: img2,
      title:"Blog Website",
      description: "A modern, responsive blog with a clean design, featuring easy navigation and efficient content management",
      button: "https://little-lemon-blog.netlify.app/",
    },
    {
      image: img5,
      title:"Photography Website",
      description: "A fully functional WordPress photography website with a stunning design, interactive gallery, and a working contact form",
      screenshots: [img5_1, img5_2, img5_3],
    },
    {
      image: img6,
      title:"Engaging Tic-Tac-Toe Game",
      description: "An interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript, featuring stunning design and engaging gameplay",
      button: "https://my-first-tictactoe-game.netlify.app/",
    },
    {
      image: img8,
      title:"To-Do-List App",
      description: "A sleek and user-friendly task manager app with an interactive UI and local storage for efficient task management",
      button: "https://my-1st-todo.netlify.app/",
    },
    {
      image: img7,
      title: "Interactive Calculator",
      description: "A functional React-based calculator for basic arithmetic operations, featuring a clean and intuitive interface",
      button: "https://my-react-first-calculator.netlify.app/",
    },
    {
      image: img4,
      title:"Fully Functional Blog",
      description: "A WordPress blog with a clean layout, integrated contact form, and post features for easy content creation and management",
      screenshots: [img4_1, img4_2, img4_3],
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  const handleButtonClick = (project, index) => {
    if (project.screenshots && project.screenshots.length > 0) {
      setShowModal(true);
      setCurrentIndex(index);
      setScreenshotIndex(0);
    } else {
      window.open(project.button, "_blank", "noopener,noreferrer");
    }
  };

  const nextScreenshot = () => {
    setScreenshotIndex((prevIndex) =>
      (prevIndex + 1) % projects[currentIndex].screenshots.length
    );
  };

  const prevScreenshot = () => {
    setScreenshotIndex((prevIndex) =>
      (prevIndex - 1 + projects[currentIndex].screenshots.length) %
      projects[currentIndex].screenshots.length
    );
  };

  return (
    <div className="project-container">
       <div className="certificate-inner-container">
      <div className="project-content">
      <h2 className="project-main-title">Portfolio</h2>
      <p className="project-para">
       Explore my portfolio of responsive, interactive web projects, showcasing modern front-end development and user-friendly design
      </p>
     </div>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="cards" key={index} onClick={() => handleButtonClick(project, index)}>
            <img src={project.image} alt={project.title} className="card-img" />
            <div className="card-content">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button id="modal_close" onClick={() => setShowModal(false)}>X</button>
            <button className="prev" onClick={prevScreenshot}>{"<"}</button>
            <img
              src={projects[currentIndex].screenshots[screenshotIndex]}
              alt={`Screenshot ${screenshotIndex + 1}`}
              className="modal-image"
            />
            <button className="next" onClick={nextScreenshot}>{">"}</button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Projects;