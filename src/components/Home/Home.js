import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";
import "./home.css";

const customizeOptions = [
  "All",
  "Option-1",
  "Option-2",
  "Option-3",
  "Option-4",
  "Option-5",
];

const Home = () => {
  const [products, setProducts] = useState([]);

  const [sort, setSort] = useState("recommended");
  const [customize, setCustomize] = useState(false);

  const [showCustomize, setShowCustomize] = useState(false);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeSortBy = (e) => {
    setSort(e.target.value);
  };

  const onChangeShowFilter = () => {
    setShowCustomize(!showCustomize);
  };

  const onChangeCustomize = () => {
    setCustomize(!customize);
  };

  const renderSingleFilter = () => {
    return (
      <select>
        {customizeOptions.map((each) => (
          <option value={each}>{each}</option>
        ))}
      </select>
    );
  };

  const renderTopFilterSection = () => {
    return (
      <div className="top-filter-section">
        <div>
          <p>{products.length} Items</p>
          <button
            type="button"
            className="show-button"
            onClick={onChangeShowFilter}
          >
            {showCustomize ? "< Hide" : "> Show"} filters
          </button>
        </div>
        <select onChange={onChangeSortBy} value={sort}>
          <option value="recommended">RECOMMENDED</option>
          <option value="newest">NEWEST FIRST </option>
          <option value="popular">POPULAR</option>
          <option value="high">PRICE : HIGH TO LOW</option>
          <option value="low">PRICE : LOW TO HIGH</option>
        </select>
      </div>
    );
  };

  const renderCostomizeSection = () => {
    return (
      <div className="customize-section">
        <div>
          <input
            id="customize"
            type="checkbox"
            value={customize}
            onChange={onChangeCustomize}
          />
          <label htmlFor="customize">CUSTOMIZE</label>
        </div>
        <p>IDEAL FOR</p>
        {renderSingleFilter()}
        <p>OCCASION</p>
        {renderSingleFilter()}
        <p>WORK</p>
        {renderSingleFilter()}
        <p>FABRIC</p>
        {renderSingleFilter()}
        <p>SEGMENT</p>
        {renderSingleFilter()}
        <p>SUITABLE FOR</p>
        {renderSingleFilter()}
        <p>RAW MATERIALS</p>
        {renderSingleFilter()}
        <p>PATTERNS</p>
        {renderSingleFilter()}
      </div>
    );
  };

  const renderProducts = () => {
    return (
      <ul className="products-container">
        {products.map((product) => (
          <Product details={product} key={product.id} />
        ))}
      </ul>
    );
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  //   console.log(products);
  return (
    <div>
      <div>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, earum
          dolorum voluptates commodi neque at recusandae tempore porro eaque
          numquam!
        </p>
      </div>

      {renderTopFilterSection()}
      <div className="bottom-products-and-sidebar">
        {showCustomize ? renderCostomizeSection() : null}
        {renderProducts()}
      </div>
    </div>
  );
};

export default Home;
