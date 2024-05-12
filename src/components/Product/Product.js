import React from "react";
import { CiHeart } from "react-icons/ci";

import "./product.css";

const Product = ({ details }) => {
  const { image, price, title } = details;
  return (
    <li className="product-item-container">
      <img className="product-image" alt="product" src={image} />
      <p>{title}</p>
      <p>Sign in or create an account to see pricing </p>
      <input id="heart" type="checkbox" />

      <div className="price-favorite">
        <label htmlFor="heart">
          <CiHeart />
        </label>
        <p>{price}</p>
      </div>
    </li>
  );
};

export default Product;
