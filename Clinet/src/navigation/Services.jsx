


import React, { useEffect, useState } from "react";
import './register.css';
const Services = () => {
   const [data, setData] = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
    //   const response = await fetch("http://localhost:5000/allservice", {
    //     method: "get",
    //     headers:{
    //       'Content-Type':'application/json'
    //     }
    //   });

    //   const result = await response.json();
    //   console.log(result); 
    //    setData(result.msg)
      
   try {
     const response  = await fetch('http://localhost:5000/allservices', {
      method:'GET', 
      headers:{
              'Content-Type':'application/json' 
      }
     })
     const data = await response.json(); 
      console.log(data)
       setData(data)
   } catch (error) {
    console.log(error)
   }  
  };

    fetchData();
  }, []);

  return (
    <>
      <h1>servicepage</h1>
      <div>
             <ul>
 {/* <div className="row">
        {data.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{service.service}</h5>
                <p className="card-text">{service.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> ₹{service.price}
                </p>
                <p className="card-text">
                  <strong>Provider:</strong> {service.provider}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}


<div className="container mt-4">
  <div className="row">
    {data.map((service, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div
          className="card h-200 shadow"
          style={{
            backgroundColor: '#F5FFF8', // soft background
            border: '1px solid #88B990',
            borderRadius: '12px',
            
            
          }}
        >
          <div className="card-body" style={{height: '230px'}} >
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













                    
             </ul>
      </div>
    </>
  );
};

export default Services;
