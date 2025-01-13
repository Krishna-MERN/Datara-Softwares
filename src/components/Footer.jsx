import React from "react";
import "./Styles/Footer.css";
import Clock from "./Clock";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-about">
        <Clock />
          <h2>Datara Softwares</h2>
          <p>
            Creating innovative solutions to drive growth and transform
            businesses worldwide.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Stay updated with our latest news and offers.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
  
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Datara Sofrwares. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
