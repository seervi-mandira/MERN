// import React from 'react'

// function Update() {

// const updateid = async (id) => {
//   try {
//     const updateuserdata = await fetch(`http://localhost:5000/admin/update/${id}`, {
//       method: 'GET',
//       headers:{
//         'Content-Type':'application/json'
//       }
//     });

//     const data = await updateuserdata.json();
//     console.log(data);
    
//   } catch (error) {
//     console.log(error);
//   }
// };



//   useEffect(() => {
    
//     updateid();
//   }, []);

//   return (
//     <div><h1>update </h1>
//     {user.map((users) => (
//           <div className="user-row" key={users._id}>
//             <div>{users.username}</div>
//             <div>{users.email}</div>
//             <div>{users.phone}</div>
//             <div>
//               <button className="edit-btn" >update

//               </button>
//             </div>
//           </div>
//         ))}
//     </div>
//   )
// }

// export default Update
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'; 
// import "../navigation/register.css";

// function UpdateUser() {
//   const { id } = useParams();
//   const [user, setuser] = useState(null); 
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   const updateid = async (id) => {
//     try {
//       const updateuserdata = await fetch(`http://localhost:5000/admin/update/${id}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       const data = await updateuserdata.json();
//       console.log(data);
      
//       setuser(data.udate ? data.udate[0] : data);
// setuser(userData);
//       setUsername(userData.username || '');
//       setEmail(userData.email || '');
//       setPhone(userData.phone || '');

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       updateid(id); 
//     }
//   }, [id]);

//   return (
//     <div>
//       <h1>Update</h1>

//       {user ? (
        
        
//                           <div className="register-form">
// <h1 className="regsiter"> Update User Data</h1>
// <form><div className="form-data">
//              <label htmlFor="username">Email</label>
//              <input type="string" name="username " required placeholder="enter your username " value={username} onChange={(e) =>{setUsername(e.target.value)}}/>
//              </div>

//            <div className="form-data">
//              <label htmlFor="email">Email</label>
//              <input type="string" name="email" required placeholder="enter your email" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
//              </div>
//                         <div className="form-data">
//              <label htmlFor="password" className="label">Phone</label>
//              <input type="password" name="password" required placeholder="enter your password" className="input"  value={phone} onChange={(e) =>{setPhone(e.target.value)}}/>
//              </div>

//               <button type="submit" className="btn-submit">Update</button>
// </form>
// </div>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//     </div>
//   );
// }

// export default UpdateUser;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../navigation/register.css";
import './adminuser.css'
import { toast } from 'react-toastify';
function UpdateUser() {
  const { id } = useParams();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Fetch the user data based on ID
  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/admin/update/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      const userData = data.udate ? data.udate[0] : data;

      // Set the form values with fetched data
      setUsername(userData.username || '');
      setEmail(userData.email || '');
      setPhone(userData.phone || '');
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

//   const handleupdateuser = async (e) => {
//     e.preventDefault();
//     try {
//        const response  = await fetch(`http://localhost:5000/admin/user/update/${id}`,{
// method:'PATCH',

//         headers:{
//           'Content-Type': 'application/json'
//         }, body: JSON.stringify({username, email, phone })
//        })
//         console.log(response)
//     } catch (error) {
//       console.log('error',`${error}`)
      
//     }
//   };
const handleupdateuser = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:5000/admin/user/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, phone }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Update failed:", result.message);
      toast.error("Update failed");
    } else {
      console.log("User updated successfully", result);
      toast.success("User updated successfully");
    }

  } catch (error) {
    console.log('Error:', error);
    toast.error("Something went wrong while updating user");
  }
};

  return (
    <div>
      <h1 className='admin-title'>Update User</h1>
      <div className="register-form">
        <form onSubmit={handleupdateuser}>
          <div className="form-data">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-data">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-data">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone"
              required
            />
          </div>

          <button type="submit" className="btn-submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
