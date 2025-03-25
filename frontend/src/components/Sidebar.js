import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css"; // Import CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/apply">Apply for Approval</Link></li>
        <li><Link to="/track">Track Status</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
