import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./ServicesPage.css"; // Import the CSS file

const services = [
  {
    id: 1,
    title: "O & M Services",
    description: "Provide operation and maintenance services to ensure optimal performance of systems.",
    icon: "⚙️",
  },
  {
    id: 2,
    title: "Electrical & Instrumentation Services",
    description: "Specialized electrical and instrumentation solutions for industrial and commercial needs.",
    icon: "🔌",
  },
  {
    id: 3,
    title: "Mechanical Engineering Services",
    description: "Offer expert mechanical engineering solutions for system design and optimization.",
    icon: "🔧",
  },
  {
    id: 4,
    title: "Consultancy Services",
    description: "Provide strategic consultancy to guide your business towards success with actionable insights.",
    icon: "📊",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Heading Section */}
      <div className="services-heading">
        <h2>Our Services</h2>
        <p>Explore the range of services we offer to help your business succeed.</p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={`/service/${service.id}`} className="more-details-link">More Details</Link> {/* Link to ServiceDetailPage */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
