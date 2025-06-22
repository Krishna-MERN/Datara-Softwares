// DataManagementComponent.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/applicationsdata.css";
const DataManagementComponent = () => {
  const [submissions, setSubmissions] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editData, setEditData] = useState({});

  // Fetch submissions from the backend
  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get("/api/submissions");
      setSubmissions(response.data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };

  const deleteSubmission = async (id) => {
    try {
      await axios.delete(`/api/submissions/${id}`);
      fetchSubmissions(); // Refresh the data
    } catch (error) {
      console.error("Error deleting submission:", error);
    }
  };

  const handleEdit = (submission) => {
    setEditMode(submission.id);
    setEditData(submission);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/submissions/${editMode}`, editData);
      setEditMode(null);
      fetchSubmissions();
    } catch (error) {
      console.error("Error updating submission:", error);
    }
  };

  return (
    <div className="data-management">
      <h2>Manage Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td>
                {editMode === submission.id ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                  />
                ) : (
                  submission.name
                )}
              </td>
              <td>
                {editMode === submission.id ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) =>
                      setEditData({ ...editData, email: e.target.value })
                    }
                  />
                ) : (
                  submission.email
                )}
              </td>
              <td>
                {editMode === submission.id ? (
                  <input
                    type="text"
                    value={editData.role}
                    onChange={(e) =>
                      setEditData({ ...editData, role: e.target.value })
                    }
                  />
                ) : (
                  submission.role
                )}
              </td>
              <td>
                {editMode === submission.id ? (
                  <button onClick={handleUpdate}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(submission)}>Edit</button>
                    <button onClick={() => deleteSubmission(submission.id)}>
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataManagementComponent;
