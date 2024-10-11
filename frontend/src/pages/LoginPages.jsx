import { useState } from "react";
import "../assets/CSS/AddLawyer.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);

    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    
  };

  return (
    <section className="auth-section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <h1>Login</h1>
          </div>
          <div className="form-body">
            <div className="form-group">
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInput}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInput}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="form-options">
              <a href="/Forgetpassword.jsx">Forgot Password?</a>
              <a href="/Registration.jsx">Don't have an account? Sign Up</a>
            </div>
          </div>
          <div className="form-footer">
            <button type="submit" className="btn btn-submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Login;