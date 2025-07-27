// App.jsx (Main File)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./navigation/Home.jsx";
import About from "./navigation/About.jsx";
import Contacts from "./navigation/Contacts.jsx";

import Services from "./navigation/Services.jsx";
import Navbar from "./navabar/Navbar.jsx";
import Register from "./navigation/Register.jsx";
import Login from "./navigation/Login.jsx";
import Error from "./navigation/Error.jsx";
import Adminpannel from "./admin/Adminpannel.jsx";
import Adminusers from "./admin/Adminusers.jsx";
import Admincontact from "./admin/Admincontact.jsx";
import Logout from "./navigation/Logout.jsx";
import UpdateUser from "./admin/UpdateUser.jsx";
import Footer from "./footer/Footer.jsx";
import CreatePost from "./navigation/CreatePost.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminService from "./admin/AdminService.jsx";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/service" element= {<Services/>} />
                  <Route path="/contacts" element= {<Contacts/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>
                         
                       
                                   <Route path="/logout" element={<Logout/>}/>
                  <Route path="*" element={<Error/>}/>
                  {/* <Route path="/admin" element={<Adminpannel/>}/> */}
<Route path="/admin" element={<Adminpannel/>}>
                 <Route path="servicepost" element={<CreatePost/>}/>
<Route path="service" element={<AdminService/>}/>

<Route path="user" element={<Adminusers/>}/>
<Route path="contact" element={<Admincontact/>}/>
<Route path="update/:id" element={<UpdateUser/>}/>
</Route>



      </Routes>
              <Footer />

    </Router>
    
  );
}

export default App;
