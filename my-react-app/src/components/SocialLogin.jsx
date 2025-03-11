import React from 'react'
import googleLogo from '/src/assets/logos/google.svg';
import appleLogo from '/src/assets/logos/apple.svg';

const SocialLogin = () => {
    return (
        <div className="social-login">

            <button className="social-button">
                <img src={googleLogo} alt="" className="social-icon" />Google
            </button>

            <button className="social-button">
                <img src={appleLogo} alt="" className="social-icon" />Apple
            </button>
        </div>
    )
}

export default SocialLogin