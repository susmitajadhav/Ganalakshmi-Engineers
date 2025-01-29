// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-sections">
        {/* About Us Section */}
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            We are a leading company dedicated to delivering quality products and services to our customers worldwide. Innovation and customer satisfaction are at the core of everything we do.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/contactpage">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: support@company.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 My Company. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" className="social-icon">Facebook</a>
          <a href="https://twitter.com" className="social-icon">Twitter</a>
          <a href="https://instagram.com" className="social-icon">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
