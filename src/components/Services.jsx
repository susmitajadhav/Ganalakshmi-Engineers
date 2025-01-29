import React from "react";
import "./Services.css"; // Import the CSS file for styling
import Header from "./Header";
import Footer from "./Footer";

const Services = () => {
  return (
    <div>
      <Header/>
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Leading the way with innovative manufacturing solutions</p>
      </header>

      <section className="services-list">
        <div className="service-item">
          <h2>Custom Manufacturing</h2>
          <p>
            We offer bespoke manufacturing solutions tailored to the specific needs of our clients. Whether you need a prototype or mass production, we've got you covered.
          </p>
        </div>
        <div className="service-item">
          <h2>Quality Control</h2>
          <p>
            Our strict quality control processes ensure that all products meet the highest industry standards. We perform detailed inspections and tests to guarantee perfection.
          </p>
        </div>
        <div className="service-item">
          <h2>Supply Chain Management</h2>
          <p>
            We optimize and manage your supply chain to ensure timely delivery, reduced costs, and smooth operations. From sourcing to final delivery, we handle it all.
          </p>
        </div>
        <div className="service-item">
          <h2>Consultation Services</h2>
          <p>
            Our team of experts provides consultation to help you optimize your manufacturing processes. We offer advice on design, production techniques, and efficiency improvements.
          </p>
        </div>
      </section>

     </div>
     <Footer/>
    </div>
  );
};

export default Services;
