// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from '../../pages/LoginPages';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <h1>LMS</h1>
                    <p>Lawyer Management System</p>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/ListedLawyers">Lawyers / Advocates</Link></li>
                    <li><Link to="/AddLawyer">Add Lawyers / Advocates</Link></li>
                    {/* <li><Link to="/contact">Contact Us</Link></li> */}
                    <li><Link to="/AdminDashboard">Admin Login</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="navbar-search">
                    <input type="text" placeholder="Search" />
                    <button className="search-button">Search</button>
                </div>
                <div className="navbar-contact">
                    <button className="navbar-contact-btn">Log In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
