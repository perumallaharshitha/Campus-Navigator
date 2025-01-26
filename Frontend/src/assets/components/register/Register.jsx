import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register() {
  const [role, setRole] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/register', {role, username, password})
    .then((response) => {
      console.log(response);
      navigate('/login');
    })
    .catch((error) => {
      console.log(error);
    });
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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  className="form-control"
                  //value={role}
                  onChange={(e)=>setRole(e.target.value)}  // Add onChange handler
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
                  //value={username}
                  onChange={(e)=>setUsername(e.target.value)}  // Add onChange handler
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
                  //value={password}
                  onChange={(e)=>setPassword(e.target.value)}  // Add onChange handler
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
