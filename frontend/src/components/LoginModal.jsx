import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Styles/LoginModal.css'

const LoginModal = () => {
  const [role, setRole] = useState("Employee"); // Default role
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // You can add authentication logic here
    console.log(`Logging in as ${role} with email: ${email}`);
    
    // Redirect to respective pages based on role
    if (role === "Employee") {
        navigate("/employee-dashboard");
    }
    else if (role === "Intern") {
        navigate("/InternDashboard"); 
        alert("Open in Desktop mode or in PC/Laptop for better visuial experience ");
    }
    else if (role === "Admin") {
     
        navigate("/AdminDashboard");
        
        }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="role-selector">
        <button onClick={() => setRole("Employee")} className={role === "Employee" ? "active" : ""}>Employee</button>
        <button onClick={() => setRole("Intern")} className={role === "Intern" ? "active" : ""}>Intern</button>
        <button onClick={() => setRole("Admin")} className={role === "Admin" ? "active" : ""}>Admin</button>
      </div>

      <form onSubmit={handleLogin} className="login-form">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login as {role}</button>
      </form>
    </div>
  );
};

export default LoginModal;
