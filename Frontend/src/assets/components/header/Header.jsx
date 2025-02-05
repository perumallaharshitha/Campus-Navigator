
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleScrollToDepartments = (e) => {
    e.preventDefault();
    const section = document.getElementById("departments-section");
    if (section) {
      section.scrollIntoView({ behavior: "auto" });
      section.classList.add("highlight");

      setTimeout(() => {
        section.classList.remove("highlight");
      }, 2000);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can handle the search here, like redirecting or filtering results
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="header-container">
      <div className="left">
        <Link to="/test">Campus Navigator</Link>
        {/* <h4 className="header-title">Campus Navigator</h4> */}
      </div>

      <nav className="center">
        <ul className="navbar">
          <li className="nav-item">
            <Link to="/" className="fw-bold nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <a href="#departments-section" onClick={handleScrollToDepartments} className="fw-bold nav-link">
              Departments
            </a>
          </li>
          <li className="nav-item">
            <Link to="/about" className="fw-bold nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/campus-map" className="fw-bold nav-link">Campus Map</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="fw-bold nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="fw-bold nav-link">Register</Link>
          </li>
        </ul>
      </nav>

      <div className="right"> 
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
