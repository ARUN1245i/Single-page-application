import React from "react";
import Sidebar from "../components/Sidebar";
import StatusTracker from "../components/StatusTracker";
import "../styles/tracker.css"; // Import CSS file

const Track = () => {
  return (
    <div className="track-container">
      <Sidebar />
      <div className="track-content">
        <h2>Track Application Status</h2>
        <StatusTracker />
      </div>
    </div>
  );
};

export default Track;
