import React from 'react';
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyApp</h1>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/items">Products</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;