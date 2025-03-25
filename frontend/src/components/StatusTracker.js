import React, { useState } from "react";
import "../styles/tracker.css"; // Import CSS
import { useNavigate } from "react-router-dom";
import RequirementFiles from "./RequirementFiles";
const StatusTracker = () => {
  const [applicationId, setApplicationId] = useState("");
  const [statuses, setStatuses] = useState([]);

  const handleTrack = () => {
    // Example: If ID is "12345", return multiple file statuses
    if (applicationId === "12345") {
      setStatuses([
        { fileName: "Business_License.pdf", status: "✅ Approved" },
        { fileName: "Tax_Document.pdf", status: "⏳ In Process" },
      ]);
    } else if (applicationId === "67890") {
      setStatuses([
        { fileName: "Business_License.pdf", status: "⏳ In Process" },
        { fileName: "Tax_Document.pdf", status: "❌ Rejected" },
      ]);
    } else {
      setStatuses([{ fileName: "Unknown", status: "❌ Not Found" }]);
    }
  };
const navigate = useNavigate();  
const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    email: "",
  });

  const businessTypes = {
    "Retail Business": ["Business License", "Tax ID", "GST Certificate"],
    "IT Startup": ["Company Registration", "IT Compliance Certificate"],
    "Manufacturing Unit": ["Factory License", "Environmental Clearance"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/upload-documents"); // Move to the Next Page
  };

  return (
    
    <div className="tracker-container">
      <form onSubmit={handleNext}>
              <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} required />
              
              <select name="businessType" onChange={handleChange} required>
                <option value="">Select Business Type</option>
                {Object.keys(businessTypes).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              <input
        type="text"
        placeholder="Application ID"
        value={applicationId}
        onChange={(e) => setApplicationId(e.target.value)}
      />         
      </form>
      <button onClick={handleTrack}>Track Status</button>
      
      {statuses.length > 0 && (
        <div className="status-list">
          <h4>File Status:</h4>
          {statuses.map((file, index) => (
            <p key={index}><strong>{file.fileName}:</strong> {file.status}</p>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default StatusTracker;
