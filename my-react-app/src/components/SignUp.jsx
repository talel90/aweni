import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    account_type: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Mock signup functionality
    if (formData.email && formData.password && formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      // Store mock user data
      const mockUser = {
        email: formData.email,
        name: 'New User'
      };
      localStorage.setItem('user', JSON.stringify(mockUser));
      navigate('/');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Create Account</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="input-icon">✉️</span>
          </div>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          <div className="input-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="input-field"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          <div className="input-wrapper">
            <input
              type="tel"
              name="phone"
              className="input-field"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <span className="input-icon">📱</span>
          </div>
          <div className="input-wrapper">
            <select
              name="account_type"
              className="input-field"
              value={formData.account_type}
              onChange={handleChange}
              required
            >
              <option value="">Select Account Type</option>
              <option value="client">Client</option>
              <option value="professional">Professional</option>
            </select>
            <span className="input-icon">👤</span>
          </div>
          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>
        <p className="auth-text">
          Already have an account?{' '}
          <Link to="/components/login" className="auth-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;