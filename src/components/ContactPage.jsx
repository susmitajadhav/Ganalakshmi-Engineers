import React from "react";
import "./ContactPage.css"; // Import the CSS file

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-box">
        {/* Left Side - Contact Form */}
        <div className="form-section">
          <h2>Contact Us</h2>

          <label>Full Name</label>
          <input type="text" placeholder="Your Full Name" />

          <label>Email Address</label>
          <input type="email" placeholder="Your Email Address" />

          <label>Your Message</label>
          <textarea rows="4" placeholder="Type your message here..."></textarea>

          <button type="submit">Send Message</button>
        </div>

        {/* Right Side - Contact Info */}
        <div className="info-section">
          <h2>Get in Touch</h2>
          <p>📍 123 Main Street, New York, USA</p>
          <p>📧 Email: contact@example.com</p>
          <p>📞 Phone: +1 234 567 890</p>

          {/* Social Media Links (Commented Out) */}
          {/* <div className="social-links">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
