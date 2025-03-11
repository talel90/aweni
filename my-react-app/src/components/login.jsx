import './login.css';
import SocialLogin from './SocialLogin';
import InputField from './InputField';

function login() {
    return (
        <div className="login-container">
            <h2 className="form-title">Log in with</h2>
            <SocialLogin/>
            <p className="separator"><span>or</span></p>

            <form action="#" className="login-form">
                <InputField type="email" placeholder="Email address" icon="mail" />
                <InputField type="password" placeholder="Password" icon="lock"/>
                <a href="#" className="forgot-pass-link">Forgot Password?</a>
                <button className="login-button">Log In</button>
            </form>

            <p className="signup-text">Don't have account? <a href="#">Sign Up now</a></p>
        </div>
    );
}

export default login