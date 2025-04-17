import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Mock login functionality
        if (email && password) {
            // For demo purposes, we'll set account type based on email
            // In a real app, this would come from your backend
            const account_type = email.includes('pro') ? 'professional' : 'client';
            
            // Store mock user data
            const mockUser = {
                email: email,
                name: email.split('@')[0],
                account_type: account_type
            };
            localStorage.setItem('user', JSON.stringify(mockUser));
            navigate('/dashboard');
        } else {
            setError('Please enter both email and password');
        }
    };

    // Check if user is already logged in
    React.useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            navigate('/dashboard');
        }
    }, [navigate]);

    return (
        <div className="auth-container">
            <div className="auth-form-container">
                <h2 className="auth-title">Welcome Back</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="input-wrapper">
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span className="input-icon">✉️</span>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="input-field"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                    <Link to="/forgot-password" className="forgot-password">
                        Forgot Password?
                    </Link>
                    <button type="submit" className="auth-button">
                        Sign In
                    </button>
                </form>
                <p className="auth-text">
                    Don't have an account?{' '}
                    <Link to="/components/SignUp" className="auth-link">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;