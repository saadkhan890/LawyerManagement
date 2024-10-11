import React from "react";
import lawyer1 from "../../assets/Images/Lawyer1.jpg"; // Replace with actual image path
import lawyer2 from "../../assets/Images/Lawyer2.jpg";
import lawyer3 from "../../assets/Images/Lawyer3.jpg";
import lawyer4 from "../../assets/Images/Lawyer4.jpg";
import "./Home.css";

const lawyers = [
  {
    name: "Rutuja Kumar",
    specialization: "Cheque Bounce, Civil",
    image: lawyer1,
  },
  {
    name: "Roshni Singh",
    specialization: "Cheque Bounce, Civil, Property, Recovery, Wills / Trusts",
    image: lawyer2,
  },
  {
    name: "Amit Singh",
    specialization: "Cheque Bounce, Recovery, Business lawyer",
    image: lawyer3,
  },
  {
    name: "Sanjeev Kumar",
    specialization:
      "Business lawyer, Civil, Criminal, Domestic Violence, Property, Wills / Trusts",
    image: lawyer4,
  },
];

const Home = () => {
  return (
    <div className="lawyers-list-container">
      <h2 className="section-title">Meet Lawyers/Advocates</h2>
      <div className="lawyers-grid">
        {lawyers.map((lawyer, index) => (
          <div className="lawyer-card" key={index}>
            <img src={lawyer.image} alt={lawyer.name} className="lawyer-image" />
            <h3 className="lawyer-name">{lawyer.name}</h3>
            <p className="lawyer-specialization">{lawyer.specialization}</p>
          </div>
        ))}
      </div>
      <button className="view-all-btn">VIEW ALL</button>
    </div>
  );
};

export default Home;
