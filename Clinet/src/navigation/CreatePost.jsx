// import e from 'express';
// import React, { useState } from 'react'


// function CreatePost() {
           
//  const [service, setservice] = useState('');
//  const [price, setprice] = useState('');
//  const [description, setdescription] = useState('');
//  const [provider, setprovider]= useState('');












//   const handlepost = () =>{
//              try {
//               const response = await fetch('http://localhost:5000/service', {
//                            method:'post', headers:{
//                                                      'Content-Type':'application/json' 

//                            }, body:JSON.stringify({})
//               })
//  } catch (error) {
//                console.log(error);
//  }
//   return (
//     <div>
// <form onClick={handlepost}>
//              <label>service</label>
//              <input type='text' required value={service} onChange={(e) =>{setservice(e.target.value)}}/>
//               <label>description</label>
//              <input type='text' required value={description} onChange={(e) =>{setdescription(e.target.value)}}/>
//               <label>price</label>
//              <input type='number' required value={price} onChange={setprice(e.target.value)}/>
//               <label>provider</label>
//              <input  type='text' required value={provider} onChange={setprovider(e.target.value)}/>
             
// </form>


//     </div>
//   )
// }

// export default CreatePost


import React, { useState } from 'react';
import './register.css';
 import '../admin/adminuser.css';
import { toast } from 'react-toastify';
function CreatePost() {
  const [service, setservice] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [provider, setprovider] = useState('');

  const handlepost = async (e) => {
    e.preventDefault(); // prevent page refresh
    try {
      const response = await fetch('http://localhost:5000/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service,
          description,
          price,
          provider,
        }),
      });

      const result = await response.json();
      console.log(result);
      toast.success("Service posted successfully");

      // clear form
      setservice('');
      setdescription('');
      setprice('');
      setprovider('');
    } catch (error) {
      console.log(error);
      toast.error("Failed to post service");
    }
  };

  return (
    <div>
      <h2 className='admin-title'>Create Service</h2>
       <div className='postdata'>
      <form onSubmit={handlepost}>
                    <div className="form-data">

        <label>Service</label>
        <input
          type="text"
          required
          value={service}
          onChange={(e) => setservice(e.target.value)}
        />
</div>
            <div className="form-data">

        <label>Description</label>
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
</div>
            <div className="form-data">

        <label>Price</label>
        <input
          type="number"
          required
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        </div>
                    <div className="form-data">


        <label>Provider</label>
        <input
          type="text"
          required
          value={provider}
          onChange={(e) => setprovider(e.target.value)}
        />
</div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default CreatePost;
