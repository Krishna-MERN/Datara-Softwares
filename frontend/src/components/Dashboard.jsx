// Dashboard.js
import React, { useState, useEffect } from "react";
import "./Styles/Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    activeComponents: 0,
    pendingTasks: 0,
    totalComponents: 0,
  });

  const [components, setComponents] = useState([
    { id: 1, name: "Header", visible: true },
    { id: 2, name: "Footer", visible: true },
    { id: 3, name: "Contact Form", visible: false },
    { id: 4, name: "Notices", visible: true },
    { id: 5, name: "Job Application Notice", visible: true },
    { id: 6, name: "Job Application Form", visible: true },
    { id: 7, name: "InternShip Application Form", visible: true },
    { id: 8, name: "Internship Notice", visible: true },
    { id: 9, name: "Services", visible: true },
    { id: 10, name: "Blog Section", visible: true },
  ]);

  // Simulate fetching data from the backend
  useEffect(() => {
    setTimeout(() => {
      setStats({
        users: 1265,
        activeComponents: 3,
        pendingTasks: 5,
        totalComponents: 21,
      });
    }, 2000);
  }, []);

  const toggleVisibility = (id) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id
          ? { ...component, visible: !component.visible }
          : component
      )
    );
  };

  return (
    <div className="dashboard">
      <h1>Website Dashboard</h1>
      <div className="stats">
        <div className="stat-card">
          <h3>Users</h3>
          <p>{stats.users}</p>
        </div>
        <div className="stat-card">
          <h3>Active Components</h3>
          <p>{stats.activeComponents}</p>
        </div>
        <div className="stat-card">
          <h3>Pending Tasks</h3>
          <p>{stats.pendingTasks}</p>
        </div>
        <div className="stat-card">
          <h3>Total Components</h3>
          <p>{stats.totalComponents}</p>
        </div>
      </div>

      <h2>Manage Visibility of Components</h2>
      <table className="components-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Visibility</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {components.map((component) => (
            <tr key={component.id}>
              <td>{component.name}</td>
              <td>{component.visible ? "Visible" : "Hidden"}</td>
              <td>
                <button onClick={() => toggleVisibility(component.id)}>
                  {component.visible ? "Hide" : "Show"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
