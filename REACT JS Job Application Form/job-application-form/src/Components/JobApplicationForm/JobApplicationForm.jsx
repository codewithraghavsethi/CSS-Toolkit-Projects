import React, { useState } from "react";
import "./JobApplicationForm.css";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    location: "",
    linkedin: "",
    website: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle backend submission here
  };

  return (
    <div className="form-container">
      <h2>Apply for this role</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" />
        <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
        <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
        <InputField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Enter job title" />
        <InputField label="Location" name="location" value={formData.location} onChange={handleChange} placeholder="Enter Location" />
        <InputField label="LinkedIn Profile" name="linkedin" type="url" value={formData.linkedin} onChange={handleChange} placeholder="Enter LinkedIn Profile" />
        <InputField label="Personal Website" name="website" type="url" value={formData.website} onChange={handleChange} placeholder="Enter personal website" />
        
        <div className="form-group">
          <label>Resume</label>
          <input type="file" name="resume" onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const InputField = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default JobApplicationForm;
