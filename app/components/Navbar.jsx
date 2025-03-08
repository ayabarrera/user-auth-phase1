import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <div className="links">
        <a href="/login" className="link">Login</a>
        <a href="/register" className="link">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;