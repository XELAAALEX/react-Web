import React from "react";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.icons8.com/glyph-neue/64/waiter.png"
          alt="Restaurant Logo"
        />
      </div>

      {/* Navigation and User Icon */}
      <div className="nav-items">
        <ul className="headerList">
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li className="cart-item">
            <img
              className="food-icon"
              src="https://img.icons8.com/clouds/100/food-cart.png"
              alt="Food Cart Icon"
            />
            Cart
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
