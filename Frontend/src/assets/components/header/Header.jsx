import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-4 bg-light d-flex align-items-center">
      <img 
      src=" "
         alt="" 
        className="img-fluid" 
        style={{ width: '50px', height: 'auto' } }
      />
      <h4 className="ms-3 text-secondary">Campus Navigator</h4>
      <ul className="nav fs-5 p-3 ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-secondary">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link text-secondary">
            Register
          </Link>
        </li>
       
        <li className="nav-item">
          <Link to="/login" className="nav-link text-secondary">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/campus-map" className="nav-link text-secondary">
            Campus Map
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link text-secondary">
            About Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;