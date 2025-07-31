// About.jsx
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-left">
          <img src='https://static.vecteezy.com/system/resources/thumbnails/031/734/472/small_2x/glowing-light-bulb-in-the-hands-of-a-man-on-a-black-background-conceptual-image-of-lightbulb-in-hand-against-black-background-ai-generated-free-photo.jpg' alt="About Us" />
        </div>
        <div className="about-right">
          <p className="about-small-title">It Support For Business</p>
          <h2 className="about-heading">
            Preparing for your success <br />
            trusted source in IT services.
          </h2>
          <p className="about-description">
            Logicflow provides a full range of IT support services designed to enhance business operations and drive
            sustainable growth. From expert staffing solutions and advanced EdTech services to secure IT infrastructure,
            we are committed to meeting all your digital and workforce needs.
          </p>

          <div className="about-features">
            <ul>
              <li><span className="tick">✔</span> IT Products</li>
              <li><span className="tick">✔</span> Staffing</li>
            </ul>
            <ul>
              <li><span className="tick">✔</span> IT Services</li>
              <li><span className="tick">✔</span> EduTech</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
