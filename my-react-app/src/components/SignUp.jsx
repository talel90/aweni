import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);

  return (
    <div className="signup-container">
      <h2 className="form-title">Sign Up</h2>
      <form className="signup-form">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Email"
            className="input-field"
            required
          />
          <i className="material-icons">mail</i>
        </div>
        <div className="input-wrapper">
          <input
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="Password"
            className="input-field"
            required
          />
          <i className="material-icons">lock</i>
          <i
            onClick={() => setIsPasswordShown(prevState => !prevState)}
            className="material-icons eye-icon"
          >
            {isPasswordShown ? 'visibility' : 'visibility_off'}
          </i>
        </div>
        <div className="input-wrapper">
          <input
            type={isConfirmPasswordShown ? 'text' : 'password'}
            placeholder="Confirm Password"
            className="input-field"
            required
          />
          <i className="material-icons">lock</i>
          <i
            onClick={() => setIsConfirmPasswordShown(prevState => !prevState)}
            className="material-icons eye-icon"
          >
            {isConfirmPasswordShown ? 'visibility' : 'visibility_off'}
          </i>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Phone Number"
            className="input-field"
            required
          />
          <i className="material-icons">phone</i>
        </div>
        <div className="input-wrapper">
          <select className="input-field" required>
            <option value="" disabled selected>Select Account Type</option>
            <option value="client">Client</option>
            <option value="professional">Professional</option>
          </select>
          <i className="material-icons">account_circle</i>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="login-prompt">
       <p>Already have an account? <Link to="/components/login">Login</Link></p>
      </div>
    </div>
  );
};

export default SignUp;