import React, { useState, useEffect } from "react";
import axios from "axios";

const initialFilters = {
  name: "",
};

const Home = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

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
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [search]);

  console.log(categories);
  return (
    <div>
      <h1>DISCOVER OUR PRODUCTS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, earum
        dolorum voluptates commodi neque at recusandae tempore porro eaque
        numquam!
      </p>
    </div>
  );
};

export default Home;
