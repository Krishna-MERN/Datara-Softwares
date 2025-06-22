import React, { useState } from "react";
import axios from "axios";
import "./Styles/JobApplicationForm.css"; // CSS file

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    expectedSalary: "",
    workLocation: "",
    noticePeriod: "",
    relocate: "",
    education: [{ degree: "", specialization: "", institution: "", graduationYear: "", achievements: "" }],
    experience: [{ jobTitle: "", totalExperience: "" }],
    skills: {
      programming: [],
      frameworks: [],
      technical: "",
    },
    references: [{ name: "", relationship: "", contact: "", permission: false }],
    jobSource: "",
    attachments: {
      resume: null,
      identityProof: null,
      photo: null,
      signature: null,
    },
  });


  const handleChange = (e, section, index, field) => {
    const { name, value, type, checked } = e.target;

    if (section) {
      const updatedSection = [...formData[section]];
      if (field) {
        updatedSection[index][field] = type === "checkbox" ? checked : value;
      } else {
        updatedSection[index] = value;
      }
      setFormData((prev) => ({ ...prev, [section]: updatedSection }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        attachments: { ...prev.attachments, [name]: e.target.files[0] },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === "attachments") {
        for (const attachmentKey in formData.attachments) {
          formDataToSend.append(attachmentKey, formData.attachments[attachmentKey]);
        }
      } else {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      }
    }

    try {
      await axios.post("mongodb+srv://mailkkshukla:jLXi5eMf58avZnLA@jobapplicationform.79k29.mongodb.net/", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="application-form" encType="multipart/form-data">
      {/* Personal Details */}
      <h3>Personal Details</h3>
      <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input type="date" name="dob" onChange={handleChange} required />
       {/* Add other sections like education, experience, references, skills, and attachments */}
     <h3>Qualification Details </h3>
      <input type ="text" name ="Qualification" placeholder ="Highest Qualification" onChange={handleChange} required />
      <input type ="text" name ="College" placeholder ="College/University Name" onChange={handleChange} required />
      <select name="Passing Year" onChange={handleChange} required>
        <option value="">Select Passing Year</option>
        <option value="Male">2015</option>
        <option value="Male">2016</option>
        <option value="Male">2017</option>
        <option value="Male">2018</option>
        <option value="Male">2019</option>
        <option value="Male">2020</option>
        <option value="Male">2021</option>
        <option value="Male">2022</option>
        <option value="Male">2023</option>
        <option value="Male">2024</option>
        <option value="Male">2025</option>
        <option value="Male">2026</option>
        <option value="Male">2027</option>
        <option value="Male">2028</option>
        <option value="Male">2029</option>
        <option value="Male">2030</option>
        </select>
      <input type ="text" name ="Grade" placeholder ="Percentage/Grade marks" onChange={handleChange} required />
       
      <h3>Attachments </h3>
      <label for="Signature">Upload Resume (Max Size 1 MB):</label>
      <input type="file" name="Resume" placeholder=" Upload Resume" onChange={handleChange} required />
      <label for="Signature">Upload Photo (Max Size 200 KB):</label>      
      <input type="file" name="Photo" placeholder=" Upload Photo" onChange={handleChange} required />    
      <label for="Signature">Upload Signature (Max Size 100 KB):</label>
      <input type="file" name="Signature" placeholder=" Upload Signature"  onChange={handleChange} required /> 
      <label className="checkbox-label"><input type="checkbox" required/> Accept <a href="">T&C</a></label>     
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;
