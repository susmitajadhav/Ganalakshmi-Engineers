import React from "react";
import "./AboutUs.css"; // Import the new CSS file
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
          <p>Innovating the Future of Manufacturing</p>
        </header>
        <section className="about-section">
          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              We are a leading manufacturing company with over 20 years of
              experience in delivering high-quality products to industries across
              the globe. Our focus is on innovation, sustainability, and
              excellence in every aspect of our operations.
            </p>
          </div>
          <div className="about-values">
            <h3>Our Values</h3>
            <ul>
              <li>Innovation</li>
              <li>Sustainability</li>
              <li>Quality Excellence</li>
              <li>Customer Satisfaction</li>
            </ul>
          </div>
        </section>
        <section className="about-history">
          <h3>Our History</h3>
          <p>
            Since our founding in 2005, we’ve expanded globally, increasing our
            reach and impact while staying committed to improving processes and
            reducing environmental impact. We continue to lead the industry with
            cutting-edge technologies and top-tier manufacturing solutions.
          </p>
        </section>
        <section className="about-mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to revolutionize the manufacturing industry by
            delivering innovative solutions that are environmentally sustainable,
            cost-effective, and capable of meeting the evolving needs of our
            global clients.
          </p>
        </section>
        <section className="about-vision">
          <h3>Our Vision</h3>
          <p>
            We envision a future where our products empower businesses to thrive
            through cutting-edge technology, unmatched quality, and a commitment
            to sustainability. We strive to be the go-to provider for advanced
            manufacturing solutions that shape a better world for future
            generations.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
