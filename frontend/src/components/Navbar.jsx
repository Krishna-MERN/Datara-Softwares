import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import logo from './assets/Mainlogo.png';
import { useNavigate } from "react-router-dom";
const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const validate = () => {
  //   let password = prompt("Enter your 16-digit ID....");
  //   if (password !== '12') {
  //     alert("Please enter a valid ID...");
  //     return;
  //   }
  //   if (password === '12') {
  //     let password1 = prompt("Enter your 9-digit Hashcode....");
  //     if (password1 === '12') {
  //       window.open("AdminDashboard");
  //     }
  //     return;
  //   }
  // };
  const validate = () => {
    navigate("/LoginModal");
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand Section */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="navbar-logo" />
          <span className='gradient-text'>Datara Softwares</span>
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-item"> Home</Link>
          <Link to="/aboutus" className="nav-item"> About Us</Link>
          <Link to="/Servicepage" className="nav-item"> Services</Link>
          <Link to="/careers" className="nav-item"> Careers</Link>
          <Link to="/contact" className="nav-item"> Contact</Link>
          <button onClick={validate} className="btn-login">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
