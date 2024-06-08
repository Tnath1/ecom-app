import React from "react";
import "../components/css/featured.css";
import Feat from "../components/Feat";
import featOne from "./imgcomponent/feat-one.png";
import featTwo from "./imgcomponent/feat-two.png";
import featThree from "./imgcomponent/feat-three.png";

const Featured = () => {
  return (
    <div>
      <div className="feat-txt-container">
        <div>
          <h5>Practice Advice</h5>
          <h2>Featured Posts</h2>
        </div>
      </div>
      <div className="feature-body">
        <Feat imgSrc={featOne} altText="featOne" />
        <Feat imgSrc={featTwo} altText="featOne" />
        <Feat imgSrc={featThree} altText="featOne" />
      </div>
    </div>
  );
};

export default Featured;
