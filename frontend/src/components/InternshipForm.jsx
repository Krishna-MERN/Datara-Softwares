import React, { useState } from "react";
import axios from "axios";
import "./Styles/InternshipForm.css";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    degree: "",
    branch: "",
    passingYear: "",
    grade: "",
    internshipDomain: "",
    agreedToTerms: false,
    resume: null,
  });



  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post("http://localhost:5000/submit", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        alert(`Application submitted Successfully.\nYour Registration No is ✅: ${response.data.regNo}. \nNote it for future referance .`);
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
      
    }
    
  };

  return (
    <form className="internshipformcontainer" onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Application Form</h2>
      
      <label>Full Name:</label>
      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Phone No:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

      <label>Gender:</label>
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label>Date of Birth:</label>
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

      <label>Degree:</label>
      <select name="degree" value={formData.degree} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
        <option value="B.Tech">B.Tech</option>
        <option value="M.Tech">M.Tech</option>
      </select>

      <label>Branch:</label>
      <select name="branch" value={formData.branch} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="Computer Science & Engg.">Computer Science & Engg.</option>
        <option value="Electrical Engg.">Electrical Engg.</option>
        <option value="Machenical Engg.">Machenical Engg.</option>
        <option value="None">None</option>
      </select>

      <label>Passing Year:</label>
      <input type="number" name="passingYear" value={formData.passingYear} onChange={handleChange} required />

      <label>Grade / Percentage:</label>
      <input type="text" name="grade" value={formData.grade} onChange={handleChange} required />

      <label>Internship Domain:</label>
      <select name="internshipDomain" value={formData.internshipDomain} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="Web Development">Web Development</option>
        <option value="App Development">App Development</option>
        <option value="Data Science">Data Science</option>
        <option value="Cloud Computing">Cloud Computing</option>
        <option value="Project Management">Project Management</option>
        <option value="User Experience (UX) Design:">User Experience (UX) Design</option>
      </select>

      <label>Resume:</label>
      <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />

      <label>
        <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} required />
       <a href="./TermsAndConditionspage"> I agree to the Terms and Conditions</a>
      </label>

      <button className="sub-btn"  type="submit">Submit</button>
    </form>
  );
};

export default InternshipForm ;
