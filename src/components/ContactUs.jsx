import React from "react";
import "./Styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have any questions or want to work with us? We'd love to hear from
          you!
        </p>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
