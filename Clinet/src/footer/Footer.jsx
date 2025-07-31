// import React from 'react';
// import { FaWhatsapp, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import './footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-left">
//         <Link to="/" className="footer-link">
//           Home
//         </Link>
//         <Link to="/about" className="footer-link">
//           About
//         </Link>
//         <Link to="/service" className="footer-link">
//           Service
//         </Link>
//       </div>

//       <div className="footer-right">
//         <a target="_blank" rel="noopener noreferrer" className="footer-link">
//           <FaWhatsapp className="footer-icon" /> WhatsApp
//         </a>

//         <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="footer-link">
//           <FaLinkedin className="footer-icon" /> LinkedIn
//         </a>

//         <a href="tel:+919999999999" className="footer-link">
//           <FaPhoneAlt className="footer-icon" /> +91 99999 99999
//         </a>

        
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { FaWhatsapp, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-left">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/service" className="footer-link">Services</Link>
      </div>

      <div className="footer-section footer-right">
        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaWhatsapp className="footer-icon" /> WhatsApp
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaLinkedin className="footer-icon" /> LinkedIn
        </a>
        <a href="tel:+919999999999" className="footer-link">
          <FaPhoneAlt className="footer-icon" /> +91 99999 99999
        </a>
      </div>
    </footer>
  );
};

export default Footer;
