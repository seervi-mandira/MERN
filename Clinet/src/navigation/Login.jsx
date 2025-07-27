import React, { useState } from "react"
import { toast } from "react-toastify";
const Login = () =>{

const [email, setemail] = useState('');
const [password, setpassword] = useState('')


 const handlelogin = async(e) =>{
e.preventDefault();
 console.log({email, password})



 
    try {
      const response = await fetch("http://localhost:5000/login", { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      
      console.log(response);




      
      if(response.ok){



        toast.success('logindone successfully')
        const res_data = await response.json()

        localStorage.setItem("token", res_data.token)
        console.log('server', res_data)
      }else{
       toast.error('login failed')
      }
    } catch (error) {
      console.log('Register error:', error);
    }
 }
return <>
 <main>
             <div>
                          <div>
                                       <img/>
                          </div>

                          <div className="register-form">
<h1 className="regsiter">Login Form</h1>
<form onSubmit={handlelogin}>
           <div className="form-data">
             <label htmlFor="email">Email</label>
             <input type="string" name="email" required placeholder="enter your email" value={email} onChange={(e) =>setemail(e.target.value)}/>
             </div>
                        <div className="form-data">
             <label htmlFor="password" className="label">Password</label>
             <input type="password" name="password" required placeholder="enter your password" value={password} onChange={(e) => setpassword(e.target.value)} className="input"/>
             </div>

              <button type="submit" className="btn-submit">Submit</button>
</form>
</div>
             </div>
 </main>

</>
}
 export default Login