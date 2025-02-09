import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");  // Add error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/user-api/login', { username, password });
      console.log(response.data);
      if (response.data.message === "Login successful") {
        navigate('/campus-map');
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Invalid login credentials");  // Update error state
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <h1>Welcome back!</h1>
          {error && <div className="error-message">{error}</div>}  {/* Display error message */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter your username"
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
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Log In
            </button>
          </form>
          <p className="register-link">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
        <div className="login-right">
          <div className="graphic-container">
            <h3>Hello, welcome back!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
