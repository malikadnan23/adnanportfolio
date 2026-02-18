import React from "react";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {<img src={logo} alt="" />}
          <p>
            I’m Adnan Saeed, a passionate Front-End Developer and IT Instructor
            from Mardan, Pakistan. Skilled in HTML, CSS, JavaScript, React, PHP,
            Python, and WordPress.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2026 Adnan Saeed. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
