import "./Login.css";
import getStarted from "./getStarted.png";
function Login() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-illustration">
          <img
            src={getStarted}
            alt="getStarted"
            className="get-started-image"
          ></img>
        </div>

        <div className="signup-form">
          <div className="form-container">
            <h1 className="form-heading"> Get Started !🎯</h1>
            <form className="form">
              <label className="form-field-title ">
                First Name <br />
                <input type="text" name="first-name" />
              </label>
              <br />
              <label className="form-field-title">
                Last Name <br />
                <input type="text" name="last-name" />
              </label>
              <br />
              <label className="form-field-title">
                Email <br />
                <input type="text" name="email" />
              </label>
              <br />
              <label className="form-field-title">
                Password <br></br>
                <input type="password" name="password" />
              </label>
              <button type="button" className="submit-button">
                Get Started!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
