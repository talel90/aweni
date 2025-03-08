function login(){
    return(
        <div className="login-container">
            <h2 className="form-title">Log in with</h2>
            <div className="social-login">
                <button className="social-button">
                    <img src="assets\logos\google.svg" alt="" className="social-icon" />
                </button>
            </div>
        </div>
    );
}

export default login