import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <h1>Welcome back!</h1>
          <p>Enter to get unlimited access to data & information.</p>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" className="form-control" placeholder="Enter your username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label> 
              <input type="password" id="password" className="form-control" placeholder="Enter password" required />
            </div>
            <div className="form-check">
              <input type="checkbox" id="remember" className="form-check-input" />
              <label htmlFor="remember" className="form-check-label">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block"> Log In </button>
          </form>
          <p className="register-link">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
        <div className="login-right">
          <div className="graphic-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
