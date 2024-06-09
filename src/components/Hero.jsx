import React from "react";


import "./css/Hero.css";
import BestSellerHeading from "./BestSellerHeading";

const Hero = () => {

  return (
    <>
     
      <div className="herro">
        <div className="grid-container">
          <div className="item item1">
            <p>5 Items</p>
            <h2>Furniture</h2>
            <a href="#">Read More</a>
          </div>
          <div className="item item2">
            <p>5 Items</p>
            <h4>Furniture</h4>
            <a href="#">Read More</a>
          </div>
          <div className="item item3">
            <p>5 Items</p>
            <h4>Furniture</h4>
            <a href="#">Read More</a>
          </div>
          <div className="item item4">
            <p>5 Items</p>
            <h4>Furniture</h4>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <BestSellerHeading h2Text="BESTSELLER PRODUCTS" />
    </>
  );
};

export default Hero;
