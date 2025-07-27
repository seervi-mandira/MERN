// import React, { useState } from 'react'

//  const Adminpannel = () =>{
//              const [user, setuser] = useState([]);
// const regsiteruser = async() =>{
//               try {
//               const response =  await fetch('http://localhost:5000/admin',{
//                           method:'get', headers:{
//                                        'Content-Type': 'application/json'
//                           }
//               })            
//                   const data = await response.json();
//                   setuser(data); // ✅ parse response body
//       console.log(data); 
//              } catch (error) {
//                        console.log(error)   
//               }
             
// }


//              return<>
//              <h1>ADMINPANNEL</h1>
          
// <ul>
//         {user.map((users) => (
//           <li key={users._id}>
//             {users.username} - {users.email}
//           </li>
//         ))}
//       </ul>




//              <button onClick={regsiteruser}>click</button>
//              </>
 
//  }
//   export default Adminpannel; 


// import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'
// import Sidebar from '../Sidebar/Sidebar'

// function Adminpannel() {
//   return <>
  
//   <ul>
//     <Sidebar/>
//              <li><NavLink to='user'>usersdata</NavLink></li>
//              <li><NavLink to='contact'>contactdata</NavLink></li>
//   </ul>
//   <Outlet></Outlet>
//   </>
// }

// export default Adminpannel
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './adminuser.css'; // for layout, optional
import Navbar from '../navabar/Navbar';

function Adminpannel() {
  return (
    <>
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
    </>
  );
}

export default Adminpannel;
