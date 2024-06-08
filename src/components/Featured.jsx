import React from "react";
import "../components/css/featured.css";
import Feat from "../components/Feat";

const Featured = () => {
  return (
    <div>
      <div className="feat-txt-container">
        <div>
          {" "}
          <h5>Practice Advice</h5>
          <h2>Featured Posts</h2>
        </div>
      </div>
      <div className="feature-body">
        <Feat />
      </div>
    </div>
  );
};

export default Featured;
