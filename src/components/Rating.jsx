import React from "react";
import "./css/rating.css";
import imgone from "../components/imgcomponent/user.1.png";
import filledStar from "../components/imgcomponent/filled-star.png";
import emptyStar from "../components/imgcomponent/empty-star.png";
import imgGridTwo from "../components/imgcomponent/unsplash_two.png";
import imgGridThree from "../components/imgcomponent/unsplash_three.png";
import imgGridFour from "../components/imgcomponent/unsplash_four.png";
import imgGridFive from "../components/imgcomponent/unsplash_five.png";
import imgGridSix from "../components/imgcomponent/unsplash_six.png";
import imgGridSeven from "../components/imgcomponent/unsplash_seven.png";
import imgGridEight from "../components/imgcomponent/unsplash_eight.png";
import imgGridNine from "../components/imgcomponent/unsplash_nine.png";
import imgGridone from "../components/imgcomponent/unsplash_one.png";

const Rating = () => {
  return (
    <>
      <div className="rating-container">
        <div className="rate-container">
          <h4>What they say about us</h4>
          <img src={imgone} alt="" style={{ width: "90px", height: "90px" }} />
          <div>
            <img
              src={filledStar}
              alt="filledStar"
              style={{ width: "22.01px", height: "22.01px" }}
            />
            <img
              src={filledStar}
              alt="filledStar"
              style={{ width: "22.01px", height: "22.01px" }}
            />
            <img
              src={filledStar}
              alt="filledStar"
              style={{ width: "22.01px", height: "22.01px" }}
            />
            <img
              src={filledStar}
              alt="filledStar"
              style={{ width: "22.01px", height: "22.01px" }}
            />
            <img
              src={emptyStar}
              alt="emptyStar"
              style={{ width: "22.01px", height: "22.01px" }}
            />
          </div>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <p>Regina Miles</p>
          <h5> Designer</h5>
        </div>
        <div className="picture-container">
          <img
            src={imgGridone}
            alt=""
            style={{ width: "142.77px", height: "142.77px" }}
          />
          <img
            src={imgGridTwo}
            alt=""
            style={{ width: "142.77px", height: "142.77px" }}
          />
          <img
            src={imgGridThree}
            alt=""
            style={{ width: "142.77px", height: "142.77px" }}
          />
          <img
            src={imgGridFour}
            alt=""
            style={{ width: "142.77px", height: "142.77px" }}
          />
          <img
            src={imgGridFive}
            alt=""
            style={{ width: "142.77px", height: "142.77px" }}
          />
          <img
            src={imgGridSix}
            alt=""
            style={{ width: "142.77px", height: "142.77px" }}
          />
          <img
            src={imgGridSeven}
            alt=""
            style={{ width: "142.77px", height: "142.77px" }}
          />
          <img
            src={imgGridEight}
            alt=""
            style={{ width: "142.77px", height: "142.77px" }}
          />
          <img
            src={imgGridNine}
            alt=""
            style={{ width: "142.77px", height: "142.77px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Rating;
