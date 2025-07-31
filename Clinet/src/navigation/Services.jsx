import React, { useEffect, useState } from "react";
import './register.css';

const Services = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mern-y1sz.onrender.com/allservices', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Stop loading after fetch completes
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="usertitle">Service Page</h1>

      {/* Show loading while fetching */}
      {loading ? (
        <div className="text-center mt-4">
          <p style={{ fontSize: '18px', color: '#1B515E' }}>Loading services...</p>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="container mt-4">
          <div className="row">
            {data.map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className="card h-200 shadow"
                  style={{
                    backgroundColor: '#F5FFF8',
                    border: '1px solid #88B990',
                    borderRadius: '12px',
                  }}
                >
                  <div className="card-body" style={{ height: '230px' }}>
                    <h5
                      className="card-title"
                      style={{ color: '#1B515E', fontWeight: '600' }}
                    >
                      {service.service}
                    </h5>
                    <p className="card-text mt-3" style={{ color: '#338275' }}>
                      {service.description}
                    </p>
                    <p className="card-text mb-3" style={{ color: '#1B515E' }}>
                      <strong>Price:</strong> ₹{service.price}
                    </p>
                    <p className="card-text mb-2" style={{ color: '#1B515E' }}>
                      <strong>Provider:</strong> {service.provider}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
