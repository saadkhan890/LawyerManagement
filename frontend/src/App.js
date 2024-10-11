import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing default exports
import Home from './components/Home/Home.jsx';
import AddLawyer from './pages/AddLawyer.jsx';
import AdminDashboard from './components/Admin/AdminDashboard.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import Registration from './pages/registrationsPage.jsx';
import Login from './pages/LoginPages.jsx';
import Header from './components/Header/Header.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Footer from './components/Footer/Footer.jsx';
import ListedLawyers from './components/lawyers/ListedLawyers'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header/>
        <AboutUs/>
        <Home/>
        <Footer/>
        <Routes>
          <Route path="/components/Home/Home.jsx" element={<Home />} />
          <Route path="/pages/AddLawyer.jsx" element={<AddLawyer />} />
          <Route path="/components/Admin/AdminDashboard.jsx" element={<AdminDashboard />}/>
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/" element={<ListedLawyers />} />
          <Route path="/pages/registrationsPage.jsx" element={<Registration />} />
          <Route path="/pages/LoginPages.jsx" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
