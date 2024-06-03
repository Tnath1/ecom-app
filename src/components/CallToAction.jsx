import React from "react";
import "../components/css/callToAction.css";

const CallToAction = () => {
  return (
    <>
      <div className="txt-wapper">
        <div className=" txt-containe">
          <div>
            <div className="flex">
              <h5>Designing Better Experience</h5>
            </div>
            <div className="flex">
              <h3>Problems trying to resolve the conflict between </h3>
            </div>

            <div className="flex">
              <h6>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics:
              </h6>
            </div>
            <div className="flex">
              <p className="num">$16.48</p>
            </div>
            <div className="flex">
              <button className="action-btn">ADD YOUR CALL TO ACTION</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
