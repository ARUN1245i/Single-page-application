import React from "react";
import Sidebar from "../components/Sidebar";
import ApplicationForm from "../components/ApplicationForm";
import "../styles/apply.css"; // Import CSS file

const Apply = () => {
  return (
    <div className="apply-container">
      <Sidebar />
      <div className="apply-content">
        <h2>Apply for Business Approvals</h2>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default Apply;
