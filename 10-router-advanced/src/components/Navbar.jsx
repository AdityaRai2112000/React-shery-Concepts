import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex py-4 px-8 bg-cyan-800 justify-between">
        <h2 className="text-xl font-bold">Sheriyians</h2>
        <div className="flex gap-8">
          <Link className="text-l font-bold" to="/">
            Home
          </Link>
          <Link className="text-l font-bold" to="/about">
            About
          </Link>
          <Link className="text-l font-bold" to="/courses">
            Courses
          </Link>
          <Link className="text-l font-bold" to="/product">
            Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
