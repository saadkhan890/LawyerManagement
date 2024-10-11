import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>LRMS</h3>
          <p>
          Welcome to Lawer Managment System, a comprehensive lawyer management system designed to streamline and enhance legal practice management. Our platform is tailored to meet the needs of law firms, legal departments, and individual practitioners by providing an all-in-one solution for case management, client communication, document organization, and billing.At Lawer Managment System, we understand the unique challenges faced by legal professionals. Our system is built to improve efficiency, reduce administrative burdens, and allow lawyers to focus more on what matters most—providing exceptional legal services. With features like automated task tracking, secure client portals, and integrated calendars, we ensure that every aspect of your legal practice is seamlessly managed.
          </p>
          <button className="btn">MORE INFO...</button>
        </div>
        <div className="footer-section links">
          <h3>About Us</h3>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="../lawyers/ListedLawyers.jsx">Listed Lawyers / Advocates</a></li>
            <li><a href="../../">Add Lawyers / Advocates</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Admin Login</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p id='copy-right'>&copy; 2021 LRMS.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-google-plus"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fas fa-rss"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
