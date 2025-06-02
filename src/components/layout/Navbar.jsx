import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Topbar from "./Topbar.jsx"; 


function CustomNavbar() {
  return (
    <>
      {/* Topbar */}
      <Topbar />

      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="MedCare Clinic Logo" className="logo-img" />
            <span className="logo-text">MedCare Clinic</span>
          </Link>

          {/* Navigation links */}
          <nav className="nav-links">
            <Link to="/services" className="nav-item">
              Services
            </Link>
            <Link to="/about" className="nav-item">
              About
            </Link>
            <Link to="/contact" className="nav-item">
              Contact
            </Link>
          </nav>

          {/* Action buttons */}
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-outline">
              Log In
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register Account
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default CustomNavbar;