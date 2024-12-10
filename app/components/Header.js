import React from 'react';
import Image from 'next/image';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <span className="top-bar-text">Appscrip</span>
        <span className="top-bar-text">Appscrip</span>
        <span className="top-bar-text">Appscrip</span>
      </div>
      <div className="nav-bar">
        <div className="logo-section">
          <Image src="/images/appscrip.png" alt="Logo" className="logo" width={150} height={150} />
          {/* <span className="logo-text">LOGO</span> */}
        </div>
        <nav className="nav">
          <a href="/shop" className="nav-link">Shop</a>
          <a href="/skills" className="nav-link">Skills</a>
          <a href="/stories" className="nav-link">Stories</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact Us</a>
        </nav>
        <div className="icons">
          <button className="icon-button" aria-label="Search">🔍</button>
          <button className="icon-button" aria-label="Wishlist">🤍</button>
          <button className="icon-button" aria-label="Cart">🛒</button>
          <button className="icon-button" aria-label="Profile">👤</button>
        </div>
        <div className="language-selector">
          <select className="language-dropdown">
            <option value="eng">ENG</option>
            <option value="esp">ESP</option>
            <option value="fra">FRA</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
