import React from "react";
import "./Styles/Opportunities.css";

const Opportunities = () => {
  const opportunities = [
    {
      title: "Senior Software Developer",
      duration: "Full-Time",
      salary: "₹8-10LPA",
      location: "Noida India",
      skills: ["JavaScript", "React", "Node.js"],
      description:
        "Join our team to develop scalable web applications and APIs, collaborate with cross-functional teams, and enhance our software solutions.",
    },
    {
      title: "PHP & MySQL Developer",
      duration: "Full-Time",
      salary: "₹4-5LPA",
      location: "Banglure India",
      skills: ["JavaScript", "React", "Node.js"],
      description:
        "Join our team to develop scalable web applications and APIs, collaborate with cross-functional teams, and enhance our software solutions.",
    },
    {
      title: "Student Ambassador",
      duration: "Part-Time",
      salary: "Based on performance",
      location: "Remote",
      skills: ["Communication", "Networking", "Marketing"],
      description:
        "Represent our company on campus, promote our services, and build connections with students and faculty.",
    },
    
   
  ];

  return (
    <section className="opportunities-section">
      <h2 className="opportunities-title">Latest Opportunities</h2>
      <div className="opportunities-container">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="opportunity-card">
            <h3 className="opportunity-title">{opportunity.title}</h3>
            <p className="opportunity-detail">
              <strong>Duration:</strong> {opportunity.duration}
            </p>
            <p className="opportunity-detail">
              <strong>Salary:</strong> {opportunity.salary}
            </p>
            <p className="opportunity-detail">
              <strong>Location:</strong> {opportunity.location}
            </p>
            <p className="opportunity-detail">
              <strong>Relevant Skills:</strong> {opportunity.skills.join(", ")}
            </p>
            <p className="opportunity-description">{opportunity.description}</p>
           <a href="./Application"> <button className="apply-button">Apply Now</button></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opportunities;
