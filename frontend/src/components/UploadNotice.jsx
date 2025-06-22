import React, { useState, useEffect } from "react";
import "./Styles/UploadNotices.css";

const UploadNotice = () => {
  const [notice, setNotice] = useState({
    title: "",
    subtitle: "",
    attachment: null,
  });
  const [notices, setNotices] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch all notices from the backend API
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("http://localhost:5000/notices");
        if (!res.ok) throw new Error("Failed to fetch notices");
        const data = await res.json();
        setNotices(data);
      } catch (err) {
        console.error("Error fetching notices:", err);
      }
    };
    fetchNotices();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotice((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    setNotice((prev) => ({ ...prev, attachment: e.target.files[0] }));
  };

  // Submit notice
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!notice.title || !notice.subtitle || !notice.attachment) {
      setMessage("Please fill all fields and attach a file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", notice.title);
    formData.append("subtitle", notice.subtitle);
    formData.append("attachment", notice.attachment);

    try {
      const response = await fetch("http://localhost:5000/notices", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload notice");

      const newNotice = await response.json();
      setNotices((prev) => [...prev, newNotice]); // Append new notice to state
      setMessage("Notice uploaded successfully!");
      setNotice({ title: "", subtitle: "", attachment: null });
    } catch (error) {
      console.error("Error uploading notice:", error);
      setMessage("An error occurred while uploading the notice.");
    }
  };

  // Delete notice
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/notices/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete notice");

      setNotices((prev) => prev.filter((n) => n._id !== id));
      setMessage("Notice deleted successfully!");
    } catch (error) {
      console.error("Failed to delete notice:", error);
    }
  };

  return (
    <div className="notice-upload-container">
      <h2>Upload Notice</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group1">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={notice.title}
            onChange={handleChange}
            placeholder="Enter notice title"
            required
          />
        </div>
        <div className="form-group1">
          <label>Subtitle</label>
          <textarea
            id="sub"
            name="subtitle"
            value={notice.subtitle}
            onChange={handleChange}
            placeholder="Enter notice subtitle"
            required
          ></textarea>
        </div>
        <div className="form-group1">
          <label>Attachment</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <div className="form-group1">
          <button type="submit">Upload Notice</button>
        </div>
      </form>
      <h3>All Notices</h3>
      <ul>
        {notices.map((n) => (
          <li key={n._id}>
            <h4>{n.title}</h4>
            <p>{n.subtitle}</p>
            {n.attachmentUrl && (
              <a href={n.attachmentUrl} target="_blank" rel="noopener noreferrer">
                View Attachment
              </a>
            )}
            <button onClick={() => handleDelete(n._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UploadNotice;
