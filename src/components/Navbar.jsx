import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import logo from './assets/logo.png';
const Navbar = () => { 
  // logic for getting login 
 const validate = () => {
 let password = prompt ("Enter your 16 digit Id....")
  if(password !== '12'){
    alert("Please Enter a valid id...");
      return;
  }
  if (password== '12'){
       let password1 = prompt ("Enter your 9 digit Hashcode....")
          if(password1 == '12'){
             window.open("AdminDashboard");}
      return;
  }

  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand Section */}
        <Link to="/" className="navbar-brand">
        <img src={logo} alt='logo'  className="navbar-logo" />
          <span>Datara Softwares</span>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/aboutus" className="nav-item">About Us</Link>
          <Link to="/servicepage" className="nav-item">Services</Link>
          <Link to="/careers" className="nav-item">Careers</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
         <button onClick={validate} className="btn-login" >Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
