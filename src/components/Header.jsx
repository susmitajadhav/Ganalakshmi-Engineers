import React, { useState } from 'react';
import './Header.css';

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
          <li><a href="/">Home</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/aboutus">About</a></li>
          <li><a href="/product">Products</a></li>
          <li><a href="/getquote" className="get-quote-btn">Get Quote</a></li>
        </ul>
        <button className="show-all-btn" onClick={toggleSideMenu}>Show All</button>
      </nav>

      <div className={`side-menu ${isSideMenuOpen ? 'open' : ''}`}>
        <ul className="side-menu-links">
          <li><a href="/">Home</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/aboutus">About</a></li>
          <li><a href="/product">Products</a></li>
          <li><a href="/getquote" className="get-quote-btn">Get Quote</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
