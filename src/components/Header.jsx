import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { IoPersonCircleSharp } from "react-icons/io5";

function Header() {
  return (
    <div className="container Container">
      <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          {/* Logo Section */}
          <div className="logo">
            <span
              style={{
                fontFamily: "'Pacifico', cursive",
                fontSize: "2rem",
                color: "red",
                marginRight: "5px",
              }}
            >
              Genki
            </span>
            <span
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1.2rem",
                color: "red",
                marginBottom: "5px", // Adding bottom margin to Grub
                display: "inline-block", // Ensures marginBottom works
              }}
            >
              Grub
            </span>
          </div>
        </a>

        <ul className="nav nav-pills Header d-flex align-items-center">
          {/* Navigation Links */}
          <li className="nav-item">
            <Link to="/" className="nav-link" style={{ color: "#FF4040" }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link btn" style={{ color: "#FF4040" }}>
              Meal Planning
            </button>
          </li>
          <li className="nav-item">
            {/* Cuisines Button with Link */}
            <Link to="/cuisines" className="nav-link btn" style={{ color: "#FF4040" }}>
              Cuisines
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Calorie Counter
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Smart Pantry
            </a>
          </li>

          {/* Login icon and button group */}
          <li className="nav-item d-flex align-items-center">
            <IoPersonCircleSharp
              className="Log"
              style={{ fontSize: "36px", marginRight: "10px" }}
            />
            <button
              type="button"
              className="btn btn-outline-primary Log"
              style={{ height: "2.5rem" }}
            >
              Login
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
