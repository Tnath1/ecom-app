import React from "react";
import "./css/bestSheading.css";

const BestSellerHeading = ({ h2Text }) => {
  return (
    <div className="product-header">
      <div>
        <h3 className="h3-featured">Featured Products</h3>
        <h2 className="h2-featured">{h2Text}</h2>
        <p className="p-featured">
          Problems trying to resolve the conflict between
        </p>
      </div>
    </div>
  );
};

export default BestSellerHeading;
