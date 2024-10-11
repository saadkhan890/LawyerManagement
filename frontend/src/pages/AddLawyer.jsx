import React from "react";
import "../assets/CSS/AddLawyer.css";

const AddLawyer = () => {
  return (
    <div className="add-lawyer-container">
      <h2 className="form-title">Add Lawyer and Advocate</h2>
      <div className="form-section">
        <div className="personal-info">
          <h3 className="section-header">Personal Info</h3>
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter Lawyer/Advocate Full Name" />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input type="text" placeholder="Enter mobile number" />
            </div>
            <div className="form-group">
              <label>Office Address</label>
              <input type="text" placeholder="Office Address" />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" placeholder="Enter city" />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" placeholder="Enter State" />
            </div>
            <div className="form-group">
              <label>Languages known</label>
              <input
                type="text"
                placeholder="Languages should be separated by comma; Ex: English, Hindi"
              />
            </div>
            <div className="form-group">
              <label>Profile Pic</label>
              <input type="file" />
              <p className="file-note">Only jpg / jpeg / png / gif format allowed</p>
            </div>
          </form>
        </div>
        <div className="professional-info">
          <h3 className="section-header">Professional Info</h3>
          <form>
            <div className="form-group">
              <label>Experience (in years)</label>
              <input type="text" placeholder="Enter Experience" />
            </div>
            <div className="form-group">
              <label>Practice Areas</label>
              <input type="text" placeholder="Select Practice Areas" />
            </div>
            <div className="form-group">
              <label>Courts</label>
              <input
                type="text"
                placeholder="Courts should be separated by comma; Ex: High Court, Supreme Court"
              />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input type="text" placeholder="Website" />
            </div>
            <div className="form-group">
              <label>Description (if Any)</label>
              <textarea placeholder="Description"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLawyer;
