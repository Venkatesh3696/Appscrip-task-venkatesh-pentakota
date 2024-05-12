import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";
import "./header.css";

const Header = ({ showCustomize, onclickCustomize }) => {
  const onclickButton = () => {
    onclickCustomize();
  };
  return (
    <header>
      <div className="header-top-container">
        <div>
          <CiMenuBurger className="menubar" onClick={onclickButton} />
          <img src="Logo.png" alt="logo" className="logo-image" />
        </div>
        <h1 className="logo-name">LOGO</h1>
        <div className="buttons-container">
          <div className="search-container">
            <input type="text" className="search-input" />
            <button>
              <CiSearch className="search-icon icon" />
            </button>
          </div>
          <MdOutlineFavoriteBorder className="icon" />
          <HiOutlineShoppingBag className="icon" />
          <select className="lang">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>
      <nav>
        <ul className="header-list">
          <p>SHOP</p>
          <p>SKILLS</p>
          <p>STORIES</p>
          <p>ABOUT</p>
          <p>CONTACT US</p>
          <p>About</p>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
