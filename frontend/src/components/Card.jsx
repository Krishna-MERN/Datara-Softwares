import React from "react";
import "./Styles/Card.css";
import logo from './assets/2.webp';

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={logo} 
          alt="Profile"
        />
      </div>
      <div className="card-content">
        <h2>John Doe</h2>
        <p>
          Software Engineer with expertise in creating scalable web applications
          and modern user interfaces.
        </p>
        <div className="card-footer">
          <button className="btn-primary">Contact</button>
          <button className="btn-secondary">Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
