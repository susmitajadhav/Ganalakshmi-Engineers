import React from 'react';
import './Product.css'; // Import CSS file
import Header from './Header';
import Footer from './Footer';


const Product = () => {
  const offerings = [
    {
      title: "High-Quality Machinery",
      description: "We manufacture advanced machinery with cutting-edge technology.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/356762677/YY/VH/BU/3900540/8-channel-relay-card-500x500.jpg"
    },
    {
      title: "Reliable Industrial Panels",
      description: "Our industrial panels ensure smooth automation and control.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/356762677/YY/VH/BU/3900540/8-channel-relay-card-500x500.jpg"
    },
    {
      title: "Precision Relay Cards",
      description: "Top-quality relay cards for efficient power management.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/356762677/YY/VH/BU/3900540/8-channel-relay-card-500x500.jpg"
    },
    {
      title: "High-Quality Machinery",
      description: "We manufacture advanced machinery with cutting-edge technology.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/356762677/YY/VH/BU/3900540/8-channel-relay-card-500x500.jpg"
    },
    {
      title: "Reliable Industrial Panels",
      description: "Our industrial panels ensure smooth automation and control.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/356762677/YY/VH/BU/3900540/8-channel-relay-card-500x500.jpg"
    },
    {
      title: "Precision Relay Cards",
      description: "Top-quality relay cards for efficient power management.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/356762677/YY/VH/BU/3900540/8-channel-relay-card-500x500.jpg"
    }
  ];

  return (
    <div>
      <Header/>
    <section className="what-we-offer">
      <h2>Our Product</h2>
      <div className="offer-list">
        {offerings.map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Product;
