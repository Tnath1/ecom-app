import React from "react";
import featOne from "./imgcomponent/feat-one.png"
import { ImAlarm } from "react-icons/im";

const Feat = () => {
  return (
    <div>
      <div className="feat-box">
      <img className="featimg" src={featOne} alt="featOne" />
        <p className="overimg">NEW</p>
        <div className="feat-txt">
          <div>
            <p>Google</p>
            <p>Trending</p>
            <p>New</p>
          </div>
          <h5>Loudest à la Madison #1 (L'integral)</h5>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div>
            <div>
              <ImAlarm />
              <p>22 April 2021</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>10 comments</p>
            </div>
          </div>
          <p>Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default Feat;
