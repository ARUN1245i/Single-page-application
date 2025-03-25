import React from "react";
import "../styles/form.css"; // Import CSS

const RequirementFiles = ({ businessType, handleChange }) => {
  const requirements = {
    "Retail Business": ["Business License", "Tax ID", "GST Certificate"],
    "IT Startup": ["Company Registration", "IT Compliance Certificate"],
    "Manufacturing Unit": ["Factory License", "Environmental Clearance"],
  };

  return (
    <div className="requirement-files">
      <h3>Required Documents for {businessType}</h3>
      {requirements[businessType]?.map((doc, index) => (
        <div key={index} className="file-upload">
          <label>{doc}:</label>
          <input type="file" name={doc} onChange={handleChange} required />
        </div>
      ))}
    </div>
  );
};

export default RequirementFiles;
