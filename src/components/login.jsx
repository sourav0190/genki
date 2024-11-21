import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Error state for invalid login
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating a check for an existing account
    // Replace this with actual logic, e.g., API call to check user credentials
    if (email === "user@example.com" && password === "password") {
      // Account exists, proceed to login
      console.log("Logged in successfully");
      navigate("/"); // Redirect to home or dashboard
    } else {
      // If account doesn't exist, navigate to the sign-up page
      setError("Account not found. Please sign up.");
      navigate("/signup");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="error">{error}</div>} {/* Error message */}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
