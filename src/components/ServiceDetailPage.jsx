import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetailPage.css";
import Header from "./Header";
import Footer from "./Footer";

const serviceDetails = [
  {
    id: 1,
    title: "O & M Services",
    description: "Provide operation and maintenance services to ensure optimal performance of systems.",
    detailedDescription: "Our O&M services cover every aspect of operation and maintenance, ensuring that systems operate at peak efficiency. We provide preventive maintenance, troubleshooting, and emergency support.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrykyXTjNfNrsfv6PjRDL4dbuGcLJIhdevQ&s", // Replace with your image path
    icon: "⚙️",
    features: [
      "Preventive maintenance",
      "24/7 emergency support",
      "System performance optimization",
    ],
  },
  {
    id: 2,
    title: "Electrical & Instrumentation Services",
    description: "Specialized electrical and instrumentation solutions for industrial and commercial needs.",
    detailedDescription: "We offer top-notch electrical and instrumentation services for various industries, including installation, maintenance, and troubleshooting. We ensure compliance with safety standards and industry regulations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6di-4JFMilZAVYM6a_sdhZFbnOhUT4FqX9w&s", // Replace with your image path
    icon: "🔌",
    features: [
      "Electrical system installation",
      "Troubleshooting and diagnostics",
      "Compliance with safety standards",
    ],
  },
  {
    id: 3,
    title: "Mechanical Engineering Services",
    description: "Expert mechanical engineering solutions for system design, optimization, and maintenance.",
    detailedDescription: "Our mechanical engineering services include system design, optimization, and maintenance for industrial systems. We specialize in improving performance, reducing downtime, and increasing efficiency.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/328603020/RD/CK/WI/193539581/mechanical-engineering-services.jpg", // Replace with your image path
    icon: "🔧",
    features: [
      "System design and optimization",
      "Maintenance and troubleshooting",
      "Improving system performance",
    ],
  },
  {
    id: 4,
    title: "Consultancy Services",
    description: "Provide strategic consultancy to guide your business towards success with actionable insights.",
    detailedDescription: "Our consultancy services focus on helping businesses streamline operations, reduce costs, and achieve long-term success. We offer market analysis, strategy development, and process improvement.",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/MN/ZX/AC/147662989/consultancy-services.jpg", // Replace with your image path
    icon: "📊",
    features: [
      "Market analysis",
      "Strategy development",
      "Process optimization",
    ],
  },
];

const ServiceDetailPage = () => {
  const { id } = useParams(); // Get the service id from URL
  const service = serviceDetails.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="service-detail-page">
        <div className="icon">{service.icon}</div>
        <h2>{service.title}</h2>

        {/* Service Image */}
        <img src={service.image} alt={service.title} className="service-image" />

        <p>{service.detailedDescription}</p>

        {/* Additional Sections: Features */}
        <h3>Key Features</h3>
        <ul className="features-list">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Back to Services Button */}
        <a href="/" className="back-to-services">Back to Services</a>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
