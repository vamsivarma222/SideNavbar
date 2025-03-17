import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { FaHome, FaUserFriends, FaServicestack, FaCog, FaBlog, FaBriefcase, FaUserShield, FaBook, FaBell, FaGlobe, FaChartBar, FaTools } from "react-icons/fa";
import { MdContactPhone, MdOutlinePersonPinCircle, MdOutlineAdminPanelSettings } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri"; 
import { AiOutlineSetting } from "react-icons/ai"; // Configuration Icon

const NavBar = ({ show }) => {
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <img src={logo} alt='logo' className='logo' />
      <ul>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/Administration"><MdOutlineAdminPanelSettings /> Administration</Link></li>
        <li><Link to="/services"><FaServicestack /> Services</Link></li>
        <li><Link to="/portfolio"><FaBriefcase /> Portfolio</Link></li>
        <li><Link to="/blog"><FaBlog /> Blog</Link></li>
        <li><Link to="/faq"><FaBook /> FAQ</Link></li>
        <li><Link to="/notifications"><FaBell /> Notifications</Link></li>
        <li><Link to="/settings"><FaCog /> Settings</Link></li>
        <li><Link to="/reports"><RiFileList3Line /> Reports</Link></li>
        <li><Link to="/configuration"><AiOutlineSetting /> Configuration</Link></li>
        <li><Link to="/about"><MdOutlinePersonPinCircle /> About</Link></li>
        <li><Link to="/Contactus"><MdContactPhone /> Contact Us</Link></li>


        
        <li><Link to="/form">Form</Link></li>
        </ul>
    </div>
  );
}

export default NavBar;
