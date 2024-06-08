import React from "react";
import BestSellerHeading from "./BestSellerHeading";
import iconOne from "../components/componenticon/service-one.png";
import iconTwo from "../components/componenticon/service-two.png";
import iconThree from "../components/componenticon/service-three.png";
import "./css/service.css";

const Services = () => {
  return (
    <div>
      <BestSellerHeading h2Text="THE BEST SERVICES" />
      <div className="service-container">
        <div className="service-boxes">
          <img
            src={iconOne}
            alt="iconOne"
            style={{
              width: "72px",
              height: "72px",
            }}
          />
          <h4 className="h4-service">Easy Wins</h4>
          <p className="p-service">Get your best looking smile now!</p>
        </div>
        <div className="service-boxes">
          <img
            src={iconTwo}
            alt="iconOne"
            style={{
              width: "72px",
              height: "72px",
            }}
          />
          <h4 className="h4-service">Concrete</h4>
          <p className="p-service">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div className="service-boxes">
          <img
            src={iconThree}
            alt="iconOne"
            style={{
              width: "72px",
              height: "72px",
            }}
          />
          <h4 className="h4-service">Concrete</h4>
          <p className="p-service">Get your best looking smile now!</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
