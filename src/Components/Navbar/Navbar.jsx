import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="top-ribbon">
        <p>
          Tarbyh Namouthajiyah Schools in Alnarjis & Qurtoba are now open{" "}
          <a href="https://ncle-sms.com/Admission" target="blank">
            Register Now
          </a>
        </p>
      </div>
      <div className="title-bar">
        <h1>Parent Meeting for 2024-2025 First Trimester</h1>
        <h1>Qurtoba 2 - International</h1>
        <img src={Logo} alt="school logo" />
      </div>
      <span></span>
    </nav>
  );
};

export default Navbar;
