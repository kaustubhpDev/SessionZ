import React from "react";
import "./Signup.css";
import loginillustration from "./loginIllustration.png";
const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-illustration">
          <img src={loginillustration} alt="login" className="login-image" />
        </div>
        <div className="login-form">
          <div className="form-container">
            <h1 className="form-heading"> Welcome!💌</h1>
            <form className="form">
              <label className="form-field-title ">
                Email <br />
                <input type="text" name="first-name" />
              </label>
              <label className="form-field-title">
                Password <br></br>
                <input type="password" name="password" />
              </label>
              <button type="button" className="submit-button">
                Login!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
