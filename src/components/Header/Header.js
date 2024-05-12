import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div className="header-top-container">
        <img src="Logo.png" alt="logo" className="logo-image" />
        <h1>LOGO</h1>
        <div>
          <input type="text" placeholder="Search" className="search-input" />
          <CiSearch className="search-icon" />
          <MdOutlineFavoriteBorder />
          <HiOutlineShoppingBag />
          <select>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>
      <navbar>
        <ul className="header-list">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
          <li>About</li>
        </ul>
      </navbar>
      <hr />
    </header>
  );
};

export default Header;
