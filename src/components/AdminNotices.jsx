import React, { useState } from "react";
import "./Styles/AdminNotices.css";

const AdminNotices = () => {
  const [notices, setNotices] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.file) {
      alert("Please fill in all fields and upload a file.");
      return;
    }

    const newNotice = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      fileName: formData.file.name,
    };

    setNotices([...notices, newNotice]);
    setFormData({ title: "", description: "", file: null });
    alert("Notice/Newsletter uploaded successfully!");
  };

  const handleDelete = (id) => {
    const updatedNotices = notices.filter((notice) => notice.id !== id);
    setNotices(updatedNotices);
    alert("Notice/Newsletter deleted successfully!");
  };

  return (
    <div className="admin-notices">
      <h1>Manage Notices & Newsletters</h1>
      <form onSubmit={handleUpload} className="notice-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter notice/newsletter title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a brief description"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload File *</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            required
          />
        </div>
        <button type="submit" className="upload-btn">
          Upload
        </button>
      </form>

      <h2>Uploaded Notices & Newsletters</h2>
      {notices.length === 0 ? (
        <p>No notices/newsletters uploaded yet.</p>
      ) : (
        <ul className="notice-list">
          {notices.map((notice) => (
            <li key={notice.id} className="notice-item">
              <div className="notice-details">
                <h3>{notice.title}</h3>
                <p>{notice.description}</p>
                <p>
                  <strong>File:</strong> {notice.fileName}
                </p>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(notice.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminNotices;
