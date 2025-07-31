

// Home.jsx
// import React from "react";
// import './register.css'
// import CountUp from 'react-countup'
// const Home = () => {
//   return<>


//   <div className="home-container">
//       <div className="home-text">
//         <h1>Smart Web Solutions for Smart Businesses</h1>
//         <p>Accelerate your growth with expert IT services</p>
//         <button className="home-btn">Get Started</button>
//       </div>
//     </div>
//      <div className="stats-section">
//         <div className="stat-box">
//           <h2><CountUp end={50} duration={2} />+</h2>
//           <p>Companies Served</p>
//         </div>
//         <div className="stat-box">
//           <h2><CountUp end={500} duration={2} />+</h2>
//           <p>Projects Delivered</p>
//         </div>
//         <div className="stat-box">
//           <h2><CountUp end={500} duration={2} />+</h2>
//           <p>Expert Developers</p>
//         </div>
//         <div className="stat-box">
//           <h2><CountUp end={24} duration={2} />/7</h2>
//           <p>Support Available</p>
//         </div>
//       </div>
//   </>
// };
// export default Home;
import React, { useEffect } from 'react';
import './style.css';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheckCircle } from 'react-icons/fa';
import Homeimage  from '../assets/Homeimage.png';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="home-container" style={{
        backgroundImage: `url(${Homeimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}>
        <div className="home-text" data-aos="fade-right">
          <h1>Smart Web Solutions for Smart Businesses</h1>
          <p>Accelerate your growth with expert IT services</p>
          <button className="home-btn">Get Started</button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section" data-aos="fade-up">
        <div className="stat-box">
          <h2><CountUp end={50} duration={5} />+</h2>
          <p>Companies Served</p>
        </div>
        <div className="stat-box">
          <h2><CountUp end={500} duration={5} />+</h2>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-box">
          <h2><CountUp end={500} duration={5} />+</h2>
          <p>Expert Developers</p>
        </div>
        <div className="stat-box">
          <h2><CountUp end={24} duration={5} />/7</h2>
          <p>Support Available</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="whychoose-container">
        {/* Left Image */}
        <div className="whychoose-image" data-aos="zoom-in">
          {/* <img src="https://www.agarwalgupta.in/AgarwalGuptlmages/BlogImage/benefits-of-choosing-a-ca-firm-nearby-l.jpg" alt="Why Choose Us" /> */}

          <img src="https://img.freepik.com/free-photo/team-working-together-project_23-2149325422.jpg" alt="Why Choose Us" />
        </div>

        {/* Right Content */}
        <div className="whychoose-content" data-aos="fade-left">
          <h4>WHY CHOOSE US</h4>
          <h2>
            Trusted for delivering tailored, <br />
            high-quality IT solutions that <br />
            drive real business results.
          </h2>
          <ul className="whychoose-list">
            <li><FaCheckCircle className="check-icon" /> Affordable Solutions: High-quality software at competitive prices.</li>
            <li><FaCheckCircle className="check-icon" /> Comprehensive Services: One-stop for all IT needs, from development to support.</li>
            <li><FaCheckCircle className="check-icon" /> Industry Expertise: Skilled team with experience across various sectors.</li>
            <li><FaCheckCircle className="check-icon" /> Custom Solutions: Tailored services for unique business challenges.</li>
            <li><FaCheckCircle className="check-icon" /> Global & Local Support: Serving clients worldwide with local understanding.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;