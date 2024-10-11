import { useState } from "react";
import "../assets/CSS/registrationpage.css";

const Registration = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user); 

    const response = await fetch(`http://localhost:5000/api/lawyers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), 
    });
    
  };

  return (
    <>
      <section className="add-user-section">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-header">
              <h1>Add User Information</h1>
            </div>
            <div className="form-body">
              <div className="form-group">
                <div className="form-section">
                  <h2>Personal Info</h2>
                  <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={user.fullName} 
                      onChange={handleInput}
                      placeholder="Enter Lawyer/Advocate Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email} 
                      onChange={handleInput}
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={user.phone} 
                      onChange={handleInput}
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" aria-required>Office Address</label>
                    <input
                      type="text"
                      name="address"
                      value={user.address} 
                      onChange={handleInput}
                      placeholder="Enter the User Address"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h2>Professional Info</h2>
                  <div>
                    <label htmlFor="description">Description (if any)</label>
                    <textarea
                      name="description"
                      value={user.description} 
                      onChange={handleInput}
                      placeholder="Description"
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-footer">
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Registration;
