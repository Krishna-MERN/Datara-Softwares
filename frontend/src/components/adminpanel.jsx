import React, { useState } from "react";
import "./Styles/adminpanel.css";
import UploadNotice from "./UploadNotice";
// import JobApplicationForm from "./JobApplicationForm";
import ViewApplication from "./ViewApplication";
import Dashboard from "./Dashboard";

const AdminPanel = () => {


   const Logout = () => {
    alert("Are You Sure to Log Out ?");
       window.close();
       return;
      
    }



  const [activeComponent, setActiveComponent] = useState("Dashboard");

  // List of components in the sidebar
  const components = [
    { name: "Dashboard", description: "Overview of system metrics." },
    { name: "Mail", description: "" },
    { name: "Notices", description: "Manage notices for the website." },
    { name: "Newsletters", description: "Manage newsletters and subscriptions." },
    { name: "Opportunities", description: "Manage Opportunities and Career." },
    { name: "Application Form", description: "Manage Application Form and data." },
    { name: "View Application", description: "View Application data." },
    { name: "Products", description: "Manage and update products." },
    { name: "Certificates", description: "Manage and update Cirtificates." },
    { name: "Users", description: "Manage user accounts and roles." },
    { name: "Settings", description: "Adjust system preferences." }, 
    { name: "Log Out", description: "" },
  ];

  // Render the content for the selected component
  const renderComponent = () => {
    switch (activeComponent) {
       case "Dashboard":
        return <div>
          <Dashboard />
          </div>;
       case "Mail":
        return <div>
          </div>;
      case "Notices":
        return <div>Manage Notices here.
          <UploadNotice />
          </div>;
      case "Newsletters":
        return <div>Manage Newsletters here.</div>;
      case "Opportunities":
        return <div> Manage Newsletters here.</div>;
      case "Application Form":
        return <div>Create & Manage Application Form and Data here.
        <div>
          <a href=""><button>Payment Form </button></a>
          <a href=""><button>List Selected candidate </button></a>
          <a href=""><button>Payment Form </button></a>
          <a href=""><button>Project Submition form </button></a>
        </div>
        </div>;
      case "View Application":
        return <div> <ViewApplication />
         <div>
          <a href=""><button>View Payment </button></a>
          <a href=""><button>Selected Candidates  </button></a>
          <a href=""><button>Payment Form </button></a>
          <a href=""><button>View Project Submition </button></a>
        </div>
        </div>;
      case "Products":
        return <div>Manage Products here.</div>;
      case "Cirtificates":
        return <div> Certificates </div>;
      case "Users":
        return <div>Manage Users here.</div>;
      case "Settings":
        return <div> Adjust Settings here.</div>;
      case "Log Out":
        return <div> <button onClick={Logout} className="submit-btn"> Confirm Log Out</button></div>;
      default:
        return <div>Select a component to manage.</div>;
    }
  };

  return( 
    <div className="admin-panel">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          {components.map((component) => (
            <li
              key={component.name}
              className={activeComponent === component.name ? "active" : ""}
              onClick={() => setActiveComponent(component.name)}
            >
              {component.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="content">
        <h2>{activeComponent}</h2>
        <p>
          {
            components.find((component) => component.name === activeComponent)
              ?.description
          }
        </p>
        <div className="component-manager">{renderComponent()}</div>
      </div>
    </div>

    
  );
};
export default AdminPanel;        