import React from "react";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h3>
        <Link to={"/"}>Sheriyians</Link>
      </h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contacts</Link>
        <Link to="/product">Products</Link>
      </div>
    </div>
  );
};

export default Navbar;
