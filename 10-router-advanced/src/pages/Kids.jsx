import React from "react";
import { Link } from "react-router-dom";

const Kids = () => {
  return (
    <div className="flex justify-center gap-10 py-4">
      <Link className="text-xl font-semibold" to={"/product"}>
        Product page
      </Link>
      <h1>Kids Collections</h1>
    </div>
  );
};

export default Kids;
