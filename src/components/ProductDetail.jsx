import "./css/productDetails.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BestSeller from "./BestSeller";
import aws from "../components/componenticon/aws-icon.png";
import hooli from "../components/componenticon/hooli-icon.png";
import iya from "../components/componenticon/lya-icon.png";
import random from "../components/componenticon/random-icon.png";
import strip from "../components/componenticon/strip-icon.png";
import filledStar from "../components/imgcomponent/filled-star.png";
import emptyStar from "../components/imgcomponent/empty-star.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCartDash } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.items);
  const product = products.find((product) => product.id === parseInt(id));

  if (!product)
    return (
      <div>
        <div className="p-not-product-container">
          <p className="not-product">
            Please select from the products below{" "}
            <span className="warning">⚠⚠</span>
          </p>
        </div>
        <BestSeller />
      </div>
    );

  return (
    <div>
      <div className="background-pd-details">
        <div className="p-details-container-main">
          <div className="p-details-container">
            <div className="img-prd-container">
              <div>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={{ maxWidth: "400px", height: "400px" }}
                />
              </div>
              <div className="smaller-img">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={{ width: "70px", height: "70px" }}
                />
              </div>
            </div>
            <div className="inner-txt-container">
              <div className="inner-txt">
                <h1 className="product-detail-title">{product.title}</h1>
                <div className="reviews-star-container">
                  <div>
                    <img
                      src={filledStar}
                      alt="filledStar"
                      style={{ width: "18px", height: "18px" }}
                    />
                    <img
                      src={filledStar}
                      alt="filledStar"
                      style={{ width: "18px", height: "18px" }}
                    />
                    <img
                      src={filledStar}
                      alt="filledStar"
                      style={{ width: "18px", height: "18px" }}
                    />
                    <img
                      src={filledStar}
                      alt="filledStar"
                      style={{ width: "18px", height: "18px" }}
                    />
                    <img
                      src={emptyStar}
                      alt="emptyStar"
                      style={{ width: "18px", height: "18px" }}
                    />
                  </div>
                  <p className="reviews">Reviews: {product.reviews.length}</p>
                </div>

                <p className="product-price">Price: ${product.price}</p>
                <p className="availability">
                  Availability:
                  <span className="availability-status">
                    {product.availabilityStatus}
                  </span>
                </p>
                {/* <p>Rating: {product.rating}</p> */}
                <div className="hrule">
                  <hr className="rule-line" />
                </div>
                <div className="circle-detail-container">
                  <div className="circle circle-one"></div>
                  <div className="circle circle-two"></div>
                  <div className="circle circle-three"></div>
                  <div className="circle circle-four"></div>
                </div>

                <div className="prd-detail-icon-container">
                  <div className="pd-btn">
                    <button className="select">Select Options</button>
                  </div>
                  <div className="product-icon-main-containe">
                    <IoMdHeartEmpty />
                    <BsCartDash />
                    <IoEyeSharp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="best-seller-product-container">
        <p className="para-bspc">BESTSELLER PRODUCTS</p>
        <BestSeller />

        <div className="strip-more-container">
          <div className="strip-mmm">
            <img
              src={aws}
              alt="aws"
              style={{ width: "146px", height: "59px" }}
            />
          </div>
          <div className="strip-mmm">
            <img
              src={hooli}
              alt="aws"
              style={{ width: "146px", height: "59px" }}
            />
          </div>
          <div className="strip-mmm">
            <img
              src={iya}
              alt="aws"
              style={{ width: "146px", height: "59px" }}
            />
          </div>
          <div className="strip-mmm">
            <img
              src={random}
              alt="aws"
              style={{ width: "146px", height: "59px" }}
            />
          </div>
          <div className="strip-mmm">
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
