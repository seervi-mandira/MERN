// import React from "react";
//  const Contacts =() =>{
//              return<>
//              <h1>jkfifhnfh</h1></>
//  }
//   export default Contacts
import React, { useState } from "react";
import './register.css';
import { toast } from "react-toastify";
const Contacts = () =>{
             const [user, setuser] = useState('');
const[email, setemail] = useState('');
const[message, setmessage] = useState('');

const handleform = async(e) =>{
e.preventDefault();
console.log({user, email, message})


const response = await fetch('http://localhost:5000/contact',{
  method:'post', 
  headers:{
    'Content-Type':'application/json'
    
  }, body: JSON.stringify({user, message, email})
})

console.log(response);
if(response.ok){
  const data = await response.json();
    toast.success('Message sended successfully')

   console.log(data);

}
else{
toast.error('unable to send the message')
  console.log('unable to send the contact data')
}






}
             return <>
            <div style={{display:"flex", gap:'70px'}}>
             <div>
<img
  src="./src/assets/contact.png"
  alt="contact"
  style={{ width: 800, height: 550, filter: 'blur(1px)' }}
 className="contactimage"/>
             </div>
<div className="register-form">
             <h1 className="regsiter">Contact Form</h1>
             <form onSubmit={handleform}>
                          <div className="form-data">
                                                                              <label htmlFor="username">UserName</label>
                                                                              <input type="srting" name="username" placeholder="Enter your name " required value={user} onChange={(e) => setuser(e.target.value)}/>
                                                                 </div>
                                                                 <div className="form-data">
                                                                              <label htmlFor="email">Email</label>
                                                                              <input type="srting" name="email" placeholder="Enter your email " required value={email} onChange={(e) => setemail(e.target.value)}/>
                                                                 </div>
                                                                
                                                                  
                                                                  <div className="form-data">
                                                                              <label htmlFor="message">Message</label>
                                                                              <textarea value={message}onChange={(e) => setmessage(e.target.value)} className="textarea"></textarea>

                                                                  </div>
                                                                  <br/>
                                                                  <button type="submit" className="btn-submit">Submit</button>
             </form>
</div>
            </div>
             </>
}
 export default Contacts; 