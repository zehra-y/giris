import React from "react";
import "./LoginPage.css"; 

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <div className="logo-container">
            <img
              src="logo.png" 
              alt="Logo"
              className="logo"
            />
          </div>
          <h2>Welcome Back</h2>
          <p>Enter your account details.</p>
          <button className="social-login google">Log in with Google</button>
          <button className="social-login github">Log in with Github</button>
          <div className="divider">
            <span>OR</span>
          </div>
          <input
            type="text"
            placeholder="Email or Username"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <div className="options">
            <label>
              <input type="checkbox" />
              Keep me signed in
            </label>
            <a href="/" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button className="sign-in-button">Sign in</button>
          <a href="/" className="create-account">
            Create an account
          </a>
        </div>
        <div className="login-image">
          <img
            src="your-image.jpg" 
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
