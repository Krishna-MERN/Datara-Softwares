import React, { useState } from "react";
import "./Styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Error: Unable to send message.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have any questions or want to work with us? We'd love to hear from you!</p>
      </div>
      {status && <p className="status-message">{status}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
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
