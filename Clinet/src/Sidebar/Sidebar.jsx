import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { CiSignpostDuo1 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <nav className="sidebar-nav">
        <NavLink to="servicepost" className="nav-link"><CiSignpostDuo1 /> Create Post</NavLink>
        <NavLink to="user" className="nav-link"><FaRegUser /> Users Data</NavLink>
        <NavLink to="contact" className="nav-link"><IoMdContacts /> Contact Data</NavLink>
                <NavLink to="service" className="nav-link"><IoMdContacts />Service Data</NavLink>

      </nav>
    </div>
  );
}

export default Sidebar;
