import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Aweni</a>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/login">Login</a></li>
          <li><a href="/signup" className="sign-up">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;