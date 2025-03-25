import React from "react";
import ApplicationForm from "../components/ApplicationForm";
import StatusTracker from "../components/StatusTracker";

const Dashboard = () => {
  return (
    <div className="p-6">
      <ApplicationForm />
      <StatusTracker />
    </div>
  );
};

export default Dashboard;
