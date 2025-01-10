import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="registration-left">
          <h1>Navigate Your Campus</h1>
            </div>
        <div className="registration-right">
          <div className="registration-form">
            <h2>Create an Account</h2>
            <form>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select id="role" className="form-control">
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="parent">Parent</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Enter your full name" required  />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" placeholder="Choose a username"  required  />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email"  required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" className="form-control" placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" placeholder="Create a password" required />  </div>
              <div className="form-group">
                <input type="checkbox" id="privacy-policy" />
                <label htmlFor="privacy-policy">
                  I agree  </label>
              </div>
              <button type="submit" className="btn-submit"> Ceate an Account </button>
            </form>
            <p className="login-link"> Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
