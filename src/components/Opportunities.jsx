import React from "react";
import "./Styles/Opportunities.css";

const Opportunities = () => {
  const opportunities = [
    {
      title: "Software Developer",
      duration: "Full-Time",
      salary: "$80,000 - $100,000 per year",
      location: "San Francisco, CA",
      skills: ["JavaScript", "React", "Node.js"],
      description:
        "Join our team to develop scalable web applications and APIs, collaborate with cross-functional teams, and enhance our software solutions.",
    },
    {
      title: "Student Ambassador",
      duration: "Part-Time",
      salary: "Performance-Based",
      location: "Remote",
      skills: ["Communication", "Networking", "Marketing"],
      description:
        "Represent our company on campus, promote our services, and build connections with students and faculty.",
    },
    {
      title: "Data Analyst Intern",
      duration: "6 Months",
      salary: "$15 - $20 per hour",
      location: "New York, NY",
      skills: ["Python", "SQL", "Data Visualization"],
      description:
        "Analyze datasets, create visualizations, and assist in developing data-driven insights for business decisions.",
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
           <a href="/ApplicationForm"> <button className="apply-button">Apply Now</button></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opportunities;
