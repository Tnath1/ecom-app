import React from "react";
// import featOne from "./imgcomponent/feat-one.png";
import { ImAlarm } from "react-icons/im";
import featComments from "./imgcomponent/feat-comments.png";
import { IoIosArrowForward } from "react-icons/io";

const Feat = ({ imgSrc, altText }) => {
  return (
    <div>
      <div className="feat-box">
        <img className="featimg" src={imgSrc} alt={altText}/>
        <p className="overimg">NEW</p>
        <div className="feat-txt">
          <div className="feat-link">
            <p className="firstp-feat">Google</p>
            <p>Trending</p>
            <p>New</p>
          </div>
          <h5>Loudest à la Madison #1 (L'integral)</h5>
          <p className="txt">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="date-comment">
            <div className="date">
              <ImAlarm className="feat-icon" />
              <p>22 April 2021</p>
            </div>
            <div className="comment">
              <img src={featComments} alt="featComments" />
              <p>10 comments</p>
            </div>
          </div>
        <div className="learnmore">
        <div className="learnmore-feat">
            <p>Learn More</p>
            <IoIosArrowForward className="feat-icon" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Feat;
