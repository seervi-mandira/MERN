


import React, { useEffect, useState } from "react";
import '../navigation/register.css';
 import './adminuser.css';
 import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const AdminService = () => {
   const [data, setData] = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
   
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


const handleDeleteService = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const deletedata = await response.json();
    console.log('Service deleted:', deletedata);

    if (response.ok) {
      setData(prevService => 
        prevService.filter(service => service._id !== id)
      );
    }
  } catch (error) {
    console.log(error);
  }
};


















  return (
    <>
      <h1 className="admin-title">Service Data</h1>
      <div>
             <ul>
 

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
            <p className="card-text mt-2" style={{ color: '#338275' }}>
              {service.description}
            </p>
            <p className="card-text mb-2" style={{ color: '#1B515E' }}>
              <strong>Price:</strong> ₹{service.price}
            </p>
            <p className="card-text mb-2" style={{ color: '#1B515E' }}>
              <strong>Provider:</strong> {service.provider}
            </p>
           <button className="edit-btn"><FaEdit /> Edit</button>
           <button className="delete-btn" onClick={() => handleDeleteService(service._id)}><MdDelete /> Delete</button>
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

export default AdminService;
