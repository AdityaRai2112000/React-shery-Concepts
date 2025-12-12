import React from "react";
import { Link } from "react-router-dom";

const Men = () => {
  return (
    <div className="flex justify-center gap-10 py-4">
      <Link className="text-xl font-semibold" to={"/product"}>
        Product page
      </Link>
      <h1>Men's Collections</h1>
    </div>
  );
};

export default Men;
