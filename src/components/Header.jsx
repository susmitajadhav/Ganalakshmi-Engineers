import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">MyLogo</div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/Ganalakshmi-Engineers/">Home</a></li>
          <li><a href="/Ganalakshmi-Engineers/gallery">Gallery</a></li>
          <li><a href="/Ganalakshmi-Engineers/aboutus">About</a></li>
          <li><a href="/Ganalakshmi-Engineers/product">Products</a></li>
          <li><a href="/Ganalakshmi-Engineers/getquote" className="get-quote-btn">Get Quote</a></li>
        </ul>
        <button className="show-all-btn" onClick={toggleSideMenu}>Menu</button>
      </nav>

      <div className={`side-menu ${isSideMenuOpen ? 'open' : ''}`}>
        <ul className="side-menu-links">
          <li><a href="/Ganalakshmi-Engineers/">Home</a></li>
          <li><a href="/Ganalakshmi-Engineers/gallery">Gallery</a></li>
          <li><a href="/Ganalakshmi-Engineers/aboutus">About</a></li>
          <li><a href="/Ganalakshmi-Engineers/product">Products</a></li>
          <li><a href="/Ganalakshmi-Engineers/getquote" className="get-quote-btn">Get Quote</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
