// InternDashboard.js
import React, { useState } from "react";
import './Styles/Internstatus.css';


const Internstatus = () => {
  const [interns, setInterns] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", domain: "Web Dev", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", domain: "AI/ML", status: "Pending" },
  ]);

  const [newIntern, setNewIntern] = useState({ name: "", email: "", phone: "", domain: "", status: "Active" });
  const [editInternId, setEditInternId] = useState(null);

  const handleChange = (e) => {
    setNewIntern({ ...newIntern, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateIntern = () => {
    if (editInternId) {
      setInterns(interns.map((intern) => (intern.id === editInternId ? { id: editInternId, ...newIntern } : intern)));
      setEditInternId(null);
    } else {
      setInterns([...interns, { id: Date.now(), ...newIntern }]);
    }
    setNewIntern({ name: "", email: "", phone: "", domain: "", status: "Active" });
  };

  const handleEdit = (intern) => {
    setNewIntern(intern);
    setEditInternId(intern.id);
  };

  const handleDelete = (id) => {
    setInterns(interns.filter((intern) => intern.id !== id));
  };

  return (
    <div className="status-container">
      <h2>Interns Application Status</h2>

      {/* Add / Edit Intern Form */}
      <div className="form-container">
        <h3>{editInternId ? "Edit Intern" : "Add Intern"}</h3>
        <input type="text" name="name" value={newIntern.name} onChange={handleChange} placeholder="Full Name" required />
        <input type="email" name="email" value={newIntern.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="phone" value={newIntern.phone} onChange={handleChange} placeholder="Phone Number" required />
        <input type="text" name="domain" value={newIntern.domain} onChange={handleChange} placeholder="Domain" required />
        <select name="status" value={newIntern.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button className="add-btn" onClick={handleAddOrUpdateIntern}>
          {editInternId ? "Update Intern" : "Add Intern"}
        </button>
      </div>

      {/* Intern List */}
      <div>
        {interns.map((intern) => (
          <div key={intern.id} className="intern-card">
            <h4>{intern.name}</h4>
            <p>Email: {intern.email}</p>
            <p>Phone: {intern.phone}</p>
            <p>Domain: {intern.domain}</p>
            <p>Status: <strong>{intern.status}</strong></p>
            <div className="button-group">
              <button className="edit-btn" onClick={() => handleEdit(intern)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(intern.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internstatus;
