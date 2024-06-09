import "./css/productDetails.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BestSeller from "./BestSeller";
import aws from "../components/componenticon/aws-icon.png"
import hooli from "../components/componenticon/hooli-icon.png"
import iya from "../components/componenticon/lya-icon.png"
import random from "../components/componenticon/random-icon.png"
import strip from "../components/componenticon/strip-icon.png"

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.items);
  const product = products.find((product) => product.id === parseInt(id));

  if (!product)
    return (
      <div>
        <div>
          <p>Please select from the products Below</p>
        </div>
        <BestSeller />
      </div>
    );

  return (
    <div>
      <div>
        <h1>{product.title}</h1>
        <img
          src={product.images[0]}
          alt={product.title}
          style={{ width: "150px", height: "180px" }}
        />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
      </div>
      <div className="best-seller-product-container">
        <p className="para-bspc">BESTSELLER PRODUCTS</p>
        <BestSeller />

        <div className="strip-more-container">
          <div className="strip-mmm" >
            <img
              src={aws}
              alt="aws"
              style={{ width: "146px", height: "59px" }}
            />
          </div>
          <div  className="strip-mmm" >
            <img
              src={hooli}
              alt="aws"
              style={{ width: "146px", height: "59px" }}
            />
          </div>
          <div  className="strip-mmm" >
            <img
              src={iya}
              alt="aws"
              style={{ width: "146px", height: "59px" }}
            />
          </div>
          <div  className="strip-mmm" >
            <img
              src={random}
              alt="aws"
              style={{ width: "146px", height: "59px" }}
            />
          </div>
          <div  className="strip-mmm" >
            <img
              src={strip}
              alt="aws"
              style={{ width: "146px", height: "59px" }}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
