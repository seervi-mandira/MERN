// import React, { useEffect, useState } from 'react'
// import './adminuser.css'
// import { toast } from "react-toastify";

// function Adminusers() {
// const [user, setuser] = useState([])
//    const  getusedata = async() =>{
// try {
  
//    const response = await fetch('http://localhost:5000/admin/user', {
//     method: 'get',
// headers:{
//   'Content-Type': 'application/json'
// }
    
//    })
// const data = await response.json()
// console.log(data)
// setuser(data)


// } catch (error) {
//   console.log(error)
// }

//    }

// const deleteid = async(id) =>{
//   try {
    
// const response = await fetch(`http://localhost:5000/admin/delete/${id}`,{
//   method:'delete',
//   headers:{
//   'Content-Type': 'application/json'
// }
// })
 
//  const datas = await response.json()
//  console.log(datas)
//  toast.success('deleted use successfully')

//   } catch (error) {
//     console.log(error)
//   }
// }


//    useEffect(() =>{
// getusedata()
//    }, [])
//   return (
//     <div>
// <h1>uuururu</h1>


//  <div className="admin-container">
//       <h1>Admin Users</h1>

//       <div className="user-row header">
//         <div>Name</div>
//         <div>Email</div>
//         <div>Phone</div>
//         <div>Actions</div>
//       </div>

//       {user.map((users) => (
//         <div className="user-row" key={users._id}>
//           <div>{users.username}</div>
//           <div>{users.email}</div>
//           <div>{users.phone}</div>
//           <div>
//             <button className="edit-btn" onClick={() => console.log('Edit', users._id)}>Edit</button>
//             <button className="delete-btn" onClick={() => { deleteid(users._id) }}>Delete</button>
//                           {/* <button className="delete-btn" onClick={() => deleteid(users._id)}>Delete</button> */}


//           </div>
//         </div>
//       ))}
//     </div>
//  </div>
//   )
// }

// export default Adminusers
import React, { useEffect, useState } from 'react';
import './adminuser.css';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useauth } from '../authcontext/Usercontext'; // path as needed
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function Adminusers() {
  
  const [user, setuser] = useState([]);
 const { token } = useauth();
  const getusedata = async () => {
    try {
      const response = await fetch('https://mern-y1sz.onrender.com/admin/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to fetch users');
      
      console.log(data);
      setuser(data.users);

    } catch (error) {
      console.error(`Failed to fetch users ${error}`);
      toast.error("Failed to fetch users");
    }
  };

  const deleteid = async (id) => {
    try {
      const response = await fetch(`https://mern-y1sz.onrender.com/admin/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to delete user');

      console.log(data);
      toast.success('Deleted user successfully');


      setuser(prev => prev.filter(u => u._id !== id));

    } catch (error) {
      console.error(error);
      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    getusedata();
  }, []);
  return (
    <div>
      <h1 className='admin-title'>Admin Users</h1>

      <div className="admin-container">
        <div className="user-row header">
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Actions</div>
        </div>

        {user.map((users) => (
          <div className="user-row" key={users._id}>
            <div>{users.username}</div>
            <div>{users.email}</div>
            <div>{users.phone}</div>
            <div>
<button className="edit-btn"><Link  to={`/admin/update/${users._id}`} style={{ textDecoration: 'none', color: 'inherit' }}> <FaEdit /> Edit</Link></button>
              <button className="delete-btn" onClick={() => deleteid(users._id)}> <MdDelete />Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adminusers;
