// import React, { useState } from "react"
// import './register.css'

// const Register =()  =>{
// const [user, setuser] = useState('');
// const [email, setemail] = useState('');
// const [phone, setphone] = useState('');
// const [password, setpassword] = useState('');

// const handleforms = async(e) =>{
//               e.preventDefault();
//               console.log({user, email, phone, password})


// try {
             


// const response = await fetch(`http://localhost:5000/`,{
//              method:'POST',
//              headers: {
//                           'Content-Type': 'application/json',
//              }, 
//              body:JSON.stringify({user, email, password, phone})
// })
// console.log(response)
// } catch (error) {
//           console.log('register', error)   
// }

// }

//              return<>
//                  <main>
//                           <div className="register-form-container">
//                                        <div>
//                                                     {/* <img src="./src/assets/regsiter.png" alt="regsiter form"/> */}
//                                        </div>
//                                        <div className="register-form">
//                                                     <h1 className="regsiter">Regsiter Form</h1>
//                                                     <form onSubmit={handleforms} className="form">
//                                                                  <div className="form-data">
//                                                                               <label htmlFor="username">UserName</label>
//                                                                               <input type="text" name="username" placeholder="Enter your name " required value={user} onChange={(e) => setuser(e.target.value)}/>
//                                                                  </div>
//                                                                  <div className="form-data">
//                                                                               <label htmlFor="email">Email</label>
//                                                                               <input type="email" name="email" placeholder="Enter your email " value={email} onChange={(e) =>setemail(e.target.value)} required/>
//                                                                  </div>
//                                                                  <div className="form-data">
//                                                                               <label htmlFor="phone">Phone</label>
//                                                                               <input type="number" name="phone" placeholder="Enter your phonenumber" value={phone} onChange={(e) =>setphone(e.target.value)} required/>
//                                                                  </div>
//                                                                  <div className="form-data">
//                                                                               <label htmlFor="password" className="label">Password</label>
//                                                                               <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) =>setpassword(e.target.value)} required className="input"/>
//                                                                  </div>
//                                                                  <br/>
//                                                                  <button type="submit" className="btn-submit"> Submit</button>

//                                                     </form>
//                                        </div>
//                           </div>
//                  </main>
//              </>
// }
//  export default Register

import React, { useState } from "react";
import './register.css';
import {useauth} from '../authcontext/Usercontext'
import { toast } from "react-toastify";
const Register = () => {
  const [user, setuser] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');

const { storetokenInLS } = useauth();

  const handleforms = async (e) => {
    e.preventDefault();
    console.log({ user, email, phone, password });

    try {
      const response = await fetch("http://localhost:5000/userregister", { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  username:user, email, phone, password }),
      });

      
      console.log(response);

      if(response.ok){



        toast.success('restisterdone successfully')
        const res_data = await response.json()
        storetokenInLS(res_data.token)
        console.log('server', res_data)
      }else{
        toast.error('register failed')
      }
    } catch (error) {
      console.log('Register error:', error);
    }
  };

  return (
    <main>
      <div className="register-form-container">
        <div className="register-form">
          <h1 className="regsiter">Register Form</h1>
          <form onSubmit={handleforms} className="form">
            <div className="form-data">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                required
                value={user}
                onChange={(e) => setuser(e.target.value)}
              />
            </div>
            <div className="form-data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="form-data">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter your phone number"
                required
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
            <div className="form-data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <br />
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
