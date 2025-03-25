import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RequirementFiles from "./RequirementFiles";
import "../styles/form.css"; 

const ApplicationForm = () => {
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

  // Function to send form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      business_name: formData.businessName,  
      business_type: formData.businessType,
      email: formData.email,
    };

    try {
      const response = await fetch("http://localhost:5000/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        navigate("/upload-documents"); // Move to the Next Page
      } else {
        alert("Error submitting application.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Apply for Business Approvals</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} required />
        
        <select name="businessType" onChange={handleChange} required>
          <option value="">Select Business Type</option>
          {Object.keys(businessTypes).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        {formData.businessType && (
          <RequirementFiles businessType={formData.businessType} />
        )}

        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
