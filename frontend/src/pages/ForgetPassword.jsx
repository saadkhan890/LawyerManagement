import { useState } from "react";
import "../assets/CSS/ForgetPassword.css"; // Ensure the CSS file path is correct

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    const response = await fetch(`http://localhost:5000/api/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    // Handle response here
  };

  return (
    <section className="auth-section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <h1>Forgot Password</h1>
          </div>
          <div className="form-body">
            <div className="form-group">
              <div>
                <label htmlFor="email">Enter your email address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  placeholder="Enter your registered email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-footer">
            <button type="submit" className="btn btn-submit">
              Reset Password
            </button>
          </div>
        </form>
        <div className="form-options">
          <a href="/login.jsx">Back to Login</a>
          <a href="/Registration.jsx">Don't have an account? Sign Up</a>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
