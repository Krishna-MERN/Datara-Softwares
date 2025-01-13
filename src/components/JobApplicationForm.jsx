import React, { useState } from "react";
import "./Styles/JobApplicationForm.css";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedIn: "",
    github: "",
    portfolio: "",
    position: "",
    skills: "",
    resume: null,
    coverLetter: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!formData.resume) newErrors.resume = "Resume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="form-container">
      <h1>Job Application Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>LinkedIn Profile</label>
          <input
            type="url"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>GitHub/Portfolio</label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Position Applying For</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Skills</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Resume (PDF only)</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
          />
          {errors.resume && <span className="error">{errors.resume}</span>}
        </div>

        <div className="form-group">
          <label>Cover Letter (Optional)</label>
          <input
            type="file"
            name="coverLetter"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
