import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import InputField from './InputField';

function Login() {
    return (
        <div className="login-container">
            <h2 className="form-title">Log in</h2>
            <form action="#" className="login-form">
                <InputField type="email" placeholder="Email address" icon="mail" />
                <InputField type="password" placeholder="Password" icon="lock"/>
                <a href="#" className="forgot-pass-link">Forgot Password?</a>
                <button className="login-button">Log In</button>
            </form>
            <p className="signup-text">Don't have an account? <Link to="/components/SignUp">Sign Up now</Link></p>
        </div>
    );
}

export default Login;