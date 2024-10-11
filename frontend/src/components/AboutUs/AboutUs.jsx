import React from "react";
import "./AboutUs.css";
import aboutImage from "../../assets/Images/Aboutus.jpeg"; // Ensure the image path is correct

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-image">
        <img src={aboutImage} alt="About Us" />
      </div>
      <div className="about-us-content">
        <h2>About us</h2>
        <p>
        Lawer Managment System is a powerful lawyer management system designed to simplify legal practice. We offer tools for case management, client communication, document organization, and billing—all in one place. Our platform helps legal professionals save time, reduce administrative tasks, and focus on delivering top-notch legal services. Whether you’re a solo practitioner or part of a large firm, Lawer Managment System streamlines your workflow for greater efficiency and success.
        </p>
        <button className="more-info-btn">MORE INFO...</button>
      </div>
    </div>
  );
};

export default AboutUs;
