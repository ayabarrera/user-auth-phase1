import React from "react";
import "./loginpage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <h1>Login to your account</h1>
      <form action="/api/auth/login" method="POST" className="login-form">
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="signup-link">Don't have an account? <a href="/register">Sign Up</a></p>
    </div>
  );
}
