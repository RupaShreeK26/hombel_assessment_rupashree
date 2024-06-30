import React from "react";
import '../css/Home.css';
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="home-container">
              <h1>Welcome to Our Product Store</h1>
              <p>
                  Discover our wide range of products, carefully curated to meet your needs.
                  You can browse through our product list or add new products to our collection.
              </p>
              <div className="button-container">
                  <Link to="/items" className="list_button">Product List</Link>
                  <Link to="/create" className="create_button">Add Product</Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
