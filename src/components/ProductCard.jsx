import React from 'react';
import './ProductCard.css'; // Make sure to create a CSS file for styling

const ProductCard = ({ shoe }) => {
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={shoe.image} alt={shoe.name} />
      </div>
      <div className="card-details">
        <h2 className="product-name">{shoe.name}</h2>
        <p className="product-description">{shoe.description}</p>
        <span className="product-price">${shoe.price}</span>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const shoes = [
    {
      name: 'Running Shoe',
      description: 'Comfortable running shoes for daily workouts.',
      price: 99.99,
      image: 'https://via.placeholder.com/200',
    },
    {
      name: 'Casual Sneakers',
      description: 'Stylish sneakers for casual wear.',
      price: 79.99,
      image: 'https://via.placeholder.com/200',
    },
    {
      name: 'Leather Boots',
      description: 'Durable leather boots for outdoor activities.',
      price: 120.00,
      image: 'https://via.placeholder.com/200',
    },
  ];

  return (
    <div className="product-list">
      {shoes.map((shoe, index) => (
        <ProductCard key={index} shoe={shoe} />
      ))}
    </div>
  );
};

export default ProductList;
