import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <nav className="sidebar">
        <h3>LRMS | Admin</h3>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Sub-Admins</a></li>
          <li><a href="#">Practice Areas</a></li>
          <li><a href="#">Lawyers / Advocates</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Account Settings</a></li>
        </ul>
      </nav>
      
      <div className="main-content">
        <h2>Admin Dashboard</h2>
        <div className="cards">
          <div className="card card-blue">
            <h3>1</h3>
            <p>Sub Admins</p>
          </div>
          <div className="card card-green">
            <h3>4</h3>
            <p>Listed Lawyers/Advocates</p>
          </div>
          <div className="card card-yellow">
            <h3>4</h3>
            <p>Approved Listed Lawyers/Advocates</p>
          </div>
          <div className="card card-red">
            <h3>0</h3>
            <p>Blocked Listed Lawyers/Advocates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
