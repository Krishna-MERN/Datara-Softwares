import React, { useState } from "react";
import "./Styles/MultiForm.css";

const MultiForm = ({JobApplicationForm, InternshipForm,StudentAmbassadorForm }) => {
  const [activeForm, setActiveForm] = useState("personal");

  return (
    <div className="form-switcher-container">
      <div className="switcher-buttons">
        <button onClick={() => setActiveForm("JobApplicationForm")}>Apply For Job</button>
        <button onClick={() => setActiveForm("InternshipForm")}>Apply For Internship</button>
        <button onClick={() => setActiveForm("StudentAmbassadorForm")}>Apply For StudentAmbassador</button>
      </div>

      <div className="form-content">
        {activeForm === "JobApplicationForm" && <JobApplicationForm />}
        {activeForm === "InternshipForm" && <InternshipForm/>}
        {activeForm === "StudentAmbassadorForm" && <StudentAmbassadorForm />}
      </div>
    </div>
  );
};

export default MultiForm;
