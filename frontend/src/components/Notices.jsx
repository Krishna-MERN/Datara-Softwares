import React from "react";
import "./Styles/Notices.css";

const Notices = () => {
  return (
    <div className="notices-newsletter-container">
      {/* Notices Section */}
      <div className="notices-section">
        <h2>Latest Notices</h2>
        <ul className="notices-list">
      <a href="www.google.com"> <li>
            <span className="notice-date">Jan 10, 2025:</span> Website
            maintenance scheduled from 2:00 PM to 5:00 PM.
          </li> </a>
          <li>
            <span className="notice-date">Jan 5, 2025:</span> New software
            updates available for all clients.
          </li>
          <li>
            <span className="notice-date">Dec 20, 2024:</span> Office closed for
            holidays from Dec 25 to Jan 1.
          </li>
         <a href="Noticpage"> <li>Click Here for all.....</li></a>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Stay updated with the latest news and updates from our company. Sign
          up for our newsletter!
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="btn-subscribe">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Notices;
