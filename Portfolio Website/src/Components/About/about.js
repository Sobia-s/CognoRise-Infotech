import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './about.css';
import badge1 from './badges/FrontEnd Badge.png';
import badge2 from './badges/JS Badge.png';
import badge3 from './badges/techmakers.png';
import badge4 from './badges/quiz.png';
import badge5 from './badges/developer.png';
import badge6 from './badges/html.png';

function About() {
   const location = useLocation();

  useEffect(() => {
    document.title = "About Sobia Soomro | Frontend Developer";
  }, [location]);

  const badges = [
    {id: 1, src: badge1, alt: 'Meta Frontend Developer badge'},
    {id: 2, src: badge2, alt: 'Cisco Javascript Essentials_1 badge'},
    {id: 3, src: badge3, alt: 'Women Techmakers badge'},
    {id: 4, src: badge4, alt: 'First learning quiz badge from google for developers'},
    {id: 5, src: badge5, alt: 'Join Google Developer Program'},
    {id: 6, src: badge6, alt: 'First learning badge complete from google for developers'},
  ]
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  return (
    <div className="container">
      <div className="content">
        <h1 className="about-title">About Me</h1>
          <p className="about-para">
          I'm Sobia, a Front-End Developer specializing in developing intuitive, visually engaging websites that offer seamless user experiences. I transform designs into optimized, user-centric sites, with projects that showcase my abilities—including this portfolio, a visually compelling e-commerce site, an interactive restaurant site, and more. With strong proficiency in creating responsive websites, I prioritize delivering exceptional user experiences and am eager to collaborate with innovative teams and professionals to create impactful, user-centered solutions.
          </p>
        </div>
        <div className="skills">
          <h1 className="skill-heading">My Expertise</h1>
          <div className="skills-container">
          <div className="skill-box">ReactJS</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">GitHub</div>
          <div className="skill-box">UI/UX</div>
          <div className="skill-box">WordPress</div>
          <div className="skill-box">Figma</div>
        </div>
       </div>
       <div className='badges'>
        <div className='badges-conatiner'>
          <h1 className="badge-heading">My Achievements</h1>
          <div className="badge-card-container">
          {badges.map((item) => (
            <div
              className="badge-card"
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              <img src={item.src} alt={item.alt} className="badge-card-image" />
            </div>
          ))}
          </div>
        </div>

        {selectedItem && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button id="close" onClick={closeModal}>
                X
              </button>
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="modal-image"
              />
            </div>
          </div>
        )}
       </div>
       </div>
);
}

export default About;