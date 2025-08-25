import React from "react";
import "./style.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="logo" src="https://img.icons8.com/ios-filled/50/water-transportation.png" alt="logo" />

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search anything you want..."
          />
          <img className="search-icon" src="https://img.icons8.com/pastel-glyph/128/search--v2.png" alt="search icon" />
        </div>

        <img className="user-icon" width="48" height="48" src="https://img.icons8.com/badges/48/user.png" alt="user icon"/>
      </header>
    </>
  );
};

export default Header;
