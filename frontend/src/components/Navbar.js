import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import CSS


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Single Window Portal</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/apply">Apply</Link>
        <Link to="/track">Track Status</Link>
      </div>
    </nav>
  );
};

export default Navbar;
