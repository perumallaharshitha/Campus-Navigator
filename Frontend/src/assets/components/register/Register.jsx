import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [role, setRole] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");  // Add error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/user-api/user', { role, username, password });
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Something went wrong");  // Update error state with the message from backend
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="registration-left">
          <h1>Navigate Your Campus</h1>
        </div>
        <div className="registration-right">
          <div className="registration-form">
            <h2>Create an Account</h2>
            {error && <div className="error-message">{error}</div>}  {/* Display error message */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  className="form-control"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="parent">Parent</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Choose a username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Create a password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-submit">
                Create an Account
              </button>
            </form>
            <p className="login-link">
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
