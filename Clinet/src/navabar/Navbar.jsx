// import React from "react";
// import { NavLink } from 'react-router-dom';
// import './navbar.css';

// const Navbar = () =>{
//              return <>

// <div className="navbar-container">
//             <img src="./src/assets/LOGO.png" alt="logo image" width={50} height={50}/>
//              <div>
//              <header> Logiflow </header>
//              </div>
//           <nav>   <ul>
// <li><NavLink to="/">Home</NavLink></li>
// <li><NavLink to="/about">About</NavLink></li>
//   <li><NavLink to="/service">Services</NavLink></li>
//   <li><NavLink to="/contacts">Contact</NavLink></li>
//   <li><NavLink to="/register">Register</NavLink></li>
//              </ul></nav>
//              </div>
//              </>
// }
//  export default Navbar;
import React from "react";
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useauth } from "../authcontext/Usercontext";
const Navbar = () => {
  const {isloggedin} =useauth();
  return (
    <div className="navbar-container">
      <div className="logo-header">
        <img src="./src/assets/LOGO.png" alt="logo" width={50} height={50} />
        <header>Logiflow</header>
      </div>

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/service">Services</NavLink></li>
          <li><NavLink to="/contacts">Contacts</NavLink></li>
       
       {isloggedin ? (
  <li><NavLink to="/logout">Logout</NavLink></li>
) : (
  <>
    <li><NavLink to="/register">Register</NavLink></li>
       <li><NavLink to="/login">Login</NavLink></li>
  </>
)}

       
       
       
        

        
        
        
        
                         

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
