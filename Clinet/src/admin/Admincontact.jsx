
// import React, { useEffect, useState } from 'react';
// import './adminuser.css';
// import { MdDelete } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";
// function Admincontact() {
//   const [contacts, setContacts] = useState([]);

//   const contactdata = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/admins/contact', {
//         method: 'GET',
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log('Fetched contacts:', data);
//         setContacts(data); // Store the data in state
//       } else {
//         console.log('Error fetching data:', data);
//       }
//     } catch (error) {
//       console.log('Fetch error:', error);
//     }
//   };


// const Deletedata = async() =>{
//   try {
//     const response = await fetch(`http://localhost:5000/admins/contact/${id}`,{
//        method: 'delete',
// headers:{
//           'Content-Type': 'application/json'
// }
//     })

//     const data = await response.json();
//     if(response.ok){
//       console.log(data);

//     }else{
//       console.log('unbale to get it ')
//     }
//   } catch (error) {
//     console.log(error);
//   }

// }




//   useEffect(() => {
//     contactdata(); // Fetch data on component mount
//   }, []);

//   return (
//     <div>
//       <h1 className="admin-title">Admin Contact Data</h1>
//       <div className="admin-container">
//         <div className="user-row header">
//           <div>Name</div>
//           <div>Email</div>
//           <div>Message</div>
//           <div>Actions</div>
//         </div>

//         {contacts.map((contact) => (
//           <div className="user-row" key={contact._id}>
//             <div>{contact.username}</div>
//             <div>{contact.email}</div>
//             <div>{contact.message}</div>
//           <div>

//            <button className="delete-btn" onClick={Deletedata}><MdDelete /> Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Admincontact;
import React, { useEffect, useState } from 'react';
import './adminuser.css';
import { MdDelete } from "react-icons/md";

function Admincontact() {
  const [contacts, setContacts] = useState([]);

  // Fetch all contacts
  const contactdata = async () => {
    try {
      const response = await fetch('https://mern-y1sz.onrender.com/admins/contact', {
        method: 'GET',
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Fetched contacts:', data);
        setContacts(data);
      } else {
        console.log('Error fetching data:', data);
      }
    } catch (error) {
      console.log('Fetch error:', error);
    }
  };

  // Delete contact by ID
  const Deletedata = async (id) => {
  console.log("Deleting ID:", id); // Log the ID passed
  try {
    const response = await fetch(`https://mern-y1sz.onrender.com/admins/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log("Server response:", data); // Log the response

    if (response.ok) {
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact._id !== id)
      );
    } else {
      console.log('Unable to delete:', data.message || 'Unknown error');
    }
  } catch (error) {
    console.error('Error deleting contact:', error);
  }
};

  useEffect(() => {
    contactdata(); // Fetch data when component mounts
  }, []);

  return (
    <div>
      <h1 className="admin-title">Admin Contact Data</h1>
      <div className="admin-container">
        <div className="user-row header">
          <div>Name</div>
          <div>Email</div>
          <div>Message</div>
          <div>Actions</div>
        </div>

        {contacts.map((contact) => (
          <div className="user-row" key={contact._id}>
            <div>{contact.username}</div>
            <div>{contact.email}</div>
            <div>{contact.message}</div>
            <div>
              <button
                className="delete-btn"
                onClick={() => Deletedata(contact._id)}
              >
                <MdDelete /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admincontact;
