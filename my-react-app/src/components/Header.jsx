import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">𝔸𝕨𝕖𝕟𝕚</div>
      <div className="auth-buttons">
        
        <button>Log In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;