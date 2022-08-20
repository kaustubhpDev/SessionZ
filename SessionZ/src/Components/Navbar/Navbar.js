import "./Navbar.css";
import { Link, NavLink, Router } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-child">
          <h1 className="logo">
            <i class="fa-regular fa-calendar logo-icon"></i>
            <span> </span>
            SessionZ
          </h1>
        </div>

        <div className="nav-tabs ">
          <Link to="pricing" className="tabs ">
            Pricing
          </Link>
          <Link to="/pricing" className="tabs">
            Contact Us
          </Link>
          <Link to="/" className="tabs">
            Login
          </Link>

          <button className="create-account-button">Create Account 🚀</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
