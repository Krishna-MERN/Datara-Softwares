import { useState } from "react";
import axios from "axios";
import "./Styles/StudentAmbassadorForm.css";

const StudentAmbassadorForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    university: "",
    studyYear: "",
    degree: "",
    studentId: "",
    cgpa: "",
    leadershipRoles: "",
    extracurriculars: "",
    experience: "",
    skills: "",
    socialMedia: "",
    reason: "",
    promotionPlan: "",
    engagementStrategy: "",
    availability: "",
    resume: null,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Submit Form Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post(
        "https://your-backend-api.com/apply",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        university: "",
        studyYear: "",
        degree: "",
        studentId: "",
        cgpa: "",
        leadershipRoles: "",
        extracurriculars: "",
        experience: "",
        skills: "",
        socialMedia: "",
        reason: "",
        promotionPlan: "",
        engagementStrategy: "",
        availability: "",
        resume: null,
      });
    } catch (error) {
      alert("Error submitting application. Try again.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Student Ambassador Application</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />

        
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />


        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />

        <label> DOB :</label>
        <input type="date" name="dob"placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />

    
        <input type="text" name="university" placeholder="University/College Name" value={formData.university} onChange={handleChange} required />

         <select name="Passing Year" value={formData.CurrentYear} onChange={handleChange} required>
            <option value="">Current year of Study</option>
            <option value="1"> First Year</option>
            <option value="2"> Second Year</option>
            <option value="3"> Third Year</option>
            <option value="4"> Fourth Year</option>
         </select>

       
        <input type="text" name="degree" placeholder="Degree Program/Major" value={formData.degree} onChange={handleChange} required />

        
        <input type="text" name="studentId"placeholder="Student ID" value={formData.studentId} onChange={handleChange} required />


        <input type="text" name="cgpa" placeholder="Current CGPA /Percentage" value={formData.cgpa} onChange={handleChange} />

        <textarea name="leadershipRoles" placeholder="Leadership Roles (eg : Club Coordinator , next , next)" value={formData.leadershipRoles} onChange={handleChange} />

        <textarea name="extracurriculars" placeholder="Extracurricular Activities .(In bulet points)" value={formData.extracurriculars} onChange={handleChange} />

        <textarea name="experience" placeholder="Previous Ambassador Experience" value={formData.experience} onChange={handleChange} />

       
        <textarea name="skills" placeholder="Relevant Skills" value={formData.skills} onChange={handleChange} />

        
        <input type="text" name="socialMedia"placeholder ="Social Media Handles" value={formData.socialMedia} onChange={handleChange} />

       
        <textarea name="reason"placeholder=" Why do you want to be a Student Ambassador ?" value={formData.reason} onChange={handleChange} required />

       
        <textarea name="promotionPlan" placeholder="How would you promote the program on campus ?" value={formData.promotionPlan} onChange={handleChange} required />

     
        <textarea name="engagementStrategy"placeholder="Engagement Strategy" value={formData.engagementStrategy} onChange={handleChange} required />

       
        <input type="text" name="availability"placeholder="Availability (Hours per week)" value={formData.availability} onChange={handleChange} required />

        <label>Upload Resume:</label>
        <input type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
        <label className="checkbox-label"><input type="checkbox" required/> Accept <a href="">T&C</a></label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default StudentAmbassadorForm;
