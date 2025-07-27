import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home">Go Back Home</Link>
    </div>
  );
};

export default Error;
