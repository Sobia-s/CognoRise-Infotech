import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './certificate.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import img10 from './images/img10.png';

export function Certificate() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Certificates of Sobia Soomro | Frontend Developer";
  }, [location]);

  const certificates = [
    { id: 1, src: img1, alt: 'Meta Front-End Developer Professional Certificate By Coursera' },
    { id: 2, src: img2, alt: 'JavaScript Essentials 1 By Cisco Networking Academy' },
    { id: 3, src: img3, alt: 'Build a Full Website using WordPress by Coursera' },
    { id: 4, src: img4, alt: 'Increase SEO Traffic with WordPress by Coursera' },
    { id: 5, src: img5, alt: 'Introduction to Microsoft Excel by Coursera' },
    { id: 6, src: img6, alt: 'Digital Literacy by DigiSkills Training Program' },
    { id: 7, src: img7, alt: 'Communication & Soft Skills by DigiSkills Training Program' },
    { id: 8, src: img8, alt: 'Freelancing by DigiSkills Training Program' },
    { id: 9, src: img9, alt: 'WordPress by DigiSkills Training Program' },
    { id: 10, src: img10, alt: 'Certification of Appreciation from Women Tech Network' },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="certificate-main-container">
      <div className="certificate-inner-container">
        <div className="certificate-content">
          <h1 id="certificate_heading">Professional Qualifications</h1>
          <p className="certificate-para">
             These certifications highlight my front-end expertise, dedication, and commitment to continuous growth
          </p>
        </div>
        <div className="certificate-container">
          {certificates.map((item) => (
            <div
              className="certificate-card"
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              <img src={item.src} alt={item.alt} className="card-image" />
            </div>
          ))}
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

export default Certificate;
