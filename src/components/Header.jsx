import React from "react";
import { Link } from "react-router-dom";
import useOnlineOffline from "../Utils/useOnlineOffline";

/**
 * Header Component
 * Fixed navigation header with logo and menu items
 * Responsive design that collapses on mobile devices
 */
const Header = () => {

  let isOnline = useOnlineOffline();
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.icons8.com/glyph-neue/64/waiter.png"
          alt="FoodieExpress Logo"
        />
      </div>

      {/* Navigation Menu */}
      <div className="nav-items">
        <ul className="headerList">
          <li>
             <div>{isOnline ? "✅ Online" : "❌ Disconnected"}</div>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
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